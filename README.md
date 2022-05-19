# JS-Mini-Project
Hotel Management System
Java Script Mini Project 
Documentation
Project Title: 	Hotel Booking Website
Date: 19/05/2022
Submitted by: Sundar Eesha, Newton School, Kafka, Higgs Boson Batch
This project is for building an attractive web application for Hotel Management System using HTML, CSS and Javascript(using API). The application is built and styled using HTML and CSS. 
User Interface Design:
The following is the screen shot of the home screen. The background color is set to change using CSS Animation. On the top left is the container which displays the picture of famous hotels as a slideshow. On the left of the hotel picture, is a form where the user enters the city and country of their travel. The submit button is designed in such a way that, on hovering of the mouse pointer, it becomes multicolored. Below this, is a space for displaying the result of the hotel search. At the bottom of the page is a button labeled “Proceed to book…”, which is disabled by default. After the display of the hotel search result, it is enabled automatically using javascript. When the user clicks the button “Proceed to book…”, the page is redirected to google search which displays the hotel listed by search, as well as other hotels in the location. The user can select the hotel of their choice and book.
Technical Details:
	For the basic structure of the document, HTML is used. For styling purpose, CSS and javascript is used. The slideshow of hotel picture is created using javascript. The picture is set to change every 2 seconds. 
