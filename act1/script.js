const act1 = document.getElementById('act1')
const act2 = document.getElementById('act2')
const act2_form = document.getElementById('act_form')

// Actividad 1

// Una circunferencia no tiene área pero un circulo si
// A = π * r²

const act1_area = document.createElement('p')
act1_area.innerHTML = "Área = " + Math.PI * Math.pow(5, 2)
act1.appendChild(act1_area)

// Longitud
// L = π * d

const act1_longitud = document.createElement('p')
act1_longitud.innerHTML = "Longitud = " + Math.PI * (5 * 2)
act1.appendChild(act1_longitud)

// Actividad 2

act2_form.addEventListener('submit', e => {
    e.preventDefault()

    const num1 = document.getElementById('num1').value

})

