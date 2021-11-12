const movieRoulette = document.getElementById('movieRoulette');
const weatherTracker = document.getElementById('weatherTracker');
const workDay = document.getElementById('workDay');
const codeQuiz = document.getElementById('codeQuiz');
const horiseon = document.getElementById('horiseon');

function openGrid1() {
    open('https://github.com/riveranelson99/p1_movie_roullete');
};

function openGrid2() {
    open('https://github.com/riveranelson99/weather_tracker');
};

function openGrid3() {
    open('https://github.com/riveranelson99/work_day_scheduler');
};

function openGrid4() {
    open('https://github.com/riveranelson99/my_code_quiz');
};

function openGrid5() {
    open('https://github.com/riveranelson99/seo_code_refactor');
};

movieRoulette.addEventListener('click', openGrid1);
weatherTracker.addEventListener('click', openGrid2);
workDay.addEventListener('click', openGrid3);
codeQuiz.addEventListener('click', openGrid4);
horiseon.addEventListener('click', openGrid5);