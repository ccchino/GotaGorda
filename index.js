function acceptAge() {
    localStorage.setItem("ageVerified", "true");
    document.getElementById("age-verification").style.display = "none";
}

function denyAge() {
    window.location.href = "https://www.google.com"; // redirige si es menor
}

window.onload = function() {
    if (localStorage.getItem("ageVerified") === "true") {
        document.getElementById("age-verification").style.display = "none";
    }
};
