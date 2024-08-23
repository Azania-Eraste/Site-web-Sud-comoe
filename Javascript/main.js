const tooltips = document.querySelectorAll('.tooltip');
const card = document.querySelectorAll('.card')

card.forEach(element => {
    element.addEventListener('onclick', )
});


function toggleMenu() {
    let menuicon = document.getElementById("hamburger-menu");
    let menucontent = document.getElementById("Header_Menu");
    menucontent.classList.toggle("show");
    menuicon.classList.toggle("open");
}

function viewArticle(params) {
    localStorage.setItem('selectedArticle', params);
    window.location.href = 'article.html';
}

function openNewPage(params) {
    window.location.href = params;
}

function article_load(params , name) {
    let container = document.getElementById(name);
   
    params.forEach(element  => {
        var obj = params;
        container.innerHTML += `
        <article class="card">
            <img src="${element.img}" alt="">
            <h2>${element.titre}</h2>
            <p>${element.text}</p>
            <button class="more" onclick="viewArticle(${JSON.stringify(obj)})"> voir plus >></button>
        </article>`;
    });
}

function principale_image_load(params) {
    
}

function redirect_load(params , name) {
    let container = document.getElementById(name);
    
    params.forEach((element , index) => {
        var obj = params[index];
        container.innerHTML += `
        <article class="card" onclick="viewArticle(${obj})">
            <img src="${element.img}" alt="">
            <h2>${element.titre}</h2>
            <p>${element.text}</p>
        </article>`;
    });
}

function showtooltip(params) {
    tooltips.forEach(element => {
        if (element.id === params) {
            let tooltip = document.getElementById(tooltips.id);
            tooltip.style.display = 'block';
            console.log('a');
        }
    });
}

var teste = [
    {
        img:"img/IMG-20240820-WA0182.jpg",
        titre:"Lorem ipsum dolor sit.",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis pariatur in dolores autem omnis, repellat eos recusandae fuga at illum aspernatur id ipsum?",
    },
    {
        img:"img/IMG-20240820-WA0183.jpg",
        titre:"Lorem ipsum dolor sit.",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis pariatur in dolores autem omnis, repellat eos recusandae fuga at illum aspernatur id ipsum?",
    },
    {
        img:"img/IMG-20240820-WA0184.jpg",
        titre:"Lorem ipsum dolor sit.",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis pariatur in dolores autem omnis, repellat eos recusandae fuga at illum aspernatur id ipsum?",
    },
]

var terr = [
    {
        img:"",
        titre:"",
        text:"",
    },
    {
        img:"",
        titre:"",
        text:"",
    },
    {
        img:"",
        titre:"",
        text:"",
    }
    
];
var Deveco = [
    {
        img:"",
        titre:"",
        text:"",
    },
    {
        img:"",
        titre:"",
        text:"",
    },
    {
        img:"",
        titre:"",
        text:"",
    }
];
var DevSocio = [
    {
        img:"",
        titre:"",
        text:"",
    },
    {
        img:"",
        titre:"",
        text:"",
    },
    {
        img:"",
        titre:"",
        text:"",
    }
];
var infra = [
    {
        img:"",
        titre:"",
        text:"",
    },
    {
        img:"",
        titre:"",
        text:"",
    },
    {
        img:"",
        titre:"",
        text:"",
    }
];
var actu = [
    {
        img:"",
        titre:"",
        text:"",
    },
    {
        img:"",
        titre:"",
        text:"",
    },
    {
        img:"",
        titre:"",
        text:"",
    }
];