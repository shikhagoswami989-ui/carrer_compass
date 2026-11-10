const careers = [
    {
        id: "python",
        title: "Python Developer",
        category: "Development",
        icon: "🐍",
        description: "Build applications, automate tasks and develop backend systems using Python.",
        skills: ["Python", "SQL", "Flask"],
        overview: "Python Developers create applications, backend systems, automation tools and APIs using Python.",
        roles: ["Python Developer", "Backend Developer", "Automation Engineer"],
        education: "BCA, B.Sc. Computer Applications, MCA or another relevant technical qualification.",
        companies: [
            { name: "Infosys", url: "https://www.infosys.com/careers/" },
            { name: "TCS", url: "https://www.tcs.com/careers" },
            { name: "Wipro", url: "https://careers.wipro.com/" }
        ]
    },
    {
        id: "java",
        title: "Java Developer",
        category: "Development",
        icon: "☕",
        description: "Develop software applications and backend systems using Java.",
        skills: ["Java", "OOP", "SQL"],
        overview: "Java Developers build software, web backends and enterprise applications.",
        roles: ["Java Developer", "Software Engineer", "Backend Developer"],
        education: "BCA, B.Sc. Computer Applications, MCA or a relevant technical qualification.",
        companies: [
            { name: "Infosys", url: "https://www.infosys.com/careers/" },
            { name: "TCS", url: "https://www.tcs.com/careers" },
            { name: "Wipro", url: "https://careers.wipro.com/" }
        ]
    },
    {
        id: "web",
        title: "Web Developer",
        category: "Development",
        icon: "🌐",
        description: "Create and maintain websites and interactive web applications.",
        skills: ["HTML", "CSS", "JavaScript"],
        overview: "Web Developers build and maintain websites, web applications and interactive digital experiences.",
        roles: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
        education: "BCA, B.Sc. Computer Applications, MCA or a relevant technical qualification.",
        companies: [
            { name: "Infosys", url: "https://www.infosys.com/careers/" },
            { name: "TCS", url: "https://www.tcs.com/careers" },
            { name: "Wipro", url: "https://careers.wipro.com/" }
        ]
    },
    {
        id: "data",
        title: "Data Analyst",
        category: "Data & Analytics",
        icon: "📊",
        description: "Analyse data, identify trends and support informed decisions.",
        skills: ["Excel", "SQL", "Python"],
        overview: "Data Analysts organise and analyse data to identify trends and help organisations make decisions.",
        roles: ["Data Analyst", "Reporting Analyst", "Business Intelligence Analyst"],
        education: "A relevant graduation degree, with data analysis skills and practical projects.",
        companies: [
            { name: "Accenture", url: "https://www.accenture.com/in-en/careers" },
            { name: "Infosys", url: "https://www.infosys.com/careers/" },
            { name: "TCS", url: "https://www.tcs.com/careers" }
        ]
    },
    {
        id: "ai",
        title: "AI/ML Engineer",
        category: "AI & ML",
        icon: "🤖",
        description: "Build systems that learn from data using artificial intelligence.",
        skills: ["Python", "Statistics", "Machine Learning"],
        overview: "AI/ML Engineers develop and evaluate systems that learn patterns from data.",
        roles: ["Machine Learning Engineer", "AI Engineer", "Applied AI Developer"],
        education: "A relevant technical degree with programming, mathematics and machine learning knowledge.",
        companies: [
            { name: "Google", url: "https://careers.google.com/" },
            { name: "Microsoft", url: "https://careers.microsoft.com/" },
            { name: "Amazon", url: "https://www.amazon.jobs/" }
        ]
    },
    {
        id: "cyber",
        title: "Cyber Security Analyst",
        category: "Cybersecurity",
        icon: "🔐",
        description: "Help protect computer systems, networks and information.",
        skills: ["Networking", "Linux", "Security Basics"],
        overview: "Cybersecurity Analysts help monitor systems, identify security risks and protect digital information.",
        roles: ["Security Analyst", "SOC Analyst", "Information Security Analyst"],
        education: "A relevant IT qualification with networking, operating system and security fundamentals.",
        companies: [
            { name: "IBM", url: "https://www.ibm.com/careers" },
            { name: "Cisco", url: "https://jobs.cisco.com/" },
            { name: "Accenture", url: "https://www.accenture.com/in-en/careers" }
        ]
    },
    {
        id: "uiux",
        title: "UI/UX Designer",
        category: "Design",
        icon: "🎨",
        description: "Design useful and accessible digital experiences for users.",
        skills: ["Figma", "Wireframing", "Prototyping"],
        overview: "UI/UX Designers research user needs and design clear, accessible and easy-to-use digital products.",
        roles: ["UI Designer", "UX Designer", "Product Designer"],
        education: "A relevant degree or portfolio demonstrating design fundamentals and practical projects.",
        companies: [
            { name: "Adobe", url: "https://careers.adobe.com/" },
            { name: "Google", url: "https://careers.google.com/" },
            { name: "Microsoft", url: "https://careers.microsoft.com/" }
        ]
    },
    {
        id: "business",
        title: "Business Analyst",
        category: "Business",
        icon: "💡",
        description: "Understand business needs and improve processes using data and technology.",
        skills: ["Excel", "SQL Basics", "Communication"],
        overview: "Business Analysts understand business requirements, analyse processes and help teams develop solutions.",
        roles: ["Business Analyst", "IT Business Analyst", "Requirements Analyst"],
        education: "A relevant graduation degree with analytical, communication and documentation skills.",
        companies: [
            { name: "Accenture", url: "https://www.accenture.com/in-en/careers" },
            { name: "Deloitte", url: "https://www.deloitte.com/careers" },
            { name: "Infosys", url: "https://www.infosys.com/careers/" }
        ]
    }
];

