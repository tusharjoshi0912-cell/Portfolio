document.addEventListener('DOMContentLoaded', () => {
    const mobileMessage = document.getElementById('mobile-message');
    const desktopSiteWrapper = document.getElementById('desktop-site-wrapper');

    function checkDevice() {
        // A common threshold for mobile devices.
        // The key is that desktop mode on mobile reports a wider width.
        if (window.innerWidth < 1024) {
            mobileMessage.style.display = 'flex';
            desktopSiteWrapper.style.display = 'none';
        } else {
            mobileMessage.style.display = 'none';
            desktopSiteWrapper.style.display = 'block';
        }
    }

    // Check on initial load
    checkDevice();

    // Check when the window is resized (e.g., orientation change or developer tools)
    window.addEventListener('resize', checkDevice);
});
