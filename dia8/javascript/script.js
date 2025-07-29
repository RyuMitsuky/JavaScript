
function  buscarPersonaje(){
    const nombreBuscar= parseInt(prompt("Ingresar el nombre del personaje a buscar:"));
    const xhr = new XMLHttpRequest();
    const url = `https://swapi.py4e.com/api/people/${nombreBuscar}`;
    console.log(url);
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState===3){
            
            alert("Loading . .")
        }
        else if(xhr.readyState===4 && xhr.status === 200){
            try{

                const datos = JSON.parse(xhr.responseText);
                alert("The character is: Name:"+datos["name"]);
            }
            catch(err){
                console.log(err.message); 
            }
        }
    };
    xhr.send();
}


buscarPersonaje();