describe('isWeekday' , function(){
    it('should check whether day entered is a weekday' , function(){
        assert.equal(isWeekday('Tuesday'),  'Tuesday'.startsWith('Tue') );

        
    });

})