const loginForm = document.querySelector("#login-form");
const loginInput= loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginClick(event){
    event.preventDefault();
    // console.dir(loginInput);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); 
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const greeting = document.querySelector("#greeting");
    paintGreetings(username);

}

function paintGreetings(username){
    //show the greetings
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

//의문) 근데 새로고침하면 로그인폼이 다시 뜬다? > 4-6강의에도 안나옴..
//username 저장!!!!! 후 불러오기!!! (이거 해야 새로고침 후에도 리셋 안됨)
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginClick); //클릭>널값>변화x
} else{
    //show the greetings > 함수로 만들기
        // greeting.classList.remove(HIDDEN_CLASSNAME);
        // greeting.innerText = `Hello ${savedUsername}`;
    paintGreetings(savedUsername);
}
