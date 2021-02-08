
let productList = document.querySelector('#product-list');
let cartList = document.querySelector('#cart-list');


class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    addProduct()
    {
        let list = document.querySelector('#product-list');
        let row = document.createElement('tr');
        row.innerHTML = `<td>${this.name}<td>
        <td>${this.price}$<td>
        <td><button id ="addBtn">Add To Cart</button><td>
        `;
        list.appendChild(row);
    }
}

let Product1 = new Product("Apple", 12);
let Product2 = new Product("Banana", 130);
let Product3 = new Product("Orange", 140);
let Product4 = new Product("Mango", 150);

Product1.addProduct();
Product2.addProduct();
Product3.addProduct();
Product4.addProduct();

//Cart Class

class Cart{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
     addProductToCart(){
        let item = document.querySelector('#cart-list');
        let row = document.createElement('tr');
        
        row.innerHTML = `<td>${this.name}<td>
     <td>${this.price}<td>
     <td><a href='#'>Remove</a><td>`;
        item.appendChild(row);        
    }
}


// Local Storage Class

class Store {
    constructor(name, price){
        this.name = name;
        this.price=price;
    }
    static getProducts(){
        let products;
        if(localStorage.getItem('products')== null)
        {
            products = [];
        }
        else
        {
            products = JSON.parse(localStorage.getItem('products'));
        }
        return products;
    }
    static addproducts(product){
        let products = Store.getProducts();
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }
    static deletFromCart(target){
        // console.log();
        target.parentElement.parentElement.remove();
        let name = target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent.trim();
        let products = Store.getProducts();
        products.forEach((product,index)=>{
            if(product.name ===name)
            {
                products.splice(index,1);
            }
        });
        localStorage.setItem('products',JSON.stringify(products));
        // console.log(name);
    }
    static displayProducts(){
        let products = Store.getProducts();
        products.forEach(product => {
            let add = new Cart(product.name, product.price);
            console.log(product);
            add.addProductToCart(product);
        });
    }
}



//event listener
productList.addEventListener('click',addToCart);
cartList.addEventListener('click',Remove);
document.addEventListener('DOMContentLoaded', Store.displayProducts());

function Remove(e){
    if(e.target.hasAttribute('href')){
        Store.deletFromCart(e.target);
    }
    // console.log("hello");
    e.preventDefault();
}


function addToCart(e){
    if(e.target.hasAttribute('id')){
        let name = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent.trim();
        let price = e.target.parentElement.previousElementSibling.previousElementSibling.textContent.trim();
        let cart = new Cart(name,price);
        cart.addProductToCart();
        let store = new Store(name,price);
        Store.addproducts(store);       
    }
    // if(e.target.hasAttribute('id'))
    // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent.trim());
    e.preventDefault();
}