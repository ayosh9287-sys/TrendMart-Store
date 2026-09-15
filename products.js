var isUserLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; 

if (!isUserLoggedIn) {
    alert("Access Denied! Please login first to view this category.");
    location.href = "log.html"; 
}
var womenProducts = [
    { id: 1, name: "Classic White Cotton Shirt", type: "Shirts", desc: "Premium breathable cotton shirt perfect for formal and casual wear.", price: 34.99, img: "imgs/photo_2026-09-07_14-52-18.jpg" },
    { id: 2, name: "High-Waist Denim Jeans", type: "Pants", desc: "Stretchable slim-fit denim pants with classic five-pocket styling.", price: 45.00, img: "imgs/photo_2026-09-07_14-52-24.jpg" },
    { id: 3, name: "Cozy Knit Oversized Sweater", type: "Sweaters", desc: "Warm and soft wool-blend sweater for chilly autumn evenings.", price: 55.50, img: "imgs/photo_2026-09-07_14-54-15.jpg" },
    { id: 4, name: "Casual Striped Button-Down", type: "Shirts", desc: "Lightweight linen striped shirt with long sleeves and relaxed fit.", price: 29.99, img: "imgs/photo_2026-09-07_14-52-29.jpg" },
    { id: 5, name: "Elegant Wide-Leg Trousers", type: "Pants", desc: "High-waisted flowing trousers ideal for business meetings.", price: 49.00, img: "imgs/photo_2026-09-09_13-35-40.jpg" },
    { id: 6, name: "V-Neck Cashmere Sweater", type: "Sweaters", desc: "Luxury pure cashmere knit sweater providing ultimate comfort.", price: 89.99, img: "imgs/photo_2026-09-09_13-35-47.jpg" },
    { id: 7, name: "Floral Summer Day Dress", type: "Dresses", desc: "Vibrant floral printed midi dress with an adjustable waist tie.", price: 39.95, img: "imgs/photo_2026-09-09_13-35-52.jpg" },
    { id: 8, name: "Satin Silk Party Blouse", type: "Shirts", desc: "Glossy silk blouse featuring elegant cuffs and a smooth finish.", price: 42.00, img: "imgs/photo_2026-09-09_13-35-57.jpg" },
    { id: 9, name: "Cargo Utility Joggers", type: "Pants", desc: "Streetwear style cargo pants with elastic ankle cuffs and pockets.", price: 38.50, img: "imgs/photo_2026-09-09_13-36-02.jpg" },
    { id: 10, name: "Turtleneck Ribbed Sweater", type: "Sweaters", desc: "Snug fit ribbed pullover sweater, easy to layer under jackets.", price: 27.00, img: " imgs/photo_2026-09-09_13-43-24.jpg" },
    { id: 11, name: "Linen Cropped Summer Shirt", type: "Shirts", desc: "Short sleeve pure linen cropped shirt for hot sunny days.", price: 24.99, img: "imgs/photo_2026-09-09_13-43-30.jpg " },
    { id: 12, name: "Classic Black Leather Pants", type: "Pants", desc: "Faux leather sleek trousers for an edgy evening look.", price: 59.99, img: "imgs/photo_2026-09-09_13-43-38.jpg" },
    { id: 13, name: "Cropped Cable-Knit Cardigan", type: "Sweaters", desc: "Trendy button-up cardigan with vintage cable knit textures.", price: 36.00, img: "imgs/photo_٢٠٢٦-٠٩-٠٩_١٣-٤٣-٠٥.jpg" },
    { id: 14, name: "Boho Maxi Beach Dress", type: "Dresses", desc: "Loose fit breathable long maxi dress for your beach vacations.", price: 44.50, img: "imgs/photo_2026-09-09_13-50-40.jpg" },
    { id: 15, name: "Oversized Flannel Plaid Shirt", type: "Shirts", desc: "Super soft flannel boyfriend shirt in classic plaid patterns.", price: 31.99, img: "imgs/photo_2026-09-09_13-51-01.jpg" },
  
];

