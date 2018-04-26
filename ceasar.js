function ceasar(str,t) { // LBH QVQ VG!
    let untwisted = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let twisted = [];
    let twist = t;
    
    for (let i = 0;(i+twist)<untwisted.length;i++){
      twisted.push(untwisted[i+twist]);
    }  
    
    for (let j = 0;j<twist;j++){
      twisted.push(untwisted[j]);
    }
    
    let lookUp = {};
    
    for (let k = 0; k < twisted.length;k++){
      lookUp[twisted[k]] = untwisted[k];
    }
    
    let output = "";
    
    for (let l = 0; l<str.length;l++){
      if (lookUp.hasOwnProperty(str[l])){
        output += lookUp[str[l]];
      } else {
        output += str[l]; 
      }   
    }
    
    return output;
    
  }