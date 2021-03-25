function findItemsOver20(objList) {
  var objOver20 = [];

  for (var i = 0; i < objList.length; i++) {
    var listObj20 = objList[i];
    var Quantity = listObj20.qty

    if (Quantity > 20) {
      objOver20.push(listObj20);
    }
  }
 // console.log(objOver20);
  return objOver20;
}
