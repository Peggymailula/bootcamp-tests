describe('countAllFromTown' , function(){
    it('takes a string parameter with registration numbers separated with commas and the registration number start string. It should return number registration numbers in the string that is for that town.' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3 );

        
    });

})