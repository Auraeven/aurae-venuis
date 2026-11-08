document.addEventListener('DOMContentLoaded', function () {

  /* ============ STICKY HEADER ON SCROLL & THEME SWITCH ============ */
  const siteHeader = document.getElementById('siteHeader');
  const heroSection = document.querySelector('.hero-banner, .home-hero');

  function handleHeaderScroll() {
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    if (heroSection) {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom > 60) {
        siteHeader.classList.add('theme-dark');
        siteHeader.classList.remove('theme-light');
      } else {
        siteHeader.classList.add('theme-light');
        siteHeader.classList.remove('theme-dark');
      }
    } else {
      siteHeader.classList.add('theme-light');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll();

  /* ============ MOBILE MENU ============ */
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNav');

  mobileMenuToggle.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
  });

  /* ============ MEGA MENU (DESKTOP DROPDOWN) ============ */
  const navItems = document.querySelectorAll('.nav-item.has-mega');

  const megaOverlay = document.createElement('div');
  megaOverlay.className = 'mega-overlay';
  document.body.appendChild(megaOverlay);

  navItems.forEach(function (li) {
    const menu = li.querySelector('.mega-menu');
    if (menu) {
      document.body.appendChild(menu);
      li.megaMenuRef = menu;
    }
  });

  function resetAccordionsInside(container) {
    container.querySelectorAll('.menu-node.expanded').forEach(function (node) {
      node.classList.remove('expanded');
      const childUl = node.querySelector(':scope > .menu-node-children');
      if (childUl) childUl.style.maxHeight = '0px';
    });
    container.querySelectorAll('.accordion-list.has-open').forEach(function (list) {
      list.classList.remove('has-open');
    });
  }

  function closeAllMega() {
    navItems.forEach(function (li) {
      li.classList.remove('mega-open');
      if (li.megaMenuRef) {
        li.megaMenuRef.classList.remove('active');
        resetAccordionsInside(li.megaMenuRef);
      }
    });
    megaOverlay.classList.remove('active');
  }

  navItems.forEach(function (li) {
    const link = li.querySelector('.nav-top-link');
    const menu = li.megaMenuRef;
    if (!link || !menu) return;

    link.addEventListener('click', function (e) {
      e.preventDefault();
      const isOpen = li.classList.contains('mega-open');
      closeAllMega();
      if (!isOpen) {
        const rect = siteHeader.getBoundingClientRect();
        menu.style.top = rect.bottom + 'px';
        li.classList.add('mega-open');
        menu.classList.add('active');
        megaOverlay.classList.add('active');
      }
    });

    const closeBtn = menu.querySelector('.mega-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        closeAllMega();
      });
    }
  });

  megaOverlay.addEventListener('click', closeAllMega);
  window.addEventListener('resize', closeAllMega);

  window.addEventListener('scroll', function () {
    navItems.forEach(function (li) {
      const menu = li.megaMenuRef;
      if (li.classList.contains('mega-open') && menu) {
        const rect = siteHeader.getBoundingClientRect();
        menu.style.top = rect.bottom + 'px';
      }
    });
  });

  /* ============ ACCORDION — SINGLE ACTIVE BRANCH ============ */

  function updateAncestorHeights(el) {
    let parent = el.parentElement ? el.parentElement.closest('.menu-node-children') : null;
    while (parent) {
      parent.style.maxHeight = parent.scrollHeight + 'px';
      parent = parent.parentElement ? parent.parentElement.closest('.menu-node-children') : null;
    }
  }

  function collapseNodeDeep(node) {
    node.classList.remove('expanded');
    const childUl = node.querySelector(':scope > .menu-node-children');
    if (childUl) {
      childUl.style.maxHeight = '0px';
      childUl.classList.remove('has-open');
      childUl.querySelectorAll('.menu-node.expanded').forEach(function (child) {
        child.classList.remove('expanded');
        const grandChildUl = child.querySelector(':scope > .menu-node-children');
        if (grandChildUl) grandChildUl.style.maxHeight = '0px';
      });
      childUl.querySelectorAll('.accordion-list.has-open').forEach(function (list) {
        list.classList.remove('has-open');
      });
    }
  }

  const accordionItems = document.querySelectorAll('.menu-node.has-children');

  accordionItems.forEach(function (item) {
    const row = item.querySelector(':scope > .menu-node-row');
    if (!row) return;

    row.addEventListener('click', function (e) {
      e.preventDefault();
      const parentList = item.parentElement;
      const wasExpanded = item.classList.contains('expanded');
      const siblings = parentList.querySelectorAll(':scope > .menu-node');

      siblings.forEach(function (sib) {
        collapseNodeDeep(sib);
      });
      parentList.classList.remove('has-open');

      if (!wasExpanded) {
        item.classList.add('expanded');
        parentList.classList.add('has-open');
        const childUl = item.querySelector(':scope > .menu-node-children');
        if (childUl) {
          childUl.style.maxHeight = childUl.scrollHeight + 'px';
        }
      }

      updateAncestorHeights(item);
    });
  });

  /* ============ NEWSLETTER MODAL ============ */
  const newsletterToggle = document.getElementById('newsletterToggle');
  const newsletterOverlay = document.getElementById('newsletterOverlay');
  const newsletterClose = document.getElementById('newsletterClose');

  newsletterToggle.addEventListener('click', function () {
    newsletterOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  newsletterClose.addEventListener('click', closeNewsletter);
  newsletterOverlay.addEventListener('click', function (e) {
    if (e.target === newsletterOverlay) closeNewsletter();
  });

  function closeNewsletter() {
    newsletterOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ============ SEARCH ============ */
  const searchToggle = document.getElementById('searchToggle');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  let searchIndex = [];
  let indexLoaded = false;

  function loadSearchIndex() {
    if (indexLoaded) return;
    fetch('/index.json')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        searchIndex = data;
        indexLoaded = true;
      })
      .catch(function (err) {
        console.error('Search index failed to load:', err);
      });
  }

  searchToggle.addEventListener('click', function () {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    loadSearchIndex();
    setTimeout(function () { searchInput.focus(); }, 150);
  });

  searchClose.addEventListener('click', closeSearch);
  searchOverlay.addEventListener('click', function (e) {
    if (e.target === searchOverlay) closeSearch();
  });

  function closeSearch() {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
    searchResults.innerHTML = '';
  }

  searchInput.addEventListener('input', function () {
    const query = this.value.trim().toLowerCase();

    if (query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }

    const matches = searchIndex.filter(function (item) {
      return item.title.toLowerCase().includes(query) ||
             item.summary.toLowerCase().includes(query);
    });

    renderSearchResults(matches, query);
  });

  function renderSearchResults(matches, query) {
    if (matches.length === 0) {
      searchResults.innerHTML = '<p class="search-no-results">No results found for "' + query + '"</p>';
      return;
    }

    let html = '';
    matches.forEach(function (item) {
      html += '<a href="' + item.url + '" class="search-result-item">';
      html += '<h3>' + item.title + '</h3>';
      html += '<p>' + item.summary.substring(0, 100) + '...</p>';
      html += '</a>';
    });

    searchResults.innerHTML = html;
  }

  /* ============ SAVED / BOOKMARKS ============ */
  const savedToggle = document.getElementById('savedToggle');
  const savedOverlay = document.getElementById('savedOverlay');
  const savedClose = document.getElementById('savedClose');
  const savedList = document.getElementById('savedList');

  function getSavedArticles() {
    const data = localStorage.getItem('savedArticles');
    return data ? JSON.parse(data) : [];
  }

  function setSavedArticles(articles) {
    localStorage.setItem('savedArticles', JSON.stringify(articles));
  }

  function isArticleSaved(url) {
    return getSavedArticles().some(function (a) { return a.url === url; });
  }

  function toggleSaveArticle(title, url, btn) {
    let saved = getSavedArticles();
    const existingIndex = saved.findIndex(function (a) { return a.url === url; });

    if (existingIndex > -1) {
      saved.splice(existingIndex, 1);
      if (btn) btn.classList.remove('saved-active');
    } else {
      saved.push({ title: title, url: url });
      if (btn) btn.classList.add('saved-active');
    }

    setSavedArticles(saved);
    renderSavedList();
  }

  function renderSavedList() {
    const saved = getSavedArticles();

    if (saved.length === 0) {
      savedList.innerHTML = '<p class="saved-empty">No saved articles yet.</p>';
      return;
    }

    let html = '';
    saved.forEach(function (item, index) {
      html += '<div class="saved-item">';
      html += '<a href="' + item.url + '">' + item.title + '</a>';
      html += '<button class="saved-remove" data-index="' + index + '">&times;</button>';
      html += '</div>';
    });

    savedList.innerHTML = html;

    document.querySelectorAll('.saved-remove').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const idx = parseInt(this.getAttribute('data-index'));
        let saved = getSavedArticles();
        saved.splice(idx, 1);
        setSavedArticles(saved);
        renderSavedList();
        updateAllSaveButtons();
      });
    });
  }

  function updateAllSaveButtons() {
    document.querySelectorAll('.save-btn').forEach(function (btn) {
      const url = btn.getAttribute('data-url');
      if (isArticleSaved(url)) {
        btn.classList.add('saved-active');
      } else {
        btn.classList.remove('saved-active');
      }
    });
  }

  savedToggle.addEventListener('click', function () {
    renderSavedList();
    savedOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  savedClose.addEventListener('click', closeSaved);
  savedOverlay.addEventListener('click', function (e) {
    if (e.target === savedOverlay) closeSaved();
  });

  function closeSaved() {
    savedOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.save-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const title = this.getAttribute('data-title');
      const url = this.getAttribute('data-url');
      toggleSaveArticle(title, url, this);
    });
  });

  updateAllSaveButtons();

  /* ============ ESC KEY CLOSES EVERYTHING ============ */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeNewsletter();
      closeSearch();
      closeSaved();
      closeAllMega();
      mobileNav.classList.remove('active');
    }
  });

});

