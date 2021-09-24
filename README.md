# Day3Task
Zenclass Boot camp Day 3 task
Google Doc link
https://docs.google.com/document/d/1fzj1CAZuYdAXHh0rXBm9C6Hsqw4ao2Xj0uxENHa2ucg/edit?usp=sharing


Difference between window screen and document in javascript:

1. Window:
Window is the main JavaScript object root, aka the global object in a browser, and it can also be treated as the root of the document object model. You can access it as window.
window.screen or just screen is a small information object about physical screen dimensions.
window.document or just document is the main object of the potentially visible (or better yet: rendered) document object model/DOM.
Since window is the global object, you can reference any properties of it with just the property name - so you do not have to write down window. - it will be figured out by the runtime.

The JavaScript window object sits at the top of the JavaScript Object hierarchy and represents the browser window. The window object is supported by all browsers. All global JavaScript objects , functions, and variables automatically become members of the window object. The window is the first thing that gets loaded into the browser . This window object has the majority of the properties like length, innerWidth, innerHeight, name, if it has been closed, its parents, and more.
Window methods:
Some window object methods are:
window.open() : open a new window
window.close() : close the current window
window.moveTo() : move the current window
window.resizeTo() : resize the current window

2. Document:
The Document object represents any web page loaded in the browser and serves as an entry point into the web page’s content, which is the DOM tree. When an HTML document is loaded into a web browser , it becomes a document object. It is the root node of the HTML document. The document actually gets loaded inside the window object and has properties available to it like title, URL, cookie, etc.

Finding HTML elements:
We can find the HTML elements by using the below document object methods:
document.getElementById(id) : Find and return an element by element id
document.getElementsByTagName(name) : Find and return an element by tag name
document.getElementsByClassName(name) : Find return an element by class name
Changing HTML elements:
We can change the HTML element contents like style, text, attribute using the below properties:
element.innerHTML = new html content : Change the inner HTML of an element
element.attribute = new value : Change the attribute value of an HTML element
element.style.property = new style : Change the style of an HTML element
Adding and Deleting HTML elements:
We can create, add, delete and replace HTML elements by using the below methods:
document.createElement(element) : Create an HTML element
document.removeChild(element) : Remove an HTML element
document.appendChild(element) : Add an HTML element
document.replaceChild(new, old) : Replace an HTML element
document.write(text) : Write into the HTML output stream
Adding Event Handlers:
We can also add event handlers when a specific event occurs like onclick, onload, onkeydown etc by using the respective event property:
document.getElementById(id).onclick = function(){code} :Adding event handler code to an onclick event

3.Screen
Screen is a small information object about physical screen dimensions of the user device. It can be used to display screen width, height, colorDepth, pixelDepth etc. It is not mandatory to write window prefix with screen object like window.screen. It can be written without window prefix.
Properties:
screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth



