tailwind.config = {
  theme: {
    extend: {
      colors: {
        "brand-primary": "#340C6D",
        "brand-secondary": "#B8AE29",
        "brand-secondary-accent": "#F2E852",
        "brand-accent": "#B88CF7",
        "brand-support": "#9552F2",
        "brand-dark-blue": "#1e293b",
        "brand-light-gray": "#f9fafb",
        "brand-secondary-blue": "#0984e3",
        "brand-text-dark": "#636e72",
        "brand-light-gray": "#f9fafb",
      },
      fontFamily: {
        didact: ["Didact Gothic", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
        semibold: 600,
      },
    },
  },
};

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (mobileMenuButton && mobileMenu && menuIcon && closeIcon) {
    // Ensure menu is hidden by default
    mobileMenu.classList.add('opacity-0', '-translate-y-full');
    mobileMenu.classList.remove('opacity-100', 'translate-y-0');
    
    mobileMenuButton.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('opacity-100');
      
      if (isOpen) {
        // Close menu
        mobileMenu.classList.remove('opacity-100', 'translate-y-0');
        mobileMenu.classList.add('opacity-0', '-translate-y-full');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      } else {
        // Open menu
        mobileMenu.classList.remove('opacity-0', '-translate-y-full');
        mobileMenu.classList.add('opacity-100', 'translate-y-0');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }
    });
    
    // Close menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('opacity-100', 'translate-y-0');
        mobileMenu.classList.add('opacity-0', '-translate-y-full');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.remove('opacity-100', 'translate-y-0');
        mobileMenu.classList.add('opacity-0', '-translate-y-full');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
    
    // Close menu on window resize to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 1024) { // lg breakpoint
        mobileMenu.classList.remove('opacity-100', 'translate-y-0');
        mobileMenu.classList.add('opacity-0', '-translate-y-full');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
  }
});
