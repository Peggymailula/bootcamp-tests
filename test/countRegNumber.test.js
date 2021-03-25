
describe('countRegNumber' , function(){
    it(' return the number of registration numbers in the string.' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,CY 12367, CA 296496'),5);
        assert.equal(countRegNumber('CA 182736,CY 523519'),2);
        
    });

})