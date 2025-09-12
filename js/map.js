const asiaCases = [
    {
        id: 1,
        title: "Deepfake of Finance Minister Sri Mulyani",
        description: "In 2025, a highly convincing deepfake video featuring a person resembling Finance Minister Sri Mulyani Indrawati was widely circulated on social media. In the fake video, she appeared to be making a provocative statement, claiming that teachers are a burden on the state.",
        location: "Jakarta, Indonesia",
        coordinates: [-6.2088, 106.8456],
        category: "politics",
        date: "August 2025",
        details: [
            "Audio clips from an original speech were edited using AI to completely change the meaning.",
            "The video triggered significant public outrage, especially among teachers.",
            "The Ministry of Finance and Sri Mulyani herself immediately denied the video, labeling it a deepfake hoax."
        ],
        impact: "This case became one of the most prominent examples in Indonesia of how AI can be used to spread disinformation and manipulate public opinion in a highly dangerous manner. It highlights the importance of digital literacy and vigilance regarding online content.",
        sources: [
            { name: "CNN Indonesia", url: "#" },
            { name: "DetikFinance", url: "#" },
            { name: "Tempo.co", url: "#" }
        ],
        videoUrl: "assets/video/0912.mp4"
    },
    {
        id: 2,
        title: "Fake News Deepfake in India",
        description: "A deepfake video of a news anchor reporting false information about a political scandal went viral, causing widespread panic and confusion.",
        location: "Mumbai, India",
        coordinates: [19.0760, 72.8777],
        category: "hoax",
        date: "January 2024",
        details: [
            "Deepfake of a popular news anchor.",
            "False reporting on a political scandal.",
            "Went viral on WhatsApp and social media."
        ],
        impact: "The fake news caused widespread panic and confusion...",
        sources: [
            { name: "Times of India", url: "#" }
        ],
        videoUrl: ""
    },
    {
        id: 3,
        title: "Financial Scam in China",
        description: "Scammers used AI-generated voice cloning to impersonate a company's CFO, leading to a fraudulent wire transfer.",
        location: "Beijing, China",
        coordinates: [39.9042, 116.4074],
        category: "financial",
        date: "July 2023",
        details: [
            "Voice cloning technology used to impersonate the CFO.",
            "Resulted in a fraudulent transfer of company funds."
        ],
        impact: "The incident highlighted the risk of voice-based authentication systems.",
        sources: [
            { name: "The Wall Street Journal", url: "#" }
        ],
        videoUrl: ""
    },
    {
        id: 4,
        title: "Election Disinformation in Pakistan",
        description: "An AI-generated video of a political candidate making inflammatory remarks circulated widely before an election.",
        location: "Islamabad, Pakistan",
        coordinates: [33.7294, 73.0931],
        category: "politics",
        date: "September 2024",
        details: [
            "Video designed to influence voter opinion.",
            "Debunked by local fact-checking organizations."
        ],
        impact: "Raised public concern about the integrity of political discourse.",
        sources: [
            { name: "Al Jazeera", url: "#" }
        ],
        videoUrl: ""
    },
    {
        id: 5,
        title: "Deepfake Prank in Japan",
        description: "A prankster used deepfake technology to create a fake video of a celebrity announcing a fake product, leading to public confusion.",
        location: "Tokyo, Japan",
        coordinates: [35.6762, 139.6503],
        category: "hoax",
        date: "April 2024",
        details: [
            "Used deepfake to impersonate a famous comedian.",
            "Announced a non-existent product."
        ],
        impact: "Led to a public statement from the celebrity and raised awareness of deepfake pranks.",
        sources: [
            { name: "Japan Times", url: "#" }
        ],
        videoUrl: ""
    }
];

