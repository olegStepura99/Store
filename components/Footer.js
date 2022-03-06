function Footer () {
    this.elem = document.createElement('footer');
    this.elem.classList.add('footer');
    this.elem.innerHTML = `
        <div class="footer__logo logo">
            <a href="/" class='footer__logo-link logo__link'><img class='footer__logo-img logo-img' src="../assets/img/logo_footer.png" alt="logo"> </a>
        </div>
        <ul class="footer__contact">
            <li class="footer__phone">
                <img class="footer__phone_img footer__img" src="../assets/img/phone-call.png" alt="#">
                <span class="footer__info">+375299999999</span>
            </li>
            <li class="footer__mail">
                <img class="footer__mail_img footer__img" src="../assets/img/mail.png" alt="#">
                <span class="footer__info">store@mail.ru</span>
            </li>
            <li class="footer__addres">
                <img class="footer__addres_img footer__img" src="../assets/img/pin.png" alt="#">
                <span class="footer__info">Minsk</span>
            </li>
        </ul>
     
    
    `;
} 

export default new Footer().elem;