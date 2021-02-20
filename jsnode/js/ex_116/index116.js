function getHexaColor(color){
    let exacolor;


    switch(color) {
        case 'white':
            exacolor = '#FFFFFF';
          break;
        case 'black':
            exacolor = '#000000';
          break;
    
        case 'blue':
            exacolor= '#0b24fb';
          break;
        case 'green':
            exacolor= '#0e7e12';
          break;
        case 'yellow':
            exacolor= '#fffd38';
          break;
        case 'pink':
            exacolor= '#fec1cc';
          break;
        default:
          console.log('enter  white, black, blue, green, yellow, pink');      
      }
    
    return exacolor;




}

console.log(getHexaColor('white'));