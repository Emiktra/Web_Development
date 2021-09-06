function findFubonnaci(e){
    var a = 1;
    var b = 0;
    var Next;
    for (let i = 0; i < e; i++) {
        Next = a+b
        b = a
        a = Next  
    }
    alert(Next)
}




let input = prompt("Enter which fibonnaci number you want");
if (!isNaN(input)){
    input = Math.round(input);
    findFubonnaci(input);}


    