var amt, opt, num, cal, res

amt = document.querySelector('#bill');
opt = document.querySelector('#serv');
num = document.querySelector('#numb');
cal = document.querySelector('#calc');
res = document.querySelector('.result');



// Probabilities 

tips = function() {
    var tip = amt.value  / num.value

    if (amt.value == 0 || num.value == 0) {
        alert("YOU SHOULD ENTER BOTH VALUES")
    }

    else if ((amt.value < 0 && num.value > 0) || (num.value < 0 && amt.value > 0)) {
        alert('YOU SHOULD ENTER ONLY POSITIVE VALUES')
    }

    else if (opt.value === 'thirty') {
      tippy = tip * 0.3
      total = tippy.toFixed(2).fontcolor("maroon").fontsize(5)

      res.innerHTML = `The tip amount is <br> <strong>$ ${total} </strong> each<br> `   }

    else if (opt.value === 'twenty') {
      tippy = tip * 0.2
      total = tippy.toFixed(2).fontcolor("maroon").fontsize(5)

      res.innerHTML = `The tip amount is <br> <strong>$ ${total} </strong> each<br> `    }

    else if (opt.value === 'fifteen') {
      tippy = tip * 0.15
      total = tippy.toFixed(2).fontcolor("maroon").fontsize(5)

      res.innerHTML = `The tip amount is <br> <strong>$ ${total} </strong> each<br> `    }

    else if (opt.value === 'ten') {
      tippy = tip * 0.1
      total = tippy.toFixed(2).fontcolor("maroon").fontsize(5)

      res.innerHTML = `The tip amount is <br> <strong>$ ${total} </strong> each<br> `    }

    else if (opt.value === 'five') {
      tippy = tip * 0.05
      total = tippy.toFixed(2).fontcolor("maroon").fontsize(5)

      res.innerHTML = `The tip amount is <br> <strong>$ ${total} </strong> each<br> `    }

    else {
      total = tip.toFixed(2).fontcolor("maroon").fontsize(5)
      res.innerHTML = `The bill amount is <br> <strong>$ ${total} </strong> each <br> YOU SHOULD TIP!`    }
    }



// Only input numbers

var invalidChars = [
    "-",
    "+",
    "e",
  ];
  
  amt.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });

  num.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
});



// Enter key

window.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      tips();
    }
  });

  amt.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
     tips()    
      }
  });

  num.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
     tips()    
      }
  });



// Maximum inputs

  num.oninput = function () {
    if (this.value.length > 5) {
        this.value = this.value.slice(0,4); 
    }
}

  amt.oninput = function () {
    if (this.value.length > 5) {
        this.value = this.value.slice(0,4); 
    }
}