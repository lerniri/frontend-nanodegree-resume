
//******************** VARIABLES \ OBJECS ************************************************

var bio = {
	"name" : "Ira Lerner",
	"role" : "Web Developer",
	"contacts" : {
      	"mobile": "+79999999999",
      	"email": "personal@irina-lerner.com",
      	"github": "lerniri",
      	"blog":"",
      	"twitter": "@lerniri",
      	"location": "Moscow, Russia"
     },
	"welcomeMessage": "Hi, I'm Ira! I call myself sort of wide-range IT specialist and I've got 10 yrs experience at various stages of SDLC. My current focus is Wev Development and I'm hoping to be a front-end dev ninja very soon!",
	"skills": [
		{
			"skill":"Analytical mind",
			"logo": "images/analytics.png"
		},
		{
			"skill":"Leader",
			"logo":"images/leader.png"
		},
		{
			"skill":"Learning freak",
			"logo": "images/learning.png"
		},
		{
			"skill":"Client-oriented",
			"logo":"images/client.png"
		},
		{
			"skill":"Team player",
			"logo":"images/team.png"
		}

	],

	"biopic": "images/iralerner_avatar.png",
	"display": function displayBio() {

		// name , lastname and role
		$('#header').prepend(HTMLheaderRole.replace("%data%", bio.role));
		$('#header').prepend(HTMLheaderName.replace("%data%", bio.name));

		// contact info
		$('#topContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$('#topContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
		$('#topContacts').append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$('#topContacts').append(HTMLgithub.replace("%data%", bio.contacts.github));
		$('#topContacts').append(HTMLblog.replace("%data%", bio.contacts.blog));
		$('#topContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));


		$('#header').append(HTMLbioPic.replace("%data%", bio.biopic));
		$('#header').append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

		//skills
		// var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
		// var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
		$('#header').append(HTMLskillsStart);

		for (skill in bio.skills) {

			var skillhtml = HTMLskills.replace("%data%", bio.skills[skill].skill);
			$('#skills').append(skillhtml.replace("%logo%", bio.skills[skill].logo))
		}

	}
};

var education = {
	"schools": [
		{
			"name": "State Management University",
			"location": "Moscow, Russia",
			"degree": "Personnel Management",
			"majors": ["-"],
			"dates": 2002,
			"url": "http://guu.ru/"
		}

	 ],
	"onlineCourses": [
		{
			"title": "Web Design",
		    "school": "Treehouse Island, Inc",
		    "date": 2014,
		    "url": "http://teamtreehouse.com/tracks/web-design"
		},
		{
			"title": "Front-End Web Development",
		    "school": "Treehouse Island, Inc",
		    "date": 2014,
		    "url": "http://teamtreehouse.com/tracks/front-end-web-development"
		},
		{
			"title": "HTML5 & CSS3 Fundamentals: Development for Absolute Beginners",
		    "school": "Microsoft Virtual Academy",
		    "date": 2014,
		    "url": "http://www.microsoftvirtualacademy.com/training-courses/html5-css3-fundamentals-development-for-absolute-beginners"
		},
		{
			"title": "JavaScript Fundamentals for Absolute Beginners",
		    "school": "Microsoft Virtual Academy",
		    "date": 2014,
		    "url": "http://www.microsoftvirtualacademy.com/training-courses/javascript-fundamentals-for-absolute-beginners"
		}
	],
	display: function displayEducation() {
		if (education.schools === undefined || education.schools.length < 0) {
			return;
		}

		for (school in education.schools) {

			HTMLschoolName.replace("%data%", education.schools[school].name) + 	HTMLschoolDegree.replace("%data%", education.schools[school].degree)


			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append( HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree) );
			$('.education-entry:last').append( HTMLschoolDates.replace("%data%", education.schools[school].dates) );
			$('.education-entry:last').append( HTMLschoolLocation.replace("%data%", education.schools[school].location) );
			$('.education-entry:last').append( HTMLschoolMajor.replace("%data%", education.schools[school].majors) );
		}

		if (education.onlineCourses === undefined || education.onlineCourses.length < 0) {
			return;
		}


		$('#education').append(HTMLonlineClasses);
		$('#education').append(HTMLschoolStart);

		for (course in education.onlineCourses) {

			var titlehtml = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);

			$('.education-entry:last').append( titlehtml.replace("%courseurl%", education.onlineCourses[course].url) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school) );
			$('.education-entry:last').append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].date));
			//$('.education-entry:last').append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));

		}

	}
};


