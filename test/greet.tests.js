describe('greet' , function(){
    it('takes in name and greets Peggy correctly' , function(){
        assert.equal(greet('Peggy'),'Hello, Peggy');

       
    });

    it('takes in name and greets Amanda correctly' , function(){
       
        assert.equal(greet('Amanda'),'Hello, Amanda');
       

       
    });

    it('takes in name and greets Lily correctly' , function(){
       
        assert.equal(greet('Lily'),'Hello, Lily');

       
    });

});
