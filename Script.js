document.addEventListener("DOMContentLoaded", function () {
    const projectNameInput = document.getElementById("projectName");
    const projectDescriptionInput = document.getElementById("projectDescription");
    const addUserBtn = document.getElementById("addUser");
    const addProjectBtn = document.getElementById("addProject");
    const projectList = document.getElementById("projectList");
    const userList = document.getElementById("userList");
    
    addUserBtn.addEventListener("click", function () {
        const userName = document.getElementById("userName").value.trim();
        const userEmail = document.getElementById("userEmail").value.trim();
        if (userName !== "" && userEmail !== "") {
            const userLi = document.createElement("li");
            userLi.textContent = `${userName} - ${userEmail}`;
            userList.appendChild(userLi);
            document.getElementById("userName").value = "";
            document.getElementById("userEmail").value = "";
        }
    });
    
    addProjectBtn.addEventListener("click", function () {
        const projectName = projectNameInput.value.trim();
        const projectDescription = projectDescriptionInput.value.trim();
        if (projectName !== "" && projectDescription !== "") {
            const projectLi = document.createElement("li");
            projectLi.innerHTML = `
                <strong>${projectName}</strong>
                <p>${projectDescription}</p>
            `;
            projectList.appendChild(projectLi);
            projectNameInput.value = "";
            projectDescriptionInput.value = "";
        }
    });
});
