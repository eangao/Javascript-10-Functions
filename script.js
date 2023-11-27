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

// // In this lecture,
// // we're gonna go back to the this keyword
// // and learn how we can set the this keyword manually
// // and also why we would want to do that.

// const lufthansa = {
//   airline: 'Lutthansa',
//   iataCode: 'LH',
//   bookings: [],

//   //   We also want to keep an array of bookings.
//   // So also inside of the object,
//   // and then the book method.
//   // And remember from the previous section,
//   // I will now start using the way of writing methods,
//   // using the enhanced object literal syntax.
//   // And so that's simply by defining the method like this
//   // without having to write a function.
//   // So remember, before this,
//   // we used to do this, right?
//   // And if you still prefer this syntax,
//   // you can still do this one.
//   // But I do actually prefer the new syntax.
//   // And so I'll just start using this one now.

//   // book: function(){} //Old syntax
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Elmar Angao');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// // But now let's say that after some years,
// // the Lufthansa Group created a new airline.
// // So let's create eurowings here.

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// // Now, taking this exact same method here
// // and simply copying it and pasting it here
// // is a bad practice, right?
// // So of course, we are not gonna do that.
// // So instead, we will just take the method
// // and store it in an external function.
// // And then we can reuse that function
// // for all of the different airlines.
// // So what I mean is to create a new function called book
// // and we will simply set it to lufthansa.book, all right?
// // So again, this is possible
// // because JavaScript has first class functions.
// // And so we can simply take this function value here.
// // So that's this function
// // and then store it into a new variable,
// // which is then gonna be also the book function, okay?

// ////////////////////////
// // const book = lufthansa.book;

// const book = lufthansa.book; //(flightNum: any)

// // Okay, so let's try to use this book function
// // to do a new booking now.
// // But what do you think is gonna happen?
// // So 23, and then let's say Sarah Williams
// // and let's give it a save
// // and now we get cannot read property airline of undefined.
// // So do you know why this happened?
// // Well, it's because this function here,
// // the book function is now just a regular function call
// // and so as we learned in one of the previous sections,
// // in a regular function call,
// // the this keyword points to undefined,
// // at least in strict mode.
// // All right?

// //Does NOT work
// // book(23, 'Sarah Williams');

// // So once more, this book function is no longer this method.
// // Okay?
// // It's just not.
// // It is now this separate function here.
// // It's a copy of this one
// // but it's not a method anymore,
// // it's now a function.
// // And so here it's a regular function call.
// // And so therefore, the this keyword inside of it
// // will now point to undefined.
// // And that's why I kept telling you earlier
// // that the this keyword depends on how the function
// // is actually called.
// // Okay, so make sure to understand these dynamics here.
// // But now how do we actually fix this problem?
// // So in other words, how do we tell JavaScript
// // that we want to create a booking
// // on the new Eurowings airline?
// // Or even how do we tell it that we want
// // to book on Lufthansa here?
// // Well, basically, we need to tell JavaScript explicitly
// // what the this keyword here should be like.
// // So if we want to book a Lufthansa flight,
// // the this keyword should point to Lufthansa
// // but if we want to book a Eurowings flight,
// // then the this keyword should point to Eurowings.
// // So how do we do that?

// // How do we tell JavaScript explicitly
// // or manually what this this keyword should look like?
// // Well, there are three function methods to do that
// // and they are call, apply and bind.

// // So instead, we use book.call, all right?
// // And remember that a function is really just an object
// // and objects have methods
// // and therefore, functions can have methods too
// // and the call method is one of them.
// // And in the call method,
// // the first argument is exactly
// // what we want the this keyword to point to.
// // So let's say we want a Eurowings flight
// // and then as usual,
// // the rest of the arguments.
// // So 23 and Sarah Williams.
// // All right?

// //Call Method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// // So let's recap what happened here.
// // So this time, we did actually
// // not call the book function ourselves.
// // Instead, we called the call method
// // and it's then this call method,
// // which will call the book function
// // with the this keyword set to eurowings.
// // So whatever we pass has the first argument
// // of the call method.
// // And so this allows us to manually
// // and explicitly set the this keyword
// // of any function that we want to call.
// // Then all the arguments after the first one
// // are simply the arguments of the original function.
// // And so in the case of the book function,
// // of course, that's the flight number
// // and the passenger name.
// // ====================================================

