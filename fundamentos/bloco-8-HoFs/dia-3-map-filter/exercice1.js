const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

  const formatedBookNames = (arr) => arr.map((el) => [el.name, el.genre, el.author.name])
 // console.log(formatedBookNames(books))

  // 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

  const nameAndAge = (arr) => arr.map((el) => ({ age: el.releaseYear - el.author.birthYear, nome: el.author.name})).sort((a, b) => a.age - b.age);
 // console.log(nameAndAge(books))

  // 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

  const filteredGenre = (arr, gen1, gen2) => arr.filter((el) => el.genre === gen1 || el.genre === gen2);
//  console.log(filteredGenre(books, 'Fantasia', 'Ficção Científica'));

  // 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

  const oldBooksOrdered = (arr) => arr.filter((el) => 2022 - el.releaseYear > 60 ? el.name : '').sort((a, b) => a.releaseYear - b.releaseYear) 
  // console.log(oldBooksOrdered(books))

  // 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

  const fantasyOrScienceFictionAuthors = (arr, gen1, gen2) => arr.filter((el) => {if(el.genre === gen1 || el.genre === gen2) {
      return el.author.name}}).map(((el) => el.author.name)).sort((a, b) => a - b);
  
  // console.log(fantasyOrScienceFictionAuthors(books, 'Fantasia', 'Ficção Científica'))

  // 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação. 

  const oldBooks = (arr) => arr.filter((el) => 2022 - el.releaseYear > 60 ?  el.name : '').map((el) => el.name);
  //console.log(oldBooks(books));   

  // 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
  const authorWith3DotsOnName = (arr) => arr.filter((el) => el.author.name.match(/^(.\. .\. .\.)/)).map((el) => el.name);
  console.log(authorWith3DotsOnName(books)); 