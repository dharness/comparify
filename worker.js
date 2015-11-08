module.exports = function()
{

	var Mocha = require('Mocha');

	var f1_s = process.argv[2];
	var f2_s = process.argv[3];

	var mocha = new Mocha();
	mocha.addFile(__dirname + '/levels/level1.js');



	eval(f1_s + f2_s);
	this.f1 = establish;
	this.f2 = assert;

	var equivalence = true; //assume them to be the same
	var engine = require(__dirname + '/testEngine.js');
	engine.test(establish, assert).then(function()
	{
		process.exit(0);
	}, function()
	{
		process.exit(99);
	})


	//equivalence is ready here

	// process.stdout.write = null;
	//Finally with everything set up we can execute mocha
	// mocha.run();
}();