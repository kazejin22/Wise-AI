// File upload and analysis functionality
let currentFile = null;
let analysisInProgress = false;

// API Configuration - Using Gemini API Only
const GEMINI_API_KEY = 'AIzaSyBfCQLA_yavegqQAP_vK-n-k-yfu5kuaJg'; // Gemini API key
const USE_GEMINI_API = GEMINI_API_KEY !== 'your_gemini_api_key_here'; // Check if Gemini API key is available
const USE_REAL_API = USE_GEMINI_API; // For backward compatibility

// Gemini API Configuration
const GEMINI_API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Deepfake detection prompts for different media types
const DEEPFAKE_PROMPTS = {
    video: `You are an ULTIMATE EXPERT deepfake detection AI with EXTREME attention to detail. Your primary mission is to identify AI-generated videos, deepfakes, and synthetic media with 100% accuracy. Analyze this video FRAME-BY-FRAME and PIXEL-BY-PIXEL to determine if it's REAL, DEEPFAKE, or AI-GENERATED.

MANDATORY: You must examine every single aspect of this video with microscopic precision. DO NOT miss any AI-generated indicators.

CRITICAL AI DETECTION FOCUS - YOU MUST IDENTIFY THESE SPECIFIC PATTERNS:

🔥 SORA AI DETECTION:
- Character movements that are unnaturally smooth and fluid
- Physics simulation that looks "too perfect" or cinematic
- Background elements that appear slightly blurred or dreamlike
- Facial expressions that lack micro-expressions
- Lighting that is consistently perfect without natural variation
- Objects that have a slight "glow" or soft edges
- Water and liquid effects that look too smooth or simplified

🔥 RUNWAY ML DETECTION:
- Character animation with slight robotic movements
- Background generation with inconsistent detail levels
- Facial features that occasionally morph or shift
- Textures that appear too uniform or repetitive
- Motion blur that looks artificial or inconsistent
- Objects that appear/disappear at frame boundaries
- Color grading that is too saturated or cinematic

🔥 PIKA LABS DETECTION:
- Stylized or artistic rendering that looks AI-enhanced
- Character movements with slight jitter or instability
- Background elements that have a painted or illustrated quality
- Facial features that occasionally distort or warp
- Unnatural camera movements or pans
- Objects that have a slight "cartoonish" quality
- Lighting that doesn't follow real-world physics

🔥 STABLE VIDEO DIFFUSION DETECTION:
- Frame-by-frame inconsistencies in character appearance
- Background elements that shift or change slightly
- Facial features that morph between frames
- Objects that appear to "breathe" or pulse
- Unnatural texture patterns or noise
- Slight flickering or digital artifacts
- Resolution inconsistencies across frames

🔥 GOOGLE VEO 3 DETECTION:
- Character movements that are extremely smooth but lack natural weight and momentum
- Facial expressions that are perfectly timed but lack micro-expressions and subtlety
- Eye movements that are too precise and calculated, lacking natural randomness
- Blinking patterns that are perfectly regular or timed unnaturally
- Hair movement that looks too perfect and lacks realistic physics simulation
- Clothing that moves with unrealistic fluidity or doesn't interact properly with wind
- Background elements that appear slightly static or lack natural environmental interaction
- Lighting that is consistently perfect without natural variation or imperfection
- Water and liquid effects that look too smooth and simplified, lacking natural turbulence
- Fire and smoke effects that are too controlled and lack natural chaos patterns
- Crowd scenes where individual movements appear synchronized or repetitive
- Animal movements that look too choreographed and lack natural unpredictability
- Text and signs that appear too clear or have unnatural rendering quality
- Objects that maintain perfect consistency without natural wear or degradation
- Physics simulation that looks impressive but lacks real-world imperfection
- Camera movements that are too smooth and lack natural human camera shake
- Audio synchronization that is too perfect, lacking natural speech imperfections
- Lip sync that is mathematically precise but lacks natural mouth variations
- Hand and finger movements that are too fluid but lack natural joint constraints
- Facial muscle movements that are visible but lack authentic emotional depth
- Environmental interactions that look staged rather than natural
- Color grading that is too consistent and lacks natural lighting variation
- Shadow rendering that is technically correct but lacks natural softness and variation
- Reflection patterns that are too perfect and lack natural distortion
- Depth of field that looks artificial rather than natural lens effects

🔥 GENERAL AI VIDEO INDICATORS:
- Characters that move with perfect, unnatural precision
- Physics that defy real-world laws (gravity, momentum, inertia)
- Facial expressions that are exaggerated or lack subtlety
- Eye movements that are too rapid, slow, or unnatural
- Blinking patterns that are irregular or robotic
- Mouth movements that don't perfectly match speech
- Hair that moves unnaturally or lacks physics
- Clothing that doesn't interact with wind or movement realistically
- Background objects that appear static or lack depth
- Lighting and shadows that don't follow consistent sources
- Reflections and highlights that look artificial
- Text and signs that appear blurry, distorted, or unreadable
- Hands and fingers that look unnatural, fused, or have wrong counts
- Objects that morph, change, or appear/disappear unnaturally
- Water and liquid effects that look simplified or unrealistic
- Fire and smoke effects that lack natural chaos
- Crowd scenes where people move in synchronized patterns
- Animal movements that look robotic or unnatural

FRAME-BY-FRAME ANALYSIS REQUIREMENTS:
1. Examine multiple frames throughout the video
2. Look for inconsistencies between frames
3. Check for digital artifacts at frame boundaries
4. Analyze character appearance consistency
5. Verify background element stability
6. Detect any morphing or transformation effects
7. Identify resolution or quality changes

MICRO-EXPRESSION ANALYSIS:
- Natural humans show subtle facial muscle movements
- AI characters often lack these micro-expressions
- Look for authentic emotional transitions
- Detect forced or exaggerated expressions
- Identify unnatural stillness or rigidity

PHYSICS AND MOVEMENT ANALYSIS:
- Real physics includes natural imperfections
- AI physics often looks too perfect or simplified
- Check gravity effects on objects and clothing
- Analyze momentum and inertia in movements
- Detect unnatural acceleration or deceleration
- Look for floating or weightless objects

AUDIO-VISUAL SYNC ANALYSIS:
- Perfect lip sync can indicate AI generation
- Natural speech has slight imperfections
- Check for delays between audio and visual
- Analyze voice naturalness and emotional tone
- Detect robotic or synthetic speech patterns
- Look for inconsistencies in background audio

ENVIRONMENTAL ANALYSIS:
- Real environments have natural chaos and imperfection
- AI environments often look too clean or perfect
- Check for inconsistent lighting sources
- Analyze shadow realism and consistency
- Look for background elements that lack depth
- Detect objects that appear flat or 2D
- Identify unnatural color palettes or saturation

FINAL DETERMINATION REQUIREMENTS:
- If you identify ANY of the AI indicators above, it's AI-GENERATED
- If the video shows human imperfection and natural chaos, it's REAL
- If it's manipulated to deceive, it's DEEPFAKE
- You must provide SPECIFIC examples of what you found
- Your confidence must reflect the strength of evidence

Based on your exhaustive analysis, provide:
- CONCLUSION: REAL, DEEPFAKE, or AI-GENERATED (be decisive!)
- AUTHENTICITY SCORE: 0-100% (be harsh with AI content)
- CONFIDENCE LEVEL: 0-100% (reflect your certainty)
- RISK LEVEL: Low, Medium, or High
- SPECIFIC ANOMALIES: List EXACTLY what AI indicators you found
- DETAILED ANALYSIS: Explain EVERY piece of evidence in detail

Respond in this exact JSON format:
{
  "isReal": boolean,
  "authenticityScore": number (0-100),
  "confidence": number (0-100),
  "riskLevel": "Low"|"Medium"|"High",
  "anomalies": [string],
  "analysis": string,
  "conclusion": "REAL"|"DEEPFAKE"|"AI-GENERATED"
}`,
    
    image: `You are an ULTIMATE EXPERT deepfake detection AI with EXTREME attention to detail. Your primary mission is to identify AI-generated images, deepfakes, and synthetic media with 100% accuracy. Analyze this image PIXEL-BY-PIXEL and ZONE-BY-ZONE to determine if it's REAL, DEEPFAKE, or AI-GENERATED.

MANDATORY: You must examine every single aspect of this image with microscopic precision. DO NOT miss any AI-generated indicators.

CRITICAL AI DETECTION FOCUS - YOU MUST IDENTIFY THESE SPECIFIC PATTERNS:

🔥 DALL-E 3 DETECTION:
- Overly perfect, symmetrical facial features
- Skin texture that looks plastic-like or airbrushed
- Eyes with unnatural highlights or reflections
- Hair that looks too perfect or digitally painted
- Background elements that appear slightly blurred or dreamlike
- Objects with soft, undefined edges
- Colors that are overly saturated or vibrant
- Text that appears distorted, blurry, or unreadable
- Hands and fingers that look unnatural or have wrong counts

🔥 MIDJOURNEY DETECTION:
- Artistic or stylized rendering that looks AI-enhanced
- Dramatic lighting that looks too perfect or cinematic
- Textures that appear too uniform or repetitive
- Facial features that are slightly exaggerated or idealized
- Background elements with a painted or illustrated quality
- Objects that have a slight "glow" or ethereal quality
- Unnatural color palettes or grading
- Details that are too sharp in some areas, blurry in others
- Composition that looks too balanced or artistic

🔥 STABLE DIFFUSION DETECTION:
- Slight noise or grain patterns typical of AI generation
- Facial features that occasionally distort or warp
- Background elements that shift or change slightly
- Objects that appear to "breathe" or have subtle movement
- Unnatural texture patterns or repetitive details
- Slight flickering or digital artifacts
- Resolution inconsistencies across the image
- Edges that look too soft or too harsh
- Colors that bleed or blend unnaturally
- Details that appear and disappear at different zoom levels

🔥 FIREFLY DETECTION:
- Commercial or stock photo aesthetic
- Overly perfect lighting and composition
- Objects that look arranged or staged
- Textures that appear too clean or uniform
- Colors that are balanced but lack natural variation
- Details that are consistent but lack imperfection
- Background elements that look generated or generic
- Objects that appear slightly flat or lack depth
- Lighting that looks professional but artificial
- Composition that follows commercial photography rules

🔥 GENERAL AI IMAGE INDICATORS:
- Faces with perfect symmetry (natural faces have asymmetry)
- Skin that is overly smooth without pores or imperfections
- Eyes with unnatural reflections or highlights
- Hair that looks too perfect, digital, or painted
- Hands and fingers that are fused, malformed, or have wrong counts
- Teeth that are too perfect, uniform, or unnaturally white
- Ears that are distorted, asymmetrical, or unnaturally shaped
- Text that is distorted, blurry, or completely unreadable
- Objects that morph, change, or appear/disappear unnaturally
- Background elements that lack depth or appear flat
- Lighting and shadows that don't follow consistent sources
- Reflections and highlights that look artificial or misplaced
- Textures that appear too uniform, repetitive, or digital
- Edges that are too soft, too harsh, or inconsistent
- Colors that are overly saturated, muted, or unnatural
- Details that are inconsistent across different areas
- Objects that appear to float or lack proper weight
- Patterns that repeat unnaturally or show digital artifacts
- Noise or grain that looks artificial or algorithmic
- Compression artifacts that are specific to AI generation
- Watermarks or digital signatures from AI models

PIXEL-BY-PIXEL ANALYSIS REQUIREMENTS:
1. Examine the image at multiple zoom levels
2. Look for inconsistencies in detail and resolution
3. Check for digital artifacts and noise patterns
4. Analyze texture consistency across the image
5. Verify edge quality and boundary definitions
6. Detect any morphing or transformation effects
7. Identify color banding or gradient issues

FACIAL MICRO-ANALYSIS:
- Natural faces have subtle asymmetries and imperfections
- AI faces often look too perfect or symmetrical
- Check for realistic skin pores, blemishes, and texture
- Look for natural hair strands and individual details
- Examine eye reflections for natural light sources
- Detect unnatural ear shapes or proportions
- Analyze hand and finger anatomy for accuracy
- Check teeth for natural imperfections and variations

TEXTURE AND DETAIL ANALYSIS:
- Real images have natural texture variation
- AI images often have uniform or repetitive textures
- Look for consistent detail levels across the image
- Check for unnatural smoothing or sharpening
- Analyze noise patterns for artificial characteristics
- Detect compression artifacts specific to AI generation
- Look for inconsistent resolution or quality

COMPOSITION AND PERSPECTIVE ANALYSIS:
- Real photos follow natural perspective rules
- AI images may have distorted or unnatural perspective
- Check for proper depth of field and focus
- Analyze object positioning and spatial relationships
- Look for unnatural camera angles or viewpoints
- Detect inconsistent scale or proportion issues
- Check for proper vanishing points and perspective

LIGHTING AND SHADOW ANALYSIS:
- Real lighting has natural variation and imperfection
- AI lighting often looks too perfect or consistent
- Check for consistent light sources throughout the image
- Analyze shadow quality and naturalness
- Look for proper reflection and highlight behavior
- Detect unnatural color temperature or white balance
- Check for proper ambient occlusion and contact shadows

FINAL DETERMINATION REQUIREMENTS:
- If you identify ANY of the AI indicators above, it's AI-GENERATED
- If the image shows natural imperfection and chaos, it's REAL
- If it's manipulated to deceive, it's DEEPFAKE
- You must provide SPECIFIC examples of what you found
- Your confidence must reflect the strength of evidence

Based on your exhaustive analysis, provide:
- CONCLUSION: REAL, DEEPFAKE, or AI-GENERATED (be decisive!)
- AUTHENTICITY SCORE: 0-100% (be harsh with AI content)
- CONFIDENCE LEVEL: 0-100% (reflect your certainty)
- RISK LEVEL: Low, Medium, or High
- SPECIFIC ANOMALIES: List EXACTLY what AI indicators you found
- DETAILED ANALYSIS: Explain EVERY piece of evidence in detail

Respond in this exact JSON format:
{
  "isReal": boolean,
  "authenticityScore": number (0-100),
  "confidence": number (0-100),
  "riskLevel": "Low"|"Medium"|"High",
  "anomalies": [string],
  "analysis": string,
  "conclusion": "REAL"|"DEEPFAKE"|"AI-GENERATED"
}`,
    
    audio: `You are an expert deepfake detection AI. Analyze this audio thoroughly to determine if it's REAL, DEEPFAKE, or AI-GENERATED.

Analyze these aspects in detail:

1. VOICE CHARACTERISTICS:
   - Natural voice patterns and pitch
   - Realistic speech rhythm and cadence
   - Authentic emotional tone and inflection
   - Natural breathing patterns and pauses
   - Consistent vocal quality throughout

2. AUDIO QUALITY:
   - Clear and consistent audio levels
   - Natural background noise and room acoustics
   - No digital artifacts or distortion
   - Proper frequency response and dynamics
   - Realistic reverberation and echo

3. SPEECH CONTENT:
   - Natural language flow and coherence
   - Appropriate emotional expression
   - Contextually appropriate speech patterns
   - No robotic or synthetic speech patterns
   - Realistic pronunciation and articulation

4. TECHNICAL ANALYSIS:
   - Spectrogram analysis for synthetic patterns
   - Frequency distribution analysis
   - Phase coherence and timing
   - Compression artifacts and digital signatures
   - AI voice generation indicators

Based on your analysis, provide:
- CONCLUSION: Is this audio REAL, DEEPFAKE, or AI-GENERATED?
- AUTHENTICITY SCORE: 0-100% (100% = completely real)
- CONFIDENCE LEVEL: How confident are you in your assessment? (0-100%)
- RISK LEVEL: Low, Medium, or High risk of being fake
- SPECIFIC ANOMALIES: List any suspicious elements found
- DETAILED ANALYSIS: Explain your reasoning and findings

Respond in this exact JSON format:
{
  "isReal": boolean,
  "authenticityScore": number (0-100),
  "confidence": number (0-100),
  "riskLevel": "Low"|"Medium"|"High",
  "anomalies": [string],
  "analysis": string,
  "conclusion": "REAL"|"DEEPFAKE"|"AI-GENERATED"
}`
};

