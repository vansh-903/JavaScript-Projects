
function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.decrement = function(){
    this.score--;
}

createUser.prototype.printMe = function(){
    console.log(this.username, this.score);
}

const user1 = new createUser('user1', 10);

user1.increment();

user1.printMe();