// book.call(lufthansa, 239, 'Maray Cooper');
// console.log(lufthansa);

// // And indeed, the string that we get here
// // is completely correct
// // and in here, so in the Lufthansa bookings array,
// // we now have, of course, three bookings.
// // Okay?

// // And so that, of course, happened because this time,
// // we set the this keyword inside
// // of the function call to lufthansa.
// // And so now this here is again back to pointing to Lufthansa,
// // while before, right here,
// // it was being pointed to Eurowings, all right?
// // So even though the code of this function
// // is inside of the lufthansa object,
// // we made it so that the this keyword in here
// // pointed to eurowings.
// // So to this object, this new one right here, okay?
// // So we have a way now
// // of manually manipulating the this keyword
// // using the call method.
// // And of course, we could now keep going
// // and create more airlines into the Lufthansa Group,
// // like the Swiss Air Lines.

// // Air Lines.
// // Now, of course, these property names,
// // they all need to have the exact same format
// // as this original object here
// // because this method is trying to read just these properties.
// // So it's always iataCode
// // and bookings, as you see here, and airline.
// // And so of course,
// // we need to use exactly these property names here as well
// // but just like this,

// //=========================================================

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 538, 'Mary Cooper');
// console.log(swiss);

// // ===============================
// //Apply Method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// // This apply method is not that used anymore
// // in modern JavaScript because now,
// // we actually have a better way of doing the exact same thing.
// // And do you know what I'm talking about?
// // So let me show it to you.
// // Book.call, so instead of using apply,
// // we can still use call,
// // again with swiss

// book.call(swiss, ...flightData);

// // And so right now, with modern JavaScript,
// // I prefer to just always use the call method
// // and then spread out the arguments from an array like this.
// // So again, this here is exactly the same as this.
// // So in summary, we now have yet another tool
// // in our toolbox here
// // and this one is one that allows us
// // to explicitly define the this keyword
// // in any function that we want.
// // But there is actually yet another method
// // which allows us to do the same thing
// // and that's the bind method.
// // It's more important actually
// // than the call and apply methods,
// // so I'm gonna leave it for the next lecture.

// // So in summary, we now have yet another tool
// // in our toolbox here
// // and this one is one that allows us
// // to explicitly define the this keyword
// // in any function that we want.
// // But there is actually yet another method
// // which allows us to do the same thing
// // and that's the bind method.
// // It's more important actually
// // than the call and apply methods,
// // so I'm gonna leave it for the next lecture.

// /////////////////////////////////////////////////////////////////
// // The bind Method
// /////////////////////////////////////////////////////////////////

// // So let's know, learn about the bind method.
// // And just like the call method,
// // bind also allows us to manually set this keywords
// // for any function call.
// // Now, the difference is that bind
// // does not immediately call the function.
// // Instead it returns a new function
// // where this keyword is bound.
// // So it's set to whatever value we pass into bind.

// //Bind method
// // book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// // And so as you see, this now looks
// // like the normal book function call again.
// // And that's because this function here
// // already has the this keyword set in stone basically.
// // And so here, of course, we no longer need to specify
// // to these keywords again.
// // So the signature here, so the name of the parameters
// // is back to being simply the flight number
// // and the passenger name, okay?
// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas schmedtmann');
// bookEW23('Matha Cooper');

// // And by the way, what we did here,
// // so, basically specifying parts of the argument beforehand,
// // is actually a common pattern called partial application.
// // So essentially, partial application
// // means that a part of the arguments
// // of the original function are already applied,
// // so which means, already set.
// // And so that's exactly what the bookEW23 function is, right?

// //with Event Listeners

// // But let's start by adding a new property
// // only to the Lufthansa object
// lufthansa.planes = 300;

// // And then we also add a new method
// // only to the Lufthansa object,
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// // lufthansa.buyPlane();

// // o addEventListener here is the higher order function
// // which receives a callback function.
// // And so that should be lufthansa.buyPlane, all right?

