/*
- Parâmetros: É a variável (escopo da função) que irá receber um valor em uma função.
- Argumentos: É o valor que é passado para a função.
*/

let username = "Asmodeus"

function message(username) {
    console.log("Hello", username)
}
message("Haru")
message("Astaroth")

function sum (a,b) {
    console.log(a + b)
}

sum(10,20)
sum(7,3)

// Definindo um valor (argumento) padrão.
function joinText(text1, text2 ="", text3 =""){
    console.log(text1,text2, text3)
}

joinText("Astaroth", "Asmodeus", "Mephisto")
joinText("Asmodeus", "Astaroth", "Mephisto")
