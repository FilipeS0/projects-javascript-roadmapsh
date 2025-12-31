const bClose = document.getElementById("close");
const accept = document.getElementById("accept");
const cookie = document.querySelector(".cookie");

if (localStorage.getItem("cookieConsent") === "accepted") {
    closeCookieWindow();
}

function closeCookieWindow() {
    cookie.classList.add("close");
}

bClose.addEventListener("click", closeCookieWindow);

accept.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    closeCookieWindow();
});
