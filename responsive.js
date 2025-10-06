document.addEventListener('DOMContentLoaded', () => {
    const mobileOverlay = document.getElementById('mobile-block-overlay');

    function isMobileDevice() {
        // Detects true mobile devices, even if desktop mode is enabled
        const ua = navigator.userAgent || navigator.vendor || window.opera;
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isSmallScreen = Math.min(window.innerWidth, window.innerHeight) < 980;
        const isRealMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);

        return isRealMobile || isTouch || isSmallScreen;
    }

    function handleDisplay() {
        if (isMobileDevice()) {
            mobileOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            mobileOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Run on page load and on resize/orientation changes
    handleDisplay();
    window.addEventListener('resize', handleDisplay);
    window.addEventListener('orientationchange', handleDisplay);
});
