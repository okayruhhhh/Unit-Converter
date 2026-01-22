const units = {
    time: {
        sec: 1,
        min: 60,
        hrs: 3600
    },
    speed: {
        ms: 1,
        kmh: 0.277778,
        mph: 0.44704
    },
    distance: {
        m: 1,
        km: 1000,
        mi: 1609.34
    }
};

function updateUnits(){
	let category=document.getElementById("category");
	let from=document.getElementById("fromUnit");
	let to=document.getElementById("toUnit");
	
	from.innerHTML="";
	to.innerHTML="";

	if(category.value==="time"){
		from.innerHTML = to.innerHTML =
		"<option value='sec'>Seconds</option>" +
                "<option value='min'>Minutes</option>" +
                "<option value='hrs'>Hours</option>";
    	}

	if(category.value==="speed"){
		from.innerHTML = to.innerHTML =
		"<option value='ms'>m/s</option>" +
                "<option value='kmh'>km/h</option>" +
                "<option value='mph'>mph</option>";
    	}
	if(category.value==="distance"){
		from.innerHTML = to.innerHTML =
		"<option value='m'>Meters</option>" +
                "<option value='km'>Kilometers</option>" +
                "<option value='mi'>Miles</option>";
    	}

}


function convert(event){
	event.preventDefault();

	let msg=document.getElementById("msg");
	let v=document.getElementById("value");
	let from=document.getElementById("fromUnit").value;
	let to=document.getElementById("toUnit").value;
	let val=parseFloat(v.value);
	let category = document.getElementById("category").value;


if (isNaN(val)) {
  alert("Please enter a number");
  return;
}

	if (val<=0)	{	alert("Enter Positive Values ");
		return; }
let r=(val*units[category][from])/units[category][to];

msg.innerHTML="Result : "+r.toFixed(2);
}
updateUnits();
