let adventures = [

    { name: 'Laura', hp: 100, class: 'Wizard' },
    { name: 'Bob', hp: 115, class: 'Warrior' },
    { name: 'Lyria', hp: 150, class: 'Rogue' }

];

//array of the name 
let names = [];
for (let i = 0; i < adventures.length; i++) {
    names.push(adventures[i].name);
}

// this modifies original data
// console.time('mapfilter');
// let adventuresNames = adventures
//     .filter(adventurer => adventurer.hp <= 100)
//     .map(adventurer => adventurer.name);
// console.timeEnd('mapfilter');



// correct way so does not modify the original data 

let adventuresNames = adventures
.map(a => {
    return {
        name: a.name,
        hp: a.hp + 10,
        characterClass: a.characterClass
    }
})


// know about import and export, set technobabble for next thrusday 

// map involving arrays 
// filter mainpualting data, think about this manipiulating or extracting data 