function About () {
    this.title = 'About';

    this.elem = document.createElement('div');
    this.elem.classList.add('page');
    this.elem.innerHTML = `
        <h1 class="catalog__title title">About</h1>
        <p class="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda, blanditiis explicabo alias deserunt, optio, ipsam necessitatibus iusto voluptate quos porro aspernatur. Quam maxime animi quibusdam, illo necessitatibus laboriosam eligendi.</p>
        <p class="about__paragraph">Voluptatum asperiores ut ad consequatur incidunt eius! A, iure fugit consequuntur provident facilis quisquam aut saepe non adipisci aspernatur maxime asperiores. Aspernatur deserunt quod voluptates esse, unde ratione facilis voluptas.</p>
        <p class="about__paragraph">Exercitationem consequuntur adipisci fugiat architecto tempora quae provident delectus reprehenderit quas debitis, eligendi ipsam error eveniet. Corporis deleniti eius alias quas eaque harum neque accusamus, commodi velit. Labore, quos doloremque.</p>

    `;
} 

const obj = new About();
const elem = obj.elem;
const title = obj.title;

export default elem;
export {title};