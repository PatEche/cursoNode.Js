// const re = /.hola./

// console.log(re.test(" hola "));

const re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
function testInfo(phoneInput) {
  var OK = re.exec(phoneInput.value);
  if (!OK) {
    alert(phoneInput.value + ' No es un numero telefonico valido!');
  } else {
    alert('Gracias, tu número de teléfono es ' + OK[0]);}
}



//Defino dentro de bloque y solo es accesible desde adentro de el.
// {
//   let clima = "nublado";
//   console.log(clima);
// }

// console.log(clima);

// let edad = 14;
// let sabeConducir = true;

// if(edad >=18 && sabeConducir === true ){
//   console.log("Puede conducir");
// }else
//   console.log("No puedes conducir");
