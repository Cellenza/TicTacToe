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

  it('should start with x player', function () {

    var _ = new TicTacToe();
    expect(_.currentPlayer()).toBe('x');
  });



  it("should change the current player each tour", function () {

    var _ = new TicTacToe();
    _.play(_.playcases[position.topLeft]);
    expect(_.currentPlayer()).toBe('o');
  });


  it('should forbid to play where another player already did', function () {
    var _ = new TicTacToe();
    _.play(_.playcases[position.top]);
    expect(_.playcases[position.top].player()).toBe('x');
    _.play(_.playcases[position.top]);
    expect(_.playcases[position.top].player()).toBe('x');
  });

});

