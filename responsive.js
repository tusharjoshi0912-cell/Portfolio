document.addEventListener('DOMContentLoaded', () => {
    const mobileOverlay = document.getElementById('mobile-block-overlay');

    function isMobileDevice() {
        // Detect true mobile devices only via user agent
        const ua = navigator.userAgent || navigator.vendor || window.opera;
        return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua.toLowerCase());
    }

    function handleDisplay() {
        if (isMobileDevice()) {
            // Always show overlay on mobile devices, even in desktop mode
            mobileOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            // Laptops & desktops: normal site
            mobileOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Run on page load
    handleDisplay();

    // Optional: handle orientation change on mobile
    window.addEventListener('orientationchange', handleDisplay);
});
