let time = 30
let score =0
let hitrn =0
let kol =0
function scoreinc(){
score += 10
document.querySelector("#score").textContent =score
}

function hitsc(){
   hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitscr").textContent=hitrn
}


function makebuble(){
    
let cluter =""

for(let i =1;i<=126;i++){
    let rn = Math.floor(Math.random()*10)
    cluter +=` <div class="bubble">${rn}</div>`
}
document.querySelector("#pbot").innerHTML =cluter;

}


function timmer(){
   let timerintrvl= setInterval(() => {
        if(time>0){
            time--
            document.getElementById("timmer").textContent =`${time}`;
            
        }
       else{
        clearInterval(timerintrvl)
        document.querySelector("#pbot").innerHTML =`<h1>GAME OVER <br>  SCORE -- ${score}</h1>`
       }
     
    }, 1000);
}
 


document.querySelector("#pbot")
.addEventListener('click',(details)=>{
    let numbr = Number(details.target.textContent)
   if(numbr=== hitrn){
    scoreinc()
    hitsc()
    makebuble()
    if(time===0){
       
    }
   }
})

let btnelement = document.querySelector(".bt")
.addEventListener('click',()=>{
    
    timmer()
    
})
makebuble();
hitsc();
function refrecepage(){
    window.location = window.location.href;
}
 
let playagainbtn= document.querySelector(".ref")
.addEventListener('click',()=>{
    // alert("I am an alert box!");
    refrecepage();
    timmer()

})




