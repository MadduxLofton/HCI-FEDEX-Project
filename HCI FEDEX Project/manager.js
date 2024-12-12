class Job {
    constructor(title, date, job_location, description, start_time, end_time, pay, skills, map_link, employee_count, employees_needed) {
        this.title = title;
        this.date = date;
        this.job_location = job_location; // location is a reserved word
        this.description = description;
        this.start_time = start_time;
        this.end_time = end_time;
        this.pay = pay;
        this.skills = skills;
        this.map_link = map_link;
        this.employee_count = employee_count;
        this.employees_needed = employees_needed;
    }
}

// I wanted this function to be put in a different file but it has to be here for some reason. Javascript hurts me
function edit_job()
{
    let popup_str =
    '<div class="gray-background">' +
        '<div class="filler-box"></div>' +
        '<div class="profile-foreground-box">' +
            '<div class="popup-title-center">' +
                'Edit Job Post' +
                '<button class="popup-exit" onclick="delete_popup();">x</button>' +
            '</div>' +
            '<div class="popup-left">' +
                'Job Type <br>' +
                '<select name="job-type-dropdown" id="job-type-dropdown">' +
                    '<option value="job-1">Job 1</option>' +
                    '<option value="job-2">Job 2</option>' +
                    '<option value="job-3">Job 3</option>' +
                    '<option value="job-4">Job 4</option>' +
                '</select>' +
                '<br><br>Time <br>' +
                '<input type="time" id="start_time" name="start_time"> - <input type="time" id="end_time" name="end_time"></input>' +
            '</div>' +
            '<div class="popup-center">' +
                'Location<br>' +
                '<select name="location-dropdown-2" id="location-dropdown-2">' +
                    '<option value="Starkville">Starkville</option>' +
                    '<option value="Jackson">Jackson</option>' +
                    '<option value="Hattiesburg">Hattiesburg</option>' +
                    '<option value="Oxford">Oxford</option>' +
                '</select>' +
                '<br><br>Pay Rate<br>' +
                '<select name="pay-dropdown" id="pay-dropdown">' +
                    '<option value="9$">9$</option>' +
                    '<option value="10$">10$</option>' +
                    '<option value="11$">11$</option>' +
                    '<option value="12$">12$</option>' +
                '</select>' +
            '</div>' +
            '<div class="popup-right">' +
                'Date <br>' +
                '<input type="date" id="start-date" name="start-date">' +
                '<br><br>Employee Count <br>' +
                '<input type="text" name="employee-count" id="employee-count">' +
            '</div>' +
            '<div class="edit-job-description">Description</div>' +
            '<textarea rows="6" name="job-description" id="job-description"></textarea>' +
            '<button class="claim-job-submit" onclick="delete_popup();">Submit</button>' +
        '</div>' +
    '</div>';
    const popup_div = document.getElementById("popup_div");
    popup_div.insertAdjacentHTML("afterBegin", popup_str);
}

function more_info_claim_job() 
{
    /*
    This function exists because when more info button is pressed
    popup needs to be cleared to prevent odd behavior
    */ 
    delete_popup();
    claim_job();
}

function unclaimed_job_more_info(title, job_location, date, start_time, end_time, pay, description, skills)
{
    //title, job_location, date, start_time, end_time, pay, description, skills, map_link
    popup_str = 
    '<div class="gray-background">' +
        '<div class="filler-box"></div>' +
        '<div class="foreground-box">' +
        '<div class="popup-title">' + title + ' - ' + job_location + '</div>' +
        '<div class="popup-date">' +
            date + 
        '</div>' +
        '<div class="popup-time">' +
            start_time + ' - ' + end_time +
        '</div>' +
        '<div class="popup-pay">' +
            pay +
        '</div>' +
        '<div class="popup-text">' +
            '<br>' +
            description + '<br><br>' +
            skills + '<br>' +
            'Report to ' + job_location + ' at ' + start_time + '.<br>' +
            'Map of Location (link)<br><br>' +
        '</div>' +
        '<button class="button-orange" onclick="more_info_claim_job();"> Claim </button> <button class="button-gray" onclick="delete_popup();"> Cancel </button>' +
        '</div>' +
    '</div>';
    const popup_div = document.getElementById("popup_div");
    popup_div.insertAdjacentHTML("afterBegin", popup_str);
}