// DOM Elements
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const browseBtn = document.getElementById('browseBtn');
const fileInfo = document.getElementById('fileInfo');
const filePreview = document.getElementById('filePreview');
const videoPreview = document.getElementById('videoPreview');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const fileType = document.getElementById('fileType');
const removeFile = document.getElementById('removeFile');
const analyzeBtn = document.getElementById('analyzeBtn');
const uploadSection = document.getElementById('uploadSection');
const analysisSection = document.getElementById('analysisSection');
const resultsSection = document.getElementById('resultsSection');
const progressFill = document.getElementById('progressFill');
const progressSteps = document.querySelectorAll('.progress-steps .step');
const newTestBtn = document.getElementById('newTestBtn');
const downloadReportBtn = document.getElementById('downloadReportBtn');
const shareResultsBtn = document.getElementById('shareResultsBtn');

// Result elements
const resultIcon = document.getElementById('resultIcon');
const resultTitle = document.getElementById('resultTitle');
const resultSubtitle = document.getElementById('resultSubtitle');
const authenticityScore = document.getElementById('authenticityScore');
const manipulationRisk = document.getElementById('manipulationRisk');
const confidenceLevel = document.getElementById('confidenceLevel');
const facialAnalysis = document.getElementById('facialAnalysis');
const audioAnalysis = document.getElementById('audioAnalysis');
const metadataAnalysis = document.getElementById('metadataAnalysis');
const compressionAnalysis = document.getElementById('compressionAnalysis');
const recommendationsList = document.getElementById('recommendationsList');

