const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

 //배열(newToDo가 그려질때마다(paint~함수) text는 이 array에 push)
const toDos = [];

function saveToDos(){
    //localstorage에 toDos 배열 저장
    //이 함수 호출 시점에는 newToDo가 배열에 들어 있음
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
        //toDos JSON.stringify 이유: 안하면 배열로 저장이 안됨. text로만 저장됨
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

    toDos.push(newToDo); //toDos 배열 가져와 newToDo push

    paintToDo(newToDo); //화면에 newToDo그려주기

    saveToDos(); //함수 실행
    }
toDoForm.addEventListener("submit",handleToDoSubmit);

function sayHello(item){ 
    //처리되는 item을 알아야 한다. (js가 지금처리되는 item 그냥 제공함)
    //그게 안되면 처리된 횟수만 알 수 있다.
    console.log("hello", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    //localstorage에 savedToDos가 존재한다면
    //확인작업) console.log(savedToDos); > string 값으로 나옴
    const parsedToDos = JSON.parse(savedToDos); 
        //localstorage에 저장된 string 정보를 배열로 전환, 불러오기
    //확인작업) console.log(parsedToDos); > 배열로 나옴
    
    //console.log(parsedToDos); //sayhello 함수 만든 이 배열 나오는거 확인
    parsedToDos.forEach(sayHello); 
        //forEach는 array의 각 item에 대해 function 실행하게 해줌
        //array라서 forEach라는 property 가짐
        //js가 배열을 가지고 sayHello("a"),sayHello("b")...하는 것
        //item들을 sayHello함수에 넘겨줌
    
    //위 parsedTodOs.ForEach(sayHello);하지 않고 가능
    //sayhello 함수 만들지 않고 바로 호출하기(arrow function)
// parsedToDos.forEach((item) => console.log("hello",item)); 
    
}