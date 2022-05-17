const header_h1 = document.querySelector("header h1")

function h1ClickHandler() {
    console.log("H1 요소를 클릭했네요!");
    alert("잘 실행됩니다!");
}

header_h1.addEventListener("click", h1ClickHandler);

const menu_login = document.querySelector("#login-link");

function loginAlert() {

    
}


function askId() {
    const user_id = prompt("ID값을 입력해주세요");
    console.log(user_id);
}
const login_menu = document.querySelector("#login-link");
login_menu.addEventListener("click", askId);