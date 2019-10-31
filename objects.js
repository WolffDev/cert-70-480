// Object literal
const car1 = {
  year: 2000,
  make: 'Ford',
  model: 'Fusion',
  
  getInfo() {
    return `Vehicle: ${this.year} ${this.make} ${this.model}`;
  }
}

function Vehicle(year, make, model) {
  const year = year;
}