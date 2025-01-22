//Csipan- menu

const headerEL = document.querySelector("#header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        headerEL.classList.add('header-scrolled');
    }
    if (window.scrollY < 10) {
        headerEL.classList.remove('header-scrolled');
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

let cartItems = [];


function addToCart(itemName, price) {
    cartItems.push({ name: itemName, price: price });
    updateCart();
    updateOrderForm(); // Add this line to update the order form
}

function updateCart() {
    const cartList = document.getElementById('cart-items');

    cartList.innerHTML = '';
    let totalPrice = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
        totalPrice += item.price;
    });
    const checkoutButton = document.querySelector('#cart button');
    checkoutButton.textContent = `Checkout - Total: $${totalPrice}`;
}

function checkout() {
    document.getElementById('menuPage').style.display = 'none';
    document.querySelector('footer').style.display='none';
    document.getElementById('orderFormContainer').style.display = 'block';
    document.getElementById('cart').style.display = 'none';

    // Append orders.css to the head section
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'orders.css';
    document.head.appendChild(link);

    // Remove script.js
    var script = document.getElementById('script');
    script.parentNode.removeChild(script);

    // Add orders.js
    var ordersScript = document.getElementById('orders(1)');
    ordersScript.removeAttribute('defer');

    // Reset cart items
    cartItems = [];
    updateCart();
}

// Add this function to update the order form
function updateOrderForm() {
    const orderFormCartItems = document.getElementById('orderFormCartItems');
    let totalyPrice = 0;
    orderFormCartItems.innerHTML = '';
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        orderFormCartItems.appendChild(listItem);
        totalyPrice += item.price;
    });
}


document.getElementById('addToCartBtn').addEventListener('click', function() {
    
    selectedFood = document.getElementById('maindish').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('garnishes').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('salads').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('sauces').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('deserts').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('drinks').value;
    cartItems.push(selectedFood);
    
    updateCartItems();
});
function addToCart(itemName, price) {
  cartItems.push({ name: itemName, price: price });
  updateCart();
  updateOrderForm(); // Add this line to update the order form
}

function updateCartItems() {
  const cartItemsElement = document.getElementById('cart-items-order-form');
  cartItemsElement.innerHTML = ''; // Clear the existing content
  
  cartItems.forEach((item, index) => {
      const itemElement = document.createElement('li');
      const itemText = document.createTextNode(`${item.name} - $${item.price}`); // Create text node
      itemElement.appendChild(itemText); // Append text node to list item
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
      deleteButton.addEventListener('click', () => {
          cartItems.splice(index, 1);
          updateCartItems();
      });
      
      itemElement.appendChild(deleteButton);
      cartItemsElement.appendChild(itemElement);
  });
}


function handleButtonClick() {

  alert('Your order will be paid with cash');
  }
  
function submitclick()
{ alert('Thank you for yor order!');
window.location.reload();

}

