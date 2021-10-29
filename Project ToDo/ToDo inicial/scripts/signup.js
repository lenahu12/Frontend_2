

window.addEventListener('load', function(){

    const formulario = document.querySelector('form');
    const nombre = document.querySelector('.name');
    const apellido = document.querySelector('.apellido');
    const mail = document.querySelector('.mail');
    const contrasenia = document.querySelector('.contrasenia');
    const repContrasenia = document.querySelector('.rep-contrasenia');
    const apiUrl = 'https://ctd-todo-api.herokuapp.com/v1/users'

    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        validacionCampos = validarNoVacio(nombre.value) && validarNoVacio(apellido.value) && validarNoVacio(mail.value) && validarNoVacio(contrasenia.value) && validarNoVacio(repContrasenia.value);
        validacionContrasenia = contrasenia.value === repContrasenia.value;
        if (validacionCampos && validacionContrasenia) {

            fetchCreateUser(apiUrl, formatoCuenta(nombre.value, apellido.value, mail.value, contrasenia.value));

        }else {
            alert("no puedes dejar campos vacíos");
        };
        formulario.reset()
    });

    function validarNoVacio(campo) {
        let resultado = true;
        if (campo === "") {
            resultado = false;
        }
        return resultado;
    };

    function fetchCreateUser(url, payload) {
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }


        fetch(url, settings)
        .then( response => response.json)
        .then( data => {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error)
        });
    };

    function formatoCuenta(nombre, apellido, mail, contrasenia) {
        const cuentaNueva = {
            firstName: nombre.toLowerCase().trim(),
            lastName: apellido.toLowerCase().trim(),
            email: mail.toLowerCase().trim(),
            password: contrasenia.trim(),
        }
        return cuentaNueva
    };
});