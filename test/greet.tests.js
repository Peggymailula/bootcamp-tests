describe('greet' , function(){
    it('takes in name and greets the name entered correctly' , function(){
        assert.equal(greet('Peggy'),'Hello, Peggy');
        assert.equal(greet('Amanda'),'Hello, Amanda');
        assert.equal(greet('Lily'),'Hello, Lily');

       
    });

});
