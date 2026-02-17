const data = {

general: {
    subjects: {
        "English": [
            {name:"English by Nisa", link:"https://youtube.com/playlist?list=PLUJXB7al70IAIbiajs7JqxrGqc-tgi80j"},
            {name:"Sara’s Learning Point", link:"https://youtube.com/playlist?list=PLjNdhMBtsxpz5BYkI4eiiYQahD7GroZy0"}
        ],
        "Corporate Accounting": [
            {name:"Hasham Ali Khan", link:"https://youtube.com/playlist?list=PLWJDzVuPkXAlXTMbitI-ZDjiAmi7M8Zww"}
        ],
        "Business Statistics – 2": [
            {name:"Hasham Ali Khan", link:"https://youtube.com/playlist?list=PLWJDzVuPkXAk3twapgb0DQ9MyaQ24V4JS"}
        ],
        "Income Tax": [
            {name:"Devika’s Commerce", link:"https://youtube.com/playlist?list=PLP6CJ8yrRpA3_WbjoudHcT10AxY3Tut1B"}
        ],
        "Universal Human Values": [
            {name:"Tegron Learning Hub", link:"https://youtu.be/PZQCoQdLJmw"}
        ],
        "Practice of Life & General Insurance": [
            {name:"Diwivedi Guidance", link:"https://youtube.com/playlist?list=PLsh2FvSr3n7cD0F2FSjBVWWrVF6cR8Pla"}
        ]
    }
},

honours: {
    subjects: {
        "English": [
            {name:"English by Nisa", link:"https://youtube.com/playlist?list=PLUJXB7al70IAIbiajs7JqxrGqc-tgi80j"}
        ],
        "Human Resource Management": [
            {name:"Devika’s Commerce", link:"https://youtube.com/playlist?list=PLLhSIFfDZcUUelovQsfQHrCg3ZPujMzrh"}
        ],
        "Corporate Accounting": [
            {name:"Hasham Ali Khan", link:"https://youtube.com/playlist?list=PLWJDzVuPkXAlXTMbitI-ZDjiAmi7M8Zww"}
        ],
        "Business Statistics": [
            {name:"Devika’s Commerce", link:"https://youtube.com/playlist?list=PLLhSIFfDZcUUatEzYCA8xH02JR_GlLjMA"}
        ],
        "Income Tax": [
            {name:"Devika’s Commerce", link:"https://youtube.com/playlist?list=PLP6CJ8yrRpA3_WbjoudHcT10AxY3Tut1B"}
        ],
        "Universal Human Values": [
            {name:"Tegron Learning Hub", link:"https://youtu.be/PZQCoQdLJmw"}
        ],
        "Practice of Life & General Insurance": [
            {name:"Diwivedi Guidance", link:"https://youtube.com/playlist?list=PLsh2FvSr3n7cD0F2FSjBVWWrVF6cR8Pla"}
        ]
    }
},

computer: {
    subjects: {
        "English": [
            {name:"English by Nisa", link:"https://youtube.com/playlist?list=PLUJXB7al70IAIbiajs7JqxrGqc-tgi80j"}
        ],
        "Web Technologies": [
            {name:"Fazil Khan Tutorial", link:"https://youtube.com/playlist?list=PL0IHN5oTE2R7ekgSTUPkwILoqK7oAoExo"}
        ],
        "Corporate Accounting": [
            {name:"Hasham Ali Khan", link:"https://youtube.com/playlist?list=PLWJDzVuPkXAlXTMbitI-ZDjiAmi7M8Zww"}
        ],
        "Business Statistics – 2": [
            {name:"Hasham Ali Khan", link:"https://youtube.com/playlist?list=PLWJDzVuPkXAk3twapgb0DQ9MyaQ24V4JS"}
        ],
        "Universal Human Values": [
            {name:"Tegron Learning Hub", link:"https://youtu.be/PZQCoQdLJmw"}
        ],
        "Practice of Life & General Insurance": [
            {name:"Diwivedi Guidance", link:"https://youtube.com/playlist?list=PLsh2FvSr3n7cD0F2FSjBVWWrVF6cR8Pla"}
        ]
    }
},

analytics: {
    subjects: {
        "English": [
            {name:"English by Nisa", link:"https://youtube.com/playlist?list=PLUJXB7al70IAIbiajs7JqxrGqc-tgi80j"}
        ],
        "Business Statistics – 2": [
            {name:"Hasham Ali Khan", link:"https://youtube.com/playlist?list=PLWJDzVuPkXAk3twapgb0DQ9MyaQ24V4JS"}
        ],
        "Income Tax": [
            {name:"Devika’s Commerce", link:"https://youtube.com/playlist?list=PLP6CJ8yrRpA3_WbjoudHcT10AxY3Tut1B"}
        ],
        "Forecasting & Predictive Analysis": [
            {name:"Add Your Link Here", link:"#"}
        ],
        "Universal Human Values": [
            {name:"Tegron Learning Hub", link:"https://youtu.be/PZQCoQdLJmw"}
        ],
        "Practice of Life & General Insurance": [
            {name:"Diwivedi Guidance", link:"https://youtube.com/playlist?list=PLsh2FvSr3n7cD0F2FSjBVWWrVF6cR8Pla"}
        ]
    }
}

};


// SHOW SUBJECTS
function showSubjects(course) {
    document.getElementById("courses").classList.add("hidden");
    document.getElementById("links").classList.add("hidden");

    const subjectsDiv = document.getElementById("subjects");
    subjectsDiv.innerHTML = "<h2>Select Subject</h2>";

    const subjects = data[course].subjects;

    for (let subject in subjects) {
        subjectsDiv.innerHTML += 
        `<button onclick="showLinks('${course}','${subject}')">${subject}</button>`;
    }

    subjectsDiv.innerHTML += 
    `<button class="back-btn" onclick="goHome()">Back</button>`;

    subjectsDiv.classList.remove("hidden");
}


// SHOW LINKS
function showLinks(course, subject) {
    document.getElementById("subjects").classList.add("hidden");

    const linksDiv = document.getElementById("links");
    linksDiv.innerHTML = `<h2>${subject} - Video Links</h2>`;

    data[course].subjects[subject].forEach(item => {
        linksDiv.innerHTML += 
        `<button onclick="window.open('${item.link}', '_blank')">${item.name}</button>`;
    });

    linksDiv.innerHTML += 
    `<button class="back-btn" onclick="showSubjects('${course}')">Back</button>`;

    linksDiv.classList.remove("hidden");
}


// BACK HOME
function goHome() {
    document.getElementById("subjects").classList.add("hidden");
    document.getElementById("courses").classList.remove("hidden");
}
