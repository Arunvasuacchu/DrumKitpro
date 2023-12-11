function add(sum1, sum2){
  return sum1 + sum2
}
function subtraction(sum1, sum2){
  return sum1 - sum2
}
function multiplication(sum1, sum2){
  return sum1 * sum2
}
function caluclator(sum1, sum2, operator){
  return operator(sum1, sum2)
}

 let result = caluclator(2,4,add)
 console.log(result)
