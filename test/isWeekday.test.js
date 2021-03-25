describe('isWeekday' , function(){
    it('should check whether day entered is a weekday' , function(){
        assert.equal(isWeekday('Monday'),true) );
        assert.equal(isWeekday('Tuesday'), true) );
        assert.equal(isWeekday('Wednesday'), true );
        assert.equal(isWeekday('Saturday'), false );
        assert.equal(isWeekday('Sunday'), false );

        
    });

})