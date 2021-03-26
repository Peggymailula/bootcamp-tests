describe('findItemsOver' , function(){
    it('takes a list of objects each with a name and qty attribute. And also a second parameter which is a threshold for the quantity of items available. The function should return products that have quantity higher than the threshold.' , function(){
        assert.deepEqual(findItemsOver([
            {name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}], 25)
       , [{name : 'pears', qty : 37},{name : 'bananas', qty : 27}]);

    });


    it('takes a list of objects each with a name and qty attribute. And also a second parameter which is a threshold for the quantity of items available. The function should return products that have quantity higher than the threshold.' , function(){
     
       assert.deepEqual(findItemsOver([
       {name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}], 5)
       , [{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27}]);

     
    });

    it('takes a list of objects each with a name and qty attribute. And also a second parameter which is a threshold for the quantity of items available. The function should return products that have quantity higher than the threshold.' , function(){
       

       assert.deepEqual(findItemsOver([
       {name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}], 2)
       , [{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}]);
    });

})