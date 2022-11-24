const txtPeso = document.getElementById('txt-peso');
const txtNombre = document.getElementById('txt-nombre');
const txtEstatura = document.getElementById('txt-estatura');
const btnCalcular = document.getElementById('btn-calcular');
const tblPersonas = document.querySelector('#tbl-info tbody');
let persona = {};

const calcularImc = () => {
    let peso = txtPeso.value;
    let estatura = txtEstatura.value;
    let imc = peso / Math.pow(estatura, 2);

    return imc.toFixed(2);
};

const clasificarImc = (imc) => {
    let clasificacion = '';

    if (imc >= 40) {
        clasificacion = 'obesidad-3';
    } else {
        if (imc >= 35) {
            clasificacion = 'obesidad-2';
        } else {
            if (imc >= 30) {
                clasificacion = 'obesidad-1';
            } else {
                if (imc >= 25) {
                    clasificacion = 'sobrepeso';
                } else {
                    if (imc >= 18.5) {
                        clasificacion = 'normal';
                    } else {
                        clasificacion = 'bajo';
                    }
                }
            }
        }
    }
    return clasificacion;
};

const imprimirTabla = () => {
    let clasificacion = clasificarImc(persona.imc)

    //tblPersonas.innerHTML = '';

    let fila = tblPersonas.insertRow();
    fila.insertCell().innerText = persona.nombre;
    fila.insertCell().innerText = persona.peso;
    fila.insertCell().innerText = persona.estatura;
    fila.insertCell().innerText = persona.imc;

    let celdaClasif = fila.insertCell();
    celdaClasif.innerText = clasificacion;
    celdaClasif.classList.add(clasificacion);

};

const validar = () => {
    let error = false;

    if (txtNombre.value == '') {
        error = true;
        txtNombre.classList.add('input-error');
    } else {
        txtNombre.classList.remove('input-error');
    }

    if (txtEstatura.value == '') {
        error = true;
        txtEstatura.classList.add('input-error');
    } else {
        txtEstatura.classList.remove('input-error');
    }

    if (txtPeso.value == '') {
        error = true;
        txtPeso.classList.add('input-error');
    } else {
        txtPeso.classList.remove('input-error');
    }

    if (error == false) {
        persona.nombre = txtNombre.value;
        persona.peso = txtPeso.value;
        persona.estatura = txtEstatura.value;
        persona.imc = calcularImc();
        imprimirTabla();
    } else {
        console.log('Por favor rellene los campos resaltados');
    }

};

btnCalcular.addEventListener('click', validar);