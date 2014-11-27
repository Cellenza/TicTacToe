(function() {

	var PlayCase = function (position) {
		this.player = ko.observable(null);
		this.position = position;
	};

	window.TicTacToe = function () {
	  var public_ = this;
	  var player = ['x', 'o'];
	  var tour = 0;

	  public_.playcases = [];

	  for (var i = 0; i < 9; ++i) {
	    public_.playcases.push(new PlayCase(i));
	  }

	  public_.currentPlayer = ko.observable('x');

	  public_.play = function () {
	    tour = (tour + 1) % 2;
	    public_.currentPlayer(player[tour]);
	  };

	};

})();