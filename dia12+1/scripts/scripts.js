

function buscarPersonaje(){
    const nombreUsar= prompt("Ingresar el nombre del personaje a buscar:");
    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api.php/3f14aa22f20d98ce802c1713369c26da/search/${nombreUsar}`;
    console.log(url);
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState===3){
            
            alert("Cargando...")
        }
        else if(xhr.readyState===4 && xhr.status === 200){
            try{

                const daticos = JSON.parse(xhr.responseText);
                alert("The character is: Name:"+daticos["id"][0]["id"]+" id:"+daticos["id"][0]["id"]+ " id:"+daticos["id"][0]["id"]);
            }
            catch(err){
                console.log(err.message); 
            }
        }
    };
    xhr.send();
}


buscarPersonaje();