function delete_popup() {
    document.getElementById("popup_div").innerHTML = ""; // This just deletes the popup
}

function print_job_card(job)
{
    //title, job_location, date, start_time, end_time, pay, description, skills, map_link
    let funct_str =
    "'" + job.title + "'" +
    "," +  "'" + job.job_location + "'" +
    "," +  "'" + job.date + "'" +
    "," +  "'" + job.start_time + "'" +
    "," +  "'" + job.end_time + "'" +
    "," +  "'" + job.pay + "'" +
    "," +  "'" + job.description + "'" +
    "," +  "'" + job.skills + "'" +
    "," +  "'" + job.map_link + "'";

    employee_count = job.employee_count;
    employees_needed = job.employees_needed;

    if (employee_count < employees_needed / 2)
    {
        var box_color = "<div class='job-card-header'><div class='employee-count-bad'>";
    }
    else if (employee_count < employees_needed)
    {
        var box_color = "<div class='job-card-header'><div class='employee-count-mid'>";
    }
    else
    {
        var box_color = "<div class='job-card-header'><div class='employee-count-good'>";
    }

    // There are so many strings within strings this section needs to use ` as a string constructor
    let tmp_str_4 =
    job.title + ` | ` + job.start_time + ` - ` + job.end_time + ` | ` + job.date + ` | ` + job.job_location + `</div>`;

    let tmp_str_5 = employee_count + `/` + employees_needed + ` Employees</div>`;

    let tmp_str_6 = 
    job.description +
    `<br><br>` +
    `<div class='left-block'>` +
        `<button class="button-purple" onclick="edit_job();"> Edit </button>` +
    `</div>` +
    `<div class='right-block'>` +
        `<button class="button-orange" onclick="unclaimed_job_more_info(`;
    //    let tmp_str_1 = tmp_str_4.concat(box_color, tmp_str_5, tmp_str_6);
    let tmp_str_1 = box_color.concat( tmp_str_5, tmp_str_4, tmp_str_6);

    let tmp_str_2 =
        `);"> Employees </button></div>`;

    let tmp_str_3 = tmp_str_1.concat(funct_str, tmp_str_2);
    //dumb_box.insertAdjacentHTML("beforeEnd", tmp_str_3); // This places the text at the end of the dumb-box children

    return tmp_str_3;
}
function print_job_card_even(job) 
{
    let tmp_div_str_1 ="<div class='job-card'>";
    let tmp_str = print_job_card(job);
    let tmp_div_end = "</div>";

    let tmp_str_here = tmp_div_str_1.concat(tmp_str, tmp_div_end);
    dumb_box.insertAdjacentHTML("beforeEnd", tmp_str_here); // This places the text at the end of the dumb-box children
}
function print_job_card_odd(job)
{
    let tmp_div_str_1 ="<div class='job-card-odd'>";
    let tmp_str = print_job_card(job);
    let tmp_div_end = "</div>";

    let tmp_str_here = tmp_div_str_1.concat(tmp_str, tmp_div_end);
    dumb_box.insertAdjacentHTML("beforeEnd", tmp_str_here); // This places the text at the end of the dumb-box children
}

function profile_popup() {
    popup_str = 
    '<div class="gray-background">' +
        '<div class="filler-box"></div>' +
        '<div class="profile-foreground-box">' +
        '<button class="popup-exit" onclick="delete_popup();">x</button>' +
        '<div class="profile-left">' +
            '<img src="blank-profile-pictureBIG.jpg"> <br><br>' +
            '<div class="line-below">Skills</div>' +
            'Packaging<br>Scanning<br>Trucking<br><br><br>' +
            '<div class="line-below">Certifications</div>'+
            'Forklift<br> CDL' +
        '</div>' +
        '<div class="profile-right">' +
        '<div class="profile-header">' +
            'John Doe' +
        '</div>' +
        'Attendance: 97%<br>' +
        'Punctuality: 74%<br><br>' +
        '<div class="line-below"> About </div>' +
        '<div class="profile-mini-header">Contact Information</div><br>' +
        'Phone: 555-555-0155<br>' +
        'Email: john.doe@example.com<br>' +
        'Address: 123 Not A Real Place Dr. <br><br>' +
        '<div class="profile-mini-header">Basic Information</div><br>' +
        'Birthday: Febuary, 29th, 2001<br>' +
        'Gender: Male<br><br>' +
        '<button class="button-gray" onclick="edit_profile_popup();"> Edit </button>' + 
        '</div>' + 
    '</div>';

    const popup_div = document.getElementById("popup_div");
    popup_div.insertAdjacentHTML("afterBegin", popup_str);
}

