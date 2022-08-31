const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('.btn');
const text = document.querySelector('.color');
const showCase = document.querySelector('.main-section');

btn.addEventListener('click', function(){
    let hexCode = "#"
    for(let i = 0; i < 6; i++){
        const rand = RandomNumber();
        hexCode += `${hex[rand]}`;
    }
    text.textContent = hexCode;
   showCase.style.backgroundColor = `${hexCode}`;
})

function RandomNumber(){
    const rand = Math.floor(Math.random() * hex.length);
    return rand;
}