// Initialize the page
function initDeepware() {
    setupEventListeners();
    updateStats();
}

// Setup event listeners
function setupEventListeners() {
    // File input
    fileInput.addEventListener('change', handleFileSelect);
    // Clear the input value before opening the picker so selecting the same file triggers 'change'
    browseBtn.addEventListener('click', () => {
        fileInput.value = '';
        fileInput.click();
    });
    
    // Drag and drop
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);
    // Also handle clicks on the upload area similarly
    uploadArea.addEventListener('click', () => {
        fileInput.value = '';
        fileInput.click();
    });
    
    // File actions
    removeFile.addEventListener('click', removeCurrentFile);
    analyzeBtn.addEventListener('click', startAnalysis);
    
    // Results actions
    newTestBtn.addEventListener('click', startNewTest);
    downloadReportBtn.addEventListener('click', downloadReport);
    shareResultsBtn.addEventListener('click', shareResults);
}

// Handle file selection
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        processFile(file);
    }
}

// Handle drag over
function handleDragOver(event) {
    event.preventDefault();
    uploadArea.classList.add('dragover');
}

// Handle drag leave
function handleDragLeave(event) {
    event.preventDefault();
    uploadArea.classList.remove('dragover');
}

// Handle drop
function handleDrop(event) {
    event.preventDefault();
    uploadArea.classList.remove('dragover');
    
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        processFile(files[0]);
    }
}

