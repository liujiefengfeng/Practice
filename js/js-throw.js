// example one

function UserException(message){
  this.message = message;
  this.name = 'UserException'
}

function getSeason(season){
  const SEASON = ['SPRING', 'SUMMER', 'AUTUMN', 'WINTER'];
  if (SEASON[season]) {
    return SEASON[season];
  } else {
    throw new UserException('invalid season');
  }
}

try {
  const firstseason = getSeason(2);
  console.log('firstseason', firstseason);

  const secondseason =  getSeason(5);
  console.log('secondseason', secondseason);
} catch(e) {
  console.log(e.message, e.name);
  console.log(e.stack);
  throw 'this is the exception'
}

