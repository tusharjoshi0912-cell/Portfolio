document.addEventListener('DOMContentLoaded', () => {
    const mobileOverlay = document.getElementById('mobile-block-overlay');

    function isMobileDevice() {
        const ua = navigator.userAgent || navigator.vendor || window.opera;
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isSmallScreen = Math.min(window.innerWidth, window.innerHeight) < 981;
        const isMobileUA = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);

        return isMobileUA || isTouch || isSmallScreen;
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

    handleDisplay();
    window.addEventListener('resize', handleDisplay);
    window.addEventListener('orientationchange', handleDisplay);
});
