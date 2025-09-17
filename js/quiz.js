// Function to shuffle array elements
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Function to randomize answer options and update correct answer
function randomizeAnswerOptions(question) {
    const options = [...question.answerOptions];
    const correctOption = options.find(opt => opt.value === question.correctAnswer);
    
    // Shuffle the options
    const shuffledOptions = shuffleArray(options);
    
    // Find the new position of the correct answer
    const newCorrectOption = shuffledOptions.find(opt => opt.text === correctOption.text);
    
    return {
        ...question,
        answerOptions: shuffledOptions,
        correctAnswer: newCorrectOption.value
    };
}

// Quiz Data - Total 50 English text questions about deepfake and AI detection
const fullQuizData = [
    {
        id: 1,
        type: 'text',
        questionText: 'What is deepfake technology?',
        answerOptions: [
            { text: 'Regular video editing software', value: 'a' },
            { text: 'AI that can create realistic fake content', value: 'b' },
            { text: 'Photo filter application', value: 'c' },
            { text: '3D animation software', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Deepfake is AI technology that uses machine learning to create fake content (video, audio, or images) that looks extremely realistic and is difficult to distinguish from real content.',
        tips: ['Deepfake uses neural networks', 'Can replace faces or voices', 'Potentially misused for fraud'],
        category: 'definition'
    },
    {
        id: 2,
        type: 'text',
        questionText: 'Which of the following is NOT a characteristic of deepfake videos?',
        answerOptions: [
            { text: 'Unnatural eye movements', value: 'a' },
            { text: 'Perfect lip-sync with audio', value: 'b' },
            { text: 'Inconsistent lighting', value: 'c' },
            { text: 'Stiff facial expressions', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Perfect lip-sync with audio actually indicates real content. Deepfakes often have synchronization problems between lip movements and audio.',
        tips: ['Pay attention to audio-video synchronization', 'Look for micro-movements on the face', 'Check lighting consistency'],
        category: 'characteristics'
    },
    {
        id: 3,
        type: 'text',
        questionText: 'What is the most common AI technology used to create deepfakes?',
        answerOptions: [
            { text: 'GAN (Generative Adversarial Networks)', value: 'a' },
            { text: 'CNN (Convolutional Neural Networks)', value: 'b' },
            { text: 'RNN (Recurrent Neural Networks)', value: 'c' },
            { text: 'SVM (Support Vector Machines)', value: 'd' }
        ],
        correctAnswer: 'a',
        explanation: 'GAN is the most common technology for creating deepfakes. GAN consists of two competing neural networks: a generator that creates content and a discriminator that detects authenticity.',
        tips: ['GAN works with competition between two networks', 'Generator creates fake content', 'Discriminator tries to detect fakes'],
        category: 'technology'
    },
    {
        id: 4,
        type: 'text',
        questionText: 'Which body part is most difficult for AI to replicate in deepfakes?',
        answerOptions: [
            { text: 'Face', value: 'a' },
            { text: 'Hands and fingers', value: 'b' },
            { text: 'Hair', value: 'c' },
            { text: 'Shoulders', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Hands and fingers are the most difficult body parts for AI to replicate due to the many joints and complex movements that need to be simulated.',
        tips: ['Pay attention to hand movements', 'Check unnatural finger positions', 'Look at hand-object interactions'],
        category: 'detection'
    },
    {
        id: 5,
        type: 'text',
        questionText: 'What is the primary goal of deepfake detection?',
        answerOptions: [
            { text: 'Block all videos', value: 'a' },
            { text: 'Identify and verify the authenticity of digital content', value: 'b' },
            { text: 'Delete social media', value: 'c' },
            { text: 'Limit internet usage', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'The primary goal of deepfake detection is to identify and verify the authenticity of digital content to prevent the spread of misinformation and protect individuals from misuse.',
        tips: ['Focus on authenticity verification', 'Prevent misinformation', 'Protect individual privacy'],
        category: 'purpose'
    },
    {
        id: 6,
        type: 'text',
        questionText: 'How can individuals protect themselves from deepfake scams?',
        answerOptions: [
            { text: 'Trust all online content', value: 'a' },
            { text: 'Verify sources and be skeptical of unusual requests', value: 'b' },
            { text: 'Share everything on social media', value: 'c' },
            { text: 'Use only one password for all accounts', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Individuals can protect themselves by verifying sources, being skeptical of unusual requests, and not trusting everything they see online, especially when it involves financial or personal information.',
        tips: ['Always verify the source', 'Be skeptical of unusual requests', 'Use strong, unique passwords'],
        category: 'protection'
    },
    {
        id: 7,
        type: 'text',
        questionText: 'What is "face swapping" in the context of deepfakes?',
        answerOptions: [
            { text: 'Exchanging physical faces between people', value: 'a' },
            { text: 'AI technique that replaces one person\'s face with another in media', value: 'b' },
            { text: 'Makeup application technique', value: 'c' },
            { text: 'Photo editing filter', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Face swapping is an AI technique that uses deep learning algorithms to replace one person\'s face with another in videos or images, creating realistic but fake content.',
        tips: ['Uses neural networks for face mapping', 'Can be used for entertainment or deception', 'Quality depends on training data'],
        category: 'techniques'
    },
    {
        id: 8,
        type: 'text',
        questionText: 'What ethical concerns are associated with deepfake technology?',
        answerOptions: [
            { text: 'Only concerns about entertainment', value: 'a' },
            { text: 'Privacy violations, fraud, and misinformation', value: 'b' },
            { text: 'No ethical concerns at all', value: 'c' },
            { text: 'Only concerns about cost', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Deepfake technology raises serious ethical concerns including privacy violations, potential for fraud, spread of misinformation, and non-consensual use of people\'s likenesses.',
        tips: ['Protect personal data and images', 'Be aware of potential misuse', 'Support ethical AI development'],
        category: 'ethics'
    },
    {
        id: 9,
        type: 'text',
        questionText: 'What is "voice cloning" in deepfake technology?',
        answerOptions: [
            { text: 'Recording someone\'s voice with a microphone', value: 'a' },
            { text: 'AI synthesis of a person\'s voice to say anything', value: 'b' },
            { text: 'Voice acting or impression', value: 'c' },
            { text: 'Audio editing software', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Voice cloning is AI technology that can synthesize a person\'s voice to make them say anything, using machine learning to copy speech patterns, tone, and characteristics.',
        tips: ['Requires voice samples for training', 'Can be used for legitimate or malicious purposes', 'Quality depends on training data quality'],
        category: 'audio'
    },
    {
        id: 10,
        type: 'text',
        questionText: 'How can deepfake technology be used positively?',
        answerOptions: [
            { text: 'Only for negative purposes', value: 'a' },
            { text: 'Education, entertainment, and accessibility', value: 'b' },
            { text: 'Military applications only', value: 'c' },
            { text: 'No positive uses exist', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Deepfake technology can be used positively for education, entertainment, accessibility (helping those who lost their voice), movie special effects, and historical recreations.',
        tips: ['Educational content creation', 'Accessibility tools for voice loss', 'Entertainment and creative applications'],
        category: 'applications'
    },
    // Media questions removed - replaced with text questions
    {
        id: 11,
        type: 'text',
        questionText: 'What is "digital watermarking" in the context of deepfake detection?',
        answerOptions: [
            { text: 'Adding visible logos to images', value: 'a' },
            { text: 'Embedding hidden identifiers to verify authenticity', value: 'b' },
            { text: 'Watermarking physical documents', value: 'c' },
            { text: 'Adding copyright notices', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Digital watermarking embeds hidden, imperceptible identifiers into digital content that can be used to verify its authenticity and detect if it has been tampered with or AI-generated.',
        tips: ['Watermarks can be invisible to humans', 'They help verify content origin', 'Used in both images and videos'],
        category: 'detection'
    },
    {
        id: 12,
        type: 'text',
        questionText: 'What is "face morphing" in deepfake technology?',
        answerOptions: [
            { text: 'A cosmetic surgery procedure', value: 'a' },
            { text: 'AI technique that blends facial features from multiple people', value: 'b' },
            { text: 'A photography lighting technique', value: 'c' },
            { text: 'A makeup application method', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Face morphing is an AI technique that uses algorithms to blend facial features from multiple individuals, creating a new, synthetic face that combines characteristics from different sources.',
        tips: ['Creates hybrid facial features', 'Used in identity theft and deception', 'Can be detected by analyzing facial proportions'],
        category: 'techniques'
    },
    {
        id: 13,
        type: 'text',
        questionText: 'What is "lip-sync manipulation" in deepfake videos?',
        answerOptions: [
            { text: 'A video editing technique for music videos', value: 'a' },
            { text: 'AI that makes a person\'s mouth movements match any audio', value: 'b' },
            { text: 'A method for improving audio quality', value: 'c' },
            { text: 'A type of voice recognition software', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Lip-sync manipulation is a deepfake technique where AI algorithms analyze audio and generate corresponding mouth movements, making it appear as if someone is saying words they never actually spoke.',
        tips: ['Look for unnatural mouth movements', 'Check if lip movements match speech patterns', 'Pay attention to timing and rhythm'],
        category: 'techniques'
    },
    {
        id: 14,
        type: 'text',
        questionText: 'What is "neural rendering" in deepfake technology?',
        answerOptions: [
            { text: 'A type of computer graphics hardware', value: 'a' },
            { text: 'AI technique that generates realistic facial expressions', value: 'b' },
            { text: 'A method for rendering 3D environments', value: 'c' },
            { text: 'A video compression algorithm', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Neural rendering uses AI to generate highly realistic facial expressions and movements by training on large datasets of human faces, enabling the creation of convincing deepfake videos.',
        tips: ['Creates realistic facial animations', 'Uses deep learning to understand facial expressions', 'Can generate emotions that never occurred'],
        category: 'technology'
    },
    {
        id: 15,
        type: 'text',
        questionText: 'What is "source identification" in deepfake detection?',
        answerOptions: [
            { text: 'Finding the original creator of a video', value: 'a' },
            { text: 'Detecting if content comes from AI generation tools', value: 'b' },
            { text: 'Identifying the camera used to record a video', value: 'c' },
            { text: 'Locating the server hosting the content', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Source identification in deepfake detection involves analyzing digital content to determine if it was created by AI generation tools or if it originated from authentic sources like cameras or recording devices.',
        tips: ['Looks for AI generation artifacts', 'Analyzes metadata and digital fingerprints', 'Helps verify content authenticity'],
        category: 'detection'
    },
    {
        id: 16,
        type: 'text',
        questionText: 'What is "facial landmark analysis" in deepfake detection?',
        answerOptions: [
            { text: 'Mapping geographic locations in photos', value: 'a' },
            { text: 'Analyzing key points on a face to detect manipulation', value: 'b' },
            { text: 'Identifying famous landmarks in videos', value: 'c' },
            { text: 'Creating facial recognition databases', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Facial landmark analysis identifies key points on a face (like eyes, nose, mouth corners) and analyzes their movements and relationships to detect unnatural patterns that indicate AI manipulation.',
        tips: ['Detects unnatural facial movements', 'Analyzes symmetry and proportions', 'Identifies inconsistent expressions'],
        category: 'detection'
    },
    {
        id: 17,
        type: 'text',
        questionText: 'What is "temporal consistency analysis" in deepfake detection?',
        answerOptions: [
            { text: 'Analyzing video timestamps', value: 'a' },
            { text: 'Checking for consistency across video frames', value: 'b' },
            { text: 'Measuring video duration', value: 'c' },
            { text: 'Analyzing audio synchronization', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Temporal consistency analysis examines how elements in a video change over time, looking for inconsistencies between frames that might indicate AI manipulation, such as sudden changes in lighting or unnatural movements.',
        tips: ['Detects frame-to-frame inconsistencies', 'Looks for unnatural motion patterns', 'Identifies lighting and shadow changes'],
        category: 'detection'
    },
    {
        id: 18,
        type: 'text',
        questionText: 'What is "metadata analysis" in deepfake detection?',
        answerOptions: [
            { text: 'Analyzing the content of videos and images', value: 'a' },
            { text: 'Examining hidden data about file creation and editing', value: 'b' },
            { text: 'Studying the behavior of people in videos', value: 'c' },
            { text: 'Analyzing the emotional content of media', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Metadata analysis examines hidden information embedded in digital files, such as creation dates, editing software used, and compression artifacts, which can reveal if content has been artificially generated or manipulated.',
        tips: ['Reveals editing software痕迹', 'Shows creation and modification history', 'Can detect AI generation tools'],
        category: 'detection'
    },
    // New Questions added here
    {
        id: 19,
        type: 'text',
        questionText: 'What is Machine Learning (ML)?',
        answerOptions: [
            { text: 'The ability of computers to make independent decisions', value: 'a' },
            { text: 'Algorithms that enable computers to learn from data', value: 'b' },
            { text: 'A subfield of AI focused on robotics', value: 'c' },
            { text: 'The process of generating fake images and videos', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Machine Learning is a subfield of AI that focuses on developing algorithms that can "learn" and improve their performance over time by being exposed to data.',
        tips: ['Computers learn patterns from data', 'Used in deepfake creation and detection', 'Foundation of modern AI systems'],
        category: 'technology'
    },
    {
        id: 20,
        type: 'text',
        questionText: 'What AI technology is used by virtual assistants like Siri and Google Assistant?',
        answerOptions: [
            { text: 'Computer Vision', value: 'a' },
            { text: 'Natural Language Processing (NLP)', value: 'b' },
            { text: 'Expert Systems', value: 'c' },
            { text: 'Reinforcement Learning', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Natural Language Processing (NLP) is a branch of AI that enables computers to understand, interpret, and generate human language.',
        tips: ['Used in voice assistants and chatbots', 'Enables text analysis and translation', 'Key technology for voice deepfakes'],
        category: 'technology'
    },
    {
        id: 21,
        type: 'text',
        questionText: 'Who is considered the "father" of artificial intelligence?',
        answerOptions: [
            { text: 'Bill Gates', value: 'a' },
            { text: 'Alan Turing', value: 'b' },
            { text: 'John McCarthy', value: 'c' },
            { text: 'Stephen Hawking', value: 'd' }
        ],
        correctAnswer: 'c',
        explanation: 'John McCarthy was an American computer scientist who coined the term "artificial intelligence" in 1956 and was one of the founders of the field.',
        tips: ['Coined the term "artificial intelligence"', 'Organized the Dartmouth Conference in 1956', 'Pioneer in AI research'],
        category: 'history'
    },
    {
        id: 22,
        type: 'text',
        questionText: 'What is the main difference between Strong AI and Weak AI?',
        answerOptions: [
            { text: 'Strong AI has consciousness, Weak AI does not', value: 'a' },
            { text: 'Strong AI can only solve one problem, Weak AI can solve many', value: 'b' },
            { text: 'Strong AI uses the internet, Weak AI does not', value: 'c' },
            { text: 'Strong AI is faster, Weak AI is slower', value: 'd' }
        ],
        correctAnswer: 'a',
        explanation: 'Strong AI (also known as AGI or Artificial General Intelligence) is theoretical AI with consciousness and human-like cognitive abilities, while Weak AI (ANI) is AI designed for specific tasks.',
        tips: ['AGI remains theoretical and not yet achieved', 'Current AI systems are all Weak AI', 'Deepfake technology uses Weak AI'],
        category: 'concepts'
    },
    {
        id: 23,
        type: 'text',
        questionText: 'What is the name of the artificial neural network that mimics how the human brain works?',
        answerOptions: [
            { text: 'Neural Networks', value: 'a' },
            { text: 'Data Mining', value: 'b' },
            { text: 'Cloud Computing', value: 'c' },
            { text: 'Quantum Computing', value: 'd' }
        ],
        correctAnswer: 'a',
        explanation: 'Neural Networks are computational models inspired by the structure of the human brain, used to recognize patterns and solve complex problems.',
        tips: ['Consist of interconnected nodes (neurons)', 'Learn from training data', 'Foundation of deepfake technology'],
        category: 'technology'
    },
    {
        id: 24,
        type: 'text',
        questionText: 'In Deep Learning, what does CNN stand for?',
        answerOptions: [
            { text: 'Creative Neural Network', value: 'a' },
            { text: 'Convolutional Neural Network', value: 'b' },
            { text: 'Computerized Network Node', value: 'c' },
            { text: 'Comprehensive Neural Navigation', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Convolutional Neural Network (CNN) is a type of Neural Network that is very effective for tasks related to computer vision, such as image recognition.',
        tips: ['Specialized for processing grid-like data', 'Used in image and video analysis', 'Key technology for visual deepfake detection'],
        category: 'technology'
    },
    {
        id: 25,
        type: 'text',
        questionText: 'What is the main goal of Reinforcement Learning algorithms?',
        answerOptions: [
            { text: 'To classify data', value: 'a' },
            { text: 'To predict future outcomes', value: 'b' },
            { text: 'To find the shortest path', value: 'c' },
            { text: 'To learn from interaction with environment through rewards and penalties', value: 'd' }
        ],
        correctAnswer: 'd',
        explanation: 'Reinforcement Learning is a branch of AI where an agent learns to make optimal decisions by interacting with its environment and receiving feedback in the form of rewards or penalties.',
        tips: ['Uses trial and error learning', 'Agents improve through experience', 'Applied in game AI and robotics'],
        category: 'technology'
    },
    {
        id: 26,
        type: 'text',
        questionText: 'What is meant by Big Data in the context of AI?',
        answerOptions: [
            { text: 'A very large database', value: 'a' },
            { text: 'Complex and high-volume data that is difficult to process with traditional software', value: 'b' },
            { text: 'Data used to train AI models', value: 'c' },
            { text: 'A collection of personal data', value: 'd' }
        ],
        correctAnswer: 'b',
        explanation: 'Big Data refers to extremely large and complex data sets that cannot be effectively managed or processed using traditional data processing tools.',
        tips: ['Characterized by volume, velocity, and variety', 'Essential for training deep learning models', 'Used in deepfake detection and analysis'],
        category: 'concepts'
    },
    {
        id: 27,
        type: 'text',
        questionText: 'A real-world example of "Computer Vision" is...',
        answerOptions: [
            { text: 'Spam detection in email', value: 'a' },
            { text: 'Movie recommendations on Netflix', value: 'b' },
            { text: 'Face recognition on smartphones', value: 'c' },
            { text: 'Voice assistants in cars', value: 'd' }
        ],
        correctAnswer: 'c',
        explanation: 'Computer Vision is a field of AI that enables computers to "see" and interpret visual information from images and videos. Face recognition is one of the most common applications of Computer Vision.',
        tips: ['Used in autonomous vehicles', 'Enables medical image analysis', 'Key for visual deepfake detection'],
        category: 'applications'
    }
];

// Quiz Variables
let quizData = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let skippedQuestions = 0;

// DOM Elements
const startScreen = document.getElementById('startScreen');
const questionScreen = document.getElementById('questionScreen');
const feedbackScreen = document.getElementById('feedbackScreen');
const resultsScreen = document.getElementById('resultsScreen');
const reviewScreen = document.getElementById('reviewScreen');
const screens = document.querySelectorAll('.quiz-screen');

const startQuizBtn = document.getElementById('startQuiz');
const answerButtonsContainer = document.getElementById('answerButtonsContainer');
const skipQuestionBtn = document.getElementById('skipQuestion');
const nextQuestionBtn = document.getElementById('nextQuestion');
const retakeQuizBtn = document.getElementById('retakeQuizBtn'); // Updated ID
const viewAnswersBtn = document.getElementById('viewAnswersBtn');
const backToResultsBtn = document.getElementById('backToResultsBtn');

// Stats Elements
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const scoreEl = document.getElementById('score');
const progressFill = document.getElementById('progressFill');

// Content Elements
const questionTextEl = document.getElementById('questionText');
const contentImage = document.getElementById('contentImage');
const contentVideo = document.getElementById('contentVideo');
const contentSource = document.getElementById('contentSource');
const contentDate = document.getElementById('contentDate');
const mediaContainer = document.querySelector('.content-container');

// Feedback Elements
const feedbackIcon = document.getElementById('feedbackIcon');
const feedbackTitle = document.getElementById('feedbackTitle');
const feedbackText = document.getElementById('feedbackText');
const explanationText = document.getElementById('explanationText');
const tipsList = document.getElementById('tipsList');

// Results Elements
const finalScoreEl = document.getElementById('finalScore');
const scorePercentageEl = document.getElementById('scorePercentage');
const correctAnswersEl = document.getElementById('correctAnswers');
const incorrectAnswersEl = document.getElementById('incorrectAnswers');
const skippedQuestionsEl = document.getElementById('skippedQuestions');
const performanceRating = document.getElementById('performanceRating');
const ratingTextEl = document.querySelector('.rating-text');
const ratingStarsEl = document.querySelector('.rating-stars');

// Review Elements
const reviewContainer = document.getElementById('reviewContainer');

function showScreen(screenToShow) {
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    screenToShow.classList.add('active');
}

function getRandomQuestions() {
    const shuffled = [...fullQuizData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 15);
}

function updateStats() {
    scoreEl.textContent = score;
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// Main Quiz Functions
function initQuiz() {
    quizData = getRandomQuestions();
    // Randomize answer options for each question
    quizData = quizData.map(question => randomizeAnswerOptions(question));
    totalQuestionsEl.textContent = quizData.length;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    skippedQuestions = 0;
    updateStats();
}

function startQuiz() {
    showScreen(questionScreen);
    loadQuestion();
}

function loadQuestion() {
    const question = quizData[currentQuestionIndex];
    
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    updateProgress();
    
    contentImage.classList.add('hidden');
    contentVideo.classList.add('hidden');
    answerButtonsContainer.innerHTML = '';
    
    questionTextEl.textContent = question.questionText;

    if (question.type === 'media') {
        mediaContainer.style.display = 'flex';
        contentSource.textContent = `Source: ${question.source}`;
        contentDate.textContent = `Date: ${question.date}`;
        if (question.mediaType === 'image') {
            contentImage.src = question.content;
            contentImage.onerror = function() {
                console.error('Failed to load image:', question.content);
                // Fallback to local image or placeholder
                this.src = 'assets/images/ai-generated-sticker-anime-girl-with-pink-and-blue-hair-png.webp';
            };
            contentImage.onload = function() {
                console.log('Image loaded successfully:', question.content);
            };
            contentImage.classList.remove('hidden');
        } else {
            contentVideo.src = question.content;
            contentVideo.classList.remove('hidden');
            contentVideo.load();
        }
    } else {
        mediaContainer.style.display = 'none';
    }

    question.answerOptions.forEach(option => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.dataset.answer = option.value;
        button.innerHTML = `<span>${option.text}</span>`;
        button.addEventListener('click', () => selectAnswer(option.value));
        answerButtonsContainer.appendChild(button);
    });
}

function selectAnswer(userAnswer) {
    const question = quizData[currentQuestionIndex];
    const isCorrect = userAnswer === question.correctAnswer;
    
    const allButtons = answerButtonsContainer.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.answer === userAnswer) {
            btn.classList.add('selected');
        }
        if (btn.dataset.answer === question.correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.dataset.answer === userAnswer) {
            btn.classList.add('incorrect');
        }
    });

    userAnswers.push({
        questionId: question.id,
        userAnswer: userAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect: isCorrect,
        questionText: question.questionText,
        explanation: question.explanation,
        options: question.answerOptions,
        type: question.type
    });
    
    if (isCorrect) {
        score++;
    }
    updateStats();
    
    setTimeout(() => {
        showFeedback(question, isCorrect);
    }, 1000);
}

function showFeedback(question, isCorrect) {
    if (isCorrect) {
        feedbackIcon.innerHTML = '<i class="fas fa-check"></i>';
        feedbackTitle.textContent = 'Correct!';
        feedbackText.textContent = `Great job! You correctly identified the answer.`;
        document.querySelector('.feedback-header').classList.remove('incorrect');
    } else {
        feedbackIcon.innerHTML = '<i class="fas fa-times"></i>';
        feedbackTitle.textContent = 'Incorrect';
        feedbackText.textContent = `Not quite right.`;
        document.querySelector('.feedback-header').classList.add('incorrect');
    }
    
    explanationText.textContent = question.explanation;

    const tipsSection = document.querySelector('.detection-tips');
    if (question.type === 'media' && question.tips) {
        tipsSection.style.display = 'block';
        tipsList.innerHTML = '';
        question.tips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            tipsList.appendChild(li);
        });
    } else {
        tipsSection.style.display = 'none';
    }
    
    showScreen(feedbackScreen);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showScreen(questionScreen);
        loadQuestion();
    } else {
        showResults();
    }
}

function skipQuestion() {
    skippedQuestions++;
    userAnswers.push({
        questionId: quizData[currentQuestionIndex].id,
        userAnswer: 'skipped',
        correctAnswer: quizData[currentQuestionIndex].correctAnswer,
        isCorrect: false,
        questionText: quizData[currentQuestionIndex].questionText,
        explanation: quizData[currentQuestionIndex].explanation
    });
    
    nextQuestion();
}

function showResults() {
    const totalQuestions = quizData.length;
    const correctAnswers = score;
    const incorrectAnswers = totalQuestions - correctAnswers - skippedQuestions;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    finalScoreEl.textContent = correctAnswers;
    scorePercentageEl.textContent = `${percentage}%`;
    correctAnswersEl.textContent = correctAnswers;
    incorrectAnswersEl.textContent = incorrectAnswers;
    skippedQuestionsEl.textContent = skippedQuestions;
    
    // Updated logic for star rating based on correct answers
    let ratingText = '';
    let stars = 0;
    
    // Ranges:
    // 1-3 => 1 star, 4-6 => 2 stars, 7-9 => 3 stars, 10-12 => 4 stars, 13-15 => 5 stars
    if (correctAnswers >= 13) {
        ratingText = 'Expert Level';
        stars = 5;
    } else if (correctAnswers >= 10) {
        ratingText = 'Advanced Level';
        stars = 4;
    } else if (correctAnswers >= 7) {
        ratingText = 'Intermediate Level';
        stars = 3;
    } else if (correctAnswers >= 4) {
        ratingText = 'Beginner Level';
        stars = 2;
    } else {
        ratingText = 'Needs Practice';
        stars = 1; // 0-3
    }
    
    ratingTextEl.textContent = ratingText;
    ratingStarsEl.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('i');
        star.className = 'fas fa-star';
        if (i < stars) { star.style.color = '#FFD700'; } 
        else { star.style.color = '#e5e7eb'; }
        ratingStarsEl.appendChild(star);
    }
    
    showScreen(resultsScreen);
}

function viewAnswers() {
    reviewContainer.innerHTML = '';
    userAnswers.forEach(answer => {
        const questionData = fullQuizData.find(q => q.id === answer.questionId);
        const card = document.createElement('div');
        card.className = `review-card ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        
        let answerText = answer.userAnswer;
        let correctAnswerText = questionData.correctAnswer;
        
        if (answer.type === 'general') {
            const userAnswerObj = questionData.answerOptions.find(opt => opt.value === answer.userAnswer);
            const correctAnswerObj = questionData.answerOptions.find(opt => opt.value === questionData.correctAnswer);
            if (userAnswerObj) answerText = userAnswerObj.text;
            if (correctAnswerObj) correctAnswerText = correctAnswerObj.text;
        }

        const iconHtml = answer.isCorrect ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>';

        card.innerHTML = `
            <h4>${questionData.questionText}</h4>
            <p>Your Answer: <strong>${answerText}</strong></p>
            <p>Correct Answer: <strong>${correctAnswerText}</strong></p>
            <p class="explanation">${questionData.explanation}</p>
            <div class="icon-status">${iconHtml}</div>
        `;
        reviewContainer.appendChild(card);
    });
    
    showScreen(reviewScreen);
}

// Event Listeners
startQuizBtn.addEventListener('click', startQuiz);
skipQuestionBtn.addEventListener('click', skipQuestion);
nextQuestionBtn.addEventListener('click', nextQuestion);

// Updated "Retake Quiz" button listener
retakeQuizBtn.addEventListener('click', () => {
    initQuiz();
    showScreen(startScreen);
});

viewAnswersBtn.addEventListener('click', viewAnswers);
backToResultsBtn.addEventListener('click', () => showScreen(resultsScreen));

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const activeScreen = document.querySelector('.quiz-screen.active');
    
    if (activeScreen.id === 'questionScreen') {
        if (['a', 'b', 'c', 'd'].includes(e.key)) {
            selectAnswer(e.key);
        } else if (e.key === 's') {
            e.preventDefault();
            skipQuestion();
        }
    } else if (activeScreen.id === 'feedbackScreen') {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            nextQuestion();
        }
    }
});