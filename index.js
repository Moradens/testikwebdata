const api = "https://swapi.dev/api/films";
async function getFilms() {
    const response = await fetch(api);
    if (response.ok) {
        return await response.json();
    }
    throw new Error('Failed to fetch data');
}
async function displayFilms() {
    const loadDataButton = document.getElementById('loadDataButton');
    const loadingIndicator = document.getElementById('loadingIndicator');
    loadDataButton.disabled = true;
    loadingIndicator.style.display = 'block';

        const data = await getFilms();
        if (data) {
            data.results.forEach(films => appendCard(films));
            data.results.forEach(films => appendCard1(films));
            data.results.forEach(films => appendCard2(films));
            data.results.forEach(films => appendCard3(films));
            data.results.forEach(films => appendCard4(films));
            data.results.forEach(films => appendCard5(films));
            data.results.forEach(films => appendCard6(films));
            data.results.forEach(films => appendCard7(films));
            data.results.forEach(films => appendCard8(films));
            loadingIndicator.style.display = 'none';
        }
}
function appendCard(films) {
    const card = document.createElement('div');
    card.innerText = films.title;
    const list = document.querySelector('.content');
    list.appendChild(card);
}
function appendCard1(films) {
    const card = document.createElement('div');
    card.innerText = films.episode_id;
    const list = document.querySelector('.content1');
    list.appendChild(card);
}
function appendCard2(films) {
    const card = document.createElement('div');
    card.innerText = films.director;
    const list = document.querySelector('.content2');
    list.appendChild(card);
}
function appendCard3(films) {
    const card = document.createElement('div');
    card.innerText = films.producer;
    const list = document.querySelector('.content3');
    list.appendChild(card);
}
function appendCard4(films) {
    const card = document.createElement('div');
    card.innerText = films.release_date;
    const list = document.querySelector('.content4');
    list.appendChild(card);
}
function appendCard5(films) {
    const card = document.createElement('div');
    card.innerText = films.created;
    const list = document.querySelector('.content5');
    list.appendChild(card);
}
function appendCard6(films) {
    const card = document.createElement('div');
    card.innerText = films.edited;
    const list = document.querySelector('.content6');
    list.appendChild(card);
}
function appendCard7(films) {
    const card = document.createElement('div');
    card.innerText = films.opening_crawl;
    const list = document.querySelector('.content7');
    list.appendChild(card);
}
function appendCard8(films) {
    const card = document.createElement('div');
    card.innerText = films.characters;
    const list = document.querySelector('.content8');
    list.appendChild(card);
}
document.getElementById('loadDataButton').addEventListener('click', displayFilms);