const careerGrid = document.getElementById("careerGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("filters");
const careerCount = document.getElementById("careerCount");
const noResults = document.getElementById("noResults");

let selectedCategory = "All";

function renderCareers() {
    if (!careerGrid) return;

    const query = (searchInput?.value || "").trim().toLowerCase();

    const filteredCareers = careers.filter(career => {
        const searchableText = [
            career.title,
            career.category,
            career.description,
            career.overview,
            ...career.skills,
            ...career.roles
        ].join(" ").toLowerCase();

        const matchesSearch = searchableText.includes(query);

        const matchesCategory =
            selectedCategory === "All" ||
            career.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    careerGrid.innerHTML = filteredCareers.map(career => `
        <article class="career-card">
            <div class="card-icon">${career.icon}</div>

            <span class="card-category">${career.category}</span>

            <h3>${career.title}</h3>

            <p>${career.description}</p>

            <div class="skill-preview">
                ${career.skills.map(skill =>
        `<span class="skill-tag">${skill}</span>`
    ).join("")}
            </div>

            <button
                type="button"
                class="explore-btn"
                data-career-id="${career.id}">
                Explore Career <span aria-hidden="true">→</span>
            </button>
        </article>
    `).join("");

    if (careerCount) {
        careerCount.textContent =
            `${filteredCareers.length} ${filteredCareers.length === 1 ? "career" : "careers"}`;
    }

    if (noResults) {
        noResults.hidden = filteredCareers.length !== 0;
    }
}

// Search careers by title, category, skills or job roles.
searchInput?.addEventListener("input", renderCareers);

// Category filters.
filters?.addEventListener("click", event => {
    const button = event.target.closest(".filter");
    if (!button) return;

    selectedCategory = button.dataset.category || "All";

    filters.querySelectorAll(".filter").forEach(filter => {
        const isActive = filter === button;
        filter.classList.toggle("active", isActive);
        filter.setAttribute("aria-pressed", String(isActive));
    });

    renderCareers();
});

// Career details modal.
const modal = document.getElementById("careerModal");
const closeModalButton = document.getElementById("closeModal");

function openCareerDetails(careerId) {
    const career = careers.find(item => item.id === careerId);
    if (!career || !modal) return;

    document.getElementById("modalCategory").textContent = career.category;
    document.getElementById("modalTitle").textContent = career.title;
    document.getElementById("modalOverview").textContent = career.overview;

    const rolesElement = document.getElementById("modalRoles");
    rolesElement.innerHTML = career.roles
        .map(role => `<li>${role}</li>`)
        .join("");

    const skillsElement = document.getElementById("modalSkills");
    skillsElement.innerHTML = career.skills
        .map(skill => `<span class="detail-tag">${skill}</span>`)
        .join("");

    document.getElementById("modalEducation").textContent = career.education;

    const companiesElement = document.getElementById("modalCompanies");
    companiesElement.innerHTML = career.companies.map(company => `
        <a
            class="company-link"
            href="${company.url}"
            target="_blank"
            rel="noopener noreferrer">
            ${company.name} ↗
        </a>
    `).join("");

    modal.hidden = false;
    document.body.style.overflow = "hidden";

    closeModalButton?.focus();
}

function closeCareerDetails() {
    if (!modal) return;

    modal.hidden = true;
    document.body.style.overflow = "";
}

careerGrid?.addEventListener("click", event => {
    const button = event.target.closest("[data-career-id]");
    if (!button) return;

    openCareerDetails(button.dataset.careerId);
});

closeModalButton?.addEventListener("click", closeCareerDetails);

modal?.addEventListener("click", event => {
    if (event.target === modal) {
        closeCareerDetails();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal && !modal.hidden) {
        closeCareerDetails();
    }
});

// Initial page render.
renderCareers();