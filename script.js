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

// See Lecture PDF

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

// See Lecture PDF

/////////////////////////////////////////////////////////////////////
// Functions Accepting Callback Functions
/////////////////////////////////////////////////////////////////////

// //generic function
// const oneWord = function (str) {
//   //   and then we're going to select all these spaces.
//   // And remember for that,
//   // we need to use this regular expression
//   // with the G flag and then replace them
//   // with simply an empty string.
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //  higher-order functions
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);

//   //   And so this is where we will now call the function.
//   // Now, inside of the transformer function,
//   // this upper ward is now called F N right?
//   // So that's the second parameter here.
//   // And so F N and then with the past in string.
//   console.log(`Transformed string: ${fn(str)}`);

//   //   that functions even have methods remember,
//   // and besides methods,
//   // functions can even have properties.
//   // And one of them is the name property.
//   // So again we take F N,
//   // which is the function that
//   // this higher order transformer gets as an input.
//   // And then on that we can read the name property.
//   // And so now let's see the result of this operation.
//   // And so let's take a look at our interesting output.
//   // So of course the original string looks familiar,
//   // but then the transformed string indeed,
//   // was transformed just as we hoped it would.
//   // So the first word is the uppercase.
//   // And so that is of course the work of this function here.
//   // Finally, we can also see that
//   // it was transformed by upper first word.
//   // And so that's FN.Name.
//   // So as the property says,
//   // it is really just the name of the function.
//   console.log(`Transformed by: ${fn.name}`);
// };

// // how we are only passing in the function value itself.
// // So really just the value,
// // we are not calling this function here.
// // Okay, We are only passing it in and it will be to
// // transformer function calling this function.

// transformer('JavaScript is the best!', upperFirstWord); //upperFirstWord -> and into that function we are passing the callback function
// // And that's because we do not call them ourselves.
// // But instead we call JavaScript to basically tell them later.

// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('✋');
// };

// //JS uses callback all the time
// document.body.addEventListener('click', high5);

// // So it's just a callback that JavaScript,
// // will call as soon as we click on the body.
// // So you'll see down there now they appear.
// // And so only then they call back is really called.
// // And there are many other examples
// // And there are many other examples
// // in the JavaScript language.
// // And this concept of callback functions is used
// // all the time in built in JavaScript functions.

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// // And so let's now actually take a minute or two
// // to understand why that is.
// // Why our callback functions so much used in JavaScript
// // and why are they so helpful?
// // Well, the first big advantage of this
// // is that it makes it easy to split up or code
// // into more reusable and interconnected parts.

// // But there is a second and way more important advantage,
// // which is the fact that callback functions
// // allow us to create abstraction.

// // So what we did here in our code example was to create a
// // level of abstraction and abstraction
// // is something really important in programming.
// // So basically what abstract and means,
// // is that we hide the detail of some code
// // implementation because we don't really care
// // about all that detail.
// // And this allows us to think
// // about problems at a higher more abstract level.
// // And so that's why it's called an obstruction.

// // So coming back to our example here,
// // this transform a function does not care at all,
// // how the string is transformed.
// // It doesn't care about this level of detail.
// // Okay, all that wants to do is to transform a string,
// // but it doesn't care how it should do it.

// // So what I mean is that we could have taken,
// // this coat here and written it directly into transformer,
// // or even this coat here,
// // right.
// // That would have worked just the same,

// // but instead we abstracted this
// // coat away into other functions.
// // So again, we created a new level of obstruction
// // and by doing this or main transformer function,
// // here is really only concerned
// // with transforming the input string itself.
// // But no matter how that transforming itself actually works.

// // So it's basically delegating the string transformation
// // to the other lower level of functions,
// // which are these two.
// // Okay, and I hope this makes sense for you,
// // but we will also come back to this idea of abstraction
// // later when we talk about object oriented programming.

// // But it's good for you to think
// // and to talk about this stuff as soon as possible,
// // so that you can start to get an idea for this really,
// // important concept of abstraction.
// // And now with this idea of obstruction
// // and higher levels and lower levels of obstruction,
// // here is called a higher order function.
// // Right, and again that's basically because this function
// // here operates at a higher level of obstruction,
// // leaving the low level details to this low level functions.

// // Now they are not really called
// // hello order or low level functions,
// // but that's just how I like to call
// // them in this circumstance.

// // All right,
// // so understanding this
// // is absolutely crucial for your process.
// // And I actually consider this one of the most
// // important lectures here of the course
// // because callback functions are really,
// // a vital part of the JavaScript language.
// // And that's one of the main takeaways from this video.
// // They allow us to create this kind of logic here.
// // And so, I think it's probably a good idea,
// // that who really reviewed us really well
// // and maybe even write your own example,
// // of something that you see in the real world
// // using the same concept,

// // I think that's a really good idea that you should try out.
// // Then here in the built in functions like
// // add event listener and for each,
// // these callback functions are so important
// // and so useful because we use them,
// // to tell these functions what exactly they should do.
// // For example, the add event listener function
// // on its own would have no idea
// // of what to do whenever the click event happens here.