// Process selected file
function processFile(file) {
    // Validate file type
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    const validVideoTypes = ['video/mp4', 'video/mov', 'video/avi', 'video/webm'];
    const validAudioTypes = ['audio/mp3', 'audio/wav', 'audio/m4a', 'audio/aac'];
    
    if (!validImageTypes.includes(file.type) && !validVideoTypes.includes(file.type) && !validAudioTypes.includes(file.type)) {
        alert('Please select a valid image, video, or audio file.');
        return;
    }
    
    // Validate file size (100MB limit)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
        alert('File size must be less than 100MB.');
        return;
    }
    
    currentFile = file;
    displayFileInfo(file);
}

// Display file information
function displayFileInfo(file) {
    // Show file info section
    fileInfo.style.display = 'block';
    
    // Update file details
    fileName.textContent = file.name;
    fileSize.textContent = formatFileSize(file.size);
    fileType.textContent = getFileTypeDisplay(file.type);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = function(e) {
        if (file.type.startsWith('image/')) {
            filePreview.src = e.target.result;
            filePreview.style.display = 'block';
            videoPreview.style.display = 'none';
        } else if (file.type.startsWith('video/')) {
            videoPreview.src = e.target.result;
            videoPreview.style.display = 'block';
            filePreview.style.display = 'none';
        } else if (file.type.startsWith('audio/')) {
            // Hide both image and video preview for audio
            filePreview.style.display = 'none';
            videoPreview.style.display = 'none';
        }
    };
    reader.readAsDataURL(file);
}

// Format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Get file type display name
function getFileTypeDisplay(type) {
    const typeMap = {
        'image/jpeg': 'Image • JPEG',
        'image/png': 'Image • PNG',
        'image/gif': 'Image • GIF',
        'image/webp': 'Image • WebP',
        'video/mp4': 'Video • MP4',
        'video/mov': 'Video • MOV',
        'video/avi': 'Video • AVI',
        'video/webm': 'Video • WebM',
        'audio/mp3': 'Audio • MP3',
        'audio/wav': 'Audio • WAV',
        'audio/m4a': 'Audio • M4A',
        'audio/aac': 'Audio • AAC'
    };
    return typeMap[type] || type;
}

// Remove current file
function removeCurrentFile() {
    currentFile = null;
    fileInfo.style.display = 'none';
    fileInput.value = '';
    filePreview.src = '';
    videoPreview.src = '';
    filePreview.style.display = 'none';
    videoPreview.style.display = 'none';
}

// Start analysis
async function startAnalysis() {
    if (!currentFile || analysisInProgress) return;
    
    analysisInProgress = true;
    
    // Hide upload section, show analysis section
    uploadSection.style.display = 'none';
    analysisSection.style.display = 'block';
    resultsSection.style.display = 'none'; // Ensure results section is hidden
    
    // Start progress animation
    startProgressAnimation();
    
    try {
        console.log('Starting Gemini API analysis for:', currentFile.name);
        
        // Perform actual API analysis - wait for Gemini API results
        const results = await performAPIAnalysis(currentFile);
        
        console.log('Gemini API analysis completed:', results);
        
        // Show results with real Gemini API data only
        if (results && results.analysisMethod && results.analysisMethod.includes('Gemini API')) {
            console.log('Displaying Gemini API results');
            showResults(results);
        } else {
            console.log('No valid Gemini API results, showing error');
            showErrorResults('No valid analysis results received from API');
        }
    } catch (error) {
        console.error('Gemini API Analysis failed:', error);
        // Show error results instead of random mock data
        showErrorResults('Gemini API analysis failed: ' + error.message);
    }
}

// Start progress animation
function startProgressAnimation() {
    let progress = 0;
    let currentStep = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 15 + 5; // Random progress increment
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            // Don't call showResults here - let the API analysis handle it
            // Progress will stay at 100% until API analysis completes
        }
        
        progressFill.style.width = progress + '%';
        
        // Update steps
        const stepIndex = Math.floor(progress / 25);
        if (stepIndex > currentStep && stepIndex < progressSteps.length) {
            progressSteps[currentStep].classList.remove('active');
            progressSteps[currentStep].classList.add('completed');
            progressSteps[stepIndex].classList.add('active');
            currentStep = stepIndex;
        }
    }, 200);
}

