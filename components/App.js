import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";


function App() {

    const elem = document.createElement('div');
    elem.classList.add('app');

    const render = () => {
        elem.append(Header, Main, Footer);
        
        document.querySelector('#root').append(elem);
    }

    render();
}

new App();