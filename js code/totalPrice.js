function totalPrice() {
    const burgerPrices = document.querySelectorAll('.burger-price');
    const totalPriceElement = document.querySelector('.span-price');

    let totalPrice = 0;

    burgerPrices.forEach(function(item) {

        const countElement = item.querySelector('.counter-text');
        const priceElement = item.querySelector('.price');

        const priceResult = parseInt(countElement.innerText) * parseInt(priceElement.innerText);
        totalPrice = totalPrice + priceResult;
    })

    totalPriceElement.innerText = totalPrice;
}