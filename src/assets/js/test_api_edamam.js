let searchButton = document.querySelector("#boutonRecherche");

searchButton.addEventListener("click", ()=>{
    console.log("Recherche lancée ! ");
    requeteApi();
})

async function requeteApi(){
    let APP_ID = "4c9755a7";
    let APP_KEY = "4f1e59bb1fddf09974a0bb3b33de90d8";

    let reponse = await fetch('https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=pizza');
    console.log(response);
    let data = await response.json();
    console.log(data);
    //afficherData(data);
}

function afficherData(data){}