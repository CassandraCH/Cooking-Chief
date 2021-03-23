export interface Tweet {
    id:number,              // id tweet
    nom: string;            // user.name
    arobase: string;        // user.screen_name
    photoDeProfil: string;  // user.profile_image_url
    texte: string;          // text
    date: string;           // created_at  (à voir si on l'utilise)
    favs: number;           //favorite_count
    rts: number;            // retweet_count
}