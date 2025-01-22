const headerEL = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        headerEL.classList.add('header-scrolled')
    }
    if (window.scrollY < 10) {
        headerEL.classList.remove('header-scrolled')
    }
});

//menu

let aktiv = 0;

const aboutMenu = document.getElementById('aboutMenu');

const aboutLink = document.getElementById('myDIV');

aboutLink.addEventListener('mouseenter', function() {
    aktiv = 1;
    setTimeout(function(){
        // Megjelenítjük a menüt ha legalabb 2 tizedmasodperic felette van az eger
        if (aktiv==1){
            aboutMenu.classList.remove('hidden');
        joHelyre();
        headerEL.classList.add('header-scrolled')
        }
        
    }, 300);
    
});

aboutLink.addEventListener('mouseleave', function() {
    aktiv = 0;
    // Elrejtjük a menüt, ha az egeret elmozdítják, de csak ha az egér nem az aboutMenu-ban van
    setTimeout(function() {
        if (!aboutMenu.matches(':hover')) {
            aboutMenu.classList.add('hidden');
            if(window.scrollY < 10){
                headerEL.classList.remove('header-scrolled');
            }
            
        }
    }, 400); // Várunk egy kicsit, mielőtt elrejtjük az ablakot, így az egér átmehet az aboutMenu-ra
}); 

aboutMenu.addEventListener('mouseenter', function() {
    // Megjelenítjük a menüt, ha az egér az aboutMenu-ban van
    aboutMenu.classList.remove('hidden');
});

aboutMenu.addEventListener('mouseleave', function() {
    // Elrejtjük a menüt, ha az egeret elmozdítják az aboutMenu-ról
    aboutMenu.classList.add('hidden');
    if(window.scrollY < 10){
        headerEL.classList.remove('header-scrolled');
    }
});


// position
let element = document.getElementById("myDIV");

var rect = element.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

function joHelyre(){
    aboutMenu.style.position = "absolute";
    aboutMenu.style.left = getOffset(element).left+'px';
    aboutMenu.style.top = getOffset(element).top+100-window.scrollY+'px';
    aboutMenu.style.width = document.getElementById("myDIV").offsetWidth+"px";
    let headerHossz = document.getElementById("header").offsetHeight;
    aboutMenu.style.top = getOffset(element).top+headerHossz-window.scrollY-34+'px';
}
