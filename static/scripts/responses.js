let greetresponse=['Thats good to hear, How may i help',
                   'Nice, how can i help',
                   'Amazing, how can i help'];
let greetresponseRandom=greetresponse[Math.floor(Math.random()*greetresponse.length)];
let sickness=['i am sick','not feeling well','not feeling fine','im sick','am sick','not fine','sick'];
let sicknessR=sickness[Math.floor(Math.random()*sickness.length)];
function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    if (input ==sickness){
        return "what are you feeling";
    }

    // Simple responses
    if (input === "hello") {
        return "Hello there!";
    }else if (input === "fine"||input ==="good") {
        return greetresponseRandom;
    }else if (input === "goodbye") {
        return "Talk to you later!";
    }else {
        return "Try asking something else!";
    }

    
}