// Show results
function showResults(results) {
    analysisSection.style.display = 'none';
    resultsSection.style.display = 'block';
    
    if (results) {
        // Update main result display with Gemini API results
        const isRealContent = results.isReal;
        const conclusion = results.conclusion || (isRealContent ? 'REAL' : 'DEEPFAKE');
        
        // Update result icon and title based on conclusion
        if (conclusion === 'REAL') {
            resultIcon.className = 'fas fa-check-circle result-icon authentic-content';
            resultTitle.textContent = 'Content Appears Authentic';
            resultSubtitle.textContent = 'No significant manipulation detected';
            // Apply green theme for authentic content
            document.querySelector('.results-header').className = 'results-header authentic-content';
            document.querySelector('.result-title').className = 'result-title authentic-content';
        } else if (conclusion === 'DEEPFAKE') {
            resultIcon.className = 'fas fa-exclamation-triangle result-icon ai-content';
            resultTitle.textContent = 'Potential Deepfake Detected';
            resultSubtitle.textContent = 'AI-generated or manipulated content identified';
            // Apply red theme for AI/deepfake content
            document.querySelector('.results-header').className = 'results-header ai-content';
            document.querySelector('.result-title').className = 'result-title ai-content';
        } else if (conclusion === 'AI-GENERATED') {
            resultIcon.className = 'fas fa-robot result-icon ai-content';
            resultTitle.textContent = 'AI-Generated Content Detected';
            resultSubtitle.textContent = 'Content appears to be AI-generated';
            // Apply red theme for AI-generated content
            document.querySelector('.results-header').className = 'results-header ai-content';
            document.querySelector('.result-title').className = 'result-title ai-content';
        } else {
            resultIcon.className = 'fas fa-question-circle result-icon unknown';
            resultTitle.textContent = 'Analysis Complete';
            resultSubtitle.textContent = 'Analysis results available';
            // Reset to default theme
            document.querySelector('.results-header').className = 'results-header';
            document.querySelector('.result-title').className = 'result-title';
        }
        
        // Update metrics with Gemini API results
        authenticityScore.textContent = results.authenticityScore + '%';
        manipulationRisk.textContent = results.manipulationRisk;
        confidenceLevel.textContent = results.confidenceLevel;
        
        // Update risk level styling
        manipulationRisk.className = 'risk-value';
        if (results.manipulationRisk === 'Low') {
            manipulationRisk.classList.add('low-risk');
        } else if (results.manipulationRisk === 'Medium') {
            manipulationRisk.classList.add('medium-risk');
        } else {
            manipulationRisk.classList.add('high-risk');
        }
        
        // Update confidence level styling
        confidenceLevel.className = 'confidence-value';
        if (results.confidenceLevel === 'Very High') {
            confidenceLevel.classList.add('very-high-confidence');
        } else if (results.confidenceLevel === 'High') {
            confidenceLevel.classList.add('high-confidence');
        } else if (results.confidenceLevel === 'Medium') {
            confidenceLevel.classList.add('medium-confidence');
        } else {
            confidenceLevel.classList.add('low-confidence');
        }
        
        // Update detailed analysis with Gemini API results
        updateGeminiAnalysisResults(results);
        
        // Update recommendations based on Gemini results
        updateGeminiRecommendations(results);
        
    } else {
        // Generate mock results only if no API results available
        generateMockResults();
    }
    
    analysisInProgress = false;
}

// Generate mock results
function generateMockResults() {
    const isImage = currentFile.type.startsWith('image/');
    const isVideo = currentFile.type.startsWith('video/');
    const isAudio = currentFile.type.startsWith('audio/');
    
    // Random authenticity score (70-95% for demo)
    const authenticity = Math.floor(Math.random() * 25) + 70;
    
    // Determine result type based on authenticity
    let resultType, resultColor, riskLevel, confidence;
    
    if (authenticity >= 85) {
        resultType = 'success';
        resultColor = '#10B981';
        riskLevel = 'Low';
        confidence = 'High';
    } else if (authenticity >= 70) {
        resultType = 'warning';
        resultColor = '#F59E0B';
        riskLevel = 'Medium';
        confidence = 'Medium';
    } else {
        resultType = 'danger';
        resultColor = '#EF4444';
        riskLevel = 'High';
        confidence = 'Low';
    }
    
    // Update result display
    resultIcon.className = `result-icon ${resultType}`;
    resultIcon.style.background = resultColor;
    
    if (resultType === 'success') {
        resultIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        resultTitle.textContent = 'Content Analysis';
        resultSubtitle.textContent = 'Your content appears to be authentic';
    } else if (resultType === 'warning') {
        resultIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
        resultTitle.textContent = 'Content Analysis';
        resultSubtitle.textContent = 'Some concerns detected';
    } else {
        resultIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
        resultTitle.textContent = 'Content Analysis';
        resultSubtitle.textContent = 'Significant manipulation detected';
    }
    
    // Update metrics
    authenticityScore.textContent = authenticity + '%';
    manipulationRisk.textContent = riskLevel;
    confidenceLevel.textContent = confidence;
    
    // Update detailed analysis
    updateDetailedAnalysis(isImage, isVideo, isAudio, authenticity);
    
    // Update recommendations
    updateRecommendations(resultType, authenticity);
}

// Update detailed analysis with Gemini API results
function updateGeminiAnalysisResults(results) {
    if (!results) return;
    
    const fileType = results.fileType;
    const isImage = fileType === 'image';
    const isVideo = fileType === 'video';
    const isAudio = fileType === 'audio';
    
    // Use Gemini API analysis results directly
    const detailedAnalysis = results.detailedAnalysis || 'Analysis not available';
    const anomalies = results.anomalies || [];
    const conclusion = results.conclusion || 'UNKNOWN';
    
    // Update facial analysis (for images and videos)
    if (isImage || isVideo) {
        if (conclusion === 'REAL') {
            facialAnalysis.textContent = 'Natural facial features and movements detected';
        } else if (conclusion === 'DEEPFAKE') {
            facialAnalysis.textContent = 'Unnatural facial patterns or manipulation detected';
        } else if (conclusion === 'AI-GENERATED') {
            facialAnalysis.textContent = 'AI-generated facial characteristics identified';
        } else {
            facialAnalysis.textContent = 'Facial analysis completed';
        }
    } else {
        facialAnalysis.textContent = 'Not applicable';
    }
    
    // Update audio analysis (for videos and audio files)
    if (isVideo || isAudio) {
        if (conclusion === 'REAL') {
            audioAnalysis.textContent = 'Natural audio patterns detected';
        } else if (conclusion === 'DEEPFAKE') {
            audioAnalysis.textContent = 'Audio manipulation or sync issues detected';
        } else if (conclusion === 'AI-GENERATED') {
            audioAnalysis.textContent = 'AI-generated or synthetic audio identified';
        } else {
            audioAnalysis.textContent = 'Audio analysis completed';
        }
    } else {
        audioAnalysis.textContent = 'Not applicable';
    }
    
    // Update metadata analysis
    if (conclusion === 'REAL') {
        metadataAnalysis.textContent = 'Consistent with original source';
    } else if (conclusion === 'DEEPFAKE') {
        metadataAnalysis.textContent = 'Metadata inconsistencies detected';
    } else if (conclusion === 'AI-GENERATED') {
        metadataAnalysis.textContent = 'AI generation signatures found';
    } else {
        metadataAnalysis.textContent = 'Metadata analysis completed';
    }
    
    // Update compression analysis
    if (conclusion === 'REAL') {
        compressionAnalysis.textContent = 'Standard compression patterns detected';
    } else if (conclusion === 'DEEPFAKE') {
        compressionAnalysis.textContent = 'Unusual compression artifacts found';
    } else if (conclusion === 'AI-GENERATED') {
        compressionAnalysis.textContent = 'AI generation compression patterns identified';
    } else {
        compressionAnalysis.textContent = 'Compression analysis completed';
    }
    
    // Log the detailed analysis for debugging
    console.log('Gemini Analysis Results:', {
        conclusion,
        detailedAnalysis,
        anomalies,
        authenticityScore: results.authenticityScore,
        confidence: results.confidenceLevel
    });
}

