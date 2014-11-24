describe("Tic Tac Toe Game", function() {


  it('should start with x player', function() {

    var _ = new TicTacToe (); 
  	expect(_.currentPlayer()).toBe('x');
  });

	
  it("should change the current player each tour", function() {

  	var _ = new TicTacToe ();
  	_.play(_.playcases[0]);
  	expect(_.currentPlayer()).toBe('o');
  });


  it('should forbid to play where another player already did', function () {
  	var _ = new TicTacToe ();
  	_.play(_.playcases[0]);
  	expect(_.playcases[0].player()).toBe('x');
  	_.play(_.playcases[0]);
  	expect(_.playcases[0].player()).toBe('x');
  });


  it('should not change the current player if he tries to play where another player already did',
  	function () {
	  	var _ = new TicTacToe();
	  	_.play(_.playcases[0]);
	  	expect(_.currentPlayer()).toBe('o');
	  	_.play(_.playcases[0]);
	  	expect(_.currentPlayer()).toBe('o');
  	});


  it('should end when a player makes a line of 3 and the winner should be that player',
  	function () {
  		var _ = new TicTacToe();
	  	_.play(_.playcases[0]); //player x top left
	  	_.play(_.playcases[3]); //player o left
	  	_.play(_.playcases[1]); //player x top
	  	_.play(_.playcases[4]); //player o middle
	  	_.play(_.playcases[2]); //player x top right
	  	//x made a line : top left, top, top right

	  	expect(_.gameEnded()).toBe(true);
	  	expect(_.winner()).toBe('x');
  	});


  it('should end when a player makes a column of 3 and the winner should be that player',
  	function () {
  		var _ = new TicTacToe();
	  	_.play(_.playcases[0]); //player x top left
	  	_.play(_.playcases[1]); //player o top
	  	_.play(_.playcases[3]); //player x left
	  	_.play(_.playcases[4]); //player o middle
	  	_.play(_.playcases[6]); //player x bottom left
	  	//x made a column : top left, left, bottom lefts

	  	expect(_.gameEnded()).toBe(true);
	  	expect(_.winner()).toBe('x');
  	});


  it('should end when a player makes a diagonal of 3 and the winner should be that player',
  	function () {
  		var _ = new TicTacToe();
	  	_.play(_.playcases[0]); //player x top left
	  	_.play(_.playcases[1]); //player o top
	  	_.play(_.playcases[4]); //player x middle
	  	_.play(_.playcases[5]); //player o right
	  	_.play(_.playcases[8]); //player x bottom right
	  	//x made a diagonal : top left, middle, bottom right

	  	expect(_.gameEnded()).toBe(true);
	  	expect(_.winner()).toBe('x');
  	});

  it('should end when all the cases are  full',
    function () {
        var _ = new TicTacToe();
        _.play(_.playcases[0]); //player x top left
        _.play(_.playcases[1]); //player o top
        _.play(_.playcases[2]); //player x top right
        _.play(_.playcases[4]); //player o middle
        _.play(_.playcases[7]); //player x bottom
        _.play(_.playcases[6]); //player o bottom left
        _.play(_.playcases[3]); //player x left
        _.play(_.playcases[5]); //player o right
        _.play(_.playcases[8]); //player x right
        //x made a diagonal : top left, middle, bottom right

        expect(_.gameEnded()).toBe(true);
    });

  it('should end with no winner when all the cases are  full and there is no line',
    function () {
        var _ = new TicTacToe();
        _.play(_.playcases[0]); //player x top left
        _.play(_.playcases[1]); //player o top
        _.play(_.playcases[2]); //player x top right
        _.play(_.playcases[4]); //player o middle
        _.play(_.playcases[7]); //player x bottom
        _.play(_.playcases[6]); //player o bottom left
        _.play(_.playcases[3]); //player x left
        _.play(_.playcases[5]); //player o right
        _.play(_.playcases[8]); //player x right
        //x made a diagonal : top left, middle, bottom right

        expect(_.winner()).toBe(null);
    });
});

