// Modèle de données pour un tweet (personnalisation des données récupérées)
export interface Tweet {
    id:number,              // id tweet
    nom: string;            // user.name
    arobase: string;        // user.screen_name
    photoDeProfil: string;  // user.profile_image_url
    texte: string;          // text
    favs: number;           //favorite_count
    rts: number;            // retweet_count
}