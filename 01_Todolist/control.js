const btn = document.querySelector('#add')

btn.addEventListener('click',(e)=>{
    const task = document.getElementById('taskIn').value;
    const st = document.getElementById('class')
    // st.innerHTML = `<h1>${task}</h1>`
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(task))
    st.appendChild(li)
})