const northAmericaCases = [
    {
        id: 6,
        title: "AI-Generated Celebrity Endorsement Scam",
        description: "Scammers used AI-generated videos of celebrities to promote fake investment schemes, resulting in millions of dollars in losses.",
        location: "Los Angeles, USA",
        coordinates: [34.0522, -118.2437],
        category: "financial",
        date: "February 2024",
        details: [
            "AI-generated videos of multiple celebrities.",
            "Promoted fake cryptocurrency investments.",
            "Estimated losses: $15 million."
        ],
        impact: "The scam resulted in significant financial losses for victims, particularly elderly individuals.",
        sources: [{ name: "FBI Press Release", url: "#" }],
        videoUrl: ""
    },
    {
        id: 7,
        title: "Election Interference Deepfake",
        description: "A deepfake video of a presidential candidate making controversial statements was circulated during election season, potentially influencing voter behavior.",
        location: "Washington D.C., USA",
        coordinates: [38.9072, -77.0369],
        category: "politics",
        date: "November 2023",
        details: [
            "Deepfake of presidential candidate.",
            "Controversial statements about immigration.",
            "Reached millions of voters."
        ],
        impact: "The deepfake may have influenced voter behavior and contributed to political polarization.",
        sources: [{ name: "Associated Press", url: "#" }],
        videoUrl: ""
    },
    {
        id: 8,
        title: "AI-Generated Medical Misinformation",
        description: "A deepfake video of a doctor promoting false medical treatments went viral, potentially endangering public health.",
        location: "Toronto, Canada",
        coordinates: [43.6532, -79.3832],
        category: "hoax",
        date: "October 2023",
        details: [
            "Deepfake of medical professional.",
            "Promoted false COVID-19 treatments.",
            "Potentially endangered public health."
        ],
        impact: "The misinformation could have led to people using ineffective or dangerous treatments.",
        sources: [{ name: "Health Canada", url: "#" }],
        videoUrl: ""
    },
    {
        id: 9,
        title: "Deepfake Extortion Scheme",
        description: "Criminals used AI-generated images of an individual in compromising situations for an extortion scheme.",
        location: "Mexico City, Mexico",
        coordinates: [19.4326, -99.1332],
        category: "financial",
        date: "April 2024",
        details: [
            "AI-generated compromising photos.",
            "Used to demand money from the victim.",
            "Local authorities launched an investigation."
        ],
        impact: "The case highlighted the psychological and financial toll of AI-enabled blackmail.",
        sources: [{ name: "Mexico News Daily", url: "#" }],
        videoUrl: ""
    },
    {
        id: 10,
        title: "Voice Clone Fraud",
        description: "A family in Vancouver received a call from a voice clone of their son, who was allegedly in distress, demanding a ransom.",
        location: "Vancouver, Canada",
        coordinates: [49.2827, -123.1207],
        category: "hoax",
        date: "June 2024",
        details: [
            "AI voice cloning used to impersonate a son.",
            "Scammers demanded a ransom payment.",
            "Family reported the incident to police."
        ],
        impact: "The case demonstrated the real-world dangers of AI-generated audio for fraudulent purposes.",
        sources: [{ name: "CBC News", url: "#" }],
        videoUrl: ""
    }
];

