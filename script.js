const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigasi a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

const language = {

    id:{
        navHome:"Beranda",
        navAbout:"Tentang",
        navEdu:"Pendidikan",
        navProject:"Projek",
        navContact:"Kontak",

        loadText:"Mengubah Bahasa...",

        hello:"Halo",

        heroDesc:"Saya merupakan siswa di SMK Negeri 40 Jakarta jurusan Rekayasa Perangkat Lunak. Saya menguasai HTML, CSS, dan C#.",

        heroBtn:"Mulai",

        about:"Tentang Saya",

        aboutJob:"Frontend Developer & UI Designer",

        aboutDesc1:"Saya merupakan siswa jurusan Rekayasa Perangkat Lunak di SMK Negeri 40 Jakarta.",

        aboutDesc2:"Saya senang mempelajari teknologi baru serta membangun website modern.",

        softSkills1:"KERJA BERSAMA TIM",
        softSkills2:"KOMUNIKASI EFEKTIF",
        softSkills3:"BICARA DIDEPAN UMUM",

        tools:"TOOLS YANG DIKUASAI",

        aboutName:"Nama",
        aboutSchool:"Sekolah",
        aboutFocus:"Fokus",
        aboutLocation:"Lokasi",

        eduTitle:"Pendidikan",
        eduYears:"2024 - Sekarang",
        eduSub:"Rekayasa Perangkat Lunak",
        eduDesc:"Perjalanan pendidikan yang membentuk kemampuan saya hingga saat ini.",
        eduSmkdesc:"Mempelajari HTML, CSS, JavaScript, C#, database, serta pengembangan website dan aplikasi desktop.",
        eduSmp:"Sekolah Menengah Pertama",
        eduSmpdesc:"Mengembangkan kemampuan akademik dan mulai tertarik pada dunia teknologi serta desain.",
        eduSddesc:"Membangun dasar pendidikan serta mulai mengenal komputer dan teknologi.",
        eduSd:"Sekolah Dasar",


        projects:"Projek",

        contact:"Hubungi Saya",

        formBtn:"Kirim Pesan",


        projectDesc:"Beberapa projek yang telah saya kerjakan.",
        projectDesc1:"Desain aplikasi streaming musik modern dengan tampilan minimalis yang terinspirasi dari Spotify.",
        projectDesc2:"Website berita olahraga yang menampilkan informasi pemain, tim, statistik dan jadwal pertandingan NBA.",
        projectDesc3:"Aplikasi komunitas memancing lengkap dengan fitur marketplace perlengkapan memancing.",

        textContact:"Ayo Terhubung!",
        contactTxt:"Mari berdiskusi mengenai project, desain, atau peluang kerja sama.",
        contactDesc:"Jangan ragu untuk menghubungi saya jika ingin berdiskusi mengenai project atau sekadar bertukar ide.",


        namePlaceholder:"Nama",
        emailPlaceholder:"Email",
        messagePlaceholder:"Tulis pesan...",

    },

    en:{

        navHome:"Home",
        navAbout:"About",
        navEdu:"Education",
        navProject:"Project",
        navContact:"Contact",

        loadText:"Changing Language...",

        hello:"Hello",

        heroDesc:"I am a Software Engineering student at SMK Negeri 40 Jakarta. I specialize in HTML, CSS and C#.",

        heroBtn:"Get Started",

        about:"About Me",

        aboutJob:"Frontend Developer & UI Designer",

        aboutDesc1:"I am a Software Engineering student at SMK Negeri 40 Jakarta.",

        aboutDesc2:"I enjoy learning new technologies and building modern websites.",

        softSkills1:"TEAMWORK",
        softSkills2:"EFFECTIVE COMMUNICATION",
        softSkills3:"PUBLIC SPEAKING",

        tools:"TOOLS & TECH",

        aboutName:"Name",
        aboutSchool:"School",
        aboutFocus:"Focus",
        aboutLocation:"Location",

        eduTitle:"Education",
        eduYears:"2024 - Present",
        eduSub:"Software Engineering",
        eduDesc:"My educational journey that has shaped my skills and knowledge to this day.",
        eduSmkdesc:"Studying HTML, CSS, JavaScript, C#, databases, as well as web and desktop application development.",
        eduSmp:"Middle High School",
        eduSmpdesc:"Developed academic skills and became interested in technology and design.",
        eduSddesc:"Built a strong educational foundation and developed an interest in computers and technology.",
        eduSd:"Elementary School",


        projects:"Projects",

        contact:"Contact Me",

        formBtn:"Send Message",

        projectDesc:"A selection of projects I've worked on.",
        projectDesc1:"A sleek music streaming app featuring a modern, Spotify-inspired minimalist design.",
        projectDesc2:"A sports news website featuring NBA player information, team profiles, statistics, and game schedules.",
        projectDesc3:"A mobile app for fishing enthusiasts, featuring a community platform and an integrated marketplace for fishing gear.",



        textContact:"Let's Connect!",
        contactTxt:"Let's discuss your project, design ideas, or potential collaboration opportunities.",
        contactDesc:"Feel free to contact me if you'd like to discuss a project or simply exchange ideas.",


        namePlaceholder:"Name",
        emailPlaceholder:"Email",
        messagePlaceholder:"Write your message...",

    }

}

