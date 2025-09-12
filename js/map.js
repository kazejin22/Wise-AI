// Case Data
const caseData = [
    {
        id: 1,
        title: "Deepfake Political Speech in Ukraine",
        description: "A deepfake video of a Ukrainian politician making false statements about the conflict was widely circulated on social media, causing confusion and misinformation.",
        location: "Kyiv, Ukraine",
        coordinates: [50.4501, 30.5234],
        category: "politics",
        date: "March 2024",
        details: [
            "Deepfake video circulated on multiple social media platforms",
            "Featured a prominent Ukrainian politician",
            "Contained false statements about military operations",
            "Reached over 2 million views before being debunked"
        ],
        impact: "The video caused significant confusion among the public and was used by foreign actors to spread disinformation about the conflict. It took 48 hours for fact-checkers to debunk the content.",
        sources: [
            { name: "BBC News", url: "#" },
            { name: "Reuters Fact Check", url: "#" },
            { name: "Ukrainian Government Statement", url: "#" }
        ]
    },
    {
        id: 2,
        title: "AI-Generated Celebrity Endorsement Scam",
        description: "Scammers used AI-generated videos of celebrities to promote fake investment schemes, resulting in millions of dollars in losses.",
        location: "Los Angeles, USA",
        coordinates: [34.0522, -118.2437],
        category: "financial",
        date: "February 2024",
        details: [
            "AI-generated videos of multiple celebrities",
            "Promoted fake cryptocurrency investments",
            "Targeted elderly and vulnerable populations",
            "Estimated losses: $15 million"
        ],
        impact: "The scam resulted in significant financial losses for victims, particularly elderly individuals. It also damaged the reputation of the celebrities whose likenesses were used without permission.",
        sources: [
            { name: "FBI Press Release", url: "#" },
            { name: "Los Angeles Times", url: "#" },
            { name: "Celebrity Legal Action", url: "#" }
        ]
    },
    {
        id: 3,
        title: "Fake News Deepfake in India",
        description: "A deepfake video of a news anchor reporting false information about a political scandal went viral, causing widespread panic and confusion.",
        location: "Mumbai, India",
        coordinates: [19.0760, 72.8777],
        category: "hoax",
        date: "January 2024",
        details: [
            "Deepfake of popular news anchor",
            "False reporting of political scandal",
            "Went viral on WhatsApp and social media",
            "Caused panic among local population"
        ],
        impact: "The fake news caused widespread panic and confusion, leading to protests and calls for government action. It highlighted the vulnerability of traditional media to AI manipulation.",
        sources: [
            { name: "Times of India", url: "#" },
            { name: "Press Trust of India", url: "#" },
            { name: "Government Fact Check Unit", url: "#" }
        ]
    },
    {
        id: 4,
        title: "Corporate CEO Deepfake Attack",
        description: "Cybercriminals used a deepfake video of a CEO to authorize fraudulent wire transfers, resulting in a $25 million loss for the company.",
        location: "London, UK",
        coordinates: [51.5074, -0.1278],
        category: "financial",
        date: "December 2023",
        details: [
            "Deepfake video call with company CEO",
            "Authorized fraudulent wire transfers",
            "Targeted company's finance department",
            "Loss: $25 million"
        ],
        impact: "The attack resulted in significant financial losses and led to increased security measures in corporate environments. It also raised awareness about the need for better authentication protocols.",
        sources: [
            { name: "Financial Times", url: "#" },
            { name: "UK Cyber Security Centre", url: "#" },
            { name: "Company Press Release", url: "#" }
        ]
    },
    {
        id: 5,
        title: "Election Interference Deepfake",
        description: "A deepfake video of a presidential candidate making controversial statements was circulated during election season, potentially influencing voter behavior.",
        location: "Washington DC, USA",
        coordinates: [38.9072, -77.0369],
        category: "politics",
        date: "November 2023",
        details: [
            "Deepfake of presidential candidate",
            "Controversial statements about immigration",
            "Circulated during election season",
            "Reached millions of voters"
        ],
        impact: "The deepfake may have influenced voter behavior and contributed to political polarization. It led to calls for better regulation of political content online.",
        sources: [
            { name: "Associated Press", url: "#" },
            { name: "FactCheck.org", url: "#" },
            { name: "Election Commission Report", url: "#" }
        ]
    },
    {
        id: 6,
        title: "AI-Generated Medical Misinformation",
        description: "A deepfake video of a doctor promoting false medical treatments went viral, potentially endangering public health.",
        location: "Toronto, Canada",
        coordinates: [43.6532, -79.3832],
        category: "hoax",
        date: "October 2023",
        details: [
            "Deepfake of medical professional",
            "Promoted false COVID-19 treatments",
            "Went viral on social media",
            "Potentially endangered public health"
        ],
        impact: "The misinformation could have led to people using ineffective or dangerous treatments. It highlighted the risks of AI-generated medical content.",
        sources: [
            { name: "Health Canada", url: "#" },
            { name: "Canadian Medical Association", url: "#" },
            { name: "Toronto Star", url: "#" }
        ]
    },
    {
        id: 7,
        title: "Banking Deepfake Fraud",
        description: "Criminals used deepfake technology to bypass facial recognition systems at banks, successfully stealing customer funds.",
        location: "Sydney, Australia",
        coordinates: [-33.8688, 151.2093],
        category: "financial",
        date: "September 2023",
        details: [
            "Deepfake bypassed facial recognition",
            "Targeted multiple bank branches",
            "Stole customer funds",
            "Exposed security vulnerabilities"
        ],
        impact: "The attack exposed vulnerabilities in banking security systems and led to increased investment in anti-deepfake detection technology.",
        sources: [
            { name: "Australian Federal Police", url: "#" },
            { name: "Sydney Morning Herald", url: "#" },
            { name: "Banking Association Report", url: "#" }
        ]
    },
    {
        id: 8,
        title: "Educational Institution Hoax",
        description: "A deepfake video of a university professor making inappropriate comments was used to discredit the institution and its faculty.",
        location: "Berlin, Germany",
        coordinates: [52.5200, 13.4050],
        category: "hoax",
        date: "August 2023",
        details: [
            "Deepfake of university professor",
            "Inappropriate comments about students",
            "Used to discredit institution",
            "Caused reputational damage"
        ],
        impact: "The hoax caused significant reputational damage to the university and the professor, leading to investigations and calls for better protection of academic integrity.",
        sources: [
            { name: "Deutsche Welle", url: "#" },
            { name: "University Statement", url: "#" },
            { name: "German Media Council", url: "#" }
        ]
    }
];

