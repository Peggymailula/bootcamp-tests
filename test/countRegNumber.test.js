
describe('countRegNumber' , function(){
    it(' return 3 for the number of registration numbers in the string.' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
        
        
    });

    it(' return for 5 the number of registration numbers in the string.' , function(){
        
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,CY 12367, CA 296496'),5);
        
        
    });

    it(' return 2 for the number of registration numbers in the string.' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519'),2);
        
    });

})