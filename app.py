from flask import Flask, render_template, request
import json
import os

app = Flask(__name__)

# =========================================================
# LOAD CAREER DATABASE
# =========================================================

CAREER_FILE = os.path.join(
    app.root_path,
    "data",
    "careers.json"
)

with open(CAREER_FILE, "r", encoding="utf-8") as file:
    careers = json.load(file)


# =========================================================
# HOME
# =========================================================

@app.route("/")
def home():
    return render_template("index.html")


# =========================================================
# ASSESSMENT
# =========================================================

@app.route("/assessment")
def assessment():
    return render_template("assessment.html")

# =========================================================
# CAREER EXPLORER
# =========================================================

@app.route("/career-explorer")
def career_explorer():
    return render_template("career_explorer.html")

# =========================================================
# SKILL ASSESSMENT QUIZ
# =========================================================

@app.route("/skill-quiz")
def skill_quiz():
    return render_template("skill_quiz.html")

# =========================================================
# CAREER DATABASE
# =========================================================

# =========================================================
# EDUCATION SPECIALIZATION MATCHING
# =========================================================

# Education specialization matching for each career
career_specializations = {

    "Data Analyst": {
        "12th": ["PCM", "PCB"],
        "diploma": [
            "Diploma in Computer Science",
            "Diploma in Information Technology",
            "Diploma in Computer Applications",
            "Diploma in Data Science",
            "Diploma in Artificial Intelligence"
        ],
        "graduation": [
            "BCA — Bachelor of Computer Applications",
            "B.Sc in Computer Applications",
            "B.Sc Computer Science",
            "B.Sc Information Technology",
            "B.Tech Artificial Intelligence / Machine Learning",
            "B.Tech Data Science"
        ],
        "postgraduation": [
            "MCA — Master of Computer Applications",
            "M.Sc Computer Science",
            "M.Sc Information Technology",
            "M.Tech Artificial Intelligence / Machine Learning",
            "M.Tech Data Science"
        ]
    },

    "Python Developer": {
        "12th": ["PCM"],
        "diploma": [
            "Diploma in Computer Science",
            "Diploma in Information Technology",
            "Diploma in Computer Applications",
            "Diploma in Python",
            "Diploma in Software Development"
        ],
        "graduation": [
            "BCA — Bachelor of Computer Applications",
            "B.Sc in Computer Applications",
            "B.Sc Computer Science",
            "B.Sc Information Technology",
            "B.Tech Computer Science",
            "B.Tech Information Technology"
        ],
        "postgraduation": [
            "MCA — Master of Computer Applications",
            "M.Sc Computer Science",
            "M.Sc Information Technology",
            "M.Tech Computer Science",
            "M.Tech Information Technology"
        ]
    },

    "Web Developer": {
        "12th": ["PCM"],
        "diploma": [
            "Diploma in Computer Science",
            "Diploma in Information Technology",
            "Diploma in Computer Applications",
            "Diploma in Web Development",
            "Diploma in Software Development"
        ],
        "graduation": [
            "BCA — Bachelor of Computer Applications",
            "B.Sc in Computer Applications",
            "B.Sc Computer Science",
            "B.Sc Information Technology",
            "B.Tech Computer Science",
            "B.Tech Information Technology"
        ],
        "postgraduation": [
            "MCA — Master of Computer Applications",
            "M.Sc Computer Science",
            "M.Sc Information Technology",
            "M.Tech Computer Science",
            "M.Tech Information Technology"
        ]
    },

    "UI/UX Designer": {
        "12th": ["PCM", "PCB"],
        "diploma": [
            "Diploma in Computer Applications",
            "Diploma in Web Development",
            "Diploma in Software Development",
            "Diploma in Information Technology"
        ],
        "graduation": [
            "BCA — Bachelor of Computer Applications",
            "B.Sc in Computer Applications",
            "B.Sc Computer Science",
            "B.Sc Information Technology"
        ],
        "postgraduation": [
            "MCA — Master of Computer Applications",
            "M.Sc Computer Science",
            "M.Sc Information Technology"
        ]
    },

    "Business Analyst": {
        "12th": ["PCM", "PCB"],
        "diploma": [
            "Diploma in Computer Science",
            "Diploma in Information Technology",
            "Diploma in Computer Applications",
            "Diploma in Data Science"
        ],
        "graduation": [
            "BCA — Bachelor of Computer Applications",
            "B.Sc in Computer Applications",
            "B.Sc Computer Science",
            "B.Sc Information Technology",
            "B.Tech Computer Science",
            "B.Tech Information Technology",
            "B.Tech Data Science"
        ],
        "postgraduation": [
            "MCA — Master of Computer Applications",
            "M.Sc Computer Science",
            "M.Sc Information Technology",
            "M.Tech Data Science"
        ]
    }
}