// Update recommendations based on Gemini API results
function updateGeminiRecommendations(results) {
    if (!results) return;
    
    const recommendations = [];
    const conclusion = results.conclusion || 'UNKNOWN';
    const authenticityScore = results.authenticityScore;
    const confidence = results.confidence;
    
    // Generate recommendations based on Gemini analysis
    if (conclusion === 'REAL') {
        recommendations.push('✅ Content appears to be authentic');
        recommendations.push('✅ No significant manipulation detected');
        if (authenticityScore >= 90) {
            recommendations.push('✅ High confidence in authenticity');
        } else {
            recommendations.push('⚠️ Consider additional verification for critical use cases');
        }
    } else if (conclusion === 'DEEPFAKE') {
        recommendations.push('🚨 Potential deepfake detected');
        recommendations.push('🚨 Content shows signs of manipulation');
        recommendations.push('⚠️ Do not rely on this content for critical decisions');
        recommendations.push('📋 Verify from multiple trusted sources');
        recommendations.push('🔔 Report suspicious content to authorities');
    } else if (conclusion === 'AI-GENERATED') {
        recommendations.push('🤖 AI-generated content detected');
        recommendations.push('⚠️ Content appears to be synthetically generated');
        recommendations.push('📋 Verify the source and context');
        recommendations.push('⚠️ Use with caution for important decisions');
    } else {
        recommendations.push('❓ Analysis completed but conclusion unclear');
        recommendations.push('⚠️ Consider professional verification');
        recommendations.push('📋 Cross-check with other detection methods');
    }
    
    // Add confidence-based recommendations
    if (confidence < 70) {
        recommendations.push('⚠️ Low confidence in analysis - verify manually');
    } else if (confidence >= 90) {
        recommendations.push('✅ High confidence in analysis results');
    }
    
    // Add anomaly-specific recommendations
    if (results.anomalies && results.anomalies.length > 0) {
        recommendations.push(`🔍 ${results.anomalies.length} specific anomalies detected`);
    }
    
    // Update the recommendations list in the UI
    recommendationsList.innerHTML = '';
    recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        li.style.marginBottom = '8px';
        li.style.fontSize = '14px';
        recommendationsList.appendChild(li);
    });
}

// Legacy function for backward compatibility
function updateDetailedAnalysis(isImage, isVideo, isAudio, authenticity) {
    console.log('Using legacy updateDetailedAnalysis - consider switching to updateGeminiAnalysisResults');
    const analyses = {
        facial: isImage || isVideo ? getFacialAnalysis(authenticity) : 'Not applicable',
        audio: isVideo || isAudio ? getAudioAnalysis(authenticity) : 'Not applicable',
        metadata: getMetadataAnalysis(authenticity),
        compression: getCompressionAnalysis(authenticity)
    };
    
    facialAnalysis.textContent = analyses.facial;
    audioAnalysis.textContent = analyses.audio;
    metadataAnalysis.textContent = analyses.metadata;
    compressionAnalysis.textContent = analyses.compression;
}

// Get facial analysis result
function getFacialAnalysis(authenticity) {
    if (authenticity >= 85) {
        return 'No signs of manipulation detected';
    } else if (authenticity >= 70) {
        return 'Minor inconsistencies detected';
    } else {
        return 'Significant manipulation indicators found';
    }
}

// Get audio analysis result
function getAudioAnalysis(authenticity) {
    if (authenticity >= 85) {
        return 'Natural audio patterns detected';
    } else if (authenticity >= 70) {
        return 'Some artificial patterns detected';
    } else {
        return 'Synthetic audio characteristics found';
    }
}

// Get metadata analysis result
function getMetadataAnalysis(authenticity) {
    if (authenticity >= 85) {
        return 'Consistent with original source';
    } else if (authenticity >= 70) {
        return 'Some inconsistencies detected';
    } else {
        return 'Multiple manipulation indicators found';
    }
}

// Get compression analysis result
function getCompressionAnalysis(authenticity) {
    if (authenticity >= 85) {
        return 'Standard compression detected';
    } else if (authenticity >= 70) {
        return 'Unusual compression patterns';
    } else {
        return 'Artificial compression artifacts detected';
    }
}

// Update recommendations
function updateRecommendations(resultType, authenticity) {
    const recommendations = [];
    
    if (resultType === 'success') {
        recommendations.push('This content appears to be authentic');
        recommendations.push('No immediate concerns detected');
        recommendations.push('Consider additional verification for critical use cases');
    } else if (resultType === 'warning') {
        recommendations.push('Exercise caution with this content');
        recommendations.push('Verify from multiple sources');
        recommendations.push('Consider professional verification');
    } else {
        recommendations.push('This content shows signs of manipulation');
        recommendations.push('Do not rely on this content for critical decisions');
        recommendations.push('Report suspicious content to authorities');
    }
    
    recommendationsList.innerHTML = '';
    recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recommendationsList.appendChild(li);
    });
}

