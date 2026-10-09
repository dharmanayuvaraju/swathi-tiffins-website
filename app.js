// Sree Swathi Tiffins (Veg) - Main Application Script
// Implements Modern Web Guidance: Native Dialogs with light-dismiss fallbacks & real data rendering

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentCategory = 'all';
  let searchQuery = '';
  let activeReviewTag = 'all';
  let isMenuExpanded = false;
  let isReviewsExpanded = false;
  const INITIAL_MENU_ITEMS_LIMIT = 8;
  const INITIAL_REVIEWS_LIMIT = 3;

  // DOM Elements
  const menuGridContainer = document.getElementById('menuGridContainer');
  const emptyMenuState = document.getElementById('emptyMenuState');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const resetMenuFiltersBtn = document.getElementById('resetMenuFiltersBtn');
  const categoryTabs = document.querySelectorAll('.cat-tab');
  const countAll = document.getElementById('countAll');

  // Menu Expand Elements
  const menuExpandWrap = document.getElementById('menuExpandWrap');
  const toggleMenuBtn = document.getElementById('toggleMenuBtn');
  const toggleMenuIcon = document.getElementById('toggleMenuIcon');
  const toggleMenuText = document.getElementById('toggleMenuText');

  // Reviews Elements
  const reviewsContainer = document.getElementById('reviewsContainer');
  const revFilterChips = document.querySelectorAll('.rev-filter-chip');
  const reviewsExpandWrap = document.getElementById('reviewsExpandWrap');
  const toggleReviewsBtn = document.getElementById('toggleReviewsBtn');
  const toggleReviewsIcon = document.getElementById('toggleReviewsIcon');
  const toggleReviewsText = document.getElementById('toggleReviewsText');

  // Photo Viewer Dialog
  const photoViewerDialog = document.getElementById('photoViewerDialog');
  const closePhotoViewerBtn = document.getElementById('closePhotoViewerBtn');
  const modalEnlargedPhoto = document.getElementById('modalEnlargedPhoto');
  const photoModalTitle = document.getElementById('photoModalTitle');

  // Mobile Nav Drawer
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Live status elements
  const liveStatusBadge = document.getElementById('liveStatusBadge');
  const liveStatusText = document.getElementById('liveStatusText');

  // =========================================================================
  // Modern Web Guidance: Light-Dismiss Polyfill & Dialog Setup
  // =========================================================================
  if (photoViewerDialog) {
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      photoViewerDialog.addEventListener('click', (event) => {
        if (event.target !== photoViewerDialog) return;
        const rect = photoViewerDialog.getBoundingClientRect();
        const isContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (!isContent) photoViewerDialog.close();
      });
    }
  }

  function openModal(dialog) {
    if (dialog && typeof dialog.showModal === 'function') {
      dialog.showModal();
    }
  }

  function closeModal(dialog) {
    if (dialog && typeof dialog.close === 'function') {
      dialog.close();
    }
  }

  // Set total count
  if (countAll) countAll.textContent = REAL_MENU_DATA.length;

  // =========================================================================
  // Live Operating Status (6:00 AM – 11:00 PM)
  // =========================================================================
  function updateStoreStatus() {
    const now = new Date();
    const currentHour = now.getHours() + (now.getMinutes() / 60);

    const isOpen = currentHour >= 6.0 && currentHour < 23.0; // 6:00 AM to 11:00 PM

    if (isOpen) {
      liveStatusBadge.classList.remove('closed');
      liveStatusText.textContent = "Open Now • 6:00 AM – 11:00 PM (All 7 Days)";
    } else {
      liveStatusBadge.classList.add('closed');
      liveStatusText.textContent = "Closed for the Night • Opens at 6:00 AM";
    }
  }

  updateStoreStatus();
  setInterval(updateStoreStatus, 60000);

  // =========================================================================
  // Render Menu Items
  // =========================================================================
  function getFilteredMenu() {
    return REAL_MENU_DATA.filter(item => {
      // Category check
      if (currentCategory !== 'all' && item.category !== currentCategory) {
        return false;
      }

      // Search query check
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchNo = item.itemNo && item.itemNo.toString().includes(q);
        const matchPrice = item.price.toString().includes(q);
        if (!matchName && !matchNo && !matchPrice) return false;
      }

      return true;
    });
  }

  function renderMenu() {
    const allMatchingItems = getFilteredMenu();

    if (allMatchingItems.length === 0) {
      menuGridContainer.innerHTML = '';
      emptyMenuState.style.display = 'block';
      if (menuExpandWrap) menuExpandWrap.style.display = 'none';
      return;
    }

    emptyMenuState.style.display = 'none';

    const isSearching = searchQuery.trim() !== '';
    let itemsToDisplay = allMatchingItems;

    if (!isSearching && !isMenuExpanded && allMatchingItems.length > INITIAL_MENU_ITEMS_LIMIT) {
      itemsToDisplay = allMatchingItems.slice(0, INITIAL_MENU_ITEMS_LIMIT);
      if (menuExpandWrap) {
        menuExpandWrap.style.display = 'block';
        toggleMenuIcon.className = 'fa-solid fa-chevron-down';
        toggleMenuText.textContent = `Show All ${allMatchingItems.length} Items`;
        toggleMenuBtn.setAttribute('aria-expanded', 'false');
      }
    } else if (!isSearching && isMenuExpanded && allMatchingItems.length > INITIAL_MENU_ITEMS_LIMIT) {
      if (menuExpandWrap) {
        menuExpandWrap.style.display = 'block';
        toggleMenuIcon.className = 'fa-solid fa-chevron-up';
        toggleMenuText.textContent = 'Show Less (Top 8 Items)';
        toggleMenuBtn.setAttribute('aria-expanded', 'true');
      }
    } else {
      if (menuExpandWrap) menuExpandWrap.style.display = 'none';
    }

    menuGridContainer.innerHTML = itemsToDisplay.map(item => {
      return `
        <article class="real-menu-card">
          <div class="menu-card-header-row">
            <div class="item-id-pill">${item.itemNo ? `#${item.itemNo}` : '<i class="fa-solid fa-utensils"></i>'}</div>
            <div class="item-title-col">
              <h3 class="menu-item-name">${item.name}</h3>
              ${item.badge ? `<span class="item-badge-pill ${item.badge.toLowerCase().replace(/[^a-z0-9]/g, '-')}">${item.badge}</span>` : ''}
            </div>
          </div>
          <div class="menu-card-price-row">
            <span class="veg-dot" title="100% Pure Vegetarian"></span>
            <span class="exact-price">₹${item.price}/-</span>
          </div>
        </article>
      `;
    }).join('');
  }

  if (toggleMenuBtn) {
    toggleMenuBtn.addEventListener('click', () => {
      isMenuExpanded = !isMenuExpanded;
      renderMenu();
      if (!isMenuExpanded) {
        const menuSection = document.getElementById('menu');
        if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Category filter click
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      currentCategory = tab.dataset.category;
      isMenuExpanded = false; // Reset to clean compact view on tab change
      renderMenu();
    });
  });

  // Search
  menuSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery.length > 0 ? 'block' : 'none';
    renderMenu();
  });

  clearSearchBtn.addEventListener('click', () => {
    menuSearchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderMenu();
  });

  resetMenuFiltersBtn.addEventListener('click', () => {
    currentCategory = 'all';
    searchQuery = '';
    menuSearchInput.value = '';
    clearSearchBtn.style.display = 'none';
    isMenuExpanded = false;
    categoryTabs.forEach(t => t.classList.toggle('active', t.dataset.category === 'all'));
    renderMenu();
  });

  // =========================================================================
  // Render Real Google Reviews (Limited to 3 initially with Show All toggle)
  // =========================================================================
  function renderReviews() {
    let allReviews = REAL_GOOGLE_REVIEWS;
    if (activeReviewTag !== 'all') {
      allReviews = allReviews.filter(r => r.tag === activeReviewTag);
    }

    let reviewsToDisplay = allReviews;

    if (!isReviewsExpanded && allReviews.length > INITIAL_REVIEWS_LIMIT) {
      reviewsToDisplay = allReviews.slice(0, INITIAL_REVIEWS_LIMIT);
      if (reviewsExpandWrap) {
        reviewsExpandWrap.style.display = 'block';
        toggleReviewsIcon.className = 'fa-solid fa-chevron-down';
        toggleReviewsText.textContent = `Show All ${allReviews.length} Reviews (5,384+ on Maps)`;
        toggleReviewsBtn.setAttribute('aria-expanded', 'false');
      }
    } else if (isReviewsExpanded && allReviews.length > INITIAL_REVIEWS_LIMIT) {
      if (reviewsExpandWrap) {
        reviewsExpandWrap.style.display = 'block';
        toggleReviewsIcon.className = 'fa-solid fa-chevron-up';
        toggleReviewsText.textContent = 'Show Less (Top 3 Reviews)';
        toggleReviewsBtn.setAttribute('aria-expanded', 'true');
      }
    } else {
      if (reviewsExpandWrap) reviewsExpandWrap.style.display = 'none';
    }

    reviewsContainer.innerHTML = reviewsToDisplay.map(rev => {
      const initials = rev.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'ST';
      const starsHtml = Array.from({ length: 5 }, (_, i) => `<i class="fa-solid fa-star${i < rev.rating ? '' : '-half-stroke'}"></i>`).join('');

      return `
        <article class="review-card">
          <div class="review-top">
            <div class="reviewer-avatar">${initials}</div>
            <div>
              <h4 class="reviewer-name">${rev.name}</h4>
              <div class="reviewer-guide-tag">${rev.badge}</div>
            </div>
            <div class="review-stars-box">
              <div class="review-stars">${starsHtml}</div>
              <span class="review-date">${rev.time}</span>
            </div>
          </div>
          <p class="review-body">"${rev.comment}"</p>
          <div class="review-bottom-meta">
            <span class="verified-badge"><i class="fa-brands fa-google"></i> Google Review</span>
            <span class="rev-tag-badge">#${rev.tag}</span>
          </div>
        </article>
      `;
    }).join('');
  }

  if (toggleReviewsBtn) {
    toggleReviewsBtn.addEventListener('click', () => {
      isReviewsExpanded = !isReviewsExpanded;
      renderReviews();
      if (!isReviewsExpanded) {
        const revSection = document.getElementById('reviews');
        if (revSection) revSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  revFilterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      revFilterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeReviewTag = chip.dataset.tag;
      isReviewsExpanded = false; // Reset to top 3 on filter tag switch
      renderReviews();
    });
  });

  // =========================================================================
  // Photo Viewer Modal
  // =========================================================================
  document.querySelectorAll('.view-photo-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const imgSrc = e.currentTarget.dataset.img;
      const title = e.currentTarget.dataset.title || 'Official Rate Board';
      modalEnlargedPhoto.src = imgSrc;
      photoModalTitle.textContent = title;
      openModal(photoViewerDialog);
    });
  });

  if (closePhotoViewerBtn) {
    closePhotoViewerBtn.addEventListener('click', () => closeModal(photoViewerDialog));
  }

  // =========================================================================
  // Mobile Nav
  // =========================================================================
  mobileMenuToggle.addEventListener('click', () => {
    mobileNavDrawer.classList.add('open');
    mobileNavDrawer.setAttribute('aria-hidden', 'false');
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
  });

  function closeMobileNav() {
    mobileNavDrawer.classList.remove('open');
    mobileNavDrawer.setAttribute('aria-hidden', 'true');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
  }

  closeMobileNavBtn.addEventListener('click', closeMobileNav);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  // Initial renders
  renderMenu();
  renderReviews();
});
