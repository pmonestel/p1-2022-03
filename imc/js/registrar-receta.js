const inputNombre = document.getElementById('txt-nombre');
const inputTipo = document.getElementById('slt-tipo');
const btnRegistrar = document.getElementById('btn-registrar');

const registrarReceta = () => {
    let receta = {
        "nombre": inputNombre.value,
        "tipo": inputTipo.value
    };
    //registrarDatos = async(endpoint, data, redireccion)

    registrarDatos('registrar-receta', receta);
};

const validar = () => {
    let error = false;
    let camposRequeridos = document.querySelectorAll('.requerido');

    camposRequeridos.forEach(campo => {
        if (campo.value == '') {
            campo.classList.add('input-error');
            error = true;
        } else {
            campo.classList.remove('input-error');
        }
    });

    if (error) {
        Swal.fire({
            'title': 'Registro incorrecto',
            'text': 'Por favor complete los campos resaltados',
            'icon': 'warning'
        });
    } else {
        registrarReceta();
    }
};

btnRegistrar.addEventListener('click', validar);