//const { boolean } = require("mathjs");

var aa=12345678;
console.log(aa);
//alert("hello MF");
/*var really=confirm("do u really want it so bad");
console.log(really);
setInterval(updatetime,1000);
    function updatetime(){
        date.innerHTML=new Date();
    }*/
// For Node.js
/*const math = require('mathjs');

// Define the variable and equation
const x = math.symbol('x');
const equation = math.parse('3*x^2 + 2*x + 1');

// Calculate the derivative
const derivative = math.derivative(equation, x);

// Display the result
console.log(derivative.toString());
import { derivate } from 'mathjs'
console.log(derivate(`x^2+2x`,`x`).toString());*/
let input=document.getElementById(`input`);
let button=document.getElementById(`button`);
let data;
let loc;


navigator.geolocation.getCurrentPosition(
    (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        // Do something with the coordinates
        loc={Latitude: latitude, Longitude: longitude}
    },
    (error) => {
        console.error('Error getting location:', error);
    }
);


let a=true;

button.addEventListener('click',async ()=>{

    if(input.value!=``)
    {
        
        let firstName=input.value;
        
        let res=await fetch(`http://localhost:3001/`,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({firstName,loc})
        })
           if(!res.ok)
           {
               console.log(`error!!!!`);
           }
           //console.log(res);
            let data=await res.json();

            console.log(data)
           if(data.imageUrl!=`error`)
           {
              console.log(data.imageUrl);
           }
           
            if(a)
            {
                const pic=new Image();
                pic.src=data.imageUrl;
                pic.width=186;
                pic.height=219;
                pic.setAttribute(`id`,`xx`);
                a=false;
                document.getElementsByClassName(`container`)[0].appendChild(pic);
            }
            else{
                let pic=document.getElementById(`xx`);
                pic.src= pic.src=data.imageUrl;
            }
  




        input.value=``;
    }
})






