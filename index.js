
/* do not do it 7 times  use loops
document.querySelector("button").addEventListener("click",function ()
{
    alert("Adapting");
});
*/
var n=document.querySelectorAll("button").length
for(var i=0;i<n;i++)
{
 document.querySelectorAll(".drum")[i].addEventListener("click",function ()
{
   
  
    var b=this.innerHTML;
    makeSound(b);
    buttonAnimation(b);
    
});
}
document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(b)
{
    switch(b)
    {
         case 'w':
            var a1=new Audio("./sounds/tom-1.mp3");
            a1.play(); 
            break;
         case 'a':
                var a2=new Audio("./sounds/tom-2.mp3");
                a2.play(); 
                break;
         case 's':
            var a3=new Audio("./sounds/tom-3.mp3");
            a3.play(); 
            break;
         case 'd':
                var a4=new Audio("./sounds/tom-4.mp3");
                a4.play(); 
                break;
         case 'j':
                    var a5=new Audio("./sounds/snare.mp3");
                    a5.play(); 
                    break;
         case 'k':
            var a6=new Audio("./sounds/crash.mp3");
            a6.play(); 
            break;
         case 'l':
            var a7=new Audio("./sounds/kick-bass.mp3");
            a7.play(); 
            break;
        default:
            console.log(b);


    }
}
function buttonAnimation(key)
{
    var button=document.querySelector("."+key);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    },100);
    
}