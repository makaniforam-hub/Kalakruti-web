(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=[{name:"Sarangpur Hanumanji",category:"Sculpture",image:"https://github.com/kevalimac/kalakruti-img/blob/main/Salangpur%20Hanumanji.JPG?raw=true",price:21e3,oldPrice:28e3,discount:"Save 25%",badge:"Sculpture"},{name:"Mud Mirror with Vastu Balance",category:"Interior",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",price:32e3,oldPrice:41e3,discount:"Save 22%",badge:"Interior"},{name:"Contemporary Interior Wall Art",category:"Interior",image:"https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",price:5600,oldPrice:6800,discount:"Save 18%",badge:"Wall Art"},{name:"Customized Resin Name Plate",category:"Nameplate",image:"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",price:5800,oldPrice:6500,discount:"Save 11%",badge:"Nameplate"},{name:"3D Cow & Calf Wall Sculpture",category:"3D Wall Art",image:"https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80",price:3800,oldPrice:4900,discount:"Save 22%",badge:"Sculpture"},{name:"Luxury Khodiyarma Wall Frame",category:"Sculpture",image:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",price:38e3,oldPrice:48500,discount:"Save 22%",badge:"Temple"},{name:"Shreenathji Engraved Lining Art",category:"Temple",image:"https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80",price:22e3,oldPrice:38500,discount:"Save 43%",badge:"Temple"},{name:"Handcrafted Shreenathji Wall Panel",category:"3D Wall Art",image:"https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80",price:32800,oldPrice:51900,discount:"Save 37%",badge:"Sculpture"}],n=document.querySelector("#app"),d=["All","Sculpture","Temple","Interior","Nameplate","3D Wall Art"],p=(r="All")=>d.map(s=>`
    <button class="filter-pill ${s===r?"active":""}" data-filter="${s}">
      ${s}
    </button>
  `).join(""),l=(r="All")=>(r==="All"?c:c.filter(a=>a.category===r||a.badge===r)).map(a=>`
    <article class="product-card">
      <div class="product-image-wrap">
        <img src="${a.image}" alt="${a.name}" />
        <span class="discount-badge">${a.discount}</span>
      </div>
      <div class="product-body">
        <span class="product-tag">${a.badge}</span>
        <h3>${a.name}</h3>
        <div class="rating-row">
          <span>★★★★★</span>
          <small>(1)</small>
        </div>
        <div class="price-row">
          <strong>₹${a.price.toLocaleString("en-IN")}</strong>
          <span>₹${a.oldPrice.toLocaleString("en-IN")}</span>
        </div>
        <button class="add-to-cart">Add to cart</button>
      </div>
    </article>
  `).join("");n.innerHTML=`
  <div class="page-shell">
    <header class="topbar">
      <div class="brand-block">
        <img src="/logo.svg" alt="Kalakruti Art Studio Logo" class="brand-logo" />
        <div class="brand-text">
          <img src="/KALAKRUTI ART.svg" alt="Kalakruti Art Studio" class="brand-wordmark" />
          <small>Where Walls Become Legacy</small>
        </div>
      </div>
      <nav class="nav">
        <a href="#">Home</a>
        <a href="#">Collections</a>
        <a href="#">Shop</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </nav>
      <div class="nav-actions">
        <button class="ghost-btn">Login</button>
        <button class="cart-btn">Cart <span>0</span></button>
      </div>
    </header>

    <main>
      <section class="hero-panel">
        <div class="hero-copy">
          <p class="eyebrow">Premium SpiritualArtistry</p>
          <h1>Products that harness the power of pure craftsmanship.</h1>
          <p class="subtext">
            Sculptures, murals and sacred décor that elevate every space with handcrafted beauty and spiritual energy.
          </p>
          <div class="hero-actions">
            <button class="primary-btn">Explore Collection</button>
            <button class="secondary-btn">Pan-India Delivery</button>
          </div>
          <div class="hero-meta">
            <div>
              <strong>100+</strong>
              <span>Happy Clients</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Customer Rating</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Handmade</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="visual-card card-tall">
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80" alt="Featured decor" />
          </div>
          <div class="visual-card card-short">
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" alt="Wall art" />
          </div>
          <div class="floating-badge">
            <span>Secure Checkout</span>
            <strong>Handcrafted with love</strong>
          </div>
        </div>
      </section>

      <section class="trust-strip">
        <div><span>Secure Checkout</span></div>
        <div><span>100% Authentic Handmade</span></div>
        <div><span>Pan-India Shipping</span></div>
        <div><span>Safe & Sustainable</span></div>
      </section>

      <section class="featured-categories">
        <div class="section-heading">
          <p>Shop by Categories</p>
          <h2>Popular Collections</h2>
        </div>
        <div class="category-grid">
          <article class="category-card">
            <img src="https://images.unsplash.com/photo-1603201667141-6c7b4110bd2a?auto=format&fit=crop&w=900&q=80" alt="Sculpture" />
            <div>
              <h3>3D Sculptures</h3>
              <small>Handcrafted Art</small>
            </div>
          </article>
          <article class="category-card">
            <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80" alt="Wall murals" />
            <div>
              <h3>Wall Murals</h3>
              <small>Statement Pieces</small>
            </div>
          </article>
          <article class="category-card">
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" alt="Sacred décor" />
            <div>
              <h3>Sacred Décor</h3>
              <small>Divine Spaces</small>
            </div>
          </article>
          <article class="category-card">
            <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80" alt="Name plates" />
            <div>
              <h3>Name Plates</h3>
              <small>Your Signature</small>
            </div>
          </article>
        </div>
      </section>

      <section class="shop-section">
        <div class="section-heading shop-header">
          <div>
            <p>Trending Products</p>
            <h2>The Divine Collection</h2>
          </div>
          <div class="filter-row">
            ${p()}
          </div>
        </div>

        <div class="product-grid" id="product-grid">
          ${l()}
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <h4>About</h4>
        <p>Premium custom art studio preserving precious memories in spectacular artistic forms.</p>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li>3D Sculptures</li>
          <li>Modern Wall Art</li>
          <li>Vastu Art</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h4>Follow</h4>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Pinterest</li>
        </ul>
      </div>
    </footer>
  </div>
`;const u=document.querySelector("#product-grid"),m=document.querySelectorAll(".filter-pill");m.forEach(r=>{r.addEventListener("click",()=>{const s=r.dataset.filter;document.querySelectorAll(".filter-pill").forEach(a=>a.classList.toggle("active",a===r)),u.innerHTML=l(s)})});
