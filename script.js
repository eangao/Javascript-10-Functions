'use strict';

////////////////////////////////////////////////////////////////////////////
// Default Parameters
////////////////////////////////////////////////////////////////////////////

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // this only works for parameters that are fined in the list  before this one.
) {
  //   And this works because of the reasons that we learned in the
  // last section, which is that whenever this is a falsy value,
  // which undefined is,
  // then the result of the
  // OR operator here will be this second operant.
  // So this value here in this case one,

  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  //ES6
  // flightNum, numPassengers = 1, price = 199

  //   and now here we can use the enhanced object literal syntax
  // that we learned about in the previous section.
  // So we cannot create an object with a flight num property
  // flightNum: flightNum,
  const booking = {
    // flightNum: flightNum,
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// Now, another thing that's important to note here is that we
// cannot skip arguments here when we called a function.
// So for example,
// let's say we wanted to leave the number of passengers as the
// default value, but then specify the price.
// So we cannot do this.
// So skipping the number of passengers now,
// and then only specifying a new price.
// So if we do this,
// then of course the number of passengers becomes a 1000
// because the second argument here will always be mapped to
// the second parameter.
createBooking('LH123', 1000);

// So if we wanted to leave this one year at a default,
// there is a nice trick.
// So the number of passengers we can simply set to undefined,
// alright,
// and this works again because setting the parameter to
// undefined,
// it's the same thing as not even setting it, remember?
// So when we don't set a parameter
// so when we don't pass an argument into that parameter,
// then it will take the value of undefined.
// And so specifying undefined here is exactly the same.
// And so this is how we basically skip a default parameter
// that we want to leave at its default.
createBooking('LH123', undefined, 1000);