var work = {
	"jobs":
	    [{
	     	"employer": "Deutsche Bank",
	     	"title": "Application Owner",
	     	"location": "Moscow, Russia",
	     	"dates": "2009-2014",
	     	"description": "- Was accountable for the ongoing enhancement and maintenance of a application including management of scope.<br>\
							- Was involved in strategic planning of the application. <br> \
							- Ensured availability of all necessary application knowledge and documentation. <br> \
							- Provided functional/technical expertise within the team and to dependent teams. <br>\
							- Ensured system stability through enhancement/maintenance periods.<br>\
							- Was involved on various stages of SDLC: participated in cost estimates, functional design, solution architecture , technical design.<br>\
							- Ensured a smooth/successful transition to the production environment.<br>\
							- Was responsible for driving the delivery of small 'business as usual' enhancements.<br>\
							- Covered collaboration with stakeholders.<br>\
							- Provided L3 application support as required."
	    },
	    {
	    	"employer": "Allied Testing",
	     	"title": "QA Automation Team Lead",
	     	"location": "Moscow, Russia",
	     	"dates": "2007-2009",
	     	"description": "- Responsible for automation of regression / performance test packs.<br>\
							- Reviewed Business requirements, IT Design documents and prepared Test Plans for all assigned project releases.<br>\
							- Managed cross-region automation team (10+ ppl).<br>\
							- Involved in design and development of in-house framework for testing .Net applications in QTP and WinRunner."
	    }],

	"display": function displayWork() {
		if (work.jobs === undefined || work.jobs.length < 0) {
			return;
		}

		for (job in work.jobs) {
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer)+HTMLworkTitle.replace("%data%", work.jobs[job].title));
			$('.work-entry:last').append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
			$('.work-entry:last').append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
			$('.work-entry:last').append(HTMLworkDescription.replace("%data%", work.jobs[job].description));

		}
	}
};


var projects = {
	"projects": [
		{
		  "title": "Online Shop",
	      "dates": "2014" ,
	      "description": "I decided to leave the country, so I needed to sell all my stuff. For that and also for training purposes, I created a moving sale web site and shared accross my\
	      				  friends. From the site it was  possible to browse the goods and book them online. Site was built using HTML5/CSS3/JS/jQuery/MSSQL/PHP ",
	      "images": ["images/pr1_thumb.png"]
		}
	],
	"display": function displayProjects() {
		if (projects.projects === undefined || projects.projects.length < 0) {
			return;
		}

		var proj = projects.projects;
		for (p in proj) {

			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", proj[p].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", proj[p].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", proj[p].description));

			if (proj[p].images !== undefined && proj[p].images.length > 0) {

				for (img in proj[p].images) {

					$(".project-entry:last").append(HTMLprojectImage.replace("%data%", proj[p].images[img]));
				}

			}
		}

	}
};

//***************** GENERAL FLOW ********************************************************************************

//bind scroll event to navigation panel
$("#nav a").bind("click",scrollPage);

// build bio section
bio.display();

//build working section
work.display();

//build project section
projects.display();

//build education section
education.display();

//build map
$("#mapDiv").append(googleMap);
initializeMap();

//display footer
displayFooter(bio.contacts);


//*************** FUNCTIONS ************************************************************************************

function displayFooter(contact_list) {
	if (contact_list === undefined || contact_list.length < 0) {
		return;
	}

	$('#footerContacts').append(HTMLmobile.replace("%data%", contact_list.mobile));
	$('#footerContacts').append(HTMLemail.replace("%data%", contact_list.email));
	$('#footerContacts').append(HTMLtwitter.replace("%data%", contact_list.twitter));
	$('#footerContacts').append(HTMLgithub.replace("%data%", contact_list.github));
	$('#footerContacts').append(HTMLblog.replace("%data%", contact_list.blog));
	$('#footerContacts').append(HTMLlocation.replace("%data%", contact_list.location));
}

function inName() {

	var namearr = bio.name.split(" ");
	var fname 	= namearr[0].toLowerCase();
	var lname 	= namearr[1].toUpperCase();

	namearr[0]	= fname[0].toUpperCase() + fname.slice(1);
	namearr[1]	= namearr[1].toUpperCase();
	console.log(namearr.join(" "));
	return namearr.join(" ");
}


function scrollPage(e) {
	e.preventDefault();
	var target = $("#"+$(this).attr("href").replace("#",""));

	$("html, body").stop().animate({
		scrollTop: target.offset().top

	}, 1000);

}