// //==========================
// // document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// // And now as I click on this button, let's see what happens.
// // And we get not a number here.
// // So this .Planes is now not a number.
// // And the reason for that is that this keyword
// // is this button element, okay?
// // And do you know why that is?
// // Well, in one of the theory lectures,
// // we learned that in an event handler function,
// // that this keyword always points to the element
// // on which that handler is attached to.
// // So, this is the handler function, right?
// // And so it is attached to this element,
// // so to this button.
// // And therefore, inside of the handler function
// // or the event listener, it doesn't really matter.
// // But inside of this function,
// // this keyword will point to the button element.
// // And so that's why this keyword here
// // returns this button, okay?

// // So here you have yet another proof
// // that this keyword really is set dynamically.
// // Because if we simply called a Lufthansa.buyPlane out here,
// // then of course, this keyword would be Lufthansa,
// // so this object, right?
// // Because that's the object calling the function.
// // But in this case it is of course,
// // this event listener function calling this function.
// // And so therefore, the button itself
// // will then become this keyword, okay?

// // Now, how should we do that?
// // Should we use the call method or the bind method?
// // Well, we need to pass in a function here
// // and not to call it.
// // And so we already know that the call method
// // calls the function.
// // And so that's not what we need.
// // And so therefore, we use bind.
// // Because we already know that bind
// // is gonna return a new function.
// // And so this keyword should be Lufthansa,
// // and so that's exactly what we define, okay?

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //=================

// //Partial application
// // Now, just one final example here,
// // which is again, gonna be about partial application,
// // because this is another big use case for the bind method.
// // And in this case of partial application,
// // many times we are not even interested in this keywords,
// // but we still use bind for this, all right?
// // Now, remember that partial application
// // means that we can preset parameters, all right?
// // So let's start by creating a general function
// // which adds a tax to some value.

// // So this here is the general function for adding tax.
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// // But now let's say that there is one tax
// // that we use all the time.

// // So for example, here in Portugal,
// // the VAT, which is value added tax, is 23%.
// // And so we can now use the bind function
// // on this function and preset the rate always,
// // so that it always will be this 23%.
// // And then we have a function
// // which only calculates the VAT
// // for whatever value we pass into it.

// // and then the first argument of bind
// // is this keywords, remember?
// // But in this case, we don't care
// // about the this keyword at all.
// // It's not even here in the function.
// // And so, we just say, null.
// // It could be any other value
// // because nothing will happen with it,
// // but it's kind of a standard to just use null.
// // And now we can set the rate here.
// // So let's preset it to 23%,
// // so 0.23, all right?

// const addVAT = addTax.bind(null, 0.23);
// // addVat = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// // just keep in mind that the order of the arguments then
// // is important.
// // If you want it to preset the rate,
// // then it has to be the first argument in this function.
// // Otherwise, this will not really work here, okay?

// // Now you could argue that what we just did here
// // could easily have been done with default parameters.
// // But this is actually different,
// // because this here is creating a brand new,
// // simply, more specific function
// // based on a more general function,
// // which is the addTax function.
// // And of course, the example here
// // could be a lot more complex too, right?
// // So this really is different
// // because using binds,
// // actually it really gives us a new function.
// // So, it's as if we returned a new specific function
// // from the addTax function.

// //challenges

// // And actually now I have a nice challenge for you
// // which is to essentially rewrite this whole example here,
// // but using the technique of one function
// // returning another function.
// // So we have one lecture about that
// // and maybe you can go back and take a look at that.
// // And then I want you to essentially,
// // create a function that can return a function
// // which will do just what this one does.
// // So that's probably really challenging.
// // So don't beat yourself up if you cannot do it.
// // I know it is a challenge,
// // but you can still try to take a minute or two
// // and, yeah, really try it.

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// // So just to recap, we created this function,
// // which then returns this one.
// // So the first one is the one that needs the rate,
// // because the rate is also what we used
// // to define this addVAT function here, right?
// // And so the resulting function
// // is then the one who takes in the value.
// // And that's why we have value here in the inner function too.
// // Now this is just another way of doing the same thing
// // and this is already pretty advanced stuff really.
// // So, absolutely don't be upset
// // if you didn't do this by yourself.

