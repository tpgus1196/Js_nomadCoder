const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

 //배열(newToDo가 그려질때마다(paint~함수) text는 이 array에 push)
// const toDos = []; //기존 값 저장 문제 해결 위해 const > let
let toDos = [];
    //toDos는 항상 빈 배열로 시작하지만 그걸 원하지 않음
    //localstorage에 저장된 값 복원하기는 맨 아래 if문에서

function saveToDos(){
    //localstorage에 toDos 배열 저장
    //이 함수 호출 시점에는 newToDo가 배열에 들어 있음
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
        //toDos JSON.stringify 이유: 안하면 배열로 저장이 안됨. text로만 저장됨
        //현재 새로운 toDo들만 포함하는 배열 저장하는 중
        //(로그인 다시 하면 이전 기록 저장안됨)
    }

function deleteToDo(event){ 
    const li = event. target.parentElement;
    li.remove();

}

function paintToDo(newToDo){ //이 함수 필요로 하는 것은  newToDo뿐.
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText ="❌"; 
    button.addEventListener("click",deleteToDo);

    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value; 
    toDoInput.value = ""; //submit하면 input 비우기

    toDos.push(newToDo); 
        //submit 할때마다 toDos 배열 가져와 newToDo push

    paintToDo(newToDo); //화면에 newToDo그려주기
    saveToDos(); //함수 실행
    }
toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos;
        //localstorage에서 발견되는 이전의 toDo들로 toDos 배열 시작하기
    parsedToDos.forEach(paintToDo); 
    //paintToDo는 텍스트를 받는다.
    //JavaScript는 그 텍스트를 paintToDo에게 전달해준다 (paintToDo 함수에 a~b..등 넣어줌)
        //forEach > 배열 각 item에 대해 하나의 function 실행할 수 있음
        //foreach 안에 (item) => console.log("This is the turn of",item) 입력해서 테스트 해보기
}