const memories = [
    {
        image: 'img/img1.jpg',
        caption: 'One year ago, our story began... and what a beautiful story it has been.'
    },
    {
        image: 'img/img2.jpg',
        caption: 'From the moment I met you, I knew my life would never be the same.'
    },
    {
        image: 'img/img3.jpg',
        caption: 'Your laugh became my favorite sound, your smile my favorite sight.'
    },
    {
        image: 'img/img4.jpg',
        caption: 'Every day with you feels like coming home.'
    },
    {
        image: 'img/img5.jpg',
        caption: 'You turned ordinary moments into extraordinary memories.'
    },
    {
        image: 'img/img6.jpg',
        caption: 'In your eyes, I found a love I never knew existed.'
    },
    {
        image: 'img/img7.jpg',
        caption: 'You make even the quiet moments feel magical.'
    },
    {
        image: 'img/img8.jpg',
        caption: 'With you, I discovered what it means to truly be understood.'
    },
    {
        image: 'img/img9.jpg',
        caption: 'Your hand in mine feels like the most natural thing in the world.'
    },
    {
        image: 'img/img10.jpg',
        caption: 'You taught me that love is found in the little things we do every day.'
    },
    {
        image: 'img/img11.jpg',
        caption: 'Our late-night conversations are my favorite adventures.'
    },
    {
        image: 'img/img12.jpg',
        caption: 'You turned my dreams into plans and my plans into beautiful reality.'
    },
    {
        image: 'img/img13.jpg',
        caption: 'In a world full of chaos, you are my peace.'
    },
    {
        image: 'img/img14.jpg',
        caption: 'Every song reminds me of you, every sunset makes me think of us.'
    },
    {
        image: 'img/img15.jpg',
        caption: 'You showed me that home isn\'t a place, it\'s a person.'
    },
    {
        image: 'img/img16.jpg',
        caption: 'Your love gave me courage I never knew I had.'
    },
    {
        image: 'img/img17.jpg',
        caption: 'With you, even rainy days feel like sunshine.'
    },
    {
        image: 'img/img18.jpg',
        caption: 'You are my favorite hello and my hardest goodbye.'
    },
    {
        image: 'img/img19.jpg',
        caption: 'In this year together, you\'ve become my best friend and my greatest love.'
    },
    {
        image: 'img/img20.jpg',
        caption: 'Your embrace is where I find my strength and my comfort.'
    },
    {
        image: 'img/img21.jpg',
        caption: 'You make me want to be better, to dream bigger, to love deeper.'
    },
    {
        image: 'img/img22.jpg',
        caption: 'Every memory we\'ve made is a treasure I hold close to my heart.'
    },
    {
        image: 'img/img23.jpg',
        caption: 'You understand me in ways I can\'t even explain to myself.'
    },
    {
        image: 'img/img24.jpg',
        caption: 'Our silly moments together are just as precious as our serious ones.'
    },
    {
        image: 'img/img25.jpg',
        caption: 'You are the reason I believe in forever.'
    },
    {
        image: 'img/img26.jpg',
        caption: 'This first year has been everything I hoped for and so much more.'
    },
    {
        image: 'img/img27.jpg',
        caption: 'You make me feel loved in ways I never thought possible.'
    },
    {
        image: 'img/img28.jpg',
        caption: 'Through every high and low, you\'ve been my constant.'
    },
    {
        image: 'img/img29.jpg',
        caption: 'Your love is the greatest gift I\'ve ever received.'
    },
    {
        image: 'img/img30.jpg',
        caption: 'One year down, forever to go... and I can\'t wait for every moment.'
    },
    {
        image: 'img/img31.jpg',
        caption: 'Thank you for choosing me, for loving me, for being you.'
    },
    {
        image: 'img/img32.jpg',
        caption: 'This is just the beginning of our beautiful story.'
    },
    {
        image: 'img/img33.jpg',
        caption: 'Happy 1st Anniversary, my love. Here\'s to us, always and forever. ♡'
    }
];

let currentIndex = 0;
let typingInterval;
let isTyping = false;

const imageElement = document.getElementById('carousel-image');
const textElement = document.getElementById('typing-text');
const nextBtn = document.getElementById('next-btn');
const flipbookContainer = document.getElementById('flipbook-container');
const finalSection = document.getElementById('final-section');

