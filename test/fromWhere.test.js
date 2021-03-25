describe('fromWhere' , function(){
    it('takes a car registration number as a parameter and returns the town the car is from. If the reg number starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place' , function(){
        assert.equal(fromWhere('CJ123'), 'Paarl');

        
    });

})