///////////////////////////////////////////////////////////////////////
// Coding Challenge #1
///////////////////////////////////////////////////////////////////////

// // Let's build a simple poll app!
// // A poll has a question, an array of options from which people can choose, and an
// // array with the number of replies for each option. This data is stored in the starter
// // 'poll' object below.
// // Your tasks:

// // 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// // method does 2 things:

// // 1.1. Display a prompt window for the user to input the number of the
// // selected option. The prompt should look like this:
// // What is your favourite programming language?
// // 0: JavaScript
// // 1: Python
// // 2: Rust
// // 3: C++
// // (Write option number)

// // 1.2. Based on the input number, update the 'answers' array property. For
// // example, if the option is 3, increase the value at position 3 of the array by
// // 1. Make sure to check if the input is a number and if the number makes
// // sense (e.g. answer 52 wouldn't make sense, right?)

// // 2. Call this method whenever the user clicks the "Answer poll" button.

// // 3. Create a method 'displayResults' which displays the poll results. The
// // method takes a string as an input (called 'type'), which can be either 'string'
// // or 'array'. If type is 'array', simply display the results array as it is, using
// // console.log(). This should be the default option. If type is 'string', display a
// // string like "Poll results are 13, 2, 4, 1".

// // 4. Run the 'displayResults' method at the end of each
// // 'registerNewAnswer' method call.

// // 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// // data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// // object! So what should the this keyword look like in this situation?

// // Test data for bonus:
// // § Data 1: [5, 2, 3]
// // § Data 2: [1, 5, 3, 9, 6, 1]

// // Hints: Use many of the tools you learned about in this and the last section �
// // GOOD LUCK �

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),

//   regsiterNewAnswer() {
//     //Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     console.log(answer);

//     //register answer

//     //     But if either one of these conditions here is false,
//     // then the end operator will short circuit,
//     // and this part here is not executed.
//     // So this is a nice use case for short circuiting,
//     // because the code that we want to execute,
//     // is just one simple line of code.
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   //   And remember, it has the default set to array.
//   // And so here, we can use the ES6 default parameters,
//   // using this equal sign.
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// // poll.regsiterNewAnswer();

// document
//   .querySelector('.poll')

//   // script.js:1082 Uncaught TypeError: Cannot read properties of undefined (reading 'join')
//   // .addEventListener('click', poll.regsiterNewAnswer);

//   //   And there is an error.
//   // And that's because we're trying to read property join,
//   // of undefined, right here.
//   // And so the problem here is, as you might have guessed,
//   // because we talked about this before,
//   // is that the disk keyword right now, points to this element.
//   // So to this poll button here.
//   // And so again, there is because in an event handler function,
//   // such as this one here,
//   // that this keyword will always point to the element,
//   // to which it is attached.
//   // And so right now, there is this button.
//   // So to fix this, we need to bind the disk keyword.
//   // And in this case, we need to set it to the poll object.
//   // And so then, in this function here,
//   // which is the result of the bind method,
//   // so in this new function,
//   // the disk keyword will then point to the poll object.

//   .addEventListener('click', poll.regsiterNewAnswer.bind(poll));

// //   Well, we will have to use the call method,
// // because we will need a new disk keyword, right?
// // Because display results uses this dot answers.
// // Okay, so the answers come from the disk keyword.
// // And so if we want to have a different disk keyword,
// // then we need to use call.
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// // [5, 2, 3]
// // [1, 5, 3, 9, 6, 1]
// // Now, what we did here, it's not really a real scenario,
// // but it's still good for us to use these concepts,
// // in some different ways,
// // to really get used to how all of these concepts,
// // work together.

////////////////////////////////////////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
////////////////////////////////////////////////////////////////////////

// // ur next topic is something called,
// // Immediately Invoked Function Expressions.
// // So let's take a look at what they are.
// // So sometimes in JavaScript,
// // we need a function that is only executed once.
// // And then never again.
// // So basically a function
// // that disappears right after it's called once.
// // And this might not appear
// // to make much sense right now.
// // But we actually need this technique later.

