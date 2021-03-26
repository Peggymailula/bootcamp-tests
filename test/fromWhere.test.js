describe('fromWhere' , function(){
    it('takes a car registration number as a parameter and returns the town the car is from. This car is should be true for Paarl' ,function(){
        assert.equal(fromWhere('CJ123'), 'Paarl');
       
        
    });

    it('takes a car registration number as a parameter and returns the town the car is from. Should return true for Bellville' , function(){
       
        assert.equal(fromWhere('CY123'), 'Bellville');
      
        
    });

    it('takes a car registration number as a parameter and returns the town the car is from. Should return true for some other place' , function(){
      
        assert.equal(fromWhere('CL123'), 'Some other place!');

        
    });

})