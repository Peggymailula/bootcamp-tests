describe('mostProfitableDepartment' , function(){
    it('compares different departments profit and returns the department with the highest profit' , function(){
        assert.deepEqual(mostProfitableDepartment([
            {department: 'hardware', sales: 4500},
            {department: 'outdoor', sales: 1500},
            {department: 'carpentry', sales: 5500},
            {department: 'hardware', sales: 7500},
            {department: 'outdoor', sales: 2505},
            {department: 'carpentry', sales: 1540},
            {department: 'hardware', sales: 1500},
            {department: 'outdoor', sales: 8507},
            {department: 'carpentry', sales: 8009},
            {department: 'hardware', sales: 12000},
            {department: 'outdoor', sales: 18007},
            {department: 'carpentry', sales: 6109,},
            {department: 'hardware', sales: 7005},
            {department: 'outdoor', sales: 12006},
            {department: 'carpentry', sales: 16109}
        ]), 'outdoor');

        
    });

})