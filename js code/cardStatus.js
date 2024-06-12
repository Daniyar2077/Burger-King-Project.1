function cardStatus() {
    const burgerPriceBlock = document.querySelector('.burger-price-block');
    const cardEmpty = document.querySelector('.basket-empty')

    if(burgerPriceBlock.children.length > 0) {
        cardEmpty.classList.add('none');
    } else {
        cardEmpty.classList.remove('none');
    }
}