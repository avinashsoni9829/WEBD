/*  targeting nav toggle  */


const navToggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.links');


/*   adding event listner */


 navToggle.addEventListener('click',function(){
    // console.log(links.classList);
   //  console.log(links.classList.contains('links'));
/*
   if(links.classList.contains('show-links'))
   {
        links.classList.remove('show-links');
   }
   else{
         links.classList.add('show-links');
   }
   */

   /* using toggle */

   links.classList.toggle('show-links');
 })