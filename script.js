// FOR DOCUMENTATION 
// https://api.nasa.gov/
// Nasa Api for Mars Rover Photos

// Starter Code

const solCount = 1;
const apiKey = config.MY_KEY;

const  apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solCount}&api_key=${apiKey}`;
let resultsArray = [];
// Get 10 images from nasa api
async function getNasaPictures(){
    try {
        const response = await fetch(apiUrl);
        resultsArray = await response.json();
        for(date of resultsArray.photos){
            console.log(date);
        }
    } catch (error) {
        
    }
}

getNasaPictures()
