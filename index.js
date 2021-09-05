let books = [];

function addBook(id , title , auther,price , quantity){
	books.push([id , title , auther,price , quantity]);	
}

function editBook(id,title, auther,price, quantity){
	for(let i =0;i<books.length;i++){
		if( books[i] !=null && books[i].includes(id)){
			books[i][0] = id;
			books[i][1] = title;
			books[i][2] = auther;
			books[i][3] = price;
			books[i][4] = quantity;
			return 'success';
		}
	}
	return 'this book not found';
}

function deleteBook(id){
	for(let i =0;i<books.length;i++){
		if(books[i] !=null && books[i].includes(id)){
			delete books[i];
			return 'success';
		}
	}
}

function search(key){
	for(let i =0;i<books.length;i++){
		if(books[i] !=null && books[i].includes(key)){
			console.log(books[i]);
		}
	}
}

function buyBook(key , quantity){
	for(let i =0;i<books.length;i++){
		if(books[i] !=null && books[i] !=null && books[i].includes(key) && books[i][4] >0 && books[i][4] >=quantity  ){
			books[i][4] = books[i][4] - quantity;
			return 'book sell successfully';
		}
	}
	return 'sorry this book not exsit '	;
}

addBook(1,"book1" , "mohamed" , 100 , 10);
addBook(2,"book2" , "ahmed" , 50 , 50);
addBook(3,"book3" , "mostafa" , 24 , 7);
addBook(4,"book4" , "omar" , 30 , 4);
addBook(5,"book5" , "essam" , 120 , 13);

console.log(books);

editBook(1,"book1" , "mohamed" , 100 , 2000);
editBook(3,"book3" , "mostafa" , 796 , 7);

console.log(books);

deleteBook(4);
console.log(books);

search(3);


console.log(buyBook(3,4));
console.log(books);