// // For example, with something called async/await.
// // So how could we do that?
// // Well, we could simply create a function.
// // And then only execute it once.
// // So, run, once, function.
// // This will never run again.

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// // Now, if we try to run this,
// // we will get an error for now.
// // So it says function statements require a function name.
// // And that's because
// // of course JavaScript here expects a function statement.
// // Because we simply started this line of code here
// // with the function keyword.
// // However, we can still trick JavaScript
// // into thinking that this is just an expression.
// // And we do that by simply wrapping all
// // of this into parentheses.
// // And so now
// // we basically transformed the statement that we had before
// // into an expression.
// // And so now if we save this,
// // we get no error.
// // But also this function didn't execute yet, right?

// // We never called it.
// // So we know that this here is the function.
// // And so, we can then immediately call it.
// // And so with this,
// // we will get now this text here locked
// // to the console, to string.
// // And indeed here it is, alright?
// // So again this here,
// // is really just the function value.
// // So it's just a function expression.
// // And then immediately, we call it here.
// // And so this is why this pattern here,
// // is called the Immediately Invoked Function Expression.
// // Or IIFE for short.

// // IIFE
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// // IIFE - uing arrow function

// // And the same would of course,
// // also work for an arrow function.
// // So let's just copy this.
// // This will also never run again.
// // So if we try to call it like this,
// // then it would not work.
// // And so,
// // we actually don't get an error.
// // But also nothing happens.
// // So we first need to wrap this into parentheses.
// // And then as we called it.
// // Then here it is.
// // Okay, so two ways of writing
// // an Immediately Invoked Function Expression.
// (() => console.log('This will never run again'))();

// // But you might be wondering,
// // why was this pattern actually invented?
// // Well, we already know that functions create scopes, right?
// // And what's important here
// // is that one scope does not have access
// // to variables from an inner scope, right?
// // For example, right here in this global scope.
// // We do not have access to any variables that
// // are defined in the scope
// // of any of these functions here, right?

// // So for example,
// // let's add a variable here.
// // Let's say, is private = 23.
// // And then as we tried to access it out here.
// // You already know that it's not going to work, right?
// // And that's because the scope chain
// // only works the other way around.
// // So the inner scope would have access
// // to anything defined outside,
// // here in the global scope.
// // But the other way around,
// // the global scope does not have access to anything,
// // that is inside of a scope.

// // const isPrivate = 23;

// // Now, do you remember what also creates a scope in ES6?
// // And that's right.
// // Variables declared with let or const create
// // their own scope inside a block.
// // And we learned that
// // in the behind the scenes section, remember?
// // So when we create a block, like this,
// // and declare is private in there.
// // Then the outside can still not access is private.
// // So let's comment out this one,
// // and paste it here.
// // And once again,
// // we cannot access this variable.
// // while on the other hand,
// // this one here,
// // would of course, be accessible.
// // And so again that's what we learned,
// // in one of the previous sections.
// // So that's because this one here was declared with var,
// // and therefore it does completely ignore
// // this block here essentially.
// // And this is the reason why now
// // in modern JavaScript.
// //
// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }

// // console.log(isPrivate);
// console.log(notPrivate);

// // Immediately Invoked Function Expressions are not
// // that used anymore.
// // Because if all we want
// // is to create a new scope for data privacy.
// // All we need to do,
// // is to just create a block like this, right?
// // There's no need to creating a function
// // to create a new scope.
// // Unless of course,
// // we want to use var for our variables.
// // But we already know,
// // we probably shouldn't do that. Right?
// // Now on the other hand,
// // if what you really need,
// // is to execute a function just once, then the IIFE.
// // So the Immediately Invoked Function Expression pattern
// // is still the way to go.
// // Even now with modern JavaScript.
// // And we will actually see a great use case a bit later
// // of doing an IIFE.

///////////////////////////////////////////////////////////////////////
// Closures
///////////////////////////////////////////////////////////////////////

// // There is an almost mystical feature
// // of Java script functions
// // that many developers fail to fully understand.
// // And what I'm talking about is something called closures.
// // So when I asked my students,
// // what's the hardest JavaScript concept to understand,
// // then many people say that it's closures.
// // However, I believe that with the right explanation,
// // it's actually not that hard,
// // especially when you already understood everything
// // that you learned before in this course,
// // such as execution context,
// // the call stack, and the sculpt chain,
// // because closures kind of bring all of these concepts
// // together in a beautiful, almost magical way.

