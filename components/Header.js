import {cartWidget} from './Cart.js'

function Header () {
    this.elem = document.createElement('header');
    this.elem.classList.add('header');
    this.elem.innerHTML = `
        <div class="header__logo">
            <a href="/" class='header__logo-link logo-link'><img class='header__logo-img logo-img' src="../assets/img/logo.png" alt="logo"> </a>
        </div>
        <nav class="nav"> 
            <ul class="nav__list">
                <li class="nav__item"><a class="nav__link" href="/">Store</a></li>
                <li class="nav__item"><a class="nav__link" href="/#about">About</a></li>
                <li class="nav__item"><a class="nav__link" href ="/#contacts">Contacts</a></li>
            </ul>
        </nav>

        ${cartWidget.outerHTML}
    `;

} 



export default new Header().elem;