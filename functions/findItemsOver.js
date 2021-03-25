function findItemsOver(name, Quantity)
{
      var filtered = [];
        for (var i = 0; i < name.length; i++) {
      var objAttr = name[i];
      var thePriceObj = objAttr.qty

       if (thePriceObj > Quantity) {
      filtered.push(objAttr)
    }
  }
  return filtered;
  }
