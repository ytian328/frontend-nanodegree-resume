
/*
templates
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">Mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">Email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">Twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<a href="%data%"><li class="flex-item"><span class="orange-text">Github</span><span class="white-text">%data%</span></li></a>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">Blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">Location</span><span class="white-text">%data%</span></li>';
var HTMLlinkedin = '<a href="%data%"><li class="flex-item"><span class="orange-text">LinkedIn</span><span class="white-text">%data%</span></li></a>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h4 id="skills-h3">Skills at a Glance:</h4><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item" type="disc"><span class="white-text" >%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div><br>';
var HTMLworkDescription = '<p>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div><br>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});


var map;


function initMap() {
	
	var mapOptions = {
		    disableDefaultUI: true
		  };	
	map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
	function locationFinder() {
	    var locations = [];
	    locations.push(bio.location);
	    education.schools.forEach(function(school){
	    	if(jQuery.inArray(school.location, locations) === -1) locations.push(school.location);
	    });
	    work.jobs.forEach(function(job){
	    	if(jQuery.inArray(job.location, locations) === -1) locations.push(job.location);
	    });
	    return locations;
	 }
	
	function callback(results, status) {
	    if (status == google.maps.places.PlacesServiceStatus.OK) {
	    	createMapMarker(results[0]);
	    }
	}
	
	function pinPoster(locations) {
		var service = new google.maps.places.PlacesService(map);
		locations.forEach(function(place){
		      var request = {
		        query: place
		      };
		      service.textSearch(request, callback);
		});	
	}

	function createMapMarker(placeData) {
		var lat = placeData.geometry.location.lat();
		var lng = placeData.geometry.location.lng();
		var name = placeData.formatted_address; 
		var bounds = window.mapBounds;
		var marker = new google.maps.Marker({
		      map: map,
		      position: placeData.geometry.location,
		      title: name
		    });
		var infoWindow = new google.maps.InfoWindow({
		      content: name
		    });
		google.maps.event.addListener(marker, 'click', function() {
		    	infowindow.open(map, marker);
		    });
		bounds.extend(new google.maps.LatLng(lat, lng));
		map.fitBounds(bounds);
		map.setCenter(bounds.getCenter());
	}
	
	
	var locations = locationFinder();
	window.mapBounds = new google.maps.LatLngBounds();
	pinPoster(locations);
}
window.addEventListener('load', initMap);
window.addEventListener('resize', function(e) {
	map.fitBounds(mapBounds);
});