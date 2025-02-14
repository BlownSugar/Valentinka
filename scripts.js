
const lyrics = [
    { time: 0, text: "Кхм, кхм..", chorus: false },
    { time: 6, text: "...", chorus: false },
    { time: 15, text: "모든 건 너에게 달렸어\nВсё зависит от тебя", chorus: false },
    { time: 18, text: "난 지켜볼 수 밖에 없어\nМне остаётся только наблюдать", chorus: false },
    { time: 22, text: "끝이 날 건지 아닌지는\nБудет ли это концом или нет", chorus: false },
    { time: 25, text: "너의 말 한마디로 결정돼\nРешается одним твоим словом", chorus: false },
    { time: 29, text: "여태 받던 싸늘한 느낌\nХолодное чувство, которое я испытывал до сих пор", chorus: false },
    { time: 34, text: "그저 착각일지도\nМожет быть, это просто иллюзия", chorus: false },
    { time: 37, text: "여기서 알아야 갈 수 있어\nЯ должен понять это здесь, чтобы двигаться дальше", chorus: false },
    { time: 41, text: "Do you even love me now?\nТы вообще любишь меня сейчас?", chorus: false },
    { time: 45, text: "숨을 죽이고 너의 대답을 기다릴게\nЯ затаю дыхание и буду ждать твоего ответа", chorus: false },
    { time: 49, text: "턴을 너에게 넘긴 채로\nПередав ход тебе", chorus: false },
    { time: 52, text: "만약 아니라 하더라도 말해 줘\nДаже если это не так, скажи мне", chorus: false },
    { time: 56, text: "Baby, love me or leave me tonight", chorus: false },
    { time: 60, text: "So 대답해 줘 oh, oh, oh-oh-oh, oh, oh\nТак ответь мне oh, oh, oh-oh-oh, oh, oh", chorus: true },
    { time: 64, text: "숨김 없이 솔직하게\nБез утайки, честно", chorus: true },
    { time: 68, text: "So 대답해 줘 oh, oh, oh-oh-oh, oh, oh\nПожалуйста, ответь мне oh, oh, oh-oh-oh, oh, oh", chorus: true },
    { time: 72, text: "Baby, love me or leave me tonight", chorus: true },
    { time: 75, text: "So tell me now\nТак скажи мне сейчас", chorus: true },
    { time: 83, text: "So tell me now\nТак скажи мне сейчас", chorus: true },
    { time: 92, text: "꽤나 오랫동안 견뎠어\nЯ терпел довольно долго", chorus: true},
    { time: 97, text: "너의 차가운 눈빛과 말투 (눈빛과 말투)\nТвой холодный взгляд и тон (взгляд и тон)", chorus: false },
    { time: 100, text: "끝을 낼 건지 아닌지는 (끝을 낼 건지)\nБудет ли это концом или нет (будет ли это концом)", chorus: false },
    { time: 105, text: "이제 너에게 전부 달렸어 (달렸어)\nТеперь всё зависит от тебя (зависит)", chorus: false },
    { time: 108, text: "이미 멀어진 우리 사이\nМы уже отдалились друг от друга", chorus: false },
    { time: 112, text: "그저 오해일지도\nМожет быть, это просто недоразумение", chorus: false },
    { time: 115, text: "여기서 알아야 갈 수 있어\nЯ должен понять это здесь, чтобы двигаться дальше", chorus: false },
    { time: 120, text: "Do you even love me now?\nТы вообще любишь меня сейчас?", chorus: false },
    { time: 122, text: "숨을 죽이고 너의 대답을 기다릴게\nЯ затаю дыхание и буду ждать твоего ответа", chorus: true },
    { time: 127, text: "턴을 너에게 넘긴 채로\nПередав ход тебе", chorus: true },
    { time: 131, text: "만약 아니라 하더라도 말해 줘\nДаже если это не так, скажи мне", chorus: true },
    { time: 135, text: "Baby, love me or leave me tonight", chorus: true },
    { time: 138, text: "So 대답해 줘 oh, oh, oh-oh-oh, oh, oh\nТак ответь мне oh, oh, oh-oh-oh, oh, oh", chorus: true },
    { time: 142, text: "숨김 없이 솔직하게\nБез утайки, честно", chorus: true },
    { time: 146, text: "어서 대답해 줘 oh, oh, oh-oh-oh, oh, oh\nПожалуйста, ответь мне oh, oh, oh-oh-oh, oh, oh", chorus: true },
    { time: 150, text: "Baby, love me or leave me tonight", chorus: true },
    { time: 154, text: "알아 이미 너의 대답은, no\nЯ знаю, твой ответ уже 'нет'", chorus: false },
    { time: 157, text: "나도 알아 이미 안다고 알아도\nЯ тоже знаю, я уже знаю", chorus: false },
    { time: 161, text: "아직까진, I cannot give up on you\nДо сих пор я не могу сдаться на тебе", chorus: false },
    { time: 165, text: "너의 목소리로 듣기 전까지는\nПока не услышу твой голос", chorus: false },
    { time: 169, text: "Can't give up on you\nНе могу сдаться на тебе", chorus: false },
    { time: 172, text: "숨을 죽이고 너의 대답을 기다릴게\nЯ затаю дыхание и буду ждать твоего ответа", chorus: true },
    { time: 177, text: "턴을 너에게 넘긴 채로\nПередав ход тебе", chorus: true },
    { time: 180, text: "만약 아니라 하더라도 말해 줘\nДаже если это не так, скажи мне", chorus: true },
    { time: 184, text: "Baby, love me or leave me tonight", chorus: true },
    { time: 187, text: "So 대답해 줘 oh, oh, oh-oh-oh, oh, oh\nТак ответь мне oh, oh, oh-oh-oh, oh, oh", chorus: true },
    { time: 192, text: "숨김 없이 솔직하게\nБез утайки, честно", chorus: true },
    { time: 195, text: "어서 대답해 줘 oh, oh, oh-oh-oh, oh, oh\nПожалуйста, ответь мне oh, oh, oh-oh-oh, oh, oh", chorus: true },
    { time: 199, text: "Baby, love me or leave me tonight", chorus: true },
    { time: 203, text: "So tell me now\nТак скажи мне сейчас", chorus: true },
    ];

