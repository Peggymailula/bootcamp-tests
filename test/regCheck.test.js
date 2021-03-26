describe('regCheck' , function(){
    it('check if the registration number is from Gauteng' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true)
      
        
    });

    it('check if the registration number is from Limpopo.' , function(){
        
        assert.equal(regCheck('DV 23 NB L','L'),true)
    
        
    });


it('check if the registration number is from Eastern Cape.' , function(){
    
    assert.equal(regCheck('DV 23 NB GP','EC'),false)

    
});

})