const southAmericaCases = [
    {
        id: 11,
        title: "Political Disinformation in Brazil",
        description: "Deepfake videos of political candidates were circulated on social media to spread false information before an election.",
        location: "Brasília, Brazil",
        coordinates: [-15.7801, -47.9292],
        category: "politics",
        date: "August 2024",
        details: [
            "Deepfakes targeting multiple candidates.",
            "Used to manipulate public opinion.",
            "Fact-checkers identified the content as fraudulent."
        ],
        impact: "The incident raised concerns about the use of AI in political campaigns.",
        sources: [{ name: "Folha de S.Paulo", url: "#" }],
        videoUrl: ""
    },
    {
        id: 12,
        title: "AI-Generated Fake News in Argentina",
        description: "An AI-generated article with fabricated quotes from a public figure was published on a fake news website.",
        location: "Buenos Aires, Argentina",
        coordinates: [-34.6037, -58.3816],
        category: "hoax",
        date: "July 2024",
        details: [
            "AI-written article with fabricated information.",
            "Published on a website designed to look legitimate.",
            "The public figure issued a formal denial."
        ],
        impact: "The case highlighted the ease of creating and distributing AI-generated fake news.",
        sources: [{ name: "La Nación", url: "#" }],
        videoUrl: ""
    },
    {
        id: 13,
        title: "Financial Fraud in Chile",
        description: "Cybercriminals used AI-generated video of a company director to approve a large wire transfer.",
        location: "Santiago, Chile",
        coordinates: [-33.4489, -70.6693],
        category: "financial",
        date: "September 2023",
        details: [
            "Deepfake video used to authorize a fraudulent transfer.",
            "Company lost a significant amount of money.",
            "The incident was reported to local police."
        ],
        impact: "The case demonstrated the need for stricter verification protocols in financial transactions.",
        sources: [{ name: "El Mercurio", url: "#" }],
        videoUrl: ""
    },
    {
        id: 14,
        title: "AI-Enabled Blackmail in Peru",
        description: "An individual was blackmailed with fake, AI-generated images of themselves in embarrassing situations.",
        location: "Lima, Peru",
        coordinates: [-12.0464, -77.0428],
        category: "financial",
        date: "February 2024",
        details: [
            "AI-generated compromising photos.",
            "Used to extort money from the victim.",
            "The victim reported the case to the authorities."
        ],
        impact: "The case served as a warning about the potential for personal blackmail using AI.",
        sources: [{ name: "Perú 21", url: "#" }],
        videoUrl: ""
    },
    {
        id: 15,
        title: "Misinformation in Venezuela",
        description: "An AI-generated video of a journalist spreading false information about a protest was circulated widely online.",
        location: "Caracas, Venezuela",
        coordinates: [10.4806, -66.9036],
        category: "hoax",
        date: "March 2024",
        details: [
            "Deepfake video of a well-known journalist.",
            "Contained false claims about the protest.",
            "The journalist publicly denied the content."
        ],
        impact: "The incident led to increased distrust in traditional media and online content.",
        sources: [{ name: "El Universal", url: "#" }],
        videoUrl: ""
    }
];

const europeCases = [
    {
        id: 16,
        title: "Deepfake Political Speech in Ukraine",
        description: "A deepfake video of a Ukrainian politician making false statements about the conflict was widely circulated on social media, causing confusion and misinformation.",
        location: "Kyiv, Ukraine",
        coordinates: [50.4501, 30.5234],
        category: "politics",
        date: "March 2024",
        details: [
            "Deepfake video circulated on multiple social media platforms.",
            "Featured a prominent Ukrainian politician.",
            "Contained false statements about military operations."
        ],
        impact: "The video caused significant confusion among the public and was used by foreign actors to spread disinformation.",
        sources: [{ name: "BBC News", url: "#" }],
        videoUrl: ""
    },
    {
        id: 17,
        title: "Corporate CEO Deepfake Attack",
        description: "Cybercriminals used a deepfake video of a CEO to authorize fraudulent wire transfers, resulting in a $25 million loss for the company.",
        location: "London, UK",
        coordinates: [51.5074, -0.1278],
        category: "financial",
        date: "December 2023",
        details: [
            "Deepfake video call with company CEO.",
            "Authorized fraudulent wire transfers.",
            "Loss: $25 million."
        ],
        impact: "The attack resulted in significant financial losses and led to increased security measures in corporate environments.",
        sources: [{ name: "Financial Times", url: "#" }],
        videoUrl: ""
    },
    {
        id: 18,
        title: "AI-Generated Hoax in France",
        description: "An AI-generated audio message from a school principal announcing a fake school closure went viral, causing panic among parents.",
        location: "Paris, France",
        coordinates: [48.8566, 2.3522],
        category: "hoax",
        date: "April 2024",
        details: [
            "AI-generated audio message impersonating a principal.",
            "Claimed the school was closed due to an emergency.",
            "Authorities issued a clarification to calm the public."
        ],
        impact: "The incident caused panic and disruption, highlighting the potential for AI in local hoaxes.",
        sources: [{ name: "Le Monde", url: "#" }],
        videoUrl: ""
    },
    {
        id: 19,
        title: "Political Scandal in Germany",
        description: "A deepfake video showing a politician accepting bribes was widely shared, causing a political scandal.",
        location: "Berlin, Germany",
        coordinates: [52.5200, 13.4050],
        category: "politics",
        date: "August 2023",
        details: [
            "Deepfake video showing a politician taking money.",
            "Caused a public and political outcry.",
            "The politician's party denied the video's authenticity."
        ],
        impact: "The scandal damaged the politician's reputation and led to an internal investigation.",
        sources: [{ name: "Deutsche Welle", url: "#" }],
        videoUrl: ""
    },
    {
        id: 20,
        title: "Voice Cloning to Defraud a Family",
        description: "A family in Italy was scammed after receiving a call from a voice clone of their grandson asking for money for an emergency.",
        location: "Rome, Italy",
        coordinates: [41.9028, 12.4964],
        category: "financial",
        date: "January 2024",
        details: [
            "AI voice cloning used to impersonate a grandson.",
            "Scammers demanded an emergency payment.",
            "The family transferred the money before realizing it was a hoax."
        ],
        impact: "The family suffered financial loss and emotional distress.",
        sources: [{ name: "La Repubblica", url: "#" }],
        videoUrl: ""
    }
];

