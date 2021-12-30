const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";


let toDos = [];
   

function saveToDos(){
   
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
        
}

function deleteToDo(event){ 
    const li = event. target.parentElement;
    //console.log(li.id); > 이러면 콘솔창에 li id 출력됨
    //x아이콘 눌린 li id 추적 가능 > 데이터베이스에서 삭제 가능
    li.remove();
        //html에서만 li 지워짐 (localstorage에는 남아있음)
        //저장소에서도 지우기 위해 text 말고 object로 item 변환
        //배열의 item들에게 id명 주기  

    //확인 절차
    // console.log(typeof li.id); //li id는 string 타입이라 parseint해줘야
    toDos = toDos.filter((toDo) => toDo.Id !== parseInt(li.Id));
        //클릭했던 li의 id를 갖고 있는 toDo를 지우겠다
        //=toDo의 li의 id와 다른 것을 남기고 싶다
        //toDo는 toDos DB에 있는 요소 중 하나
        //그래서 화살표 함수는 db에 있는 모든 것과 함께 실행됨
    saveToDos();
        // 위에서 toDo 지운 뒤에 함수 호출 필수 
    }

function paintToDo(newToDo){ 
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.Text;
        //그냥 newToDo만 있으면 값이 안나온다. 
        //왜냐면 object와 text가 함께 call되므로. 
        //명확한 지정 필요
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
    toDoInput.value = ""; 

    const newTodoObj = {
        Text: newToDo, //대문자 필수
        Id: Date.now(), //저장시 랜덤 id 설정
    };
        //콘솔창에 toDos 입력하면 텍스트, id 나옴

    toDos.push(newTodoObj);
    // toDos.push(newToDo); 
       //데이터베이스에 toDo내용 추가하는 곳
       //saveToDo 함수가 아니어따...!

    paintToDo(newTodoObj); //함수에 obj준다
    // paintToDo(newToDo); //함수에 text 준다
    saveToDos(); 
    }
toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos;
     
    parsedToDos.forEach(paintToDo); 
    //함수 실행시 각각 item들의 text와 id가 함께 출력 
   
}

// //filter 기능: 지우고 싶은 item 제외하고 새 array 만들기
// function sexyFilter(){

// }

// [1,2,3,4].filter(sexyFilter); //sexyfilter 함수에 1,2,3,4 넣음