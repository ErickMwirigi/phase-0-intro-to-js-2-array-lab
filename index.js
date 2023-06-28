// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    cats.push(name)
        return cats;
   }

function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats;
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
    return cats;
}

function appendCat(name){
    const new_cats =[...cats,name];
    return new_cats;
}

function prependCat(name){
    const new_cats =[name,...cats];
    return new_cats;
}

function removeLastCat(){
    return cats.slice(0,-1);
}

function removeFirstCat(){
    return cats.slice(1);
}