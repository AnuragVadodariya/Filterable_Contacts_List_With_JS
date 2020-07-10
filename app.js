const tBox=document.getElementById('userType');

//add addEventListener 
tBox.addEventListener("input",matchContact);

function matchContact(){
     let tBoxvalue=document.getElementById('userType').value.toUpperCase();
     let getAlltd=document.getElementsByClassName('contact');

     for(i=0;i<getAlltd.length;i++){
          if(getAlltd[i].innerHTML.toUpperCase().includes(tBoxvalue)){
               getAlltd[i].style.display='';
          }else{
               getAlltd[i].style.display='none';
          }
     }
}
