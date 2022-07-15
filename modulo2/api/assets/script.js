const BASE_URL = 'https://api.chucknorris.io/jokes/random'

async function chucknorris(){
let response = await fetch(BASE_URL);
let data = await response.json();

// console.log(data);
const value = data.value;
document.getElementById('frase').innerText = value;

}
chucknorris();