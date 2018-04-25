//// Ex 1: Minimum:

function min(a,b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}

//// Ex 2: Recursion:

let isEven = (x) => {
    if (x==0) {
      return true;
    } else if (x==1){
      return false
    } else if (x<0) {
      return isEven((-1*x))
    } else {
      return isEven(x-2) 
    }
  }

  //// Ex 3: Bean Counting:

  const countBs = function (str) {
    return countChar(str, 'B');
  };
  
  const countChar = function (str, target) {
    let charCount = 0;
    
    for (let i = 0;i<str.length;i++){
        if (str[i] == target){
      charCount++;
        }
    }
    return charCount;
  };