// // And I'm calling this function here,
// // secure booking because this passengerCount variable
// // cannot be manipulated and accessed from the outside.
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// // And it is this function that will create the closure.
// // Now, the first thing that I need to tell you about closures
// // is that a closure is not a feature that we explicitly use.
// // So we don't create closures manually,
// // like we create a new array or a new function.
// // So a closure simply happens automatically
// // in certain situations, we just need
// // to recognize those situations.

// // And so as we call secure booking,
// // it will return exactly this function
// // and it will then be stored inside this Booker.
// // And so this here is gonna be now a function as well, right?
// const booker = secureBooking();

// //see lecture pdf

// booker();
// booker();
// booker();

// // But now if we think about this,
// // then how is this even possible?
// // How can the Booker function update
// // this passengerCount variable that's defined
// // in a secure booking function
// // that actually has already finished executing.

// // And so, as I just said,
// // this function has already finished its execution.
// // It is gone.
// // So its execution context is no longer on the stack,
// // as we just saw in the slide,
// // but still this inner function here,
// // which is the Booker function,
// // is still able to access the passengerCount variable
// // that's inside of the Booker function
// // that should no longer exist.
// // And maybe you can guess that what makes this possible

// // is a closure, but before I explain
// // exactly how the closure works,
// // I want you to appreciate once more,
// // how strange this actually is.
// // So again, this Booker function here
// // is simply a function that exists
// // out here in the global environment
// // or in the global scope, right?

// // And the environment in which the function was created.
// // So this year basically, this environment
// // is no longer active.
// // It is in fact gone.
// // But still the Booker function somehow continues
// // to have access to the variables
// // that were present at the time that the function was created.
// // And in particular, this passengerCount variable here.
// // And so that's exactly what the closure does.

// // So we can say that a closure makes a function
// // remember all the variables that existed
// // at the function's birthplace essentially, right?
// // So we can imagine the secure booking
// // as being the birthplace of this function.
// // So of the Booker function, essentially.
// // And so this function remembers everything at its birthplace,
// // by the time it was created.
// // And this cannot simply be explained
// // with the scope chain alone.
// // So we need to also understand the closure.

// //see lecture pdf

// // the secret of the closure
// // and the secret is basically this.
// // Any function always has access to the variable environment
// // of the execution context in which the function was created.
// // Now, in the case of Booker, this function was created.
// // It was born in the execution context of secure booking,
// // which was popped off the stack previously, remember?
// // So, therefore the Booker function
// // will get access to this variable environment,
// // which contains the passengerCount variable.
// // And this is how the function will be able to read
// // and manipulate the passengerCount variable.
// // And so it's this connection that we call closure.

// // And this last part is really important.
// // The closure is then basically this variable environment
// // attached to the function,
// // exactly as it was at the time and place
// // that the function was created.
// // And this probably still sounds confusing, but don't worry.
// // I have some more familiar analogies in the next slide.

// // For now, we are just trying to understand the mechanism
// // behind the closure, so how it all works behind the scenes.
// // So what matters the most here is that the Booker function
// // has access to the passengerCount variable
// // because it's basically defined in the scope
// // in which the Booker function was actually created.
// // So in a sense, the scope chain is actually preserved
// // through the closure, even when a scope
// // has already been destroyed
// // because its execution context is gone.
// // This means that even though the execution context
// // has actually been destroyed,
// // the variable environment somehow keeps living
// // somewhere in the engine.

