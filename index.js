var myname="Laura";
var yourname= prompt("What is your name?");
var first_letter=yourname.slice(0,1);
var next_letters=yourname.slice(1,yourname.length);
var full_name=first_letter.toUpperCase()+next_letters.toLowerCase;
alert("Hi "+ yourname +"! My name is " + myname + ". Welcome to my website!");
