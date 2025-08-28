// Quiz Data
const quizData = [
    {
        id: 1,
        type: 'image',
        content: 'https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Real+Image+1',
        answer: 'real',
        explanation: 'This image shows natural facial features, consistent lighting, and realistic proportions. The background details are coherent and there are no obvious artifacts.',
        tips: [
            'Natural facial expressions and movements',
            'Consistent lighting across the image',
            'Realistic proportions and features',
            'Coherent background details'
        ],
        source: 'Getty Images',
        date: '2024'
    },
    {
        id: 2,
        type: 'image',
        content: 'https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Deepfake+Image+1',
        answer: 'deepfake',
        explanation: 'This image shows subtle inconsistencies in facial features, particularly around the eyes and mouth. The lighting appears artificial and there are minor artifacts.',
        tips: [
            'Look for unnatural facial symmetry',
            'Check for inconsistent lighting',
            'Examine eye reflections carefully',
            'Look for artifacts around edges'
        ],
        source: 'AI Generated',
        date: '2024'
    },
    {
        id: 3,
        type: 'video',
        content: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        answer: 'real',
        explanation: 'This video shows natural facial movements, consistent audio synchronization, and realistic background motion. The person\'s expressions change naturally.',
        tips: [
            'Natural facial movements and expressions',
            'Consistent audio-video synchronization',
            'Realistic background motion',
            'Natural blinking and eye movements'
        ],
        source: 'Reuters',
        date: '2024'
    },
    {
        id: 4,
        type: 'image',
        content: 'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Real+Image+2',
        answer: 'real',
        explanation: 'This image displays authentic human features with natural skin texture, realistic hair, and proper anatomical proportions. The lighting is consistent.',
        tips: [
            'Natural skin texture and pores',
            'Realistic hair and hairline',
            'Proper anatomical proportions',
            'Consistent lighting and shadows'
        ],
        source: 'Associated Press',
        date: '2024'
    },
    {
        id: 5,
        type: 'image',
        content: 'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Deepfake+Image+2',
        answer: 'deepfake',
        explanation: 'This image has overly perfect facial features, unnaturally smooth skin, and inconsistent lighting. The background shows signs of AI generation.',
        tips: [
            'Overly perfect or symmetrical features',
            'Unnaturally smooth skin texture',
            'Inconsistent lighting patterns',
            'Artificial-looking background elements'
        ],
        source: 'AI Generated',
        date: '2024'
    },
    {
        id: 6,
        type: 'video',
        content: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
        answer: 'deepfake',
        explanation: 'This video shows unnatural facial movements, particularly around the mouth and eyes. The audio doesn\'t perfectly sync with the lip movements.',
        tips: [
            'Unnatural facial movements',
            'Poor audio-video synchronization',
            'Artificial-looking expressions',
            'Inconsistent lighting throughout'
        ],
        source: 'AI Generated',
        date: '2024'
    },
    {
        id: 7,
        type: 'image',
        content: 'https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Real+Image+3',
        answer: 'real',
        explanation: 'This image shows genuine human characteristics with natural imperfections, realistic shadows, and authentic environmental details.',
        tips: [
            'Natural imperfections and blemishes',
            'Realistic shadows and highlights',
            'Authentic environmental details',
            'Consistent color temperature'
        ],
        source: 'BBC News',
        date: '2024'
    },
    {
        id: 8,
        type: 'image',
        content: 'https://via.placeholder.com/600x400/EC4899/FFFFFF?text=Deepfake+Image+3',
        answer: 'deepfake',
        explanation: 'This image displays artificial-looking features with unnaturally perfect symmetry and inconsistent lighting patterns that suggest AI generation.',
        tips: [
            'Unnaturally perfect symmetry',
            'Inconsistent lighting patterns',
            'Artificial-looking features',
            'Suspicious background elements'
        ],
        source: 'AI Generated',
        date: '2024'
    },
    {
        id: 9,
        type: 'video',
        content: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
        answer: 'real',
        explanation: 'This video demonstrates natural human behavior with realistic movements, authentic expressions, and consistent environmental interaction.',
        tips: [
            'Natural human behavior patterns',
            'Realistic movement and gestures',
            'Authentic emotional expressions',
            'Consistent environmental interaction'
        ],
        source: 'CNN',
        date: '2024'
    },
    {
        id: 10,
        type: 'image',
        content: 'https://via.placeholder.com/600x400/06B6D4/FFFFFF?text=Deepfake+Image+4',
        answer: 'deepfake',
        explanation: 'This image shows signs of AI generation with artificial-looking features, inconsistent lighting, and unnatural background elements.',
        tips: [
            'Artificial-looking facial features',
            'Inconsistent lighting and shadows',
            'Unnatural background elements',
            'Suspicious image artifacts'
        ],
        source: 'AI Generated',
        date: '2024'
    }
];

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let skippedQuestions = 0;

