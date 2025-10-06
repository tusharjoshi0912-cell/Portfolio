export default function handler(req, res) {
    const userAgent = req.headers['user-agent'] || '';

    // Detect mobile devices
    const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());

    if (isMobile) {
        // If mobile, return a static "Desktop Only" page
        res.status(200).send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Desktop Only</title>
                <style>
                    body {
                        background-color: #000;
                        color: #fff;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        font-family: Helvetica, Arial, sans-serif;
                        text-align: center;
                    }
                    h1 { color: #e50914; font-size: 2.5rem; margin-bottom: 1rem; }
                    p { color: #ccc; font-size: 1.2rem; line-height: 1.6; max-width: 600px; }
                    img { width: 150px; margin-bottom: 2rem; filter: brightness(1.3); }
                </style>
            </head>
            <body>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo">
                <h1>We’re Very Sorry!</h1>
                <p>This website is carefully designed for desktop use. Mobile access, even in desktop mode, is not supported. Please use a laptop or desktop computer for the best experience. Thank you for understanding.</p>
            </body>
            </html>
        `);
        return;
    }

    // Otherwise, redirect to homepage
    res.redirect('/');
}
