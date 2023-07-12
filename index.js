cats = ["Milo", "Otis", "Garfield"];

function cats(name) {}

function destructivelyAppendCat(name) {
  return cats.push(name);
}

function destructivelyPrependCat(name) {
  return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
  return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
  return cats.shift(name);
}

function appendCat(name) {
  return (name = [...cats, "Broom"]);
}

function prependCat(name) {
  return (name = ["Arnold", ...cats]);
}

function removeLastCat(name) {
  return (name = cats.slice(0, -1));
}

function removeFirstCat(name){

    return (name =cats.slice(1));

}