/*function getValuesAndSendRequest(UserID, ProductID, ProductName, Price ,quantity) {
    alert("Data About to post" + UserID + " " + ProductID + " " + ProductName + " " + Price + " " + quantity);
    $.ajax({
        type: "POST",
        url: "productTableUpload.php",
        data: {
            username: UserID,
            productID: ProductID,
            quantity: quantity,
            productName: ProductName,
            price: Price
        },
        success: function(response) {
            alert("Debug: Post Request Successfull :"+response);
            // Redirect user or perform other actions after successful login
        },
        error: function(xhr, status, error) {
            alert("Post Request Failed, Details: " + error);
            // Handle error scenarios
        }
    });

    var cart = [];

    function addProductToCart(productID, quantity) {
        var product = {
            productID: productID,
            quantity: quantity
        };
        cart.push(product);
        displaycart();
    }
    function displaycart() {
        let j=0;

        document.getElementById('cart').innerHTML = cartdata;
    }
}*/
/*document.addEventListener('DOMContentLoaded', () => {
    fetch('productTableUpload.php')
        .then(response => response.json())
        .then(items => {
            const itemsDiv = document.getElementById('items');
            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item';
                itemDiv.innerHTML = `
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <button onclick="addToCart(${item.id})">Add to Cart</button>
                `;
                itemsDiv.appendChild(itemDiv);
            });
        });
});

function addToCart(itemId) {
    fetch('cart.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId: itemId }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Item added to cart!');
        } else {
            alert('Error adding item to cart');
        }
    });
}*/
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItems = document.getElementById('cart-items');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            const productName = button.getAttribute('data-product-name');
            const productPrice = button.getAttribute('data-product-price');

            addItemToCart(productId, productName, productPrice);
            showSuccessMessage(`${productName} was added to the cart successfully!`);
        });
    });

    function addItemToCart(id, name, price) {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${name} - $${price}`;
        cartItems.appendChild(cartItem);
    }

    function showSuccessMessage(message) {
        const messageContainer = document.createElement('div');
        messageContainer.className = 'success-message';
        messageContainer.textContent = message;

        document.body.appendChild(messageContainer);

        setTimeout(() => {
            messageContainer.remove();
        }, 3000); // Message disappears after 3 seconds
    }
});
