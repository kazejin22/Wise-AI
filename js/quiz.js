// Quiz Data - A total of 15 questions
const fullQuizData = [
    {
        id: 1,
        type: 'media',
        mediaType: 'image',
        content: 'https://cdn.pixabay.com/photo/2019/07/04/10/43/face-4316040_1280.jpg',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'deepfake',
        explanation: 'Gambar ini memiliki tekstur kulit yang terlalu mulus dan tidak realistis, serta simetri wajah yang terlalu sempurna. Ini adalah tanda umum dari konten yang dihasilkan AI.',
        tips: ['Kulit terlalu halus atau seperti plastik', 'Simetri wajah yang tidak wajar', 'Rambut dan telinga yang kabur atau aneh'],
        source: 'AI Generated',
        date: '2025'
    },
    {
        id: 2,
        type: 'media',
        mediaType: 'video',
        content: 'https://assets.mixkit.co/videos/preview/mixkit-womans-face-close-up-165-large.mp4',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'real',
        explanation: 'Video ini menunjukkan gerakan bibir dan ekspresi wajah yang sangat natural. Sinkronisasi audio-visualnya sempurna, dan tidak ada glitch visual yang terlihat.',
        tips: ['Sinkronisasi audio-visual yang sempurna', 'Ekspresi wajah yang alami', 'Tidak ada distorsi atau glitch di wajah'],
        source: 'Public Domain',
        date: '2025'
    },
    {
        id: 3,
        type: 'media',
        mediaType: 'image',
        content: 'https://cdn.pixabay.com/photo/2019/08/21/11/47/human-4420800_1280.jpg',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'deepfake',
        explanation: 'Perhatikan bagaimana pencahayaan pada wajah tidak konsisten dengan sumber cahaya di latar belakang. Ini adalah artefak pencahayaan yang sering muncul pada deepfake.',
        tips: ['Bayangan yang tidak wajar', 'Cahaya yang tidak sesuai dengan sumbernya', 'Inkonsistensi warna dan temperatur cahaya'],
        source: 'AI Generated',
        date: '2025'
    },
    {
        id: 4,
        type: 'media',
        mediaType: 'image',
        content: 'https://cdn.pixabay.com/photo/2020/06/10/01/29/man-5280327_1280.jpg',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'real',
        explanation: "Mata pada gambar ini berkedip dengan pola yang tidak teratur dan alami. Selain itu, ada pantulan cahaya yang realistis di dalam mata.",
        tips: ["Pola kedipan mata yang tidak teratur", "Pantulan cahaya yang realistis", "Tidak ada 'stare' atau tatapan kaku"],
        source: 'Associated Press',
        date: '2025'
    },
    {
        id: 5,
        type: 'media',
        mediaType: 'video',
        content: 'https://assets.mixkit.co/videos/preview/mixkit-a-man-with-a-blue-and-red-background-1563-large.mp4',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'deepfake',
        explanation: "Video ini menunjukkan ekspresi wajah yang kaku atau robotik. Gerakan wajah tidak mengalir secara natural dan terlihat seperti 'topeng'.",
        tips: ['Ekspresi wajah yang kaku dan tidak alami', 'Kurangnya gerakan mikro pada wajah', 'Perubahan ekspresi yang tiba-tiba'],
        source: 'AI Generated',
        date: '2025'
    },
    {
        id: 6,
        type: 'media',
        mediaType: 'image',
        content: 'https://cdn.pixabay.com/photo/2021/04/10/22/08/ai-6168581_1280.png',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'deepfake',
        explanation: 'Jari tangan dan anggota tubuh yang aneh (jumlah jari tidak normal, jari terlalu panjang) adalah salah satu ciri deepfake yang paling sering gagal direplikasi.',
        tips: ['Jumlah jari tidak normal', 'Bentuk jari aneh atau distorsi', 'Proporsi tubuh yang tidak realistis'],
        source: 'AI Generated',
        date: '2025'
    },
    {
        id: 7,
        type: 'media',
        mediaType: 'image',
        content: 'https://cdn.pixabay.com/photo/2016/11/14/19/27/people-1824107_1280.jpg',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'real',
        explanation: 'Latar belakang pada foto ini tampak koheren dan logis. Tidak ada distorsi atau artefak yang membuat latar belakang terlihat seperti lukisan.',
        tips: ['Latar belakang yang logis dan jelas', 'Tidak ada elemen yang kabur atau aneh', 'Interaksi subjek dengan lingkungan yang realistis'],
        source: 'Getty Images',
        date: '2025'
    },
    {
        id: 8,
        type: 'media',
        mediaType: 'video',
        content: 'https://assets.mixkit.co/videos/preview/mixkit-a-smiling-girl-1809-large.mp4',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'real',
        explanation: 'Video ini menunjukkan interaksi yang natural antara subjek dan lingkungan. Gerakan dan bayangan yang dihasilkan sangat konsisten.',
        tips: ['Gerakan subjek yang halus dan natural', 'Bayangan yang konsisten', 'Interaksi dengan objek lain yang logis'],
        source: 'Public Domain',
        date: '2025'
    },
    {
        id: 9,
        type: 'media',
        mediaType: 'image',
        content: 'https://cdn.pixabay.com/photo/2021/02/08/11/04/woman-5994270_1280.jpg',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'deepfake',
        explanation: 'Perhatikan bayangan pada wajah yang tidak sesuai dengan arah sumber cahaya utama. Ini adalah ketidakcocokan yang sering terjadi pada konten deepfake.',
        tips: ['Arah bayangan yang tidak logis', 'Bayangan terlalu tajam atau terlalu halus', 'Adanya bayangan yang seharusnya tidak ada'],
        source: 'AI Generated',
        date: '2025'
    },
    {
        id: 10,
        type: 'media',
        mediaType: 'image',
        content: 'https://cdn.pixabay.com/photo/2022/10/25/11/48/ai-generated-7546059_1280.jpg',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'deepfake',
        explanation: 'Gigi pada foto ini terlihat tidak beraturan, berdistorsi, atau memiliki bentuk aneh. Algoritma AI sering kesulitan mereplikasi detail kecil seperti gigi.',
        tips: ['Gigi yang bentuknya tidak normal', 'Gigi yang terlalu putih atau transparan', 'Jumlah gigi yang aneh'],
        source: 'AI Generated',
        date: '2025'
    },
    {
        id: 11,
        type: 'media',
        mediaType: 'video',
        content: 'https://assets.mixkit.co/videos/preview/mixkit-a-business-man-in-a-suit-walking-down-the-stairs-33512-large.mp4',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'real',
        explanation: 'Video ini adalah cuplikan berita asli. Gerakan wajah, audio, dan pencahayaan sangat sinkron dan natural, tanpa adanya artefak digital.',
        tips: ['Gerakan wajah yang mengalir', 'Sinkronisasi bibir dan suara yang akurat', 'Kualitas video yang konsisten'],
        source: 'Public Domain',
        date: '2025'
    },
    {
        id: 12,
        type: 'media',
        mediaType: 'image',
        content: 'https://cdn.pixabay.com/photo/2023/11/24/00/36/ai-generated-8399587_1280.jpg',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'deepfake',
        explanation: "Terdapat distorsi atau 'glitch' di pinggir wajah, terutama di bagian rambut dan leher. Ini terjadi karena algoritma kesulitan 'menjahit' wajah palsu ke tubuh yang asli.",
        tips: ['Garis pinggir wajah yang tidak jelas', 'Distorsi di sekitar rambut atau leher', 'Perbedaan warna yang aneh'],
        source: 'AI Generated',
        date: '2025'
    },
    {
        id: 13,
        type: 'media',
        mediaType: 'image',
        content: 'https://cdn.pixabay.com/photo/2023/06/15/22/01/ai-generated-8065555_1280.jpg',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'deepfake',
        explanation: 'Latar belakang pada gambar ini terlihat kabur dan memiliki pola-pola aneh yang tidak logis. Ini adalah tanda bahwa latar belakang juga dihasilkan oleh AI.',
        tips: ['Pola yang tidak beraturan pada latar belakang', 'Distorsi pada objek yang jauh', 'Latar belakang terlihat seperti lukisan'],
        source: 'AI Generated',
        date: '2025'
    },
    {
        id: 14,
        type: 'media',
        mediaType: 'video',
        content: 'https://assets.mixkit.co/videos/preview/mixkit-a-woman-talking-on-the-phone-in-a-cafe-35496-large.mp4',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'real',
        explanation: 'Kualitas video ini terlihat alami dengan pencahayaan yang konsisten dan gerakan tubuh yang mulus. Tidak ada tanda-tanda manipulasi digital.',
        tips: ['Pergerakan yang halus dan natural', 'Pencahayaan yang konsisten', 'Tidak ada perubahan kualitas yang tiba-tiba'],
        source: 'Public Domain',
        date: '2025'
    },
    {
        id: 15,
        type: 'media',
        mediaType: 'image',
        content: 'https://cdn.pixabay.com/photo/2017/08/07/19/23/people-2607872_1280.jpg',
        questionText: 'Is this content real or AI-generated?',
        answerOptions: [
            { text: 'Real', value: 'real' },
            { text: 'Deepfake', value: 'deepfake' }
        ],
        correctAnswer: 'real',
        explanation: 'Gambar ini adalah asli karena memiliki ketidaksempurnaan yang alami seperti pori-pori kulit, kerutan halus, dan tekstur rambut yang realistis, yang sulit direplikasi oleh AI.',
        tips: ['Adanya ketidaksempurnaan alami', 'Tekstur kulit yang realistis', 'Detail yang jelas pada rambut'],
        source: 'Reuters',
        date: '2025'
    },
    // New Questions added here
    {
        id: 16,
        type: 'general',
        questionText: 'Apa itu Machine Learning (ML)?',
        answerOptions: [
            { text: 'A. Kemampuan komputer untuk membuat keputusan sendiri', value: 'A' },
            { text: 'B. Algoritma yang memungkinkan komputer belajar dari data', value: 'B' },
            { text: 'C. Sub-bidang AI yang fokus pada robotika', value: 'C' },
            { text: 'D. Proses menghasilkan gambar dan video palsu', value: 'D' }
        ],
        correctAnswer: 'B',
        explanation: 'Machine Learning adalah sub-bidang AI yang berfokus pada pengembangan algoritma yang dapat "belajar" dan meningkatkan kinerjanya seiring waktu dengan mengeksposnya pada data.'
    },
    {
        id: 17,
        type: 'general',
        questionText: 'Teknologi AI apa yang digunakan oleh asisten virtual seperti Siri dan Google Assistant?',
        answerOptions: [
            { text: 'A. Computer Vision', value: 'A' },
            { text: 'B. Natural Language Processing (NLP)', value: 'B' },
            { text: 'C. Expert Systems', value: 'C' },
            { text: 'D. Reinforcement Learning', value: 'D' }
        ],
        correctAnswer: 'B',
        explanation: 'Natural Language Processing (NLP) adalah cabang AI yang memungkinkan komputer untuk memahami, menginterpretasi, dan menghasilkan bahasa manusia.'
    },
    {
        id: 18,
        type: 'general',
        questionText: 'Siapa yang dianggap sebagai "bapak" dari kecerdasan buatan?',
        answerOptions: [
            { text: 'A. Bill Gates', value: 'A' },
            { text: 'B. Alan Turing', value: 'B' },
            { text: 'C. John McCarthy', value: 'C' },
            { text: 'D. Stephen Hawking', value: 'D' }
        ],
        correctAnswer: 'C',
        explanation: 'John McCarthy adalah seorang ilmuwan komputer Amerika yang menciptakan istilah "kecerdasan buatan" pada tahun 1956 dan merupakan salah satu pendiri bidang tersebut.'
    },
    {
        id: 19,
        type: 'general',
        questionText: 'Apa perbedaan utama antara AI Kuat (Strong AI) dan AI Lemah (Weak AI)?',
        answerOptions: [
            { text: 'A. AI Kuat memiliki kesadaran, AI Lemah tidak', value: 'A' },
            { text: 'B. AI Kuat hanya bisa memecahkan satu masalah, AI Lemah banyak masalah', value: 'B' },
            { text: 'C. AI Kuat menggunakan internet, AI Lemah tidak', value: 'C' },
            { text: 'D. AI Kuat lebih cepat, AI Lemah lebih lambat', value: 'D' }
        ],
        correctAnswer: 'A',
        explanation: 'AI Kuat (juga dikenal sebagai AGI atau Artificial General Intelligence) adalah AI teoretis yang memiliki kesadaran dan kemampuan kognitif layaknya manusia, sedangkan AI Lemah (ANI) adalah AI yang dirancang untuk satu tugas spesifik.'
    },
    {
        id: 20,
        type: 'general',
        questionText: 'Apa nama jaringan saraf tiruan yang meniru cara kerja otak manusia?',
        answerOptions: [
            { text: 'A. Neural Networks', value: 'A' },
            { text: 'B. Data Mining', value: 'B' },
            { text: 'C. Cloud Computing', value: 'C' },
            { text: 'D. Quantum Computing', value: 'D' }
        ],
        correctAnswer: 'A',
        explanation: 'Neural Networks (Jaringan Saraf Tiruan) adalah model komputasi yang terinspirasi oleh struktur otak manusia, digunakan untuk mengenali pola dan memecahkan masalah kompleks.'
    },
    {
        id: 21,
        type: 'general',
        questionText: 'Dalam Deep Learning, apa kepanjangan dari CNN?',
        answerOptions: [
            { text: 'A. Creative Neural Network', value: 'A' },
            { text: 'B. Convolutional Neural Network', value: 'B' },
            { text: 'C. Computerized Network Node', value: 'C' },
            { text: 'D. Comprehensive Neural Navigation', value: 'D' }
        ],
        correctAnswer: 'B',
        explanation: 'Convolutional Neural Network (CNN) adalah jenis Neural Network yang sangat efektif untuk tugas-tugas yang berkaitan dengan penglihatan komputer (Computer Vision), seperti pengenalan gambar.'
    },
    {
        id: 22,
        type: 'general',
        questionText: 'Apa tujuan utama dari algoritma Reinforcement Learning?',
        answerOptions: [
            { text: 'A. Mengklasifikasikan data', value: 'A' },
            { text: 'B. Memprediksi hasil di masa depan', value: 'B' },
            { text: 'C. Mencari jalur terpendek', value: 'C' },
            { text: 'D. Belajar dari interaksi dengan lingkungan melalui reward dan penalty', value: 'D' }
        ],
        correctAnswer: 'D',
        explanation: 'Reinforcement Learning adalah cabang AI di mana sebuah agen belajar untuk membuat keputusan yang optimal dengan berinteraksi dengan lingkungannya dan menerima umpan balik berupa reward atau penalty.'
    },
    {
        id: 23,
        type: 'general',
        questionText: 'Apa yang dimaksud dengan Big Data dalam konteks AI?',
        answerOptions: [
            { text: 'A. Basis data yang sangat besar', value: 'A' },
            { text: 'B. Data yang kompleks dan bervolume tinggi yang sulit diproses oleh perangkat lunak tradisional', value: 'B' },
            { text: 'C. Data yang digunakan untuk melatih model AI', value: 'C' },
            { text: 'D. Kumpulan data pribadi', value: 'D' }
        ],
        correctAnswer: 'B',
        explanation: 'Big Data mengacu pada volume data yang sangat besar dan kompleks yang tidak dapat dikelola atau diproses secara efektif menggunakan alat pemrosesan data tradisional.'
    },
    {
        id: 24,
        type: 'general',
        questionText: 'Contoh nyata dari "Computer Vision" adalah...',
        answerOptions: [
            { text: 'A. Deteksi spam di email', value: 'A' },
            { text: 'B. Rekomendasi film di Netflix', value: 'B' },
            { text: 'C. Pengenalan wajah di smartphone', value: 'C' },
            { text: 'D. Asisten suara di mobil', value: 'D' }
        ],
        correctAnswer: 'C',
        explanation: 'Computer Vision adalah bidang AI yang memungkinkan komputer untuk "melihat" dan menginterpretasikan informasi visual dari gambar dan video, seperti pengenalan wajah.'
    },
    {
        id: 25,
        type: 'general',
        questionText: 'Teknologi apa yang memungkinkan model AI seperti ChatGPT untuk menghasilkan teks yang koheren?',
        answerOptions: [
            { text: 'A. Generative Adversarial Networks (GANs)', value: 'A' },
            { text: 'B. Natural Language Understanding (NLU)', value: 'B' },
            { text: 'C. Large Language Models (LLMs)', value: 'C' },
            { text: 'D. Computer Vision', value: 'D' }
        ],
        correctAnswer: 'C',
        explanation: 'Large Language Models (LLMs) adalah model AI canggih yang dilatih dengan data teks dalam jumlah besar untuk memahami dan menghasilkan bahasa manusia.'
    }
];

