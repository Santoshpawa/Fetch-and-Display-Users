async function getData(){
    try{
        let data= await fetch('https://jsonplaceholder.typicode.com/users')
        return  showData(data.json()); 
    }catch(error){
        console.log("Error: ",error)
    }
}


async function showData(data){

    let result=await data;
    result.sort((a,b)=> a.name.localeCompare(b.name)).forEach((ele)=>{
        console.log(ele.name)
    })
}


getData();