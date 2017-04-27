const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

// unit tests for fizzbuzzer... 

describe('fizzBuzzer', function() {

	// normal case...
	it('should return fizzbuzz if divisable by 15', function(){
		const normalCases = [
			{num: 15, expected: 'fizz-buzz'},
			{num: 30, expected: 'fizz-buzz'},
			{num: 45, expected: 'fizz-buzz'},
		];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			answer.should.equal(input.expected);
		});
	});

	it('should return buzz if divisable by 5', function(){
	 	const normalCases = [
	 		{num: 140, expected: "buzz"},
	 		{num: 1340, expected: "buzz"},
	 		{num: 130, expected: "buzz"},
	 		{num: 25, expected: "buzz"}
	 	];
	 	normalCases.forEach(function(input){
	 		const answer = fizzBuzzer(input.num);
	 		answer.should.equal(input.expected);
	 	});
	 });

	it('should return fizz divisable by 3', function(){
	 	const normalCases = [
	 		{num: 9, expected: 'fizz'},
	 		{num: 18, expected: 'fizz'},
	 		{num: 231, expected: 'fizz'}
	 	];
	 	normalCases.forEach(function(input) {
	 		const answer = fizzBuzzer(input.num);
	 		answer.should.equal(input.expected);
	 	});
	 });

	it('should return num in all other cases', function(){
	 	const normalCases = [
	 		{num: 22, expected: 22},
	 		{num: 11.4, expected: 11.4},
	 		{num: 317, expected: 317}
	 	];
	 	normalCases.forEach(function(input){
	 		const answer = fizzBuzzer(input.num);
	 		answer.should.equal(input.expected);
	 	});
	 });

	it('should throw errors with all non-number inputs', function(){
	 	// range of bad inputs
	 	const badInputs = [
	 		false,
	 		"nice",
	 		[4, 5, 6],
	 		"help me"
	 	];
	 	badInputs.forEach(function(input) {
	 		
	 			(function() {
	 				fizzBuzzer(input)
	 			}).should.throw(Error);
	 		
	 	});
	});
});
























