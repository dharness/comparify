var should = require('chai').should(),
	comparify = require('../index'),
	compare = comparify.compare;



describe('simple functionality of comparify', function()
{
	it('should print something', function()
	{
		var res = compare();
		res.should.equal(true);
	})
})