describe('findItemsOver20' , function(){
    it(' should return all the products that have a quantity higher than 20.', function(){
        assert.deepEqual(findItemsOver20( [{name : 'apples', qty : 30},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}]) , 
        [{name : 'apples', qty : 30},{name : 'pears', qty : 37},{name : 'bananas', qty : 27}])


    });     

    it(' should return all the products that have a quantity higher than 20.', function(){
       
        assert.deepEqual(findItemsOver20( [{name : 'apples', qty : 10},{name : 'pears', qty : 7},{name : 'bananas', qty : 19},{name : 'apples', qty : 23}]) , 
        [{name : 'apples', qty : 23}])

    });     

    it(' should return all the products that have a quantity higher than 20.', function(){
       
        assert.deepEqual(findItemsOver20( [{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}]) , 
        [{name : 'pears', qty : 37},{name : 'bananas', qty : 27}])
        


    });     
    

})