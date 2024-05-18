const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const deleteBtn = document.getElementsByClassName('deleteTask');


function addTask()
{
    if (inputBox.value == '') // 만약 아무 입력도 하지 않았다면 경고문
    {
        alert("글자를 입력하세요");
    }
    else
    {
        let li = document.createElement("li"); // list 자료형을 갖는 변수 li 선언
        li.innerHTML = inputBox.value; // list html 내용 값에 입력 박스 안에 있는 값을 넣어줌
        listContainer.appendChild(li); // li를 리스트 값에 넣어준다.

        let bt1 = document.createElement("button");
        bt1.innerHTML = "수정";
        bt1.addEventListener("click", ModifyTask); // 수정 버튼에 이벤트리스너 속성 부여
        li.appendChild(bt1);

        let bt2 = document.createElement("button");
        bt2.innerHTML = "삭제";
        bt2.addEventListener("click", deleteTask); // 삭제 버튼에 이벤트리스너 속성 부여
        li.appendChild(bt2);
    }
    inputBox.value = ""; // 입력하는 곳에 값을 다시 비워준다. (똑같은 값 계속 추가되는거 막기 위함)
}

function deleteTask(e){ //삭제 버튼(x) 클릭시 
    let removeOne = e.target.parentElement;  //선택한 목록 한개만 지우기(부모 객체를 지운다)
    removeOne.remove();
}

function ModifyTask(e){
    let removeOne = e.target.parentElement;
    removeOne.remove();
}
