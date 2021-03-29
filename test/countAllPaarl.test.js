describe('countAllPaarl' , function(){
    it('It should return the number of registration for paarl registrations in the string' , function(){
        assert.equal(countAllPaarl('CJ4565, CJ7830, CJ123'), 3 );
        
    });

    it('It should return the number of registration for paarl registrations in the string' , function(){
        assert.equal(countAllPaarl('CA4565, CY7830, CJ123'), 1 );
       
        
    });

    it('It should return the number of registration for paarl registrations in the string' , function(){
        assert.equal(countAllPaarl('CJ4565, CJ7830, CA123'), 2 );

        
    });


})

