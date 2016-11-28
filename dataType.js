module.exports	=	{ 
dataType=	function  {
	var i
  if( typeof i=== null || typeof i=== undefined) {
    return "no value";
  }
  if  (typeof i ===true) {
    return true;
  }
  if ( typeof i === false){
    return false;
  }
  if( typeof i === Number ) {
    if(i < 100) {
      return 'less than 100';
    }
    if (i >100){
      return 'more than 100';
    }
    if (i ===100){
      return 'equal to 100';
    }
  }
  if(typeof i=== Array){
    if (array===[]){
    return 'undefined';
    }
    else{
      return array[3];
    }
  }
  function f(arg){
    if(typeof(arg) ===true) {
      return 'called callback';
    }
  }
  if(typeof i===String){
    return len();
  }}