var Stocks = require('./models/stocks');

function getStocks(res){
	Stocks.find(function(err, stocks) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(stocks); // return all stocks in JSON format
		});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all stocks
	app.get('/api/stocks', function(req, res) {

		// use mongoose to get all stocks in the database
		getStocks(res);
	});

	// create todo and send back all stocks after creation
	app.post('/api/stocks', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Stocks.create({
			symbol : req.body.symbol,
			Ask: req.body.symbol,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the stocks after you create another
			getStocks(res);
		});

	});

	// delete a todo
	app.delete('/api/stocks/:stock_id', function(req, res) {
		Stocks.remove({
			_id : req.params.stock_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getStocks(res);
		});
	});

	// application
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