After the user types in the location details and submit, the javascript getcityname() is called. The API is called using fetch() method. The API which is being used is “hotels4.p.rapidapi.com”. The following is the API response from the console.
1.	Object
1.	autoSuggestInstance: null
2.	geocodeFallback: false
3.	misspellingfallback: false
4.	moresuggestions: 10
5.	suggestions: Array(4)
1.	0:
1.	entities: Array(5)
1.	0:
1.	caption: "<span class='highlighted'>Doha</span>, Qatar"
2.	destinationId: "1771435"
3.	geoId: "6269113"
4.	landmarkCityDestinationId: null
5.	latitude: 25.28646985786504
6.	longitude: 51.53925433416617
7.	name: "Doha"
8.	redirectPage: "DEFAULT_PAGE"
9.	searchDetail: null
10.	type: "CITY"
11.	[[Prototype]]: Object
2.	1: {geoId: '1006', destinationId: '1643577', landmarkCityDestinationId: null, type: 'CITY', redirectPage: 'DEFAULT_PAGE', …}
3.	2: {geoId: '1048', destinationId: '1635763', landmarkCityDestinationId: null, type: 'CITY', redirectPage: 'DEFAULT_PAGE', …}
4.	3: {geoId: '553248635975438250', destinationId: '12481344', landmarkCityDestinationId: null, type: 'NEIGHBORHOOD', redirectPage: 'DEFAULT_PAGE', …}
5.	4: {geoId: '553248635125561236', destinationId: '11062425', landmarkCityDestinationId: null, type: 'CITY', redirectPage: 'DEFAULT_PAGE', …}
6.	length: 5
7.	[[Prototype]]: Array(0)
2.	group: "CITY_GROUP"
3.	[[Prototype]]: Object
2.	1:
1.	entities: Array(5)
1.	0:
1.	caption: "Wyndham Grand Regency, <span class='highlighted'>Doha</span>, Qatar"
2.	destinationId: "239280"
3.	geoId: "1447884"
4.	landmarkCityDestinationId: null
5.	latitude: 25.29166
6.	longitude: 51.496633
7.	name: "Wyndham Grand Regency"
8.	redirectPage: "DEFAULT_PAGE"
9.	searchDetail: null
10.	type: "HOTEL"
11.	[[Prototype]]: Object
2.	1: {geoId: '4700787', destinationId: '396995', landmarkCityDestinationId: null, type: 'HOTEL', redirectPage: 'DEFAULT_PAGE', …}
3.	2: {geoId: '15707682', destinationId: '631620', landmarkCityDestinationId: null, type: 'HOTEL', redirectPage: 'DEFAULT_PAGE', …}
4.	3: {geoId: '11674151', destinationId: '535160', landmarkCityDestinationId: null, type: 'HOTEL', redirectPage: 'DEFAULT_PAGE', …}
5.	4: {geoId: '3871420', destinationId: '124885440', landmarkCityDestinationId: null, type: 'HOTEL', redirectPage: 'DEFAULT_PAGE', …}
6.	length: 5
7.	[[Prototype]]: Array(0)
2.	group: "HOTEL_GROUP"
3.	[[Prototype]]: Object
3.	2:
1.	entities: Array(4)
1.	0:
1.	caption: "MIA Park, <span class='highlighted'>Doha</span>, Ad Dawhah, Qatar"
2.	destinationId: "10603241"
3.	geoId: "553248621532391872"
4.	landmarkCityDestinationId: "1771435"
5.	latitude: 25.292407
6.	longitude: 51.539322
7.	name: "MIA Park"
8.	redirectPage: "DEFAULT_PAGE"
9.	searchDetail: null
10.	type: "LANDMARK"
11.	[[Prototype]]: Object
2.	1: {geoId: '553248621532390758', destinationId: '10603047', landmarkCityDestinationId: '1771435', type: 'LANDMARK', redirectPage: 'DEFAULT_PAGE', …}
3.	2: {geoId: '553248621563225648', destinationId: '10670122', landmarkCityDestinationId: '1771435', type: 'LANDMARK', redirectPage: 'DEFAULT_PAGE', …}
4.	3: {geoId: '553248621593167081', destinationId: '10457579', landmarkCityDestinationId: '1771435', type: 'LANDMARK', redirectPage: 'DEFAULT_PAGE', …}
5.	length: 4
6.	[[Prototype]]: Array(0)
2.	group: "LANDMARK_GROUP"
3.	[[Prototype]]: Object
4.	3: {group: 'TRANSPORT_GROUP', entities: Array(1)}
5.	length: 4
6.	[[Prototype]]: Array(0)
6.	term: "doha"
7.	trackingID: "ca4a3c9f1ad944e0a57f66942164f53b"
8.	[[Prototype]]: Object
The data which is being used from the API response is highlighted. If the user fails to provide the city name or the city name is misspelled, or any other reason for the failure of API call, an error message is displayed on the UI.
 The Proceed button stays disabled unless the API call is successful. After the successful API call, the hotel details sent by the API is displayed on the UI. The js function that displayed the API result calls the other function for enabling the Proceed button. Thus, the proceed button is enabled. If the user clicks the proceed button, the page is redirected to the google hotel search with the hotel name displayed in the home page. The user can book the desired hotel.


ScreenShots:




1.	Home page
2.	![image](https://user-images.githubusercontent.com/101657765/169313219-4fc4076a-1d42-49a7-b387-b28e6e333b60.png)

 
2.	Background Color Change and disabled proceed button
 


3.	Background Color Change and disabled proceed button
 
4.	User Details Enter Screen
 


5.	Multicolor Submit button
 
6.	Hotel Pictures Slideshow and user details entered and submit button clicked:
 


7.	“Finding hotels in Chennai, India” Message getting Displayed while fetch()(Proceed button is disabled)
 
8.	Hotel Details Displayed and Proceed Button Enabled
 

9.	Location, Name and Landmark of the Hotel Dispalyed in the UI
 
10.	Proceed Button Clicked and Redirected to Google search with the Correct Hotel Name in the Search box.
 

11.	Console Output
 
 



12.	Error Message Displayed for wrong City Name
 
 
 
 




13.Other Examples:
 
 
 
 
 

Limitations:
	Since it is a free API, only one hotel name is getting listed. Other functionalities, can be added to make it more functional.
Conclusion: 
	This application provides best user experience due to the aesthetic. The project can be enhanced further by adding more functionalities.