const africaCases = [
    {
        id: 21,
        title: "Deepfake used in Political Protests",
        description: "AI-generated videos of a leader making false promises were used by opposition groups to galvanize protests.",
        location: "Cairo, Egypt",
        coordinates: [30.0444, 31.2357],
        category: "politics",
        date: "July 2024",
        details: [
            "Deepfake video targeting a political leader.",
            "Used as a tool for political opposition.",
            "The government issued a statement condemning the video."
        ],
        impact: "The use of AI in political disinformation escalated tensions during the protest period.",
        sources: [{ name: "Al Ahram", url: "#" }],
        videoUrl: ""
    },
    {
        id: 22,
        title: "AI-Enabled Voice Impersonation for Scam",
        description: "A business in South Africa was defrauded after an AI-generated voice call impersonating its CEO ordered a wire transfer.",
        location: "Johannesburg, South Africa",
        coordinates: [-26.2041, 28.0473],
        category: "financial",
        date: "March 2024",
        details: [
            "AI voice clone of the company's CEO.",
            "Used to trick a financial officer into transferring funds.",
            "Company lost a substantial amount."
        ],
        impact: "The case highlighted the vulnerability of corporate communication systems to AI-driven attacks.",
        sources: [{ name: "News24", url: "#" }],
        videoUrl: ""
    },
    {
        id: 23,
        title: "AI-Generated Fake News Report",
        description: "A fabricated news report, complete with an AI-generated anchor, went viral, claiming a widespread natural disaster.",
        location: "Lagos, Nigeria",
        coordinates: [6.5244, 3.3792],
        category: "hoax",
        date: "February 2024",
        details: [
            "AI-generated video of a fake news anchor.",
            "Spreading false information about a disaster.",
            "Emergency services had to issue a public warning."
        ],
        impact: "The hoax caused public panic and diverted emergency resources.",
        sources: [{ name: "The Guardian Nigeria", url: "#" }],
        videoUrl: ""
    },
    {
        id: 24,
        title: "Political Deepfake in Kenya",
        description: "A deepfake video of a leading politician was used to spread misinformation about his stance on a key policy issue.",
        location: "Nairobi, Kenya",
        coordinates: [-1.2921, 36.8219],
        category: "politics",
        date: "September 2023",
        details: [
            "Deepfake video targeting a presidential candidate.",
            "Created to undermine public trust.",
            "The politician's team issued a statement debunking the video."
        ],
        impact: "The incident raised questions about the role of AI in election campaigns in the region.",
        sources: [{ name: "The Star", url: "#" }],
        videoUrl: ""
    },
    {
        id: 25,
        title: "AI-Generated Fake Job Offers",
        description: "Scammers used AI-generated video and voice to create fake job interviews and steal personal information from applicants.",
        location: "Accra, Ghana",
        coordinates: [5.6037, -0.1870],
        category: "financial",
        date: "November 2023",
        details: [
            "AI-generated video interview with a fake manager.",
            "Used to collect sensitive personal and financial data.",
            "Local authorities warned the public about the scam."
        ],
        impact: "The scam led to a loss of personal data and money for several job seekers.",
        sources: [{ name: "GhanaWeb", url: "#" }],
        videoUrl: ""
    }
];

