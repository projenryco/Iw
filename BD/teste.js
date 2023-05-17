function login(){

    let nome = document.getElementById("nome").value
    let senha = document.getElementById("senha").value

    let dados = [
        {"id":Date.now(),"nome" : "will", "senha" : 0000},
        {"id":Date.now(),"nome" : "bob", "senha" : 0000},
        {"id":Date.now(),"nome" : "ryco", "senha" : 0000}
    ]
    for (let i=0;dados.lenght > i;i++){
    if(nome == dados[i].nome && senha == dados[i].senha){
        alert("logado!")
        break
    } 
    }
}

function local(){

    let item = ["zucas"]

    let nomes = [["bruno","zaz"."monica"] + ";" + item]

    localStorage.setItem("todos", nomes);

    document.getAnimations("demo").innerHTML = localStorage.getItem("grupo");



}
