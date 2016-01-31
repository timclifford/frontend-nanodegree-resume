// Bio info.

var bio = {
	"name": "Tim Clifford",
	"role": "Front-end Web Developer",
	"contacts": {
		"mobile": "555-555-555",
		"email": "timmarkclifford@gmail.com",
		"github": "timclifford",
		"twitter": "@timmclifford",
		"location": "Bristol, UK"
	},
	"welcomeMessage": "Welcome, this is my project 2 demo for the Front-end Web Developer course.",
	"skills": [
		"HTML5", "PHP", "CSS3", "JS", "Wordpress", "Drupal"
	],
	"biopic": "images/me.jpg"
};

// Display bio infomation to page.

bio.display = function() {

	// Adding bio.name and bio.role to header.
	var formattedHeader = HTMLheaderName.replace("%data%", bio.name);
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	var addClass = " class=\"white-text\">";
	var styledHeaderRole = formattedHeaderRole.substring(0,5) + addClass + bio.role + formattedHeaderRole.substring(6);
	var concatHeader = formattedHeader + styledHeaderRole;

	// Adding BioPic to header.
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	
	// Adding welcome message.
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	
	// #header data all in one place.
	$("#header").prepend(concatHeader);
	$("#header").append("<hr>");
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMessage);

	// Adding Contact details.
	var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"].mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio["contacts"].email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio["contacts"].twitter);
	var formattedGitHub = HTMLgithub.replace("%data%", bio["contacts"].github);
	var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"].location);
	var concatContactDetails = formattedMobile + formattedEmail + formattedTwitter + formattedGitHub + formattedLocation;
	
	// Appending details to #topContacts div.
	$("#topContacts").append(concatContactDetails);

	//Append same contact details to footer.
	$("#footerContacts").append(concatContactDetails);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
};

// Education info.
var education = {
	"schools": [
	  {
		"name": "Swansea University",
		"location": "Swansea",
		"degree": "Ancient and Medieval History",
		"major": "2:1 (Ba)",
		"dates": "2007-2011",
		"url": "http://www.swansea.ac.uk/"
	  },
	  {
	  	"name": "Monmouth Comprehensive School",
		"location": "Monmouth, Monmouthshire, UK",
		"degree": "none",
		"major": "A-levels: A, B, C",
		"dates": "2001-2010",
		"url": "http://monmouthcomprehensive.org.uk/"
	  }
	],
	"onlineCourses": [
	  {
		"title": "Front-end Web Developer",
		"school": "Udacity",
		"date": "2016",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	  },
	  {
	  	"title": "PHP Higher Structures II & Zend Framework 2 Training",
		"school": "Zend",
		"date": "2015",
		"url": "http://framework.zend.com/learn/"
	  }
	]
};

// Display education infomation to page.

education.display = function() {
	for (var school in education.schools) {
		// Adds <div class="education-entry"></div>.
        $("#education").append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var schoolURL = HTMLschoolName.replace("%data%", education.schools[school].url);
        $(".education-entry:last").append(schoolDates + schoolLocation + "<br>" + schoolName + schoolDegree + schoolMajor + "<br>" + schoolURL);
    }

    // Appends <h3>Online Classes</h3>.
    $("#education").append(HTMLonlineClasses);

    for (var course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var onlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var onlineCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        var onlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var onlineCourseDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);

        $(".education-entry:last").append(onlineCourseDate + "<br>" + onlineCourseTitle + onlineCourseUrl + onlineCourseSchool);
    }
};

// Work Info.

var work = {
	"jobs": [
	  {
		"employer": "Worthlearning",
		"title": "Head of Technology",
		"location": "Monmouth, Monmouthshire",
		"dates": "April 2014" + " - " + "current",
		"description": "Working in a small training company who is responsible for the implementation and maintenance of all online training. Including design and delivery of our Learning Management System."
	  },
	  {
	  	"employer": "Virtual Creations",
		"title": "Director - Web Designer and Web Developer",
		"location": "Bristol",
		"dates": "April 2011" + " - " + "April 2014",
		"description": "Co-founder of a web design and development company in Bristol. Worked on small brochure sites all the way to large community solutions for FTSE100 companies."
	  }
	]
};

// Add work data to the page.

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		// Concatenate work.jobs.employer and work.jobs.title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		// Location and dates
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

var projects = {
	"projects": [
	  {
		"title": "Worthlearning Brand",
		"dates": "April- June 2014",
		"description": "Creation of the Worthlearning brand, including logo and stationary design and a set of corporate guidelines.",
	  	"images": [
	  		"images/wl.jpg",
	  		"images/wldesignprocess.jpg",
	  		"images/wlgold.jpg",
	  		"images/wlstationary.jpg"
	  	]
	  },
	  {
		"title": "Real Estate Company Logo design",
		"dates": "July- Aug 2014",
		"description": "Design of a number of concept designs and revised logo, including all stationary design in printable formats.",
	  	"images": [
	  		"images/conceptUPL.jpg",
	  		"images/conceptUPL2.jpg",
	  		"images/finalUPL.jpg",
	  		"images/UPL.png"
	  	]
	  }
	]
};

// Append project data to the page.
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		// Append all in one place.
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

// Call display functions.
bio.display();
education.display();
work.display();
projects.display();

// Append the map. 
$("#mapDiv").append(googleMap);

// Course playground stuff.
// Click locations.

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  //logClicks(x,y);
});

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

var workLocations = locationizer(work);