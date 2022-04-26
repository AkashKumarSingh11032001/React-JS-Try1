class Media {
  constructor(title,rating=[],isCheckedOut = false){
    this._title = title;
    this._rating = rating;
    this._isCheckedOut = isCheckedOut;
  }
  get title(){
    return this._title;
  }
  get rating(){
    return this._rating;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  set isCheckedOut(val){
    if(typeof val === 'boolean'){
      this._isCheckedOut = val;
    }
  }
  toggleCheckOutStatus(){
    this.isCheckedOut ? this.isCheckedOut = false : this.isCheckedOut = true;
  }
  getAverageRating(){
    const avgSum = this.rating.reduce((sum,x) => sum += x);
    return avgSum/this.rating.length;
  }
  addRating(rate){
    if(typeof rate === 'number'){
      this.rating.push(rate);
    }
  }
}

class Book extends Media {
  constructor(title,author,page){
    super(title);
    this._author = author;
    this._page = page;
  }
  get author(){
    return this._author;
  }
  get page(){
    return this._page;
  }
}

class Movie extends Media {
  constructor(director,title,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}



// **** MOvies Class ****
// let obj = new Media('hello',[4,3,2,5],false)
// console.log(obj.isCheckedOut)
// console.log(obj.isCheckedOut = true)
// obj.toggleCheckOutStatus()
// console.log(obj.isCheckedOut)

// let a = obj.getAverageRating()
// console.log(a)

// obj.addRating(7);
// console.log(obj.rating)

// ***** Book Class *****
// const obj = new Book('A Short History of Nearly Everything','Bill Bryson',554);

// obj.toggleCheckOutStatus()
// console.log(obj.isCheckedOut)

// obj.addRating(4)
// obj.addRating(5)
// obj.addRating(5)
// let res = obj.getAverageRating()
// console.log(res)

// **** Movies *****
// const obj = new Movie('Jan de Bont','Speed',116);
// obj.toggleCheckOutStatus()
// console.log(obj.isCheckedOut)

// obj.addRating(1)
// obj.addRating(1)
// obj.addRating(5)
// let res = obj.getAverageRating()
// console.log(res)



// STATICS KEYWORD [SCHOOL CLASS]
class School {
  constructor(name,level,numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents ;
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(num){
    if(typeof num === 'number'){
      this.numberOfStudents = num;
    }
    else{
      return 'Invalid input: numberOfStudents must be set to a Number.';
    }
  }
  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }
  static pickSubstituteTeacher(substituteTeachers){
    return Math.floor(Math.random()*substituteTeachers.length);
  }
}

class PrimarySchool extends School {
  constructor(name,numberOfStudents,pickupPolicy){
    super(name,'primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name,numberOfStudents,sportsTeams){
    super(name,'high',numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    return this._sportsTeams;
  }
}

const obj = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

console.log(obj.quickFacts())

const teacher = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']; 
let a  = School.pickSubstituteTeacher(teacher)
console.log(teacher[a])
