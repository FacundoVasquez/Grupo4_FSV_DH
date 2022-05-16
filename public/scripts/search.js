const { body } = require("express-validator")

const productCardTemplate = document.querySelector("[data-product-template]")
const productCardContainer = document.querySelector("[data-product-cards-container]")
const searchInput = document.querySelector("[data-search]")
const input = document.getElementById("search")
let products = []

 

searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase()
           products.forEach(product => {
               const isVisible = product.name.includes(value)
               product.element.classList.toggle("hide", !isVisible) 
            }) 
        })   

fetch("http://localhost/phpmyadmin/index.php?route=/")
    .then(res => res.json())
    .then (data =>{
        data.forEach(product =>{
            const card = productCardTemplate.content.cloneMod(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            header.textContent = product.name;
            body.textContent = product.price;
            productCardContainer.append(card)
            return res.render("search",{name:product.name, price: product.price, element:card})
        })
    })
