//déclaration des variables liées au DOM

let quote = document.getElementById("quote");
let button = document.getElementById("button"); 
let author = document.getElementById("author");


console.log(quote);
console.log(button);

//déclaration du tableau de citations

let facts =
    [
        "Chuck Norris reads the dictionary every night before he goes to sleep.",

        "As a kid, Chuck Norris made his dad go to his room.",

        "Chuck Norris kicked a guy in the balls and they turned into dry ice.",

        "There is a bridge in Austria named the Chuck Norris Bridge. So far, 256 people have died on it.",

        "Death once had a near-Chuck-Norris experience.",

        "Chuck Norris can kill two stones with one bird.",

        "Chuck Norris can strangle you with a cordless phone.",
        
        "When the Boogeyman goes to sleep every night he checks his closet for Chuck Norris.",

        "Chuck Norris can speak braille.",

        "Chuck Norris's computer has no \"backspace\" button, Chuck Norris doesn't make mistakes.",

        "Chuck Norris is the reason Waldo is hiding.", 

        "Chuck Norris sleeps with a pillow under his gun.",

        "Some kids piss their name in the snow. Chuck Norris can piss his name into concrete."
    ];    

console.log(facts);


//gestion de la sélection aléatoire des citations

function randomQuote() //parcourir aléatoirement le tableau
{
    let random = Math.floor(Math.random() * facts.length);
    quote.textContent = facts[random];
}


//gestion de la sélection aléatoire des couleurs

function randomColor()
{

        function randomComponentColor()
    {
        let color = Math.floor(Math.random() * 256);
        return color
    }

    let r,g,b,y;

    r = randomComponentColor();
    console.log("r:"+r);

    g = randomComponentColor();
    console.log("g:"+g);

    b = randomComponentColor();
    console.log("b:"+b);


    let color = '('+r+','+g+','+b+')'; 
    button.style.backgroundColor = color;
    quote.style.color = "rgb"+color;
    author.style.color = "rgb"+color;
    button.style.backgroundColor = "rgb"+color;
    document.body.style.backgroundColor = "rgb"+color;
};

randomQuote();
randomColor();

//appel des fonction de changement de citation et de couleur au click du bouton

button.addEventListener("click", randomQuote);
button.addEventListener("click", randomColor);
