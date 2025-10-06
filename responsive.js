document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('mobile-block-overlay');

    function isMobileHardware() {
        const ua = navigator.userAgent.toLowerCase();

        // True mobile devices via UA
        const isMobileUA = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(ua);

        // Detect touch capability (most phones have >1 touch point)
        const hasTouch = navigator.maxTouchPoints && navigator.maxTouchPoints > 1;

        // Optional: check small screen size (to avoid large desktops with touch)
        const isSmallScreen = Math.min(window.innerWidth, window.innerHeight) < 1024;

        // Combine checks: only true phones/tablets are blocked
        return (isMobileUA && hasTouch && isSmallScreen);
    }

    function handleMobileBlock() {
        if (isMobileHardware()) {
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    handleMobileBlock();
    window.addEventListener('resize', handleMobileBlock);
    window.addEventListener('orientationchange', handleMobileBlock);
});
