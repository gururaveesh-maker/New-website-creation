// Template Preview System
class TemplatePreview {
    constructor() {
        this.modal = null;
        this.currentTemplate = null;
        this.templates = {
            'ecommerce': {
                name: 'E-commerce Template',
                description: 'Perfect for online stores and retail businesses',
                features: ['Product grid', 'Shopping cart', 'Payment integration', 'Inventory management'],
                image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
                price: '$1,999',
                demoUrl: 'templates/ecommerce-template.html'
            },
            'portfolio': {
                name: 'Portfolio Template',
                description: 'Ideal for designers, artists, and creatives',
                features: ['Project gallery', 'About section', 'Contact form', 'Social media integration'],
                image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
                price: '$1,499',
                demoUrl: 'templates/portfolio-template.html'
            },
            'corporate': {
                name: 'Corporate Template',
                description: 'Professional template for businesses and corporations',
                features: ['Services showcase', 'Team section', 'Contact form', 'Company information'],
                image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
                price: '$2,499',
                demoUrl: 'templates/corporate-template.html'
            }
        };
        
        this.init();
    }
    
    init() {
        this.createModal();
        this.bindEvents();
    }
    
    createModal() {
        const modalHTML = `
            <div id="template-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
                <div class="flex items-center justify-center min-h-screen p-4">
                    <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-6">
                                <h2 id="modal-title" class="text-2xl font-bold text-gray-900 dark:text-white"></h2>
                                <button id="close-modal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                                    <i class="fas fa-times text-xl"></i>
                                </button>
                            </div>
                            
                            <div class="grid lg:grid-cols-2 gap-8">
                                <div>
                                    <img id="modal-image" src="" alt="Template Preview" class="w-full h-64 object-cover rounded-lg mb-4">
                                    <p id="modal-description" class="text-gray-600 dark:text-gray-300 mb-4"></p>
                                    
                                    <div class="mb-6">
                                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Features:</h3>
                                        <ul id="modal-features" class="space-y-1 text-gray-600 dark:text-gray-300"></ul>
                                    </div>
                                    
                                    <div class="flex items-center justify-between">
                                        <div class="text-2xl font-bold text-blue-600" id="modal-price"></div>
                                        <div class="space-x-3">
                                            <a id="demo-link" href="#" target="_blank" class="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                                                <i class="fas fa-eye mr-2"></i>
                                                Live Demo
                                            </a>
                                            <a href="#contact" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                                <i class="fas fa-shopping-cart mr-2"></i>
                                                Get This Template
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Template Details</h3>
                                    <div class="space-y-4">
                                        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                            <h4 class="font-medium text-gray-900 dark:text-white mb-2">What's Included:</h4>
                                            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                                <li>• Responsive design for all devices</li>
                                                <li>• SEO optimized structure</li>
                                                <li>• Fast loading performance</li>
                                                <li>• Easy customization</li>
                                                <li>• 30 days of support</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                            <h4 class="font-medium text-gray-900 dark:text-white mb-2">Delivery:</h4>
                                            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                                <li>• Source files (HTML, CSS, JS)</li>
                                                <li>• Documentation</li>
                                                <li>• Setup instructions</li>
                                                <li>• Customization guide</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('template-modal');
    }
    
    bindEvents() {
        // Close modal
        document.getElementById('close-modal').addEventListener('click', () => {
            this.hideModal();
        });
        
        // Close on backdrop click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideModal();
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                this.hideModal();
            }
        });
        
        // Add preview buttons to portfolio items
        this.addPreviewButtons();
    }
    
    addPreviewButtons() {
        const portfolioItems = document.querySelectorAll('.portfolio-card');
        portfolioItems.forEach((item, index) => {
            const templateKeys = Object.keys(this.templates);
            if (templateKeys[index]) {
                const templateKey = templateKeys[index];
                const template = this.templates[templateKey];
                
                // Add preview button to hover overlay
                const overlay = item.querySelector('.absolute');
                if (overlay) {
                    const previewBtn = document.createElement('button');
                    previewBtn.className = 'absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors';
                    previewBtn.innerHTML = '<i class="fas fa-eye mr-1"></i>Preview';
                    previewBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.showTemplate(templateKey);
                    });
                    overlay.appendChild(previewBtn);
                }
            }
        });
    }
    
    showTemplate(templateKey) {
        const template = this.templates[templateKey];
        if (!template) return;
        
        this.currentTemplate = templateKey;
        
        // Update modal content
        document.getElementById('modal-title').textContent = template.name;
        document.getElementById('modal-description').textContent = template.description;
        document.getElementById('modal-image').src = template.image;
        document.getElementById('modal-price').textContent = template.price;
        document.getElementById('demo-link').href = template.demoUrl;
        
        // Update features list
        const featuresList = document.getElementById('modal-features');
        featuresList.innerHTML = template.features.map(feature => 
            `<li>• ${feature}</li>`
        ).join('');
        
        // Show modal
        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    
    hideModal() {
        this.modal.classList.add('hidden');
        document.body.style.overflow = '';
        this.currentTemplate = null;
    }
}

// Initialize template preview system
document.addEventListener('DOMContentLoaded', function() {
    new TemplatePreview();
});
