const API_URL = 'https://www.swapi.tech/api/' //request
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }//crossDomain es un objeto como parametro que induca que ese request va dirigida a otra pagina

function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
          
        $.get(url, opts, function(data){
            resolve(data)
         })
        .fail(() => reject(id))
     })
    }

    function onError(id){
        console.log(`Sucedio un error al obtener un personaje ${id}`)
    }


    async function obtenerPersonajes(){
        var ids = [1, 2, 3, 4, 5, 6, 7]
        var promesas = ids.map (id => obtenerPersonaje(id))
        try {
            var personajes = await Promise.all(promesas)
            console.log(personajes)
        }   catch (id) {
            onError(id)
        }
 }

 obtenerPersonaje()

   