/* ============================================================
   HOME BANNER SWITCHER (moved from category-banner.html)
   - Hovering the BANNER IMAGE HALVES = temporary preview.
   - Leaving the image = reverts to the locked/default tab.
   - Clicking a TAB BUTTON = permanent lock until manually
     switched again or the page is refreshed.
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  (function () {
    var wrap = document.querySelector('.banner-switcher');
    var halves = document.querySelectorAll('.home-banner-split-half');
    if (!wrap) return;

    var tabs = wrap.querySelectorAll('.banner-switcher-tab');
    var panels = wrap.querySelectorAll('.banner-switcher-panel');
    var lockedTab = wrap.getAttribute('data-default') || 'tab-0';

    function showTab(tabId) {
      tabs.forEach(function (t) {
        t.classList.toggle('is-active', t.getAttribute('data-tab') === tabId);
      });
      panels.forEach(function (p) {
        p.classList.toggle('is-active', p.getAttribute('data-panel') === tabId);
      });
    }

    halves.forEach(function (half) {
      var id = half.getAttribute('data-hover-tab');
      half.addEventListener('mouseenter', function () { showTab(id); });
      half.addEventListener('mouseleave', function () { showTab(lockedTab); });
    });

    tabs.forEach(function (tab) {
      var id = tab.getAttribute('data-tab');
      tab.addEventListener('click', function () {
        lockedTab = id;
        showTab(id);
      });
    });

    showTab(lockedTab);
  })();
});

/* ============================================================
   CATEGORY GALLERY HOVER-REVEAL (moved from category-gallery.html)
   - Hovering a box reveals its 3 latest articles in the shared row.
   - Leaving the whole group area hides it again.
   - Also force-resets on pageshow (fixes bfcache back-button bug).
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  (function () {
    function initWrap(wrap) {
      var triggers = wrap.querySelectorAll('[data-idx]');
      var panels = wrap.querySelectorAll('.cat-panel');
      var shared = wrap.querySelector('.cat-articles-shared');
      if (!shared) return;

      function showPanel(idx) {
        panels.forEach(function (p) {
          p.classList.toggle('is-active', p.getAttribute('data-for') === idx);
        });
        shared.classList.add('is-visible');
      }
      function hideAll() {
        shared.classList.remove('is-visible');
        panels.forEach(function (p) { p.classList.remove('is-active'); });
      }

      triggers.forEach(function (el) {
        el.addEventListener('mouseenter', function () {
          showPanel(el.getAttribute('data-idx'));
        });
      });
      wrap.addEventListener('mouseleave', hideAll);

      // expose reset so pageshow can call it
      wrap.__catReset = hideAll;
    }

    function resetAllWraps() {
      document.querySelectorAll('.cat-wrap').forEach(function (wrap) {
        if (wrap.__catReset) wrap.__catReset();
      });
    }

    document.querySelectorAll('.cat-wrap').forEach(initWrap);

    // Fix: force-reset hover state whenever page is shown,
    // including when restored from back/forward cache (bfcache).
    window.addEventListener('pageshow', function () {
      resetAllWraps();
    });
  })();
});