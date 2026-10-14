/**
 * Flora E-Commerce Website
 * Testable with Postman and Selenium
 * API endpoints available at window.FloraAPI
 */

// ============================================
// PRODUCT DATABASE (Easily updatable)
// ============================================

const FloraDB = {
    // Best Sellers
    bestsellers: [
        { id: "bs1", name: "Spring Bouquet", price: 300, category: "bestseller", image: "🌸", imageUrl: "Images/Bouquets/spring.jpg" },
        { id: "bs2", name: "Starry Night", price: 400, category: "bestseller", image: "⭐", imageUrl: "Images/Bouquets/starry_night.jpg" },
        { id: "bs3", name: "Persian Buttercup", price: 20, category: "bestseller", image: "🧺", imageUrl: "Images/Flowers/persian_buttercup.jpg" },
        { id: "bs4", name: "Oleander", price: 30, category: "bestseller", image: "🌺", imageUrl: "Images/Flowers/oleander.jpg" }
    ],

    // Individual Flowers (for custom bouquets & potted)
    flowers: [
        { id: "fl1", name: "Blue Lotus", price: 10, emoji: "🪷", imageUrl: "Images/Flowers/blue_lotus.jpg" },
        { id: "fl2", name: "White Water Lily", price: 20, emoji: "🌊", imageUrl: "Images/Flowers/white_water_lily.jpg" },
        { id: "fl3", name: "Oleander", price: 30, emoji: "🌺", imageUrl: "Images/Flowers/oleander.jpg" },
        { id: "fl4", name: "White Broom", price: 10, emoji: "⚪", imageUrl: "Images/Flowers/white_broom.jpg" },
        { id: "fl5", name: "Babul (Yellow Acacia)", price: 40, emoji: "💛", imageUrl: "Images/Flowers/babul_yellow_acacia.jpg" },
        { id: "fl6", name: "Poppy Anemone", price: 10, emoji: "🌹", imageUrl: "Images/Flowers/poppy_anemone.jpg" },
        { id: "fl7", name: "Corn Poppy", price: 10, emoji: "❤️", imageUrl: "Images/Flowers/corn_poppy.jpg" },
        { id: "fl8", name: "Persian Buttercup", price: 10, emoji: "🧺", imageUrl: "Images/Flowers/persian_buttercup.jpg" },
        { id: "fl9", name: "Paperwhite Narcissus", price: 10, emoji: "🤍", imageUrl: "Images/Flowers/paperwhite_narcissus.jpg" },
        { id: "fl10", name: "Bladder Hibiscus", price: 50, emoji: "🌺", imageUrl: "Images/Flowers/bladder_hibiscus.jpg" },
        { id: "fl11", name: "Common Mallow", price: 30, emoji: "🌿", imageUrl: "Images/Flowers/common_mallow.jpg" },
        { id: "fl12", name: "Bermuda Buttercup", price: 10, emoji: "💛", imageUrl: "Images/Flowers/bermuda_buttercup_oxalis.jpg" },
        { id: "fl13", name: "Field Marigold", price: 10, emoji: "🌼", imageUrl: "Images/Flowers/field_marigold.jpg" },
        { id: "fl14", name: "Caper Bush", price: 20, emoji: "🌿", imageUrl: "Images/Flowers/caper_bush.jpg" },
        { id: "fl15", name: "Rockrose", price: 10, emoji: "🌸", imageUrl: "Images/Flowers/rockrose_cistus.jpg" },
        { id: "fl16", name: "Wild Tulip", price: 10, emoji: "🌷", imageUrl: "Images/Flowers/wild_tulip.jpg" },
        { id: "fl17", name: "Bishop's Weed", price: 40, emoji: "🌿", imageUrl: "Images/Flowers/bishop-s_weed.jpg" },
        { id: "fl18", name: "Gazania", price: 10, emoji: "🌟", imageUrl: "Images/Flowers/gazania.jpg" },
        { id: "fl19", name: "Bougainvillea", price: 20, emoji: "💗", imageUrl: "Images/Flowers/bougainvillea.jpg" },
        { id: "fl20", name: "Stork's-bill", price: 30, emoji: "🪶", imageUrl: "Images/Flowers/stork-s-bill.jpg" },
        { id: "fl21", name: "Lavender", price: 40, emoji: "💜", imageUrl: "Images/Flowers/lavender.jpg" },
        { id: "fl22", name: "Scarlet Pimpernel", price: 10, emoji: "❤️", imageUrl: "Images/Flowers/scarlet_pimpernel.jpg" },
        { id: "fl23", name: "Chicory", price: 10, emoji: "💙", imageUrl: "Images/Flowers/chicory.jpg" },
        { id: "fl24", name: "Lantana", price: 50, emoji: "🌈", imageUrl: "Images/Flowers/lantana.jpg" }
    ],

    // Seeds
    seeds: [
        { id: "sd1", name: "Clove Flower Seeds", price: 70, emoji: "🌱", imageUrl: "Images/Seeds/ clove_flower_seed.jpg" },
        { id: "sd2", name: "Sunflower Seeds", price: 70, emoji: "🌻", imageUrl: "Images/Seeds/ sunflower_seeds.jpg" },
        { id: "sd3", name: "Hibiscus Seeds", price: 100, emoji: "🌺", imageUrl: "Images/Seeds/ hibiscus_seeds.jpg" },
        { id: "sd4", name: "Dimorphotheca Seeds", price: 100, emoji: "⭐", imageUrl: "Images/Seeds/ dimorphotheca_seeds.jpg" }
    ],

    // Gardening Tools
    tools: [
        { id: "tl1", name: "Rake", price: 300, emoji: "🪮", imageUrl: "Images/Gardening_tools/garden_rake.jpg" },
        { id: "tl2", name: "Shovel", price: 300, emoji: "⛏️", imageUrl: "Images/Gardening_tools/shovel.jpg" },
        { id: "tl3", name: "Garden Spade Shovel", price: 150, emoji: "🔧", imageUrl: "Images/Gardening_tools/hand_shovel.jpg"},
        { id: "tl4", name: "Gardening Gloves", price: 70, emoji: "🧤", imageUrl: "Images/Gardening_tools/gardening_gloves.jpg" },
        { id: "tl5", name: "Flowerpot", price: 170, emoji: "🏺", imageUrl: "Images/Gardening_tools/flowerpot.jpg" }
    ],

   
// Themed Bouquets (with image support)
themedBouquets: [
    { id: "th1", name: "Starry Night", price: 350, description: "Deep blues and bright yellows", flowers: ["Blue Lotus", "Babul", "Field Marigold"], imageUrl: "Images/Bouquets/starry-night.jpg", emoji: "⭐" },
    { id: "th2", name: "New Day", price: 280, description: "Fresh morning colors", flowers: ["White Water Lily", "Gazania", "Rockrose"], imageUrl: "Images/Bouquets/new_day.jpg", emoji: "🌅" },
    { id: "th3", name: "Spring", price: 300, description: "Pastel spring bloom", flowers: ["Persian Buttercup", "Wild Tulip", "Paperwhite Narcissus"], imageUrl: "Images/Bouquets/spring.jpg", emoji: "🌸" },
    { id: "th4", name: "Winter", price: 320, description: "Crisp white elegance", flowers: ["White Broom", "Paperwhite Narcissus", "White Water Lily"], imageUrl: "Images/Bouquets/winter.jpg", emoji: "❄️" },
    { id: "th5", name: "Summer", price: 310, description: "Vibrant summer colors", flowers: ["Lantana", "Bougainvillea", "Hibiscus"], imageUrl: "Images/Bouquets/summer.jpg", emoji: "☀️" },
    { id: "th6", name: "Autumn", price: 290, description: "Warm fall tones", flowers: ["Corn Poppy", "Field Marigold", "Common Mallow"], imageUrl: "Images/Bouquets/autumn.jpg", emoji: "🍂" },
    { id: "th7", name: "Romance", price: 450, description: "Passionate reds and pinks", flowers: ["Poppy Anemone", "Scarlet Pimpernel", "Lavender"], imageUrl: "Images/Bouquets/romance.jpg", emoji: "💕" },
    { id: "th8", name: "Besties", price: 260, description: "Friendship bouquet", flowers: ["Bermuda Buttercup", "Chicory", "Caper Bush"], imageUrl: "Images/Bouquets/besties.jpg", emoji: "👯" },
    { id: "th9", name: "Luxury", price: 600, description: "Premium arrangement", flowers: ["Bladder Hibiscus", "Lantana", "Stork's-bill", "Bishop's Weed"], imageUrl: "Images/Bouquets/luxury.jpg", emoji: "💎" },
    { id: "th10", name: "Simple", price: 180, description: "Minimalist beauty", flowers: ["Oleander", "Rockrose", "Chicory"], imageUrl: "Images/Bouquets/simple.jpg", emoji: "🌿" }
]
};

