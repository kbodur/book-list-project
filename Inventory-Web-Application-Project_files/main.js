
const books=[]

function load(){
    
    
     const grid=document.getElementById("grid-item__list")

    books.push({title:"Friday I'm In Love",author:"Camryn Garrett",imageUrl:"download.jpeg",price:"$18.99",stock:"In Stock"})
    let a=document.createElement("div")
     a.setAttribute("class","book-0")
    var temp='<div class="book"><div class="book-img"><img src="'+books[0].imageUrl+'" width="70px"></div><div class="book-title"> '+ books[0].title+'</div><div class="book-author">'+ books[0].author+'</div><div class="book-stock">"'+ books[0].stock+'</div><div class="book-price">'+ books[0].price+'</div><div class="book-delete"> <i class="fa-regular fa-trash-can" onclick="deleteBook()"></i></div></div>'
    a.innerHTML=temp
    grid.appendChild(a)
   
    
   

    books.push({title:"Principles",author:"Ray Dalio",imageUrl:"download (1).jpeg",price:"$18.99",stock:"In Stock"})
    a=document.createElement("div")
    a.setAttribute("class","book-1")
    var temp='<div class="book"><div class="book-img"><img src="'+books[1].imageUrl+'" width="70px"></div><div class="book-title"> '+ books[1].title+'</div><div class="book-author">'+ books[1].author+'</div><div class="book-stock">"'+ books[1].stock+'</div><div class="book-price">'+ books[1].price+'</div><div class="book-delete"> <i class="fa-regular fa-trash-can" onclick="deleteBook()"></i></div></div>'
    a.innerHTML=temp
    grid.appendChild(a)



    
     books.push({title:"The Women",author:"Kristin Hannah",imageUrl:"download (2).jpeg",price:"$30.00",stock:"In Stock"})
      a=document.createElement("div")
     a.setAttribute("class","book-2")
     var temp='<div class="book"><div class="book-img"><img src="'+books[2].imageUrl+'" width="70px"></div><div class="book-title"> '+ books[2].title+'</div><div class="book-author">'+ books[2].author+'</div><div class="book-stock">"'+ books[2].stock+'</div><div class="book-price">'+ books[2].price+'</div><div class="book-delete"> <i class="fa-regular fa-trash-can" onclick="deleteBook()"></i></div></div>'
     a.innerHTML=temp
      grid.appendChild(a)


    books.push({title:"The Left Hand Of Darkness",author:"Ursula K. Le Guin, David Mitchell, Charlie Jane Anders",imageUrl:"download (3).jpeg",price:"$19.00",stock:"In Stock"})
    a=document.createElement("div")
    a.setAttribute("class","book-2")
    var temp='<div class="book"><div class="book-img"><img src="'+books[3].imageUrl+'" width="70px"></div><div class="book-title"> '+ books[3].title+'</div><div class="book-author">'+ books[3].author+'</div><div class="book-stock">"'+ books[3].stock+'</div><div class="book-price">'+ books[3].price+'</div><div class="book-delete"> <i class="fa-regular fa-trash-can" onclick="deleteBook()"></i></div></div>'
    a.innerHTML=temp
    grid.appendChild(a)


   
    books.push({title:"The Lonely Road",author:" Caston Boyd",imageUrl:"download (4).jpeg",price:"$19.00",stock:"Out Of Stock"})
    a=document.createElement("div")
    a.setAttribute("class","book-2")
    var temp='<div class="book"><div class="book-img"><img src="'+books[4].imageUrl+'" width="70px"></div><div class="book-title"> '+ books[4].title+'</div><div class="book-author">'+ books[4].author+'</div><div class="book-stock">"'+ books[4].stock+'</div><div class="book-price">'+ books[4].price+'</div><div class="book-delete"> <i class="fa-regular fa-trash-can" onclick="deleteBook()"></i></div></div>'
    a.innerHTML=temp
    grid.appendChild(a)

     
    // let item1=document.createElement("div")
    // item1.setAttribute("class","book-img")
    // let image1=document.createElement("img")
    // image1.setAttribute("src",books[0].imageUrl)
    // image1.setAttribute("width","70px")
    // item1.appendChild(image1)
    // grid1.appendChild(item1)
    // let item2=document.createElement("div")
    // item2.setAttribute("class","book-title")
    // item2.appendChild(document.createTextNode(books[0].title))
    // grid1.appendChild(item2)
    // let item3=document.createElement("div")
    // item3.setAttribute("class","book-author")
    // item3.appendChild(document.createTextNode(books[0].author))
    // grid1.appendChild(item3)
    // let item4=document.createElement("div")
    // item4.setAttribute("class","book-stock")
    // item4.appendChild(document.createTextNode(books[0].stock))
    // grid1.appendChild(item4)
    // let item5=document.createElement("div")
    // item5.setAttribute("class","book-price")
    // item5.appendChild(document.createTextNode(books[0].price))
    // grid1.appendChild(item5)
    // let item6=document.createElement("div")
    // item6.setAttribute("class","book-delete")
    // let trash=document.createElement(i)
    // trash.setAttribute("class","fa-regular fa-trash-can")
    // trash.setAttribute(onclick, "deleteBook()")
    // item6.append(trash)
    // grid1.appendChild(item6)
}

function addBook(){

}

function deleteBook(){

}