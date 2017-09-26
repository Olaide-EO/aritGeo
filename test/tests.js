 const assert = require('chai').assert;
 const myApp = require('../source/aritgeo.js');

 

describe("aritGeo", function(){

	describe("handle valid input", function(){
		it("should return Arithmetic for [2,4,6,8]", function(){
			assert.equal(myApp.aritGeo([2,4,6,8]), "Arithmetic");

		});


		it("should return Arithmetic for [5,7,9,11]", function(){
			assert.equal(myApp.aritGeo([5,7,9,11]), "Arithmetic");

		});
        


		it("should return Geometric for [2,4,8,16]", function(){
			assert.equal(myApp.aritGeo([2,4,6,8]), "Arithmetic");

		});



		it("should return Geometric for [5,15,45,135]", function(){
			assert.equal(myApp.aritGeo([5,15,45,135]), "Geometric");

		});


		it("should return -1 for [8,17, 21,87]", function(){
			assert.equal(myApp.aritGeo([8,17,21,87]), -1);

		});


		it("should return 0 for []", function(){
			assert.equal(myApp.aritGeo([]), 0);

		});

	})



describe("handle invalid input", function(){

	it("should return -1 for [2,Andela, 13]", function(){
		assert.equal(myApp.aritGeo([2,"Andela",13]), -1);
	});


    
    it("should return -1 for [Andela, Bootcamp]", function(){
		assert.equal(myApp.aritGeo(["Andela", "Bootcamp"]), -1);
	});
     
})

    
    describe("handle input less than 3", function(){

	it("should return -1 for [2,2]", function(){
		assert.equal(myApp.aritGeo([2]), -1);
	});


    
    it("should return -1 for [6]", function(){
		assert.equal(myApp.aritGeo([6,8]), -1);
	});
     
})

    

       describe("handle negative input", function(){

	it("should return Geometric for [2,-4,8,-16,32]", function(){
		assert.equal(myApp.aritGeo([2,-4,8,-16,32]), "Geometric");
	});


    
     
})

       describe("handle undefined value", function(){

	it("should return -1 for [0,2,4,8]", function(){
		assert.equal(myApp.aritGeo([0,2,4,8]), -1);
	});


    
     
})


}) 