// ============================================
// SHOPPING CART (with localStorage persistence)
// ============================================

let cart = [];

function loadCart() {
    const savedCart = localStorage.getItem('flora_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('flora_cart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(item) {
    cart.push({
        ...item,
        cartId: Date.now() + Math.random()
    });
    saveCart();
    showNotification(`${item.name} added to cart!`);
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    saveCart();
}

function clearCart() {
    cart = [];
    saveCart();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0);
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    if (cartCount) cartCount.textContent = cart.length;
    if (cartTotal) cartTotal.textContent = getCartTotal() + ' LE';
    if (checkoutTotal) checkoutTotal.textContent = getCartTotal() + ' LE';
    
    const cartItemsList = document.getElementById('cartItemsList');
    if (cartItemsList) {
        if (cart.length === 0) {
            cartItemsList.innerHTML = '<p style="text-align: center;">Your cart is empty 🌸</p>';
        } else {
            cartItemsList.innerHTML = cart.map(item => `
                <div class="product-item" data-testid="cart-item-${item.cartId}">
                    <span>${item.emoji || '🌿'} ${item.name}</span>
                    <span>${item.price} LE</span>
                    <button class="remove-btn" onclick="window.removeFromCart(${item.cartId})" data-testid="remove-item-${item.cartId}">Remove</button>
                </div>
            `).join('');
        }
    }
}

// ============================================
// API FOR TESTING (Postman/Selenium compatible)
// ============================================

const FloraAPI = {
    // GET /api/products
    getProducts: () => {
        return {
            status: 200,
            data: {
                bestsellers: FloraDB.bestsellers,
                flowers: FloraDB.flowers,
                seeds: FloraDB.seeds,
                tools: FloraDB.tools,
                themedBouquets: FloraDB.themedBouquets
            }
        };
    },
    
    // GET /api/products/:category
    getProductsByCategory: (category) => {
        const categories = {
            flowers: FloraDB.flowers,
            seeds: FloraDB.seeds,
            tools: FloraDB.tools,
            bestsellers: FloraDB.bestsellers,
            themed: FloraDB.themedBouquets
        };
        return categories[category] ? { status: 200, data: categories[category] } : { status: 404, error: "Category not found" };
    },
    
    // GET /api/products/search?q=:query
    searchProducts: (query) => {
        const searchTerm = query.toLowerCase();
        const allProducts = [
            ...FloraDB.bestsellers, ...FloraDB.flowers, 
            ...FloraDB.seeds, ...FloraDB.tools, ...FloraDB.themedBouquets
        ];
        const results = allProducts.filter(p => p.name.toLowerCase() === searchTerm);
        return { status: 200, data: results };
    },
    
    // GET /api/cart
    getCart: () => {
        return { status: 200, data: cart, total: getCartTotal() };
    },
    
    // POST /api/cart/add
    addToCartAPI: (item) => {
        addToCart(item);
        return { status: 201, message: "Item added to cart", cart: cart };
    },
    
    // DELETE /api/cart/remove/:id
    removeFromCartAPI: (cartId) => {
        removeFromCart(cartId);
        return { status: 200, message: "Item removed from cart" };
    },
    
    // POST /api/checkout
    checkout: (orderDetails) => {
        if (cart.length === 0) {
            return { status: 400, error: "Cart is empty" };
        }
        const order = {
            orderId: "ORD-" + Date.now(),
            items: [...cart],
            total: getCartTotal(),
            customer: orderDetails,
            orderDate: new Date().toISOString()
        };
        clearCart();
        return { status: 200, message: "Order placed successfully", order: order };
    },
    
    // POST /api/newsletter/signup
    newsletterSignup: (name, email) => {
        return { status: 200, message: "Successfully subscribed to newsletter" };
    }
};

// Expose API globally for testing
window.FloraAPI = FloraAPI;
window.removeFromCart = removeFromCart;
window.addToCart = addToCart;

// ============================================
// UI RENDERING FUNCTIONS
// ============================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function renderBestsellers() {
    const grid = document.getElementById('bestsellersGrid');
    if (!grid) return;
    
    grid.innerHTML = FloraDB.bestsellers.map(product => `
        <div class="product-card" data-product-id="${product.id}" data-testid="product-${product.id}">
            <div class="product-img">
                ${product.imageUrl ? 
                    `<img src="${product.imageUrl}" alt="${product.name}" onerror="this.parentElement.innerHTML='${product.emoji}'">` : 
                    product.emoji}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price} LE</p>
                <button class="btn signup-btn add-to-cart-btn" data-product='${JSON.stringify(product)}' data-testid="add-${product.id}" style="margin-top: 0.5rem; padding: 0.5rem 1rem;">Add to Cart 🛒</button>
            </div>
        </div>
    `);
    
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const product = JSON.parse(btn.dataset.product);
            addToCart({ ...product, emoji: product.emoji || '🌸' });
        });
    });
}

