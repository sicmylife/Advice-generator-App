const dice = document.getElementById('dice');
const number = document.getElementById('number');
const advice = document.getElementById('advice');



const  loadAdvice = function(){

    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        number.textContent=`Advice #${data.slip.id}`;
        advice.textContent= data.slip.advice;
        })
        .catch(error => {
            number.textContent = '';
            advice.textContent = `Sorry${error.message}`;
        })

    }

    loadAdvice();
    dice.addEventListener('click',loadAdvice);


