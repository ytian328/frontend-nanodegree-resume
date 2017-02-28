

var bio = {
		"name": "Yuan Tian",
		"role": "CS major student",
		"email": "ytian1987@gmail.com",
		"github": "https://github.com/ytian328",
		"twitter" : "",
		"blog" : "",
		"location": "Piscataway, NJ",
		"picture": "./images/fry.jpg",
		"welcomeMsg": "",
		"skills": {
			"coding": ["java", "python", "c/c++", "HTML", "JavaScript", "XML", "Perl"],
			"techenvir": ["MongoDB", "MySQL", "Hadoop",  "MATLAB", "AWS", "Amazon Product Advertising API", "JSP", "JQuery"],
			"os": ["Linux", "Windows"]
		}
};
var education = {
		"schools": [
			{
				"institution": "Rutgers University, New Brunswick",
				"grad": "May 2017",
				"gpa": 3.67,
				"major": "Computer Science",
				"degree": "M.S.",
				"location": "Piscataway, NJ"
			},
			{
				"institution": "Rutgers University, New Brunswick",
				"grad": "Oct 2015",
				"gpa": 3.84,
				"major": "Chemistry",
				"degree": "Ph.D.",
				"location": "Piscataway, NJ"
			},
			{
				"institution": "Nanjing University",
				"grad": "May 2010",
				"gpa": 4.35,
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
				"description":["•Managed teaching labs, conducted recitation and office hours.",
					"•Prepare instructional materials and classroom displays."]
			},
			{
				"title":"Research Assistant",
				"employer": "Rutgers University",
				"date": "Sept. 2014 - Aug. 2015",
				"location": "Piscataway, NJ",
				"description":["•Managed research lab.", 
					"•Mentored junior researchers, advising on practical work, skills, methods and techniques."]
			}
			
		]
			
};

var projects = {
		"projects":[
			{
				"title": "Motion Segmentation Via Subspace Clustering",
				"date": "Oct. 2016 - Dec. 2016",
				"description": ["•Studied the application scope and robustness of different subspace clustering algorithms in MATLAB.",
					"•Implemented sparse subspace clustering (SSC) and sparse additive subspace clustering (SASC) algorithms.",
					"•Applied SSC and SASC to Hopkins-155 dataset (oligo-objects) and dataset extracted from home-made videos (many-objects).", 
					"•SASC achieved similar performance with SSC on well collected data, while overwhelmed SSC on partially collapsedand distorted data. "]
			},
			{
				"title": "Women Clothing Reviews Integration Project",
				"date": "Jan. 2016 - Apr. 2016",
				"description": ["•Scraped   clothing   information   from   multiple   clothing   retailers’ websites   using   ParseHub   and  Amazon   productadvertising API (Java), and stored information in MongoDB.",
						"•Integrated clothing items by hierarchical clustering using semantic similarity measurement of item names and multi-field matching.",
						"•Extracted pros and cons from customer reviews using Stanford CoreNLP tool.",
						"•Developed a user interface using Python Django, supporting searching on the integrated clothing items and displayingitem information.",
						"•3K items are analyzed, about 8% of which were clustered. Few false positive clustering were detected, while falsenegative clustering existed. Pros and cons keywords were extracted from user reviews."]

			},
			{
				"title": "Yelp Recommender System",
				"date": "Nov. 2015 - Dec. 2015",
				"description": ["•Developed a recommender system based on item based collaborative filtering algorithm.",
						"•2.7M reviews from 1M users to 10K restaurants were analyzed, manipulating their JSON data by MongoDB.",
						"•Item co-ocurrence matrix and indicator matrix were computed using Hadoop MapReduce.",
						"•Was able to provide top recommended restaurant to users near their locations."]
			},
			{
				"title": "Web Course Registration System",
				"date": "Jun. 2014 - Jul. 2014",
				"description": ["•Developed a multi-function course registration system using Java, manipulating multi-table database in MySQL.",
						"•Developed a web-based interface using JSP.",
						"•Support multi-type users with difference authentication, registering/dropping class, and special permission number granting.",
						"•Worked as project leader, managing collaboration and project progress."]
			}
		]
};

bio.displaySkills = function() {
	$("#header").append(HTMLskillsStart);
	$("#skills-h3").append(HTMLskills.replace("%data%", bio.skills.coding));
	$("#skills-h3").append(HTMLskills.replace("%data%", bio.skills.techenvir));
	$("#skills-h3").append(HTMLskills.replace("%data%", bio.skills.os));
};

education.display = function() {
	if(education.schools != null) {
		for(var i = 0; i < education.schools.length; i ++) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].institution) + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].grad));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].major));		
		}
	}
}

bio.displayBio = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLbioPic.replace("%data%", bio.picture));
	$("#topContacts").prepend(HTMLemail.replace("%data%", bio.email));
	$("#topContacts").prepend(fGithub = HTMLgithub.replace("%data%", bio.github));
};

projects.display = function(){
	if(projects.projects != null) {	
		for(i = 0; i < projects.projects.length; i ++) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[i].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[i].date));
			for(var j = 0; j < projects.projects[i].description.length; j ++) {
				$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[i].description[j]));
			}
		}
	}
};

work.display = function() {
	if(work.jobs != null) {	
		for(var i = 0; i < work.jobs.length; i ++) {
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[i].employer + HTMLworkTitle.replace("%data%",work.jobs[i].title)));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[i].date));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[i].location));
			for(var j = 0; j < work.jobs[i].description.length; j ++){
				$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[i].description[j]));
			}
		}
	}
}
 


var fContactGerneric = HTMLcontactGeneric.replace("%data%", bio.mobile);
var fMobile = HTMLmobile.replace("%data%", bio.mobile);

var fBiopic = HTMLbioPic.replace("%data%", bio.picture);
var fWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var fSkills = HTMLskills.replace("%data%", bio.skills);





bio.displayBio();
bio.displaySkills();
projects.display();
work.display();
education.display();





