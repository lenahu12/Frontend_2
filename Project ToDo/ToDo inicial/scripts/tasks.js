window.addEventListener('load', function() {

    const nombrePerfil = document.querySelector('div p');
    const token = this.localStorage.getItem('token');
    const apiUrlUserInfo = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe';
    const apiUrlTasks = 'https://ctd-todo-api.herokuapp.com/v1/tasks';
    const descripcionTarea = document.querySelector('#nuevaTarea');
    const formulario = document.querySelector('.nueva-tarea');
    const tareasPendientes = document.querySelectorAll('.tarea')




    formulario.addEventListener('submit', function(event) { 
        event.preventDefault();
        if (descripcionTarea != "") {
        postTareas(apiUrlTasks, token, personificacionTareas(descripcionTarea.value))
        formulario.reset()
        }
    })

    
    function fetchGetUserInfo(url, token) {
        const settings = {
            method: 'GET',
            headers: {
                authorization: token
            }
        };
        fetch(url, settings)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            nombrePerfil.innerText = `${data.firstName} ${data.lastName}` 
        });
    };

    function getTareas(url, token) {
        const settings = {
            method: 'GET',
            headers: {
                authorization: token
            }
        };
        fetch(url, settings)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                let nombreTarea = tareasPendientes[i].children[1].children[0];
                let fechaTarea = tareasPendientes[i].children[1].children[1];
                nombreTarea.innerText = data[i].description;
                fechaTarea.innerText = data[i].createdAt;
                
            }
        });
    };

    function postTareas(url, token, payload) {
        const settings = {
            method: 'POST',
            headers: {
                authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        };
        fetch(url, settings)
        .then(response => response.json())
        .then(data => {
            console.log(data)

        });
    }

    function personificacionTareas(descripcion) {
        const nuevaTarea = {
            description: descripcion,
            completed: false
          }
        return nuevaTarea
    }


    fetchGetUserInfo(apiUrlUserInfo, token);
    getTareas(apiUrlTasks, token);
});