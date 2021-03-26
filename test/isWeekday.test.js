describe('isWeekday' , function(){
    it('should check whether Tuesday  is a weekday' , function(){
       
        assert.equal(isWeekday('Tuesday'), true);
       
        
    });




    it('should check whether Monday is a weekday' , function(){
        assert.equal(isWeekday('Monday'),true);
        

        
    });



    it('should check Saturday is a weekday' , function(){
      
        assert.equal(isWeekday('Saturday'), false );
       
        
    });

})