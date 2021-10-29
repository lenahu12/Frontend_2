window.addEventListener('load', function(){

    const email = document.querySelector('#inputEmail');
    const contrasenia = document.querySelector('#inputPassword');
    const formulario = document.querySelector('form');
    const apiurl = 'https://ctd-todo-api.herokuapp.com/v1/users/login';

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        let validacionCampos = validarNoVacio(email.value) && validarNoVacio(contrasenia.value);
        if (validacionCampos) {

            fetchApiLogin(apiurl, normalizacionUsuario(email.value, contrasenia.value));

        }else {

            alert("no se permiten campos vacios");
            
        }
        formulario.reset();
    });

    function fetchApiLogin(url, payload) {
    
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        };
    
    
        fetch(url, settings)
        .then (response => response.json())
        .then (data => {
            console.log(data);
            if(data.jwt) {
                localStorage.setItem('token', data.jwt)
                location.href = 'mis-tareas.html'
            }
        });
    };

    function validarNoVacio(campo) {
        let resultado = true;
        if (campo === "") {
            resultado = false;
        }
        return resultado
    };

    function normalizacionUsuario(mail, password) {
        const usuario = {
            email: mail.toLowerCase().trim(),
            password: password.trim(),    
        }
        return usuario;
    };
});


