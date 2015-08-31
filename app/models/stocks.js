var fs = require('fs');

var mongoose = require('mongoose');
var generator = require('mongoose-gen');

// load json
var data = fs.readFileSync(__dirname + '/stock.json', {encoding: 'utf8'});
var stockJSON = JSON.parse(data); 
var stockSchema = new mongoose.Schema(generator.convert(stockJSON));

module.exports = mongoose.model('Stocks', stockSchema); 
