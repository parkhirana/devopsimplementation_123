document.getElementById("msgButton").addEventListener("click", function() {
    fetch("/message")
        .then(response => response.json())
        .then(data => {
            document.getElementById("serverMessage").innerText = data.message;
        })
        .catch(error => console.error("Error:", error));
});
