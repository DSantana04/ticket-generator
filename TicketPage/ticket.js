let name = JSON.parse(localStorage.getItem('userData')).name;

const nome = document.getElementById('nome-titulo').textContent = name;
const email = document.getElementById('email-titulo').textContent = JSON.parse(localStorage.getItem('userData')).email;

const avatar = document.getElementById('avatar-ticket');
avatar.src = localStorage.getItem('image'); // Retrieve avatar URL

const githubUsername = JSON.parse(localStorage.getItem('userData')).github; // Retrieve GitHub username
const github = document.getElementById('github-ticket');
github.textContent = githubUsername; // Set GitHub username

const icon = document.createElement('img');
icon.src = '../Images/icon-github.svg'; // Corrected path for GitHub icon
icon.width = '20';
icon.height = '20';
github.appendChild(icon); // Append icon next to GitHub username


const nome_ticket = document.getElementById('name-ticket').innerHTML = name;
if (localStorage.getItem('ticket') == null || localStorage.getItem('ticket') == undefined) {
    const random_ticket_number = Math.floor(Math.random() * 1000000);
    localStorage.setItem('ticket', random_ticket_number);
}
let ticket_number = document.getElementById('ticket-number').innerHTML = "#" + localStorage.getItem('ticket');
