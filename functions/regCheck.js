function regCheck(regNo,regEnd)
{
  return regNo.endsWith(regEnd);
}

var isGP = regCheck('DV 23 NB GP', 'GP');
//console.log(isGP);

var isMP = regCheck('DV 23 LP GP', 'MP');
//console.log(isMP);
var isL = regCheck('DV 23 LP L', 'L');

var isEC = regCheck('abx EC', 'EC');
