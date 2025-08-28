1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: All of them are used to select elements from the DOM in JS, but there are some differences between them.
i. getElementById is used to select a single id.
ii. getElementsByClassName is used to select all elements that have a specific className.
iii. querySelector / querySelectorAll? one takes the first element that matches a CSS selector, and the other takes all.

2. How do you create and insert a new element into the DOM?

Ans: First, we use a document.createElement() function to create an element, and after that, use appendChild() to add it to a node. We can use innerHTML to customize it.

3. What is Event Bubbling and how does it work?

Ans: Event bubbling is a mechanism where if an event is triggered on a child element, it propagates upward in the DOM towards its parent element and eventually it reaches to document

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event delegation is a method of JS to handle its events efficiently. It saves memory alot by adding an event listener to a parent element and call an event on a target using the .target method instead of adding event listener to all of the elements of a DOM.
It saves memory a lot and it can make your website feel a bit fast.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() prevents a site to load after clicking the submit button or after clicking a link it prevents the browser from navigating to a new URL. On the other hand stopPropagation() stops the event from propagating further up or down while in the capturing and bubbling phases on a DOM tree.
