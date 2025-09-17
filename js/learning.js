(function(){
'use strict';
// Video Data
const videoData = [
    {
        id: 1,
        title: "Deteksi Deepfake #1",
        description: "Video pembelajaran tentang deteksi deepfake (link 1).",
        category: "deepfake",
        duration: "12 min",
        level: "Beginner",
        views: "23K",
        likes: "1.2K",
        date: "1 week ago",
        thumbnail: "https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Deepfake+%231",
        videoId: "ch-CU5VG1fs"
    },
    {
        id: 2,
        title: "Deteksi Deepfake #2",
        description: "Video pembelajaran tentang deteksi deepfake (link 2).",
        category: "deepfake",
        duration: "18 min",
        level: "Intermediate",
        views: "15K",
        likes: "890",
        date: "2 weeks ago",
        thumbnail: "https://via.placeholder.com/300x200/1E40AF/FFFFFF?text=Deepfake+%232",
        videoId: "02rVRwovRow"
    },
    {
        id: 3,
        title: "Deteksi Deepfake #3",
        description: "Video pembelajaran tentang deteksi deepfake (link 3).",
        category: "deepfake",
        duration: "22 min",
        level: "Advanced",
        views: "8.5K",
        likes: "567",
        date: "3 weeks ago",
        thumbnail: "https://via.placeholder.com/300x200/991B1B/FFFFFF?text=Deepfake+%233",
        videoId: "s8IGWdkxM9E"
    },
    {
        id: 4,
        title: "Dummy Video A",
        description: "Konten dummy untuk melengkapi 5 video.",
        category: "ethics",
        duration: "20 min",
        level: "Beginner",
        views: "3.1K",
        likes: "210",
        date: "5 days ago",
        thumbnail: "https://via.placeholder.com/300x200/06B6D4/FFFFFF?text=Dummy+A",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 5,
        title: "Dummy Video B",
        description: "Konten dummy untuk melengkapi 5 video.",
        category: "cybercrime",
        duration: "24 min",
        level: "Intermediate",
        views: "4.5K",
        likes: "320",
        date: "1 week ago",
        thumbnail: "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Dummy+B",
        videoId: "dQw4w9WgXcQ"
    }
];

// State variables
let currentFilter = 'all';
let currentSearch = '';
let displayedVideos = [];
let currentPage = 1;
const videosPerPage = 5;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const videoGrid = document.getElementById('videoGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Initialize the page
function initLearningCenter() {
    console.log('[Learning] initLearningCenter called');
    try {
        loadVideos();
        console.log(`[Learning] Loaded videos, to render: ${displayedVideos.length}`);
    } catch (e) {
        console.error('[Learning] Error during loadVideos:', e);
    }
    try {
        setupEventListeners();
        console.log('[Learning] Event listeners set');
    } catch (e) {
        console.error('[Learning] Error during setupEventListeners:', e);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    } else {
        console.warn('[Learning] searchInput not found');
    }
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    } else {
        console.warn('[Learning] searchBtn not found');
    }

    // Filter functionality
    if (filterBtns && filterBtns.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.category;
                setActiveFilter(category);
            });
        });
    }

    // Load more functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreVideos);
    }
}

// Handle search
function handleSearch() {
    currentSearch = searchInput.value.toLowerCase().trim();
    currentPage = 1;
    loadVideos();
}

// Set active filter
function setActiveFilter(category) {
    currentFilter = category;
    currentPage = 1;
    
    // Update active button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    loadVideos();
}

// Filter and search videos
function filterVideos() {
    let filtered = videoData;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(video => video.category === currentFilter);
    }
    
    // Apply search filter
    if (currentSearch) {
        filtered = filtered.filter(video => 
            video.title.toLowerCase().includes(currentSearch) ||
            video.description.toLowerCase().includes(currentSearch) ||
            video.category.toLowerCase().includes(currentSearch)
        );
    }
    
    return filtered;
}

// Load videos
function loadVideos() {
    const filteredVideos = filterVideos();
    const startIndex = 0;
    const endIndex = currentPage * videosPerPage;
    
    displayedVideos = filteredVideos.slice(startIndex, endIndex);
    
    renderVideos();
    updateLoadMoreButton(filteredVideos.length);
}

// Load more videos
function loadMoreVideos() {
    const filteredVideos = filterVideos();
    currentPage++;
    
    const startIndex = 0;
    const endIndex = currentPage * videosPerPage;
    
    displayedVideos = filteredVideos.slice(startIndex, endIndex);
    
    renderVideos();
    updateLoadMoreButton(filteredVideos.length);
}

// Render videos
function renderVideos() {
    videoGrid.innerHTML = '';
    
    if (displayedVideos.length === 0) {
        videoGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No videos found</h3>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        `;
        return;
    }
    
    displayedVideos.forEach(video => {
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
    });
    console.log(`[Learning] Rendered ${displayedVideos.length} video cards`);
}

// Create video card
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
        <div class="video-container">
            <iframe 
                src="https://www.youtube.com/embed/${video.videoId}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <div class="video-info">
            <div class="video-meta">
                <span class="category ${video.category}">${getCategoryDisplayName(video.category)}</span>
                <span class="duration"><i class="fas fa-clock"></i> ${video.duration}</span>
                <span class="level"><i class="fas fa-star"></i> ${video.level}</span>
            </div>
            <h3>${video.title}</h3>
            <p>${video.description}</p>
            <div class="video-stats">
                <span><i class="fas fa-eye"></i> ${video.views} views</span>
                <span><i class="fas fa-thumbs-up"></i> ${video.likes} likes</span>
                <span><i class="fas fa-calendar"></i> ${video.date}</span>
            </div>
        </div>
    `;
    
    // Add click event to open video
    card.addEventListener('click', () => {
        openVideoModal(video);
    });
    
    return card;
}

// Get category display name
function getCategoryDisplayName(category) {
    const names = {
        'deepfake': 'Deepfake Detection',
        'ethics': 'AI Ethics',
        'cybercrime': 'Cybercrime',
        'law': 'AI in Law'
    };
    return names[category] || category;
}

// Update load more button
function updateLoadMoreButton(totalVideos) {
    const hasMoreVideos = displayedVideos.length < totalVideos;
    loadMoreBtn.style.display = hasMoreVideos ? 'block' : 'none';
    
    if (hasMoreVideos) {
        const remaining = totalVideos - displayedVideos.length;
        loadMoreBtn.innerHTML = `
            <i class="fas fa-plus"></i>
            Load ${Math.min(remaining, videosPerPage)} More Videos
        `;
    }
}

// Open video modal (placeholder)
function openVideoModal(video) {
    // This would typically open a modal with the video
    console.log('Opening video:', video.title);
    alert(`Video modal would open for: ${video.title}`);
}

// Add CSS for no results
const style = document.createElement('style');
style.textContent = `
    .no-results {
        text-align: center;
        padding: 3rem;
        color: #666;
    }
    
    .no-results i {
        font-size: 3rem;
        color: #ccc;
        margin-bottom: 1rem;
    }
    
    .no-results h3 {
        margin-bottom: 0.5rem;
        color: #333;
    }
`;
document.head.appendChild(style);

// Initialize when page loads (ensure it runs even if script is loaded after DOMContentLoaded)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLearningCenter);
} else {
    initLearningCenter();
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation for video cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe video cards for animation
function observeVideoCards() {
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Update the renderVideos function to include animation
const originalRenderVideos = renderVideos;
renderVideos = function() {
    originalRenderVideos();
    setTimeout(observeVideoCards, 100);
};

console.log('Learning center functionality loaded successfully!'); 

})();