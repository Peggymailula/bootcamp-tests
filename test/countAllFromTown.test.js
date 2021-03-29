describe('countAllFromTown' , function(){
    it('It should return number registration numbers in the string that is for that town.' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3 );
        
    });

    it('It should return number registration numbers in the string that is for that town.' , function(){
      
        assert.equal(countAllFromTown('CY 124,CY 567,CY 345, CY 456,CL 341','CY'), 4 );
      
        
    });

    it('It should return number registration numbers in the string that is for that town.' , function(){
     
        assert.equal(countAllFromTown('CJ 124,CY 567,CL 345, CJ 456,CL 341','CJ'), 2 );

        
    });

})