function renderFlowerSelection(containerId, onSelect) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = FloraDB.flowers.map(flower => `
        <div class="flower-item" data-flower-id="${flower.id}" data-price="${flower.price}" data-name="${flower.name}" data-emoji="${flower.emoji}" data-image="${flower.imageUrl || ''}" data-testid="flower-${flower.id}">
            <div class="flower-icon">
                ${flower.imageUrl ? 
                    `<img src="${flower.imageUrl}" alt="${flower.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 10px;" onerror="this.style.display='none'; this.parentElement.innerHTML='${flower.emoji}'">` : 
                    flower.emoji}
            </div>
            <div class="flower-name">${flower.name}</div>
            <div class="flower-price">${flower.price} LE</div>
        </div>
    `);
    
    container.querySelectorAll('.flower-item').forEach(item => {
        item.addEventListener('click', () => {
            const flower = {
                id: item.dataset.flowerId,
                name: item.dataset.name,
                price: parseInt(item.dataset.price),
                emoji: item.dataset.emoji,
                imageUrl: item.dataset.image || null
            };
            onSelect(flower);
        });
    });
}

// ============================================
// MODAL HANDLERS
// ============================================

// Category clicks
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        const modal = document.getElementById('categoryModal');
        const title = document.getElementById('categoryTitle');
        const content = document.getElementById('categoryContent');
        
        const products = FloraAPI.getProductsByCategory(category).data;
        title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        
        content.innerHTML = `
    <div class="product-grid">
        ${products.map(product => `
            <div class="product-display" data-testid="product-${product.id}">
                ${product.imageUrl ? 
                    `<img src="${product.imageUrl}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.querySelector('.fallback-emoji').style.display='block'">
                     <div class="fallback-emoji" style="font-size: 4rem; display: none;">${product.emoji || '🌸'}</div>` : 
                    `<div style="font-size: 4rem;">${product.emoji || '🌸'}</div>`}
                <h3>${product.name}</h3>
                <p class="price">${product.price} LE</p>
                <button class="btn signup-btn add-category-item" data-product='${JSON.stringify(product)}' data-testid="add-category-${product.id}">Add to Cart 🛒</button>
            </div>
        `).join('')}
    </div>
`;
        
        content.querySelectorAll('.add-category-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const product = JSON.parse(btn.dataset.product);
                addToCart({ ...product, emoji: product.emoji });
                modal.style.display = 'none';
            });
        });
        
        modal.style.display = 'block';
    });
});

