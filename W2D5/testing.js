describe("test",function(){
   
    it("Given, This house is not nice!, returns This house is nice!  ", function(){
        
        assert.equal("This house is  nice!","This house is not nice!".filter('not'));
    });

    it("[6,4,0, 3,-2,1] sort it and returns [-2,0,1,3,4,6]", function(){
        
        assert.equal('-2,0,1,3,4,6',([6,4,0,3,-2,1].bubbleSort().toString()))
    });
    
    it("given separate Siifa and Inheritance,  and returns  Siifa is now teaching Inheritance  ", function(){

        Person.prototype.initialize("Siifa", 25);
        
        assert.equal("Siifa is now teaching Inheritance",Teacher.prototype.teach("Inheritance"));
    });

    
});