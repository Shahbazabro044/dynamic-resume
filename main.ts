interface ResumeData {
    name: string;
    email: string;
    education: string;
    work: string;
    skills: string;
}

const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumeContainer = document.getElementById("resumeContainer") as HTMLElement;

form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData: ResumeData = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        education: (document.getElementById("education") as HTMLInputElement).value,
        work: (document.getElementById("work") as HTMLInputElement).value,
        skills: (document.getElementById("skills") as HTMLInputElement).value,
    };

    generateResume(formData);
});

function generateResume(data: ResumeData) {
    resumeContainer.innerHTML = `
        <h1>${data.name}</h1>
        <p>Email: ${data.email}</p>
        <h2>Education</h2>
        <p>${data.education}</p>
        <h2>Work Experience</h2>
        <p>${data.work}</p>
        <h2>Skills</h2>
        <p>${data.skills}</p>
    `;
}