// Flower category - shows options
document.querySelector('[data-category="flowers"]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const optionsModal = document.createElement('div');
    optionsModal.className = 'modal';
    optionsModal.style.display = 'block';
    optionsModal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>🌸 Flower Options</h2>
            <div class="options-grid">
                <div class="option-btn" data-option="themed" data-testid="themed-bouquets-btn">🌸 By Themed Bouquets</div>
                <div class="option-btn" data-option="custom" data-testid="custom-bouquet-btn">🎨 Customize Bouquet</div>
                <div class="option-btn" data-option="potted" data-testid="potted-flowers-btn">🌱 Potted Flowers</div>
            </div>
        </div>
    `;
    document.body.appendChild(optionsModal);
    
    optionsModal.querySelector('.close').onclick = () => optionsModal.remove();
    optionsModal.querySelector('[data-option="themed"]').onclick = () => {
        optionsModal.remove();
        showThemedBouquets();
    };
    optionsModal.querySelector('[data-option="custom"]').onclick = () => {
        optionsModal.remove();
        showCustomBouquet();
    };
    optionsModal.querySelector('[data-option="potted"]').onclick = () => {
        optionsModal.remove();
        showPottedFlowers();
    };
});

function showThemedBouquets() {
    const modal = document.getElementById('themedModal');
    const options = document.getElementById('themedOptions');
    
    if (!options) return;
    
    options.innerHTML = FloraDB.themedBouquets.map((bouquet, index) => {
        // Determine what to show in the image area
        let imageHtml = '';
        if (bouquet.imageUrl && bouquet.imageUrl !== 'null' && bouquet.imageUrl !== null) {
            imageHtml = `<img src="${bouquet.imageUrl}" alt="${bouquet.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\'emoji-placeholder\'>${bouquet.emoji || '🌸'}</div>'">`;
        } else {
            imageHtml = `<div class="emoji-placeholder">${bouquet.emoji || '🌸'}</div>`;
        }
        
        return `
            <div class="themed-bouquet-card" data-bouquet-index="${index}" data-testid="themed-${bouquet.name.replace(/\s/g, '-')}">
                <div class="themed-bouquet-image">
                    ${imageHtml}
                </div>
                <div class="themed-bouquet-name">${bouquet.name}</div>
                <div class="themed-bouquet-description">${bouquet.description}</div>
                <div class="themed-bouquet-price">${bouquet.price} LE</div>
                <button class="btn signup-btn add-themed-cart-btn" data-bouquet-index="${index}" style="margin-top: 0.5rem; padding: 0.5rem 1rem; font-size: 0.9rem;">Add to Cart 🛒</button>
            </div>
        `;
    }).join('');
    
    // Add event listeners to all themed bouquet cards
    const cards = options.querySelectorAll('.themed-bouquet-card');
    cards.forEach(card => {
        const index = parseInt(card.dataset.bouquetIndex);
        const bouquet = FloraDB.themedBouquets[index];
        
        // Click on card (but not button) adds to cart
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-themed-cart-btn')) return;
            addToCart({ 
                ...bouquet, 
                emoji: bouquet.emoji || '🌸', 
                name: `${bouquet.name} Bouquet`,
                imageUrl: bouquet.imageUrl
            });
            modal.style.display = 'none';
            showNotification(`${bouquet.name} Bouquet added to cart!`);
        });
        
        // Click on button adds to cart
        const button = card.querySelector('.add-themed-cart-btn');
        if (button) {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart({ 
                    ...bouquet, 
                    emoji: bouquet.emoji || '🌸', 
                    name: `${bouquet.name} Bouquet`,
                    imageUrl: bouquet.imageUrl
                });
                modal.style.display = 'none';
                showNotification(`${bouquet.name} Bouquet added to cart!`);
            });
        }
    });
    
    modal.style.display = 'block';
}

let currentBouquet = { size: null, limit: 0, basePrice: 0, flowers: [] };
let selectedFlowers = [];

function showCustomBouquet() {
    const modal = document.getElementById('customModal');
    selectedFlowers = [];
    currentBouquet = { size: null, limit: 0, basePrice: 0 };
    updateCustomUI();
    
    renderFlowerSelection('flowerSelection', (flower) => {
        if (selectedFlowers.length < currentBouquet.limit) {
            selectedFlowers.push(flower);
            updateCustomUI();
        } else {
            showNotification(`Limit reached! Maximum ${currentBouquet.limit} flowers.`);
        }
    });
    
    document.querySelectorAll('#sizeOptions .option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentBouquet.size = btn.dataset.size;
            currentBouquet.limit = parseInt(btn.dataset.limit);
            currentBouquet.basePrice = parseInt(btn.dataset.price);
            selectedFlowers = [];
            updateCustomUI();
        });
    });
    
    modal.style.display = 'block';
}

function updateCustomUI() {
    const sizeLimit = document.getElementById('sizeLimit');
    const currentCount = document.getElementById('currentFlowerCount');
    const selectedList = document.getElementById('selectedFlowersList');
    const customTotal = document.getElementById('customTotal');
    
    if (sizeLimit) sizeLimit.textContent = currentBouquet.limit;
    if (currentCount) currentCount.textContent = selectedFlowers.length;
    
    const flowersTotal = selectedFlowers.reduce((sum, f) => sum + f.price, 0);
    const total = currentBouquet.basePrice + flowersTotal;
    if (customTotal) customTotal.textContent = total;
    
    if (selectedList) {
        if (selectedFlowers.length === 0) {
            selectedList.innerHTML = '<p>No flowers selected yet</p>';
        } else {
            selectedList.innerHTML = selectedFlowers.map((f, i) => `
                <div class="product-item">
                    <span>${f.emoji} ${f.name}</span>
                    <span>${f.price} LE</span>
                    <button class="remove-btn" onclick="removeFlowerFromBouquet(${i})">Remove</button>
                </div>
            `).join('');
        }
    }
}

window.removeFlowerFromBouquet = (index) => {
    selectedFlowers.splice(index, 1);
    updateCustomUI();
};

document.getElementById('addCustomToCart')?.addEventListener('click', () => {
    if (!currentBouquet.size || selectedFlowers.length === 0) {
        showNotification('Please select size and at least one flower!');
        return;
    }
    const total = currentBouquet.basePrice + selectedFlowers.reduce((sum, f) => sum + f.price, 0);
    addToCart({
        name: `Custom Bouquet (${currentBouquet.size})`,
        price: total,
        emoji: '🎨',
        details: `${selectedFlowers.length}/${currentBouquet.limit} flowers`
    });
    document.getElementById('customModal').style.display = 'none';
});

let currentPotted = { boxSize: null, boxCount: 0, boxPrice: 0, shape: null, flower: null };

function showPottedFlowers() {
    const modal = document.getElementById('pottedModal');
    currentPotted = { boxSize: null, boxCount: 0, boxPrice: 0, shape: null, flower: null };
    updatePottedUI();
    
    renderFlowerSelection('pottedFlowerSelection', (flower) => {
        if (currentPotted.boxSize) {
            currentPotted.flower = flower;
            updatePottedUI();
        } else {
            showNotification('Please select box size first!');
        }
    });
    
    document.querySelectorAll('#boxSizeOptions .option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentPotted.boxSize = btn.dataset.box;
            currentPotted.boxCount = parseInt(btn.dataset.count);
            currentPotted.boxPrice = parseInt(btn.dataset.price);
            currentPotted.flower = null;
            updatePottedUI();
        });
    });
    
    document.querySelectorAll('#shapeOptions .option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentPotted.shape = btn.dataset.shape;
            updatePottedUI();
        });
    });
    
    modal.style.display = 'block';
}

function updatePottedUI() {
    const pottedTotal = document.getElementById('pottedTotal');
    const pottedDetails = document.getElementById('pottedDetails');
    
    let total = 0;
    if (currentPotted.boxPrice && currentPotted.flower) {
        total = currentPotted.boxPrice + (currentPotted.flower.price * currentPotted.boxCount);
    } else if (currentPotted.boxPrice) {
        total = currentPotted.boxPrice;
    }
    if (pottedTotal) pottedTotal.textContent = total;
    
    if (pottedDetails) {
        pottedDetails.innerHTML = `
            <p>Box: ${currentPotted.boxSize || 'Not selected'} (${currentPotted.boxCount} flowers)</p>
            <p>Shape: ${currentPotted.shape || 'Not selected'}</p>
            <p>Flower: ${currentPotted.flower ? `${currentPotted.flower.emoji} ${currentPotted.flower.name}` : 'Not selected'}</p>
            <p>Box base price: ${currentPotted.boxPrice} LE</p>
            ${currentPotted.flower ? `<p>Flowers total: ${currentPotted.flower.price * currentPotted.boxCount} LE (${currentPotted.flower.price} LE × ${currentPotted.boxCount})</p>` : ''}
        `;
    }
}

document.getElementById('addPottedToCart')?.addEventListener('click', () => {
    if (!currentPotted.boxSize || !currentPotted.shape || !currentPotted.flower) {
        showNotification('Please select box size, shape, and flower type!');
        return;
    }
    const total = currentPotted.boxPrice + (currentPotted.flower.price * currentPotted.boxCount);
    addToCart({
        name: `Potted Box (${currentPotted.boxSize}, ${currentPotted.shape})`,
        price: total,
        emoji: '🌱',
        details: `${currentPotted.boxCount} × ${currentPotted.flower.name}`
    });
    document.getElementById('pottedModal').style.display = 'none';
});

// Search functionality
document.getElementById('searchBar')?.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length === 0) return;
    
    const results = FloraAPI.searchProducts(query).data;
    const modal = document.getElementById('searchModal');
    const resultsDiv = document.getElementById('searchResults');
    
    if (results.length > 0) {
        resultsDiv.innerHTML = results.map(product => `
            <div class="product-display">
                <div style="font-size: 4rem;">${product.emoji || '🌸'}</div>
                <h3>${product.name}</h3>
                <p class="price">${product.price} LE</p>
                <button class="btn signup-btn search-add-btn" data-product='${JSON.stringify(product)}'>Add to Cart</button>
            </div>
        `).join('');
        
        resultsDiv.querySelectorAll('.search-add-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const product = JSON.parse(btn.dataset.product);
                addToCart({ ...product, emoji: product.emoji || '🌸' });
                modal.style.display = 'none';
                document.getElementById('searchBar').value = '';
            });
        });
    } else {
        resultsDiv.innerHTML = '<div class="search-no-results">No products found matching your search.</div>';
    }
    modal.style.display = 'block';
});

// Modal close handlers
document.querySelectorAll('.modal .close, .category-close, .themed-close, .custom-close, .potted-close, .search-close, .cart-close, .checkout-close, .order-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        if (modal) modal.style.display = 'none';
    });
});

// Signup modal
document.getElementById('signupBtn')?.addEventListener('click', () => {
    document.getElementById('signupModal').style.display = 'block';
});

document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const result = FloraAPI.newsletterSignup(name, email);
    document.getElementById('successMsg').style.display = 'block';
    setTimeout(() => {
        document.getElementById('signupModal').style.display = 'none';
        document.getElementById('signupForm').reset();
        document.getElementById('successMsg').style.display = 'none';
    }, 5000);
});

// About modal
document.getElementById('aboutBtn')?.addEventListener('click', () => {
    document.getElementById('aboutModal').style.display = 'block';
});

// Cart modal
document.getElementById('cartBtn')?.addEventListener('click', () => {
    updateCartUI();
    document.getElementById('cartModal').style.display = 'block';
});

// Checkout
document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    document.getElementById('cartModal').style.display = 'none';
    document.getElementById('checkoutModal').style.display = 'block';
});

document.getElementById('checkoutForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const orderDetails = {
        name: document.getElementById('checkoutName').value,
        address: document.getElementById('checkoutAddress').value,
        phone: document.getElementById('checkoutPhone').value
    };
    const result = FloraAPI.checkout(orderDetails);
    if (result.status === 200) {
        document.getElementById('checkoutModal').style.display = 'none';
        document.getElementById('orderConfirmationModal').style.display = 'block';
        updateCartUI();
    }
});

document.getElementById('closeOrderBtn')?.addEventListener('click', () => {
    document.getElementById('orderConfirmationModal').style.display = 'none';
});

// Close modals by clicking outside
window.onclick = (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderBestsellers();
});