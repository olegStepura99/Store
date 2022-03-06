function Main () {
    this.elem = document.createElement('main');
    this.elem.classList.add('main');

    const routing = () => {
        let name = location.hash;

        if(!name) name ='catalog';
        else name = name.replace('#','')

        if(name.indexOf('product') != -1) name = 'product';

        import(`./${name}.js?v=${Date.now()}`)
        .then(module => {
            this.elem.innerHTML = '';
            this.elem.append(module.default);
            document.title = module.title;
        });
    } 

    window.addEventListener('hashchange', routing);
    window.addEventListener('load', () => {
        const a = document.querySelectorAll('a[href="/"]');

        a.forEach(a =>{
            a.addEventListener('click', (event) =>{
                event.preventDefault();
                window.history.pushState("", "", "/");
                routing();
            })
        })
    });
    routing();
} 

export default new Main().elem;