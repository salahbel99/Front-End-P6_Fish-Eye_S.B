    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        return fetch('/data/photographers.json')
        .then(response => response.json().then(dataPhotographers => dataPhotographers.photographers))

      .catch(err => {
        throw new Error('La requete api getPhotographers a échoué : ', err)
      })
  }

        // et bien retourner le tableau photographers seulement une foiss
    async function displayData(photographers) {
        const photographersSection = document.querySelector("#photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
        console.log(photographers);
        displayData(photographers);
    };
    
    init();
    