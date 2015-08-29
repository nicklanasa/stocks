var mongoose = require('mongoose');

module.exports = mongoose.model('Stocks', {
	ticker : {type : String, default: ''}
});
