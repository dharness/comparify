var process = require('child_process');
var Promise = require('promise');

module.exports = function()
{
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
	 *                     Private Members                     *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	var registry = [];

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
	 *                      Public Members                     *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	var compare = function(f1, f2, config)
	{
		var promise = new Promise(function(resolve, reject)
		{
			if (!f1 || !f2)
			{
				reject('Must enter 2 valid functions for comparison')
			}

			try
			{
				var worker = process.fork(__dirname + "/worker.js", [f1.toString(), f2.toString()]);

				worker.on('close', function(code)
				{
					if (code == 99)
					{
						resolve('inequal functions')
					}
					else if (code == 0)
					{
						resolve('equal function')
					}
				});

			}

			catch (err)
			{
				console.log(err);
			}
		});

		return promise;
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
	 *                          Expose                         *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	return {
		compare: compare
	}

}()