const australiaCases = [
    {
        id: 26,
        title: "Banking Deepfake Fraud",
        description: "Criminals used deepfake technology to bypass facial recognition systems at banks, successfully stealing customer funds.",
        location: "Sydney, Australia",
        coordinates: [-33.8688, 151.2093],
        category: "financial",
        date: "September 2023",
        details: [
            "Deepfake bypassed facial recognition.",
            "Targeted multiple bank branches.",
            "Exposed security vulnerabilities."
        ],
        impact: "The attack exposed vulnerabilities in banking security systems and led to increased investment in anti-deepfake detection technology.",
        sources: [{ name: "Australian Federal Police", url: "#" }],
        videoUrl: ""
    },
    {
        id: 27,
        title: "Political Misinformation in New Zealand",
        description: "AI-generated audio clips of a prime minister making false claims about the economy were circulated.",
        location: "Wellington, New Zealand",
        coordinates: [-41.2865, 174.7762],
        category: "politics",
        date: "May 2024",
        details: [
            "AI audio clone of the prime minister's voice.",
            "False statements about economic policies.",
            "The audio was quickly identified as fake."
        ],
        impact: "The incident caused temporary confusion and was a test of the public's media literacy.",
        sources: [{ name: "The New Zealand Herald", url: "#" }],
        videoUrl: ""
    },
    {
        id: 28,
        title: "AI-Generated Hoax in Fiji",
        description: "A deepfake video of a national figure announcing a fabricated state emergency was shared on social media.",
        location: "Suva, Fiji",
        coordinates: [-18.1248, 178.4312],
        category: "hoax",
        date: "April 2023",
        details: [
            "Deepfake of a public official.",
            "Announced a fake state emergency.",
            "The hoax was quickly debunked by the government."
        ],
        impact: "The incident caused brief panic and highlighted the potential for AI-generated hoaxes in the Pacific Islands.",
        sources: [{ name: "Fiji Sun", url: "#" }],
        videoUrl: ""
    },
    {
        id: 29,
        title: "Scam in Papua New Guinea",
        description: "An AI-generated voice clone of a family member was used to scam a local person for money.",
        location: "Port Moresby, Papua New Guinea",
        coordinates: [-9.4438, 147.1797],
        category: "financial",
        date: "January 2024",
        details: [
            "AI voice cloning of a family member.",
            "Used to request an urgent financial transfer.",
            "The victim lost money before realizing the scam."
        ],
        impact: "The case demonstrated the global reach of AI-enabled scams.",
        sources: [{ name: "The National", url: "#" }],
        videoUrl: ""
    },
    {
        id: 30,
        title: "AI-Generated Hoax in Micronesia",
        description: "A deepfake video of a local celebrity promoting a fake lottery scheme went viral on social media.",
        location: "Palikir, Micronesia",
        coordinates: [6.9242, 158.1633],
        category: "hoax",
        date: "February 2024",
        details: [
            "Deepfake of a popular local figure.",
            "Promoted a fraudulent lottery.",
            "The celebrity issued a public warning about the scam."
        ],
        impact: "The hoax led to several people losing money and raised awareness of deepfake scams.",
        sources: [{ name: "Pacific Daily News", url: "#" }],
        videoUrl: ""
    }
];

// Combine all cases into a single array for mapping and filtering
const allCases = [
    ...asiaCases,
    ...northAmericaCases,
    ...southAmericaCases,
    ...europeCases,
    ...africaCases,
    ...australiaCases,
    // Add cases for Oceania and Antarctica here if needed in the future
];

const map = L.map('map').setView([0, 0], 2); // Mengubah tampilan peta agar lebih global
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const caseCard = document.getElementById('case-card');
const closeCardBtn = document.getElementById('close-card');
const cardTitle = document.getElementById('card-title');
const mainCaseView = document.getElementById('main-case-view');
const cardVideo = document.getElementById('card-video');
const cardLocation = document.getElementById('card-location');
const cardDate = document.getElementById('card-date');
const cardDescription = document.getElementById('card-description');
const cardDetails = document.getElementById('card-details');
const cardSources = document.getElementById('card-sources');
const viewOtherCasesBtn = document.getElementById('view-other-cases-btn');
const otherCasesView = document.getElementById('other-cases-view');
const topCasesList = document.getElementById('top-cases-list');
const backToMainBtn = document.getElementById('back-to-main-btn');

