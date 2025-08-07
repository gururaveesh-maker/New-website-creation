// WebCraft Pro - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.classList.toggle('dark', savedTheme === 'dark');
    
    themeToggle.addEventListener('click', function() {
        html.classList.toggle('dark');
        const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });
    
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Show success message
                showMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
    
    // Function to show messages
    function showMessage(message, type = 'success') {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.message');
        existingMessages.forEach(msg => msg.remove());
        
        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.innerHTML = `
            <div class="flex items-center">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-2"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Insert message before the form
        const contactSection = document.getElementById('contact');
        const formContainer = contactSection.querySelector('.contact-form-container');
        formContainer.insertBefore(messageDiv, formContainer.firstChild);
        
        // Auto-remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .portfolio-card, .pricing-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/95', 'dark:bg-gray-900/95');
            navbar.classList.remove('bg-white/90', 'dark:bg-gray-900/90');
        } else {
            navbar.classList.remove('bg-white/95', 'dark:bg-gray-900/95');
            navbar.classList.add('bg-white/90', 'dark:bg-gray-900/90');
        }
    });
    
    // Portfolio item hover effects
    const portfolioItems = document.querySelectorAll('.portfolio-card');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Pricing card hover effects
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Testimonial card hover effects
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.remove('loading');
        });
        
        img.addEventListener('error', function() {
            this.classList.remove('loading');
            this.style.display = 'none';
        });
    });
    
    // Initialize tooltips (if needed)
    function initTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                const tooltip = document.createElement('div');
                tooltip.className = 'absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg';
                tooltip.textContent = this.getAttribute('data-tooltip');
                tooltip.style.top = this.offsetTop - 30 + 'px';
                tooltip.style.left = this.offsetLeft + 'px';
                
                document.body.appendChild(tooltip);
                
                this.addEventListener('mouseleave', function() {
                    tooltip.remove();
                });
            });
        });
    }
    
    // Initialize tooltips
    initTooltips();
    
    // Performance optimization: Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Console welcome message
    console.log('%c🚀 Welcome to WebCraft Pro!', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
    console.log('%cWe build amazing websites that convert visitors into customers.', 'color: #6b7280; font-size: 14px;');
});

// Theme Switcher Functionality
let themeManager;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme manager
    if (typeof ThemeManager !== 'undefined') {
        themeManager = new ThemeManager();
        
        // Add theme switcher to the page
        addThemeSwitcher();
    }
});

function addThemeSwitcher() {
    // Create theme switcher dropdown
    const themeSwitcher = document.createElement('div');
    themeSwitcher.className = 'fixed bottom-4 right-4 z-50';
    themeSwitcher.innerHTML = `
        <div class="relative">
            <button id="theme-switcher-btn" class="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-palette text-blue-600 dark:text-blue-400"></i>
            </button>
            <div id="theme-dropdown" class="hidden absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div class="p-2">
                    <div class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Choose Theme</div>
                    <div class="space-y-1">
                        <button class="theme-option w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-sm" data-theme="default">
                            <span class="inline-block w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded mr-2"></span>
                            WebCraft Pro
                        </button>
                        <button class="theme-option w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-sm" data-theme="tech">
                            <span class="inline-block w-4 h-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded mr-2"></span>
                            TechFlow
                        </button>
                        <button class="theme-option w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-sm" data-theme="creative">
                            <span class="inline-block w-4 h-4 bg-gradient-to-r from-orange-600 to-pink-600 rounded mr-2"></span>
                            Creative Studio
                        </button>
                        <button class="theme-option w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-sm" data-theme="corporate">
                            <span class="inline-block w-4 h-4 bg-gradient-to-r from-slate-600 to-slate-800 rounded mr-2"></span>
                            Corporate Pro
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(themeSwitcher);
    
    // Add event listeners
    const themeBtn = document.getElementById('theme-switcher-btn');
    const themeDropdown = document.getElementById('theme-dropdown');
    const themeOptions = document.querySelectorAll('.theme-option');
    
    themeBtn.addEventListener('click', function() {
        themeDropdown.classList.toggle('hidden');
    });
    
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const themeName = this.getAttribute('data-theme');
            themeManager.applyTheme(themeName);
            themeDropdown.classList.add('hidden');
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!themeSwitcher.contains(e.target)) {
            themeDropdown.classList.add('hidden');
        }
    });
}

// Enhanced Contact Form Handling
function enhanceContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    // Add loading state and better validation
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        submitButton.disabled = true;
        
        // Basic validation
        const requiredFields = this.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('border-red-500');
                isValid = false;
            } else {
                field.classList.remove('border-red-500');
            }
        });
        
        if (!isValid) {
            showMessage('Please fill in all required fields.', 'error');
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            return;
        }
        
        // Simulate form submission (replace with actual Netlify form handling)
        setTimeout(() => {
            showMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.', 'success');
            this.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.classList.add('border-red-500');
            } else {
                this.classList.remove('border-red-500');
            }
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('border-red-500') && this.value.trim()) {
                this.classList.remove('border-red-500');
            }
        });
    });
}

// Initialize enhanced form
document.addEventListener('DOMContentLoaded', function() {
    enhanceContactForm();
});
