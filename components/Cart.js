function Cart () {
    this.title = 'Cart';

    this.elem = document.createElement('div');
    this.elem.classList.add('page');

    function getQuantity(id) {
        let quantity = 0;
        localCart.forEach(item =>{
            if (item == id) quantity++;
        });
        return quantity
    }

    function getList() {
        function create() {
            let localCart = localStorage.getItem('localCart');
            if(localCart && localCart.length > 0) localCart = JSON.parse(localCart); 

            let cartProducts;
            if(localCart) cartProducts = localData.filter(product => { 
                if(localCart.indexOf(product.id) != -1){
                    product.quantity = getQuantity(product.id);
                    return true;
                }
            });

            list.innerHTML = '';

            cartProducts.forEach(product => {
                const li = document.createElement('li');
                li.classList.add('cart__product');
    
                const input = document.createElement('input');
                input.classList.add('cart__product_quantity');
                input.setAttribute('type', 'number');
                input.setAttribute('value', product.quantity);
    
                const price = document.createElement('div');
                price.classList.add('cart__product_price');
                price.innerHTML = '$' + product.price;
                
                let totalPrice = product.price * product.quantity; 

                const total = document.createElement('div');
                total.classList.add('cart__product_total');
                total.innerHTML = '$' + totalPrice;   
    
                li.innerHTML = `
                    <img class="cart__product_image" src="${product.image}"/>
                    <h3 class="cart__product_title">${product.title}</h3> 
                `;

                input.addEventListener('change', (event) => {
                    if(product.quantity > event.target.value) removeCart(product.id);
                    else if(product.quantity < event.target.value) addCart(product.id);
                    create();
                    location.reload();
                });
    
                li.append(input, price, total);
                list.append(li);
            });
        }  

        const list = document.createElement('ul');
        list.classList.add('cart__list');  

        create();
        cartElem.append(list);
    };

    const cartElem = document.createElement('div');
    cartElem.classList.add('cart');

    this.elem.innerHTML = `
        <h1 class="cart__title title">Cart</h1>
    `;

    let localData = localStorage.getItem('localData');
    if(localData && localData.length > 0) localData = JSON.parse(localData);

    let localCart = localStorage.getItem('localCart');
    if(localCart && localCart.length > 0) localCart = JSON.parse(localCart); 

    if (localCart && localCart.length > 0) getList();
    else cartElem.innerHTML = `<div class="cart__empty">Cart is empty</div>`;

    this.elem.append(cartElem);
} 

function CartWidget () {
    this.elem = document.createElement('div');
    this.elem.classList.add('cart__widget');

    let localCart = localStorage.getItem('localCart');
    if(localCart && localCart.length > 0) localCart = JSON.parse(localCart);

    const count = (localCart && localCart.length > 0 ) ? localCart.length : 0; 

    this.elem.innerHTML = `
        <a href="/#cart">Cart</a> :
        <span>${count}</span>    
    `;
}

function addCart (id) {
    if(!id || isNaN(id)) return;

    let localCart = localStorage.getItem('localCart');
    if(localCart && localCart.length > 0) localCart = JSON.parse(localCart);

    const cart = localCart || [];

    cart.push(id);

    localStorage.setItem('localCart', JSON.stringify(cart));

    const cartWidgetCount = document.querySelector('.cart__widget span');

    if (!cartWidget) return;

    cartWidgetCount.innerHTML = cart.length;

    if (cart.indexOf(id) != -1) return true;
    return false;
}

function removeCart (id) {
    if(!id || isNaN(id)) return;

    let localCart = localStorage.getItem('localCart');
    if(localCart && localCart.length > 0) localCart = JSON.parse(localCart);

    if (! localCart || localCart.length == 0) return;

    let cart = localCart;
    let index;

    for (let i = 0; i < cart.length; i++) {
        if(cart[i] == id) { 
            index = i;
            break;
        }
    }
    if(index >= 0) cart.splice(index,1);

    localStorage.setItem('localCart', JSON.stringify(cart));

    const cartWidgetCount = document.querySelector('.cart__widget span');

    if (!cartWidget) return;

    cartWidgetCount.innerHTML = cart.length;

    if (cart.indexOf(id) != -1) return true;
    return false;
}

const obj = new  Cart()
const elem = obj.elem;
const title = obj.title;

const widget = new CartWidget();
const cartWidget = widget.elem;

export default elem;
export {title, addCart, cartWidget};