function mySum(){
  var i = 0;
  var sum = 0;

  while(arguments[i]){
    sum += arguments[i];
    i++;
  }

  return sum;
}

