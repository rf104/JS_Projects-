const btn = document.querySelector('#add')
let record = [];
let flg = false;
const Inputfield = document.getElementById('taskIn');
Inputfield.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        e.preventDefault();
        btn.click();
    }
})


btn.addEventListener('click',(e)=>{
    const task = document.getElementById('taskIn').value.trim();
    
    const st = document.getElementById('store')
    // st.innerHTML = `<h1>${task}</h1>`
    // const li = document.createElement('li')
    // li.appendChild(document.createTextNode(task))
    // st.appendChild(li)

    if(task!=""){
        flg = true;
        record.push(task)
        console.log(record);
        const btnDiv = document.createElement('div');
        btnDiv.setAttribute('id','btnDiv');


        const btnCreat = document.createElement('button');
        btnCreat.textContent = "Done";
        btnCreat.setAttribute('id','btnIn');
        // btnCreat.classList.add('btnIn')

        btnCreat.addEventListener('click',(e)=>{
            e.preventDefault();
            console.log('Done btn clicked!');
            // console.log(btnCreat.parentNode.parentNode.childNodes[0])
            // console.log(typeof btnCreat.parentNode.parentNode.childNodes[0].textContent)
            // console.log(record[record.indexOf(toString(btnCreat.parentNode.parentNode.childNodes[0]))]);
            // console.log(record.indexOf(btnCreat.parentNode.parentNode.childNodes[0].textContent))

            // record[record.indexOf(btnCreat.parentNode.parentNode.childNodes[0].textContent)] = ''
            record.splice(record.indexOf(btnCreat.parentNode.parentNode.childNodes[0].textContent),1);
            console.log(record)
            btnCreat.parentNode.parentNode.remove();
        })


        const btnEdt = document.createElement('button');
        btnEdt.textContent = "Edit"
        btnEdt.setAttribute('id','btnEdt')
        btnEdt.addEventListener('click',(e)=>{
            console.log(e.target)
            // e.target.parentNode.parentNode.append(document.createElement('input'));
            const edtTxt = prompt("Enter Your Modified Task");
            record[record.indexOf(btnEdt.parentNode.parentNode.childNodes[0].textContent)] =edtTxt ;
            e.target.parentNode.parentNode.childNodes[0].textContent = edtTxt;
            // e.target.append(document.createElement('input'))
        })

        btnDiv.append(btnCreat);
        btnDiv.append(btnEdt);
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(task))
        // div.appendChild(btnCreat);
        // div.appendChild(btnEdt)
        div.append(btnDiv)
        div.setAttribute('id','taskDiv');

        st.appendChild(div)
        // task = ""
        
    }
    document.getElementById('taskIn').value = ''
})


