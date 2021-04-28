var library = [
  {title: 'The Road Ahead', author:'Bill Gates', libraryID:1254},
  {title: 'Walter Isaacson', author:'Steve Jobs', libraryID:4264},
  {title: 'Mockingjay: The Final Book of The Hunger Games', author:'Suzanne Collins', libraryID:3245}];



function mySort(a, b){
  return b.libraryID - a.libraryID;
}

function mySwap(book){
  var temp = book.title;
  book.title = book.author;
  book.author = temp;
  return book;
}

console.log(library.sort(mySort).map(mySwap));