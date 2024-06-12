window.addEventListener('click', function(event){
    if (event.target.classList.contains("plus")) {
        const counterWrapper = event.target.closest('.pm');
        const counter = counterWrapper.querySelector('.counter-text');
        counter.innerText = ++counter.innerText;
    }

    if (event.target.classList.contains("minus")) {
        const counterWrapper = event.target.closest('.pm');
        const counter = counterWrapper.querySelector('.counter-text');

        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.burger-price-block') && parseInt(counter.innerText) === 1) {
            event.target.closest('.burger-price-hr').remove();

            cardStatus();
            totalPrice();
        }
    }

    if(event.target.classList.contains("card-action") && event.target.closest('.burger-price-block')) {
        totalPrice();
    }
});


const number = 12;

if (number == 10) {
    console.log("the number is 12!");
} else if(number < 15) {
    console.log("the number less than 15!");
} else {
    console.log("the number is not 12!");
}

const str = "word";

switch(str) {
    case "letter":
        console.log("str is a letter");
        break;
    case "word":
        console.log("str is a word");
        break;
    default:
        console.log("Default");
}

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

let i = 0;

while (i < 10) {
    i++;
    console.log(i);
}