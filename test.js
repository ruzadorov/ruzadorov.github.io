function flatten(arr){
  if (arr.length==0){
    return [];
  }
  
  let result = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length == 0){
      continue;
    }
    if (arr[i].length > 1){
      let add = [...result, ...arr[i]];
      result = add;
    }else{
      result.push(arr[i]);
    }
    
    
  }
  return result;
}