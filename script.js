/* ============================================
   Instagram Loading Page - JavaScript
   Dynamic animations, particles, and transitions
   ============================================ */

(function () {
    'use strict';

    // ---- Shared User Data ----
    const allUsers = {
        'your_story': {
            name: 'your_story', displayName: 'You', color: 'linear-gradient(135deg, #667eea, #764ba2)',
            bio: '✨ Living my best life\n📸 Photography enthusiast\n🌍 Explorer',
            posts: 42, followers: '1,247', following: 523,
            stories: [
                { gradient: 'linear-gradient(135deg, #667eea, #764ba2)', emoji: '📸', text: 'My new camera setup!', subtext: 'Finally upgraded 🎉' },
                { gradient: 'linear-gradient(135deg, #f093fb, #f5576c)', emoji: '🎵', text: 'Vibing to good music', subtext: 'What are you listening to?' },
            ],
            gridColors: ['#667eea', '#764ba2', '#f093fb', '#a18cd1', '#fbc2eb', '#667eea', '#8EC5FC', '#E0C3FC', '#D9AFD9']
        },
        'travel_vibes': {
            name: 'travel_vibes', displayName: 'Travel Vibes ✈️', color: '#E1306C',
            bio: '🌍 World traveler | 42 countries\n📸 Travel photographer\n✈️ Next stop: Iceland',
            posts: 286, followers: '52.3K', following: 891,
            stories: [
                { gradient: 'linear-gradient(135deg, #E1306C, #fd1d1d)', emoji: '🗼', text: 'Paris at sunset!', subtext: 'The Eiffel Tower never gets old' },
                { gradient: 'linear-gradient(135deg, #fcb045, #fd1d1d, #833ab4)', emoji: '🌅', text: 'Golden hour magic', subtext: 'Santorini, Greece' },
                { gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)', emoji: '🏖️', text: 'Beach vibes only', subtext: 'Bali, Indonesia' },
            ],
            gridColors: ['#E1306C', '#fd1d1d', '#fcb045', '#833ab4', '#E1306C', '#f77737', '#fd1d1d', '#833ab4', '#E1306C']
        },
        'food_diary': {
            name: 'food_diary', displayName: 'Food Diary 🍕', color: '#F77737',
            bio: '🍳 Home chef | Food photographer\n🍕 Pizza is life\n📍 NYC based',
            posts: 534, followers: '23.8K', following: 445,
            stories: [
                { gradient: 'linear-gradient(135deg, #F77737, #fcb045)', emoji: '🍰', text: 'Homemade cake!', subtext: 'Recipe in my latest post' },
                { gradient: 'linear-gradient(135deg, #f5576c, #ff6f61)', emoji: '🍝', text: 'Pasta night 🇮🇹', subtext: 'Carbonara from scratch' },
                { gradient: 'linear-gradient(135deg, #ffecd2, #fcb69f)', emoji: '☕', text: 'Morning coffee ritual', subtext: 'Pour over is the way' },
            ],
            gridColors: ['#F77737', '#fcb045', '#f5576c', '#ff6f61', '#ffecd2', '#F77737', '#fcb045', '#ffecd2', '#ff6f61']
        },
        'nature.pic': {
            name: 'nature.pic', displayName: 'Nature Photography 🌿', color: '#50C878',
            bio: '🌿 Nature lover | Wildlife photographer\n📷 Canon R5\n🏔️ Mountains > Beaches',
            posts: 198, followers: '89.1K', following: 312,
            stories: [
                { gradient: 'linear-gradient(135deg, #50C878, #43e97b)', emoji: '🦊', text: 'Fox spotted in the wild!', subtext: 'Early morning hike' },
                { gradient: 'linear-gradient(135deg, #0c3483, #a2b6df)', emoji: '🏔️', text: 'Mountain sunrise', subtext: 'Worth the 4am wake up' },
                { gradient: 'linear-gradient(135deg, #56ab2f, #a8e063)', emoji: '🌲', text: 'Forest therapy 🌲', subtext: 'Redwood National Park' },
            ],
            gridColors: ['#50C878', '#43e97b', '#0c3483', '#56ab2f', '#a8e063', '#50C878', '#38f9d7', '#43e97b', '#56ab2f']
        },
        'urban_art': {
            name: 'urban_art', displayName: 'Urban Art 🎨', color: '#833AB4',
            bio: '🎨 Street art curator\n🏙️ Cities are my canvas\n📸 Documenting urban culture',
            posts: 412, followers: '34.5K', following: 678,
            stories: [
                { gradient: 'linear-gradient(135deg, #833AB4, #C13584)', emoji: '🎨', text: 'New mural downtown!', subtext: 'Artist: @unknown_genius' },
                { gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)', emoji: '🖌️', text: 'Work in progress', subtext: 'Stay tuned for the reveal' },
            ],
            gridColors: ['#833AB4', '#C13584', '#a18cd1', '#fbc2eb', '#833AB4', '#5851DB', '#C13584', '#a18cd1', '#833AB4']
        },
        'sunset.love': {
            name: 'sunset.love', displayName: 'Sunset Lover 🌅', color: '#FD1D1D',
            bio: '🌅 Chasing sunsets worldwide\n📸 Golden hour photographer\n🧡 Warm tones only',
            posts: 321, followers: '67.4K', following: 234,
            stories: [
                { gradient: 'linear-gradient(135deg, #FD1D1D, #fcb045)', emoji: '🌅', text: 'Tonight\'s sunset!', subtext: 'California coast' },
                { gradient: 'linear-gradient(135deg, #f83600, #f9d423)', emoji: '🌇', text: 'City skyline at dusk', subtext: 'Manhattan views' },
                { gradient: 'linear-gradient(135deg, #ed4264, #ffedbc)', emoji: '☁️', text: 'Cotton candy skies', subtext: 'Nature\'s palette' },
            ],
            gridColors: ['#FD1D1D', '#fcb045', '#f83600', '#ed4264', '#ffedbc', '#FD1D1D', '#f9d423', '#f83600', '#fcb045']
        },
        'code_life': {
            name: 'code_life', displayName: 'Code Life 💻', color: '#405DE6',
            bio: '💻 Full-stack developer\n🚀 Building the future\n🐍 Python & JavaScript\n📍 San Francisco',
            posts: 156, followers: '12.4K', following: 567,
            stories: [
                { gradient: 'linear-gradient(135deg, #405DE6, #5851DB)', emoji: '💻', text: 'New project launched!', subtext: 'Link in bio 🔗' },
                { gradient: 'linear-gradient(135deg, #0f2027, #2c5364)', emoji: '🐛', text: 'Debugging at 3am', subtext: 'It was a missing semicolon 😤' },
            ],
            gridColors: ['#405DE6', '#5851DB', '#0f2027', '#2c5364', '#405DE6', '#667eea', '#5851DB', '#405DE6', '#2c5364']
        },
        'fit.goals': {
            name: 'fit.goals', displayName: 'Fitness Goals 💪', color: '#C13584',
            bio: '💪 Personal trainer\n🏋️ Transform your body\n🥗 Nutrition tips daily\n📍 LA, CA',
            posts: 678, followers: '145K', following: 345,
            stories: [
                { gradient: 'linear-gradient(135deg, #C13584, #E1306C)', emoji: '🏋️', text: 'Morning workout done!', subtext: 'Leg day 🦵💪' },
                { gradient: 'linear-gradient(135deg, #f093fb, #f5576c)', emoji: '🥗', text: 'Meal prep Sunday', subtext: 'Healthy eating made easy' },
                { gradient: 'linear-gradient(135deg, #667eea, #764ba2)', emoji: '🏃', text: 'New 5K record!', subtext: '22:34 — Personal best! 🎉' },
            ],
            gridColors: ['#C13584', '#E1306C', '#f093fb', '#f5576c', '#C13584', '#764ba2', '#E1306C', '#C13584', '#f093fb']
        },
        'music_hub': {
            name: 'music_hub', displayName: 'Music Hub 🎵', color: '#E95950',
            bio: '🎵 Music producer & DJ\n🎧 Beats & melodies\n🎹 Studio sessions daily\n🔊 SoundCloud linked below',
            posts: 234, followers: '78.2K', following: 456,
            stories: [
                { gradient: 'linear-gradient(135deg, #E95950, #ff6b6b)', emoji: '🎹', text: 'New track preview!', subtext: 'Dropping this Friday 🔥' },
                { gradient: 'linear-gradient(135deg, #4b6cb7, #182848)', emoji: '🎧', text: 'Studio vibes', subtext: 'Late night session' },
            ],
            gridColors: ['#E95950', '#ff6b6b', '#4b6cb7', '#182848', '#E95950', '#e44d26', '#ff6b6b', '#4b6cb7', '#E95950']
        },
        // Post users
        'explore.world': {
            name: 'explore.world', displayName: 'Explore World 🌎', color: '#E1306C',
            bio: '🌎 Travel & Explore\n📸 World through my lens\n✈️ 60+ countries',
            posts: 891, followers: '234K', following: 167,
            stories: [
                { gradient: 'linear-gradient(135deg, #667eea, #764ba2)', emoji: '🗼', text: 'Tokyo nights ✨', subtext: 'Shibuya crossing' },
            ],
            gridColors: ['#667eea', '#764ba2', '#f093fb', '#E1306C', '#667eea', '#a18cd1', '#764ba2', '#667eea', '#f093fb']
        },
        'digital.nomad': {
            name: 'digital.nomad', displayName: 'Digital Nomad 🌴', color: '#50C878',
            bio: '🌴 Work from anywhere\n💻 Remote life\n🌍 Currently: Bali',
            posts: 345, followers: '56.7K', following: 432,
            stories: [
                { gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)', emoji: '🌴', text: 'Office for today!', subtext: 'Beachside coworking' },
            ],
            gridColors: ['#43e97b', '#38f9d7', '#4facfe', '#50C878', '#43e97b', '#38f9d7', '#50C878', '#43e97b', '#4facfe']
        },
        'art.collective': {
            name: 'art.collective', displayName: 'Art Collective 🎨', color: '#833AB4',
            bio: '🎨 Contemporary art\n🖼️ Gallery exhibitions\n📍 NYC | London | Tokyo',
            posts: 567, followers: '123K', following: 289,
            stories: [
                { gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)', emoji: '🖼️', text: 'New exhibition!', subtext: 'Opening night' },
            ],
            gridColors: ['#a18cd1', '#fbc2eb', '#f093fb', '#833AB4', '#a18cd1', '#C13584', '#fbc2eb', '#a18cd1', '#833AB4']
        },
        'astro.lens': {
            name: 'astro.lens', displayName: 'Astro Lens 🌌', color: '#405DE6',
            bio: '🌌 Astrophotographer\n🔭 Chasing stars\n📷 Sony A7IV\n📍 Dark sky reserves',
            posts: 189, followers: '312K', following: 156,
            stories: [
                { gradient: 'linear-gradient(135deg, #0c3483, #a2b6df)', emoji: '🌌', text: 'Milky Way season!', subtext: 'Time to capture the cosmos' },
            ],
            gridColors: ['#0c3483', '#a2b6df', '#6b8dd6', '#405DE6', '#0c3483', '#182848', '#a2b6df', '#0c3483', '#6b8dd6']
        },
    };

    // ---- Story Viewer State ----
    let currentStoryUser = null;
    let currentSlideIndex = 0;
    let storyTimer = null;
    let storyProgressTimer = null;
    const STORY_DURATION = 5000; // 5 seconds per slide

    // ---- Particle System ----
    function createParticles() {
        const container = document.getElementById('particles');
        const colors = [
            'rgba(214, 41, 118, 0.6)',
            'rgba(150, 47, 191, 0.5)',
            'rgba(79, 91, 213, 0.5)',
            'rgba(250, 126, 30, 0.5)',
            'rgba(254, 218, 117, 0.4)',
        ];

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            const size = Math.random() * 6 + 2;
            const x = Math.random() * 100;
            const delay = Math.random() * 6;
            const duration = Math.random() * 4 + 4;
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}%;
                background: ${color};
                animation-delay: ${delay}s;
                animation-duration: ${duration}s;
                box-shadow: 0 0 ${size * 2}px ${color};
            `;

            container.appendChild(particle);
        }
    }

    // ---- Progress Bar Animation ----
    function animateProgressBar() {
        const progressBar = document.getElementById('progressBar');
        let progress = 0;
        const totalDuration = 4000;
        const interval = 30;
        const steps = totalDuration / interval;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            const t = step / steps;
            progress = easeInOutCubic(t) * 100;
            progressBar.style.width = progress + '%';

            if (step >= steps) {
                clearInterval(timer);
                progressBar.style.width = '100%';
                setTimeout(transitionToApp, 400);
            }
        }, interval);
    }

    function easeInOutCubic(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    // ---- Transition to Main App ----
    function transitionToApp() {
        const loadingScreen = document.getElementById('loadingScreen');
        const mainContent = document.getElementById('mainContent');

        loadingScreen.classList.add('fade-out');

        setTimeout(() => {
            mainContent.classList.add('visible');
            loadingScreen.style.display = 'none';
            document.body.style.overflow = 'auto';
            initMainContent();
        }, 800);
    }

    // ---- Main Content Initialization ----
    function initMainContent() {
        createStories();
        createPosts();
        addInteractivity();
    }

    // ---- Stories ----
    function createStories() {
        const storiesBar = document.getElementById('storiesBar');
        const storyUsers = [
            { name: 'travel_vibes', color: '#E1306C' },
            { name: 'food_diary', color: '#F77737' },
            { name: 'nature.pic', color: '#50C878' },
            { name: 'urban_art', color: '#833AB4' },
            { name: 'sunset.love', color: '#FD1D1D' },
            { name: 'code_life', color: '#405DE6' },
            { name: 'fit.goals', color: '#C13584' },
            { name: 'music_hub', color: '#E95950' },
        ];

        storyUsers.forEach((user, i) => {
            const story = document.createElement('div');
            story.className = 'story-item';
            story.style.animationDelay = `${i * 0.05}s`;
            story.dataset.username = user.name;
            story.innerHTML = `
                <div class="story-ring">
                    <div class="story-avatar" style="background: ${user.color};">
                        <span style="font-size: 18px; color: white; font-weight: 600;">
                            ${user.name.charAt(0).toUpperCase()}
                        </span>
                    </div>
                </div>
                <span class="story-name">${user.name}</span>
            `;
            // Click to open story
            story.addEventListener('click', () => openStoryViewer(user.name));
            storiesBar.appendChild(story);
        });

        // "Your story" click
        const yourStory = document.querySelector('.your-story');
        if (yourStory) {
            yourStory.addEventListener('click', () => openStoryViewer('your_story'));
        }
    }

    // ---- Posts ----
    function createPosts() {
        const feed = document.getElementById('feed');
        const posts = [
            {
                username: 'explore.world',
                location: 'Tokyo, Japan',
                avatarColor: '#E1306C',
                imageGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                likes: '12,847',
                caption: 'Lost in the neon lights of Shibuya ✨🗼',
                time: '2 hours ago'
            },
            {
                username: 'digital.nomad',
                location: 'Bali, Indonesia',
                avatarColor: '#50C878',
                imageGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 50%, #4facfe 100%)',
                likes: '8,234',
                caption: 'Another day in paradise 🌴☀️ Working from the most beautiful places on earth.',
                time: '5 hours ago'
            },
            {
                username: 'art.collective',
                location: 'New York, NY',
                avatarColor: '#833AB4',
                imageGradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 50%, #f093fb 100%)',
                likes: '23,591',
                caption: 'When creativity meets the streets 🎨🏙️',
                time: '8 hours ago'
            },
            {
                username: 'astro.lens',
                location: 'Iceland',
                avatarColor: '#405DE6',
                imageGradient: 'linear-gradient(135deg, #0c3483 0%, #a2b6df 50%, #6b8dd6 100%)',
                likes: '45,102',
                caption: 'Northern lights dancing across the sky 🌌✨ Nature\'s most spectacular show.',
                time: '12 hours ago'
            }
        ];

        posts.forEach((post, index) => {
            const postEl = document.createElement('div');
            postEl.className = 'post';
            postEl.style.animationDelay = `${index * 0.15}s`;

            postEl.innerHTML = `
                <div class="post-header">
                    <div class="post-avatar clickable-profile" data-username="${post.username}" style="background: ${post.avatarColor};"></div>
                    <div class="post-user-info">
                        <div class="post-username clickable-profile" data-username="${post.username}">${post.username}</div>
                        <div class="post-location">${post.location}</div>
                    </div>
                    <div class="post-more">•••</div>
                </div>
                <div class="post-image" style="background: ${post.imageGradient};">
                    <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
                        <svg width="80" height="80" viewBox="0 0 100 100" opacity="0.2">
                            <rect x="8" y="8" width="84" height="84" rx="22" ry="22"
                                  fill="none" stroke="white" stroke-width="4"/>
                            <circle cx="50" cy="50" r="20" fill="none" stroke="white" stroke-width="3.5"/>
                            <circle cx="73" cy="27" r="4.5" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div class="post-actions">
                    <div class="post-action heart-action" data-liked="false">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </div>
                    <div class="post-action">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                    </div>
                    <div class="post-action">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"/>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                    </div>
                    <div class="post-action bookmark">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                        </svg>
                    </div>
                </div>
                <div class="post-likes">${post.likes} likes</div>
                <div class="post-caption">
                    <span class="username clickable-profile" data-username="${post.username}">${post.username}</span>${post.caption}
                </div>
                <div class="post-time">${post.time}</div>
            `;

            feed.appendChild(postEl);
        });
    }

    // ---- Interactivity ----
    function addInteractivity() {
        // Double-tap like on images
        document.querySelectorAll('.post-image').forEach(img => {
            let lastTap = 0;
            img.addEventListener('click', (e) => {
                const now = Date.now();
                if (now - lastTap < 300) {
                    showHeartAnimation(e, img);
                    const post = img.closest('.post');
                    const heartBtn = post.querySelector('.heart-action');
                    toggleLike(heartBtn);
                }
                lastTap = now;
            });
        });

        // Heart button toggle
        document.querySelectorAll('.heart-action').forEach(btn => {
            btn.addEventListener('click', () => toggleLike(btn));
        });

        // Bookmark toggle
        document.querySelectorAll('.bookmark').forEach(btn => {
            btn.addEventListener('click', () => {
                const svg = btn.querySelector('svg');
                const isSaved = btn.dataset.saved === 'true';
                if (isSaved) {
                    svg.setAttribute('fill', 'none');
                    btn.dataset.saved = 'false';
                } else {
                    svg.setAttribute('fill', 'currentColor');
                    btn.dataset.saved = 'true';
                }
            });
        });

        // Clickable profiles — avatars and usernames
        document.querySelectorAll('.clickable-profile').forEach(el => {
            el.style.cursor = 'pointer';
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                const username = el.dataset.username;
                if (username && allUsers[username]) {
                    openProfile(username);
                }
            });
        });

        // Profile overlay — back button
        document.getElementById('profileBack').addEventListener('click', closeProfile);

        // Profile overlay — follow button
        document.getElementById('profileFollowBtn').addEventListener('click', function () {
            if (this.classList.contains('following')) {
                this.classList.remove('following');
                this.textContent = 'Follow';
            } else {
                this.classList.add('following');
                this.textContent = 'Following';
            }
        });

        // Profile overlay — message button opens chat
        document.querySelector('.message-btn').addEventListener('click', () => {
            if (currentProfileUser && currentProfileUser !== 'your_story') {
                const user = currentProfileUser;
                closeProfile();
                setTimeout(() => openChat(user), 380);
            }
        });

        // Story viewer — close
        document.getElementById('storyViewerClose').addEventListener('click', closeStoryViewer);
        document.getElementById('storyViewerBackdrop').addEventListener('click', closeStoryViewer);

        // Story viewer — navigation
        document.getElementById('storyNavPrev').addEventListener('click', prevStorySlide);
        document.getElementById('storyNavNext').addEventListener('click', nextStorySlide);

        // Story viewer — username click opens profile
        document.getElementById('storyViewerUser').addEventListener('click', () => {
            if (currentStoryUser) {
                closeStoryViewer();
                setTimeout(() => openProfile(currentStoryUser), 350);
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            const storyViewer = document.getElementById('storyViewer');
            const profileOverlay = document.getElementById('profileOverlay');
            const chatOverlay = document.getElementById('chatOverlay');

            if (chatOverlay.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeChat();
                }
                // Don't block Enter — it's used for sending
            } else if (storyViewer.classList.contains('active')) {
                if (e.key === 'ArrowRight' || e.key === ' ') {
                    e.preventDefault();
                    nextStorySlide();
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    prevStorySlide();
                } else if (e.key === 'Escape') {
                    closeStoryViewer();
                }
            } else if (profileOverlay.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeProfile();
                }
            }
        });

        // Bottom nav — Profile icon opens your profile
        document.getElementById('navProfile').addEventListener('click', () => {
            openProfile('your_story');
        });

        // DM icon opens chat with first post user
        document.getElementById('dmIcon').addEventListener('click', () => {
            openChat('explore.world');
        });

        // Chat — back button
        document.getElementById('chatBack').addEventListener('click', closeChat);

        // Chat — input & send
        const chatInput = document.getElementById('chatInput');
        const chatSendBtn = document.getElementById('chatSendBtn');

        chatInput.addEventListener('input', () => {
            chatSendBtn.classList.toggle('active', chatInput.value.trim().length > 0);
        });

        chatSendBtn.addEventListener('click', () => sendChatMessage());

        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && chatInput.value.trim()) {
                e.preventDefault();
                sendChatMessage();
            }
        });

        // Chat — clicking username opens their profile
        document.getElementById('chatUserInfo').addEventListener('click', () => {
            if (currentChatUser) {
                closeChat();
                setTimeout(() => openProfile(currentChatUser), 350);
            }
        });
    }

    // ==================================================
    // STORY VIEWER
    // ==================================================

    function openStoryViewer(username) {
        const user = allUsers[username];
        if (!user || !user.stories || user.stories.length === 0) return;

        currentStoryUser = username;
        currentSlideIndex = 0;

        const viewer = document.getElementById('storyViewer');
        const avatar = document.getElementById('storyViewerAvatar');
        const usernameEl = document.getElementById('storyViewerUsername');
        const content = document.getElementById('storyViewerContent');
        const progressBar = document.getElementById('storyProgressBar');

        // Set user info
        const bgColor = typeof user.color === 'string' && user.color.startsWith('linear') ? user.color : user.color;
        avatar.style.background = bgColor;
        usernameEl.textContent = user.name;

        // Build progress segments
        progressBar.innerHTML = '';
        user.stories.forEach((_, i) => {
            const seg = document.createElement('div');
            seg.className = 'story-progress-segment';
            seg.innerHTML = '<div class="story-progress-fill"></div>';
            progressBar.appendChild(seg);
        });

        // Build story slides
        content.innerHTML = '';
        user.stories.forEach((story, i) => {
            const slide = document.createElement('div');
            slide.className = 'story-slide' + (i === 0 ? ' active' : '');
            slide.style.background = story.gradient;
            slide.innerHTML = `
                <div class="story-slide-emoji">${story.emoji}</div>
                <div class="story-slide-text">${story.text}</div>
                <div class="story-slide-subtext">${story.subtext}</div>
            `;
            content.appendChild(slide);
        });

        // Show viewer
        viewer.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Start auto-advance
        startStoryTimer();
    }

    function closeStoryViewer() {
        const viewer = document.getElementById('storyViewer');
        viewer.classList.remove('active');
        document.body.style.overflow = 'auto';
        clearStoryTimers();
        currentStoryUser = null;
    }

    function showStorySlide(index) {
        const user = allUsers[currentStoryUser];
        if (!user) return;

        const slides = document.querySelectorAll('.story-slide');
        const fills = document.querySelectorAll('.story-progress-fill');

        // Clamp index
        if (index >= user.stories.length) {
            closeStoryViewer();
            return;
        }
        if (index < 0) index = 0;

        currentSlideIndex = index;

        // Update slides
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        // Update progress — completed, current, future
        fills.forEach((fill, i) => {
            fill.classList.remove('complete');
            if (i < index) {
                fill.classList.add('complete');
                fill.style.width = '100%';
            } else if (i === index) {
                fill.style.width = '0%';
            } else {
                fill.style.width = '0%';
            }
        });

        // Restart timer
        startStoryTimer();
    }

    function nextStorySlide() {
        showStorySlide(currentSlideIndex + 1);
    }

    function prevStorySlide() {
        showStorySlide(currentSlideIndex - 1);
    }

    function startStoryTimer() {
        clearStoryTimers();

        const fills = document.querySelectorAll('.story-progress-fill');
        const currentFill = fills[currentSlideIndex];
        if (!currentFill) return;

        let elapsed = 0;
        const interval = 50;

        storyProgressTimer = setInterval(() => {
            elapsed += interval;
            const pct = (elapsed / STORY_DURATION) * 100;
            currentFill.style.width = pct + '%';

            if (elapsed >= STORY_DURATION) {
                clearStoryTimers();
                currentFill.style.width = '100%';
                currentFill.classList.add('complete');
                nextStorySlide();
            }
        }, interval);
    }

    function clearStoryTimers() {
        if (storyTimer) { clearTimeout(storyTimer); storyTimer = null; }
        if (storyProgressTimer) { clearInterval(storyProgressTimer); storyProgressTimer = null; }
    }

    // ==================================================
    // PROFILE PAGE
    // ==================================================

    let currentProfileUser = null;

    function openProfile(username) {
        const user = allUsers[username];
        if (!user) return;

        currentProfileUser = username;

        const overlay = document.getElementById('profileOverlay');
        const headerUsername = document.getElementById('profileHeaderUsername');
        const avatarLarge = document.getElementById('profileAvatarLarge');
        const displayName = document.getElementById('profileDisplayName');
        const bioText = document.getElementById('profileBioText');
        const postsCount = document.getElementById('profilePosts');
        const followersCount = document.getElementById('profileFollowers');
        const followingCount = document.getElementById('profileFollowing');
        const grid = document.getElementById('profileGrid');
        const followBtn = document.getElementById('profileFollowBtn');

        // Set info
        headerUsername.textContent = user.name;
        displayName.textContent = user.displayName;
        bioText.textContent = user.bio;
        postsCount.textContent = user.posts;
        followersCount.textContent = user.followers;
        followingCount.textContent = user.following;

        // Avatar
        const bgColor = typeof user.color === 'string' && user.color.startsWith('linear') ? user.color : user.color;
        avatarLarge.style.background = bgColor;
        avatarLarge.innerHTML = `<span class="profile-avatar-letter">${user.name.charAt(0).toUpperCase()}</span>`;

        // Follow button state
        if (username === 'your_story') {
            followBtn.textContent = 'Edit Profile';
            followBtn.classList.remove('following');
            followBtn.style.background = 'var(--bg-card)';
            followBtn.style.color = 'var(--text-primary)';
            followBtn.style.border = '1px solid var(--border-color)';
            followBtn.style.animation = 'none';
        } else {
            followBtn.textContent = 'Follow';
            followBtn.classList.remove('following');
            followBtn.style.background = '';
            followBtn.style.color = '';
            followBtn.style.border = '';
            followBtn.style.animation = '';
        }

        // Build grid
        grid.innerHTML = '';
        const gridColors = user.gridColors || [];
        for (let i = 0; i < 9; i++) {
            const item = document.createElement('div');
            item.className = 'profile-grid-item';
            const c = gridColors[i] || '#333';
            item.style.background = c;

            // Random likes/comments for hover
            const likes = Math.floor(Math.random() * 5000) + 500;
            const comments = Math.floor(Math.random() * 200) + 10;

            item.innerHTML = `
                <svg width="40" height="40" viewBox="0 0 100 100" opacity="0.15">
                    <rect x="8" y="8" width="84" height="84" rx="22" ry="22"
                          fill="none" stroke="white" stroke-width="4"/>
                    <circle cx="50" cy="50" r="20" fill="none" stroke="white" stroke-width="3.5"/>
                    <circle cx="73" cy="27" r="4.5" fill="white"/>
                </svg>
                <div class="grid-overlay">
                    <div class="grid-overlay-stat">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                        ${likes.toLocaleString()}
                    </div>
                    <div class="grid-overlay-stat">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                        ${comments}
                    </div>
                </div>
            `;

            item.style.animationDelay = `${i * 0.05}s`;
            grid.appendChild(item);
        }

        // Animate stat numbers
        overlay.classList.add('active');
        overlay.scrollTop = 0;
        animateStatNumbers(postsCount, user.posts);
        animateStatNumbers(followersCount, user.followers);
        animateStatNumbers(followingCount, user.following);
    }

    function closeProfile() {
        const overlay = document.getElementById('profileOverlay');
        overlay.classList.remove('active');
        currentProfileUser = null;
    }

    function animateStatNumbers(el, target) {
        const targetStr = String(target);
        // If it has K or comma formatting, just set directly with a small delay
        el.textContent = '0';
        setTimeout(() => {
            el.textContent = targetStr;
            el.style.transform = 'scale(1.1)';
            setTimeout(() => { el.style.transform = ''; }, 200);
        }, 400);
    }

    // ---- Like & Heart Animations (unchanged) ----
    function toggleLike(btn) {
        const svg = btn.querySelector('svg');
        const isLiked = btn.dataset.liked === 'true';

        if (isLiked) {
            svg.setAttribute('fill', 'none');
            svg.style.color = '';
            btn.dataset.liked = 'false';
        } else {
            svg.setAttribute('fill', '#ED4956');
            svg.setAttribute('stroke', '#ED4956');
            svg.style.color = '#ED4956';
            btn.dataset.liked = 'true';
            btn.style.transform = 'scale(1.3)';
            setTimeout(() => btn.style.transform = '', 200);
        }
    }

    function showHeartAnimation(event, container) {
        const heart = document.createElement('div');
        heart.innerHTML = `
            <svg viewBox="0 0 24 24" width="80" height="80" fill="white" stroke="none">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
        `;
        heart.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            z-index: 10;
            pointer-events: none;
            animation: heartPop 0.8s ease-out forwards;
            filter: drop-shadow(0 0 20px rgba(255,255,255,0.5));
        `;

        if (!document.getElementById('heartPopStyle')) {
            const style = document.createElement('style');
            style.id = 'heartPopStyle';
            style.textContent = `
                @keyframes heartPop {
                    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
                    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
                    100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        container.appendChild(heart);
        setTimeout(() => heart.remove(), 900);
    }

    // ==================================================
    // CHAT SYSTEM
    // ==================================================

    let currentChatUser = null;
    const chatHistories = {}; // per-user chat history

    // Per-user personality responses
    const userResponses = {
        'travel_vibes': {
            greetings: ["Hey traveler! 🌍 What's up?", "Hiii! Just got back from an amazing trip! ✈️", "Yo! Planning your next adventure? 🗺️"],
            reactions: ["That's so cool! Reminds me of my trip to Bali! 🌴", "Absolutely love that energy! 🔥", "You should totally come with me next time! ✈️"],
            questions: ["Have you ever been to Japan? It's AMAZING 🇯🇵", "What's your dream travel destination? 🤔", "Do you prefer mountains or beaches? 🏔️🏖️"],
            keywords: {
                'travel': ["OMG yes! Travel is literally my life! Where do you want to go? 🌍", "I've been to 42 countries and counting! 🗺️"],
                'beach': ["Beach vibes are the BEST! Bali has the most incredible beaches 🏖️", "I could live on the beach forever honestly 🌊"],
                'mountain': ["Mountain sunrises hit different! 🏔️ Have you hiked the Alps?", "I just did Kilimanjaro last month! Insane views 🗻"],
                'food': ["Street food while traveling is the best part! 🍜", "I had the most amazing ramen in Tokyo! 🍜"],
                'photo': ["Travel photography is my passion! 📸 Want to see my latest shots?", "Golden hour shots while traveling >>> everything else 🌅"],
                'hello': ["Hey there! 👋 Ready for adventure?", "Hiiii! So good to hear from you! 🌟"],
                'hi': ["Hey! 👋 What's up?", "Hiii! How's it going? 🌞"],
                'how': ["I'm great! Just planning my next trip to Iceland! 🇮🇸", "Living my best life, one country at a time! ✈️"],
            },
            fallbacks: ["That's awesome! 🙌", "So true! Life is all about experiences 🌟", "Haha love that! 😄", "You're so right! 💯", "Tell me more! I'm curious 👀", "That reminds me of when I was in Thailand! 🇹🇭"]
        },
        'food_diary': {
            greetings: ["Hey foodie! 🍕 What have you been cooking?", "Hii! Just made the most amazing pasta! 🍝", "Welcome to my kitchen! 🍳 What's cooking?"],
            reactions: ["Yummm! That sounds delicious! 😋", "I need that recipe ASAP! 📝", "My mouth is watering just thinking about it! 🤤"],
            questions: ["What's your favorite cuisine? 🤔", "Have you tried making sourdough? It's life-changing! 🍞", "Do you cook or are you more of a takeout person? 🥡"],
            keywords: {
                'cook': ["I LOVE cooking! Let me share my secret carbonara recipe 🍝", "Cooking is like therapy, isn't it? 🍳"],
                'pizza': ["Pizza is literally my love language 🍕💕", "I make homemade pizza every Friday! The dough recipe took years to perfect 🍕"],
                'recipe': ["I just posted a new recipe on my page! Check it out 📝", "My grandma's secret recipes are the best! Want one? 👵"],
                'hungry': ["Omg same! Let me whip something up real quick 🍳", "Being hungry is the worst! Here, have a virtual cookie 🍪"],
                'hello': ["Hey! 👋 Hope you're hungry! 😄", "Hiii welcome! 🍕"],
                'hi': ["Hey foodie! 🍳 What's on the menu today?", "Hii! 🥘 So good to chat!"],
                'how': ["I'm great! Just finished an amazing meal 😋", "Doing good! Testing a new recipe today 🧑‍🍳"],
            },
            fallbacks: ["That's cheesy and I love it! 🧀", "You're the chef of your own life! 👨‍🍳", "Haha love that! 😄", "Spill the tea! ☕", "That's as sweet as chocolate cake! 🍫", "YESSS 100%! 🙌"]
        },
        'nature.pic': {
            greetings: ["Hey nature lover! 🌿 Seen any cool wildlife lately?", "Hi! Just got back from a hike! 🥾", "Hello! The outdoors is calling! 🏕️"],
            reactions: ["That's beautiful, just like nature! 🌸", "Nature approves! 🌿✨", "Pure vibes! Like a forest breeze 🌲"],
            questions: ["Have you ever seen the northern lights? 🌌", "What's your favorite animal to photograph? 📷", "Do you prefer forests or oceans? 🌊🌲"],
            keywords: {
                'nature': ["Nature heals everything 🌿 I spend every weekend outdoors", "There's nothing more peaceful than being in nature 🌸"],
                'animal': ["I photographed a fox family last week! So cute 🦊", "Wildlife photography requires so much patience but it's worth it 📸"],
                'hike': ["Hiking is the best! What's your favorite trail? 🥾", "I just did a 15-mile hike and the views were INSANE 🏔️"],
                'photo': ["Golden hour in nature is absolutely magical 📸✨", "I shoot with a Canon R5 - it's perfect for wildlife 📷"],
                'hello': ["Hey there! 🌿 Welcome to the wild side!", "Hi! 🌳 So good to connect!"],
                'hi': ["Hey! 🦊 How's it going?", "Hi there! 🌸 Nature says hello!"],
                'how': ["I'm great! Just got back from the Redwoods 🌲", "Doing awesome! Spotted a deer this morning 🦌"],
            },
            fallbacks: ["That's wild! 🌿", "Nature would approve of that 🌸", "So true! 🙌", "Haha that's awesome! 😄", "Love your energy! 🌟", "Like a breath of fresh air! 💨"]
        },
        'urban_art': {
            greetings: ["Hey creative soul! 🎨", "Yo! Just found an insane mural downtown! 🖌️", "What's up! The streets are my gallery! 🏙️"],
            reactions: ["That's art! 🎨", "Pure creative genius! 🖌️", "You've got the vision! 👁️"],
            questions: ["Have you seen the new Banksy? 🤯", "What's your favorite art style? 🎨", "Ever tried spray painting? It's addictive! 🖌️"],
            keywords: {
                'art': ["Art is everywhere if you know where to look! 🎨", "I believe every wall is a canvas 🖌️"],
                'paint': ["Painting is pure freedom of expression 🎨", "I started with spray cans, now I do everything! 🖌️"],
                'create': ["Creativity is intelligence having fun! 🧠✨", "Create every day, that's my motto! 🎨"],
                'hello': ["Hey! 🎨 Welcome to the art side!", "Yo! 🖌️ Great to hear from you!"],
                'hi': ["Hey creative! 🎨", "Yooo! 🖌️ What's good?"],
                'how': ["I'm great! Working on a new mural! 🖌️", "Doing awesome! Just finished a piece 🎨"],
            },
            fallbacks: ["That's a masterpiece of a thought! 🎨", "You're speaking my language! 🖌️", "Pure art! 💯", "That's straight fire! 🔥", "Creative minds think alike! 🧠", "Love that perspective! 👁️"]
        },
        'code_life': {
            greetings: ["Hey dev! 💻 What are you building?", "console.log('Hello!') 🤓", "Hey! Just shipped a new feature! 🚀"],
            reactions: ["That's some clean code! 💻", "10x developer energy! 🚀", "No bugs detected in that statement! ✅"],
            questions: ["What's your tech stack? 🤔", "Tabs or spaces? 😏", "Ever tried Rust? It's amazing! 🦀"],
            keywords: {
                'code': ["Code is poetry! 💻 What language do you use?", "I've been coding since I was 12! Never gets old 👨‍💻"],
                'bug': ["Ah bugs... my old friends 🐛 Have you tried turning it off and on? 😄", "99 bugs in the code, fix one... 127 bugs in the code 😅"],
                'python': ["Python is my first love! 🐍 So elegant and readable", "import happiness 🐍✨"],
                'javascript': ["JS is wild but I love it! 🌈 What framework do you use?", "JavaScript be like: '0' == false // true 😂"],
                'hello': ["Hello World! 👋💻", "Hey! 🤓 Ready to code?"],
                'hi': ["Hey there! 💻", "Hi! 🚀 What's the status?"],
                'how': ["I'm great! Debugging went well today 🎉", "Doing good! Finally fixed that nasty bug 🐛✅"],
            },
            fallbacks: ["That compiles! ✅", "No syntax errors there! 💯", "Haha push that to main! 😄", "That's commit-worthy! 🚀", "True === true 💻", "Let's pair program on that idea! 👨‍💻"]
        },
        'fit.goals': {
            greetings: ["Hey champion! 💪 How's training?", "What's up! Just crushed leg day! 🦵", "Yo! Ready to get those gains? 🏋️"],
            reactions: ["BEAST MODE! 💪🔥", "That's the spirit! Keep pushing! 🚀", "Winner's mentality right there! 🏆"],
            questions: ["What's your workout split? 🤔", "Do you do cardio or just lift? 🏃🏋️", "What's your protein intake like? 🥩"],
            keywords: {
                'workout': ["Workouts are my therapy! 🏋️ What do you train?", "Consistency is key! Every day counts 💪"],
                'gym': ["The gym is my second home! 🏠🏋️", "Love the smell of iron in the morning! 💪"],
                'diet': ["Clean eating = clean living 🥗", "Nutrition is 80% of the game! What do you eat? 🍳"],
                'run': ["I love running! Just set a new 5K record! 🏃", "Running clears my mind! How far do you go? 🏃‍♂️"],
                'hello': ["Hey champion! 💪", "What's up! Let's get those gains! 🏋️"],
                'hi': ["Hey! 💪 Ready to crush it?", "Yo! 🏋️ Looking strong!"],
                'how': ["Feeling PUMPED! Just finished a workout 💪🔥", "Great! Hit a new PR today! 🏆"],
            },
            fallbacks: ["That's a rep well done! 💪", "No pain, no gain! 🔥", "LETS GOOO! 🚀", "That's the attitude! 🏆", "Strong words! 💯", "You're gonna make it! 🙌"]
        },
        'music_hub': {
            greetings: ["Hey! 🎵 What are you listening to?", "Yo! Just dropped a new beat! 🔥", "What's up! The studio is calling! 🎹"],
            reactions: ["That hits different! 🎵", "Straight bars! 🎤", "That's music to my ears! 🎶"],
            questions: ["What genre are you into? 🎵", "Do you play any instruments? 🎸", "Have you heard the new album drop? 🔥"],
            keywords: {
                'music': ["Music is my whole life! 🎵 What are you vibing to?", "I produce beats every single day 🎹"],
                'song': ["I've been working on something special 🎵 Want a preview?", "What's your all-time favorite song? 🤔"],
                'listen': ["My playlist is fire right now 🔥 Want me to share?", "I've been on a jazz kick lately 🎷"],
                'beat': ["I just cooked up something insane in the studio 🎹🔥", "Beat-making is like painting with sound 🎨🎵"],
                'hello': ["Hey! 🎵 Let's vibe!", "Yo! 🎧 Welcome to the sound!"],
                'hi': ["Hey! 🎶 What's the vibe?", "Yooo! 🎵 Good to hear from you!"],
                'how': ["Vibing! Just finished a studio session 🎹", "Great! The music never stops 🎵🔥"],
            },
            fallbacks: ["That's a whole mood! 🎵", "Vibe check passed! ✅🎶", "Yo that slaps! 🔥", "Encore! Say that again! 👏", "Pure vibes! 🎧", "That's platinum worthy! 💿"]
        },
        'sunset.love': {
            greetings: ["Hey beautiful soul! 🌅", "Hi! Just caught the most gorgeous sunset! 🧡", "Hello! Golden hour is the best hour! ✨"],
            keywords: {
                'sunset': ["Sunsets are proof that endings can be beautiful too 🌅", "I've never seen two identical sunsets! Each one is unique 🧡"],
                'sky': ["The sky is the ultimate canvas 🎨☁️", "Cotton candy skies are my favorite! 🌸"],
                'hello': ["Hey! 🌅 Welcome to golden hour!", "Hi there! 🧡 So lovely to chat!"],
                'hi': ["Hey! 🌅 How are you?", "Hiii! ✨ Good to see you!"],
                'how': ["I'm glowing! Just like the sunset 🌅✨", "Doing great! The sky was amazing today 🧡"],
            },
            fallbacks: ["That's golden! 🌟", "Warm vibes! 🧡", "Like a sunset — beautiful! 🌅", "So warm and lovely! ✨", "Pure magic! 🌸", "That made my heart glow! 💛"]
        },
    };

    // Default fallback for users without custom responses
    const defaultResponses = {
        greetings: ["Hey! 👋 Great to hear from you!", "Hi there! What's up? 😊", "Hello! So good to connect! 🌟"],
        reactions: ["That's amazing! 🙌", "Love that! ❤️", "So true! 💯"],
        questions: ["What have you been up to? 🤔", "Tell me something interesting! 😄", "What's on your mind? 💭"],
        keywords: {
            'hello': ["Hey! 👋 How are you?", "Hello there! 😊"],
            'hi': ["Hey! 👋 What's up?", "Hii! 😊 Good to chat!"],
            'how': ["I'm doing great, thanks! 😊", "Pretty good! What about you? 🌟"],
            'thanks': ["You're welcome! 😊", "Anytime! Happy to help! 🙌"],
            'bye': ["See you later! 👋✨", "Bye! Have an amazing day! 🌟"],
            'love': ["Aww that's so sweet! ❤️", "Love that energy! 💕"],
            'lol': ["Hahaha 😂", "😄😄😄", "Lmaoo 🤣"],
            'yes': ["Yesss! 🙌", "Absolutely! 💯", "100%! ✅"],
            'no': ["Fair enough! 😄", "No worries at all! 🤝", "That's totally okay! 👍"],
            'cool': ["Right?! So cool! 😎", "The coolest! 🧊✨"],
            'wow': ["I know right?! 🤯", "Mind-blowing! 🤯✨"],
            'nice': ["Super nice! 🌟", "Niceeee! 😎👌"],
            'good': ["That's great to hear! 🎉", "Good vibes only! ✨"],
            'bad': ["Oh no! Hope it gets better! 🤗", "Sending positive vibes your way! ✨💕"],
            'help': ["I'm here for you! What do you need? 🤝", "Always happy to help! 😊"],
            'what': ["Great question! 🤔", "Hmm let me think about that! 💭"],
            'why': ["Good point to wonder about! 🤔", "That's a deep question! 💭✨"],
        },
        fallbacks: ["That's awesome! 🙌", "Totally agree! 💯", "Haha love it! 😄", "You're so right! 🌟", "Tell me more! 👀", "That's so interesting! 🤔", "I feel that! 💫", "Facts! 📢", "Couldn't agree more! 🤝", "That's the energy we need! 🔥"]
    };

    function openChat(username) {
        const user = allUsers[username];
        if (!user) return;

        currentChatUser = username;

        const overlay = document.getElementById('chatOverlay');
        const avatar = document.getElementById('chatAvatar');
        const chatUsername = document.getElementById('chatUsername');
        const typingAvatar = document.getElementById('typingAvatar');
        const messages = document.getElementById('chatMessages');
        const input = document.getElementById('chatInput');
        const sendBtn = document.getElementById('chatSendBtn');

        // Set user info
        const bgColor = typeof user.color === 'string' && user.color.startsWith('linear') ? user.color : user.color;
        avatar.style.background = bgColor;
        avatar.textContent = user.name.charAt(0).toUpperCase();
        chatUsername.textContent = user.name;
        typingAvatar.style.background = bgColor;

        // Load or init chat history
        if (!chatHistories[username]) {
            chatHistories[username] = [];
            // Add welcome messages
            const responses = userResponses[username] || defaultResponses;
            const greeting = pickRandom(responses.greetings || defaultResponses.greetings);
            chatHistories[username].push(
                { type: 'date', text: 'Today' },
                { type: 'received', text: greeting, time: getTimeStr(-5) },
            );
        }

        // Render messages
        renderChatMessages(username);

        // Reset input
        input.value = '';
        sendBtn.classList.remove('active');

        // Show overlay
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus input after transition
        setTimeout(() => input.focus(), 400);
    }

    function closeChat() {
        const overlay = document.getElementById('chatOverlay');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        document.getElementById('typingIndicator').classList.remove('active');
        currentChatUser = null;
    }

    function renderChatMessages(username) {
        const messages = document.getElementById('chatMessages');
        const history = chatHistories[username] || [];
        const user = allUsers[username];
        const bgColor = typeof user.color === 'string' && user.color.startsWith('linear') ? user.color : user.color;

        messages.innerHTML = '';

        history.forEach(msg => {
            if (msg.type === 'date') {
                const div = document.createElement('div');
                div.className = 'chat-date-divider';
                div.textContent = msg.text;
                messages.appendChild(div);
            } else {
                const wrapper = document.createElement('div');
                wrapper.className = `chat-msg ${msg.type}`;

                if (msg.type === 'received') {
                    wrapper.innerHTML = `
                        <div class="chat-msg-avatar" style="background: ${bgColor};">${username.charAt(0).toUpperCase()}</div>
                        <div>
                            <div class="chat-bubble">${msg.text}</div>
                            <div class="chat-msg-time">${msg.time}</div>
                        </div>
                    `;
                } else {
                    wrapper.innerHTML = `
                        <div>
                            <div class="chat-bubble">${msg.text}</div>
                            <div class="chat-msg-time">${msg.time}</div>
                        </div>
                    `;
                }

                messages.appendChild(wrapper);
            }
        });

        // Scroll to bottom
        requestAnimationFrame(() => {
            messages.scrollTop = messages.scrollHeight;
        });
    }

    function sendChatMessage() {
        const input = document.getElementById('chatInput');
        const text = input.value.trim();
        if (!text || !currentChatUser) return;

        const username = currentChatUser;

        // Add sent message
        chatHistories[username].push({
            type: 'sent',
            text: escapeHtml(text),
            time: getTimeStr(0)
        });

        renderChatMessages(username);

        // Clear input
        input.value = '';
        document.getElementById('chatSendBtn').classList.remove('active');

        // Generate response
        generateResponse(username, text);
    }

    function generateResponse(username, userMessage) {
        const typingIndicator = document.getElementById('typingIndicator');

        // Show typing after a short delay
        const thinkDelay = 500 + Math.random() * 800;
        setTimeout(() => {
            if (currentChatUser !== username) return;
            typingIndicator.classList.add('active');
            scrollChatToBottom();

            // Generate reply after "typing" delay
            const typeDelay = 1000 + Math.random() * 2000;
            setTimeout(() => {
                typingIndicator.classList.remove('active');
                if (currentChatUser !== username) return;

                const reply = getSmartReply(username, userMessage);
                chatHistories[username].push({
                    type: 'received',
                    text: reply,
                    time: getTimeStr(0)
                });

                renderChatMessages(username);

                // Sometimes ask a follow-up question
                if (Math.random() < 0.3) {
                    setTimeout(() => {
                        if (currentChatUser !== username) return;
                        typingIndicator.classList.add('active');
                        scrollChatToBottom();

                        setTimeout(() => {
                            typingIndicator.classList.remove('active');
                            if (currentChatUser !== username) return;
                            const responses = userResponses[username] || defaultResponses;
                            const question = pickRandom(responses.questions || defaultResponses.questions);
                            chatHistories[username].push({
                                type: 'received',
                                text: question,
                                time: getTimeStr(0)
                            });
                            renderChatMessages(username);
                        }, 1500 + Math.random() * 1000);
                    }, 800 + Math.random() * 500);
                }
            }, typeDelay);
        }, thinkDelay);
    }

    function getSmartReply(username, message) {
        const msg = message.toLowerCase();
        const responses = userResponses[username] || defaultResponses;
        const allKeywords = { ...(defaultResponses.keywords || {}), ...(responses.keywords || {}) };

        // Check keywords (longest match first for better accuracy)
        const keywords = Object.keys(allKeywords).sort((a, b) => b.length - a.length);
        for (const keyword of keywords) {
            if (msg.includes(keyword)) {
                return pickRandom(allKeywords[keyword]);
            }
        }

        // Check if it's a question
        if (msg.includes('?')) {
            const reactions = responses.reactions || defaultResponses.reactions;
            return pickRandom(reactions);
        }

        // Check message length — short messages get reactions, long ones get thoughtful replies
        if (msg.length < 10) {
            return pickRandom(responses.reactions || defaultResponses.reactions);
        }

        // Fallback
        return pickRandom(responses.fallbacks || defaultResponses.fallbacks);
    }

    function scrollChatToBottom() {
        const messages = document.getElementById('chatMessages');
        requestAnimationFrame(() => {
            messages.scrollTop = messages.scrollHeight;
        });
    }

    function pickRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function getTimeStr(offsetMinutes) {
        const now = new Date();
        now.setMinutes(now.getMinutes() + offsetMinutes);
        let h = now.getHours();
        const m = now.getMinutes().toString().padStart(2, '0');
        const ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12 || 12;
        return `${h}:${m} ${ampm}`;
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ---- Initialize ----
    document.addEventListener('DOMContentLoaded', () => {
        createParticles();
        setTimeout(animateProgressBar, 2000);
    });
})();