let quizData;
const totalQuizQuestions = 10;

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
const reviewScreen = document.getElementById('reviewScreen');
const screens = document.querySelectorAll('.quiz-screen');

const startQuizBtn = document.getElementById('startQuiz');
const answerButtonsContainer = document.querySelector('.answer-buttons-container');
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

// Helper Functions
function showScreen(screenToShow) {
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    screenToShow.classList.add('active');
}

function getRandomQuestions(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
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
    quizData = getRandomQuestions(fullQuizData, totalQuizQuestions);
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
    
    if (correctAnswers >= 9) {
        ratingText = 'Expert Level';
        stars = 5;
    } else if (correctAnswers >= 7) {
        ratingText = 'Advanced Level';
        stars = 4;
    } else if (correctAnswers >= 5) {
        ratingText = 'Intermediate Level';
        stars = 3;
    } else if (correctAnswers >= 3) {
        ratingText = 'Beginner Level';
        stars = 2;
    } else {
        ratingText = 'Needs Practice';
        stars = 1;
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
document.addEventListener('DOMContentLoaded', initQuiz);

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const activeScreen = document.querySelector('.quiz-screen.active');
    
    if (activeScreen.id === 'questionScreen') {
        const keyMap = { 'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D' };
        if (keyMap[e.key]) {
            selectAnswer(keyMap[e.key]);
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