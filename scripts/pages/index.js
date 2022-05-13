   async function getPhotographers() {
        // replace with the data retrieved in the json
        return fetch('/data/photographers.json')
        .then(response => response.json()
        .then(dataPhotographers => dataPhotographers.photographers))

      .catch(err => {
        throw new Error('La requete api getPhotographers a échoué : ', err)
      })
  }

        // Display once the photographers' cards in homepage 
    async function displayData(photographers) {

        const photographersSection = document.querySelector("#photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM); 
            
        });
    };

    async function init() {
        // Retrieves data from photographers
        const photographers = await getPhotographers();
        displayData(photographers);
    };
    
  init()  
  
    