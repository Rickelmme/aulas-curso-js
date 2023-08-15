let umaString = 'O rato roeu a roupa do';

console.log(umaString[4]); // Pega um carácter pelo índice
console.log(umaString.charAt(3)); // Pega um carácter pelo índice
console.log(umaString.concat(' ', 'rei', ' de', 'roma ')); // Concatenização
console.log(umaString + ' rei de roma'); // Concatenização
console.log(`${umaString} rei de roma`); // Concatenização
console.log(umaString.indexOf('texto')); // Mostra em qual índice começa a palavra
console.log(umaString.lastIndexOf('m')); // Mostra em qual índice começa a palavra
console.log(umaString.match(/[a-z]/g)); // Retorna todas as letras minúsculas
console.log(umaString.search(/[r]/)); // Retorna o índice de onde que foi encontrado
console.log(umaString.replace('rato', 'ratinho')); // Substitui a palavra
console.log(umaString.replace(/r/g, '#')); // Substitui todas as letras escolhidas
console.log(umaString.length); // Mostra o tamanho da string
console.log(umaString.slice(2, 6)); // Fatiamento (começa, termina)
console.log(umaString.slice(-8, -2)); // Fatiamento (começa, termina)
console.log(umaString.slice(14)); // Fatiamento (começa)
console.log(umaString.slice(-8)); // Fatiamento (começa)
console.log(umaString.split(' ')); // Divide a string pelo carácter escolhido
console.log(umaString.split(' ', 2)); // Com limitação agora 
console.log(umaString.toUpperCase()); // Deixa a string toda maiúscula
console.log(umaString.toLocaleLowerCase()); // Deixa a string toda minúscula