// Update lyrics display with smooth transitions
// Update the lyrics transition
function updateLyrics(time) {
    const currentLyric = lyrics.find(l => 
        time >= l.time && (!lyrics[lyrics.indexOf(l) + 1] || time < lyrics[lyrics.indexOf(l) + 1].time)
    );
    
    if (!currentLyric) return;

    const [koreanText, russianText] = currentLyric.text.split('\n');
    
    if (!activeLyric || currentLyric.time !== activeLyric.time) {
        // Fade out current lyrics
        originalLyrics.classList.remove('active');
        translatedLyrics.classList.remove('active');
        
        setTimeout(() => {
            originalLyrics.textContent = koreanText;
            translatedLyrics.textContent = russianText;
            
            // Force browser reflow
            void originalLyrics.offsetWidth;
            void translatedLyrics.offsetWidth;
            
            originalLyrics.classList.add('active');
            translatedLyrics.classList.add('active');
        }, 300);

        // Handle chorus sections with smooth transitions
        if (currentLyric.chorus && !lyricsContainer.classList.contains('top')) {
            // First move lyrics to top
            lyricsContainer.classList.remove('normal');
            lyricsContainer.classList.add('top');
            
            // Then show card after lyrics have moved
            setTimeout(() => {
                cardElement.classList.add('visible');
            }, 800);
        } else if (!currentLyric.chorus && lyricsContainer.classList.contains('top')) {
            // First hide card
            cardElement.classList.remove('visible');
            
            // Then move lyrics back to center
            setTimeout(() => {
                lyricsContainer.classList.remove('top');
                lyricsContainer.classList.add('normal');
            }, 1000);
        }
    }
    
    activeLyric = currentLyric;
}

// Your existing variable declarations remain the same
const music = document.getElementById('proposalMusic');
const originalLyrics = document.getElementById('original-lyrics');
const translatedLyrics = document.getElementById('translated-lyrics');
let activeLyric = null;
const cardElement = document.querySelector('.valentine-card');
const lyricsContainer = document.querySelector('.lyrics-container');

// Create floating hearts
function createHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    const heartCount = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        const hue = Math.random() * 40 + 330;
        const saturation = 70 + Math.random() * 30;
        const lightness = 60 + Math.random() * 20;
        heart.style.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        heartsContainer.appendChild(heart);
    }
}

// Modified card hover effect to work with new layout
/* Update the mouse move effect in your JavaScript */
function addCardHoverEffect() {
    const card = document.querySelector('.card');
    
    card.addEventListener('mousemove', (e) => {
        if (card.classList.contains('flipped')) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('flipped')) {
            card.style.transform = 'rotateX(0) rotateY(0)';
        }
    });
}

// Modified card click handler to check for buttons
function handleCardClick(event) {
    // Check if clicking on or inside a button
    if (event.target.closest('.valentine-button') || 
        event.target.classList.contains('valentine-button')) {
        event.stopPropagation();
        return;
    }
    
    const card = event.currentTarget;
    if (!card.classList.contains('flipped')) {
        card.classList.add('flipped');
        card.style.transform = 'rotateY(180deg)';
    }
}

// Modified celebration effect
function createCelebrationEffect() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'celebration-heart';
            heart.innerHTML = '♥';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = Math.random() * window.innerHeight + 'px';
            heart.style.setProperty('--angle', Math.random() * 360 + 'deg');
            heart.style.setProperty('--distance', Math.random() * 100 + 50 + 'px');
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 1000);
        }, i * 40);
    }
}

// Your existing updateLyrics function remains the same

// Modified initialization
async function init() {
    createHearts();
    addCardHoverEffect();
    
    lyricsContainer.classList.add('normal');
    
    const card = document.querySelector('.card');
    if (card) {
        card.addEventListener('click', handleCardClick);
    }
    
    try {
        await music.play();
        music.volume = 0.5;
    } catch (error) {
        console.log('Autoplay failed:', error);
        document.addEventListener('click', () => {
            music.play();
            music.volume = 0.5;
        }, { once: true });
    }

    let lastUpdate = 0;
    music.addEventListener('timeupdate', () => {
        const now = Date.now();
        if (now - lastUpdate > 200) {
            updateLyrics(music.currentTime);
            lastUpdate = now;
        }
    });
}

