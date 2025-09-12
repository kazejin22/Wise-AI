// Video Data
const videoData = [
    {
        id: 1,
        title: "Introduction to Deepfake Detection",
        description: "Learn the basics of identifying AI-generated content and understanding the technology behind deepfakes.",
        category: "deepfake",
        duration: "12 min",
        level: "Beginner",
        views: "23K",
        likes: "1.2K",
        date: "1 week ago",
        thumbnail: "https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Deepfake+Intro",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 2,
        title: "AI Ethics in Digital Media",
        description: "Explore the ethical implications of AI technology and its impact on society and media.",
        category: "ethics",
        duration: "18 min",
        level: "Intermediate",
        views: "15K",
        likes: "890",
        date: "2 weeks ago",
        thumbnail: "https://via.placeholder.com/300x200/1E40AF/FFFFFF?text=AI+Ethics",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 3,
        title: "Cybersecurity Threats from AI",
        description: "Understanding how AI can be used maliciously and how to protect against cyber threats.",
        category: "cybercrime",
        duration: "22 min",
        level: "Advanced",
        views: "8.5K",
        likes: "567",
        date: "3 weeks ago",
        thumbnail: "https://via.placeholder.com/300x200/991B1B/FFFFFF?text=Cyber+Threats",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 4,
        title: "Legal Framework for AI Detection",
        description: "Understanding the legal aspects and regulations surrounding AI-generated content.",
        category: "law",
        duration: "25 min",
        level: "Intermediate",
        views: "12K",
        likes: "745",
        date: "1 month ago",
        thumbnail: "https://via.placeholder.com/300x200/065F46/FFFFFF?text=AI+Law",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 5,
        title: "Advanced Deepfake Detection Techniques",
        description: "Master advanced methods for detecting sophisticated AI-generated content.",
        category: "deepfake",
        duration: "30 min",
        level: "Expert",
        views: "6.2K",
        likes: "423",
        date: "2 weeks ago",
        thumbnail: "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Advanced+Detection",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 6,
        title: "The Psychology of Deepfake Deception",
        description: "Understanding how deepfakes manipulate human psychology and perception.",
        category: "ethics",
        duration: "20 min",
        level: "Intermediate",
        views: "9.8K",
        likes: "612",
        date: "1 week ago",
        thumbnail: "https://via.placeholder.com/300x200/7C3AED/FFFFFF?text=Psychology",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 7,
        title: "AI Detection Tools and Software",
        description: "A comprehensive guide to the best tools and software for detecting AI-generated content.",
        category: "deepfake",
        duration: "28 min",
        level: "Intermediate",
        views: "18K",
        likes: "1.1K",
        date: "3 days ago",
        thumbnail: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Detection+Tools",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 8,
        title: "Case Studies: Real Deepfake Incidents",
        description: "Analyzing real-world cases where deepfakes were used maliciously and their impact.",
        category: "cybercrime",
        duration: "35 min",
        level: "Advanced",
        views: "11K",
        likes: "789",
        date: "1 week ago",
        thumbnail: "https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Case+Studies",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 9,
        title: "Future of AI Detection Technology",
        description: "Exploring emerging technologies and trends in AI detection and prevention.",
        category: "deepfake",
        duration: "32 min",
        level: "Expert",
        views: "7.3K",
        likes: "456",
        date: "5 days ago",
        thumbnail: "https://via.placeholder.com/300x200/06B6D4/FFFFFF?text=Future+Tech",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 10,
        title: "International AI Regulations",
        description: "Comparing AI regulations and policies across different countries and regions.",
        category: "law",
        duration: "40 min",
        level: "Advanced",
        views: "5.9K",
        likes: "334",
        date: "2 weeks ago",
        thumbnail: "https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Regulations",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 11,
        title: "Building AI Detection Skills",
        description: "Practical exercises and training to improve your AI detection abilities.",
        category: "deepfake",
        duration: "45 min",
        level: "Beginner",
        views: "14K",
        likes: "923",
        date: "1 month ago",
        thumbnail: "https://via.placeholder.com/300x200/EC4899/FFFFFF?text=Skills+Training",
        videoId: "dQw4w9WgXcQ"
    },
    {
        id: 12,
        title: "Ethical AI Development",
        description: "How to develop AI systems responsibly and ethically.",
        category: "ethics",
        duration: "38 min",
        level: "Expert",
        views: "4.7K",
        likes: "298",
        date: "1 week ago",
        thumbnail: "https://via.placeholder.com/300x200/F97316/FFFFFF?text=Ethical+AI",
        videoId: "dQw4w9WgXcQ"
    }
];

// State variables
let currentFilter = 'all';
let currentSearch = '';
let displayedVideos = [];
let currentPage = 1;
const videosPerPage = 6;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const videoGrid = document.getElementById('videoGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Initialize the page
function initLearningCenter() {
    loadVideos();
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            setActiveFilter(category);
        });
    });

    // Load more functionality
    loadMoreBtn.addEventListener('click', loadMoreVideos);
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

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initLearningCenter);

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