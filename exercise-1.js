// Destructure the properties from the 'car'
// object below and then log all of them

const car = {
  manufacturer: 'Nissan',
  model: 'Skyline GT-R',
  country: 'Japan',
  coupe: true,
};

const {manufacturer, model, country, coupe} = car;

let couper;

if (coupe === true) {
  couper = 'Yes';
} else {
  couper = 'No';
}

console.log(`Manufaturer is: ${manufacturer}, Model: ${model}, origins: ${country}, can it coupe: ${couper}`);
