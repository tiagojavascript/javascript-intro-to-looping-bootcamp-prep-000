function forLoop(array){
  for (var i = 0; i < 25; i++){
    array.push(`I am ${i} strange loop`)
  };
  return array;
};

function whileLoop(n){
  while(n > 0){
    console.log(--n);
  };
  return "done"
};

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  };
  do{
    array[0].delte;;
  } while (array.length > 0 && maybeTrue());
};