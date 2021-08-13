// red buttion er jonno function 
function clickRed(){
    document.body.style.backgroundColor='red';
}

// first e id diye button k dhore ano
const blue = document.getElementById('click-blue');
blue.onclick = clickBlue;
function clickBlue(){
    document.body.style.backgroundColor= 'blue';
}