/**
 * Guest Login flow
 */
function handleGuestLogin() {
    showDashboard("Awesome Creator");
}

/**
 * Google Sign-In Flow Handler Placeholder
 * When you setup Google Identity (GIS), your API token script will pass user profiles here.
 */
function handleGoogleLogin() {
    // Simulated Google Response for now
    console.log("Connecting to Google Identity API service...");
    
    // Fake profile extraction for demonstrating functionality:
    const mockGoogleUser = {
        name: "Super Banana Fan",
        email: "kidvidsfan@gmail.com"
    };

    showDashboard(mockGoogleUser.name);
}

/**
 * Transitions layout interface from Login frame into the About Dashboard
 */
function showDashboard(displayName) {
    const loginPage = document.getElementById('loginPage');
    const mainPage = document.getElementById('mainPage');
    const welcomeTitle = document.getElementById('welcomeTitle');

    // Customize the header badge message beautifully 
    welcomeTitle.innerHTML = `Hi <span class="highlight-pink">${displayName}</span>, Welcome to Kids Vids TV!`;

    // Swap screens smoothly
    loginPage.classList.add('hidden');
    mainPage.classList.remove('hidden');
}
