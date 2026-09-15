var itemsContainer = document.getElementById("cartItemsContainer");
var summaryBox = document.getElementById("cartSummaryBox");
var totalDisplay = document.getElementById("totalPriceDisplay");
var clearBtn = document.getElementById("btnClearCart");

function displayCart() {
    var cartList = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    if (cartList.length === 0) {
        if (itemsContainer) {
            itemsContainer.innerHTML = `
                <div style="text-align: center; padding: 40px; background: white; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                    <i class="fa fa-shopping-cart" style="font-size: 3.5rem; color: #cbd5e1; margin-bottom: 15px;"></i>
                    <h3 style="color: #4b5563;">Your cart is empty!</h3>
                    <p style="color: #94a3b8; font-size: 0.9rem; margin-top: 5px;">Go back to the store and add some amazing items.</p>
                </div>
            `;
        }
        if (summaryBox) summaryBox.style.display = "none"; 
        return;
    }

    var htmlContent = "";
    var totalPrice = 0;

    for (var i = 0; i < cartList.length; i++) {
        var item = cartList[i];
        var itemPrice = typeof item.price === "number" ? item.price : parseFloat(item.price) || 0;
        totalPrice += itemPrice; 

        htmlContent += `
            <div class="product-card" style="display: flex; flex-direction: row; padding: 15px; align-items: center; margin-bottom: 15px; gap: 20px; background: white; border-radius: 12px;">
                <div style="width: 80px; height: 80px; border-radius: 8px; overflow: hidden; background: #f8fafc; flex-shrink: 0;">
                    <img src="${item.img || item.image || 'imgs/women-prod1.jpg'}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="flex: 2; text-align: left;">
                    <h4 style="color: #1e1b4b; font-size: 1.05rem; margin-bottom: 4px;">${item.name || item.title}</h4>
                    <span style="color: #6366f1; font-weight: 700; font-size: 1.1rem;">$${itemPrice.toFixed(2)}</span>
                </div>
                <div>
                    <button type="button" class="btn-login" onclick="removeItem(${i})" style="border-color: #fca5a5; color: #ef4444; padding: 6px 12px; font-size: 0.8rem; cursor: pointer; background: transparent; border: 1px solid #fca5a5; border-radius: 6px;">
                        <i class="fa fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        `;
    }

    if (itemsContainer) itemsContainer.innerHTML = htmlContent;
    if (totalDisplay) totalDisplay.textContent = "$" + totalPrice.toFixed(2); 
    if (summaryBox) summaryBox.style.display = "block"; 
}

function removeItem(index) {
    var cartList = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    cartList.splice(index, 1); 
    localStorage.setItem("shoppingCart", JSON.stringify(cartList)); 
    displayCart(); 
    updateNavbarCartCount(); 
}

function updateNavbarCartCount() {
    var currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    var countSpan = document.getElementById("cartCount");
    if (countSpan) {
        countSpan.textContent = currentCart.length;
    }
}

if (clearBtn) {
    clearBtn.addEventListener("click", function() {
        if (confirm("Are you sure you want to clear your entire cart?")) {
            localStorage.removeItem("shoppingCart");
            displayCart();
            updateNavbarCartCount();
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    displayCart();
    updateNavbarCartCount();
});