// DOM Elements
const startScreen = document.getElementById('startScreen');
const questionScreen = document.getElementById('questionScreen');
const feedbackScreen = document.getElementById('feedbackScreen');
const resultsScreen = document.getElementById('resultsScreen');

const startQuizBtn = document.getElementById('startQuiz');
const answerBtns = document.querySelectorAll('.answer-btn');
const skipQuestionBtn = document.getElementById('skipQuestion');
const nextQuestionBtn = document.getElementById('nextQuestion');
const retakeQuizBtn = document.getElementById('retakeQuiz');
const viewAnswersBtn = document.getElementById('viewAnswers');

// Stats Elements
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const scoreEl = document.getElementById('score');
const progressFill = document.getElementById('progressFill');

// Content Elements
const contentImage = document.getElementById('contentImage');
const contentVideo = document.getElementById('contentVideo');
const contentSource = document.getElementById('contentSource');
const contentDate = document.getElementById('contentDate');

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

// Initialize Quiz
function initQuiz() {
    totalQuestionsEl.textContent = quizData.length;
    updateStats();
}

// Start Quiz
function startQuiz() {
    showScreen(questionScreen);
    loadQuestion();
}

// Load Question
function loadQuestion() {
    const question = quizData[currentQuestionIndex];
    
    // Update stats
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    updateProgress();
    
    // Load content
    if (question.type === 'image') {
        contentImage.style.display = 'block';
        contentVideo.style.display = 'none';
        contentImage.src = question.content;
    } else {
        contentImage.style.display = 'none';
        contentVideo.style.display = 'block';
        contentVideo.src = question.content;
    }
    
    // Update metadata
    contentSource.textContent = `Source: ${question.source}`;
    contentDate.textContent = `Date: ${question.date}`;
    
    // Reset answer buttons
    answerBtns.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
        btn.disabled = false;
    });
}

// Handle Answer Selection
function selectAnswer(answer) {
    const question = quizData[currentQuestionIndex];
    const isCorrect = answer === question.answer;
    
    // Disable all buttons
    answerBtns.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.answer === answer) {
            btn.classList.add('selected');
            if (isCorrect) {
                btn.classList.add('correct');
                score++;
            } else {
                btn.classList.add('incorrect');
            }
        } else if (btn.dataset.answer === question.answer) {
            btn.classList.add('correct');
        }
    });
    
    // Store user answer
    userAnswers.push({
        questionId: question.id,
        userAnswer: answer,
        correctAnswer: question.answer,
        isCorrect: isCorrect
    });
    
    // Update score
    updateStats();
    
    // Show feedback after a short delay
    setTimeout(() => {
        showFeedback(question, answer, isCorrect);
    }, 1000);
}

