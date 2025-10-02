document.addEventListener('DOMContentLoaded', () => {
    // --- Data for all portfolio items ---
    const portfolioData = {
        gsa: {
            title: "Google Student Ambassador",
            synopsis: "Faced with the challenge of boosting student engagement for Google Gemini, the primary goal was to drive QR code scans. The directive was to be unique and creative, leading to the development of a value-exchange ecosystem where AI-powered tools were built as an incentive to capture campus-wide attention.",
            keyContributions: [
                { name: 'Incentivized Study Notes', icon: 'fas fa-book', reason: 'To drive engagement, a web app was created offering high-demand, AI-generated study notes, accessible only after students completed an interactive task via the QR code.' },
                { name: 'AI-Powered Workshop Page', icon: 'fas fa-chalkboard-user', reason: 'Developed a fully functional, AI-built webpage for a psychology workshop, which served as another creative incentive to encourage QR code scans and demonstrate Gemini\'s power.' },
                { name: 'Value-Exchange System', icon: 'fas fa-right-left', reason: 'Designed the core strategy where students received tangible value (study tools) in exchange for their engagement, significantly increasing participation.' }
            ],
            productAndStrategySkills: [
                { name: 'Strategic Planning', icon: 'fas fa-chess-king', reason: 'Designed a complete strategy from the ground up to achieve a specific business goal: driving user engagement for Google Gemini.' },
                { name: 'User Acquisition', icon: 'fas fa-user-plus', reason: 'Built a system specifically designed to acquire and onboard new users for a product by tapping into an existing student need.' },
                { name: 'Gamification', icon: 'fas fa-gamepad', reason: 'Successfully used game-like mechanics (tasks, sequential unlocks, rewards) to motivate and guide user behavior through a multi-step funnel.' },
                { name: 'Growth Hacking', icon: 'fas fa-rocket', reason: 'Found a creative, low-cost way to achieve significant user growth by identifying and leveraging an existing desire for high-quality study notes.' },
                { name: 'Iterative Design', icon: 'fas fa-sync-alt', reason: 'Demonstrated product evolution by releasing a V1 (single-task system) and then a more advanced V2 (multi-task funnel) of the notes platform.' }
            ],
            technicalSkills: [
                { name: 'AI-Powered Development', icon: 'fas fa-robot', reason: 'Proven ability to manage the creation of multiple web applications by directing a generative AI as a development partner.' },
                { name: 'Prompt Engineering', icon: 'fas fa-terminal', reason: 'Learned to write clear and effective instructions to command an AI to perform complex tasks like data structuring and code generation.' },
                { name: 'Rapid Prototyping', icon: 'fas fa-bolt', reason: 'Demonstrated the ability to take an idea and turn it into a finished, working product quickly and efficiently using AI tools.' },
                { name: 'Conditional Logic', icon: 'fas fa-code-branch', reason: 'Built the core logic for the notes platform that differentiated between new and returning users to create a seamless experience.' }
            ],
            backgroundImage: 'images/gsa-detail-bg.jpg'
        },
        ucb: {
            title: "Research Assistant: The Berkeley Vadodara Project",
            synopsis: "A three-week intensive research collaboration with the University of California, Berkeley, providing critical on-ground support for a study on children's social and mathematical cognitive development.",
            keyContributions: [
                { name: 'Linguistic Bridge', icon: 'fas fa-language', reason: "Seamlessly translated complex research materials from English to Hindi and Gujarati, ensuring the integrity of the study's methodology with local participants." },
                { name: 'Autonomous Researcher', icon: 'fas fa-user-check', reason: 'Rapidly mastered intricate research protocols and was entrusted to independently conduct one-on-one and group study sessions with children, significantly accelerating data collection.' },
                { name: 'Field Coordinator', icon: 'fas fa-users-cog', reason: 'Expertly managed the recruitment and coordination of child participants from classrooms, ensuring a smooth and efficient workflow for the international research team.' },
                { name: 'Cross-Cultural Liaison', icon: 'fas fa-globe', reason: 'Proactively went beyond official duties to create a comfortable and welcoming environment for the visiting US-based team, fostering a highly positive and collaborative research atmosphere.' }
            ],
            technicalSkills: [
                { name: 'Research Assistance', icon: 'fas fa-book-reader', reason: 'Directly supported a high-stakes, international academic research project in a fast-paced field environment.' },
                { name: 'Data Collection', icon: 'fas fa-chart-bar', reason: 'Conducted both one-on-one and group study sessions with children, gathering primary data crucial to the project\'s success.' },
                { name: 'Participant Recruitment', icon: 'fas fa-users-cog', reason: 'Efficiently organized and managed student participants from classrooms, ensuring a steady and reliable data flow for the research team.' },
                { name: 'Bilingual Translation', icon: 'fas fa-language', reason: 'Translated sensitive and technical research documents, ensuring methodological integrity and clear participant understanding.' }
            ],
            softSkills: [
                { name: 'Cross-Cultural Communication', icon: 'fas fa-globe', reason: 'Acted as the primary liaison between the US-based research team and local Gujarati/Hindi-speaking participants.' },
                { name: 'Adaptability', icon: 'fas fa-sync-alt', reason: 'Demonstrated the ability to quickly learn and apply intricate research methodologies in a time-intensive academic environment.' },
                { name: 'Autonomy & Initiative', icon: 'fas fa-user-check', reason: 'Was entrusted to work without direct supervision, taking full ownership of conducting sessions and managing participant groups.' },
                { name: 'Teamwork', icon: 'fas fa-people-arrows', reason: 'Fostered a positive and collaborative environment by proactively assisting the visiting research team beyond official duties.' }
            ],
            backgroundImage: 'images/ucb-detail-bg.jpg'
        },
        sambhav: {
            title: "Psychology Intern: Project First Response",
            synopsis: "An intensive, field-focused internship on the front lines of mental health care, developing and preparing psychological support activities for the Rehabilitation of Natural Disaster Survivors Project, a vital collaboration with the Gujarat Police.",
            keyContributions: [
                 { name: 'Therapeutic Architect', icon: 'fas fa-drafting-compass', reason: 'Designed and structured a comprehensive suite of therapeutic activities for disaster survivors, forming the core of the rehabilitation program.' },
                 { name: 'Integrated Methodologies', icon: 'fas fa-cogs', reason: 'Skillfully applied a diverse range of modern psychological techniques, including Psychological First Aid (PFA), Art Therapy, Narrative Therapy, and Mind-Body Therapies.' },
                 { name: 'Assessment & Intervention', icon: 'fas fa-check-double', reason: 'Prepared activities based on Mental Screening Tools and Positive Psychological Interventions to both assess needs and actively build resilience in survivors.' }
            ],
            technicalSkills: [
                { name: 'Psychological First Aid (PFA)', icon: 'fas fa-hands-helping', reason: 'Prepared immediate-response therapeutic activities based on PFA principles to provide comfort and support to cyclone survivors.' },
                { name: 'Therapeutic Activity Design', icon: 'fas fa-drafting-compass', reason: 'Architected a full suite of activities using Art, Narrative, and Mind-Body therapies to address the specific psychological needs of disaster survivors.' },
                { name: 'Mental Health Screening', icon: 'fas fa-heartbeat', reason: 'Utilized established mental screening tools as a basis for designing targeted interventions for the rehabilitation program.' },
                { name: 'Trauma-Informed Care', icon: 'fas fa-heart', reason: 'Applied a deep understanding of trauma to create sensitive and effective therapeutic activities suitable for a vulnerable population.' }
            ],
            softSkills: [
                { name: 'Diligence & Dedication', icon: 'fas fa-check-double', reason: 'Recognized for a highly committed work ethic in preparing the foundational components of a critical community project.' },
                { name: 'Focus & Concentration', icon: 'fas fa-bullseye', reason: 'Maintained deep focus while developing complex psychological interventions in a high-stakes collaboration with Gujarat Police.' },
                { name: 'Empathy & Sensitivity', icon: 'fas fa-comment-dots', reason: 'Designed all interventions with a high degree of empathy, ensuring they were appropriate and supportive for individuals who have experienced trauma.' },
                { name: 'Reliability', icon: 'fas fa-user-shield', reason: 'Was trusted to create the core therapeutic activities that the entire rehabilitation project was built upon.' }
            ],
            backgroundImage: 'images/sambhav-detail-bg.jpg'
        },
        msu_ra: {
            title: "Student Researcher: The Traffic Psychology Study",
            synopsis: "A rigorous third-year academic project investigating the intersection of human psychology and road behavior. This qualitative study aimed to uncover the cognitive and behavioral patterns influencing traffic rule compliance.",
            keyContributions: [
                { name: 'Qualitative Strategist', icon: 'fas fa-cogs', reason: 'Co-engineered the research framework, from conducting an extensive literature review to designing the semi-structured interviews used for primary data collection.' },
                { name: 'The Covert Observer', icon: 'fas fa-user-secret', reason: 'Masterfully executed the unique and sensitive role of a participant-observer, embedding within interview groups to create a natural atmosphere that elicited exceptionally genuine and unfiltered responses.' },
                { name: 'Instrument Refinement', icon: 'fas fa-pen-ruler', reason: 'Played a pivotal role in shaping the study\'s direction by contributing meaningfully to the research introduction and refining interview questions for enhanced clarity and impact.' }
            ],
            technicalSkills: [
                { name: 'Qualitative Research', icon: 'fas fa-search', reason: 'Managed the end-to-end qualitative research process, from literature review and study design to primary data collection.' },
                { name: 'Participant-Observation', icon: 'fas fa-user-secret', reason: 'Employed a sophisticated covert observation technique to gather authentic, unfiltered data by minimizing researcher influence.' },
                { name: 'Research Design', icon: 'fas fa-project-diagram', reason: 'Played a key role in developing the semi-structured interview schedules that guided the data collection phase of the study.' },
                { name: 'Literature Review', icon: 'fas fa-book', reason: 'Conducted a comprehensive review of existing traffic psychology literature to build the theoretical framework for the research.' }
            ],
            softSkills: [
                { name: 'Exceptional Interpersonal Skills', icon: 'fas fa-comments', reason: 'Noted for the ability to build immediate rapport with participants, making them feel comfortable and willing to share openly.' },
                { name: 'Sensitivity & Discretion', icon: 'fas fa-user-lock', reason: 'Successfully balanced the dual roles of participant and observer, requiring a high level of social awareness and discretion.' },
                { name: 'Collaborative Inquiry', icon: 'fas fa-users', reason: 'Actively contributed to team discussions, helping to refine the study\'s introduction and research questions for maximum impact.' },
                { name: 'Rapport Building', icon: 'fas fa-handshake', reason: 'Created a natural and relaxed interview environment, which was essential for the success of the participant-observer methodology.' }
            ],
            backgroundImage: 'images/msu-ra-detail-bg.jpg'
        },
        yoga: {
            title: "AI Project Lead: The Yoga Study Tool",
            synopsis: "The creation of an interactive learning platform from concept to deployment, driven by a personal need to master academic material. This project involved leveraging Gemini to single-handedly transform raw, unstructured class notes into a functional and dynamic Multiple-Choice Question (MCQ) application.",
            projectLinks: [
                { name: 'Launch Yoga Tool', url: 'https://yoga-mcq.vercel.app/' }
            ],
            keyContributions: [
                { name: 'AI-Powered Content Generation', icon: 'fas fa-robot', reason: 'Skillfully prompted and directed Gemini to process and systematically convert extensive raw notes into a structured database of 200 unique and relevant multiple-choice questions.' },
                { name: 'Intelligent Frontend Design', icon: 'fas fa-desktop', reason: 'Architected the user experience by instructing the AI to develop a simple yet effective interface that presents a randomized set of 50 questions on each new test.' },
                { name: 'End-to-End Development', icon: 'fas fa-project-diagram', reason: 'Managed the entire project lifecycle, from initial ideation and AI-driven code generation to debugging and final deployment on Vercel.' }
            ],
            technicalSkills: [
                { name: 'Generative AI & Prompt Engineering', icon: 'fas fa-terminal', reason: 'Learned how to write effective prompts to command the AI to perform complex tasks like data structuring, content creation, and code generation.' },
                { name: 'AI as a Development Partner', icon: 'fas fa-hands-helping', reason: 'Gained hands-on experience using an AI as a collaborator to build a fully functional application from scratch.' },
                { name: 'Full-Stack Understanding', icon: 'fas fa-layer-group', reason: 'Managed the entire process, gaining a foundational understanding of both the backend (database) and the frontend (user interface).' },
                { name: 'Deployment', icon: 'fas fa-rocket', reason: 'Successfully deployed a web application to the internet using the modern hosting platform Vercel.' }
            ],
            softSkills: [
                { name: 'Initiative & Autonomy', icon: 'fas fa-star', reason: 'Identified a personal learning challenge and took it upon myself to build the solution from scratch, without being told to.' },
                { name: 'Problem-Solving', icon: 'fas fa-check-circle', reason: 'Logically identified a need and figured out the steps to engineer a practical, technology-driven solution using available tools.' },
                { name: 'Learning Agility', icon: 'fas fa-brain', reason: 'Quickly learned how to leverage the power of a new technology (generative AI) to achieve a specific, tangible goal.' },
                { name: 'Project Management', icon: 'fas fa-clipboard-list', reason: 'Managed this project from concept to completion, defining the requirements and seeing it through to a successful launch.' }
            ],
            backgroundImage: 'images/yoga-tool-detail-bg.jpg'
        },
        workshop: {
            title: "AI Project: Gemini for Learners",
            synopsis: "As a strategic initiative for the Google Student Ambassador program, this unique and interactive webpage was created to support my candidacy. Acting as project lead, I guided Google Gemini to build the entire site, which was designed as a custom resource for psychology students and served as a live demonstration of my ability to leverage AI for rapid development.",
            projectLinks: [
                { name: 'Launch Workshop Page', url: 'https://gemini-for-learners-22yg.vercel.app/' }
            ],
            keyContributions: [
                { name: 'Innovative Application Tool', icon: 'fas fa-lightbulb', reason: 'Built a unique and interactive webpage as part of my application, a creative approach that made my candidacy stand out and led to my selection.' },
                { name: 'AI Project Lead', icon: 'fas fa-user-tie', reason: 'Acted as the project director, providing the vision and instructions for Google Gemini to execute the technical development from the ground up.' },
                { name: 'Audience-Specific Design', icon: 'fas fa-users', reason: 'Designed the webpage specifically for psychology students, showing an ability to think about a target audience and create a tool that meets their needs.' }
            ],
            technicalSkills: [
                { name: 'AI-Powered Development', icon: 'fas fa-robot', reason: 'Proven ability to successfully manage the creation of a web application using a generative AI as a development partner.' },
                { name: 'Prompt Engineering', icon: 'fas fa-terminal', reason: 'Learned and applied the core skill of writing clear and effective instructions to get a complex result from an AI.' },
                { name: 'Rapid Prototyping', icon: 'fas fa-bolt', reason: 'Demonstrated the ability to take an idea and turn it into a finished, working product quickly and efficiently.' },
                { name: 'Project Execution', icon: 'fas fa-clipboard-check', reason: 'Managed this project from the initial idea to the final deployed website, showing I can see a project through to completion on my own.' }
            ],
            softSkills: [
                { name: 'Initiative', icon: 'fas fa-star', reason: 'Identified an opportunity to stand out and built a solution myself from scratch, without waiting to be assigned a project.' },
                { name: 'Innovative Thinking', icon: 'fas fa-brain', reason: 'Found a new and better way to approach a challenge (applying for a program) by using technology creatively.' },
                { name: 'Resourcefulness', icon: 'fas fa-tools', reason: 'Skillfully used a powerful tool (Gemini) to build something that would have otherwise required extensive coding knowledge.' },
                { name: 'Goal-Oriented Action', icon: 'fas fa-bullseye', reason: 'Set a clear goal (getting selected as an ambassador) and built a specific tool to help you achieve it.' }
            ],
            backgroundImage: 'images/workshop-detail-bg.jpg'
        },
        notes: {
            title: "Product Strategist: The Notes Engagement Platform",
            synopsis: "A sophisticated, multi-stage web platform conceived and built to achieve a core Google Student Ambassador objective: driving new user acquisition and engagement for Google Gemini. The project strategically leveraged the high demand for quality study notes, creating a gamified 'value exchange' that successfully converted student interest into measurable engagement metrics for Google.",
            projectLinks: [
                { name: 'Launch Psychology Notes', url: 'https://major-11-notes-d4dg.vercel.app/' },
                { name: 'Launch Sanskrit Notes', url: 'https://sanskrit-notes.vercel.app/' }
            ],
            keyContributions: [
                { name: 'Engineered a Gamified User Funnel', icon: 'fas fa-filter', reason: 'Designed a clever, multi-step system where students were required to complete a sequence of tasks to unlock the final reward.' },
                { name: 'Developed a Smart Access System', icon: 'fas fa-key', reason: 'Built logic that distinguishes a first-time visitor from a returning user, creating a seamless experience for verified users.' },
                { name: 'Identified a Market Need', icon: 'fas fa-search-dollar', reason: 'Astutely observed that students were actively searching for visually appealing notes and used this insight to build a product with a clear value proposition.' },
                { name: 'Iterated and Improved the Design', icon: 'fas fa-sync-alt', reason: 'Demonstrated product evolution, releasing a simple V1 (Sanskrit Notes) and then a more advanced V2 (Psychology Notes) with a multi-task funnel.' }
            ],
            technicalSkills: [
                { name: 'Conditional Logic', icon: 'fas fa-code-branch', reason: 'Built the core IF/ELSE logic that powers the platform (e.g., IF user is new, show QR page, ELSE show notes page).' },
                { name: 'Client-Side State Management', icon: 'fas fa-save', reason: 'Implemented the mechanism to "remember" a user on a specific device after they complete the tasks, using browser storage.' },
                { name: 'Frontend Development', icon: 'fas fa-desktop', reason: 'Built the entire user-facing experience, including the gated landing pages, the task sequence, and the final notes pages.' },
                { name: 'UI/UX Design', icon: 'fas fa-bezier-curve', reason: 'Designed the user flow from start to finish, guiding the user through a series of steps to reach their goal.' }
            ],
            softSkills: [
                { name: 'Strategic Planning', icon: 'fas fa-chess-king', reason: 'Designed a complete strategy to achieve a specific business goal (driving engagement) rather than just building a tool.' },
                { name: 'User Acquisition', icon: 'fas fa-user-plus', reason: 'Gained hands-on experience building a system designed to acquire and onboard new users for a product (Gemini).' },
                { name: 'Gamification', icon: 'fas fa-gamepad', reason: 'Successfully used game-like mechanics (tasks, sequential unlocks, proof-of-action, final reward) to motivate user behavior.' },
                { name: 'Growth Hacking', icon: 'fas fa-rocket', reason: 'Found a creative, low-cost way to achieve significant user growth by tapping into an existing user desire.' }
            ],
            backgroundImage: 'images/notes-detail-bg.jpg'
        },
        mckinsey: {
            title: "McKinsey.org Forward Program",
            description: "A virtual learning program focused on developing practical skills in leadership, business, and digital tools, preparing participants for future workplace challenges.",
            skills: [
                { name: 'Leadership', icon: 'fas fa-users', reason: 'Learned foundational leadership principles and frameworks used by top-tier consulting firms.' },
                { name: 'Business Acumen', icon: 'fas fa-briefcase', reason: 'Gained insights into business strategy, problem-solving, and effective communication in a corporate context.' },
                { name: 'Digital Skills', icon: 'fas fa-laptop-code', reason: 'Developed proficiency in modern digital tools and methodologies relevant to today\'s workplace.' }
            ],
            backgroundImage: 'images/mckinsey-detail-bg.jpg'
        },
        forage: {
            title: "Forage Virtual Experience Programs",
            description: "Completed job simulations in key corporate functions, gaining practical insights into real-world tasks at leading global companies.",
            skills: [
                { name: 'HR Simulation (GE)', icon: 'fas fa-user-friends', reason: 'Gained practical experience in human resources by completing tasks that simulate the daily work of an HR professional at GE.' },
                { name: 'Data Analytics (Deloitte)', icon: 'fas fa-chart-line', reason: 'Completed a virtual job simulation focused on data analysis, learning how to approach and solve data-driven business problems at Deloitte.' },
                { name: 'Strategy Consulting (BCG)', icon: 'fas fa-lightbulb', reason: 'Worked through a simulated strategy consulting project, developing skills in analysis, problem-solving, and presentation as practiced at BCG.' }
            ],
            backgroundImage: 'images/forage-detail-bg.jpg'
        },
        hp: {
            title: "Effective Leadership | HP Life",
            description: "A program by the HP Foundation focused on developing essential qualities for effective leadership, communication, and team management in a professional environment.",
            skills: [
                { name: 'Leadership', icon: 'fas fa-users', reason: 'Developed an understanding of key leadership styles and how to apply them in a professional setting.' },
                { name: 'Communication', icon: 'fas fa-comments', reason: 'Learned and practiced techniques for clear, effective, and persuasive communication in a team environment.' },
                { name: 'Team Management', icon: 'fas fa-sitemap', reason: 'Gained insights into the principles of managing teams to foster collaboration and achieve goals.' }
            ],
            backgroundImage: 'images/hp-detail-bg.jpg'
        },
        citi: {
            title: "CITI Program Certifications",
            description: "Certified in the foundational principles of ethical research, ensuring compliance and integrity in academic and professional studies.",
            skills: [
                { name: 'Behavioral Research', icon: 'fas fa-book-open', reason: 'Certified in the ethical standards and best practices required for conducting social and behavioral research.' },
                { name: 'Investigator Conduct', icon: 'fas fa-user-shield', reason: 'Completed training on the professional responsibilities and ethical conduct of research investigators.' },
                { name: 'Conflict of Interest', icon: 'fas fa-balance-scale', reason: 'Trained to identify and manage potential conflicts of interest to ensure research integrity.' }
            ],
            backgroundImage: 'images/citi-detail-bg.jpg'
        }
    };
    
    const mainContent = document.getElementById('main-content');
    const detailViewContainer = document.getElementById('detail-view-container');
    const mainPageCards = document.querySelectorAll('#main-content .card');
    const navLinks = document.querySelectorAll('.nav-link');
    const educationView = document.getElementById('education-view');
    const skillsView = document.getElementById('skills-view');
    let tooltip = null; 
    let scrollPosition = 0;

    function showDetailView(id) {
        scrollPosition = window.scrollY;
        document.body.style.overflow = 'hidden';

        const data = portfolioData[id];
        if (!data) return;

        let detailBodyHtml = '';
        
        const description = data.synopsis || data.description;
        let linksHtml = '';
        if (data.projectLinks && data.projectLinks.length > 0) {
            linksHtml += '<div class="project-links">';
            data.projectLinks.forEach(link => {
                linksHtml += `<a href="${link.url}" target="_blank" class="btn btn-launch"><i class="fas fa-external-link-alt"></i> ${link.name}</a>`;
            });
            linksHtml += '</div>';
        }
        
        detailBodyHtml += `<p>${description}</p>${linksHtml}`;

        const sectionMap = {
            keyContributions: 'Key Contributions',
            productAndStrategySkills: 'Product & Strategy Skills',
            technicalSkills: 'Technical & AI Skills',
            softSkills: 'Soft & Strategic Skills',
            skills: 'Key Skills'
        };

        for (const key in sectionMap) {
            if (data[key] && data[key].length > 0) {
                detailBodyHtml += `<h4>${sectionMap[key]}</h4><div class="skills-grid">`;
                data[key].forEach(item => {
                    detailBodyHtml += `<div class="skill-card" data-reason="${item.reason || ''}"><i class="${item.icon || 'fas fa-star'}"></i> ${item.name}</div>`;
                });
                detailBodyHtml += '</div>';
            }
        }

        const detailHtml = `
            <div class="detail-view">
                <div class="detail-view-background" style="background-image: linear-gradient(to right, rgba(0,0,0,0.8) 20%, transparent), url('${data.backgroundImage}');"></div>
                <div class="back-btn"><i class="fas fa-arrow-left"></i></div>
                <div class="detail-content-wrapper">
                    <div class="detail-content">
                        <h1>${data.title}</h1>
                        ${detailBodyHtml}
                    </div>
                </div>
            </div>
        `;

        mainContent.classList.add('hidden');
        educationView.classList.add('hidden');
        skillsView.classList.add('hidden');
        detailViewContainer.innerHTML = detailHtml;
        document.querySelector('.back-btn').addEventListener('click', hideDetailView);
        setupTooltips();
    }

    function hideDetailView() {
        document.body.style.overflow = '';
        mainContent.classList.remove('hidden');
        detailViewContainer.innerHTML = '';
        window.scrollTo(0, scrollPosition);
        
        // Reset nav links
        document.getElementById('home-link').classList.add('active');
        document.getElementById('education-link').classList.remove('active');
        document.getElementById('skills-link').classList.remove('active');
    }

    function createTooltip() {
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'skill-tooltip';
            document.body.appendChild(tooltip);
        }
    }
    
    function setupTooltips() {
        const skillCards = document.querySelectorAll('.skill-card, .skill-card-fullpage');
        skillCards.forEach(card => {
            const reason = card.getAttribute('data-reason');
            if (reason) {
                card.addEventListener('mouseenter', (e) => {
                    tooltip.textContent = reason;
                    tooltip.classList.add('visible');
                    positionTooltip(e);
                });
                card.addEventListener('mousemove', positionTooltip);
                card.addEventListener('mouseleave', () => {
                    tooltip.classList.remove('visible');
                });
            }
        });
    }

    function positionTooltip(e) {
        if (tooltip && tooltip.classList.contains('visible')) {
            tooltip.style.left = `${e.clientX}px`;
            tooltip.style.top = `${e.clientY}px`;
        }
    }

    mainPageCards.forEach(card => {
        card.addEventListener('click', () => {
            const dataId = card.getAttribute('data-id');
            showDetailView(dataId);
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if(link.id === 'logo-link' || link.id === 'home-link'){
                 e.preventDefault();
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                document.getElementById('home-link').classList.add('active');
                mainContent.classList.remove('hidden');
                educationView.classList.add('hidden');
                skillsView.classList.add('hidden');
                detailViewContainer.innerHTML = '';
            } else if (link.id === 'education-link'){
                 e.preventDefault();
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                mainContent.classList.add('hidden');
                educationView.classList.remove('hidden');
                skillsView.classList.add('hidden');
                detailViewContainer.innerHTML = '';
            } else if (link.id === 'skills-link'){
                e.preventDefault();
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                mainContent.classList.add('hidden');
                educationView.classList.add('hidden');
                skillsView.classList.remove('hidden');
                detailViewContainer.innerHTML = '';
            }
        });
    });

    createTooltip();
    setupTooltips(); // Also setup for skills page on initial load
});

