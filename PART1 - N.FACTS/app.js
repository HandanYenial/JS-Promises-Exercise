//Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. 
//(Make sure you get back JSON by including the json query key,
// specific to this API. Details.

let myFavoriteNumber = 7;
let baseURL = "http://numbersapi.com";

$.getJSON(`${baseURL}/${myFavoriteNumber}?json`) //http://numbersapi.com/7?json 
.then(data =>{console.log(data)});

//Figure out how to get data on multiple numbers in a single request. 
//Make that request and when you get the data back, put all of the number facts on the page.

//since it mentions "in a single quest" we can use an array to pass the data at once:
let multipleNumbers = [1,2,3];
$.getJSON(`${baseURL}/${multipleNumbers}?json`)
.then(data => {console.log(data)});

//Use the API to get 4 facts on your favorite number. 
//Once you have them all, put them on the page. 
//It’s okay if some of the facts are repeats.

Promise.all(
    Array.from({ length: 4}, () => {    
        return $.getJSON(`${baseURL}/${myFavoriteNumber}?json`);
    })
).then(facts => {
    facts.forEach( data => $("body").append(`<p>${data.text}</p>`))
});

//The Array.from() static method creates a new, shallow-copied Array instance
// from an array-like or iterable object.

//The forEach() method executes a provided function once for each array element.
//Array.forEach(element => console.log(element));