/* =========================================================
   CAREER COMPASS — ASSESSMENT JAVASCRIPT
   ========================================================= */


/* =========================================================
   QUESTIONS
   ========================================================= */

const questions = [

    {
        id: "education",
        step: "STEP 01 OF 05",
        title: "Tell us about your education.",
        description: "Choose your highest completed or current education level.",
        type: "single",

        options: [
            {
                value: "12th",
                label: "12th / Higher Secondary",
                icon: "🎓"
            },
            {
                value: "diploma",
                label: "Diploma",
                icon: "📜"
            },
            {
                value: "graduation",
                label: "Graduation",
                icon: "📘"
            },
            {
                value: "postgraduation",
                label: "Post Graduation",
                icon: "📚"
            }
        ]
    },

    {
        id: "skills",
        step: "STEP 02 OF 05",
        title: "What skills do you have?",
        description: "Select all the skills you are comfortable with.",
        type: "multiple",

        options: [
            { value: "python", label: "Python", icon: "🐍" },
            { value: "java", label: "Java", icon: "☕" },
            { value: "sql", label: "SQL", icon: "🗄️" },
            { value: "html_css", label: "HTML & CSS", icon: "🌐" },
            { value: "javascript", label: "JavaScript", icon: "⚡" },
            { value: "excel", label: "Excel", icon: "📊" },
            { value: "data_analysis", label: "Data Analysis", icon: "📈" },
            { value: "ui_design", label: "UI Design", icon: "🎨" }
        ]
    },

    {
        id: "interests",
        step: "STEP 03 OF 05",
        title: "What are you interested in?",
        description: "Select the areas you enjoy or would like to explore.",
        type: "multiple",

        options: [
            { value: "data", label: "Working with Data", icon: "📊" },
            { value: "programming", label: "Programming", icon: "💻" },
            { value: "web", label: "Web & Websites", icon: "🌐" },
            { value: "design", label: "Design & Creativity", icon: "🎨" },
            { value: "business", label: "Business & Strategy", icon: "💼" },
            { value: "problem_solving", label: "Problem Solving", icon: "🧩" },
            { value: "technology", label: "New Technologies", icon: "🚀" },
            { value: "research", label: "Research & Analysis", icon: "🔎" }
        ]
    },

    {
        id: "work_style",
        step: "STEP 04 OF 05",
        title: "What describes your work style?",
        description: "Choose the work styles that suit you best.",
        type: "multiple",

        options: [
            { value: "analytical", label: "Analytical", icon: "📊" },
            { value: "creative", label: "Creative", icon: "🎨" },
            { value: "problem_solver", label: "Problem Solver", icon: "🧠" },
            { value: "independent", label: "Independent", icon: "🎯" },
            { value: "teamwork", label: "Team Oriented", icon: "🤝" },
            { value: "detail_oriented", label: "Detail Oriented", icon: "🔍" },
            { value: "organized", label: "Organized", icon: "📋" },
            { value: "flexible", label: "Flexible", icon: "🔄" }
        ]
    },

    {
        id: "goals",
        step: "STEP 05 OF 05",
        title: "What are your career goals?",
        description: "Select the goals that matter most to you.",
        type: "multiple",

        options: [
            { value: "high_salary", label: "Good Salary", icon: "💰" },
            { value: "job_security", label: "Job Security", icon: "🛡️" },
            { value: "growth", label: "Career Growth", icon: "📈" },
            { value: "remote", label: "Remote Opportunities", icon: "🏠" },
            { value: "creative_work", label: "Creative Work", icon: "✨" },
            { value: "technical", label: "Technical Career", icon: "💻" },
            { value: "leadership", label: "Leadership Opportunities", icon: "👑" },
            { value: "freelancing", label: "Freelancing", icon: "🌎" }
        ]
    }
];


/* =========================================================
   EDUCATION SPECIALIZATIONS
   ========================================================= */

const educationSpecializations = {

    "12th": [
        "PCM",
        "PCB",
        "Other"
    ],

    "diploma": [
        "Diploma in Computer Science",
        "Diploma in Information Technology",
        "Diploma in Computer Applications",
        "Diploma in Python",
        "Diploma in Java",
        "Diploma in Web Development",
        "Diploma in Data Science",
        "Diploma in Artificial Intelligence",
        "Diploma in Cyber Security",
        "Diploma in Software Development",
        "Other"
    ],

    "graduation": [
        "BCA — Bachelor of Computer Applications",
        "B.Sc in Computer Applications",
        "B.Sc Computer Science",
        "B.Sc Information Technology",
        "B.Tech Computer Science",
        "B.Tech Information Technology",
        "B.Tech Artificial Intelligence / Machine Learning",
        "B.Tech Data Science",
        "B.Tech Cyber Security",
        "B.E. Computer Science / IT",
        "Other"
    ],

    "postgraduation": [
        "MCA — Master of Computer Applications",
        "M.Sc Computer Science",
        "M.Sc Information Technology",
        "M.Tech Computer Science",
        "M.Tech Information Technology",
        "M.Tech Artificial Intelligence / Machine Learning",
        "M.Tech Data Science",
        "M.Tech Cyber Security",
        "Other"
    ]
};


