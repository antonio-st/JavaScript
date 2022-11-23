let youName = 'sam Harris';

function abbrevName(name){
  return name.split(' ').map((n)=>n[0]).join('.').toUpperCase();
  }
console.log(abbrevName(youName))