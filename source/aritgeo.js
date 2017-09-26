'use strict';

   module.exports = {  
    aritGeo : (array) => {

      if( array.length === 0){

        return 0;
      }

      if(array.length < 3){
     return -1;
      }

      for(let i = 0; i < array.length; i++ ){
        if(typeof(array[i]) === "string"){
          return -1;
        }
       }


       let arithChecker = true
       const difference = array[1] - array[0];

        for(let i = 2; i < array.length; i++){
             if (array[i] - array[i-1] !== difference){
                 arithChecker = false;
             }
            }


              if(arithChecker){
            return "Arithmetic";
                }
             
  
         let  geoChecker  =  true;
        
        const ratio = (array[1])/(array[0]);

        for(let index =2 ; index < array.length ; index++){
          

           if(array[index]/array[index - 1]  !==  ratio){
             geoChecker = false;
            
           }
         }
      
      
           if(geoChecker){

            return "Geometric";                                                                                                                         

             }else{
                  return -1;
                  }

             }

        }

 