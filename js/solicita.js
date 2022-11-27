const header = document.getElementsByTagName('header')[0];
const toggle = document.querySelector('[toggle]');
const links = document.querySelector('#list_links');
const price = document.querySelectorAll('.grid-item-price');

price.forEach(value => {
    value.textContent = Number(value.textContent).toLocaleString('pt-br', {
        style:'currency',
        currency:'BRL'
    });
});

toggle.onclick = e => {
    e.preventDefault();
    
    if(header.firstElementChild === links) {
        
        header.removeChild(links)
        header.after(links); 
        links.classList.add('small_menu');
        

    } else {

        document.body.removeChild(links);
        header.insertBefore(links, header.firstElementChild);
        links.classList.remove('small_menu');

    }

}

window.onresize = () => {
    if(window.innerWidth > 793) {
        if(header.firstElementChild === toggle) {
            document.body.removeChild(links)
            header.insertBefore(links, toggle);
            links.classList.remove('small_menu');
        }
    }
}
