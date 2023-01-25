let title_h1 = document.querySelector("#title");
let text_title = "Escolha o melhor lugar para passar suas férias!";
let interval = 120;

function showTitle(title_h1, text_title, interval){

    let char = text_title.split("").reverse();

    let animation = setInterval(() => {

        if(!char.length){
            return clearInterval(animation);
        }

        let next_char = char.pop();

        title_h1.innerHTML += next_char;

    }, interval);
}

showTitle(title_h1, text_title, interval);