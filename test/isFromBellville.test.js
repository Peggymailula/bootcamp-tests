describe('isFromBellville' , function(){
    it('returns true if a registration number is for Bellville otherwise returns false.' , function(){
        assert.equal(isFromBellville('CY12PF'),'CY12PF'.startsWith('CY'));

        
    });

})