// Function to write to log file
async function logResponse(response) {
    try {
        const content = `User responded: ${response} at ${new Date().toISOString()}\n`;
        await window.fs.writeFile('log.txt', content, { flag: 'a' }); // 'a' flag to append
    } catch (error) {
        console.error('Error writing to log:', error);
    }
}

function createFirework(x, y) {
    const colors = [
        '#ff69b4', '#ff1493', '#ff8da1', '#ffc0cb', 
        '#ffb6c1', '#ff69b4', '#ff1493', '#ff8da1',
        '#ffd700', '#ff6347', '#ff00ff'
    ];
    
    const particleCount = 80; // More particles
    const spread = 100; // Wider spread
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 8 + Math.random() * 8;
        const hue = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.backgroundColor = hue;
        particle.style.boxShadow = `0 0 ${Math.random() * 3 + 2}px ${hue}`;
        
        const animation = particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * velocity * spread}px, 
                            ${Math.sin(angle) * velocity * spread}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1500 + Math.random() * 1000,
            easing: 'cubic-bezier(0, .9, .57, 1)',
            delay: Math.random() * 100
        });
        
        animation.onfinish = () => particle.remove();
    }

    // Add a bright flash effect
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.left = x + 'px';
    flash.style.top = y + 'px';
    flash.style.width = '10px';
    flash.style.height = '10px';
    flash.style.borderRadius = '50%';
    flash.style.backgroundColor = 'white';
    flash.style.boxShadow = '0 0 20px white';
    flash.style.zIndex = '1999';
    document.body.appendChild(flash);

    flash.animate([
        { transform: 'scale(1)', opacity: 1 },
        { transform: 'scale(20)', opacity: 0 }
    ], {
        duration: 500,
        easing: 'ease-out'
    }).onfinish = () => flash.remove();
}

function createHeartBurst(x, y) {
    const heartCount = 30;
    const spread = 100;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.color = '#ff69b4';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.zIndex = '2000';
        heart.style.pointerEvents = 'none';
        document.body.appendChild(heart);

        const angle = (Math.PI * 2 * i) / heartCount;
        const velocity = 4 + Math.random() * 4;

        heart.animate([
            {
                transform: 'translate(0, 0) scale(1) rotate(0deg)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * velocity * spread}px, 
                            ${Math.sin(angle) * velocity * spread}px) scale(0) rotate(${Math.random() * 360}deg)`,
                opacity: 0
            }
        ], {
            duration: 1500,
            easing: 'ease-out',
            delay: Math.random() * 200
        }).onfinish = () => heart.remove();
    }
}

function celebrationFireworks() {
    let count = 0;
    const maxFireworks = 15; // More fireworks
    const fadeOutDuration = 2000; // 2 seconds fade out
    
    // Add transitional overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'black';
    overlay.style.opacity = '0';
    overlay.style.zIndex = '9999';
    overlay.style.transition = 'opacity 2s';
    document.body.appendChild(overlay);
    
    const interval = setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.7);
        
        // Create both firework and heart burst at the same location
        createFirework(x, y);
        setTimeout(() => createHeartBurst(x, y), 200);
        
        count++;
        if (count >= maxFireworks) {
            clearInterval(interval);
            
            // Start fade out effect
            overlay.style.opacity = '1';
            
            setTimeout(() => {
                window.location.href = 'celebration.html';
            }, fadeOutDuration);
        }
    }, 300);
    
    // Add celebratory message
    const message = document.createElement('div');
    message.textContent = 'УРА!';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '4em';
    message.style.color = 'white';
    message.style.textShadow = '0 0 10px #ff69b4';
    message.style.zIndex = '1998';
    message.style.opacity = '0';
    document.body.appendChild(message);

    // Animate the message
    message.animate([
        { transform: 'translate(-50%, -50%) scale(0.5)', opacity: 0 },
        { transform: 'translate(-50%, -50%) scale(1.2)', opacity: 1 },
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 }
    ], {
        duration: 1000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'forwards'
    });
}

// Handle Valentine response
// Handle Valentine response
async function handleValentineResponse(accepted) {
    // Prevent any card flipping
    event.stopPropagation();
    
    try {
        await logResponse(accepted ? 'Yes' : 'No');
        
        if (accepted) {
            celebrationFireworks();
        } else {
            window.location.href = 'no.html';
        }
    } catch (error) {
        console.error('Error handling response:', error);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    init();
    
    // Add button event listeners
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    
    if (yesButton) {
        yesButton.addEventListener('click', (e) => {
            e.stopPropagation();
            handleValentineResponse(true);
        });
    }
    
    if (noButton) {
        noButton.addEventListener('click', (e) => {
            e.stopPropagation();
            handleValentineResponse(false);
        });
    }
});
