document.addEventListener('DOMContentLoaded', () => {
    // --- YOUR PORTFOLIO DATA GOES HERE ---
    const portfolioData = {
        gsa: {
            title: "Google Student Ambassador",
            [cite_start]description: "Spearheaded a campus-wide marketing initiative for Google Gemini to drive user engagement through a QR code system[cite: 20]. [cite_start]Designed a value-exchange system where students gained access to AI-generated study notes after completing an interactive task, significantly increasing participation[cite: 21]."
        },
        ucb: {
            title: "Research Assistant, University of California, Berkeley",
            [cite_start]description: "Supported a cross-cultural study on children's cognitive and social development and conducted student sessions[cite: 34]. [cite_start]I also translated research materials and audio into Hindi and Gujarati[cite: 36]."
        },
        sambhav: {
            title: "Volunteer Intern, Sambhav Initiative",
            [cite_start]description: "Assisted in psychological support activities for Biparjoy cyclone survivors[cite: 40]. [cite_start]Worked on Psychological First Aid, mental health screening tools, and therapy-based interventions during field-based mental health rehabilitation efforts[cite: 42]."
        },
        msu_ra: {
            title: "Research Assistant (Student), MSU Baroda",
            [cite_start]description: "Conducted qualitative research on psychological and behavioural patterns of road users[cite: 46]. [cite_start]My work involved reviewing literature, designing semi-structured interview schedules, and collecting field data[cite: 47]."
        },
        yoga: {
            title: "Dynamic Yoga MCQ Study Tool",
            [cite_start]description: "Developed an interactive study tool from scratch using Gemini to solve a personal learning need[cite: 51]. [cite_start]I utilized AI to process and convert raw class notes into a structured database of 200 unique multiple-choice questions for the application's backend[cite: 52]."
        },
        workshop: {
            title: "AI-Powered Psychology Workshop Webpage",
            [cite_start]description: "Leveraged generative AI to single-handedly develop a responsive website from concept to deployment without any prior coding background[cite: 25]. [cite_start]This project demonstrated strong problem-solving by using AI tools to rapidly build and launch a functional application[cite: 26]."
        },
        notes: {
            title: "Incentivized Study Notes Webpages",
            [cite_start]description: "Developed a scalable engagement model using incentivized, task-based access to drive student participation[cite: 28]. [cite_start]I engineered the core logic for a persistent, device-specific access system to differentiate between new and returning users[cite: 29]."
        },
        mckinsey: {
            title: "McKinsey.org Forward Program",
            description: "A virtual learning program focused on developing leadership, business, and digital skills. [cite_start]Completed in July 2025[cite: 55]."
        },
        forage: {
            title: "Forage Virtual Experience Programs",
            [cite_start]description: "Completed job simulations in HR with GE Aerospace [cite: 57][cite_start], Data Analytics with Deloitte [cite: 58][cite_start], and Strategy Consulting with Boston Consulting Group[cite: 59]."
        },
        hp: {
            title: "Effective Leadership | HP Life",
            description: "A program by the HP Foundation on developing effective leadership qualities. [cite_start]Completed in June 2025[cite: 60]."
        },
        citi: {
            title: "CITI Program Certifications",
            [cite_start]description: "Certified in Social and Behavioral Conduct of Research [cite: 62][cite_start], Social and Behavioral Research Investigators [cite: 63][cite_start], and Conflict of Interests[cite: 61]."
        }
    };

    // --- LOGIC FOR THE MODAL (No need to edit below this line) ---
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModalBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const data = portfolioData[id];

            if (data) {
                modalTitle.textContent = data.title;
                modalDescription.textContent = data.description;
                modal.style.display = 'flex';
                setTimeout(() => {
                    modal.style.opacity = '1';
                    document.querySelector('.modal-content').style.transform = 'scale(1)';
                }, 10);
            }
        });
    });

    const closeModal = () => {
        document.querySelector('.modal-content').style.transform = 'scale(0.9)';
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    closeModalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});