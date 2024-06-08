


    const click = document.querySelector(".click");
console.log(click);
const but = document.querySelector("button");
console.log(but);
const hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

const code = document.getElementById("code");

but.addEventListener("click",function(){
    let bgcolor = "#"
    
    for(let i=1;i<=6;i++){
       hexacolor = randomHexaNumber();
        bgcolor = bgcolor + hexacolor;    
    }
    

    click.style.backgroundColor = bgcolor;
    code.innerHTML = bgcolor;    
})


function randomHexaNumber(){
    let  randomNumber = Math.floor(Math.random()*16);
    return hex[randomNumber];
}

console.log(randomHexaNumber());


