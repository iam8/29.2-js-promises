// Ioana A Mititean
// 29.2 - JS Promises

let number_trivia;

$.getJSON("http://numbersapi.com/42?json", (response) => {
        number_trivia = response;
        console.log("done", number_trivia)
    }
);

console.log("Waiting");
