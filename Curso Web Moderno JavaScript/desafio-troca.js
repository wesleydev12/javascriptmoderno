
let a = 7;
let b = 94;

console.log(a);
console.log(b);

// depois trocar ... a = 94 e b = 7;

//a = 94;
//b = 7;

//console.log(a);
//console.log(b);

// let temp

/*
{
*let temp = a;
*a = b;
*b = temp;
*}
*/

// A MELHOR FORMA DE FAZER A TROCA DE VALORES DAS VARIAVEIS 

[a , b] = [b, a]

console.log(a);
console.log(b);