describe('isFromBellville' , function(){
    it('returns true if a registration number is for Bellville otherwise returns false.' , function(){
        assert.equal(isFromBellville('CY12PF'),true);
       
        
    });

    it('returns true if a registration number is for Bellville otherwise returns false.' , function(){
       
        assert.equal(isFromBellville('CJY12345'),false);
       
        
    });

    it('returns true if a registration number is for Bellville otherwise returns false.' , function(){
    
        assert.equal(isFromBellville('CYA099'),true);

        
    });


})