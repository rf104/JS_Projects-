const btnLight = document.getElementById('btnL');
const btnDark = document.getElementById('btnD');

btnLight.addEventListener('click',(e)=>{
    e.preventDefault();
    document.body.style.backgroundColor = '#fff';
})

btnDark.addEventListener('click',(e)=>{
    e.preventDefault();
    document.body.style.backgroundColor = '#212121'
})