// // And so that's why we pass in the callback function here,
// // to tell the add event listener function exactly what to do.
// // And as you already know,
// // this is the higher order function here
// // with the high level of obstruction.
// // And this here is the function with,
// // the more lower level of obstruction.

// // please take a minute to really review this lecture
// // and build an example of your own maybe.
// // And then I see you in the next video,
// // where we will basically do the opposite of this one.
// // So having functions return other functions.

/////////////////////////////////////////////////////////////////////////////////////
// Functions Returning Functions
/////////////////////////////////////////////////////////////////////////////////////

// // Let's do the opposite of the last lecture
// // and create a function that returns a new function.
// // So I'm gonna write a very simple greet function here,

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // So this value here now is actually now a function -> greeterHey
// // unction.
// // Okay. And essentially it is this function.
// // So what this means is that we can now call
// // this greeter function just as if it was any other function
// // that we defined ourselves.

// // greeterHey is equal the code below
// //  function (name) {
// //   console.log(`${greeting} ${name}`);
// // };
// const greeterHey = greet('Hey');

// greeterHey('Jonas');
// greeterHey('Steven');

// // And in case you're wondering why that actually works,
// // it is because of something called a closure.
// // Now closures are a very complex and difficult
// // to understand mechanism that's part of JavaScript.
// // And so there are two separate videos at the end
// // of the section about closures.
// // So closures is one of the
// // most misunderstood topics in JavaScript.
// // So don't worry about that Now,

// // And of course we could also do it all in one go.
// greet('hello')('jonas');

// // So we can again, call greet. let's say hello now.
// // And so again this year is now a function.
// // Okay so if this is a function,
// // we can immediately call it, right? And so we call like this,
// // and then we passed into name which is the argument
// // of this function here, right? And so even though
// // this looks a bit weird, it is gonna to work.
// // And so we get hello Jonas now.All right.

// // And now this example might look a bit weird
// // and unnecessary for you Like what's the point
// // of having functions returning other functions?
// // Well, this will actually become extremely
// // useful in some situations.

// // And especially if we're using a really important
// // programming paradigm called functional programming.
// // And I think I've mentioned it sometimes throughout
// // the course and we're actually gonna
// // look at functional programming by the end of the course.

// // Maybe not by the time I first published the course,
// // but certainly some point later.
// // Anyway make sure to understand this here
// // and especially this line of code.

// // And if you understand this, then I'm sure
// // you understood everything what happened here.
// // Now, just as a small challenge to finish here,

// //Challenge
// const greatArr = greeting => name => console.log(`${greeting} ${name}`);

// greatArr('Hi')('Jonas');

// // try to rewrite this function here
// // using only arrow functions.
// // And believe me that's gonna look a little bit confusing,
// // but I'm sure you can do it.
// // So just take some time and try to rewrite
// // that greet function using arrow functions.
// // And I see you here in a minute.

// // so let's
// // see how it's done
// // so greet
// // Just gonna call it R,
// // so this one takes again,
// // greeting as an argument and it returns a new function.
// // So this means that it only has one line of code,
// // which returns something.
// // So all we need is this arrow.
// // And then we don't even need the curly braces
// // and we don't need to return a statement.
// // So what are we gonna return from here?
// // A new function.

// // So again, an arrow function and so another arrow here,
// // and then simply this
// // let's give it a safe and a try
// // So greet R
// // and let's use hi, this time and yeah,
// // we get hi Jonas,
// // okay?

// // So this is an even shorter way
// // of writing the same function but in my opinion,
// // it's actually a lot more confusing.
// // And that's why I wrote it using
// // this more traditional way here.
// // But in the end,
// // it's also simply one arrow function
// // returning another arrow function.
// // And so that's the essence of this video,
// // which I hope was clear to you.

/////////////////////////////////////////////////////////
// The call and apply Methods
/////////////////////////////////////////////////////////

// In this lecture,
// we're gonna go back to the this keyword
// and learn how we can set the this keyword manually
// and also why we would want to do that.

