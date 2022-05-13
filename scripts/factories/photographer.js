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
        const p1 = document.createElement( 'p' );
        p1.textContent = country;
        const p = document.createElement( 'p' );
        p.textContent = city;
        const p2 = document.createElement( 'p' );
        p2.textContent = tagline;
        const p3 = document.createElement( 'p' );
        p3.textContent = price;

        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p);
        article.appendChild(p2);
        article.appendChild(p3);

        return (article);
    }
    return { name, picture, country, city, price, tagline, getUserCardDOM }
}