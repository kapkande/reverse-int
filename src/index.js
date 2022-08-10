module.exports = function reverse (n) {
    let arr = String(n).split('')
   let add = []
   for (let i = arr.length -1; i > -1; i--){
      add.push(arr[i])
   }
   if (arr[0] == '-'){
    add.pop()
       }
let resolt = Number(add.join(''))
        return resolt
     
}
