const singInBtn = document.querySelector(".header_btn");
const singInForm = document.querySelector(".massage_sign_ins");
const comfirmBtn = document.querySelector(".back_btn");

singInBtn.addEventListener("click", addForm)
comfirmBtn.addEventListener("click", backForm)

function addForm() {
    singInForm.style.display = "flex"
}

function backForm() {
    singInForm.style.display = "none"
}

// ------------------------------------

const cartBtn = document.querySelector(".box_header_cart");
const boxCart = document.querySelector(".massage_carts");
const comfrimCart = document.querySelector(".back_cart");

cartBtn.addEventListener("click", addCart);
comfrimCart.addEventListener("click", removeCart);

function addCart() {
    boxCart.style.display = "flex"
}

function removeCart() {
    boxCart.style.display = "none"
}

// ------------------------------------

const priceBtn = document.querySelector(".post_site_btn");

priceBtn.addEventListener("click", addicon)

function addicon() {
    priceBtn.style.display = "none";
}