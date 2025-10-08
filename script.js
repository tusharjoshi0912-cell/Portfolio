document.addEventListener('DOMContentLoaded', () => {
    // --- Get all necessary elements from the DOM ---
    const mainContent = document.getElementById('main-content');
    const detailViewContainer = document.getElementById('detail-view-container');
    const mainPageCards = document.querySelectorAll('#main-content .card');
    const navLinks = document.querySelectorAll('.nav-link');
    const educationView = document.getElementById('education-view');
    const skillsView = document.getElementById('skills-view');
    const aboutView = document.getElementById('about-view');
    const introContainer = document.getElementById('intro-container');
    const introVideo = document.getElementById('intro-video');
    const makingOfIntroContainer = document.getElementById('making-of-intro-container');
    const makingOfIntroVideo = document.getElementById('making-of-intro-video');

    let tooltip = null; 
    let scrollPosition = 0;

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
                { name: 'Bilingual Translation', icon: 'fas fa-language', reason: 'Translated sensitive and technical research documents, ensuring methodological integrity and clear participant understanding.' },
                { name: 'Protocol Adherence', icon: 'fas fa-clipboard-check', reason: 'Meticulously followed complex experimental protocols to ensure the validity and reliability of the collected data.' }
            ],
            softSkills: [
                { name: 'Cross-Cultural Communication', icon: 'fas fa-globe', reason: 'Acted as the primary liaison between the US-based research team and local Gujarati/Hindi-speaking participants.' },
                { name: 'Adaptability', icon: 'fas fa-sync-alt', reason: 'Demonstrated the ability to quickly learn and apply intricate research methodologies in a time-intensive academic environment.' },
                { name: 'Autonomy & Initiative', icon: 'fas fa-user-check', reason: 'Was entrusted to work without direct supervision, taking full ownership of conducting sessions and managing participant groups.' },
                { name: 'Teamwork', icon: 'fas fa-people-arrows', reason: 'Fostered a positive and collaborative environment by proactively assisting the visiting research team beyond official duties.' },
                { name: 'On-the-Fly Problem-Solving', icon: 'fas fa-lightbulb', reason: 'Quickly and effectively resolved logistical and interpersonal challenges that arose during live research sessions in the field.' }
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
                { name: 'Trauma-Informed Care', icon: 'fas fa-heart', reason: 'Applied a deep understanding of trauma to create sensitive and effective therapeutic activities suitable for a vulnerable population.' },
                { name: 'Program Development', icon: 'fas fa-cogs', reason: 'Contributed to the foundational development of a large-scale mental health intervention program for a vulnerable community.'}
            ],
            softSkills: [
                { name: 'Diligence & Dedication', icon: 'fas fa-check-double', reason: 'Recognized for a highly committed work ethic in preparing the foundational components of a critical community project.' },
                { name: 'Focus & Concentration', icon: 'fas fa-bullseye', reason: 'Maintained deep focus while developing complex psychological interventions in a high-stakes collaboration with Gujarat Police.' },
                { name: 'Empathy & Sensitivity', icon: 'fas fa-comment-dots', reason: 'Designed all interventions with a high degree of empathy, ensuring they were appropriate and supportive for individuals who have experienced trauma.' },
                { name: 'Reliability', icon: 'fas fa-user-shield', reason: 'Was trusted to create the core therapeutic activities that the entire rehabilitation project was built upon.' },
                { name: 'Emotional Resilience', icon: 'fas fa-shield-alt', reason: 'Worked effectively with sensitive subject matter related to trauma while maintaining professional focus and personal well-being.'}
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
                { name: 'Initiative & Autonomy', icon: 'fas fa-star', reason: 'Identified a personal learning challenge and took the initiative to build the solution from scratch, without being told to.' },
                { name: 'Problem-Solving', icon: 'fas fa-check-circle', reason: 'Logically identified a need and figured out the steps to engineer a practical, technology-driven solution using available tools.' },
                { name: 'Learning Agility', icon: 'fas fa-brain', reason: 'Quickly learned how to leverage the power of a new technology (generative AI) to achieve a specific, tangible goal.' },
                { name: 'Project Management', icon: 'fas fa-clipboard-list', reason: 'Managed this project from concept to completion, defining the requirements and seeing it through to a successful launch.' }
            ],
            backgroundImage: 'images/yoga-tool-detail-bg.jpg'
        },
        workshop: {
            title: "AI Project: Gemini for Learners",
            synopsis: "As a strategic initiative for the Google Student Ambassador program, this unique and interactive webpage was created to support the candidacy. Acting as project lead, Google Gemini was guided to build the entire site, which was designed as a custom resource for psychology students and served as a live demonstration of the ability to leverage AI for rapid development.",
            projectLinks: [
                { name: 'Launch Workshop Page', url: 'https://gemini-for-learners-22yg.vercel.app/' }
            ],
            keyContributions: [
                { name: 'Innovative Application Tool', icon: 'fas fa-lightbulb', reason: 'Built a unique and interactive webpage as part of the application, a creative approach that made the candidacy stand out and led to the selection.' },
                { name: 'AI Project Lead', icon: 'fas fa-user-tie', reason: 'Acted as the project director, providing the vision and instructions for Google Gemini to execute the technical development from the ground up.' },
                { name: 'Audience-Specific Design', icon: 'fas fa-users', reason: 'Designed the webpage specifically for psychology students, showing an ability to think about a target audience and create a tool that meets their needs.' }
            ],
            technicalSkills: [
                { name: 'AI-Powered Development', icon: 'fas fa-robot', reason: 'Proven ability to successfully manage the creation of a web application using a generative AI as a development partner.' },
                { name: 'Prompt Engineering', icon: 'fas fa-terminal', reason: 'Learned and applied the core skill of writing clear and effective instructions to get a complex result from an AI.' },
                { name: 'Rapid Prototyping', icon: 'fas fa-bolt', reason: 'Demonstrated the ability to take an idea and turn it into a finished, working product quickly and efficiently.' },
                { name: 'Project Execution', icon: 'fas fa-clipboard-check', reason: 'Managed this project from the initial idea to the final deployed website, showing the ability to see a project through to completion independently.' }
            ],
            softSkills: [
                { name: 'Initiative', icon: 'fas fa-star', reason: 'Identified an opportunity to stand out and built a solution from scratch, without waiting to be assigned a project.' },
                { name: 'Innovative Thinking', icon: 'fas fa-brain', reason: 'Found a new and better way to approach a challenge (applying for a program) by using technology creatively.' },
                { name: 'Resourcefulness', icon: 'fas fa-tools', reason: 'Skillfully used a powerful tool (Gemini) to build something that would have otherwise required extensive coding knowledge.' },
                { name: 'Goal-Oriented Action', icon: 'fas fa-bullseye', reason: 'Set a clear goal (getting selected as an ambassador) and built a specific tool to help achieve it.' }
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
            projectLinks: [
                { name: 'View Badge', url: 'https://www.credly.com/badges/b4a8470e-0953-4f01-ba51-4ddadc5238cf/linked_in_profile' }
            ],
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
             projectLinks: [
                { name: 'View Deloitte Certificate', url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_LHKgREX7Nh9s9umRi_1749738556611_completion_certificate.pdf' },
                { name: 'View GE Aerospace Certificate', url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ay2tsYxaTif7Nt6z7/bAPubTkawzGexc6TT_ay2tsYxaTif7Nt6z7_LHKgREX7Nh9s9umRi_1749653966396_completion_certificate.pdf' },
                { name: 'View BCG Certificate 1', url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/4Rfzeut8gXmNwfxXv_SKZxezskWgmFjRvj9_LHKgREX7Nh9s9umRi_1750346618641_completion_certificate.pdf' },
                { name: 'View BCG Certificate 2', url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/ntTvo6ru6Tq3A2JPq_SKZxezskWgmFjRvj9_LHKgREX7Nh9s9umRi_1750776823883_completion_certificate.pdf' }
            ],
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
            projectLinks: [
                { name: 'View Badge', url: 'https://www.life-global.org/en/badges/b4029e25-6f6f-48ef-aa80-a53350ce8df4' }
            ],
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
             projectLinks: [
                { name: 'Verify Conduct of Research Cert.', url: 'https://www.citiprogram.org/verify/?weac6cc34-9148-4e66-a372-7ca0033ad88b-66728301' },
                { name: 'Verify SBE Research Cert.', url: 'https://www.citiprogram.org/verify/?wc2ec2ad4-1dd7-4b32-9990-d4986cf29692-66728302' },
                { name: 'Verify Conflicts of Interest Cert.', url: 'https://www.citiprogram.org/verify/?wd0c83cf2-e344-46f8-81ce-659104b0deec-66728303' }
            ],
            skills: [
                { name: 'Behavioral Research', icon: 'fas fa-book-open', reason: 'Certified in the ethical standards and best practices required for conducting social and behavioral research.' },
                { name: 'Investigator Conduct', icon: 'fas fa-user-shield', reason: 'Completed training on the professional responsibilities and ethical conduct of research investigators.' },
                { name: 'Conflict of Interest', icon: 'fas fa-balance-scale', reason: 'Trained to identify and manage potential conflicts of interest to ensure research integrity.' }
            ],
            backgroundImage: 'images/citi-detail-bg.jpg'
        },
        makingOf: {
            title: "The Making Of This Portfolio",
            synopsis: "This portfolio is a real-world case study in modern product development, built to showcase a unique workflow: a clear human vision guiding a powerful generative AI to create a beautiful, functional, and immersive user experience. The process was a testament to iterative design, persistent debugging, and the relentless pursuit of a pixel-perfect final product, demonstrating that the most crucial skill in the age of AI is the ability to direct the tools with precision and a strong sense of design.",
            keyContributions: [
                { name: 'Tushar Joshi', icon: 'fas fa-user-tie', reason: 'Project Director & AI Prompt Engineer. Responsible for the core vision, design direction, and the iterative process of refining AI-generated code to achieve a pixel-perfect final product.' },
                { name: 'Google Gemini', icon: 'fas fa-robot', reason: 'Lead Developer & Code Generation. Responsible for translating natural language prompts and design requirements into functional HTML, CSS, and JavaScript code.' }
            ],
            productAndStrategySkills: [
                 { name: 'Iterative Design & Prototyping', icon: 'fas fa-sync-alt', reason: 'Engaged in an extensive back-and-forth process of generating, testing, and refining every visual and functional detail of the portfolio.' },
                 { name: 'UI/UX Analysis', icon: 'fas fa-search', reason: 'Demonstrated a keen eye for detail by identifying and flagging layout breaks, alignment issues, and design inconsistencies for correction.' },
                 { name: 'Strategic Branding', icon: 'fas fa-bullseye', reason: 'Made key decisions regarding logos, color schemes, and content presentation to build a cohesive and professional personal brand.' },
                 { name: 'Project Management', icon: 'fas fa-clipboard-list', reason: 'Oversaw the project from initial concept to final deployment, managing tasks and iterative feedback loops with the AI developer.' },
                 { name: 'Creative Direction', icon: 'fas fa-palette', reason: 'Defined and maintained the portfolio\'s visual identity, including theme, layout, typography, and color palette.' },
                 { name: 'User Experience Design', icon: 'fas fa-map-signs', reason: 'Architected the overall user journey, from the main gallery to the detailed project views, ensuring a seamless and intuitive navigation experience.' }
            ],
            technicalSkills: [
                 { name: 'Prompt Engineering', icon: 'fas fa-terminal', reason: 'The core technical skill used to direct the AI with precise, effective instructions to generate the desired code and content.' },
                 { name: 'AI-Powered Development', icon: 'fas fa-robot', reason: 'Managed the end-to-end creation of a complex web application by acting as the human director for a generative AI developer.' },
                 { name: 'Debugging & Fault Tolerance', icon: 'fas fa-bug', reason: 'Showed persistence in reporting and helping to fix functional bugs until the project was flawless and robust.' },
                 { name: 'Quality Assurance', icon: 'fas fa-check-double', reason: 'Conducted rigorous testing and visual reviews at every stage to ensure a high-quality, bug-free, and pixel-perfect final product.' },
                 { name: 'AI Workflow Management', icon: 'fas fa-cogs', reason: 'Developed and refined a unique workflow for collaborating with a generative AI on a complex software project.' },
                 { name: 'Frontend Architecture', icon: 'fas fa-sitemap', reason: 'Directed the structural organization of the project\'s code, ensuring HTML, CSS, and JavaScript worked cohesively to create a responsive and performant site.' }
            ],
            backgroundImage: 'images/making-of-detail-bg.jpg'
        }
    };
    
    // --- MODIFIED: This is the function that now handles showing the detail view, with or without a video ---
    function openProject(id) {
        // Special case for 'makingOf' project: play video first
        if (id === 'makingOf') {
            playMakingOfIntroAndShowDetail(id);
        } else {
            // For all other projects, show the detail view directly
            showDetailView(id);
        }
    }

    // --- NEW: Function specifically for the 'makingOf' video intro ---
    function playMakingOfIntroAndShowDetail(id) {
        mainContent.classList.add('hidden');
        makingOfIntroContainer.classList.add('visible');
        makingOfIntroVideo.currentTime = 0;

        makingOfIntroVideo.play().then(() => {
            makingOfIntroVideo.muted = false;
        }).catch(error => {
            console.error("Error playing 'Making Of' video:", error);
            makingOfIntroContainer.classList.remove('visible');
            showDetailView(id); // Fallback to showing content directly
        });

        const onVideoEnd = () => {
            makingOfIntroContainer.classList.remove('visible');
            setTimeout(() => {
                showDetailView(id);
            }, 500);
            makingOfIntroVideo.removeEventListener('ended', onVideoEnd);
        };
        makingOfIntroVideo.addEventListener('ended', onVideoEnd, { once: true });
    }
    
    function showDetailView(id) {
        scrollPosition = window.scrollY;
        
        const data = portfolioData[id];
        if (!data) return;

        let introHtml = `
            <div class="detail-intro-section" style="background-image: url('${data.backgroundImage}');">
                <div class="detail-intro-content">
                     <h1>${data.title}</h1>
        `;

        const description = data.synopsis || data.description;
        introHtml += `<p>${description}</p>`;

        if (data.projectLinks && data.projectLinks.length > 0) {
            introHtml += '<div class="project-links">';
            data.projectLinks.forEach(link => {
                introHtml += `<a href="${link.url}" target="_blank" class="btn btn-launch"><i class="fas fa-external-link-alt"></i> ${link.name}</a>`;
            });
            introHtml += '</div>';
        }
        introHtml += '</div></div>';

        let sectionsHtml = '<div class="detail-sections-wrapper">';
        const sectionMap = {
            keyContributions: 'Key Contributions',
            productAndStrategySkills: 'Product & Strategy Skills',
            technicalSkills: 'Technical & AI Skills',
            softSkills: 'Soft & Strategic Skills',
            skills: 'Key Skills'
        };

        for (const key in sectionMap) {
            if (data[key] && data[key].length > 0) {
                sectionsHtml += `<h4>${sectionMap[key]}</h4><div class="skills-grid">`;
                data[key].forEach(item => {
                    sectionsHtml += `<div class="skill-card" data-reason="${item.reason || ''}"><i class="${item.icon || 'fas fa-star'}"></i> ${item.name}</div>`;
                });
                sectionsHtml += '</div>';
            }
        }
        sectionsHtml += '</div>';

        const detailHtml = `
            <div class="detail-view">
                <div class="back-btn"><i class="fas fa-arrow-left"></i></div>
                <div class="detail-content-wrapper">
                    ${introHtml}
                    ${sectionsHtml}
                </div>
            </div>
        `;

        mainContent.classList.add('hidden');
        educationView.classList.add('hidden');
        skillsView.classList.add('hidden');
        aboutView.classList.add('hidden');
        detailViewContainer.innerHTML = detailHtml;
        document.querySelector('.back-btn').addEventListener('click', hideDetailView);
        setupTooltips();
    }

    function hideDetailView() {
        mainContent.classList.remove('hidden');
        detailViewContainer.innerHTML = '';
        window.scrollTo(0, scrollPosition);
        
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.getElementById('home-link').classList.add('active');
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

    // MODIFIED: Simplified the card click listener to use the new openProject function
    mainPageCards.forEach(card => {
        card.addEventListener('click', () => {
            const dataId = card.getAttribute('data-id');
            openProject(dataId); // Use the new handler function
        });
    });

    // --- Function to play the intro video and then show the about section ---
    function playAboutIntroAndShowView() {
        // Hide all other sections first
        mainContent.classList.add('hidden');
        educationView.classList.add('hidden');
        skillsView.classList.add('hidden');
        aboutView.classList.add('hidden'); // Ensure about view is hidden initially
        detailViewContainer.innerHTML = '';

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.getElementById('about-link').classList.add('active');

        // Make the video container visible and play the video
        introContainer.classList.add('visible');
        introVideo.currentTime = 0; // Rewind the video to the start

        introVideo.play().then(() => {
            introVideo.muted = false; // Attempt to unmute after play starts
        }).catch(error => {
            console.error("Error attempting to play video:", error);
            // If play fails, hide video and show the section immediately as a fallback
            introContainer.classList.remove('visible');
            aboutView.classList.remove('hidden');
        });

        // Add a one-time listener for when the video ends
        const onVideoEnd = () => {
            introContainer.classList.remove('visible'); // Fade out video
            
            setTimeout(() => {
                aboutView.classList.remove('hidden'); // Fade in the about section
            }, 500); // Small delay to make the transition smoother

            // IMPORTANT: Remove the listener to prevent it from firing again
            introVideo.removeEventListener('ended', onVideoEnd);
        };

        introVideo.addEventListener('ended', onVideoEnd, { once: true });
    }

    // --- MODIFIED: Navigation click handler ---
    function handleNavClick(e) {
        e.preventDefault();
        const linkId = e.currentTarget.id;

        // If the 'About' link is clicked, run the special video function
        if (linkId === 'about-link') {
            playAboutIntroAndShowView();
            return; // Stop here for the about link
        }

        // --- Logic for all OTHER nav links ---
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        e.currentTarget.classList.add('active');

        mainContent.classList.add('hidden');
        educationView.classList.add('hidden');
        skillsView.classList.add('hidden');
        aboutView.classList.add('hidden');
        detailViewContainer.innerHTML = '';

        setTimeout(() => {
            if (linkId === 'home-link' || linkId === 'logo-link') {
                mainContent.classList.remove('hidden');
            } else if (linkId === 'education-link') {
                educationView.classList.remove('hidden');
            } else if (linkId === 'skills-link') {
                skillsView.classList.remove('hidden');
            }
        }, 50);
    }
    
    // Attach the unified click handler to all nav links
    document.querySelectorAll('.nav-link, #logo-link').forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // Initialize tooltips on page load
    createTooltip();
    setupTooltips();
});

