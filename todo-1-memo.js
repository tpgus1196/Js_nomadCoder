const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input"); 도 가능
const toDoList = document.getElementById("todo-list");

//의문1 리스트가 안생긴다...(li추가 안됨) : 유저 저장(setitem, getitem) 후 해결됨
function paintToDo(newToDo){
    // console.log("i will paint", newToDo); 
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span); //li가 span이라는 자식을 가짐(append child)
    span.innerText = newToDo;
    // console.log(li); //> console창에 li>span 생김
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value; 
        //여기서 input의 현재 value를 새로운 변수에 복사하는 것

    toDoInput.value = ""; 
        //입력, enter 시 창이 비도록
        //여기를 비워도 newToDo가 비워지는 게 아님
        //input의 value를 가지고 뭘 하든 newToDo에 영향 미치지 않음

    paintToDo(newToDo);
        //newToDo의 string입력값(사라지기 전) > paintToDo함수에 보내기
        //paintToDo 함수에 newToDo 인자(argument) 보내기
        //함수가 무엇을 paint해야할지 알게될 것
    }
toDoForm.addEventListener("submit",handleToDoSubmit);