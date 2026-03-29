let login = document.getElementById("login");
let welcome= document.getElementById("welcome");
if(localStorage.getItem("loggedIn") === "true"){
 login.innerText = "Logout";
 welcome.innerHTML+=" "+localStorage.getItem("username")
}
else if(localStorage.getItem("loggedIn") === "false"){
 login.innerText = "Login";
 welcome.innerHTM-=" "+localStorage.getItem("username")
}    
function toggleDarkMode() {
        document.body.classList.toggle('dark');
    }