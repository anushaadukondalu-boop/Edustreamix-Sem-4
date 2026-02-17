const data = {

    general: {
        "English": [
            {name:"English by Nisa", link:"https://youtube.com/playlist?list=PLUJXB7al70IAIbiajs7JqxrGqc-tgi80j"},
            {name:"Sara’s Learning Point", link:"https://youtube.com/playlist?list=PLjNdhMBtsxpz5BYkI4eiiYQahD7GroZy0"},
            {name:"Dandu Venkatramulu", link:"https://youtube.com/playlist?list=PLyjVm5GfnmY4rC5wuA6SmhHh0NyVL9TOX"},
            {name:"Educare", link:"https://youtube.com/playlist?list=PLbBCm7TkLCKJvY6pKiQCJctXF4Pq8k7G5"},
            {name:"PCV English", link:"https://youtube.com/playlist?list=PLldWy7gu4R77UUt2vuS2n3pEkb3oHOLot"}
        ],
        "Corporate Accounting": [
            {name:"Hasham Ali Khan", link:"https://youtube.com/playlist?list=PLWJDzVuPkXAlXTMbitI-ZDjiAmi7M8Zww"},
            {name:"Devika’s Commerce", link:"https://youtube.com/playlist?list=PL32yVakBnz3KJkri5LmhkNdFuPeTmyWlt"}
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
    },

    honours: {
        "English": [
            {name:"English by Nisa", link:"https://youtube.com/playlist?list=PLUJXB7al70IAIbiajs7JqxrGqc-tgi80j"}
        ],
        "Human Resource Management": [
            {name:"Devika’s Commerce", link:"https://youtube.com/playlist?list=PLLhSIFfDZcUUelovQsfQHrCg3ZPujMzrh"}
        ]
    },

    computer: {
        "Web Technologies": [
            {name:"Fazil Khan Tutorial", link:"https://youtube.com/playlist?list=PL0IHN5oTE2R7ekgSTUPkwILoqK7oAoExo"},
            {name:"Education Point Online", link:"https://youtube.com/playlist?list=PLg2LVpcRrOF4if66PQvjYK5nIGJamDfhC"}
        ]
    },

    analytics: {
        "Forecasting & Predictive Analysis": [
            {name:"Add Your Link Here", link:"#"}
        ]
    }

};


function showSubjects(course) {
    document.getElementById("courses").classList.add("hidden");
    document.getElementById("links").classList.add("hidden");

    const subjectsDiv = document.getElementById("subjects");
    subjectsDiv.innerHTML = "<h2>Select Subject</h2>";

    for (let subject in data[course]) {
        subjectsDiv.innerHTML += 
            `<button onclick="showLinks('${course}','${subject}')">${subject}</button>`;
    }

    subjectsDiv.innerHTML += 
        `<button class="back-btn" onclick="goHome()">Back</button>`;

    subjectsDiv.classList.remove("hidden");
}


function showLinks(course, subject) {
    document.getElementById("subjects").classList.add("hidden");

    const linksDiv = document.getElementById("links");
    linksDiv.innerHTML = `<h2>${subject} - Video Links</h2>`;

    data[course][subject].forEach(item => {
        linksDiv.innerHTML += 
            `<button onclick="window.open('${item.link}', '_blank')">${item.name}</button>`;
    });

    linksDiv.innerHTML += 
        `<button class="back-btn" onclick="goBack('${course}')">Back</button>`;

    linksDiv.classList.remove("hidden");
}


function goBack(course) {
    document.getElementById("links").classList.add("hidden");
    showSubjects(course);
}

function goHome() {
    document.getElementById("subjects").classList.add("hidden");
    document.getElementById("courses").classList.remove("hidden");
}
