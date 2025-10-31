// Main JavaScript for Yaswanth Writes Blog

(function() {
  'use strict';

  // Initialize all functions when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initMobileMenu();
    initBackToTop();
    initSmoothScrolling();
    initHeaderScroll();
  });

  // Theme Toggle Functionality (Dark Mode)
  function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);

      // Add animation class
      document.body.classList.add('theme-transition');
      setTimeout(() => {
        document.body.classList.remove('theme-transition');
      }, 300);
    });
  }

  // Mobile Menu (Hamburger)
  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a nav link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = navMenu.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);

      if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Back to Top Button
  function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Smooth Scrolling for Anchor Links
  function initSmoothScrolling() {
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') return;

        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Header Shadow on Scroll
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Lazy Loading Images
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Reading Progress Bar (for blog posts)
  function initReadingProgress() {
    const progressBar = document.querySelector('.reading-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', function() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

      progressBar.style.width = scrollPercentage + '%';
    });
  }

  // Copy Code Block Functionality
  function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(block => {
      const wrapper = document.createElement('div');
      wrapper.className = 'code-wrapper';

      const copyButton = document.createElement('button');
      copyButton.className = 'code-copy-btn';
      copyButton.textContent = 'Copy';

      block.parentNode.insertBefore(wrapper, block);
      wrapper.appendChild(copyButton);
      wrapper.appendChild(block.parentNode);

      copyButton.addEventListener('click', function() {
        const code = block.textContent;
        navigator.clipboard.writeText(code).then(() => {
          copyButton.textContent = 'Copied!';
          setTimeout(() => {
            copyButton.textContent = 'Copy';
          }, 2000);
        });
      });
    });
  }

  // External Links - Open in New Tab
  function initExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]');

    links.forEach(link => {
      if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  // Table of Contents Generator (for blog posts)
  function initTableOfContents() {
    const tocContainer = document.querySelector('.table-of-contents');
    if (!tocContainer) return;

    const postContent = document.querySelector('.post-content');
    if (!postContent) return;

    const headings = postContent.querySelectorAll('h2, h3');
    if (headings.length === 0) return;

    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;

      const listItem = document.createElement('li');
      listItem.className = heading.tagName.toLowerCase();

      const link = document.createElement('a');
      link.href = `#${id}`;
      link.textContent = heading.textContent;

      listItem.appendChild(link);
      tocList.appendChild(listItem);
    });

    tocContainer.appendChild(tocList);
  }

  // Initialize additional features if elements exist
  if (document.querySelector('img[data-src]')) {
    initLazyLoading();
  }

  if (document.querySelector('.reading-progress')) {
    initReadingProgress();
  }

  if (document.querySelector('pre code')) {
    initCodeCopy();
  }

  if (document.querySelector('.table-of-contents')) {
    initTableOfContents();
  }

  // Initialize external links
  initExternalLinks();

  // Performance: Debounce function for scroll events
  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Console message (optional - can be removed)
  console.log('%c✨ Yaswanth Writes', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
  console.log('%cBuilt with Jekyll and ❤️', 'font-size: 14px; color: #6b7280;');

})();