/* =========================================================
   STATE
   ========================================================= */

let currentStep = 0;

let answers = {
    education: null,
    education_specialization: "",
    skills: [],
    interests: [],
    work_style: [],
    goals: []
};


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const stepLabel = document.getElementById("step-label");
const questionHeading = document.getElementById("question-heading");
const questionDescription = document.getElementById("question-description");

const progressNumber = document.getElementById("progress-number");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question-title");
const selectionHint = document.getElementById("selection-hint");

const optionsContainer = document.getElementById("options-container");
const validationMessage = document.getElementById("validation-message");

const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const nextBtnText = document.getElementById("next-btn-text");


/* =========================================================
   LOAD QUESTION
   ========================================================= */

function loadQuestion() {

    const question = questions[currentStep];

    const progress =
        ((currentStep + 1) / questions.length) * 100;


    stepLabel.textContent = question.step;

    questionHeading.textContent = question.title;

    questionDescription.textContent =
        question.description;


    progressNumber.textContent =
        `${progress}%`;

    progressBar.style.width =
        `${progress}%`;

    progressText.textContent =
        `Step ${currentStep + 1} of ${questions.length}`;


    questionNumber.textContent =
        String(currentStep + 1).padStart(2, "0");

    questionTitle.textContent =
        question.title;


    if (question.type === "single") {

        selectionHint.textContent =
            "Select one option";

    } else {

        selectionHint.textContent =
            "Select all that apply";
    }


    /* Clear old options */

    optionsContainer.innerHTML = "";


    /* =====================================================
       CREATE OPTIONS
       ===================================================== */

    question.options.forEach((option) => {

        const optionElement =
            document.createElement("label");

        optionElement.className = "option";


        const input =
            document.createElement("input");

        input.type =
            question.type === "single"
                ? "radio"
                : "checkbox";

        input.name =
            "current-answer";

        input.value =
            option.value;


        /* Restore previous selection */

        if (question.type === "single") {

            if (answers[question.id] === option.value) {

                input.checked = true;

                optionElement.classList.add("selected");
            }

        } else {

            if (
                Array.isArray(answers[question.id]) &&
                answers[question.id].includes(option.value)
            ) {

                input.checked = true;

                optionElement.classList.add("selected");
            }
        }


        /* =================================================
           OPTION CONTENT
           ================================================= */

        const content =
            document.createElement("div");

        content.className =
            "option-content";


        const icon =
            document.createElement("span");

        icon.className =
            "option-icon";

        icon.textContent =
            option.icon;


        const text =
            document.createElement("span");

        text.className =
            "option-text";

        text.textContent =
            option.label;


        content.appendChild(icon);
        content.appendChild(text);


        /* Check indicator */

        const check =
            document.createElement("span");

        check.className =
            "option-check";


        optionElement.appendChild(input);
        optionElement.appendChild(content);
        optionElement.appendChild(check);


        /* =================================================
           EDUCATION DROPDOWN
           ================================================= */

        if (question.id === "education") {

            const dropdownWrapper =
                document.createElement("div");

            dropdownWrapper.className =
                "education-dropdown-wrapper";


            const dropdownButton =
                document.createElement("button");

            dropdownButton.type =
                "button";

            dropdownButton.className =
                "education-dropdown-button";

            dropdownButton.textContent =
                answers.education === option.value &&
                    answers.education_specialization
                    ? answers.education_specialization
                    : "Select course / specialization";


            const arrow =
                document.createElement("span");

            arrow.className =
                "dropdown-arrow";

            arrow.textContent =
                "⌄";


            dropdownButton.appendChild(arrow);


            /* Dropdown menu */

            const dropdownMenu =
                document.createElement("div");

            dropdownMenu.className =
                "education-dropdown-menu";


            const specializationList =
                educationSpecializations[option.value] || [];


            specializationList.forEach((specialization) => {

                const item =
                    document.createElement("button");

                item.type =
                    "button";

                item.className =
                    "education-dropdown-item";

                item.textContent =
                    specialization;


                if (
                    answers.education === option.value &&
                    answers.education_specialization === specialization
                ) {

                    item.classList.add("active");
                }


                item.addEventListener("click", (event) => {

                    event.preventDefault();
                    event.stopPropagation();


                    /* Select education */

                    input.checked = true;

                    answers.education =
                        option.value;


                    /* Save specialization */

                    answers.education_specialization =
                        specialization;


                    /* Visual selected state */

                    document
                        .querySelectorAll(".option")
                        .forEach((card) => {

                            card.classList.remove("selected");
                        });


                    optionElement.classList.add("selected");


                    /* Update button */

                    dropdownButton.childNodes[0].textContent =
                        specialization;


                    /* Close menu */

                    dropdownMenu.classList.remove("open");

                    dropdownWrapper.classList.remove("open");


                    /* Remove active states */

                    dropdownMenu
                        .querySelectorAll(".education-dropdown-item")
                        .forEach((btn) => {

                            btn.classList.remove("active");
                        });


                    item.classList.add("active");


                    hideValidation();
                });


                dropdownMenu.appendChild(item);
            });


            /* Open / close dropdown */

            dropdownButton.addEventListener("click", (event) => {

                event.preventDefault();
                event.stopPropagation();


                /* Select education automatically */

                const previousEducation = answers.education;

                input.checked = true;

                answers.education = option.value;

                /* Reset specialization when another education box is selected */
                if (previousEducation !== option.value) {
                    answers.education_specialization = "";
                }

                /* Reset all dropdown buttons to normal text */
                document
                    .querySelectorAll(".education-dropdown-button")
                    .forEach((button) => {
                        const arrow = button.querySelector(".dropdown-arrow");

                        button.childNodes[0].textContent =
                            "Select course / specialization";

                        if (arrow) {
                            button.appendChild(arrow);
                        }
                    });

                document
                    .querySelectorAll(".option")
                    .forEach((card) => {

                        card.classList.remove("selected");
                    });


                optionElement.classList.add("selected");


                /* Close other dropdowns */

                document
                    .querySelectorAll(".education-dropdown-wrapper")
                    .forEach((wrapper) => {

                        if (wrapper !== dropdownWrapper) {

                            wrapper.classList.remove("open");

                            const menu =
                                wrapper.querySelector(
                                    ".education-dropdown-menu"
                                );

                            if (menu) {
                                menu.classList.remove("open");
                            }
                        }
                    });


                dropdownWrapper.classList.toggle("open");

                dropdownMenu.classList.toggle("open");


                hideValidation();
            });


            dropdownWrapper.appendChild(dropdownButton);
            dropdownWrapper.appendChild(dropdownMenu);

            content.appendChild(dropdownWrapper);
        }


        optionsContainer.appendChild(optionElement);


        /* =================================================
           RADIO / CHECKBOX CHANGE
           ================================================= */

        input.addEventListener("change", () => {

            if (question.type === "single" && input.checked) {

                document
                    .querySelectorAll(
                        'input[name="current-answer"]'
                    )
                    .forEach((otherInput) => {

                        if (otherInput !== input) {

                            otherInput.checked = false;

                            const otherCard =
                                otherInput.closest(".option");

                            if (otherCard) {

                                otherCard.classList.remove(
                                    "selected"
                                );
                            }
                        }
                    });


                answers.education =
                    input.value;


                /*
                 * When education changes,
                 * remove old specialization.
                 */

                if (question.id === "education") {

                    answers.education_specialization =
                        "";

                    const allDropdowns =
                        document.querySelectorAll(
                            ".education-dropdown-wrapper"
                        );

                    allDropdowns.forEach((wrapper) => {

                        wrapper.classList.remove("open");

                        const menu =
                            wrapper.querySelector(
                                ".education-dropdown-menu"
                            );

                        if (menu) {
                            menu.classList.remove("open");
                        }
                    });


                    /*
                     * Open selected card's dropdown
                     */

                    const selectedDropdown =
                        optionElement.querySelector(
                            ".education-dropdown-wrapper"
                        );

                    if (selectedDropdown) {

                        selectedDropdown.classList.add("open");

                        const menu =
                            selectedDropdown.querySelector(
                                ".education-dropdown-menu"
                            );

                        if (menu) {
                            menu.classList.add("open");
                        }
                    }
                }
            }


            /* Visual selected state */

            if (input.checked) {

                optionElement.classList.add(
                    "selected"
                );

            } else {

                optionElement.classList.remove(
                    "selected"
                );
            }


            hideValidation();

            saveCurrentAnswer();
        });


        /* =================================================
           CLICK EDUCATION CARD
           ================================================= */

        if (question.id === "education") {

            optionElement.addEventListener(
                "click",
                (event) => {

                    /*
                     * If dropdown itself was clicked,
                     * don't trigger card logic.
                     */

                    if (
                        event.target.closest(
                            ".education-dropdown-wrapper"
                        )
                    ) {
                        return;
                    }


                    input.checked = true;

                    answers.education =
                        option.value;


                    /*
                     * New education = clear old specialization
                     */

                    answers.education_specialization =
                        "";


                    document
                        .querySelectorAll(".option")
                        .forEach((card) => {

                            card.classList.remove(
                                "selected"
                            );
                        });


                    optionElement.classList.add(
                        "selected"
                    );


                    /*
                     * Close all dropdowns
                     */

                    document
                        .querySelectorAll(
                            ".education-dropdown-wrapper"
                        )
                        .forEach((wrapper) => {

                            wrapper.classList.remove(
                                "open"
                            );

                            const menu =
                                wrapper.querySelector(
                                    ".education-dropdown-menu"
                                );

                            if (menu) {
                                menu.classList.remove(
                                    "open"
                                );
                            }
                        });


                    /*
                     * Open clicked card dropdown
                     */

                    dropdownWrapper.classList.add(
                        "open"
                    );

                    dropdownMenu.classList.add(
                        "open"
                    );


                    saveCurrentAnswer();

                    hideValidation();
                }
            );
        }

    });


    /* =====================================================
       BACK BUTTON
       ===================================================== */

    if (currentStep === 0) {

        backBtn.style.visibility =
            "hidden";

    } else {

        backBtn.style.visibility =
            "visible";
    }


    /* =====================================================
       LAST BUTTON
       ===================================================== */

    if (
        currentStep === questions.length - 1
    ) {

        nextBtnText.textContent =
            "See My Results";

    } else {

        nextBtnText.textContent =
            "Continue";
    }


    hideValidation();
}


