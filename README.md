# JSX_attributes_and_styling
Created with [CodeSandbox](https://codesandbox.io/).      
Notes from React module.     
[The Complete 2021 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)  
Instructor: Dr. Angela Yu      


## Description
This project displays: 
* A heding: My Favourite Foods
* 3 inline pictures of my Favourite Foods
* An unordered list with 3 items: Fruit Salad, Sushi and Salad
* A paragraph Element
* A random image generated using [Lorem Picsum](https://picsum.photos/)

## Notes
This project is about styling React Elements and how to use Attributes in JSX

#### Attributes 
We access the property classes using JS: className         
JS Attributes are HTML attributes camelCased      
Documentation: [HTML Global Attributes MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)     

#### className: JS Attribute
The most common attribute in React,      
It's the preferred way to add styling to our React Elements     
HTML Elements created using React follow the same rules as conventional HTML Elements.     
Eg: we can target classes, ids or HTML Elements. in our CSS File:
```
ul {color: red}
```
Will affect our Unordered List(s)

#### Insert IMG using JS Attribute
First we hold the image as a constant       
Then we create an HTML img Element        
The source (src="") is our constant injected using JS (src={ constName })      
Eg: The img generated using Lorem Picsum uses JS inserted as Attribute        
 
### Attributes: HTML and JavaScript
We can use JavaScript Attr , this is HTML Attr, such as src or href, camelCased if necessary in our JSX File.
WE cam ise JS Expressions as calues for thos attr as long as we include them between curly braces { }

## What I have learned with this project:
* Styling React Elements
* How to use className Attribute
* Using Attributes: conversion between HTML and JS and how inject them.
