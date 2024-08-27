// const Nav_elt1 = document.querySelector('#Territoire_li');
// const Nav_elt2 = document.querySelector('#Developement_econe_li');
// const Nav_elt3 = document.querySelector('#Developement_ecol_li');
// const Nav_elt4 = document.querySelector('#Infracstructure_li');
// const tooltip1 = document.querySelector('#tooltip-1');
// const tooltip2 = document.querySelector('#tooltip-2');
// const tooltip3 = document.querySelector('#tooltip-3');
// const tooltip4 = document.querySelector('#tooltip-4');


function showtooltip(params) {
    const tooltip = document.getElementById(params);   
    tooltip.style.display = 'flex';
    tooltip.style.justifyContent = 'space-around'
}

function hidetooltip(params) {
    const tooltip = document.getElementById(params); 
    const menu = document.getElementById('menu');
    tooltip.style.display = 'none';
}

// Fonction pour basculer l'affichage du menu
function toggleMenu() {
    let menuicon = document.getElementById("hamburger-menu");
    let menucontent = document.getElementById("Header_Menu");
    menucontent.classList.toggle("show");
    menuicon.classList.toggle("open");
}

// Fonction pour afficher un article spécifique
function viewArticle(params) {
    localStorage.setItem('selectedArticle', JSON.stringify(params));
    window.location.href = 'article.html';
}

// Fonction pour ouvrir une nouvelle page
function openNewPage(params) {
    window.location.href = params;
}

// Fonction pour charger des articles dynamiquement
function article_load(params, name) {
    let container = document.getElementById(name);
   
    params.forEach(element => {
        container.innerHTML += `
        <article class="card">
            <img src="${element.img}" alt="">
            <h2>${element.titre}</h2>
            <p>${element.text}</p>
            <button class="more" onclick='viewArticle(${JSON.stringify(element)})'>voir plus >></button>
        </article>`;
    });
}

// Fonction pour charger l'image principale (fonction à compléter)
function principale_image_load(name, elt) {
    let container = document.getElementById(name);
    container.innerHTML = `
            <img src="${elt.img}" alt="" onclick='viewArticle(${JSON.stringify(elt)})'>
            <h2>Le president</h2>
            <H2 id='name'>${elt.titre}</H2>`
            ;
}

// Fonction pour rediriger après avoir chargé des articles
function redirect_load(params, name) {
    let container = document.getElementById(name);
    
    params.forEach(element => {
        container.innerHTML += `
        <article class="card" onclick='viewArticle(${JSON.stringify(element)})'>
            <img src="${element.img}" alt="">
            <h2>${element.titre}</h2>
            <p>${element.text}</p>
        </article>`;
    });
}


// Exemple de données à utiliser pour les fonctions de chargement
var teste = [
    {
        img: "img/IMG-20240820-WA0182.jpg",
        titre: "Lorem ipsum dolor sit.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis pariatur in dolores autem omnis, repellat eos recusandae fuga at illum aspernatur id ipsum?",
    },
    {
        img: "img/IMG-20240820-WA0183.jpg",
        titre: "Lorem ipsum dolor sit.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis pariatur in dolores autem omnis, repellat eos recusandae fuga at illum aspernatur id ipsum?",
    },
    {
        img: "img/IMG-20240820-WA0184.jpg",
        titre: "Lorem ipsum dolor sit.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis pariatur in dolores autem omnis, repellat eos recusandae fuga at illum aspernatur id ipsum?",
    },
];

// Autres exemples de données
var terr = [
    {
        img: "img/IMG-20240820-WA0184.jpg",
        titre: "Lorem ipsum dolor sit.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis pariatur in dolores autem omnis, repellat eos recusandae fuga at illum aspernatur id ipsum?",
    },
]; // Remplir avec des données réelles
var Deveco = [
    {
        img: "img/IMG-20240820-WA0184.jpg",
        titre: "Lorem ipsum dolor sit.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis pariatur in dolores autem omnis, repellat eos recusandae fuga at illum aspernatur id ipsum?",
    },
];
var DevSocio = [
    {
        img: "img/IMG-20240820-WA0184.jpg",
        titre: "Lorem ipsum dolor sit.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis pariatur in dolores autem omnis, repellat eos recusandae fuga at illum aspernatur id ipsum?",
    },
];
var infra = [
    {
        img: "img/IMG-20240820-WA0184.jpg",
        titre: "Lorem ipsum dolor sit.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis pariatur in dolores autem omnis, repellat eos recusandae fuga at illum aspernatur id ipsum?",
    },
];
var actu = [
    {
        img: "img/IMG-20240820-WA0184.jpg",
        titre: "Lorem ipsum dolor sit.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis pariatur in dolores autem omnis, repellat eos recusandae fuga at illum aspernatur id ipsum?",
    },
];


var bio = {
    img: "img/image.png",
    titre: "M. Aka Aouélé",

}