// Start new test
function startNewTest() {
    removeCurrentFile();
    resultsSection.style.display = 'none';
    uploadSection.style.display = 'block';
    
    // Reset progress
    progressFill.style.width = '0%';
    progressSteps.forEach((step, index) => {
        step.classList.remove('active', 'completed');
        if (index === 0) step.classList.add('active');
    });
}

// Download report
function downloadReport() {
    const report = generateReport();
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-detection-report-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Generate report
function generateReport() {
    const report = `
AI Detection Report
Generated: ${new Date().toLocaleString()}
File: ${currentFile.name}
Size: ${formatFileSize(currentFile.size)}
Type: ${getFileTypeDisplay(currentFile.type)}

RESULTS:
Authenticity Score: ${authenticityScore.textContent}
Manipulation Risk: ${manipulationRisk.textContent}
Confidence Level: ${confidenceLevel.textContent}

DETAILED ANALYSIS:
Facial Analysis: ${facialAnalysis.textContent}
Audio Analysis: ${audioAnalysis.textContent}
Metadata Analysis: ${metadataAnalysis.textContent}
Compression Analysis: ${compressionAnalysis.textContent}

RECOMMENDATIONS:
${Array.from(recommendationsList.children).map(li => `- ${li.textContent}`).join('\n')}

---
Report generated by WISE AI Detection System
    `.trim();
    
    return report;
}

// Share results
function shareResults() {
    const shareText = `AI Detection Results: ${authenticityScore.textContent} authenticity score for ${currentFile.name}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'AI Detection Results',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText);
        alert('Results copied to clipboard!');
    }
}

// Update stats (mock data)
function updateStats() {
    // Animate stats on page load
    const stats = [
        { element: document.getElementById('totalTests'), target: 375, suffix: '' },
        { element: document.getElementById('accuracy'), target: 89.7, suffix: '%' },
        { element: document.getElementById('avgTime'), target: 118.4, suffix: 's' }
    ];
    
    stats.forEach(stat => {
        animateCounter(stat.element, stat.target, stat.suffix);
    });
}

// Animate counter
function animateCounter(element, target, suffix) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 50);
}

// Perform API Analysis using Gemini API Only
async function performAPIAnalysis(file) {
    const fileType = file.type.split('/')[0]; // image, video, audio
    
    console.log('Starting analysis for file type:', fileType);
    console.log('Using Gemini API:', USE_GEMINI_API);
    
    // If no valid Gemini API token, show error
    if (!USE_GEMINI_API) {
        console.error('No valid Gemini API token available');
        throw new Error('Gemini API token not configured. Please check your API key.');
    }
    
    // Use Gemini API for video and image analysis
    if (fileType === 'video' || fileType === 'image') {
        console.log(`Using Gemini API for ${fileType} analysis: ${file.name}`);
        try {
            const result = await performGeminiAnalysis(file, fileType);
            console.log('Gemini API analysis successful:', result);
            return result;
        } catch (error) {
            console.error('Gemini API Analysis Error:', error);
            throw new Error(`Gemini API analysis failed: ${error.message}`);
        }
    }
    
    // For audio files, Gemini can still analyze but with different prompt
    if (fileType === 'audio') {
        console.log(`Using Gemini API for ${fileType} analysis: ${file.name}`);
        try {
            const result = await performGeminiAnalysis(file, fileType);
            console.log('Gemini API audio analysis successful:', result);
            return result;
        } catch (error) {
            console.error('Gemini API Audio Analysis Error:', error);
            throw new Error(`Gemini API audio analysis failed: ${error.message}`);
        }
    }
    
    // Unsupported file type
    console.error('Unsupported file type:', fileType);
    throw new Error(`Unsupported file type: ${fileType}. Please upload an image, video, or audio file.`);
}

async function performGeminiAnalysis(file, fileType) {
    console.log(`Performing Gemini API analysis for ${fileType} file: ${file.name}`);
    
    try {
        // Convert file to base64
        const base64Data = await fileToBase64(file);
        const mimeType = file.type;
        
        // Prepare the request payload for Gemini API
        const payload = {
            contents: [{
                parts: [
                    {
                        text: DEEPFAKE_PROMPTS[fileType]
                    },
                    {
                        inline_data: {
                            mime_type: mimeType,
                            data: base64Data
                        }
                    }
                ]
            }],
            generationConfig: {
                temperature: 0.1,
                topP: 1,
                topK: 1,
                maxOutputTokens: 2048,
            }
        };

        const response = await fetch(`${GEMINI_API_ENDPOINT}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Gemini API request failed with status ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Gemini API Response:', result);

        // Extract the analysis from Gemini response
        if (result.candidates && result.candidates[0] && result.candidates[0].content) {
            const responseText = result.candidates[0].content.parts[0].text;
            
            // Log the actual Gemini analysis for debugging
            console.log('=== GEMINI ANALYSIS RESPONSE ===');
            console.log('Raw response text:', responseText);
            console.log('=================================');
            
            // Try to parse JSON response
            try {
                const jsonMatch = responseText.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    const analysisData = JSON.parse(jsonMatch[0]);
                    return {
                        isReal: analysisData.isReal,
                        authenticityScore: analysisData.authenticityScore,
                        manipulationRisk: analysisData.riskLevel,
                        confidence: analysisData.confidence,
                        confidenceLevel: analysisData.confidence >= 90 ? 'Very High' : 
                                       analysisData.confidence >= 75 ? 'High' : 
                                       analysisData.confidence >= 55 ? 'Medium' : 'Low',
                        fileType: fileType,
                        fileName: file.name,
                        fileSize: file.size,
                        analysisMethod: 'Gemini API Analysis',
                        anomalies: analysisData.anomalies || [],
                        detailedAnalysis: analysisData.analysis,
                        conclusion: analysisData.conclusion || 'UNKNOWN',
                        timestamp: new Date().toISOString()
                    };
                }
            } catch (parseError) {
                console.error('Error parsing Gemini JSON response:', parseError);
            }
            
            // Fallback to text-based analysis if JSON parsing fails
            const isReal = responseText.toLowerCase().includes('real') && !responseText.toLowerCase().includes('fake');
            const isDeepfake = responseText.toLowerCase().includes('deepfake') || responseText.toLowerCase().includes('fake');
            const isAIGenerated = responseText.toLowerCase().includes('ai-generated') || responseText.toLowerCase().includes('ai generated');
            
            let conclusion = 'UNKNOWN';
            if (isReal) conclusion = 'REAL';
            else if (isDeepfake) conclusion = 'DEEPFAKE';
            else if (isAIGenerated) conclusion = 'AI-GENERATED';
            
            return {
                isReal: isReal,
                authenticityScore: isReal ? 75 : (isDeepfake ? 25 : 50),
                manipulationRisk: isReal ? 'Low' : (isDeepfake ? 'High' : 'Medium'),
                confidence: 70,
                confidenceLevel: 'Medium',
                fileType: fileType,
                fileName: file.name,
                fileSize: file.size,
                analysisMethod: 'Gemini API Analysis (Text Response)',
                anomalies: [],
                detailedAnalysis: responseText,
                conclusion: conclusion,
                timestamp: new Date().toISOString()
            };
        }

        throw new Error('Invalid Gemini API response structure');

    } catch (error) {
        console.error('Gemini Analysis Error:', error);
        throw error;
    }
}

