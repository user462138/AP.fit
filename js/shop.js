// OPEN & CLOSE CART
const cartIcon = document.querySelector("#fa-fa-cart-plus");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});


const products = document.querySelectorAll('.col-4');
const counter = document.getElementById('counter-example');
const total = document.getElementById('total-example');
const cartContent = document.getElementById('card-content');

let totalPrice = 0;

for (let i = 0; i < products.length; i++) {
	products[i].children[4].addEventListener('click', () => {
		counter.textContent = parseInt(counter.textContent) + 1;

		//cart
		const cartItem = document.createElement('article')
		const price = document.createElement('p')
		const productName = document.createElement('p')


		price.textContent = products[i].children[3].textContent;
		productName.textContent = products[i].children[1].textContent;

		cartItem.appendChild(productName)
		cartItem.appendChild(price)

    	cartContent.appendChild(cartItem);


		totalPrice+= parseInt(products[i].children[4].value);
		total.innerHTML = `Total: &euro; ${totalPrice}`;
	});
}