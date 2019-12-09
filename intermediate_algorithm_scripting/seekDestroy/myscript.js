function destroyer(arr) {

  let newArr = [...arguments[0]];
  let toDestroy = Array.prototype.slice.call(arguments).slice(1);

  for(let i=0; i < toDestroy.length; i++) {
    newArr = newArr.filter(function(element){
      if (element != toDestroy[i]) {
        return element;
      }
    });
  }

  return newArr;

}

//destroyer([1, 2, 3, 1, 2, 3], 2, 3, 4);


