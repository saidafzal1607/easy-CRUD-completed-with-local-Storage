const input = document.getElementById("input");
const button = document.getElementById("submit");
const list = document.getElementById("list");

const arr = JSON.parse(localStorage.getItem("array"))?JSON.parse(localStorage.getItem("array")):[];

const saveArr =()=>{
  localStorage.setItem("array", JSON.stringify(arr));
}

const getInputValue=()=>{
  if(input.value){
    arr.push({text:input.value})
    input.value="";
    saveArr();
    display();
  }
}

const display=()=>{
  const arr = JSON.parse(localStorage.getItem("array"));
  list.innerHTML = "";
  arr.forEach((item, index)=>{
    list.innerHTML +=`
      <li id="item">
        ${item.text}
        <button onClick="editPost(${index})">Edit</button>
        <button onClick="deletePost(${index})" >Delete</button>
      </li>
    `
  })
}

const deletePost=(id)=>{
  arr.forEach((item, index)=>{
    if(index==id){
      arr.splice(index,1);
      console.log(arr, 'inside')
    }
  });
  
  saveArr();
  display();
}

const editPost=(id)=>{
 
  arr.forEach((item,index)=>{
    if(index==id){
      const edit = prompt('edit post please!!!', item.text);
      item.text = edit
    }
  })
    saveArr();
    display();
}

if(arr.length){
  display();
}

