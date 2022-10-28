import { RootObject, Suggestion } from "../interfaces/interface";

export default async function getAddressPrompt(query:string) {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "aa133f8f40b87d6bb6ea84f787f5f8d54185cdbd";

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({ query: query })
    }

    return fetch(url, options)
        .then(response => response.json())
        .catch(error => console.log("error", error));
}