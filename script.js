const act1 = document.getElementById('act1')
const act2 = document.getElementById('act2')
const act2_form = document.getElementById('act2_form')
const act3 = document.getElementById('act3')
const act4 = document.getElementById('act4')
const act7 = document.getElementById('act7')
const act8 = document.getElementById('act8')
const act8_form = document.getElementById('act8_form')
const act9 = document.getElementById('act9')
const act10 = document.getElementById('act10')
const act10_form = document.getElementById('act10_form')

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
  const valor = document.createElement('p')
  valor.innerHTML = "La nota " + num1 + " está " + (num1 >= 5 ? "Aprobada" : "Suspendida")
  act2.appendChild(valor)
})

// Actividad 3

var dato1 = "Ronaldo" + 5 + 5
var dato2 = 5 + 5 + "Ronaldo"

const ejemplo1 = document.createElement('p')
ejemplo1.innerHTML = dato1
const ejemplo2 = document.createElement('p')
ejemplo2.innerHTML = dato2

act3.appendChild(ejemplo1)
act3.appendChild(ejemplo2)

// Actividad 4

const ejemplo3 = document.createElement('p')
ejemplo3.innerHTML = "Una string sale con el resultado = " + typeof ("Esto es una string")
act4.appendChild(ejemplo3)

const ejemplo4 = document.createElement('p')
ejemplo4.innerHTML = "Un número sale con el resultado = " + typeof (100)
act4.appendChild(ejemplo4)

const ejemplo5 = document.createElement('p')
ejemplo5.innerHTML = "Un boolean sale con el resultado = " + typeof (false)
act4.appendChild(ejemplo5)

// Actividad 5

let variable_global = "Hola desde la variable global";

function mostrarMensaje() {
  console.log(variable_global);
}

// Llamamos a la función para ver el valor de la variable global
mostrarMensaje()

// Sobrescribimos la variable global en un contexto local (sin usar 'var', 'let' o 'const')
function sobrescribirVariable() {
  variable_global = "La variable global ha sido sobrescrita"
}

sobrescribirVariable() // Cambiamos el valor de la variable global
mostrarMensaje()

// Declaración de una función global
function mostrarNumero() {
  console.log(42)
}

// Llamamos a la función
mostrarNumero()

// Sobrescribimos la función global con una nueva implementación
function mostrarNumero() {
  console.log("Esta función ha sido sobrescrita")
}

// Llamamos a la nueva versión de la función
mostrarNumero()

// Actividad 6

function cambiarImagen(imgElement, nuevaSrc) {
  imgElement.src = nuevaSrc
}

// Actividad 7

const result1 = document.createElement('p')
const result2 = document.createElement('p')

result1.innerHTML = "El primero es igual a = " + Number("9 9")
result2.innerHTML = "El segundo es igual a = " + Number("dos")

act7.appendChild(result1)
act7.appendChild(result2)

// Actividad 8

act8_form.addEventListener('submit', e => {
  e.preventDefault()

  const date = document.getElementById('date').value

  // Separo por el simbolo de la /
  const [day, month, year] = date.split('/')

  const dateMonth = document.createElement('p')
  const dateYear = document.createElement('p')
  dateMonth.innerHTML = month
  dateYear.innerHTML = year

  act8.appendChild(dateMonth)
  act8.appendChild(dateYear)
})

// Actividad 9

var milista = ['panadero', 456, [0,1,2]]
let valor = milista[2][2]

const arrayvalor = document.createElement('p')
arrayvalor.innerHTML = "Si puede recoger el valor así, el valor es = " + valor
act9.appendChild(arrayvalor)

const valorlista = document.createElement('p')
valorlista.innerHTML += "<br>Los valores del array son: <br>"

for (let i=0; i<milista.length; i++) {
  valorlista.innerHTML += milista[i] + "<br>"
}

act9.appendChild(valorlista)

// Actividad 10

act10_form.addEventListener('submit', e => {
  e.preventDefault()

  const lineas = document.getElementById('lado').value
  rombo(lineas)
})


function rombo(tamano) {
  for (let i = 1; i <= tamano; i++) {
      let espacios = '&nbsp;'.repeat(tamano - i)
      let asteriscos
      
      if (i === 1) {
          asteriscos = '*'
      } else {
          asteriscos = '*' + '&nbsp;'.repeat(2 * i - 3) + '*'
      }

      let linea = document.createElement('p')
      linea.innerHTML = espacios + asteriscos
      act10.appendChild(linea)
  }
  
  for (let i = tamano - 1; i >= 1; i--) {
      let espacios = '&nbsp;'.repeat(tamano - i)
      let asteriscos
      
      if (i === 1) {
          asteriscos = '*'
      } else {
          asteriscos = '*' + '&nbsp;'.repeat(2 * i - 3) + '*'
      }

      let linea = document.createElement('p')
      linea.innerHTML = espacios + asteriscos
      act10.appendChild(linea)
  }
}
