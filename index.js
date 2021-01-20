var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name)
{
  return kittens.push(name);
}
function destructivelyPrependKitten(name)
{
  kittens.slice(name);
  return kittens;
}
function destructivelyRemoveLastKitten()
{
  return kittens.pop();
}
function destructivelyRemoveFirstKitten()
{
  return kittens.shift();
}