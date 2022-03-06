function Contacts () {
    this.title = 'Contacts';

    this.elem = document.createElement('div');
    this.elem.classList.add('page');
    this.elem.innerHTML = `
        <h1 class="contacts__title title">Contacts</h1>
        <p> Tempore voluptates neque placeat soluta temporibus officia nesciunt, eos corrupti modi enim, possimus tempora deleniti? Perferendis sint eos nesciunt iste itaque, id pariatur deleniti aperiam consectetur excepturi, minima, aut quibusdam?</p>
    `;
} 

const obj =  new Contacts();

const elem = obj.elem;
const title = obj.title;

export default elem;
export {title};