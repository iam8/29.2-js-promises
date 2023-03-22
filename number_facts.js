// Ioana A Mititean
// 29.2 - JS Promises


// Part 1-1
let baseUrl = "http://numbersapi.com";
let targetNum = 7;

let numberTriviaPromise = axios.get(`${baseUrl}/${targetNum}?json`);

numberTriviaPromise
    .then((data) => {
        $("#fav-num-fact").text(data.data.text);
    })
    .catch((error) => console.log(error))
