const boxes=document.querySelectorAll(".keyword>.opertor>div,.keyword>.number>div");
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        function check(){
        const typ=document.querySelector(".sumbox");
        if( typ.value===""){
            typ.value=box.textContent;}
        else{
            typ.value=typ.value+box.textContent;   
        }
    };
    check();
    });
});
let but=document.querySelector(".res");
but.addEventListener("click",()=>{
    tup=document.querySelector(".sumbox");
    let str=tup.value;
let plusArr = str.split("+");
console.log("Split by +", plusArr);

let total = 0;
plusArr.map((plusPart, i) => {
    
    let minusArr = plusPart.split("-");
    console.log(`Split by - (from ${plusPart})`, minusArr);

    let subResult = minusArr.map((minusPart) => {
      
        let mulArr = minusPart.split("*");
        console.log(`Split by * (from ${minusPart})`, mulArr);

        
        let afterDiv = mulArr.map((el) => {
            if (el.includes("/")) {
                let divParts = el.split("/");
                let val = Number(divParts[0]);
                for (let j = 1; j < divParts.length; j++) {
                    val = val / Number(divParts[j]);
                }
                return val;
            } else {
                return Number(el);
            }
        });

        console.log("After division solving: ", afterDiv);

       
        let mul = 1;
        afterDiv.map((el) => {
            mul *= Number(el);
        });
        console.log("Multiplication result: ", mul);
        return mul; 
    });

    console.log("Subtraction parts result: ", subResult);


    let minusTotal = subResult[0];
    for (let k = 1; k < subResult.length; k++) {
        minusTotal -= subResult[k];
    }
    

   
    total += minusTotal;
});






 let gr=document.querySelector(".gr");
 gr.textContent=total;
    
     }
    ); 

 let reset=document.querySelector(".reset");
 reset.addEventListener("click",()=>{
    tup=document.querySelector(".sumbox");
    tup.value="";
     gr=document.querySelector(".gr");
     gr.textContent="";
     


 })



 







     































