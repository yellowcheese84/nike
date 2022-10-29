document.addEventListener('DOMContentLoaded', () => {
    console.log('ready');
    
    const menus = document.querySelectorAll('nav > div > ul > li');
    menus.forEach((menu, index) => {
        menu.addEventListener('mouseover', () => {
            // const gnb = document.querySelector('nav > div > ul');
            menu.style.borderBottomWidth = '2px';
            menu.style.borderBottomStyle = 'solid';
            menu.style.borderBottomColor = 'balck';
        });

        menu.addEventListener('mouseleave', () => {
            // const gnb = document.querySelector('nav > div > ul');
            menu.style.border = 'none';
            
        });
    });

    const opacities = document.querySelectorAll('.opacity');
    opacities.forEach((opacity) => {
        opacity.addEventListener('mouseover', () => {
            opacity.style.opacity = '0.7';
        });

        opacity.addEventListener('mouseleave', () => {
            opacity.style.opacity = '1.0';
        });
    });

});