const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todolist");
const deleteAllBtn = document.querySelector(".footer button");
inputBox.onkeyup = ()=>{//arrow function
    //lay gia tri khi user nhap vao
    let userEnteredValue = inputBox.value;
    //Neu user nhap vao gia tri (Khong phai la khoang trang)
    if(userEnteredValue.trim()!=0){
        //Thi nut add cua ta se sang len
        //truong hop nhap toan khong trang (space) thi se khong sang len
        addBtn.classList.add("active");
    }
    else{
        // nguoc lai thi khong sang
        addBtn.classList.remove("active");
    }
}
showTasks();
//Gio minh se viet ham de thao tac voi nut Add 
//lay gia tri ma user da nhap o o input
addBtn.onclick = ()=>{
    let userEnteredValue = inputBox.value;
    //lay localStorage (Bien luu tru cuc bo)
    let getLocalStorageData = localStorage.getItem("New todo");
    if(getLocalStorageData==null)
    {
        //neu nhu localStorage = null
        //thi se tao ra 1 mang rong
        listArray= [];
    }
    else{
        //nguoc lai thi se chuyen Json tu dang string sang object
        listArray = JSON.parse(getLocalStorageData);
   }
   //day gia tri moi vao mang da tao
   listArray.push(userEnteredValue);
   localStorage.setItem("New todo",JSON.stringify(listArray));
   //chuyen json tu dang object sang tring
   showTasks();
   addBtn.classList.remove("active");
}
function showTasks(){
     //lay localStorage (Bien luu tru cuc bo)
     let getLocalStorageData = localStorage.getItem("New todo");
     if(getLocalStorageData==null)
     {
         //neu nhu localStorage = null
         //thi se tao ra 1 mang rong
         listArray= [];
     }
     else{
         //nguoc lai thi se chuyen Json tu dang string sang object
         listArray = JSON.parse(getLocalStorageData);
    }
    const pendingTasksNumb = document.querySelector(".pendingTasks");
    pendingTasksNumb.textContent = listArray.length;
    if(listArray.length>0)
    {
        deleteAllBtn.classList.add("active");
    }
    else{
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = "";
    listArray.forEach((element,index)=>{
        newLiTag+= `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todolist.innerHTML = newLiTag;
    inputBox.value = "";
}
