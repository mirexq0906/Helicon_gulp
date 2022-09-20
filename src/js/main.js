document.addEventListener('DOMContentLoaded', function(){
    let products = [
        {
            name: "Продукт 1",
            price: 1200,
        },
        {
            name: "Продукт 2",
            price: 1400,
        },
        {
            name: "Продукт 3",
            price: 1600,
        }
    ]
    let sum = 0;
    document.querySelectorAll('.section-products__item').forEach(function(product, id) {
        product.querySelector('.section-products__item-heading').textContent = products[id].name
        product.querySelector('.section-products__item-price').textContent = products[id].price + " руб."
    })
    document.querySelectorAll('.section-products__item-button').forEach(function(button, id) {
        button.addEventListener('click', function() {
            button.textContent = "Добавлено"
            button.setAttribute('disabled', true)
            button.style.background = "#22943C"
            button.style.cursor = "auto"
            sum = sum + products[id].price
            document.querySelector('.section-price__sum').textContent = " " + sum.toLocaleString() + " "
        })
    })
})