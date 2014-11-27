(function() {

	var PlayCase = function (position) {
		this.player = ko.observable(null);
		this.position = position;
	};

	window.TicTacToe = function () {
	  var public_ = this;

	  public_.currentPlayer = ko.observable('x');

	};

})();