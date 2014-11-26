Feature: play the game
	As a player
	I want to play
	In order to finish a game

Scenario: Switch player after one played
	Given The game has started
	When The first player play
	Then The hand switch to the adversary
