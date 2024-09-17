const profileData = {
    name: "Bilal Ahmad Khalid",
    title: "Student Developer",
    introduction: "Knowledgeable amateur with a background in video game prototypes and development. A driven Game Developer known for reporting on the design process to the appropriate stakeholders and debugging new and existing projects. Detail-oriented team player with strong organizational skills. Ability to handle multiple projects simultaneously with a high degree of accuracy.",
    contact: {
        address: "74-Khushnuma Flats, GOR-IV N-Block, Model Town Ext. Lahore, 54700 Pakistan",
        phone: "+92 337 800 8040",
        email: "bilalakhalid02@gmail.com"
    },
    skills: {
        technical: ["Unity", "Unreal Engine", "Adobe Suite", "Blender"],
        professional: [
            "Product Development",
            "Technical Writing",
            "Testing & Debugging",
            "Coding Skills",
            "Game Design",
            "Game Development",
            "Market Analysis",
            "Research and Design"
        ],
        languages: [
            { name: "English", proficiency: "Fluent" },
            { name: "Urdu", proficiency: "Native" },
            { name: "Japanese", proficiency: "Beginner" },
            { name: "Punjabi", proficiency: "Intermediate" }
        ]
    }
};

function populateHTML() {
    document.querySelector('#about h1').textContent = profileData.name;
    document.querySelector('#about h2').textContent = profileData.title;
    document.querySelector('#about p').textContent = profileData.introduction;

    const contactSection = document.querySelector('#about');
    contactSection.innerHTML += `
        <h3>Contact Information</h3>
        <p>Address: ${profileData.contact.address}</p>
        <p>Phone: ${profileData.contact.phone}</p>
        <p>E-mail: ${profileData.contact.email}</p>
    `;

    // Populate skills
    const skillsSection = document.querySelector('#skills .skills-container');
    skillsSection.innerHTML = `
        <div class="skills-column">
            <h3>Technical Skills</h3>
            <ul>${profileData.skills.technical.map(skill => `<li>${skill}</li>`).join('')}</ul>
            <h3>Professional Skills</h3>
            <ul>${profileData.skills.professional.map(skill => `<li>${skill}</li>`).join('')}</ul>
        </div>
        <div class="skills-column">
            <h3>Languages</h3>
            <ul>${profileData.skills.languages.map(lang => `<li>${lang.name} <span class="language-proficiency">(${lang.proficiency})</span></li>`).join('')}</ul>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', populateHTML);
