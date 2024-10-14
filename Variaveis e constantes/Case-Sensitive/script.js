/* 
Quando uma linguagem de programção é case-sensitive significa que ela é sensivel a letras maiúsculas e minúsculas.

Por exemplo: "Haru" é considerado diferente de "haru".
*/

var product = "goth keyboard"
var Product = "goth mouse"

var product = "goth headphone" // sobreescreveu a variavel => var product = "goth keyboard"

console.log(product)
console.log(Product)