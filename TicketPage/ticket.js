let name = JSON.parse(localStorage.getItem('userData')).name;

const nome = document.getElementById('nome-info').textContent = name;
const email = document.getElementById('email-info').textContent = JSON.parse(localStorage.getItem('userData')).email;

const avatar = document.getElementById('avatar-output');
avatar.src = localStorage.getItem('image');

const githubUsername = JSON.parse(localStorage.getItem('userData')).github;
const github = document.getElementById('github-output');
github.textContent = githubUsername;

const icon = document.createElement('img');
icon.src = '../Images/icon-github.svg';
icon.width = '30';
icon.height = '30';
github.appendChild(icon); //Adicionar icone github junto ao username


const nome_ticket = document.getElementById('nome-output').innerHTML = name;