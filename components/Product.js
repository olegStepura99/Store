function Product () {
    this.title = 'Product';

    this.elem = document.createElement('div');
    this.elem.classList.add('page');

    let id = location.hash;
    id = parseInt(id.split('/').pop());

    let localData = localStorage.getItem('localData');
    if(localData && localData.length > 0) localData = JSON.parse(localData);

    let localCart = localStorage.getItem('localCart');
    if(localCart && localCart.length > 0) localCart = JSON.parse(localCart); 
   
    let productData =  null;

    if(localData) productData = localData.find(product => product.id == id);

    const btnAdd = document.createElement('button');
    btnAdd.classList.add('product__btn_add')
    btnAdd.innerHTML = 'Add';
    if(localCart){
        if (localCart.indexOf(productData.id) != -1) btnAdd.innerHTML = "Added";
    }

    this.elem.innerHTML = `
        <h1 class="product__title title">${productData.title}</h1>
        <div class="product__wrapper">
            <div class="product__image_wrapper"><img class="product__image" src="${productData.image}" alt="product image"/></div>
            <div class="product__description_wrapper">
                <div class="product__category">${productData.category}</div>
                <div class="product__description">${productData.description}</div>
                <div class="product__price">$${productData.price}</div>
            </div>
        </div>
    `;
    btnAdd.addEventListener('click', () => {
        import('./Cart.js')
        .then(module => {
            if (module.addCart(productData.id)) btnAdd.innerHTML ="Added";
        })
    })

    this.elem.append(btnAdd)
} 

const obj =  new  Product();

const elem = obj.elem;
const title = obj.title;

export default elem;
export {title};