function renderProducts() {
    var container = document.getElementById("womenProductsContainer");
    if (!container) return; 
    var htmlContent = "";

    for (var i = 0; i < womenProducts.length; i++) {
        var product = womenProducts[i];
        
        htmlContent += `
            <div class="product-card">
                <div class="prod-img-box">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="prod-info">
                    <span class="prod-category">${product.type}</span>
                    <h3 class="prod-title">${product.name}</h3>
                    <p class="prod-description">${product.desc}</p>
                    <div class="prod-price-row">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <button type="button" class="btn-add-cart" onclick="addToCart(${product.id})">
                            <i class="fa fa-shopping-cart"></i> Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    container.innerHTML = htmlContent;
}

function addToCart(productId) {
    var currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    
    var selectedProduct = null;
    for (var i = 0; i < womenProducts.length; i++) {
        if (womenProducts[i].id === productId) {
            selectedProduct = womenProducts[i];
            break;
        }
    }

    if (selectedProduct) {
        currentCart.push(selectedProduct); 
        localStorage.setItem("shoppingCart", JSON.stringify(currentCart)); // حفظ السلة المحدثة
        updateCartCount(); 
    }
}

function updateCartCount() {
    var currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    var countSpan = document.getElementById("cartCount");
    if (countSpan) {
        countSpan.textContent = currentCart.length;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    renderProducts();
    updateCartCount();
});
// قسم الرجال
var menProducts = [
    { id: 101, name: "Premium Slim-Fit Oxford Shirt", type: "Shirts", desc: "Classic tailored Oxford cotton shirt suitable for office or evenings.", price: 39.99, img: "imgs/photo_2026-09-09_14-09-16.jpg" },
    { id: 102, name: "Classic Straight-Leg Chino Pants", type: "Pants", desc: "Durable cotton-stretch chino trousers offering absolute daily comfort.", price: 45.00, img: "imgs/photo_2026-09-09_14-09-21.jpg" },
    { id: 103, name: "Crewneck Ribbed Cotton Sweater", type: "Sweaters", desc: "Lightweight breathable knit sweater, perfect for seasonal layering.", price: 49.50, img: "imgs/photo_2026-09-09_14-09-26.jpg" },
    { id: 104, name: "Urban Bomber Casual Jacket", type: "Jackets", desc: "Water-resistant stylish bomber jacket with zipper pockets and cuffs.", price: 69.99, img: "imgs/photo_2026-09-09_20-19-51.jpg" },
    { id: 105, name: "Modern Denim Button-Down Shirt", type: "Shirts", desc: "Rugged yet refined vintage wash denim shirt made from pure cotton.", price: 34.95, img: "imgs/photo_2026-09-09_20-21-12.jpg" },
    { id: 106, name: "Relaxed Fit Cargo Trousers", type: "Pants", desc: "Heavyweight utility cargo pants featuring secure side flap pockets.", price: 42.00, img: "imgs/photo_2026-09-09_20-21-47.jpg" },
    { id: 107, name: "Cable-Knit Wool Blend Sweater", type: "Sweaters", desc: "Thick cozy knit pullover designed to keep you warm in cold weather.", price: 59.99, img: "imgs/photo_2026-09-09_20-24-31.jpg" },
    { id: 108, name: "Genuine Black Leather Biker Jacket", type: "Jackets", desc: "Premium quality sleek faux-leather jacket with metallic hardware.", price: 95.00, img: "imgs/photo_2026-09-09_20-24-58.jpg" },
    { id: 109, name: "Smart Business Checkered Shirt", type: "Shirts", desc: "Wrinkle-resistant fine checkered dress shirt for a sharp formal look.", price: 38.00, img: "imgs/photo_2026-09-09_20-27-15.jpg" },
    { id: 110, name: "Slim Fit Athletic Stretch Joggers", type: "Pants", desc: "Premium fleece joggers with drawstring waist for sports and leisure.", price: 29.99, img: "imgs/photo_2026-09-09_20-27-47.jpg" },
    { id: 111, name: "V-Neck Merino Wool Sweater", type: "Sweaters", desc: "Ultra-soft luxury merino wool pullover with a smooth fine knit finish.", price: 54.50, img: "imgs/photo_2026-09-09_20-30-09.jpg" },
    { id: 112, name: "Classic Hooded Windbreaker", type: "Jackets", desc: "Lightweight packable hooded sports jacket protects against wind and rain.", price: 48.00, img: "imgs/photo_2026-09-09_20-31-53.jpg" },
    { id: 113, name: "Summer Short-Sleeve Linen Shirt", type: "Shirts", desc: "Breathable pure linen holiday shirt with a relaxed Cuban collar.", price: 27.99, img: "imgs/photo_2026-09-09_20-33-08.jpg" },
    { id: 114, name: "Tailored Formal Suit Pants", type: "Pants", desc: "Elegant slim trousers with a front crease, perfect for weddings.", price: 55.00, img: "imgs/photo_2026-09-09_20-34-49.jpg" },
    { id: 115, name: "Striped Loose Knit Sweater", type: "Sweaters", desc: "Casual beach style horizontal striped jumper with a loose trendy fit.", price: 36.50, img: "imgs/photo_2026-09-09_20-35-11.jpg" },

];

function renderMenProducts() {
    var container = document.getElementById("menProductsContainer");
    if (!container) return; 

    var htmlContent = "";

    for (var i = 0; i < menProducts.length; i++) {
        var product = menProducts[i];
        
        htmlContent += `
            <div class="product-card">
                <div class="prod-img-box">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="prod-info">
                    <span class="prod-category">${product.type}</span>
                    <h3 class="prod-title">${product.name}</h3>
                    <p class="prod-description">${product.desc}</p>
                    <div class="prod-price-row">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <button type="button" class="btn-add-cart" onclick="addMenToCart(${product.id})">
                            <i class="fa fa-shopping-cart"></i> Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    container.innerHTML = htmlContent;
}

function addMenToCart(productId) {
    var currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    
    var selectedProduct = null;
    for (var i = 0; i < menProducts.length; i++) {
        if (menProducts[i].id === productId) {
            selectedProduct = menProducts[i];
            break;
        }
    }

    if (selectedProduct) {
        currentCart.push(selectedProduct); 
        localStorage.setItem("shoppingCart", JSON.stringify(currentCart)); 
        updateCartCount(); 
    }
}

function updateCartCount() {
    var currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    var countSpan = document.getElementById("cartCount");
    if (countSpan) {
        countSpan.textContent = currentCart.length;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    renderMenProducts();
    updateCartCount();
});
// قسم النضارات
var sunglassesProducts = [
    { id: 201, name: "Classic Black Aviator", type: "Sunglasses", desc: "Timeless aviator design with dark polarized lenses and a durable metal frame.", price: 24.99, img: "imgs/photo_2026-09-09_20-42-41.jpg" },
    { id: 202, name: "Vintage Tortoise Wayfarer", type: "Sunglasses", desc: "Retro-style wayfarer frames featuring warm tortoise patterns and UV400 protection.", price: 19.99, img: "imgs/photo_2026-09-09_20-42-44.jpg" },
    { id: 203, name: "Modern Round Metal Frame", type: "Sunglasses", desc: "Minimalist circular glasses with slim golden temples and green tinted lenses.", price: 29.50, img: "imgs/photo_2026-09-09_20-42-48.jpg" },
    { id: 204, name: "Oversized Cat-Eye Sunglasses", type: "Sunglasses", desc: "Bold and elegant cat-eye silhouette designed for high-fashion daily streetwear.", price: 32.00, img: "imgs/photo_2026-09-09_20-42-54.jpg" },
    { id: 205, name: "Sport Polarized Wrap-Around", type: "Sunglasses", desc: "Aerodynamic lightweight glasses providing maximum shield against sun and wind.", price: 35.95, img: "imgs/photo_2026-09-09_20-42-57.jpg" },
    { id: 206, name: "Sleek Hexagonal Geometric", type: "Sunglasses", desc: "Trendy polygon metal shape featuring flat ocean-blue lenses for summer vibes.", price: 27.99, img: "imgs/photo_2026-09-09_20-43-01.jpg" },
    { id: 207, name: "Rimless Retro Rectangle", type: "Sunglasses", desc: "90s aesthetic ultra-light rimless glasses with pink gradient lenses.", price: 22.00, img: "imgs/photo_2026-09-09_20-43-06.jpg" },
    { id: 208, name: "Steampunk Cyberpunk Goggles", type: "Sunglasses", desc: "Industrial design with leather side shields and reflective silver mirror coat.", price: 45.00, img: "imgs/photo_2026-09-09_20-43-12.jpg" },
    { id: 209, name: "Luxury Golden Clubmaster", type: "Sunglasses", desc: "Semi-rimless browline frame accented with premium polished gold hardware.", price: 49.99, img: "imgs/photo_2026-09-09_20-43-23.jpg" },
    { id: 210, name: "Futuristic Shield Visor", type: "Sunglasses", desc: "Monoblock single-lens futuristic visor style for a daring modern statement.", price: 38.50, img: "imgs/photo_2026-09-09_20-43-27.jpg" },
    { id: 211, name: "Classic Square Matte Black", type: "Sunglasses", desc: "Heavy-duty matte finish square frames with deep charcoal grey polarized film.", price: 25.00, img: "imgs/photo_2026-09-09_20-43-31.jpg" },
    { id: 212, name: "Clear Transparent Crystal Frame", type: "Sunglasses", desc: "Ice-clear transparent acetate frames fitted with elegant silver mirror tint.", price: 26.50, img: "imgs/photo_2026-09-09_20-43-34.jpg" },
    { id: 213, name: "Gradient Browline Smart Glasses", type: "Sunglasses", desc: "Dual-tone gradient fading frame providing a clean intellectual everyday look.", price: 23.99, img: "imgs/photo_2026-09-09_20-43-01.jpg" },
    { id: 214, name: "Wood Grain Bamboo Temples", type: "Sunglasses", desc: "Eco-friendly sunglasses made with authentic handmade organic bamboo wood sides.", price: 42.50, img: "imgs/photo_2026-09-09_20-43-12.jpg" },
    { id: 215, name: "Tiny Matrix Neon Glasses", type: "Sunglasses", desc: "Micro-sized narrow oval lenses in bright fluorescent green for raves.", price: 18.00, img: "imgs/photo_2026-09-09_20-42-48.jpg" },

];

function renderSunglassesProducts() {
    var container = document.getElementById("sunglassesProductsContainer");
    if (!container) return; 

    var htmlContent = "";

    for (var i = 0; i < sunglassesProducts.length; i++) {
        var product = sunglassesProducts[i];
        
        htmlContent += `
            <div class="product-card">
                <div class="prod-img-box">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="prod-info">
                    <span class="prod-category">${product.type}</span>
                    <h3 class="prod-title">${product.name}</h3>
                    <p class="prod-description">${product.desc}</p>
                    <div class="prod-price-row">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <button type="button" class="btn-add-cart" onclick="addSunglassesToCart(${product.id})">
                            <i class="fa fa-shopping-cart"></i> Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    container.innerHTML = htmlContent;
}

function addSunglassesToCart(productId) {
    var currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    
    var selectedProduct = null;
    for (var i = 0; i < sunglassesProducts.length; i++) {
        if (sunglassesProducts[i].id === productId) {
            selectedProduct = sunglassesProducts[i];
            break;
        }
    }

    if (selectedProduct) {
        currentCart.push(selectedProduct); 
        localStorage.setItem("shoppingCart", JSON.stringify(currentCart)); 
        updateCartCount(); 
    }
}

function updateCartCount() {
    var currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    var countSpan = document.getElementById("cartCount");
    if (countSpan) {
        countSpan.textContent = currentCart.length;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    renderSunglassesProducts();
    updateCartCount();
});
// قسم العطور
var perfumesProducts = [
    { id: 301, name: "Midnight Oud Eau De Parfum", type: "Oriental", desc: "Rich woody oud blended with warm amber and smoky incense for mysterious winter nights.", price: 85.00, img: "imgs/photo_2026-09-09_20-51-37.jpg" },
    { id: 302, name: "Velvet Rose & Vanilla", type: "Floral", desc: "A sweet seductive blend of blooming damask roses, creamy vanilla, and soft musk.", price: 65.50, img: "imgs/photo_2026-09-09_20-51-41.jpg" },
    { id: 303, name: "Ocean Breeze Fresh Intense", type: "Fresh", desc: "Crisp marine notes combined with zesty bergamot and cedarwood for daily energy.", price: 49.99, img: "imgs/photo_2026-09-09_20-51-45.jpg" },
    { id: 304, name: "Golden Amber & Sandalwood", type: "Woody", desc: "Luxury warm sandalwood essence enriched with golden amber and sweet patchouli spiced tones.", price: 79.00, img: "imgs/photo_2026-09-09_20-51-48.jpg" },
    { id: 305, name: "Imperial Jasmine Blossom", type: "Floral", desc: "Pure elegant extraction of fresh white jasmine petals with a delicate touch of green tea.", price: 55.00, img: "imgs/photo_2026-09-09_20-53-03.jpg" },
    { id: 306, name: "Royal Musk Purity", type: "Clean", desc: "Soft white musk mixed with powdery notes, creating an ultimate clean shower-fresh scent.", price: 42.50, img: "imgs/photo_2026-09-09_20-54-13.jpg" },
    { id: 307, name: "Spiced Saffron & Leather", type: "Leather", desc: "Bold sophisticated fragrance combining luxurious saffron spice, dark leather, and tobacco.", price: 92.00, img: "imgs/photo_2026-09-09_20-58-20.jpg" },
    { id: 308, name: "Citrus Orchard & Mint Splash", type: "Fresh", desc: "Vibrant sparkling blend of Sicilian lemon, juicy grapefruit, and crushed mint leaves.", price: 38.99, img: "imgs/photo_2026-09-09_20-58-17.jpg" },
    { id: 309, name: "Sweet Caramel & Praline Dream", type: "Gourmand", desc: "Warm delicious dessert notes of melted caramel, roasted praline, and warm vanilla bean.", price: 59.95, img: "imgs/photo_2026-09-09_20-54-13.jpg" },
    { id: 310, name: "Mystic Patchouli Elixir", type: "Woody", desc: "Earthy deep patchouli leaves balanced with dark cocoa and elegant spicy cardamon.", price: 72.00, img: "imgs/photo_2026-09-09_20-53-03.jpg" },
    { id: 311, name: "Cherry Blossom Festival", type: "Fruity", desc: "Joyful sweet Japanese sakura blooms mixed with juicy red berries and sweet pear essence.", price: 45.00, img: "imgs/photo_2026-09-09_20-54-17.jpg" },
    { id: 312, name: "Classic French Lavender Mist", type: "Aromatic", desc: "Calming natural lavender fields blended with refreshing eucalyptus and clean sage.", price: 35.00, img: "imgs/photo_2026-09-09_20-58-17.jpg" },
    { id: 313, name: "Pure Vetiver & Cedar Sport", type: "Woody", desc: "Earthy smoky vetiver roots combined with sharp dynamic cedar wood for active gentlemen.", price: 58.00, img: "imgs/photo_2026-09-09_20-54-13.jpg" },
    { id: 314, name: "Exotic Coconut & Tiare Flower", type: "Tropical", desc: "Summer holiday vibe featuring sun-warmed tropical coconut milk and monoi flowers.", price: 48.50, img: "imgs/photo_2026-09-09_20-58-20.jpg" },
    { id: 315, name: "Dark Orchid & Black Plum", type: "Floral", desc: "Gothic sensual bouquet of rare dark orchids, midnight plums, and dark dark chocolate patchouli.", price: 78.00, img: "imgs/photo_2026-09-09_20-51-48.jpg" },
    
];

function renderPerfumesProducts() {
    var container = document.getElementById("perfumesProductsContainer");
    if (!container) return; 

    var htmlContent = "";

    for (var i = 0; i < perfumesProducts.length; i++) {
        var product = perfumesProducts[i];
        
        htmlContent += `
            <div class="product-card">
                <div class="prod-img-box">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="prod-info">
                    <span class="prod-category">${product.type}</span>
                    <h3 class="prod-title">${product.name}</h3>
                    <p class="prod-description">${product.desc}</p>
                    <div class="prod-price-row">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <button type="button" class="btn-add-cart" onclick="addPerfumesToCart(${product.id})">
                            <i class="fa fa-shopping-cart"></i> Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    container.innerHTML = htmlContent;
}

function addPerfumesToCart(productId) {
    var currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    
    var selectedProduct = null;
    for (var i = 0; i < perfumesProducts.length; i++) {
        if (perfumesProducts[i].id === productId) {
            selectedProduct = perfumesProducts[i];
            break;
        }
    }

    if (selectedProduct) {
        currentCart.push(selectedProduct); 
        localStorage.setItem("shoppingCart", JSON.stringify(currentCart)); 
        updateCartCount(); 
    }
}

function updateCartCount() {
    var currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    var countSpan = document.getElementById("cartCount");
    if (countSpan) {
        countSpan.textContent = currentCart.length;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    renderPerfumesProducts();
    updateCartCount();
});
// قسم الاكسسوارات
var accessoriesProducts = [
    { id: 401, name: "Minimalist 18K Gold Plated Chain", type: "Necklaces", desc: "Delicate layerable layered gold chain necklace crafted for elegant everyday wear.", price: 28.99, img: "imgs/photo_2026-09-09_21-03-30.jpg" },
    { id: 402, name: "Silver Multi-Layered Pearl Choker", type: "Necklaces", desc: "Stunning combination of fine freshwater pearls and sterling silver chain straps.", price: 34.50, img: "imgs/photo_2026-09-09_21-03-33.jpg" },
    { id: 403, name: "Genuine Vintage Leather Cuff", type: "Bracelets", desc: "Handmade dark brown braided leather bracelet secured with a magnetic steel clasp.", price: 19.99, img: "imgs/photo_2026-09-09_21-03-37.jpg" },
    { id: 404, name: "Unisex Polished Silver Band Ring", type: "Rings", desc: "Solid 925 sterling silver classic band ring with a high-gloss polished comfort fit finish.", price: 25.00, img: "imgs/photo_2026-09-09_21-03-40.jpg" },
    { id: 405, name: "Organic Canvas Eco Tote Bag", type: "Bags", desc: "Heavy-duty cotton canvas tote bag featuring spacious storage and a minimalist typography print.", price: 15.99, img: "imgs/photo_2026-09-09_21-03-44.jpg" },
    { id: 406, name: "Classic Roman Numeral Bangle", type: "Bracelets", desc: "Rose gold finished sleek bangle detailed with engraved traditional roman numerals.", price: 29.95, img: "imgs/photo_2026-09-09_21-03-47.jpg" },
    { id: 407, name: "Cubic Zirconia Diamond Studs", type: "Earrings", desc: "Brilliant round-cut sparkling cubic zirconia crystal stud earrings with silver backings.", price: 22.00, img: "imgs/photo_2026-09-09_21-03-50.jpg" },
    { id: 408, name: "Gold Textured Twisted Hoops", type: "Earrings", desc: "Chunky lightweight hoop earrings highlighted by a stylish vintage twisted design.", price: 24.50, img: "imgs/photo_2026-09-09_21-03-54.jpg" },
    { id: 409, name: "Geometric Stackable Ring Set", type: "Rings", desc: "Pack of 5 mixed gold-tone stackable rings featuring delicate minimalist shapes.", price: 18.00, img: "imgs/photo_2026-09-09_21-03-57.jpg" },
    { id: 410, name: "Engravable Square Pendant Necklace", type: "Necklaces", desc: "Polished silver square medal pendant hung on a durable stainless steel box chain.", price: 27.00, img: "imgs/photo_2026-09-09_21-04-01.jpg" },
    { id: 411, name: "Luxury Saffiano Leather Wallet", type: "Bags", desc: "Compact zippered wallet with multiple card slots and an elegant metal logo emblem.", price: 45.00, img: "imgs/photo_2026-09-09_21-04-05.jpg" },
    { id: 412, name: "Boho Natural Stone Bead Strand", type: "Bracelets", desc: "Elastic bead bracelet made from natural tiger-eye stones and metallic spacer accents.", price: 16.50, img: "imgs/photo_2026-09-09_21-03-50.jpg" },
    { id: 413, name: "Celestial Moon & Star Anklet", type: "Anklets", desc: "Charming silver beach anklet decorated with dangling crescent moon and star emblems.", price: 14.99, img: "imgs/photo_2026-09-09_21-04-09.jpg" },
    { id: 414, name: "Urban Streetwear Waist Pack", type: "Bags", desc: "Waterproof lightweight nylon fanny pack equipped with adjustable buckle belt.", price: 26.00, img: "imgs/photo_2026-09-09_21-03-57.jpg" },
    { id: 415, name: "Statement Green Emerald Ring", type: "Rings", desc: "Vintage-inspired cocktail ring showcasing a large oval green faux-emerald crystal stone.", price: 32.50, img: "imgs/photo_2026-09-09_21-03-47.jpg" },
    
];

function renderAccessoriesProducts() {
    var container = document.getElementById("accessoriesProductsContainer");
    if (!container) return; 

    var htmlContent = "";

    for (var i = 0; i < accessoriesProducts.length; i++) {
        var product = accessoriesProducts[i];
        
        htmlContent += `
            <div class="product-card">
                <div class="prod-img-box">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="prod-info">
                    <span class="prod-category">${product.type}</span>
                    <h3 class="prod-title">${product.name}</h3>
                    <p class="prod-description">${product.desc}</p>
                    <div class="prod-price-row">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <button type="button" class="btn-add-cart" onclick="addAccessoriesToCart(${product.id})">
                            <i class="fa fa-shopping-cart"></i> Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    container.innerHTML = htmlContent;
}

function addAccessoriesToCart(productId) {
    var currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    
    var selectedProduct = null;
    for (var i = 0; i < accessoriesProducts.length; i++) {
        if (accessoriesProducts[i].id === productId) {
            selectedProduct = accessoriesProducts[i];
            break;
        }
    }

    if (selectedProduct) {
        currentCart.push(selectedProduct); 
        localStorage.setItem("shoppingCart", JSON.stringify(currentCart)); 
        updateCartCount(); 
    }
}

function updateCartCount() {
    var currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    var countSpan = document.getElementById("cartCount");
    if (countSpan) {
        countSpan.textContent = currentCart.length;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    renderAccessoriesProducts();
    updateCartCount();
});
// قسم الحقائب
var bagsProducts = [
    { id: 501, name: "Classic Saffiano Leather Handbag", type: "Handbags", desc: "Elegant structured leather tote with dual top handles and detachable shoulder strap.", price: 120.00, img: "imgs/photo_2026-09-09_21-11-31.jpg" },
    { id: 502, name: "Minimalist Quilted Crossbody Bag", type: "Crossbody", desc: "Sleek quilted design featuring a luxury interwoven metal chain strap and turn-lock closure.", price: 45.50, img: "imgs/photo_2026-09-09_21-11-35.jpg" },
    { id: 503, name: "Urban Waterproof Laptop Backpack", type: "Backpacks", desc: "Durable commuter backpack with dedicated 15-inch laptop sleeve and USB charging port.", price: 55.00, img: "imgs/photo_2026-09-09_21-11-45.jpg" },
    { id: 504, name: "Premium Leather Messenger Bag", type: "Messenger", desc: "Vintage brown genuine leather satchel, perfect for business executives and everyday carry.", price: 89.99, img: "imgs/photo_2026-09-09_21-12-07.jpg" },
    { id: 505, name: "Luxury Evening Velvet Clutch", type: "Clutches", desc: "Elegant soft velvet clutch bag detailed with a sparkling crystal encrusted top ring clasp.", price: 38.00, img: "imgs/photo_2026-09-09_21-12-11.jpg" },
    { id: 506, name: "Large Organic Cotton Tote Bag", type: "Totes", desc: "Eco-friendly heavy canvas tote bag with reinforced handles, ideal for shopping or beach days.", price: 18.95, img: "imgs/photo_2026-09-09_21-12-14.jpg" },
    { id: 507, name: "Vintage Suede Shoulder Bag", type: "Shoulder Bags", desc: "90s retro style soft suede bag featuring an adjustable strap and secure zip compartment.", price: 42.00, img: "imgs/photo_2026-09-09_21-12-20.jpg" },
    { id: 508, name: "Hard Shell Premium Travel Luggage", type: "Travel", desc: "Lightweight scratch-resistant cabin suitcase fitted with multi-directional 360 spinner wheels.", price: 135.00, img: "imgs/photo_2026-09-09_21-12-23.jpg" },
    { id: 509, name: "Boho Woven Straw Beach Bag", type: "Totes", desc: "Handmade authentic summer straw bag with comfortable round leather handles.", price: 29.99, img: "imgs/photo_2026-09-09_21-12-27.jpg" },
    { id: 510, name: "Water-Resistant Sports Duffel Bag", type: "Travel", desc: "Spacious gym and travel duffel bag equipped with an isolated bottom shoe compartment.", price: 34.50, img: "imgs/photo_2026-09-09_21-12-39.jpg" },
    { id: 511, name: "Chic Snakeskin Pattern Envelope", type: "Clutches", desc: "Trendy envelope clutch with embossed snakeskin textures and hidden magnetic fold.", price: 24.99, img: "imgs/photo_2026-09-09_21-12-43.jpg" },
    { id: 512, name: "Streetwear Nylon Waist Pack", type: "Fanny Packs", desc: "Ultra-light durable nylon waist bag with front utility zipper pockets for raves.", price: 22.00, img: "imgs/photo_2026-09-09_21-12-47.jpg" },
    { id: 513, name: "Elegant Croco-Embossed Satchel", type: "Handbags", desc: "Glossy crocodile texture leather satchel providing a sharp powerful business look.", price: 95.00, img: "imgs/photo_2026-09-09_21-12-50.jpg" },
    { id: 514, name: "Casual Denim Daily Backpack", type: "Backpacks", desc: "Soft washed denim fabric compact backpack suitable for school and outdoor trips.", price: 28.00, img: "imgs/photo_2026-09-09_21-12-27.jpg" },
    { id: 515, name: "Luxury Soft Lambskin Hobo Bag", type: "Shoulder Bags", desc: "Slouchy oversized premium leather hobo bag featuring a spacious single open space.", price: 110.00, img: "imgs/photo_2026-09-09_21-12-07.jpg" },

];

function renderBagsProducts() {
    var container = document.getElementById("bagsProductsContainer");
    if (!container) return; 

    var htmlContent = "";

    for (var i = 0; i < bagsProducts.length; i++) {
        var product = bagsProducts[i];
        
        htmlContent += `
            <div class="product-card">
                <div class="prod-img-box">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="prod-info">
                    <span class="prod-category">${product.type}</span>
                    <h3 class="prod-title">${product.name}</h3>
                    <p class="prod-description">${product.desc}</p>
                    <div class="prod-price-row">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <button type="button" class="btn-add-cart" onclick="addBagsToCart(${product.id})">
                            <i class="fa fa-shopping-cart"></i> Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    container.innerHTML = htmlContent;
}

function addBagsToCart(productId) {
    var currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    
    var selectedProduct = null;
    for (var i = 0; i < bagsProducts.length; i++) {
        if (bagsProducts[i].id === productId) {
            selectedProduct = bagsProducts[i];
            break;
        }
    }

    if (selectedProduct) {
        currentCart.push(selectedProduct); 
        localStorage.setItem("shoppingCart", JSON.stringify(currentCart)); 
        updateCartCount(); 
    }
}

function updateCartCount() {
    var currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    var countSpan = document.getElementById("cartCount");
    if (countSpan) {
        countSpan.textContent = currentCart.length;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    renderBagsProducts();
    updateCartCount();
});

// .................................................................

// قسم الاكثر مبيعاً
function generateStars(rating) {
    let starsHtml = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += `<i class="fa fa-star" style="color: #f59e0b;"></i>`; 
        } else {
            starsHtml += `<i class="fa fa-star-o" style="color: #cbd5e1;"></i>`; 
        }
    }
    return starsHtml;
}

function renderBestSellers() {
    var container = document.getElementById("bestSellersContainer");
    if (!container) return; 

    var htmlContent = "";
    for (var i = 0; i < 4; i++) {
        var product = bestSellersProducts[i];
        if (!product) break;
        
        var wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        var isFavorite = wishlist.includes(product.id) ? "active" : "";

        htmlContent += `
            <div class="product-card">
                <div class="prod-img-box">
                    <button type="button" class="btn-wishlist ${isFavorite}" onclick="toggleWishlist(event, ${product.id})">
                        <i class="fa fa-heart"></i>
                    </button>
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="prod-info">
                    <span class="prod-category">${product.type}</span>
                    <h3 class="prod-title">${product.name}</h3>
                    
                    <div class="prod-rating" style="margin: 8px 0; font-size: 0.85rem;">
                        ${generateStars(product.rating)}
                        <span style="color: #64748b; margin-left: 5px;">(${product.reviews})</span>
                    </div>

                    <div class="prod-price-row">
                        <div style="display: flex; flex-direction: column;">
                            <span class="price" style="font-weight: 800; color: #0f172a; font-size: 1.2rem;">$${product.price.toFixed(2)}</span>
                            <span class="old-price" style="text-decoration: line-through; color: #94a3b8; font-size: 0.9rem;">$${product.oldPrice.toFixed(2)}</span>
                        </div>
                        <button type="button" class="btn-add-cart" onclick="addToCart(${product.id})">
                            <i class="fa fa-shopping-cart"></i> Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    container.innerHTML = htmlContent;
}

function toggleWishlist(event, productId) {
    event.stopPropagation();
    var button = event.currentTarget;
    var wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
        button.classList.remove("active");
    } else {
        wishlist.push(productId);
        button.classList.add("active");
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

window.addEventListener("load", function() {
    renderBestSellers();
});
document.addEventListener("DOMContentLoaded", function() {
    if (typeof renderBestSellers === "function") {
        renderBestSellers(); 
    }
});
function startCountdown() {
    let targetTime = localStorage.getItem("dealTargetTime");
    
    if (!targetTime) {
        targetTime = new Date().getTime() + (8 * 60 * 60 * 1000) + (24 * 60 * 1000) + (36 * 1000); 
        localStorage.setItem("dealTargetTime", targetTime);
    }

    setInterval(function() {
        let now = new Date().getTime();
        let difference = targetTime - now;

        if (difference < 0) {
            targetTime = new Date().getTime() + (8 * 60 * 60 * 1000);
            localStorage.setItem("dealTargetTime", targetTime);
            return;
        }

        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if(document.getElementById("hours")) {
            document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
            document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    startCountdown();
});
function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const emailInput = event.target.querySelector('.newsletter-input');
    const emailValue = emailInput.value;
    
    if (emailValue) {
        alert(`🎉 Thank you for subscribing!\nYour 10% discount coupon [TREND10] has been sent to: ${emailValue}`);
        
        emailInput.value = ""; 
    }
}
