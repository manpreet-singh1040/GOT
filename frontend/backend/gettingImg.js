//export default 
  const img=async (val)=>{
    
    let qw=``;
    let q={};
let Response=await fetch(`https://thronesapi.com/api/v2/Characters`)
 if(!Response.ok)
 {
     alert(`error`);
 }
 let data=await Response.json();
// console.log(data);
 for(let i=0;i<53;i++)
     {
        if(data[i].firstName===val)
        {
         console.log(`got it`);
         //console.log(data[i].imageUrl);
            qw=data[i].imageUrl;
            q=data[i];
        }
     }
     if(qw===``)
     {
         qw=`error`;
         q={imageUrl:`error`};
     }
    return q;
}
module.exports={
   img :img
}