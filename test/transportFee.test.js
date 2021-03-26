
describe('transportFee' , function(){
    it('should returns the right price for morning shift.' , function(){
        assert.equal(transportFee('morning'), 'R20');
        
        
    });

    it('should returns the right price for afternoon shift.' , function(){
        
        assert.equal(transportFee('afternoon'), 'R10');
      

        
    });

    it('should returns the right price for different shift.' , function(){
       
        assert.equal(transportFee('evening'), 'free');

        
    });

})
