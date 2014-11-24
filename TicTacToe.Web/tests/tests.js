describe("Tic Tac Toe Game", function() {
  
  var position = {
      topLeft: 0,
      top: 1,
      topRight: 2,
      middleLeft: 3,
      middle: 4,
      middleRight: 5,
      bottomLeft: 6,
      bottom: 7,
      bottomRight: 8
  }

  it('should start with x player', function() {

    var _ = new TicTacToe (); 
  	expect(_.currentPlayer()).toBe('x');
  });

	
  it("should change the current player each tour", function() {

  	var _ = new TicTacToe ();
  	_.play(_.playcases[position.topLeft]);
  	expect(_.currentPlayer()).toBe('o');
  });


  it('should forbid to play where another player already did', function () {
  	var _ = new TicTacToe ();
  	_.play(_.playcases[position.top]);
  	expect(_.playcases[position.top].player()).toBe('x');
  	_.play(_.playcases[position.top]);
  	expect(_.playcases[position.top].player()).toBe('x');
  });


  it('should not change the current player if he tries to play where another player already did',
  	function () {
	  	var _ = new TicTacToe();
	  	_.play(_.playcases[position.top]);
	  	expect(_.currentPlayer()).toBe('o');
	  	_.play(_.playcases[position.top]);
	  	expect(_.currentPlayer()).toBe('o');
  	});


  it('should end when a player makes a line of 3 and the winner should be that player',
  	function () {
  		var _ = new TicTacToe();
  		_.play(_.playcases[position.topLeft]); 
  		_.play(_.playcases[position.middleLeft]); 
  		_.play(_.playcases[position.top]); 
  		_.play(_.playcases[position.middle]); 
  		_.play(_.playcases[position.topRight]); 
	  	//x made a line : top left, top, top right

	  	expect(_.gameEnded()).toBe(true);
	  	expect(_.winner()).toBe('x');
  	});


  it('should end when a player makes a column of 3 and the winner should be that player',
  	function () {
  		var _ = new TicTacToe();
	  	_.play(_.playcases[position.topLeft]); //player x 
	  	_.play(_.playcases[position.top]); //player o 
	  	_.play(_.playcases[position.middleLeft]); //player x 
	  	_.play(_.playcases[position.middle]); //player o 
	  	_.play(_.playcases[position.bottomLeft]); //player x 
	  	//x made a column : top left, left, bottom lefts

	  	expect(_.gameEnded()).toBe(true);
	  	expect(_.winner()).toBe('x');
  	});


  it('should end when a player makes a diagonal of 3 and the winner should be that player',
  	function () {
  		var _ = new TicTacToe();
	  	_.play(_.playcases[position.topLeft]); //player x 
	  	_.play(_.playcases[position.top]); //player o 
	  	_.play(_.playcases[position.middle]); //player x 
	  	_.play(_.playcases[position.middleRight]); //player o 
	  	_.play(_.playcases[position.bottomRight]); //player x 
	  	//x made a diagonal : top left, middle, bottom right

	  	expect(_.gameEnded()).toBe(true);
	  	expect(_.winner()).toBe('x');
  	});

  it('should end when all the cases are  full',
    function () {
        var _ = new TicTacToe();
        _.play(_.playcases[position.topLeft]); //player x 
        _.play(_.playcases[position.top]); //player o 
        _.play(_.playcases[position.topRight]); //player x 
        _.play(_.playcases[position.middle]); //player o 
        _.play(_.playcases[position.bottom]); //player x 
        _.play(_.playcases[position.bottomLeft]); //player o 
        _.play(_.playcases[position.middleLeft]); //player x 
        _.play(_.playcases[position.middleRight]); //player o 
        _.play(_.playcases[position.bottomRight]); //player x 

        expect(_.gameEnded()).toBe(true);
    });

  it('should end with no winner when all the cases are  full and there is no line',
    function () {
        var _ = new TicTacToe();
        _.play(_.playcases[position.topLeft]); //player x 
        _.play(_.playcases[position.top]); //player o 
        _.play(_.playcases[position.topRight]); //player x 
        _.play(_.playcases[position.middle]); //player o 
        _.play(_.playcases[position.bottom]); //player x 
        _.play(_.playcases[position.bottomLeft]); //player o 
        _.play(_.playcases[position.middleLeft]); //player x 
        _.play(_.playcases[position.middleRight]); //player o 
        _.play(_.playcases[position.bottomRight]); //player x 

        expect(_.winner()).toBe(null);
    });

  it('should clean all the playcases when reseting the game',
      function () {

          var _ = new TicTacToe();
          _.play(_.playcases[position.topLeft]); //player x 
          _.play(_.playcases[position.top]); //player o 
          _.play(_.playcases[position.topRight]); //player x 
          _.play(_.playcases[position.middle]); //player o 
          _.play(_.playcases[position.bottom]); //player x 
          _.play(_.playcases[position.bottomLeft]); //player o 
          _.play(_.playcases[position.middleLeft]); //player x 
          _.play(_.playcases[position.middleRight]); //player o 
          _.play(_.playcases[position.bottomRight]); //player x 

          _.resetGame();

          for (var i = 0; i < _.playcases.length; ++i) {
              var playcase = _.playcases[i];
              expect(playcase.player()).toBe(null);
          }
      });

  it('should reset the winner when reseting the game',
      function () {
          var _ = new TicTacToe();
          _.play(_.playcases[position.topLeft]); //player x 
          _.play(_.playcases[position.top]); //player o 
          _.play(_.playcases[position.middle]); //player x 
          _.play(_.playcases[position.middleRight]); //player o 
          _.play(_.playcases[position.bottomRight]); //player x 
          //x made a diagonal : top left, middle, bottom right

          _.resetGame();

          expect(_.winner()).toBe(null);
      });
});