// Map and state variables
let map;
let markers = [];
let currentFilter = 'all';
let currentCase = null;

// DOM Elements
const filterBtns = document.querySelectorAll('.filter-btn');
const caseListToggle = document.getElementById('caseListToggle');
const caseListPanel = document.getElementById('caseListPanel');
const closeCaseList = document.getElementById('closeCaseList');
const caseListContent = document.getElementById('caseListContent');
const caseModal = document.getElementById('caseModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const zoomIn = document.getElementById('zoomIn');
const zoomOut = document.getElementById('zoomOut');
const resetMap = document.getElementById('resetMap');

// Initialize map
function initMap() {
    map = L.map('map').setView([20, 0], 2);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Add custom marker icons
    const createCustomIcon = (category) => {
        const colors = {
            politics: '#EF4444',
            hoax: '#F59E0B',
            financial: '#10B981'
        };
        
        return L.divIcon({
            className: 'custom-marker',
            html: `<div style="background-color: ${colors[category]}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });
    };
    
    // Add markers for each case
    caseData.forEach(caseItem => {
        const marker = L.marker(caseItem.coordinates, {
            icon: createCustomIcon(caseItem.category)
        }).addTo(map);
        
        marker.bindPopup(`
            <div class="marker-popup">
                <h3>${caseItem.title}</h3>
                <p>${caseItem.location}</p>
                <span class="category-badge ${caseItem.category}">${getCategoryDisplayName(caseItem.category)}</span>
            </div>
        `);
        
        marker.on('click', () => {
            openCaseModal(caseItem);
        });
        
        markers.push({
            marker: marker,
            case: caseItem
        });
    });
    
    loadCaseList();
}

// Get category display name
function getCategoryDisplayName(category) {
    const names = {
        'politics': 'Politics',
        'hoax': 'Hoax',
        'financial': 'Financial Crime'
    };
    return names[category] || category;
}

// Load case list
function loadCaseList() {
    caseListContent.innerHTML = '';
    
    const filteredCases = currentFilter === 'all' 
        ? caseData 
        : caseData.filter(caseItem => caseItem.category === currentFilter);
    
    filteredCases.forEach(caseItem => {
        const caseElement = document.createElement('div');
        caseElement.className = `case-item ${caseItem.category}`;
        caseElement.innerHTML = `
            <div class="case-item-header">
                <h4 class="case-item-title">${caseItem.title}</h4>
                <span class="case-item-category ${caseItem.category}">${getCategoryDisplayName(caseItem.category)}</span>
            </div>
            <div class="case-item-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${caseItem.location}</span>
                <span><i class="fas fa-calendar"></i> ${caseItem.date}</span>
            </div>
            <p class="case-item-description">${caseItem.description}</p>
        `;
        
        caseElement.addEventListener('click', () => {
            openCaseModal(caseItem);
            closeCaseListPanel();
        });
        
        caseListContent.appendChild(caseElement);
    });
}

// Filter cases
function filterCases(category) {
    currentFilter = category;
    
    // Update active filter button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Show/hide markers based on filter
    markers.forEach(({ marker, case: caseItem }) => {
        if (category === 'all' || caseItem.category === category) {
            marker.addTo(map);
        } else {
            marker.remove();
        }
    });
    
    // Reload case list
    loadCaseList();
}

// Open case modal
function openCaseModal(caseItem) {
    currentCase = caseItem;
    
    // Populate modal content
    document.getElementById('modalTitle').textContent = caseItem.title;
    document.getElementById('modalLocation').textContent = caseItem.location;
    document.getElementById('modalDate').textContent = caseItem.date;
    document.getElementById('modalCategory').textContent = getCategoryDisplayName(caseItem.category);
    document.getElementById('modalDescription').textContent = caseItem.description;
    document.getElementById('modalImpact').textContent = caseItem.impact;
    
    // Populate details
    const detailsList = document.getElementById('modalDetails');
    detailsList.innerHTML = '';
    caseItem.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
    });
    
    // Populate sources
    const sourcesList = document.getElementById('modalSources');
    sourcesList.innerHTML = '';
    caseItem.sources.forEach(source => {
        const sourceElement = document.createElement('a');
        sourceElement.href = source.url;
        sourceElement.className = 'source-item';
        sourceElement.innerHTML = `
            <i class="fas fa-external-link-alt"></i>
            <span>${source.name}</span>
        `;
        sourcesList.appendChild(sourceElement);
    });
    
    // Show modal
    caseModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close case modal
function closeCaseModal() {
    caseModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentCase = null;
}

// Toggle case list panel
function toggleCaseListPanel() {
    caseListPanel.classList.toggle('active');
}

// Close case list panel
function closeCaseListPanel() {
    caseListPanel.classList.remove('active');
}

// Map controls
function zoomInMap() {
    map.zoomIn();
}

function zoomOutMap() {
    map.zoomOut();
}

function resetMapView() {
    map.setView([20, 0], 2);
}

// Share case
function shareCase() {
    if (currentCase) {
        const shareText = `Check out this AI case: ${currentCase.title} - ${currentCase.location}`;
        const shareUrl = window.location.href;
        
        if (navigator.share) {
            navigator.share({
                title: currentCase.title,
                text: shareText,
                url: shareUrl
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
            alert('Case link copied to clipboard!');
        }
    }
}

// Learn more about case
function learnMore() {
    if (currentCase && currentCase.sources.length > 0) {
        window.open(currentCase.sources[0].url, '_blank');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            filterCases(category);
        });
    });
    
    // Case list toggle
    caseListToggle.addEventListener('click', toggleCaseListPanel);
    closeCaseList.addEventListener('click', closeCaseListPanel);
    
    // Modal controls
    modalOverlay.addEventListener('click', closeCaseModal);
    closeModal.addEventListener('click', closeCaseModal);
    
    // Map controls
    zoomIn.addEventListener('click', zoomInMap);
    zoomOut.addEventListener('click', zoomOutMap);
    resetMap.addEventListener('click', resetMapView);
    
    // Modal action buttons
    document.getElementById('shareCase').addEventListener('click', shareCase);
    document.getElementById('learnMore').addEventListener('click', learnMore);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (caseModal.classList.contains('active')) {
                closeCaseModal();
            } else if (caseListPanel.classList.contains('active')) {
                closeCaseListPanel();
            }
        }
    });
});

// Add custom CSS for markers
const style = document.createElement('style');
style.textContent = `
    .marker-popup {
        text-align: center;
        min-width: 200px;
    }
    
    .marker-popup h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
        color: #333;
    }
    
    .marker-popup p {
        margin: 0 0 0.5rem 0;
        color: #666;
        font-size: 0.9rem;
    }
    
    .category-badge {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
    }
    
    .category-badge.politics {
        background: #FEE2E2;
        color: #991B1B;
    }
    
    .category-badge.hoax {
        background: #FEF3C7;
        color: #92400E;
    }
    
    .category-badge.financial {
        background: #D1FAE5;
        color: #065F46;
    }
    
    .custom-marker {
        background: transparent;
        border: none;
    }
`;
document.head.appendChild(style);

console.log('Map functionality loaded successfully!'); 