function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const adminCookie = getCookie("adminCookie");


    if (adminCookie === "true") {
        alert("Login Successful! CTF{CHANGE_ME_BACK}");
    } else {
        alert("Login Failed!");
    }
}

function getCookie(name) {
    let cookieArray = document.cookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let cookiePair = cookieArray[i].split('=');
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}


if(getCookie("adminCookie") === null) {
    document.cookie = "adminCookie=false; path=/";
}
