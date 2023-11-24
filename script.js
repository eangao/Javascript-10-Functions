'use strict';

////////////////////////////////////////////////////////////////////////////
// Default Parameters
////////////////////////////////////////////////////////////////////////////

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers // this only works for parameters that are fined in the list  before this one.
// ) {
//   //   And this works because of the reasons that we learned in the
//   // last section, which is that whenever this is a falsy value,
//   // which undefined is,
//   // then the result of the
//   // OR operator here will be this second operant.
//   // So this value here in this case one,

//   //ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   //ES6
//   // flightNum, numPassengers = 1, price = 199

//   //   and now here we can use the enhanced object literal syntax
//   // that we learned about in the previous section.
//   // So we cannot create an object with a flight num property
//   // flightNum: flightNum,
//   const booking = {
//     // flightNum: flightNum,
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// // Now, another thing that's important to note here is that we
// // cannot skip arguments here when we called a function.
// // So for example,
// // let's say we wanted to leave the number of passengers as the
// // default value, but then specify the price.
// // So we cannot do this.
// // So skipping the number of passengers now,
// // and then only specifying a new price.
// // So if we do this,
// // then of course the number of passengers becomes a 1000
// // because the second argument here will always be mapped to
// // the second parameter.
// createBooking('LH123', 1000);

// // So if we wanted to leave this one year at a default,
// // there is a nice trick.
// // So the number of passengers we can simply set to undefined,
// // alright,
// // and this works again because setting the parameter to
// // undefined,
// // it's the same thing as not even setting it, remember?
// // So when we don't set a parameter
// // so when we don't pass an argument into that parameter,
// // then it will take the value of undefined.
// // And so specifying undefined here is exactly the same.
// // And so this is how we basically skip a default parameter
// // that we want to leave at its default.
// createBooking('LH123', undefined, 1000);

///////////////////////////////////////////////////////////
// How Passing Arguments Works: Value vs. Reference
///////////////////////////////////////////////////////////

// // In this lecture, I want to quickly talk about
// // how exactly it works to pass arguments into functions.
// // And this goes back to the video that we had
// // about primitives versus objects,
// // which, remember, we also call
// // primitive types and reference types.
// // So this is kind of a review of that lecture,
// // but applied to functions, because it's super important
// // that we really understand how primitives and objects
// // work in the context of functions.

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';

//   //   So here, as we are manipulating the passenger object,
//   // it is exactly the same as manipulating the Jonas object.
//   // Once again, because they both are
//   // the same object in the memory heap.
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // So when we pass a reference type to a function,
// // what is copied is really just a reference
// // to the object in the memory heap.
// // So that would be exactly like doing this.
// // So passenger
// // equals

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //Is the same as doing
// const flightNum = flight;
// const passenger = jonas;

// // Alright, so in summary, passing a primitive type
// // to a function is really just the same
// // as creating a copy like this, outside of the function.
// // So the value is simply copied.
// // On the other hand, when we pass an object to a function,
// // it is really just like copying an object like this.
// // And so whatever we change in a copy
// // will also happen in the original.
// // Now, of course, we need to be careful
// // with this behavior and always keep it in mind.
// // That's because the fact that objects
// // behave this way when passed to functions
// // can have unforeseeable consequences in large code bases.
// // And that's especially true when you're working
// // with multiple developers.

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// // So, yeah, I think this is a nice example
// // of seeing how the interaction of different functions
// // with the same object can create some issues here.
// // And of course, this is just a super simple example,
// // but I'm sure you get the point, right?
// newPassport(jonas);
// checkIn(flight, jonas);

// // Now, just to finish, in programming,
// // there are two terms that are used all the time
// // when dealing with functions,
// // which is passing by value, and passing by reference,
// // and many experienced programmers that are new to JavaScript
// // have some confusion between these terms
// // and how it works in JavaScript.
// // And so I wanna quickly address that here as well.

// // So JavaScript does not have passing by reference,
// // only passing by value,
// // even though it looks like it's passing by reference.
// // So there are languages like C++,
// // where you can pass a reference to any value,
// // instead of the value itself.
// // This works even with primitives,
// // so you could pass a reference to the value of five,
// // and then the original value,
// // outside of the function, would be changed.
// // And this is called pass by reference.

// // But once again, JavaScript does not have pass by reference.
// // So if you already know some programming,
// // but are new to JavaScript, be sure to understand this.
// // And I know it's confusing, because as we just learned,
// // for objects, we do in fact pass in a reference.
// // So the memory address of the object.
// // However, that reference itself is still a value.
// // It's simply a value that contains a memory address.
// // So basically we pass a reference to the function,
// // but we do not pass by reference,
// // and this is an important distinction.

// // And once again,
// // I'm only telling you this because there seems to be
// // a lot of confusion going on about this topic
// // among some JavaScript beginners, and especially
// // when they come from other languages, such as C++.

///////////////////////////////////////////////////////////////////////
// First-Class and Higher-Order Functions
///////////////////////////////////////////////////////////////////////

//See Lecture PDF

// Let's now talk about
// a fundamental property of the JavaScript language.
// Which is the fact that it has first class functions.
// This enables us to write higher order functions.
// But what's that all about?
// Well, let's see.
// So, JavaScript is a language that has first class functions
// which in technical terms
// means that functions are so-called first citizens.
// In practice, that means that functions
// are simply treated as values.
// And we already touched on that idea
// a couple of times before,
// but this is such an important feature of the language
// that it's worth spending some more time talking about this.
// Now, why does JavaScript work this way?
// Well, it's simply because functions
// are really just another type of objects in JavaScript.
// And since objects are values,
// functions are values too.
// And since functions are values,
// there is a bunch of interesting things
// that we can do with them,
// like storing them in variables or object properties.
// And that, of course,
// we already did a couple of times before

//See Lecture PDF