// Hugging Face API function removed - using Gemini API only for better deepfake detection accuracy

// Smart Mock Analysis for Demo Purposes
function generateSmartMockAnalysis(file, fileType) {
    console.log('Generating smart mock analysis for', fileType);
    
    // Generate realistic mock results based on file characteristics
    const fileName = file.name.toLowerCase();
    const fileSize = file.size;
    const isAIGenerated = fileName.includes('ai') || fileName.includes('fake') || fileName.includes('generated') ||
                         fileName.includes('deepfake') || fileName.includes('synthetic');
    
    // Base authenticity score with some randomness
    let baseScore = isAIGenerated ? 0.25 : 0.75;
    
    // Adjust based on file size (larger files might be more processed)
    if (fileSize > 10 * 1024 * 1024) { // > 10MB
        baseScore -= 0.1;
    } else if (fileSize < 100 * 1024) { // < 100KB
        baseScore += 0.05;
    }
    
    // Add some randomness for demo purposes
    const randomFactor = (Math.random() - 0.5) * 0.3;
    let authenticityScore = Math.max(0, Math.min(1, baseScore + randomFactor));
    
    const isReal = authenticityScore > 0.5;
    const confidence = Math.round(Math.random() * 30 + 70); // 70-100%
    
    // Determine risk level
    let manipulationRisk;
    if (authenticityScore > 0.8) {
        manipulationRisk = 'Low';
    } else if (authenticityScore > 0.5) {
        manipulationRisk = 'Medium';
    } else {
        manipulationRisk = 'High';
    }
    
    // Determine confidence level
    let confidenceLevel;
    if (confidence > 90) {
        confidenceLevel = 'Very High';
    } else if (confidence > 80) {
        confidenceLevel = 'High';
    } else if (confidence > 70) {
        confidenceLevel = 'Medium';
    } else {
        confidenceLevel = 'Low';
    }
    
    return {
        isReal: isReal,
        authenticityScore: Math.round(authenticityScore * 100),
        manipulationRisk: manipulationRisk,
        confidenceLevel: confidenceLevel,
        fileType: fileType,
        fileName: file.name,
        fileSize: fileSize,
        analysisMethod: 'Smart Mock Analysis (Demo Mode)',
        timestamp: new Date().toISOString()
    };
}

// Convert file to base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            // Remove the data URL prefix to get pure base64
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = error => reject(error);
    });
}

// Process API response and format results
function processAPIResult(apiResult, fileType) {
    let authenticityScore;
    let isReal = false;
    let confidence = 0;
    
    // Log the raw API response for debugging
    console.log('Raw API Response:', apiResult);
    console.log('File type:', fileType);
    
    // Handle different response formats
    if (Array.isArray(apiResult) && apiResult.length > 0) {
        // Classification result format
        const result = apiResult[0];
        if (result.label === 'real' || result.label === 'Real') {
            isReal = true;
            authenticityScore = Math.round(result.score * 100);
        } else {
            isReal = false;
            authenticityScore = Math.round((1 - result.score) * 100);
        }
        confidence = Math.round(result.score * 100);
    }
    
    // Determine risk level - balanced approach for accuracy
    let riskLevel;
    if (authenticityScore >= 85) {
        riskLevel = 'Low';
    } else if (authenticityScore >= 60) {
        riskLevel = 'Medium';
    } else {
        riskLevel = 'High';
    }
    
    // Determine confidence level - balanced thresholds
    let confidenceLevel;
    if (confidence >= 90) {
        confidenceLevel = 'Very High';
    } else if (confidence >= 75) {
        confidenceLevel = 'High';
    } else if (confidence >= 55) {
        confidenceLevel = 'Medium';
    } else {
        confidenceLevel = 'Low';
    }
    
    const finalResult = {
        isReal,
        authenticityScore,
        manipulationRisk: riskLevel,
        confidenceLevel,
        fileType,
        confidence,
        timestamp: new Date().toISOString()
    };
    
    // Log final result for debugging
    console.log('Final processed result:', finalResult);
    
    return finalResult;
}

// Show error results
function showErrorResults(errorMessage) {
    const errorResults = {
        isReal: false,
        authenticityScore: 0,
        manipulationRisk: 'High',
        confidenceLevel: 'Low',
        fileType: 'unknown',
        confidence: 0,
        error: true,
        errorMessage
    };
    
    showResults(errorResults);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initDeepware);

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && analysisInProgress) {
        // Allow canceling analysis with Escape
        if (confirm('Cancel analysis?')) {
            analysisInProgress = false;
            analysisSection.style.display = 'none';
            uploadSection.style.display = 'block';
        }
    }
});

console.log('Deepware API functionality loaded successfully!'); 