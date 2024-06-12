const btnOne = document.querySelector('.button-one');
const btnTwo = document.querySelector('.button-two');
const btnThree = document.querySelector('.button-three');
const burgerPriceBlock = document.querySelector('.burger-price-block');

btnOne.addEventListener('click', function () {
    if (btnOne) {
        const cardOne = btnOne.closest('.div-one');

        const productInfoOne = {
            id: "01",
            image: "/burger images/vopper.png",
            name: "ВОППЕР",
            price: "1200 тг",
            counter: cardOne.querySelector('.counter-text-one').innerText
        }

        const itemInCardOne = burgerPriceBlock.querySelector(`[id="${productInfoOne.id}"]`);

        if (itemInCardOne) {
            const counterElOne = itemInCardOne.querySelector('.counter-text-four');
            counterElOne.innerText = parseInt(counterElOne.textContent) + parseInt(productInfoOne.counter);
        } else {
            const cardItemOne = `
            <div class="burger-price-hr">
        <div class="burger-price" id="${productInfoOne.id}">
                    <div class="burger-price-logo">
                        <img class="vopper-price" src="${productInfoOne.image}">
                    </div>
                    <div class="burger-price-text">
                        <p class="vopper-text">${productInfoOne.name}</p>
                        <div class="price-block">
                            <div class="pm-four pm">
                                <div class="minus-four">
                                    <p class="minus-text-four minus card-action">-</p>
                                </div>
                                <div class="counter-four">
                                    <p class="counter-text-four counter-text">${productInfoOne.counter}</p>
                                </div>
                                <div class="plus-four">
                                    <p class="plus-text-four plus card-action">+</p>
                                </div>
                            </div>
                            <p class="price">${productInfoOne.price}</p>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
        `;

            burgerPriceBlock.insertAdjacentHTML('beforeend', cardItemOne);
        }
        cardOne.querySelector('.counter-text-one').innerText = '1';

        cardStatus();
        totalPrice();
    }
});

btnTwo.addEventListener('click', function () {
    if (btnTwo) {
        const cardTwo = btnTwo.closest('.div-two');

        const productInfoTwo = {
            id: "02",
            image: "/burger images/steykhaus.png",
            name: "СТЕЙКХАУС",
            price: "1350 тг",
            counter: cardTwo.querySelector('.counter-text-two').innerText
        }

        const itemInCardTwo = burgerPriceBlock.querySelector(`[id="${productInfoTwo.id}"]`);

        if (itemInCardTwo) {
            const counterElTwo = itemInCardTwo.querySelector('.counter-text-four');
            counterElTwo.innerText = parseInt(counterElTwo.textContent) + parseInt(productInfoTwo.counter);
        } else {
            const cardItemTwo = `
            <div class="burger-price-hr">
        <div class="burger-price" id="${productInfoTwo.id}">
                    <div class="burger-price-logo">
                        <img class="vopper-price" src="${productInfoTwo.image}">
                    </div>
                    <div class="burger-price-text">
                        <p class="vopper-text">${productInfoTwo.name}</p>
                        <div class="price-block">
                            <div class="pm-four pm">
                                <div class="minus-four">
                                    <p class="minus-text-four minus card-action">-</p>
                                </div>
                                <div class="counter-four">
                                    <p class="counter-text-four counter-text">${productInfoTwo.counter}</p>
                                </div>
                                <div class="plus-four">
                                    <p class="plus-text-four plus card-action">+</p>
                                </div>
                            </div>
                            <p class="price">${productInfoTwo.price}</p>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
        `;

            burgerPriceBlock.insertAdjacentHTML('beforeend', cardItemTwo);
        }
        cardTwo.querySelector('.counter-text-two').innerText = '1';

        cardStatus();
        totalPrice();
    }
});

btnThree.addEventListener('click', function () {
    if (btnThree) {
        const cardThree = btnThree.closest('.div-three');

        const productInfoThree = {
            id: "03",
            image: "/burger images/krispy chicken.png",
            name: "КРИСПИ ЧИКЕН",
            price: "1500 тг",
            counter: cardThree.querySelector('.counter-text-three').innerText
        }

        const itemInCardThree = burgerPriceBlock.querySelector(`[id="${productInfoThree.id}"]`);

        if (itemInCardThree) {
            const counterElThree = itemInCardThree.querySelector('.counter-text-four');
            counterElThree.innerText = parseInt(counterElThree.textContent) + parseInt(productInfoThree.counter);
        } else {
            const cardItemThree = `
            <div class="burger-price-hr">
        <div class="burger-price" id="${productInfoThree.id}">
                    <div class="burger-price-logo">
                        <img class="vopper-price" src="${productInfoThree.image}">
                    </div>
                    <div class="burger-price-text">
                        <p class="vopper-text">${productInfoThree.name}</p>
                        <div class="price-block">
                            <div class="pm-four pm">
                                <div class="minus-four">
                                    <p class="minus-text-four minus card-action">-</p>
                                </div>
                                <div class="counter-four">
                                    <p class="counter-text-four counter-text">${productInfoThree.counter}</p>
                                </div>
                                <div class="plus-four">
                                    <p class="plus-text-four plus card-action">+</p>
                                </div>
                            </div>
                            <p class="price">${productInfoThree.price}</p>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
        `;

            burgerPriceBlock.insertAdjacentHTML('beforeend', cardItemThree);
        }
        cardThree.querySelector('.counter-text-three').innerText = '1';

        cardStatus();
        totalPrice();
    }
});
