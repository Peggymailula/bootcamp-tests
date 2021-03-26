describe('totalPhoneBill' , function(){
    it('takes in a string calls made and sms sent. Calculate the total bill for the data provided.' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R' + 7.45);
        

        
    });

    it('takes in a string calls made and sms sent. Calculate the total bill for the data provided.' , function(){
        
        assert.equal(totalPhoneBill('call, call, call, call, sms'), 'R' + 11.65);
        

        
    });

    it('takes in a string calls made and sms sent. Calculate the total bill for the data provided.' , function(){
       
        assert.equal(totalPhoneBill(' sms'), 'R' + 0.65);

        
    });

})