/* =========================================================
   SAVE CURRENT ANSWER
   ========================================================= */

function saveCurrentAnswer() {

    const question =
        questions[currentStep];


    const selectedInputs =
        document.querySelectorAll(
            'input[name="current-answer"]:checked'
        );


    if (question.type === "single") {

        answers[question.id] =
            selectedInputs.length
                ? selectedInputs[0].value
                : null;

    } else {

        answers[question.id] =
            Array.from(selectedInputs)
                .map(input => input.value);
    }
}


/* =========================================================
   VALIDATION
   ========================================================= */

function validateCurrentStep() {

    saveCurrentAnswer();


    const question =
        questions[currentStep];


    if (question.id === "education") {

        if (!answers.education) {

            showValidation(
                "Please select your education level."
            );

            return false;
        }


        if (!answers.education_specialization) {

            showValidation(
                "Please select your course / specialization."
            );

            return false;
        }


        return true;
    }


    if (
        !answers[question.id] ||
        answers[question.id].length === 0
    ) {

        showValidation(
            "Please select at least one option to continue."
        );

        return false;
    }


    return true;
}


/* =========================================================
   VALIDATION MESSAGE
   ========================================================= */

function showValidation(message) {

    validationMessage.textContent =
        message;

    validationMessage.classList.add(
        "show"
    );


    const questionCard =
        document.querySelector(
            ".question-card"
        );


    if (questionCard) {

        questionCard.classList.add(
            "validation-error"
        );


        setTimeout(() => {

            questionCard.classList.remove(
                "validation-error"
            );

        }, 400);
    }
}


