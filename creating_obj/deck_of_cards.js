Deck = function(){
	this.card_val=['Ace','King','Queen','Jack',10,9,8,7,6,5,4,3,2]
	this.face=['spades', 'clubs', 'hearts', 'diamonds']
	this.cards=[]

	for(var x=0; x<this.card_val.length; x++){
		for(var y=0; y<this.face.length; y++){
			this.cards.push(`${this.card_val[x]}-${this.face[y]}`)
		}
	}

}

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

Deck.prototype.shuffleDeck = function(){
	shuffle(this.cards)
	return this
}

Deck.prototype.reset = function(){
	newDeck = new Deck()
}

Deck.prototype.dealRandom = function(){
	return random_card = this.cards[Math.floor((Math.random()*(52-0))+0)]
}

Deck.prototype.deal = function(){
	return this.cards.pop()
}

var newDeck = new Deck()

Player = function(name){
	this.name = name
	this.hand = []
}

Player.prototype.dealHand = function(){
	var playerDeck = new Deck()
	for(var i=1; i<6; i++){
		//console.log(`playerDeck.cards`)
		this.hand.push(playerDeck.dealRandom())
	}
}

Player.prototype.discard = function(){
	this.hand.pop()
}

var newPlayer = new Player('Holly')


