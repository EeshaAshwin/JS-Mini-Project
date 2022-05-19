
//Hotel Images Slideshow		
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;

  if (slideIndex > slides.length)
  {
	  slideIndex = 1
  }  
  slides[slideIndex-1].style.display = "inline-block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//Setting the proceed button to disable	
let input = document.querySelector("#hotel");
let button = document.getElementById("proceed");
button.disabled = true;
		 
// Hotel API call
const options = {
method: 'GET',
headers: {
	'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
	'X-RapidAPI-Key': '857aefe70fmsh183800c849462aep1d48fajsn6337437f8a8a'
	}
};
async function getCityName() {
const city = document.getElementById("cityname").value
const cname = (document.getElementById("country")).value
display.innerHTML = "Finding hotels in " +city+", "+cname+"...";
const api = 'https://hotels4.p.rapidapi.com/locations/v2/search?query=';
const url = api + city;
const response = await fetch(url, options)
.then(response => response.json())
.then(data => {
	console.log(data);
	displayResponse(data);
	})
.catch(err => {console.error("Invalid City Name! Enter the correct name!")
				const msg = document.getElementById("hotel");
				msg.innerHTML = "Invalid City Name! Enter the correct name!"
	});

}

//Display API Result
function displayResponse(data){
const hoteldiv = document.getElementById("hotel");
const location = data.suggestions[0].entities[0].caption;
console.log(location);
const Locheading = document.createElement("h2");
Locheading.innerHTML = "Location: "+location;
hoteldiv.appendChild(Locheading);
const hotelname = data.suggestions[1].entities[0].name;
const Nameheading = document.createElement("h1");
Nameheading.innerHTML = "Hotel Name:" +hotelname;
hoteldiv.appendChild(Nameheading);
const hotellandmark = data.suggestions[2].entities[0].name;
const Lmarkheading = document.createElement("h4");
Lmarkheading.innerHTML = "Landmark: Near " +hotellandmark;
hoteldiv.appendChild(Lmarkheading);
stateHandle(hotelname);
}

//Enable Proceed Button
function stateHandle(hotelname) {
	button.disabled = false; //button is enabled
	button.onclick = function() {
	location.href='https://www.google.com/travel/hotels?q='+hotelname;
	}
}
		