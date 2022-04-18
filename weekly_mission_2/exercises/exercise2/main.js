import { explorers } from './explorer_list.js'

console.log("Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")
explorers.forEach(explorer => {
    console.log(explorer.name);
});

console.log("\nImprime el stack de cada explorer, usa FOR EACH")
explorers.forEach(explorer =>{
    console.log(`${explorer.name} Stack: ${explorer.stack}`)
})

console.log("\nCrea una nueva lista con las listas de stacks de cada explorer, usa MAP")
const stackList = explorers.map((explorer) => explorer.stack);
console.log(stackList);

console.log("\nObtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")
const stackListJs = explorers.filter((explorer)=> explorer.stack.includes('js'));
console.log(stackListJs);

console.log("\nBusca el primer explorer que sea de la CDMX, usa FIND");
const explorer = explorers.find((explorer) => explorer.city === "CDMX");
console.log(explorer);

console.log("\nObtén la suma de todos los exercises_completed, usa REDUCE");
const result_of_reduce = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0);
console.log(result_of_reduce);

console.log("\nObtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
const result_of_some = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished === true);
console.log(result_of_some);

console.log("\nObtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")
const result_of_every = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true);
console.log(result_of_every);