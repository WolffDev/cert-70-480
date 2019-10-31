const Vehicle = (function faa() {
  function FooBar(year, make, model) {
    this.year = year;
    this.make = make;
    this.model = model;
  }

  FooBar.prototype.getInfo = function getInfo() { return `${this.year} ${this.make} ${this.model}`; };

  FooBar.prototype.startEngine = () => 'Vroooom';
  return FooBar;
}());

const Car = (function car(parent) {
  function Car(year, make, model) {
    parent.call(this, year, make, model);

    this.wheelQuality = 4;
  }
  Car.prototype = new Vehicle();
  Car.prototype.constructor = Car;
  return Car;
}(Vehicle));

const ford = new Car(1995, 'Ford', 'Focus');
console.log(ford.getInfo());
