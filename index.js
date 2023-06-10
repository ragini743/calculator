const input=document.querySelector("input");
const buttons=document.querySelectorAll(".button");

for(let button of buttons) {
    button.addEventListener("click",(e)=>{
        if(e.target.textContent=="="){
            console.log("hello")
            input.value=eval(input.value)
            console.log(input.value)

        }
        else if(e.target.textContent=="clear"){
            input.value=""
        }
        else {
        console.log(e.target)
        input.value+=e.target.textContent}
    }
 )
}