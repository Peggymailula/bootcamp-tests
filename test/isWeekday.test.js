describe('isWeekday' , function(){
    it('should check whether day entered is a weekday' , function(){
        assert.equal(isWeekday('Monday'),  'Monday'.startsWith('Mon') );
        assert.equal(isWeekday('Tuesday'),  'Tuesday'.startsWith('Tue') );
        assert.equal(isWeekday('Wednesday'),  'Wednesday'.startsWith('Wed') );
        assert.equal(isWeekday('Thursday'),  'Thursday'.startsWith('Thur') );
        assert.equal(isWeekday('Friday'),  'Friday'.startsWith('Fri') );

        
    });

})