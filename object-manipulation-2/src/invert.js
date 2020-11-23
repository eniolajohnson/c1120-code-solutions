/* exported invert */
function invert(obj){
  var newObj = {};
 for (var name in obj){
   if (name in obj){
     newObj[obj[name]] = name;
   }
 }
  return newObj;
}
