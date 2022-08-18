// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"];
function writeCards(cards) {
    var message = [];
    for (let i = 0; i < cards.length; i++ ){
            message[i] = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
        }
        return message;
}
writeCards(cards);  

function countDown(k){
    for (let input = k; input >= 0; input--) {
        console.log(input);
       }
}  
countDown(10);