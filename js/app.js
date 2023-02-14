console.log('ciao');

let pcNumber = [];
let userNumber = [];

randomNumber(pcNumber);
userNum(userNumber);
confronta(pcNumber, userNumber)

function randomNumber(randomNum){
    while (randomNum.length < 5) {
        let num = Math.floor(Math.random()* 100);
        randomNum.push(num);
    } 
    alert(randomNum);
}

function userNum(num){
    for (let i = 0; i < pcNumber.length; i++) {
        num[i] = parseInt(prompt('inserisci numero'));
        while (isNaN(num[i] && num[i] < 101)) {
        num[i] = parseInt(prompt('inserisci numero'));
        }
        console.log(num); 
    }
}

function confronta(pc , user){
    for (let i = 0; i < pc.length; i++) {
        if(pc.includes(user[i])){
            console.log('elemento',user[i],'trovato');
        }
    }
}