function countAllPaarl(string)
{
  var split = string.split(",");
  var count = 0;
  
  for (var i=0; i<split.length; i++)
  {
    if (split[i].includes('CJ'))
    {
      count++;
    }
  }
  return count;
}
