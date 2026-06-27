const GOOGLE_CLIENT_ID = "43497632492-lqaquob6ii8443btq8fujqke9ln0dq8f.apps.googleusercontent.com";
let bananasCollected = 0;

// Idea Storage Bank Array for Video generation
const POST_IDEAS = [
    { title: "🎬 Nano Banana Meets ABCs", desc: "An animated tracing run through the alphabet where our mascot slips over a giant letter 'B'." },
    { title: "🎵 The Pastel Palette Sing-Along", desc: "A catchy 2-minute tune introducing kids to soft secondary colors via high-vibrancy music video cards." },
    { title: "🎮 Name That Animal Sound Quiz", desc: "A fast-paced interactive sound guessing video featuring friendly, round cartoon zoo frames." },
    { title: "✨ Counting Star Sprinkles", desc: "A soft, relaxing nursery bedtime style animation counting stars from 1 to 20 with smooth sound triggers." }
];

window.onload = function () {
    if (!GOOGLE_CLIENT_ID.includes("YOUR_GOOGLE_CLIENT_ID_HERE")) {
        google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleCredentialResponse });
        google.accounts.id.renderButton(document.getElementById("googleBtnParent"), { theme: "outline", size: "large", shape: "pill", text: "signin_with" });
    }
};

function handleCredentialResponse(response) {
    try {
        const base64Url = response.credential.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
        showDashboard(JSON.parse(jsonPayload).name);
    } catch (e) { console.error(e); }
}

function handleGuestLogin() { showDashboard("Awesome Guest Explorer"); }

function showDashboard(username) {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('mainPage').classList.remove('hidden');
    document.getElementById('welcomeTitle').innerHTML = `Hi <span class="highlight-pink">${username}</span>, Welcome to Kids Vids TV!`;
    confetti({ particleCount: 100, spread: 60, colors: ['#ffe5ec', '#fff9c4', '#b3e5fc'] });
}

function handleLogout() {
    document.getElementById('mainPage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
}

// Custom Navigation Engine Function
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(`${tabName}Tab`).classList.remove('hidden');
    event.currentTarget.classList.add('active');
}

// Content Generation Matrix logic
function generateContentIdea() {
    const randomIdx = Math.floor(Math.random() * POST_IDEAS.length);
    const selectedIdea = POST_IDEAS[randomIdx];
    
    document.getElementById('ideaTitle').innerText = selectedIdea.title;
    document.getElementById('ideaDesc').innerText = selectedIdea.desc;
    
    confetti({ particleCount: 20, spread: 30, origin: { y: 0.8 } });
}

function triggerMascotReward() {
    bananasCollected += Math.floor(Math.random() * 5) + 1;
    document.getElementById('bananaCount').innerText = bananasCollected;
    document.getElementById('rewardMessage').innerText = "Earned +5 Banana tokens! 🍌";
    if(bananasCollected > 15) document.getElementById('levelCount').innerText = "Master Animator 👑";
    confetti({ particleCount: 30, angle: 90, spread: 45 });
}
