function Job(title, time, date, location, description){
    this.title = title;
    this.time = time;
    this.date = date;
    this.location = location;
    this.description = description;
}

// I wanted this function to be put in a different file but it has to be here for some reason. Javascript hurts me
function claim_job() {
    let popup_str =
    '<div class="gray-background">' +
        '<div class="filler-box"></div>' +
        '<div class="foreground-box">' +
            '<button class="popup-exit" onclick="delete_popup();">x</button>' +
            '<h1>Job Claim Form</h1>' +
            'Name <br>' +
            '<input type="text" name="employee_1st_name" id="employee_1st_name" placeholder="First"> <input type="text" name="employee_last_name" id="employee_last_name" placeholder="Last"> <br>' +
            'email phone <br>' +
            '<input type="email" name=employee_email" id="employee_email placeholder="@gmail.com"> <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"> <br>' +
            'Address <br>' +
            '<input type="text" name="employee_st_address" id="employee_st_address" placeholder="Street Address"> <br>' +
            '<input type="text" name="employee_st_address2" id="employee_st_address2" placeholder="Street Address Line 2">  <br>' +
            '<input type="text" name="employee_city" id="employee_city" placeholder="City"> <input type="text" name="employee_region" id="employee_region" placeholder="Region"> <br>' +
            '<input type="text" name="employee_zip" id="employee_zip" placeholder="zip code">' +
            '<select name="country-dropdown" id="country-dropdown">' +
                '<option value="United States">United States</option>' +
                '<option value="Canada">Canada</option>' +
                '<option value="Mexico">Mexico</option>' +
                '<option value="United Kingdom">United Kingdom</option>'+
            '</select> <br>' +
            'Certification/Skills <br>' +
            '<input type="text" name="employee_skills" id="employee_skills"> <br>' +
            '<button>User Profile Information</button><br>' +
            '<button>Submit</button>' +
        '</div>' +
    '</div>';
    const popup_div = document.getElementById("popup_div");
    popup_div.insertAdjacentHTML("afterBegin", popup_str);
}

function unclaimed_job_more_info() {
    let popup_str =
    '<div class="gray-background">' +
        '<div class="filler-box"></div>' +
        '<div class="foreground-box">' +
        '<button class="popup-exit" onclick="delete_popup();">x</button>' +
        '<h1>Job Title - Location</h1>' +
        'Date | Start Time - End Time | Pay Rate <br>' +
        'Simple job description... <br><br>' +
        'Certifications and skills nessesary/recommended<br>' +
        'Report to (location) at (time).<br>' +
        'Map of Location (link)<br>' +
        '<button>Claim</button> <button>Cancel</button><br>' +
        '</div>' +
    '</div>';
    const popup_div = document.getElementById("popup_div");
    popup_div.insertAdjacentHTML("afterBegin", popup_str);
}

function delete_popup() {
    document.getElementById("popup_div").innerHTML = ""; // This just deletes the popup
}

const job_1 = new Job("Cook", "7:30-12:30", "7/7/25", "The restarant", "You will cook food");

//document.write("<div class='job-table'>");

const dumb_box = document.getElementById("dumb-box"); // This a reference to the dumb-box element 
let text_1 = "<div class='job-table'>"; // This is the text that it inserts to dumb-box
dumb_box.insertAdjacentHTML("afterBegin", text_1); // This places the text at the end of the dumb-box children

for (let i = 0; i < 5; i++) {
    if(i % 2 == 0)
    {
        let tmp_str = "<div class='job-card'>" +
            job_1.title + " | " + job_1.time + " | " + job_1.date + " | " + job_1.location +
            "<br>" + 
            job_1.description +
            "<br>" +
            "<button class='button-purple' onclick='claim_job();'> Claim </button>" +
            "<button class='button-orange' onclick='unclaimed_job_more_info();'> More Info </button>" +
        "</div>";
        dumb_box.insertAdjacentHTML("afterBegin", tmp_str); // This places the text at the end of the dumb-box children
    }
    else
    {
        let tmp_str = "<div class='job-card-odd'>" +
            job_1.title + " | " + job_1.time + " | " + job_1.date + " | " + job_1.location +
            "<br>" +
            job_1.description +
            "<br>" +
            "<button class='button-purple' onclick='claim_job();'> Claim </button>" +
            "<button class='button-orange'> More Info </button>" +
        "</div>";
        dumb_box.insertAdjacentHTML("afterBegin", tmp_str); // This places the text at the end of the dumb-box children
    }

}
//document.write("</div>");