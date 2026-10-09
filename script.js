const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
menuToggle?.addEventListener('click', () => {
  const open = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? 'Close' : 'Menu';
});
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  siteNav.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) menuToggle.textContent = 'Menu';
}));

const questions = [
  { text: 'How has your energy felt today?', answers: ['I have a little in the tank', 'I feel okay, just busy', 'I am running on empty', 'It keeps changing'], icons: ['↗', '→', '↓', '∿'] },
  { text: 'What would make the next hour kinder?', answers: ['A proper drink or meal', 'A short break from screens', 'Talking to someone', 'Finishing one small task'], icons: ['◌', '◒', '♡', '✦'] },
  { text: 'Where do you feel pressure most?', answers: ['Assignments or exams', 'Money or responsibilities', 'Relationships or loneliness', 'I am not sure yet'], icons: ['▱', '◌', '♡', '?'] },
  { text: 'What kind of next step feels possible?', answers: ['Rest without guilt', 'Ask for support', 'Make a simple plan', 'Just breathe for now'], icons: ['☾', '↗', '☷', '∿'] }
];
const quiz = { index: 0, answers: [] };
const questionText = document.getElementById('question-text');
const answerList = document.getElementById('answer-list');
const quizStep = document.getElementById('quiz-step');
const quizBar = document.getElementById('quiz-bar');
const quizResult = document.getElementById('quiz-result');
function renderQuestion() {
  const question = questions[quiz.index];
  questionText.textContent = question.text;
  quizStep.textContent = `Question ${quiz.index + 1} of ${questions.length}`;
  quizBar.style.width = `${((quiz.index + 1) / questions.length) * 100}%`;
  answerList.innerHTML = question.answers.map((answer, i) => `<button class="answer" type="button" data-answer="${i}">${answer}<span>${question.icons[i]}</span></button>`).join('');
  answerList.querySelectorAll('.answer').forEach((button) => button.addEventListener('click', () => {
    quiz.answers.push(Number(button.dataset.answer));
    if (quiz.index < questions.length - 1) { quiz.index += 1; renderQuestion(); }
    else showResult();
  }));
}
function showResult() {
  const last = quiz.answers[quiz.answers.length - 1];
  const messages = [
    ['A gentle reset', 'Start with water, food, and a few minutes away from the screen. Tiny care is still care.'],
    ['Make one connection', 'Send a message to someone you trust or connect with campus support. You do not have to explain everything perfectly.'],
    ['Make the next step smaller', 'Write one thing that must happen today and let the rest wait. Progress can be quiet.'],
    ['Stay with your breath', 'Try the one-minute breathing exercise below. If things feel unsafe, use the support numbers on this page now.']
  ];
  const result = messages[last] || messages[0];
  quizResult.hidden = false;
  quizResult.innerHTML = `<h4>${result[0]}</h4><p>${result[1]}</p><button class="quiz-restart" type="button">Start again</button>`;
  questionText.hidden = true; answerList.hidden = true; quizStep.textContent = 'Your next kind step'; quizBar.style.width = '100%';
  quizResult.querySelector('button').addEventListener('click', () => { quiz.index = 0; quiz.answers = []; quizResult.hidden = true; questionText.hidden = false; answerList.hidden = false; renderQuestion(); });
}
if (questionText) renderQuestion();

const breathingStart = document.getElementById('breathing-start');
const breathingCircle = document.getElementById('breathing-circle');
const breathingLabel = document.getElementById('breathing-label');
const breathingStatus = document.getElementById('breathing-status');
const breathingProgress = document.getElementById('breathing-progress');
let breathingTimer;
breathingStart?.addEventListener('click', () => {
  clearInterval(breathingTimer);
  let elapsed = 0; const total = 60;
  breathingStart.disabled = true; breathingStart.style.opacity = '.6';
  breathingStatus.textContent = 'Follow the circle. Inhale as it grows, exhale as it returns.';
  function tick() {
    const cycle = elapsed % 8; const inhale = cycle < 4;
    breathingCircle.classList.toggle('active', inhale);
    breathingLabel.textContent = inhale ? 'inhale' : 'exhale';
    breathingProgress.style.width = `${(elapsed / total) * 100}%`;
    if (elapsed >= total) { clearInterval(breathingTimer); breathingLabel.textContent = 'well done'; breathingStatus.textContent = 'You made space for yourself. Carry that softness forward.'; breathingStart.disabled = false; breathingStart.style.opacity = '1'; breathingProgress.style.width = '100%'; return; }
    elapsed += 1;
  }
  tick(); breathingTimer = setInterval(tick, 1000);
});

document.querySelectorAll('.filter-button').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('active'));
  button.classList.add('active'); const filter = button.dataset.filter;
  document.querySelectorAll('.resource-item').forEach((item) => item.classList.toggle('is-hidden', filter !== 'all' && item.dataset.category !== filter));
}));

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
document.getElementById('current-year').textContent = new Date().getFullYear();
