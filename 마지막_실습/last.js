const header_h1 = document.querySelector("header h1")

function h1_clicked() {
    console.log("h1이 클릭되었습니다!");
}

header_h1.addEventListener("click", h1_clicked);

const menu_login = document.querySelector("#login-link");

function loginAlert() {

    alert('로그인하세요!')
}

menu_login.addEventListener("click", loginAlert)