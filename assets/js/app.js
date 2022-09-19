function Group(){
var text=document.getElementById('tex');
var inp=document.getElementById('inp')
var result=inp.value.slice(-3,-2)
  if(result==3){
 
    inp.style.color='black'
   text.innerHTML=`${inp.value} qrupusuz`
   text.style.color='black'
  
}
else if(result==2){
  
    inp.style.color='red'
   text.innerHTML=`${inp.value} qrupusuz`
   text.style.color='red'

}
else if(result==1){
   

    inp.style.color='yellow'
   text.innerHTML=`${inp.value} qrupusuz`
   text.style.color='yellow'

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