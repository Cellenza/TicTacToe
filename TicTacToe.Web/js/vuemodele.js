(function() {

	var PlayCase = function (position) {
		this.player = ko.observable(null);
		this.position = position;
	};

	window.TicTacToe = function () {

		var public_ = this;
		var player = ['x','o'];
		var tour = 0;

		var thereIsAWinner = function (position) {

			var firstLineCase = Math.floor(position/3) * 3;
			if(public_.playcases[firstLineCase].player() === public_.playcases[firstLineCase + 1].player()
				&& public_.playcases[firstLineCase].player() === public_.playcases[firstLineCase + 2].player())
				return true;

			var firstColumnCase = position - firstLineCase
			if(public_.playcases[firstColumnCase].player() === public_.playcases[firstColumnCase + 3].player()
				&& public_.playcases[firstColumnCase].player() === public_.playcases[firstColumnCase + 6].player())
				return true;

			if(Math.floor(position/3) === position%3
				&& public_.playcases[0].player() === public_.playcases[4].player()
				&& public_.playcases[0].player() === public_.playcases[8].player())
					return true;
			
			if(Math.floor(position/3) + (position%3) === 2
				&& public_.playcases[2].player() === public_.playcases[4].player()
				&& public_.playcases[2].player() === public_.playcases[6].player()) 
					return true;
			
			return false;
		};

		var thereIsNoMoreAvailableCase = function () {
		    for (var i = 0; i < 9; ++i) {
		        if(public_.playcases[i].player() === null) return false;
		    }
		    return true;
		}

		public_.playcases = [];

		for (var i = 0; i < 9; ++i) {
			public_.playcases.push(new PlayCase(i));
		}
		
		public_.currentPlayer = ko.observable('x');
		
		public_.winner = ko.observable(null);
		
		public_.play = function(playcase) {

			if(public_.gameEnded() || playcase.player() !== null) 
				return;

			playcase.player(public_.currentPlayer());

			if(thereIsAWinner(playcase.position)) {
				public_.winner(public_.currentPlayer());
				return;
			}

			tour = (tour+1)%2;
			public_.currentPlayer(player[tour]);
		};
		
		public_.gameEnded =ko.computed(function() {
			return public_.winner() !== null || thereIsNoMoreAvailableCase() ;
		});

        
	};

})();