const addBtn = document.querySelector("#addBtn"); //criou uma variável, acessou o documento que é o meu DOM do HTML epegou as propriedades do meu button e guardou na variável criada ( pegou o botão no DOM)
addBtn.addEventListener("click", function(){
    const li = document.createElement('li');
    const inputValue = document.querySelector("#myInput").value;
    const taskText = document.createTextNode(inputValue);
    li.appendChild(taskText);
    if(inputValue ===""){
        alert("você deve digitar uma terefa!!")
    }else{
        document.getElementById("#myUL").appendChild(1);
    }
})