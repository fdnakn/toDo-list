let addtodo = document.getElementById('addtodo');
let todoid = document.getElementById('todoid');
let inputext = document.getElementById('inputtext');
let cleartodo = document.getElementById('cleartodo');



addtodo.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('p-style')
    todoid.appendChild(paragraph);
    paragraph.innerHTML=inputtext.value;
    inputext.value="";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through';
    })

    paragraph.addEventListener('dblclick',function(){
        todoid.removeChild('paragraph');
    })

    cleartodo.addEventListener('click',function(){
        paragraph.style.display='none';
    })
})