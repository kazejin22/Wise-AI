// 404 Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Set current URL in the broken URL field
    const brokenUrlInput = document.getElementById('brokenUrl');
    if (brokenUrlInput) {
        brokenUrlInput.value = window.location.href;
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput && searchBtn) {
        // Search on button click
        searchBtn.addEventListener('click', performSearch);
        
        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Auto-focus search input
        searchInput.focus();
    }

    function performSearch() {
        const query = searchInput.value.trim();
        
        if (!query) {
            showNotification('Please enter a search term.', 'warning');
            return;
        }
        
        // Simulate search functionality
        showNotification(`Searching for "${query}"...`, 'info');
        
        // In a real implementation, this would redirect to search results
        // For now, we'll simulate a search with common terms
        setTimeout(() => {
            const searchResults = simulateSearch(query);
            if (searchResults.length > 0) {
                showSearchResults(searchResults, query);
            } else {
                showNotification(`No results found for "${query}". Try different keywords.`, 'warning');
            }
        }, 1500);
    }

    function simulateSearch(query) {
        const searchablePages = [
            { title: 'Deepfake Quiz', url: 'quiz-deepfake.html', keywords: ['deepfake', 'quiz', 'test', 'detection', 'fake'] },
            { title: 'Learning Center', url: 'learning.html', keywords: ['learning', 'education', 'tutorial', 'video', 'course'] },
            { title: 'Case Map', url: 'map.html', keywords: ['map', 'case', 'world', 'global', 'incident'] },
            { title: 'Detection Test', url: 'deepware-api.html', keywords: ['detection', 'test', 'api', 'deepware', 'analyze'] },
            { title: 'About Us', url: 'about.html', keywords: ['about', 'mission', 'team', 'story'] }
        ];
        
        const results = searchablePages.filter(page => {
            const searchTerm = query.toLowerCase();
            return page.title.toLowerCase().includes(searchTerm) ||
                   page.keywords.some(keyword => keyword.includes(searchTerm));
        });
        
        return results;
    }

    function showSearchResults(results, query) {
        const modal = createSearchResultsModal(results, query);
        document.body.appendChild(modal);
        
        setTimeout(() => {
            modal.classList.add('active');
        }, 100);
    }

    function createSearchResultsModal(results, query) {
        const modal = document.createElement('div');
        modal.className = 'modal search-results-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Search Results for "${query}"</h3>
                    <button class="modal-close" onclick="this.closest('.modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="search-results">
                        ${results.map(result => `
                            <a href="${result.url}" class="search-result-item">
                                <div class="result-icon">
                                    <i class="fas fa-file-alt"></i>
                                </div>
                                <div class="result-content">
                                    <h4>${result.title}</h4>
                                    <p>Click to navigate to this page</p>
                                </div>
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        // Add styles for search results
        const style = document.createElement('style');
        style.textContent = `
            .search-results-modal .modal-content {
                max-width: 600px;
            }
            .search-results {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .search-result-item {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                background: #F9FAFB;
                border-radius: 10px;
                text-decoration: none;
                color: #374151;
                transition: all 0.3s ease;
                border: 2px solid transparent;
            }
            .search-result-item:hover {
                background: #F3F4F6;
                border-color: #4F46E5;
                transform: translateX(5px);
            }
            .result-icon {
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #4F46E5, #7C3AED);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1rem;
            }
            .result-content {
                flex: 1;
            }
            .result-content h4 {
                margin: 0 0 0.25rem 0;
                font-size: 1.1rem;
                color: #1F2937;
            }
            .result-content p {
                margin: 0;
                font-size: 0.9rem;
                color: #6B7280;
            }
            .search-result-item i.fa-arrow-right {
                color: #9CA3AF;
                transition: transform 0.3s ease;
            }
            .search-result-item:hover i.fa-arrow-right {
                transform: translateX(3px);
                color: #4F46E5;
            }
        `;
        document.head.appendChild(style);
        
        return modal;
    }

    // Report broken link modal
    const reportBtn = document.getElementById('reportBtn');
    const reportModal = document.getElementById('reportModal');
    const closeModal = document.getElementById('closeModal');
    const cancelReport = document.getElementById('cancelReport');
    const reportForm = document.getElementById('reportForm');
    
    if (reportBtn && reportModal) {
        reportBtn.addEventListener('click', () => {
            reportModal.classList.add('active');
        });
        
        closeModal.addEventListener('click', closeReportModal);
        cancelReport.addEventListener('click', closeReportModal);
        
        // Close modal when clicking outside
        reportModal.addEventListener('click', (e) => {
            if (e.target === reportModal) {
                closeReportModal();
            }
        });
        
        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && reportModal.classList.contains('active')) {
                closeReportModal();
            }
        });
    }
    
    function closeReportModal() {
        reportModal.classList.remove('active');
    }
    
    // Handle report form submission
    if (reportForm) {
        reportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(reportForm);
            const email = formData.get('reportEmail');
            const message = formData.get('reportMessage');
            
            if (!email) {
                showNotification('Please provide your email address.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = reportForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                reportForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                closeReportModal();
                
                showNotification('Thank you! Your report has been submitted. We\'ll investigate the broken link.', 'success');
                
                // Log report data
                console.log('Broken link report:', {
                    url: window.location.href,
                    email,
                    message
                });
            }, 2000);
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${getNotificationIcon(type)}"></i>
                <span>${message}</span>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${getNotificationColor(type)};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            max-width: 400px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            removeNotification(notification);
        }, 5000);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            removeNotification(notification);
        });
    }

    function removeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    function getNotificationIcon(type) {
        switch (type) {
            case 'success': return 'fa-check-circle';
            case 'error': return 'fa-exclamation-circle';
            case 'warning': return 'fa-exclamation-triangle';
            default: return 'fa-info-circle';
        }
    }

    function getNotificationColor(type) {
        switch (type) {
            case 'success': return '#10B981';
            case 'error': return '#EF4444';
            case 'warning': return '#F59E0B';
            default: return '#4F46E5';
        }
    }

    // Navigation card hover effects
    const navCards = document.querySelectorAll('.nav-card');
    
    navCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animate digits on scroll
    const digits = document.querySelectorAll('.digit');
    
    const digitObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.5 });
    
    digits.forEach(digit => {
        digit.style.animationPlayState = 'paused';
        digitObserver.observe(digit);
    });

    // Add some interactive elements to floating icons
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.color = 'rgba(255, 255, 255, 0.3)';
            this.style.transform = 'scale(1.2)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.color = 'rgba(255, 255, 255, 0.1)';
            this.style.transform = 'scale(1)';
        });
    });

    // Add keyboard navigation for accessibility
    document.addEventListener('keydown', function(e) {
        // Focus management for modal
        if (reportModal.classList.contains('active')) {
            const focusableElements = reportModal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        }
    });
}); 