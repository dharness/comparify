var should = require('chai').should()

describe('simple functionality of comparify', function()
{
	for (var i = 0; i < 100; i++)
	{
		it('should result in the same value when given ' + i, function()
		{
			var sum = f1(i).should.eql(f2(i));
			console.log('sum');
			console.log(sum);
		})
	}
})