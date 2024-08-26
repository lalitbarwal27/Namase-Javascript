function closureUsingVar() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

closureUsingVar();

/*This will print 6 5 times as we are using var and all the i have same
reference to the i whihc is 6 when setTimeout callback is called*/

function closureUsingLet() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

closureUsingLet();

/* by using let we are giving a new reference to i everytime as let is a block scope variable and 
it is stored in special place thta is script */
 
function closureUsingVarCounting() {
  for (let i = 1; i <= 5; i++) {
  function close(i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
    close(i);
  }
}

closureUsingVarCounting();
