//Mettre le code JavaScript lié à la page photographer.html
function photographerFactory(data) {
    const { name, portrait, country, city, tagline, price,  } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement( 'location' );
        location.textContent = `${city}, ${country}`;
        const p2 = document.createElement( 'p' );
        p2.textContent = tagline;
        const p3 = document.createElement( 'p' );
        p3.textContent = price + ' € / jour';

        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(p2);
        article.appendChild(p3);

        return (article);
    }
    return { name, picture, country, city, price, tagline, getUserCardDOM }
}