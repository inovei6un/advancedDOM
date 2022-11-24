function create(words) {
   let divContent = document.getElementById('content');

   for (let word of words){
   let div = document.createElement('div');
   let p = document.createElement('p');
   p.textContent = word;
   p.style.display = 'none';
   div.appendChild(p);
   divContent.appendChild(div);
   };

   divContent.addEventListener('click', function(event){
      if (event.target.nodeName === 'P'){
         return
      }
      let p = event.target.children[0];
      p.style.display = 'block';
      
   });
};