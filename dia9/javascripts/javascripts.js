
function buscarPersonaje(){
    
    const xhr = new XMLHttpRequest();
    const url = `https://rickandmortyapi.com/api/character?name=${nombreUsar}`;
    console.log(url);
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState===3){
            
      
        }
        else if(xhr.readyState===4 && xhr.status === 200){
            try{

                const daticos = JSON.parse(xhr.responseText);
               
            }
            catch(err){
                console.log(err.message); 
            }
        }
    };
    xhr.send();
}


buscarPersonaje();