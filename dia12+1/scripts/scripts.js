function buscarPersonaje() {
    document.getElementById("resultados").innerHTML=``;
  
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    console.log(nombreUsar);
    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api.php/3f14aa22f20d98ce802c1713369c26da/search/${nombreUsar}`;//Acento Inverso ```
    console.log(url);
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function (){

        if (xhr.readyState===3){
            
        }
        else if(xhr.readyState===4 && xhr.status === 200){
            try{

                const daticos = JSON.parse(xhr.responseText);
                if (daticos.results && daticos.results.length > 0) {
                    for (let i = 0; i < daticos.results.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML += `
                        <div class="card">
            <img src="${daticos["results"][i]["image"]}" alt="">
            <h3>${daticos["results"][i]["name"]}</h3>
            <p><strong>Status:</strong>${daticos["results"][i]["name"]}</p>
            <p><strong>ID:</strong>${daticos["results"][i]["id"]}</p>
        </div>
                        `
                        console.log(daticos["results"][i]["name"]);
                    }
                }

            }   
            catch(err){
                console.log(err.message); 
            }
        }
    };
    xhr.send();
}


buscarPersonaje();