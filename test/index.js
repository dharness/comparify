var expect = require('chai').expect,
	comparify = require('../index'),
	compare = comparify.compare;



//THIS SIMULATES ACTUAL USE ---- NOT PART OF THE MODULE


describe('simple functionality of comparify', function()
{
	it('should retrun true for matching function', function()
	{
		return compare("function establish(x) { return x}",
			'function assert(y) {return y}').then(function(data)
		{
			expect(data).to.equal('equal function')
		}, function(err)
		{
			expect(err).to.be(null)
		});
	})

	it('should retrun false for matching function', function()
	{
		return compare("function establish(x) { return 'Lemmon'}",
			'function assert(y) {return y}').then(function(data)
		{
			// expect(data).to.equal('equal function')
			console.log(data);
		}, function(err)
		{
			// expect(err).to.be(null)
			console.log(err);
		});
	})

})