const access_key = '7f988f7a98af9888d5266aa2a26e2ad1'; 
// const access_key = '2d09a6d8b4a0757885c5b015dad4f8b0';  ///OpenWeather.com 
// const query = 'Bangladesh';

let inp = document.getElementById("fieldIN");
let srcBtn = document.getElementById('Search')
let parent = document.getElementById('outField')

srcBtn.addEventListener('click',(e)=>{
    let query = inp.value
    if(query) Check(query)
})

function Check(query){
fetch(`http://api.weatherstack.com/current?access_key=${access_key}&query=${query}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        console.log ( data.current.temperature)
        console.log(data.location.country)

        let div = document.createElement('div')
        div.setAttribute('id',"DivTemplate")
        div.textContent = `The Tempreature of ${query} is ${data.current.temperature} Degree Celcius Country : ${data.location.country} \n Time : ${data.current.
            observation_time}`
        document.getElementById('outField').appendChild(div);

    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log('Finally Done!!');
    });


}