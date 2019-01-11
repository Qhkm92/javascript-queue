// Experimenting how to create a queue in javascript 
//

function Queue(){
	this.data =[];
}

Queue.prototype.add = function(record){
	this.data.unshift(record)
}

Queue.prototype.remove = function(){
	this.data.pop();
}

Queue.prototype.first = function(){
	return this.data[0];
}

Queue.prototype.last = function(){
	return this.data[this.data.length - 1];
}

Queue.prototype.size = function(){
	return this.data.length;
}

//initialize

const q = new Queue();

q.add(1)
console.log(q)
q.add(2)
console.log(q)
q.add(3)
console.log(q)

console.log(q.first())
console.log(q.last())
console.log(q.size())

