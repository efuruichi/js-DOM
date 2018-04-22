/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var nameElem = document.getElementById("name1");
nameElem.innerHTML = "Tay-Tay";

//document.getElementById("main");
//document.getElementsByClassName("row")[0];
//document.getElementsByClassName("block1 col-sm-4")[0].appendChild(nameElem);



/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var positionElem = document.getElementById("position2");
positionElem.innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var aliasElem = document.getElementById("alias3");
aliasElem.innerHTML = "Concatenation";


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var profElem4 = document.getElementsByClassName("profile")[0];
profElem4.innerHTML = "You're just a sinner I am told / Be your fire when you're cold / Make you happy when you're sad / Make you good when you are bad";
document.getElementsByClassName("block1 col-sm-4")[1].appendChild(profElem4);

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var profElem5 = document.getElementsByClassName("profile")[1];
profElem5.innerHTML = '"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."';
document.getElementsByClassName("block2 col-sm-4")[1].appendChild(profElem5);

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var aliasElem2 = document.getElementsByClassName("alias")[2];
aliasElem2.innerHTML = "Jules Winnfield";
document.getElementsByClassName("block3 col-sm-4")[1].appendChild(aliasElem2);


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var divElem1 = document.createElement("div");
divElem1.id = "name7";
divElem1.innerHTML = "Peter Griffin";
document.getElementById("nameParent").appendChild(divElem1);
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var divElem2 = document.createElement("div");
divElem2.id = "alias8";
divElem2.innerHTML = "Old Man Riverwalk";
document.getElementById("aliasParent").appendChild(divElem2);

//Final Boss
/*9. Create your own profile.*/

var imgElem = document.getElementsByTagName("img")[8];
imgElem.src = "http://img.photobucket.com/albums/v237/erinemi/smores.jpg";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(imgElem);

var divElem3 = document.createElement("div");
divElem3.id = "name9";
divElem3.innerHTML = "S'mores The Cat";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(divElem3);

var divElem4 = document.createElement("div");
divElem4.id = "position9";
divElem4.innerHTML = "Quality Assurance";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(divElem4);

var divElem5 = document.createElement("div");
divElem5.id = "alias9";
divElem5.innerHTML = "King Cat";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(divElem5);

var divElem6 = document.createElement("div");
divElem6.id = "bio9";
divElem6.innerHTML = '"Mrrrroooowl."';
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(divElem6);
