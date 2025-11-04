document.addEventListener('DOMContentLoaded', () => {
    // --- NEW: Off-Canvas Mobile Menu Logic ---
    const menuButton = document.getElementById('mobile-menu-button');
    const closeButton = document.getElementById('mobile-menu-close-button');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    
    const openMenu = () => {
        document.body.classList.add('mobile-menu-open');
    };
    
    const closeMenu = () => {
        document.body.classList.remove('mobile-menu-open');
    };

    if (menuButton) menuButton.addEventListener('click', openMenu);
    if (closeButton) closeButton.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);


    // --- Mobile Submenu Dropdown Toggle (Inside Off-Canvas) ---
    const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    dropdownToggles.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); 
            
            const dropdownMenu = button.nextElementSibling;
            dropdownMenu.classList.toggle('hidden');
            
            // Rotate arrow icon
            const arrow = button.querySelector('svg');
            if (arrow) {
                arrow.classList.toggle('rotate-180');
            }
        });
    });

    // --- NEW: Enhanced Desktop Dropdown Menu Functionality ---
    // Supports both hover (CSS handles this) and click with click-elsewhere-close
    const desktopDropdowns = document.querySelectorAll('.group');
    
    desktopDropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('button');
        const menu = dropdown.querySelector('.absolute');
        
        if (button && menu) {
            // Click handler for desktop dropdowns
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Close all other open dropdowns
                desktopDropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('is-active');
                    }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('is-active');
            });
        }
    });
    
    // Click elsewhere to close all dropdowns
    document.addEventListener('click', (e) => {
        // Check if click is outside all dropdowns
        const isClickInsideDropdown = Array.from(desktopDropdowns).some(dropdown => 
            dropdown.contains(e.target)
        );
        
        if (!isClickInsideDropdown) {
            desktopDropdowns.forEach(dropdown => {
                dropdown.classList.remove('is-active');
            });
        }
    });
    
    // Keep dropdown open when clicking inside the menu
    document.querySelectorAll('.group .absolute').forEach(menu => {
        menu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
    
    // --- Hero Slider Logic ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.getElementById('next-slide');
    const prevButton = document.getElementById('prev-slide');
    const slideCount = slides.length > 0 ? slides.length : 0;

    function showSlide(n) {
        if (slideCount === 0) return; // Guard clause if no slides
        
        // Wrap around
        if (n >= slideCount) { currentSlide = 0; }
        else if (n < 0) { currentSlide = slideCount - 1; }
        else { currentSlide = n; }

        // Hide all slides
        slides.forEach(slide => {
            slide.style.opacity = '0';
        });

        // Show current slide
        slides[currentSlide].style.opacity = '1';
    }

    // Button clicks
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    }
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    }

    // Auto-play
    let slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000); // Change slide every 5 seconds

    // Initialize first slide
    if (slideCount > 0) {
        showSlide(currentSlide);
    }

    // --- RE-ADDED: Sticky Nav Scroll Logic ---
    const header = document.getElementById('page-header');
    const topBar = document.getElementById('top-bar');
    
    if (header && topBar) {
        const scrollThreshold = topBar.offsetHeight > 0 ? topBar.offsetHeight : 80; // Fallback height

        const handleScroll = () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Run on load in case the page is reloaded scrolled down
        handleScroll();
    }
});