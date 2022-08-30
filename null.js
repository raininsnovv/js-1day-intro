/*Значение null записывается литералом null. Оно является самостоятельным, а не свойством глобального объекта (как undefined). 
 В API, null часто присутствует в местах где ожидается объект, но подходящего объекта нет.*/
const typeofNullNotObject = null
let myJsLevel = null
console.log(`At now my level in JS is ${myJsLevel}, and skills equal ${typeofNullNotObject}.`)