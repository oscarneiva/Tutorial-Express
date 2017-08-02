function myFunction(){
    console.log('Function was called');
}

var myString = 'String'; 

module.exports.myFunction = myFunction; /*Exporting function to another files, 
                                        so other files could use this function.*/

module.exports.myString = myString;