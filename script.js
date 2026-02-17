const data = {

general: {
    "English": [
        {name:"English by Nisa", link:"https://youtube.com/playlist?list=PLUJXB7al70IAIbiajs7JqxrGqc-tgi80j"},
        {name:"Sara’s Learning Point", link:"https://youtube.com/playlist?list=PLjNdhMBtsxpz5BYkI4eiiYQahD7GroZy0"},
        {name:"Dandu Venkatramulu", link:"https://youtube.com/playlist?list=PLyjVm5GfnmY4rC5wuA6SmhHh0NyVL9TOX"},
        {name:"Educare", link:"https://youtube.com/playlist?list=PLbBCm7TkLCKJvY6pKiQCJctXF4Pq8k7G5"},
        {name:"PCV English", link:"https://youtube.com/playlist?list=PLldWy7gu4R77UUt2vuS2n3pEkb3oHOLot"}
    ],
    "Telugu": [
        {name:"Dandu Venkatramulu", link:"https://youtube.com/playlist?list=PLyjVm5GfnmY5y3l69NvP0rfdM3PIr1YTn"},
        {name:"Matrubhasha", link:"https://youtube.com/playlist?list=PL7noKDJp4ZRJJaH6RJ4OBogQ1myEbTDUW"}
    ],
    "Hindi": [
        {name:"Disha Hindi Classes", link:"https://youtube.com/playlist?list=PLsTBUOfP6EhcuFUYcKCOXmNCleQZQxANC"}
    ],
    "Sanskrit": [
        {name:"My Teaching Talkies", link:"https://youtube.com/playlist?list=PLc1Q__0qOGApo_XRmsLci0RnIznyHUs-Y"},
        {name:"Dr. Pusapati Ravikantha Reddy", link:"https://youtube.com/playlist?list=PLiOV0508aWZuNdSe92CCsP1bYS63RccOc"},
        {name:"Rajji Madam", link:"https://youtube.com/playlist?list=PLkjLwcrXVH1W8rSkT7n6EEzCOrlifoDMU"},
        {name:"Kammampati Nikhil", link:"https://youtube.com/playlist?list=PLJM7CaHL_GN7AXfkXURiDD4_ydFq7Oflj"}
    ],
    "Corporate Accounting": [
        {name:"Hasham Ali Khan", link:"https://youtube.com/playlist?list=PLWJDzVuPkXAlXTMbitI-ZDjiAmi7M8Zww"},
        {name:"Devika’s Commerce", link:"https://youtube.com/playlist?list=PL32yVakBnz3KJkri5LmhkNdFuPeTmyWlt"},
        {name:"Commerce Class Partner", link:"https://youtube.com/playlist?list=PLVBb3feu_E7q2eibRidZw1bo1KQ52isDg"},
        {name:"CWG for B.Com", link:"https://youtube.com/playlist?list=PL9Cd7H8NFRQymNGuIkEE-ZD9aNjk9KxWZ"}
    ],
    "Business Statistics – 2": [
        {name:"Hasham Ali Khan", link:"https://youtube.com/playlist?list=PLWJDzVuPkXAk3twapgb0DQ9MyaQ24V4JS"},
        {name:"Devika’s Commerce", link:"https://youtube.com/playlist?list=PLLhSIFfDZcUUatEzYCA8xH02JR_GlLjMA"}
    ],
    "Income Tax": [
        {name:"Devika’s Commerce", link:"https://youtube.com/playlist?list=PLP6CJ8yrRpA3_WbjoudHcT10AxY3Tut1B"},
        {name:"Advanced Income Tax - Devika", link:"https://youtube.com/playlist?list=PL32yVakBnz3JO44C9ZF3fsGOvttZy_-e3"},
        {name:"Income from House Property", link:"https://youtube.com/playlist?list=PL0orXlrJWBR9uKDGy4ImpsoQH772VMsoB"},
        {name:"Hasham Ali Khan", link:"https://youtube.com/playlist?list=PLWJDzVuPkXAkJ5jwa5w815ComHmCzYzwb"}
    ],
    "Universal Human Values": [
        {name:"Tegron Learning Hub", link:"https://youtu.be/PZQCoQdLJmw"}
    ],
    "Practice of Life & General Insurance": [
        {name:"Diwivedi Guidance", link:"https://youtube.com/playlist?list=PLsh2FvSr3n7cD0F2FSjBVWWrVF6cR8Pla"}
    ]
}

};


// FUNCTION TO SHOW SUBJECTS
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


// FUNCTION TO SHOW LINKS
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


// BACK FUNCTIONS
function goBack(course) {
    document.getElementById("links").classList.add("hidden");
    showSubjects(course);
}

function goHome() {
    document.getElementById("subjects").classList.add("hidden");
    document.getElementById("courses").classList.remove("hidden");
}
