const menuIcon = document.getElementById('log')
const menu = document.getElementById('menu')


menuIcon ?.addEventListener('click', () => {
    if(menu?.className == 'hidden'){
        menu.classList.remove('hidden')
    }else{
        menu.classList.add('hidden')
    }
})

// BASIC