// Music player elements
const audio = document.getElementById('background-music');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const vinylSpinner = document.getElementById('vinyl-spinner');
const needle = document.querySelector('.needle');
const progressFill = document.getElementById('progress-fill');
const progressHandle = document.getElementById('progress-handle');
const timeCurrent = document.getElementById('time-current');
const timeTotal = document.getElementById('time-total');
const progressBarWrapper = document.querySelector('.progress-bar-wrapper');

let isPlaying = false;

function typeText(text, callback) {
    if (isTyping) return;

    isTyping = true;
    textElement.textContent = '';
    textElement.classList.remove('typing-complete');

    let charIndex = 0;

    typingInterval = setInterval(() => {
        if (charIndex < text.length) {
            textElement.textContent += text[charIndex];
            charIndex++;
        } else {
            clearInterval(typingInterval);
            textElement.classList.add('typing-complete');
            isTyping = false;
            if (callback) callback();
        }
    }, 50);
}

function changeMemory() {
    if (isTyping) return;

    // Check if we're at the last image
    if (currentIndex === memories.length - 1) {
        // Fade out flipbook and show final message
        showFinalMessage();
        return;
    }

    currentIndex = (currentIndex + 1) % memories.length;

    imageElement.style.opacity = '0';

    setTimeout(() => {
        imageElement.src = memories[currentIndex].image;
        imageElement.style.opacity = '1';
        typeText(memories[currentIndex].caption);
    }, 500);
}

function showFinalMessage() {
    // Fade out the flipbook container
    flipbookContainer.classList.add('fade-out');
    
    // After fade out, show final section
    setTimeout(() => {
        finalSection.classList.add('visible');
    }, 1500);
}

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        vinylSpinner.classList.remove('spinning');
        needle.classList.remove('playing');
    } else {
        audio.play().catch(err => {
            console.log('Audio play failed:', err);
        });
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        vinylSpinner.classList.add('spinning');
        needle.classList.add('playing');
    }
    isPlaying = !isPlaying;
}

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function updateProgress() {
    if (audio.duration && !isNaN(audio.duration)) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = `${progress}%`;
        progressHandle.style.left = `${progress}%`;
        timeCurrent.textContent = formatTime(audio.currentTime);
    }
}

function setProgress(e) {
    const rect = progressBarWrapper.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * audio.duration;
    
    if (!isNaN(newTime)) {
        audio.currentTime = newTime;
    }
}

// Event Listeners
nextBtn.addEventListener('click', changeMemory);

playPauseBtn.addEventListener('click', togglePlayPause);

progressBarWrapper.addEventListener('click', setProgress);

audio.addEventListener('timeupdate', updateProgress);

audio.addEventListener('loadedmetadata', () => {
    timeTotal.textContent = formatTime(audio.duration);
    timeCurrent.textContent = formatTime(0);
});

audio.addEventListener('durationchange', () => {
    if (audio.duration && !isNaN(audio.duration)) {
        timeTotal.textContent = formatTime(audio.duration);
    }
});

// When audio ends, stop playing and reset controls
audio.addEventListener('ended', () => {
    isPlaying = false;
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    vinylSpinner.classList.remove('spinning');
    needle.classList.remove('playing');
    audio.currentTime = 0;
});

audio.addEventListener('canplay', () => {
    if (audio.duration && !isNaN(audio.duration)) {
        timeTotal.textContent = formatTime(audio.duration);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Enter') {
        changeMemory();
    }
    if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
    }
});

function preloadImages() {
    memories.forEach(memory => {
        const img = new Image();
        img.src = memory.image;
    });
}

// Initialize on page load
window.addEventListener('load', () => {

    preloadImages(); 
    // Reset everything on page load
    currentIndex = 0;
    isTyping = false;
    isPlaying = false;
    
    // Reset UI elements
    flipbookContainer.classList.remove('fade-out');
    finalSection.classList.remove('visible');
    imageElement.src = memories[0].image;
    imageElement.style.opacity = '1';
    
    // Start typing first caption
    setTimeout(() => {
        typeText(memories[0].caption);
    }, 500);
    
    // Initialize time displays
    timeCurrent.textContent = '0:00';
    if (audio.readyState >= 2) {
        timeTotal.textContent = formatTime(audio.duration);
    }
    
    // Reset audio
    audio.currentTime = 0;
    audio.pause();
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    vinylSpinner.classList.remove('spinning');
    needle.classList.remove('playing');
});