function edit_profile_popup() {
    delete_popup();
    popup_str = 
    '<div class="gray-background">' +
        '<div class="filler-box"></div>' +
        '<div class="profile-foreground-box">' +
        '<button class="popup-exit" onclick="delete_popup();">x</button>' +
        '<div class="profile-left">' +
            '<img src="blank-profile-pictureBIG.jpg"> <br><br>' +
            '<div class="line-below">Skills</div>' +
            '<textarea id="skills" name="skills" rows="4"></textarea><br><br>' +
            '<div class="line-below">Certifications</div>'+
            '<textarea id="certifications" name="certifications" rows="4"></textarea><br><br>' +
        '</div>' +
        '<div class="profile-right">' +
        '<div class="profile-header">' +
            'John Doe' +
        '</div>' +
        'Attendance: 97%<br>' +
        'Punctuality: 74%<br><br>' +
        '<div class="line-below"> About </div>' +
        '<div class="profile-mini-header">Contact Information</div><br>' +
        'Phone: <input type="tel" id="phone" name="phone"><br>' +
        'Email: <input type="email" name=employee_email" id="employee_email placeholder="@gmail.com"><br>' +
        'Address:<br>' +
        '<input type="text" name="employee_st_address" id="employee_st_address" placeholder="Street Address"> <br>' +
        '<input type="text" name="employee_st_address2" id="employee_st_address2" placeholder="Street Address Line 2">  <br>' +
        '<input type="text" name="employee_city" id="employee_city" placeholder="City"><br>' +
        '<input type="text" name="employee_region" id="employee_region" placeholder="Region"> <br>' +
        '<input type="text" name="employee_zip" id="employee_zip" placeholder="zip code"><br>' +
        '<select name="country-dropdown" id="country-dropdown">' +
            '<option value="United States">United States</option>' +
            '<option value="Canada">Canada</option>' +
            '<option value="Mexico">Mexico</option>' +
            '<option value="United Kingdom">United Kingdom</option>'+
        '</select> <br><br>' +
        '<div class="profile-mini-header">Basic Information</div><br>' +
        'Birthday: Febuary, 29th, 2001<br>' +
        'Gender: Male<br><br>' +
        '<button class="button-gray" onclick="delete_popup();"> Cancel </button>' + 
        '<button class="button-orange" onclick="delete_popup();"> Save </button>' + 
        '</div>' + 
    '</div>';

    const popup_div = document.getElementById("popup_div");
    popup_div.insertAdjacentHTML("afterBegin", popup_str);
}

                //Job(title, date, job_location, description, start_time, end_time, pay, skills, map_link) 
const job_1 = new Job("Package Unloader", "1/7/25", "Station", "Unloading Packages", "7:30am", "5:00pm", "15$/hr", "you need skills I guess", "map_link", 100, 300);
const job_2 = new Job("Forklift Driver", "1/7/25", "Ramp", "Driving forklift", "7:30am", "5:00pm", "15$/hr", "you need skills I guess", "map_link", 200, 300);
const job_3 = new Job("Box Mover", "1/8/25", "Station", "Moving Boxes", "7:30am", "5:00pm", "15$/hr", "you need skills I guess", "map_link", 300, 300);
const job_4 = new Job("Package Mover", "1/8/25", "Ramp", "Moving Packages", "7:30am", "5:00pm", "15$/hr", "you need skills I guess", "map_link", 100, 300);
const job_5 = new Job("Plane Unloader", "1/9/25", "Hub", "Unloading the plane", "7:30am", "5:00pm", "15$/hr", "you need skills I guess", "map_link", 100, 300);
let job_array = [job_1, job_2, job_3, job_4, job_5];
const dumb_box = document.getElementById("dumb-box"); // This a reference to the dumb-box element 

i = 0;
for (job in job_array)
{
    if(i % 2 == 0)
    {
        print_job_card_even(job_array[i]);
    }
    else
    {
        print_job_card_odd(job_array[i]);
    }
    i++;
}