# =========================================================
# CATEGORY SCORE FUNCTION
# =========================================================

def calculate_category_score(selected_values, career_values, weight):

    selected = set(selected_values or [])
    career = set(career_values or [])

    if not selected or not career:
        return 0

    matches = len(selected.intersection(career))

    if matches == 0:
        return 0

    precision = matches / len(selected)
    recall = matches / len(career)

    if precision + recall == 0:
        return 0

    f1_score = (2 * precision * recall) / (precision + recall)

    return f1_score * weight


# =========================================================
# RESULT / CAREER MATCHING
# =========================================================

@app.route("/result", methods=["POST", "GET"])
def result():

    # -----------------------------------------------------
    # DEFAULT VALUES
    # -----------------------------------------------------

    if request.method == "GET":
        return render_template(
            "result.html",
            career="",
            score=0,
            top_careers=[],
            match_reasons=[],
            matched_skills=[],
            missing_skills=[],
            roles=[],
            roadmap={},
            breakdown={}
        )

    # -----------------------------------------------------
    # GET JSON ANSWERS
    # -----------------------------------------------------

    answers = request.get_json(silent=True)

    if not answers:
        return render_template(
            "result.html",
            career="",
            score=0,
            top_careers=[],
            match_reasons=[],
            matched_skills=[],
            missing_skills=[],
            roles=[],
            roadmap={},
            breakdown={}
        )

    # -----------------------------------------------------
    # GET ANSWERS
    # -----------------------------------------------------

    education = answers.get("0", "")
    education_specialization = answers.get("education_specialization", "")

    skills = answers.get("1", [])
    interests = answers.get("2", [])
    work_styles = answers.get("3", [])
    goals = answers.get("4", [])


    # -----------------------------------------------------
    # MAKE SURE MULTIPLE ANSWERS ARE LISTS
    # -----------------------------------------------------

    if not isinstance(skills, list):
        skills = [skills]

    if not isinstance(interests, list):
        interests = [interests]

    if not isinstance(work_styles, list):
        work_styles = [work_styles]

    if not isinstance(goals, list):
        goals = [goals]


        # =====================================================
    # SCORE CALCULATION
    # =====================================================

    career_scores = {}

    for career, profile in careers.items():

        score = 0

        # -------------------------------------------------
        # EDUCATION LEVEL - 10 POINTS
        # -------------------------------------------------

        if education in profile["education"]:
            score += 10

        # -------------------------------------------------
        # EDUCATION SPECIALIZATION - 10 POINTS
        # -------------------------------------------------

        career_education_data = career_specializations.get(
            career,
            {}
        )

        allowed_specializations = career_education_data.get(
            education,
            []
        )

        if education_specialization in allowed_specializations:
            score += 10

        # -------------------------------------------------
        # SKILLS - 25 POINTS
        # -------------------------------------------------

        skill_matches = (
            set(skills) & set(profile["skills"])
        )

        if skill_matches:
            score += min(
                len(skill_matches) * 12.5,
                25
            )

        # -------------------------------------------------
        # INTERESTS - 25 POINTS
        # -------------------------------------------------

        interest_matches = (
            set(interests) & set(profile["interests"])
        )

        if interest_matches:
            score += min(
                len(interest_matches) * 12.5,
                25
            )

        # -------------------------------------------------
        # WORK STYLE - 15 POINTS
        # -------------------------------------------------

        work_style_matches = (
            set(work_styles) & set(profile["work_styles"])
        )

        if work_style_matches:
            score += min(
                len(work_style_matches) * 7.5,
                15
            )

        # -------------------------------------------------
        # CAREER GOALS - 15 POINTS
        # -------------------------------------------------

        goal_matches = (
            set(goals) & set(profile["goals"])
        )

        if goal_matches:
            score += min(
                len(goal_matches) * 7.5,
                15
            )

        # Save THIS career's score
        career_scores[career] = round(score)


    # =====================================================
    # TOP 3 CAREER MATCHES
    # =====================================================

    sorted_careers = sorted(
        career_scores.items(),
        key=lambda item: item[1],
        reverse=True
    )

    top_careers = sorted_careers[:3]


    # =====================================================
    # BEST CAREER
    # =====================================================

    best_career = top_careers[0][0]

    score = top_careers[0][1]

    career_info = careers[best_career]


    # =====================================================
    # MATCHED SKILLS
    # =====================================================

    matched_skills = list(
        set(skills) & set(career_info["skills"])
    )


    # =====================================================
    # WHY THIS CAREER MATCHES
    # =====================================================

    match_reasons = []

    if education in career_info["education"]:

        match_reasons.append(
            "Your education matches this career path."
        )


    # Education specialization reason
    best_career_specializations = (
        career_specializations
        .get(best_career, {})
        .get(education, [])
    )

    if education_specialization in best_career_specializations:

        match_reasons.append(
            "Your education specialization is relevant to this career."
        )


    if set(skills) & set(career_info["skills"]):

        match_reasons.append(
            "Your skills are relevant to this career."
        )


    if set(interests) & set(career_info["interests"]):

        match_reasons.append(
            "Your interests align with this field."
        )


    if set(work_styles) & set(career_info["work_styles"]):

        match_reasons.append(
            "Your preferred work style fits this career."
        )


    if set(goals) & set(career_info["goals"]):

        match_reasons.append(
            "Your career goals are compatible with this path."
        )


    # =====================================================
    # MATCH BREAKDOWN
    # =====================================================

    best_skill_matches = (
        set(skills) & set(career_info["skills"])
    )

    best_interest_matches = (
        set(interests) & set(career_info["interests"])
    )

    best_work_style_matches = (
        set(work_styles) & set(career_info["work_styles"])
    )

    best_goal_matches = (
        set(goals) & set(career_info["goals"])
    )


    # Education level
    best_education_level_match = (
        education in career_info["education"]
    )


    # Education specialization
    best_career_specializations = (
        career_specializations
        .get(best_career, {})
        .get(education, [])
    )

    best_specialization_match = (
        education_specialization
        in best_career_specializations
    )


    # =====================================================
    # BREAKDOWN VALUES
    # =====================================================

    breakdown = {

        "education":
            (10 if best_education_level_match else 0)
            +
            (10 if best_specialization_match else 0),

        "skills":
            min(
                len(best_skill_matches) * 12.5,
                25
            ),

        "interests":
            min(
                len(best_interest_matches) * 12.5,
                25
            ),

        "work_style":
            min(
                len(best_work_style_matches) * 7.5,
                15
            ),

        "goals":
            min(
                len(best_goal_matches) * 7.5,
                15
            )
    }


    # Convert values to whole numbers
    breakdown = {
        key: round(value)
        for key, value in breakdown.items()
    }


    # =====================================================
    # RESULT PAGE
    # =====================================================

    return render_template(

        "result.html",

        career=best_career,

        score=score,

        top_careers=top_careers,

        match_reasons=match_reasons,

        matched_skills=matched_skills,

        missing_skills=career_info["skills_to_learn"],

        roles=career_info["roles"],

        roadmap=career_info["roadmap"],

        breakdown=breakdown
    )


    # =====================================================
    # RESULT PAGE
    # =====================================================

    return render_template(

        "result.html",

        career=best_career,

        score=score,

        top_careers=top_careers,

        match_reasons=match_reasons,

        matched_skills=matched_skills,

        missing_skills=career_info["skills_to_learn"],

        roles=career_info["roles"],

        roadmap=career_info["roadmap"],

        breakdown=breakdown
    )


# =========================================================
# RUN FLASK APPLICATION
# =========================================================

if __name__ == "__main__":
    app.run(debug=True) 