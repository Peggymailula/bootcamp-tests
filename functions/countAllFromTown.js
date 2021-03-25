function countAllFromTown(string)
{
  var split = string.split(",");
  console.log(split);
  var count = 0;
  
  for (var i=0; i<split.length; i++)
  {
    if (split[i].startsWith('CL'))
    {
      count++;
    }
  }
  return count;
}
