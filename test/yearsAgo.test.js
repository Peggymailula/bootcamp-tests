describe('yearsAgo' , function(){
    it('should calculate the difference between 2005 and current year.' , function(){
        assert.equal(yearsAgo(2005), 16 );
       

        
    });

    it('should calculate the difference between 1997and current year.' , function(){
       
        assert.equal(yearsAgo(1997), 24 );
        

        
    });

    it('should calculate the difference between 2013 and current year.' , function(){
        
        assert.equal(yearsAgo(2013), 8);

        
    });

})