const btn = document.querySelector('#add')

btn.addEventListener('click',(e)=>{
    const task = document.getElementById('taskIn').value;
    const st = document.getElementById('store')
    // st.innerHTML = `<h1>${task}</h1>`
    // const li = document.createElement('li')
    // li.appendChild(document.createTextNode(task))
    // st.appendChild(li)
    if(task!=""){
        
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(task))
    div.style.backgroundColor = 'gray';
    div.style.borderRadius = '15px';
    div.style.padding = '12px'
    div.style.marginTop = '12px'
    st.appendChild(div)

    }
})