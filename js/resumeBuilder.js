

var bio = {
		"name": "Yuan Tian",
		"role": "CS major student",
		"email": "ytian1987@gmail.com",
		"mobile": "732-***-****",
		"github": "https://github.com/ytian328",
		"twitter" : "",
		"blog" : "",
		"contacts" : [{"location": "Piscataway, NJ"}],
		"picture": "./images.fry.jpg",
		"welcomeMsg": "Welcome!",
		"skills": ["java", "python", "c/c++", "matlab", "r"]	
};
var education = {
		"schools": [
			{
				"institution": "Rutgers University-New Brunswick",
				"grad": "May 2017",
				"gpa": 3.67,
				"major": "Computer Science",
				"degree": "M.S.",
				"location": "Piscataway, NJ"
			},
			{
				"institution": "Rutgers University-New Brunswick",
				"grad": "Oct 2015",
				"gpa": 3.84,
				"major": "Chemistry",
				"degree": "Ph.D.",
				"location": "Piscataway, NJ"
			},
			{
				"institution": "Nanjing University",
				"grad": "May 2010",
				"gpa": 4.37,
				"major": "Chemistry",
				"degree": "B.S.",
				"location": "Nanjing, China"
			}
		]
};

var work = {
		"jobs": [
			{
				"title":"Teaching Assistant",
				"employer": "Rutgers University",
				"date": "Sept. 2010 - Aug. 2014",
				"location": "Piscataway, NJ",
				"description":"Some description"
			},
			{
				"title":"Research Assistant",
				"employer": "Rutgers University",
				"date": "Sept. 2014 - Aug. 2015",
				"location": "Piscataway, NJ",
				"description":"Some description"
			}
			
		]
			
};

var projects = {
		"projects":[
			{
				"title": "name1",
				"date": "time1",
				"description": "description1"
			},
			{
				"title": "name2",
				"date": "time2",
				"description": "description2"
			},
			{
				"title": "name3",
				"date": "time3",
				"description": "description3"
			}
		]
};

projects.display = function(){
	if(projects.projects != null && projects.projects.length != 0) {	
		for(i = 0; i < projects.projects.length; i ++) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[i].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[i].date));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[i].description));
		}
	}
	
};
 

$("#main").append(internationalizeButton);
function inName(name) {
	var newName = name.split(" ");
	newName[0] = newName[0].slice(0,1).toUpperCase() + newName[0].slice(1,newName[0].length).toLowerCase();
	newName[1] = newName[1].toUpperCase();
	return newName.join(" ");
}


var fName = HTMLheaderName.replace("%data%", inName(bio.name));
var fRole = HTMLheaderRole.replace("%data%", bio.role);
var fContactGerneric = HTMLcontactGeneric.replace("%data%", bio.mobile);
var fMobile = HTMLmobile.replace("%data%", bio.mobile);
var fEmail = HTMLemail.replace("%data%", bio.email);
var fGithub = HTMLgithub.replace("%data%", bio.github);
var fBiopic = HTMLbioPic.replace("%data%", bio.picture);
var fWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var fSkills = HTMLskills.replace("%data%", bio.skills);

var fWorkPos = HTMLworkTitle.replace("%data%", work.position);

$("#header").prepend(fRole);
$("#header").prepend(fName);
$("#topContacts").prepend(fEmail);
$("#topContacts").prepend(fMobile);
$("#topContacts").prepend(fGithub);


//insert skills
if(bio.skills != null && bio.skills.length != 0) {
	$("#header").append(HTMLskillsStart);
	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
	
}

//insert work experience
if(work.jobs != null && work.jobs.length != 0) {	
	for(i = 0; i < work.jobs.length; i ++) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[i].employer + HTMLworkTitle.replace("%data%",work.jobs[i].title)));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[i].date));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[i].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[i].description));
	}
}

//insert projects
//if(projects.projects != null && projects.projects.length != 0) {	
//	for(i = 0; i < projects.projects.length; i ++) {
//		$("#projects").append(HTMLprojectStart);
//		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[i].title));
//		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[i].date));
//		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[i].description));
//	}
//}
projects.display();

//initializeMap();




