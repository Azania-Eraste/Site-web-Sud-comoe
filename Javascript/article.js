document.addEventListener("DOMContentLoaded", () => {
    const articleContent = document.getElementById('article-content');
    const article = JSON.parse(localStorage.getItem('selectedArticle'));

    if (article) {
        articleContent.innerHTML = `
            <h1>${article.title}</h1>
            <div class="container" id="content">
            <img src="${article.img}" alt="${article.title}" />
            <p>${article.text}</p>
            </div>
        `;
    } else {
        articleContent.innerHTML = '<p>Aucun article sélectionné.</p>';
    }
});