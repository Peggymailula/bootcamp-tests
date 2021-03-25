function mostProfitableDepartment(sales)
{
  var SalesMap = {};
  var highestDepartment = "";
  var salesProfit = 0;
  var HighestSales = 0;
  
  for ( var i =0; i<sales.length; i++)
  {
    var currentSales = sales[i];
    
    if (SalesMap[currentSales.department] == undefined){

    SalesMap[currentSales.department] = 0;
    }
    SalesMap[currentSales.department] += currentSales.sales   
  }
  
  //console.log(SalesMap);
  for (var departmentName in SalesMap){
    var SalesProfit = SalesMap[departmentName];
    
    if (SalesProfit > HighestSales)
    {
      HighestSales = SalesProfit;
      highestDepartment = departmentName;
    //console.log(departmentName);
    //console.log(SalesProfit );
  }
  }
   return highestDepartment;    
}