// Tambahkan marker untuk setiap kasus
allCases.forEach(caseItem => {
    const marker = L.marker(caseItem.coordinates).addTo(map);
    marker.on('click', () => {
        displayCaseDetails(caseItem);
    });
});

function displayCaseDetails(caseItem) {
    otherCasesView.classList.remove('active-view');
    mainCaseView.classList.add('active-view');
    document.body.classList.add('no-scroll');

    cardTitle.textContent = caseItem.title;

    if (caseItem.videoUrl) {
        cardVideo.src = caseItem.videoUrl;
        cardVideo.style.display = 'block';
    } else {
        cardVideo.style.display = 'none';
        cardVideo.pause();
    }

    cardLocation.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${caseItem.location}`;
    cardDate.innerHTML = `<i class="fas fa-calendar-alt"></i> ${caseItem.date}`;
    cardDescription.innerHTML = caseItem.description;

    cardDetails.innerHTML = '';
    if (caseItem.details) {
        caseItem.details.forEach(detail => {
            const li = document.createElement('li');
            li.textContent = detail;
            cardDetails.appendChild(li);
        });
    }

    cardSources.innerHTML = '';
    if (caseItem.sources) {
        caseItem.sources.forEach(source => {
            const link = document.createElement('a');
            link.href = source.url;
            link.textContent = source.name;
            cardSources.appendChild(link);
        });
    }
    
    viewOtherCasesBtn.textContent = `View Other Cases in ${getContinentName(caseItem.coordinates)}`;
    viewOtherCasesBtn.onclick = () => {
        displayOtherCases(caseItem.id, getContinentName(caseItem.coordinates));
    };

    caseCard.classList.add('active');
}

function displayOtherCases(currentCaseId, continentName) {
    mainCaseView.classList.remove('active-view');
    otherCasesView.classList.add('active-view');
    cardVideo.pause();

    cardTitle.textContent = `Other AI Cases in ${continentName}`;

    topCasesList.innerHTML = '';
    const continentCases = getContinentCases(continentName);
    const otherCases = continentCases.filter(c => c.id !== currentCaseId);

    otherCases.forEach(caseItem => {
        const li = document.createElement('li');
        const titleLink = document.createElement('a');
        titleLink.textContent = caseItem.title;
        titleLink.onclick = (e) => {
            e.preventDefault();
            displayCaseDetails(caseItem);
        };
        li.appendChild(titleLink);
        
        const meta = document.createElement('small');
        meta.textContent = ` (${caseItem.location}, ${caseItem.date})`;
        li.appendChild(meta);
        
        topCasesList.appendChild(li);
    });
    
    backToMainBtn.textContent = 'Back to Current Case';
    backToMainBtn.onclick = () => {
        const currentCase = allCases.find(c => c.id === currentCaseId);
        displayCaseDetails(currentCase);
    };

    caseCard.classList.add('active');
}

closeCardBtn.addEventListener('click', () => {
    caseCard.classList.remove('active');
    cardVideo.pause();
    document.body.classList.remove('no-scroll');
});

L.Control.geocoder({
    position: 'bottomleft'
}).addTo(map);

// --- Helper Functions to get continent name and cases ---
function getContinentName(coordinates) {
    const lat = coordinates[0];
    const lon = coordinates[1];
    
    if (lat >= -10 && lat <= 80 && lon >= -20 && lon <= 60) return "Europe";
    if (lat >= -50 && lat <= 20 && lon >= -100 && lon <= -30) return "South America";
    if (lat >= -10 && lat <= 70 && lon >= -170 && lon <= -50) return "North America";
    if (lat >= -40 && lat <= 15 && lon >= 100 && lon <= 180) return "Australia";
    if (lat >= -40 && lat <= 40 && lon >= 10 && lon <= 50) return "Africa";
    if (lat >= 10 && lat <= 70 && lon >= 50 && lon <= 170) return "Asia";
    
    return "Unknown Continent";
}

function getContinentCases(continentName) {
    switch(continentName) {
        case "Asia": return asiaCases;
        case "North America": return northAmericaCases;
        case "South America": return southAmericaCases;
        case "Europe": return europeCases;
        case "Africa": return africaCases;
        case "Australia": return australiaCases;
        default: return [];
    }
}