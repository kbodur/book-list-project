
const books=[];

function load(){
    
    
     const grid=document.getElementById("grid-item__list");

    books.push({title:"Momo",author:"Micheal Ende",imageUrl:"https://m.media-amazon.com/images/I/61QfbiHLQGL._SY522_.jpg",price:"$11.89",stock:"In Stock"})
    let a=document.createElement("div");
     a.setAttribute("class","book-0");
     a.setAttribute("id","book-0");
    var temp='<div class="book"><div class="book-img"><img src="'+books[0].imageUrl+'" width="70px"></div><div class="book-title"> '+ books[0].title+'</div><div class="book-author">'+ books[0].author+'</div><div class="book-stock">'+ books[0].stock+'</div><div class="book-price">'+ books[0].price+'</div><div class="book-delete-0"> <i class="fa-regular fa-trash-can" onclick="deleteBook(this)"></i></div></div>'
    a.innerHTML=temp;
    grid.appendChild(a);
    
   

    books.push({title:"Principles",author:"Ray Dalio",imageUrl:"https://m.media-amazon.com/images/I/71-byw29G4L._SY522_.jpg",price:"$18.99",stock:"In Stock"})
    a=document.createElement("div");
    a.setAttribute("class","book-1");
    a.setAttribute("id","book-1");
    var temp='<div class="book"><div class="book-img"><img src="'+books[1].imageUrl+'" width="70px"></div><div class="book-title"> '+ books[1].title+'</div><div class="book-author">'+ books[1].author+'</div><div class="book-stock">'+ books[1].stock+'</div><div class="book-price">'+ books[1].price+'</div><div class="book-delete-1"> <i class="fa-regular fa-trash-can" onclick="deleteBook(this)"></i></div></div>'
    a.innerHTML=temp;
    grid.appendChild(a);

    
     books.push({title:"The Women",author:"Kristin Hannah",imageUrl:"https://m.media-amazon.com/images/I/91mP3553EzL._AC_UY436_FMwebp_QL65_.jpg",price:"$19.00",stock:"In Stock"})
      a=document.createElement("div");
     a.setAttribute("class","book-2");
     a.setAttribute("id","book-2");
     var temp='<div class="book"><div class="book-img"><img src="'+books[2].imageUrl+'" width="70px"></div><div class="book-title"> '+ books[2].title+'</div><div class="book-author">'+ books[2].author+'</div><div class="book-stock">'+ books[2].stock+'</div><div class="book-price">'+ books[2].price+'</div><div class="book-delete-2"> <i class="fa-regular fa-trash-can" onclick="deleteBook(this)"></i></div></div>'
     a.innerHTML=temp;
      grid.appendChild(a);


    books.push({title:"Matilda",author:"Roald Dahl",imageUrl:"https://m.media-amazon.com/images/I/81UQyyHyB7L._SY522_.jpg",price:"$9.00",stock:"In Stock"})
    a=document.createElement("div");
    a.setAttribute("class","book-3");
    a.setAttribute("id","book-3");
    var temp='<div class="book"><div class="book-img"><img src="'+books[3].imageUrl+'" width="70px"></div><div class="book-title"> '+ books[3].title+'</div><div class="book-author">'+ books[3].author+'</div><div class="book-stock">'+ books[3].stock+'</div><div class="book-price">'+ books[3].price+'</div><div class="book-delete-3"> <i class="fa-regular fa-trash-can" onclick="deleteBook(this)"></i></div></div>'
    a.innerHTML=temp;
    grid.appendChild(a);

   
    books.push({title:"The Lonely Road",author:" Caston Boyd",imageUrl:"https://m.media-amazon.com/images/I/91jVbYXO1ZL._AC_UY436_FMwebp_QL65_.jpg",price:"$19.00",stock:"Out Of Stock"})
    a=document.createElement("div");
    a.setAttribute("class","book-4");
    a.setAttribute("id","book-4");
    var temp='<div class="book"><div class="book-img"><img src="'+books[4].imageUrl+'" width="70px"></div><div class="book-title"> '+ books[4].title+'</div><div class="book-author">'+ books[4].author+'</div><div class="book-stock" style="background-color:red;">'+ books[4].stock+'</div><div class="book-price">'+ books[4].price+'</div><div class="book-delete-4"> <i class="fa-regular fa-trash-can" onclick="deleteBook(this)"></i></div></div>'
    a.innerHTML=temp;
    grid.appendChild(a);


    books.push({title:"Fahrenheit 451",author:" Ray Bradbury",imageUrl:"https://m.media-amazon.com/images/I/61z7RDG3OIL._AC_UY436_FMwebp_QL65_.jpg",price:"$15.00",stock:"In Stock"})
    a=document.createElement("div");
    a.setAttribute("class","book-5");
    a.setAttribute("id","book-5");
    var temp='<div class="book"><div class="book-img"><img src="'+books[5].imageUrl+'" width="70px"></div><div class="book-title"> '+ books[5].title+'</div><div class="book-author">'+ books[5].author+'</div><div class="book-stock">'+ books[5].stock+'</div><div class="book-price">'+ books[5].price+'</div><div class="book-delete-5"> <i class="fa-regular fa-trash-can" onclick="deleteBook(this)"></i></div></div>'
    a.innerHTML=temp;
    grid.appendChild(a);
   
}

function addBook(){
    let grid=document.getElementById("grid-item__list")
    const tit = document.getElementById('title').value;
    const aut = document.getElementById('author').value;
    const imgUrl=document.getElementById('image-url').value
    const pri=document.getElementById('price').value
    const stoc= document.getElementById('stock').value
    books.push({title:tit, author:aut, imageUrl:imgUrl, price:pri,stock:stoc});
    if(tit=="" || aut=="" || imgUrl==""|| pri.length==0){

        grid=document.getElementById("message")
        b=document.createElement("div")
        b.innerHTML='<h1>Missing required book information. Please fill all fields</h1>'
        grid.appendChild(b)
        setTimeout(()=>{
            b.remove();
           },2000)
       
    }else {
        let b=document.createElement('div')
        b.setAttribute('class',"book-"+(books.length-1).toString())
        b.setAttribute("id","book-"+(books.length-1).toString());
        if(stoc=="in-stock"){
            b.innerHTML='<div class="book"><div class="book-img"><img src="'+imgUrl+'" width="70px"></div><div class="book-title"> '+ tit+'</div><div class="book-author">'+ aut+'</div><div class="book-stock" style="background-color:green">'+ stoc+'</div><div class="book-price">'+ pri+'</div><div class="book-delete-'+(books.length-1).toString()+'"> <i class="fa-regular fa-trash-can" onclick="deleteBook()"></i></div></div>' 
        } else { 
        b.innerHTML='<div class="book"><div class="book-img"><img src="'+imgUrl+'" width="70px"></div><div class="book-title"> '+ tit+'</div><div class="book-author">'+ aut+'</div><div class="book-stock" style="background-color:red">'+ stoc+'</div><div class="book-price">'+ pri+'</div><div class="book-delete-'+(books.length-1).toString()+'"> <i class="fa-regular fa-trash-can" onclick="deleteBook()"></i></div></div>'
        }grid.appendChild(b)

        grid=document.getElementById("message")
        b=document.createElement("div")
        b.innerHTML='<p>Book added successfully</p>'
        grid.appendChild(b)
        setTimeout(()=>{
            b.remove();
           },2000)
           
    }
}

function deleteBook(sender){
var book=sender.parentNode.parentNode.parentNode
book=book.getAttribute("id")
let grid=document.getElementById(book)
grid.remove();
}






