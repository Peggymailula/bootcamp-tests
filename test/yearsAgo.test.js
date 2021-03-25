describe('yearsAgo' , function(){
    it('should calculate the difference between entered year and current year.' , function(){
        assert.equal(yearsAgo(2005), 16 );
        assert.equal(yearsAgo(1997), 24 );
        assert.equal(yearsAgo(2013), 8);

        
    });

})