function hideValidation() {

    validationMessage.textContent =
        "";

    validationMessage.classList.remove(
        "show"
    );
}


/* =========================================================
   NEXT BUTTON
   ========================================================= */

nextBtn.addEventListener("click", () => {

    if (!validateCurrentStep()) {
        return;
    }


    if (
        currentStep <
        questions.length - 1
    ) {

        currentStep++;

        loadQuestion();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        submitAssessment();
    }
});


/* =========================================================
   BACK BUTTON
   ========================================================= */

backBtn.addEventListener("click", () => {

    if (currentStep > 0) {

        saveCurrentAnswer();

        currentStep--;

        loadQuestion();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});


/* =========================================================
   SUBMIT ASSESSMENT
   ========================================================= */

async function submitAssessment() {

    nextBtn.disabled = true;

    nextBtnText.textContent =
        "Analyzing...";


    try {

        const response =
            await fetch("/result", {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({

                    0: answers.education,

                    1: answers.skills,

                    2: answers.interests,

                    3: answers.work_style,

                    4: answers.goals,

                    education_specialization:
                        answers.education_specialization || ""
                })
            });


        if (!response.ok) {

            throw new Error(
                "Something went wrong."
            );
        }


        const result =
            await response.text();


        document.open();

        document.write(result);

        document.close();


    } catch (error) {

        console.error(error);


        showValidation(
            "Unable to process your assessment. Please try again."
        );


        nextBtn.disabled = false;

        nextBtnText.textContent =
            "See My Results";
    }
}


/* =========================================================
   START
   ========================================================= */

loadQuestion();