function changeLanguage(lang){

document.getElementById("id-btn").classList.remove("active-lang");
document.getElementById("en-btn").classList.remove("active-lang");

document.getElementById(lang + "-btn").classList.add("active-lang");

document.getElementById("load-text").textContent=language[lang].loadText;


document.getElementById("nav-home").textContent=language[lang].navHome;
document.getElementById("nav-about").textContent=language[lang].navAbout;
document.getElementById("nav-edu").textContent=language[lang].navEdu;
document.getElementById("nav-project").textContent=language[lang].navProject;
document.getElementById("nav-contact").textContent=language[lang].navContact;

document.getElementById("about-name").textContent=language[lang].aboutName;
document.getElementById("about-school").textContent=language[lang].aboutSchool;
document.getElementById("about-focus").textContent=language[lang].aboutFocus;
document.getElementById("about-location").textContent=language[lang].aboutLocation;

document.getElementById("hello").textContent=language[lang].hello;

document.getElementById("hero-desc").textContent=language[lang].heroDesc;

document.getElementById("hero-btn").textContent=language[lang].heroBtn;

document.getElementById("about-title").textContent=language[lang].about;

document.getElementById("about-job").textContent=language[lang].aboutJob;

document.getElementById("about-desc1").textContent=language[lang].aboutDesc1;

document.getElementById("about-desc2").textContent=language[lang].aboutDesc2;

document.getElementById("softskills1").textContent=language[lang].softSkills1;
document.getElementById("softskills2").textContent=language[lang].softSkills2;
document.getElementById("softskills3").textContent=language[lang].softSkills3;
document.getElementById("tools").textContent=language[lang].tools;


document.getElementById("edu-title").textContent=language[lang].eduTitle;
document.getElementById("edu-years").textContent=language[lang].eduYears;
document.getElementById("edu-sub").textContent=language[lang].eduSub;
document.getElementById("edu-desc").textContent=language[lang].eduDesc;
document.getElementById("edu-smkdesc").textContent=language[lang].eduSmkdesc;
document.getElementById("edu-smp").textContent=language[lang].eduSmp;
document.getElementById("edu-smpdesc").textContent=language[lang].eduSmpdesc;
document.getElementById("edu-sddesc").textContent=language[lang].eduSddesc;
document.getElementById("edu-sd").textContent=language[lang].eduSd;


document.getElementById("project-title").textContent=language[lang].projects;

document.getElementById("contact-title").textContent=language[lang].contact;

document.getElementById("form-btn").textContent=language[lang].formBtn;

document.getElementById("project-desc3").textContent=language[lang].projectDesc3;
document.getElementById("project-desc2").textContent=language[lang].projectDesc2;
document.getElementById("project-desc1").textContent=language[lang].projectDesc1;
document.getElementById("project-desc").textContent=language[lang].projectDesc;

document.getElementById("text-contact").textContent=language[lang].textContact;
document.getElementById("contact-txt").textContent=language[lang].contactTxt;
document.getElementById("contact-desc").textContent=language[lang].contactDesc;

document.getElementById("name").placeholder =
language[lang].namePlaceholder;

document.getElementById("email").placeholder =
language[lang].emailPlaceholder;

document.getElementById("message").placeholder =
language[lang].messagePlaceholder;

}

document
.getElementById("id-btn")
.addEventListener("click",()=>{

    showLoader();

    setTimeout(()=>{

        changeLanguage("id");

        hideLoader();

    },400);

});

document
.getElementById("en-btn")
.addEventListener("click",()=>{

    showLoader();

    setTimeout(()=>{

        changeLanguage("en");

        hideLoader();

    },400);

});

changeLanguage("id");

function showLoader(){

    document.body.classList.add("fade");

    loader.classList.add("show");

}

function hideLoader(){

    loader.classList.remove("show");

    document.body.classList.remove("fade");

}