// Show Feedback
function showFeedback(question, userAnswer, isCorrect) {
    // Update feedback content
    if (isCorrect) {
        feedbackIcon.innerHTML = '<i class="fas fa-check"></i>';
        feedbackTitle.textContent = 'Correct!';
        feedbackText.textContent = `Great job! You correctly identified this as ${question.answer === 'real' ? 'real' : 'AI-generated'} content.`;
        document.querySelector('.feedback-header').classList.remove('incorrect');
    } else {
        feedbackIcon.innerHTML = '<i class="fas fa-times"></i>';
        feedbackTitle.textContent = 'Incorrect';
        feedbackText.textContent = `Not quite right. This content is actually ${question.answer === 'real' ? 'real' : 'AI-generated'}.`;
        document.querySelector('.feedback-header').classList.add('incorrect');
    }
    
    explanationText.textContent = question.explanation;
    
    // Update tips
    tipsList.innerHTML = '';
    question.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
    
    showScreen(feedbackScreen);
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        showScreen(questionScreen);
        loadQuestion();
    } else {
        showResults();
    }
}

// Skip Question
function skipQuestion() {
    skippedQuestions++;
    userAnswers.push({
        questionId: quizData[currentQuestionIndex].id,
        userAnswer: 'skipped',
        correctAnswer: quizData[currentQuestionIndex].answer,
        isCorrect: false
    });
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    const totalQuestions = quizData.length;
    const correctAnswers = score;
    const incorrectAnswers = totalQuestions - correctAnswers - skippedQuestions;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Update results
    finalScoreEl.textContent = correctAnswers;
    scorePercentageEl.textContent = `${percentage}%`;
    correctAnswersEl.textContent = correctAnswers;
    incorrectAnswersEl.textContent = incorrectAnswers;
    skippedQuestionsEl.textContent = skippedQuestions;
    
    // Set performance rating
    let ratingText = '';
    let stars = 0;
    
    if (percentage >= 90) {
        ratingText = 'Expert Level';
        stars = 5;
    } else if (percentage >= 80) {
        ratingText = 'Advanced Level';
        stars = 4;
    } else if (percentage >= 70) {
        ratingText = 'Intermediate Level';
        stars = 3;
    } else if (percentage >= 60) {
        ratingText = 'Beginner Level';
        stars = 2;
    } else {
        ratingText = 'Needs Practice';
        stars = 1;
    }
    
    document.querySelector('.rating-text').textContent = ratingText;
    
    const starsContainer = document.querySelector('.rating-stars');
    starsContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('i');
        star.className = 'fas fa-star';
        if (i < stars) {
            star.style.color = '#FFD700';
        } else {
            star.style.color = '#e5e7eb';
        }
        starsContainer.appendChild(star);
    }
    
    showScreen(resultsScreen);
}

// Retake Quiz
function retakeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    skippedQuestions = 0;
    
    updateStats();
    showScreen(questionScreen);
    loadQuestion();
}

// View Answers
function viewAnswers() {
    // This would typically show a detailed review of all answers
    alert('Answer review feature would show detailed analysis of each question here!');
}

// Update Stats
function updateStats() {
    scoreEl.textContent = score;
}

// Update Progress
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// Show Screen
function showScreen(screen) {
    [startScreen, questionScreen, feedbackScreen, resultsScreen].forEach(s => {
        s.classList.remove('active');
    });
    screen.classList.add('active');
}

// Event Listeners
startQuizBtn.addEventListener('click', startQuiz);

answerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        selectAnswer(btn.dataset.answer);
    });
});

skipQuestionBtn.addEventListener('click', skipQuestion);
nextQuestionBtn.addEventListener('click', nextQuestion);
retakeQuizBtn.addEventListener('click', retakeQuiz);
viewAnswersBtn.addEventListener('click', viewAnswers);

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (questionScreen.classList.contains('active')) {
        if (e.key === '1') {
            selectAnswer('real');
        } else if (e.key === '2') {
            selectAnswer('deepfake');
        } else if (e.key === ' ') {
            e.preventDefault();
            skipQuestion();
        }
    } else if (feedbackScreen.classList.contains('active')) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            nextQuestion();
        }
    }
});

console.log('Quiz functionality loaded successfully!'); 