// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

const copy = [...pointsList]

console.log(copy);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copyToy = {...toy};

console.log(copyToy);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.
const pointsList$ = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const pointsLists = [...pointsList$, ...pointsLis2];
console.log(pointsLists);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.
const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const fusiontoy = { ...toy2, ...toyUpdate}
console.log(fusiontoy);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const [ color1, , ...restcolors] = colors

const newColors = [ color1, ...restcolors]
console.log(newColors);