const lufthansa = {
  airline: 'Lutthansa',
  iataCode: 'LH',
  bookings: [],

  //   We also want to keep an array of bookings.
  // So also inside of the object,
  // and then the book method.
  // And remember from the previous section,
  // I will now start using the way of writing methods,
  // using the enhanced object literal syntax.
  // And so that's simply by defining the method like this
  // without having to write a function.
  // So remember, before this,
  // we used to do this, right?
  // And if you still prefer this syntax,
  // you can still do this one.
  // But I do actually prefer the new syntax.
  // And so I'll just start using this one now.

  // book: function(){} //Old syntax
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Elmar Angao');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

// But now let's say that after some years,
// the Lufthansa Group created a new airline.
// So let's create eurowings here.

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// Now, taking this exact same method here
// and simply copying it and pasting it here
// is a bad practice, right?
// So of course, we are not gonna do that.
// So instead, we will just take the method
// and store it in an external function.
// And then we can reuse that function
// for all of the different airlines.
// So what I mean is to create a new function called book
// and we will simply set it to lufthansa.book, all right?
// So again, this is possible
// because JavaScript has first class functions.
// And so we can simply take this function value here.
// So that's this function
// and then store it into a new variable,
// which is then gonna be also the book function, okay?

////////////////////////
// const book = lufthansa.book;

const book = lufthansa.book; //(flightNum: any)

// Okay, so let's try to use this book function
// to do a new booking now.
// But what do you think is gonna happen?
// So 23, and then let's say Sarah Williams
// and let's give it a save
// and now we get cannot read property airline of undefined.
// So do you know why this happened?
// Well, it's because this function here,
// the book function is now just a regular function call
// and so as we learned in one of the previous sections,
// in a regular function call,
// the this keyword points to undefined,
// at least in strict mode.
// All right?

//Does NOT work
// book(23, 'Sarah Williams');

// So once more, this book function is no longer this method.
// Okay?
// It's just not.
// It is now this separate function here.
// It's a copy of this one
// but it's not a method anymore,
// it's now a function.
// And so here it's a regular function call.
// And so therefore, the this keyword inside of it
// will now point to undefined.
// And that's why I kept telling you earlier
// that the this keyword depends on how the function
// is actually called.
// Okay, so make sure to understand these dynamics here.
// But now how do we actually fix this problem?
// So in other words, how do we tell JavaScript
// that we want to create a booking
// on the new Eurowings airline?
// Or even how do we tell it that we want
// to book on Lufthansa here?
// Well, basically, we need to tell JavaScript explicitly
// what the this keyword here should be like.
// So if we want to book a Lufthansa flight,
// the this keyword should point to Lufthansa
// but if we want to book a Eurowings flight,
// then the this keyword should point to Eurowings.
// So how do we do that?

// How do we tell JavaScript explicitly
// or manually what this this keyword should look like?
// Well, there are three function methods to do that
// and they are call, apply and bind.

// So instead, we use book.call, all right?
// And remember that a function is really just an object
// and objects have methods
// and therefore, functions can have methods too
// and the call method is one of them.
// And in the call method,
// the first argument is exactly
// what we want the this keyword to point to.
// So let's say we want a Eurowings flight
// and then as usual,
// the rest of the arguments.
// So 23 and Sarah Williams.
// All right?

//Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

// So let's recap what happened here.
// So this time, we did actually
// not call the book function ourselves.
// Instead, we called the call method
// and it's then this call method,
// which will call the book function
// with the this keyword set to eurowings.
// So whatever we pass has the first argument
// of the call method.
// And so this allows us to manually
// and explicitly set the this keyword
// of any function that we want to call.
// Then all the arguments after the first one
// are simply the arguments of the original function.
// And so in the case of the book function,
// of course, that's the flight number
// and the passenger name.
// ====================================================

book.call(lufthansa, 239, 'Maray Cooper');
console.log(lufthansa);

// And indeed, the string that we get here
// is completely correct
// and in here, so in the Lufthansa bookings array,
// we now have, of course, three bookings.
// Okay?

// And so that, of course, happened because this time,
// we set the this keyword inside
// of the function call to lufthansa.
// And so now this here is again back to pointing to Lufthansa,
// while before, right here,
// it was being pointed to Eurowings, all right?
// So even though the code of this function
// is inside of the lufthansa object,
// we made it so that the this keyword in here
// pointed to eurowings.
// So to this object, this new one right here, okay?
// So we have a way now
// of manually manipulating the this keyword
// using the call method.
// And of course, we could now keep going
// and create more airlines into the Lufthansa Group,
// like the Swiss Air Lines.

// Air Lines.
// Now, of course, these property names,
// they all need to have the exact same format
// as this original object here
// because this method is trying to read just these properties.
// So it's always iataCode
// and bookings, as you see here, and airline.
// And so of course,
// we need to use exactly these property names here as well
// but just like this,

//=========================================================

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 538, 'Mary Cooper');
console.log(swiss);

// ===============================
//Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// This apply method is not that used anymore
// in modern JavaScript because now,
// we actually have a better way of doing the exact same thing.
// And do you know what I'm talking about?
// So let me show it to you.
// Book.call, so instead of using apply,
// we can still use call,
// again with swiss

book.call(swiss, ...flightData);

// And so right now, with modern JavaScript,
// I prefer to just always use the call method
// and then spread out the arguments from an array like this.
// So again, this here is exactly the same as this.
// So in summary, we now have yet another tool
// in our toolbox here
// and this one is one that allows us
// to explicitly define the this keyword
// in any function that we want.
// But there is actually yet another method
// which allows us to do the same thing
// and that's the bind method.
// It's more important actually
// than the call and apply methods,
// so I'm gonna leave it for the next lecture.

// So in summary, we now have yet another tool
// in our toolbox here
// and this one is one that allows us
// to explicitly define the this keyword
// in any function that we want.
// But there is actually yet another method
// which allows us to do the same thing
// and that's the bind method.
// It's more important actually
// than the call and apply methods,
// so I'm gonna leave it for the next lecture.
