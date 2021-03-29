describe('findItemsOver' , function(){
    it('should return products that have quantity higher than the threshold..' , function(){
        assert.deepEqual(findItemsOver([
            {name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}], 25)
       , [{name : 'pears', qty : 37},{name : 'bananas', qty : 27}]);

    });


    it('should return products that have quantity higher than the threshold.' , function(){
     
       assert.deepEqual(findItemsOver([
       {name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}], 5)
       , [{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27}]);

     
    });

    it('should return products that have quantity higher than the threshold.' , function(){
       

       assert.deepEqual(findItemsOver([
       {name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}], 2)
       , [{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}]);
    });

})