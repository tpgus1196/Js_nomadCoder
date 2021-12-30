const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){ 
    //클릭 이벤트 정보 활용 > 어떤 버튼 클릭했는지 추적
    // console.dir(event.target.parentElement); 
    //target property의 부모태그로 위치 추적

    const li = event. target.parentElement;
    li.remove();

}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText ="❌"; //window+.(윈도우기준이모지) vs control+cmd+space(mac)
    button.addEventListener("click",deleteToDo);

    //appendChild는 항상 뒤에 있어야 한다
    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value; 
    toDoInput.value = ""; 
        
    paintToDo(newToDo);
    }
toDoForm.addEventListener("submit",handleToDoSubmit);