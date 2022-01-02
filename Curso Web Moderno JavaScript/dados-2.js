// variavel = LET = IDENTIFICADOR (SEMPRE DEFINIR BONS NOMES)
// armazenando dados nas variáveis

let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);


console.log(19.9 * 0.6);
console.log(preco *(1- desconto));
console.log(precoComDesconto);

// OUTRO EXEMPLO
// CONCATENANDO USA-SE  console.log(" + nome + ", " + nome +")

let nome = "Caderno"; // String (Texto) -> Sequência de símbolos, de letras 
let categoria = "Papelaria";
console.log("Produto: " + nome 
    + ", Categoria: " + categoria
    + ", Preço: " + preco
    + ", Desconto: " + precoComDesconto);