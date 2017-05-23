vehicleConstructor= function (name, no_of_wheels, no_of_passengers, noise, no_of_pickups=0,speed=0){
	var _this = this
	var distance_travelled = 0

	updateDistanceTravelled=function(){
		distance_travelled+=speed
	}

	this.name = name
	this.no_of_wheels = no_of_wheels
	this.no_of_passengers = no_of_passengers
	this.speed = speed

	this.make_noise = function(noise){
		console.out(noise)
	}

	this.pick_up_passengers=function(no_of_pickups){
	this.no_of_passengers += no_of_pickups
	}

	this.move = function(){
		updateDistanceTravelled()
		make_noise()
	}

	this.checkMiles()=function(){
		console.log(distance_travelled)
	}
	
}

var bicycle = new vehicleConstructor('bike', 2, 0, 'ring, ring!')
var sedan = new vehicleConstructor('sedan', 4, 3, 'honk, hong!')
var bus = new vehicleConstructor('bus', 4, 3, 'honk, hong!',4)