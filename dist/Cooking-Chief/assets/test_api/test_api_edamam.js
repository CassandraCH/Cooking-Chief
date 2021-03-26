let searchButton = document.querySelector("#btnEdamam");


const fetchButton = document.querySelector('ul');
const postTemplate = document.querySelector('.single-post');
const listElement = document.querySelector('.posts');

searchButton.addEventListener("click", fetchPosts);

async function fetchPosts() {
    console.log("Recherche lancée ! ");
    let responseData = await requeteApi(); // J'appelle la méthode requeteApi()
    // Ma variable sera initialisé une fois que la requêtes est terminée

    /** Jeter un oeil aux informations renvoyées par la requête pour voir celles
     * qui vous intéresse
     */
    console.log(responseData );
    console.log(responseData.hits[0] );
    console.log(responseData.hits[0].recipe.label );
    console.log(responseData.hits[0].recipe.cuisineType );
    console.log(responseData.hits[0].recipe.healthLabels );
    console.log(responseData.hits[0].recipe.image );


    const listOfPosts = responseData.hits;
    for( const post of listOfPosts ){
        // importNode() crée une copie d'un noeud  afin qu'il puisse être insérer dans le document actuel
        // Dans ce cas présent je crée une copie de la balise <template></template> et de son contenus ( qui ne sont pas visible )
        // qui servent de modèle et qui seront injecter dans le dom
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.recipe.label; // selecteur basique je selectionne le h2 et je lui met le label de la recette
        postEl.querySelector('p').textContent = post.recipe.cuisineType;
        postEl.querySelector('img').src = post.recipe.image; // je récupère l'image et je lui ajoute en src celle de la pizza
        listElement.append(postEl); // J'ajoute le noeud au dom
    }

}


async function requeteApi(){
    // let APP_ID = "4c9755a7";
    // let APP_KEY = "4f1e59bb1fddf09974a0bb3b33de90d8";

    // Petite modification pour travailler sur le fichier json plutôt que l'api
    // rien ne change fetch travaille avec le json de la même manière qu'avec une url classique ;)


    // return fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=pizza`)
   return fetch(`pizza.json`).then(response => {
        // Si ma réponse est valide autrement dit renvoi 200 la requêtes est transformée en json et retourner
        if ( response.status >= 200 && response.status < 300 ){
            return response.json();
        }else {
            // Sinon on lance une erreur
            return  new Error('Erreur durant le chargement - coté serveur');
        }
    })
    .catch(error => {
        alert(error);
        throw new Error('Erreur durant le chargement');
    });

}