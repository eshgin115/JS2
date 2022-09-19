function Group(){
var text=document.getElementById('tex');
var inp =document.getElementById('inp');
var result=inp.value.slice(-3,-2)

  if(result==3){
   
  
     text.innerHTML=`<span style="color:black" >${inp.value}</span> Group code`

  
  
  
}
else if(result==2){
   text.innerHTML=`<span style="color:red" >${inp.value}</span> Group code`
  

}
else if(result==1){
   

   text.innerHTML=`<span style="color:yellow" >${inp.value}</span> Group code`

   }
   else{
    text.innerHTML='siz Code Academyda oxumursuz sorry'
   }
}
function Mode(){
  if( document.body.style.backgroundColor=='white')
{
   var text=document.getElementById('tex');
   text.style.color='white'
   document.body.style.backgroundColor='black'

}
else if( document.body.style.backgroundColor='white'){

   var text=document.getElementById('tex');
   text.style.color='black'
   document.body.style.backgroundColor='white'
}
}