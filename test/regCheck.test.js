describe('regCheck' , function(){
    it('check if a registration number is for GP, L, EC, MP registration plates.' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),'DV 23 NB GP'.endsWith('GP'));
        assert.equal(regCheck('DV 23 NB L','L'),'DV 23 NB L'.endsWith('L'))
        assert.equal(regCheck('DV 23 NB MP','MP'),'DV 23 NB MP'.endsWith('MP'))
        assert.equal(regCheck('DV 23 NB EC','EC'),'DV 23 NB LEC'.endsWith('EC'))

        
    });

})