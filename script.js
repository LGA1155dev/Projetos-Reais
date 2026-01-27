const btn = document.getElementById('MenuBar')

btn.addEventListener('click', () => {
   const  aside = document.querySelector('aside')


   if (window.getComputedStyle(aside).display == 'flex'){
        aside.style.display = 'none'
   } else{
    aside.style.display = 'flex'
   }
    
})