// // To make it a bit more digestible,
// // we can also say that thanks to the closure,
// // a function does not lose connection to variables
// // that existed at the function's birthplace.
// // That's a bit more intuitive, right?
// // But anyway, let's see what happens now
// // with execution of the Booker function.
// // So the function attempts to increase
// // the passengerCount variable.
// // However, this variable is not in the current scope.
// // And so JavaScript will immediately look into the closure
// // and see if it can find the variable there.
// // And it does this even before looking at the scope chain.
// // For example, if there was a global passengerCount variable
// // set to 10, it would still first use the one in the closure.
// // So the closure basically has priority over the scope chain.
// // And so after running this function,
// // the passengerCount becomes one.
// // This message is logged.
// // And then the execution context is popped off the stack.
// // Then execution moves to the next line.
// // We get a new execution context and a closure is still there,
// // still attached to the function and the value is still one.
// // And so now this function executes,
// // increasing the passengerCount to two
// // and logging a message again.
// // Okay, and that's what closures are
// // and how they work behind the scenes.

// // And I know that this is all quite complex.
// // So let me give you a couple different definitions
// // of closure now, some more formal ones
// // and some more intuitive and maybe easier to grasp.

// // see pdf lecture ablout closure summary

// console.dir(booker);

//////////////////////////////////////////////////////////
// More Closure Examples
//////////////////////////////////////////////////////////
// // Let's now create two more situations
// // in which closures are gonna appear.
// // So that you can start identifying closures
// // in your own code in the future.
// // And both of these examples are gonna demonstrate
// // that we don't need to return if function
// // from another function in order to create a closure.

// // example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// //RE-assign f function
// h();
// f();

// console.dir(f);

// // Example 2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boardng all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000); //1000 = 1 SECOND

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

// // And to finish, let's now also prove
// // that the closure does in fact have priority
// // over the sculpt chain.
// // So here in the global scope,
// // I'm also gonna create a variable called perGroup equals
// // and then just some value here.
// // And so if the scope chain had priority over the closure,
// // then this callback function here
// // would indeed use this variable here
// // this global variable
// // because we can imagine this function here
// // basically being executed in the global scope, okay.
// // So if it wasn't for the closure it would use this.
// // So let me actually demonstrate that to you.
// // So if I remove this variable,
// // then it will be able to use the perGroup
// // and data is here outside.
// // So indeed now we get 1,000
// // but then as we put it back here
// // then the callback function will close over this variable.
// // So it will close over
// // the entire variable environment in fact.
// // And so therefore it will then use this year first, right.
// // And it did.
// // So in fact, a disclosure even has priority
// // over the sculpt chain.
// // Okay, and with this,
// // we finished these two lectures about closures
// // and they hope that after this one,
// // you are now a little bit better able to identify closures
// // as they happen in your code or even here in my code
// // throughout the codes
// // because we will see some closures happening
// // some more times in the future.
// // Now all there's left to do is the coding challenge
// // in the next video where you will be thinking
// // about closures one more time.

/////////////////////////////////////////////////////////////
// Coding Challenge #2
/////////////////////////////////////////////////////////////

// This is more of a thinking challenge than a coding challenge �
// Your tasks:

// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!

// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.

// GOOD LUCK

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// So why did this work?
// Or in other words, how does this callback function here,
// get access to the header variable?
// And one more time, the explanation is the closure.
// So I hoped that you really explained basically
// how the closure works to yourself or to someone else.
// And so in this particular example, the closure is necessary
// or it's useful

// because by the time this callback here is executed,
// this IIFE,
// so this immediately invoked function expression is
// now long gone.
// So it has already been executed.
// And with it, this variable here is basically gone as well.
// Right?

// So all of that is gone.
// But still, this function here is attached
// to the body element.

// And so it's waiting for some events to happen there.
// And when the event happens, well,
// then this function here is of course, executed.
// And again, even though the environment
// in which this function here was created is already gone,
// it is still able to access the variables
// that were created in that variable
// by the time the function was born, so to say.
// So this is the birthplace of or event handler function here.
// And therefore the function
// remembers all the variables present at a time of its birth.

// We can also say
// that the header is in the backpack of this function.
// So that explanation works as well.
// And you can go even further and deep into theory
// and basically try to explain
// how all of this works behind the scenes.

// But that I already explained to you
// in the more theory lecture,
// and so I'm not gonna go into that again.
// All right.

// So hopefully, you managed to explain this to yourself,
// maybe to your dog, whatever.
// But what's important is that you now understand
// how the closure works
// and how and when it appears.
// So this was yet another great example
// of a closure appearing.
// Anyway with this we've finished
// this pretty important section on functions.
