function totalPhoneBill(string)
{
  var total = 0;
  var call = 0;
  var sms = 0;
  var split = string.split(",");
  
  for ( var i =0 ; i< split.length ; i++)
  {
    if (split[i].includes('call'))
    {
      call++;
    }
    else if (split[i].includes('sms'))
    {
      sms++;
    }
  }
  
  var calls = call * 2.75;
  var texts = sms * 0.65;
  
return 'R' + (calls + texts).toFixed(2);
  
  
}
