// Fetch server message
document.getElementById("msgButton").addEventListener("click", function() {
    fetch("/message")
        .then(response => response.json())
        .then(data => {
            document.getElementById("serverMessage").innerText = data.message;
        })
        .catch(error => console.error("Error:", error));
});

// Pipeline stage explanations
const stageDetails = {
    "Plan": "Define requirements, roadmap, and goals for the release.",
    "Code": "Develop features, fix bugs, and collaborate via version control.",
    "Build": "Compile the source code, create artifacts or containers.",
    "Test": "Run automated tests to ensure quality and reliability.",
    "Deploy": "Release the application into production or staging environments.",
    "Monitor": "Track system health, logs, and performance to maintain uptime."
};

document.querySelectorAll(".stage").forEach(stage => {
    stage.addEventListener("click", () => {
        const infoBox = document.getElementById("stageInfo");
        const stageName = stage.getAttribute("data-stage");
        infoBox.innerHTML = `<h3>${stageName}</h3><p>${stageDetails[stageName]}</p>`;
    });
});
