/* Input Search From Focus-In/Out */
$(".inputForm").focusin(function(){
	$(this).prev("label").addClass("inputLabel-focusIn");
});

// Input Search From Focus-Out */
$(".inputForm").focusout(function(){
	var inputForm = $(this).val();

	if (inputForm.length > 0) {
		$(this).prev("label").addClass("inputLabel-focusIn");
	} else {
		$(this).prev("label").removeClass("inputLabel-focusIn");
	}
});

/* Input Onward/Reture Date Focus-In/Out */
$("#input-label-onward-date, #input-label-return-date").focusin(function(){
	$(this).attr("type", "date");
});

// Input Onward/Reture Date Focus-Out */
$("#input-label-onward-date, #input-label-return-date").focusout(function(){
	var inputFormDate = $(this).val();

	if (inputFormDate.length > 0) {
		$(this).attr("type", "date");
	} else {
		$(this).attr("type", "text");
	}
});

/* Pass Input-From's Locations to Input field */
// From Locations Data
var inputFromList = [
	{ fromLocation : "Arch Gate"},
	{ fromLocation : "Medical College"},
	{ fromLocation : "Clock Tower"},
];

var optionFrom;
var inputFromDatalist = $("#input-from-list");

for (var i = 0; i < inputFromList.length; i++) {
	optionFrom = $("<option></option>");
	optionFrom.attr("value", inputFromList[i].fromLocation);
	inputFromDatalist.append(optionFrom);
}

/* Pass Input-To's Locations to Input field */
// To Locations Data
var inputToList = [
	{ toLocation : "Clock Tower"},
	{ toLocation : "Medical College"},
	{ toLocation : "Arch Gate"}
];

var optionTo;
var inputToDatalist = $("#input-to-list");

for (var i = 0; i < inputToList.length; i++) {
	optionTo = $("<option></option>");
	optionTo.attr("value", inputToList[i].toLocation);
	inputToDatalist.append(optionTo);
}

// Data Filter
$("#input-label-from").change(function(){
	var dataSelect = $(this).val();
	console.log(dataSelect);

	$("#input-to-list").find("option[value='"+dataSelect+"']").remove();
});