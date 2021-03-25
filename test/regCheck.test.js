describe('regCheck' , function(){
    it('scheck if a registration number is for GP, L, EC, MP registration plates.' , function(){
        assert.equal(regCheck('DV23NBGP','GP'),'DV23NBGP'.endsWith('GP'));

        
    });

})