function countRegNumber(plate)
{
   
   var e=plate.split(',');
  return e.length;
}

var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
