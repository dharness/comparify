var Promise = require('promise');

module.exports = {
	test: function(establish, assert)
	{

		var promise = new Promise(function(resolve, reject)
		{
			//disable access to the process object's exit method
			var tmp = process.exit;
			process.exit = null;
			require = null;

			for (var i = 0; i < 100; i++)
			{
				if (!(establish(i) == assert(i)))
					reject('err');
			}

			process.exit = tmp;
			resolve('200 OK');
		});

		return promise;
	}
}