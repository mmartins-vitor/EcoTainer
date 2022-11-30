const header = document.getElementsByTagName('header')[0];
const toggle = document.querySelector('[toggle]');
const links = document.querySelector('#list_links');
const price = document.querySelector('.price-procuct');
const small_menu = document.createElement('div');

price.textContent = Number(price.textContent).toLocaleString('pt-br',{style:'currency',currency:'BRL'});

toggle.onclick = e => {
    e.preventDefault();
    
    if(header.firstElementChild === links) {
        
        header.removeChild(links)
        // header.after(links); 
        header.after(small_menu); 
        small_menu.appendChild(links)
        small_menu.classList.add('small_menu_container')
        links.classList.add('small_menu');
        

    } else {

        document.body.removeChild(small_menu);
        header.insertBefore(links, header.firstElementChild);
        links.classList.remove('small_menu');

    }

}

window.onresize = () => {
    if(window.innerWidth > 816) {
        if(header.firstElementChild === toggle) {
            document.body.removeChild(small_menu)
            header.insertBefore(links, toggle);
            links.classList.remove('small_menu');
        }
    }
}
