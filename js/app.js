var topics = document.querySelectorAll(".topic");
var topic_bodies = [
/*
	["Alien",["Requesting Roommates", "Community Living Agreement (CLA)", "Roles within the Residence Halls"]],
	["Astronaut",["Transfer and Off-Campus Student Life (TOSCL)", "Off-Campus Housing Database", "Good Morning Commuters"]],
	["Athletic Shoe",["RecWell", "Guest Policy"]],
	["Baseball Mitt",["Triple Barrier System"]],
	["Bread",["Scholarships", "Federal Work Study (FWS)", "On-Campus Employment"]],
	["Carrot",["Immunization Form", "Health Insurance", "Services Offered"]],
	["Corn",["Dining/Connector Plans", "Guest Passes", "Dining Dollars"]],
	["Drink",["Student Code of Conduct", "Responsible Action Policy", "Sexual Misconduct"]],
	["Empire State Building",["North Campus", "South Campus"]],
	["Football",["Varsity", "Club", "Intramurals", "Ticketing for Games"]],
	["French Fries",["Terrapin Express"]],
	["Heels",["OrgSync", "Greek Life", "Student Government Association (SGA)", "Campus Senate"]],
	["Motorcycle",["Bikes on Campus", "Bike Shop"]],
	["Muffin Tray",["CANVAS/ELMS", "Checking Email"]],
	["Penguin",["Residence Hall Association (RHA)", "Math Success"]],
	["Purse",["What to (Not) Bring", "Fall Welcome Program", "First Look Fair", "Terps After Dark", "Big Ten Welcome", "President's Welcome"]],
	["Pyramid",["Counseling Center", "Accessibility and Disability Service (ADS)", "Guided Study Sessions (GSS)"]],
	["Racecar",["No Parking Permits for First Year Residents"]],
	["Statue of Liberty",["Multicultural Involvement & Community Advocacy (MICA)", "Inclusive Language Campaign", "Office of Diversity and Inclusion"]],
	["Trolley",["Shuttle-UM", "NextBus App"]],
	["Turtle",["Terp-to-Terp Academic Advice", "Academic Dishonesty", "Honor Pledge"]]
*/

	["Turtle",["Terp-to-Terp Academic Advice", "Academic Dishonesty", "Honor Pledge"]],
	["Motorcycle",["Bikes on Campus", "Bike Shop"]],
	["Drink",["Student Code of Conduct", "Responsible Action Policy", "Sexual Misconduct"]],
	["Muffin Tray",["CANVAS/ELMS", "Checking Email"]],
	["Pyramid",["Counseling Center", "Accessibility and Disability Service (ADS)", "Guided Study Sessions (GSS)"]],
	["French Fries",["Terrapin Express"]],
	["Corn",["Dining/Connector Plans", "Guest Passes", "Dining Dollars"]],
	["Statue of Liberty",["Multicultural Involvement & Community Advocacy (MICA)", "Inclusive Language Campaign", "Office of Diversity and Inclusion"]],
	["Bread",["Scholarships", "Federal Work Study (FWS)", "On-Campus Employment"]],
	["Carrot",["Immunization Form", "Health Insurance", "Services Offered"]],
	["Penguin",["Residence Hall Association (RHA)", "Math Success"]],
	["Purse",["What to (Not) Bring", "Fall Welcome Program", "First Look Fair", "Terps After Dark", "Big Ten Welcome", "President's Welcome"]],
	["Astronaut",["Transfer and Off-Campus Student Life (TOSCL)", "Off-Campus Housing Database", "Good Morning Commuters"]],
	["Heels",["OrgSync", "Greek Life", "Student Government Association (SGA)", "Campus Senate"]],
	["Racecar",["No Parking Permits for First Year Residents"]],
	["Athletic Shoe",["RecWell", "Guest Policy"]],
	["Empire State Building",["North Campus", "South Campus"]],
	["Alien",["Requesting Roommates", "Community Living Agreement (CLA)", "Roles within the Residence Halls"]],
	["Baseball Mitt",["Triple Barrier System"]],
	["Football",["Varsity", "Club", "Intramurals", "Ticketing for Games"]],
	["Trolley",["Shuttle-UM", "NextBus App"]]
];
var title = document.querySelector("#topic_title");
var body = document.querySelector("#topic_body");

setupButtons();

function update(index) {
	title.innerHTML = topic_bodies[index][0];
	var new_body = "";
	for (var j = 0; j < topic_bodies[index][1].length; j++) {
		new_body += ("<li>" + topic_bodies[index][1][j] + "</li>");
	}
	body.innerHTML = new_body;
};

function setupButtons() {
	for (var i = 0; i < topics.length; i++) {
		topics[i].addEventListener('click', update.bind(null, i));
	}
}

/*
function whenClicked(i) {
	return function() {
		title.innerHTML = topic_bodies[i][0];
		var new_body = "";
		for (var j = 0; j < topic_bodies[i][1].length; j++) {
			new_body.concat("<li>" + topic_bodies[i][1][j] + "</li>");
		}
		body.innerHTML = new_body;
	}
}
*/