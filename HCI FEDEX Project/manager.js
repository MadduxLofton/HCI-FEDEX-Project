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

class Employee {
    constructor(name, certs, attend, punct){
        this.name = name;
        this.certs = certs;
        this.attend = attend;
        this.punct = punct;
    }
}

function delete_job_post(job_title, job_location, job_date)
{
    let popup_str =
    '<div class="gray-background">' +
        '<div class="filler-box"></div>' +
        '<div class="foreground-box">' +
            '<div class="profile-header">Are you sure?</div>' +
            job_title + ' at ' + job_location + ' on  ' + job_date  + ' will be removed from the job listing.<br><br>' +
            `<div class='left-block'>` +
                '<button class="button-white" onclick="delete_popup2();"> Cancel </button>' +
            '</div>' +
            `<div class='right-block'>` +
                '<button class="button-black" onclick="delete_popup2();delete_popup();"> Yes </button>' +
            '</div>' +
        '</div>' +
    '</div>';
    const popup_div = document.getElementById("popup_div2");
    popup_div.insertAdjacentHTML("afterBegin", popup_str);
}

// I wanted this function to be put in a different file but it has to be here for some reason. Javascript hurts me
function edit_job(job_title, job_location, job_date)
{
    let function_str = 
    "'" + job_title + "'" +
    "," +  "'" + job_location + "'" +
    "," +  "'" + job_date + "'";

    let popup_str =
    '<div class="gray-background">' +
        '<div class="filler-box"></div>' +
        '<div class="profile-foreground-box">' +
            '<div class="popup-title-center">' +
                'Edit Job Post' +
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
            '<div class="popup-left">' +
                '<button class="button-gray" onclick="delete_popup();"> Cancel </button>' +
            '</div>' +
            '<div class="popup-center">' +
                `<button class="button-orange" onclick="delete_job_post(`;
                
    let popup_str2 = 
                                                    `);">Delete Post</button>` +
            '</div>' +
            '<div class="popup-right">' +
                '<button class="button-purple" onclick="delete_popup();">Save & Publish' +
            '</div>' +
        '</div>' +
    '</div>';

    let tmp_str = popup_str.concat(function_str, popup_str2)
    const popup_div = document.getElementById("popup_div");
    popup_div.insertAdjacentHTML("afterBegin", tmp_str);
}

function remove_employee(employee) {
    if (employee == 1) {employee_name = "Chester Bennington";}
    else if (employee == 2) {employee_name = "Mike Shinoda";}
    else if (employee == 3) {employee_name = "Brad Delson";}
    else if (employee == 4) {employee_name = "Joe Hahn";}
    else if (employee == 5) {employee_name = "Dave Farrell";}
    else if (employee == 6) {employee_name = "Emily Armstrong";}
    else if (employee == 7) {employee_name = "Colin Brittain";}
    else if (employee == 8) {employee_name = "Rob Bourdon";}
    else if (employee == 9) {employee_name = "Serj Tankian";}
    else if (employee == 10) {employee_name = "Daron Malakian";}
    else if (employee == 11) {employee_name = "Shavo Odadjan";}
    else if (employee == 12) {employee_name = "John Dolmayan";}
    else if (employee == 13) {employee_name = "Jacoby Saddix";}
    else if (employee == 14) {employee_name = "Jerry Horton";}
    else if (employee == 15) {employee_name = "Dave Buckner";}
    else if (employee == 16) {employee_name = "Will James";}
    let str_1 = 
    '<div class="gray-background">' +
        '<div class="filler-box"></div>' +
        '<div class="foreground-box">' +
            '<div class="profile-header">Are you sure?</div>';

    let str_2 =
            ' will be removed from this job listing.<br><br>' +
            `<div class='left-block'>` +
                '<button class="button-white" onclick="delete_popup2();"> Cancel </button>' +
            '</div>' +
            `<div class='right-block'>` +
                '<button class="button-black" onclick="delete_popup2();delete_popup();"> Yes </button>' +
            '</div>' +
        '</div>' +
    '</div>';

    popup_str = str_1.concat(employee_name, str_2);

    const popup_div = document.getElementById("popup_div2");
    popup_div.insertAdjacentHTML("afterBegin", popup_str);
}

function employee_info()
{
    let employee_1 = new Employee("Chester Bennington", "Has em", 100, 100);
    let employee_2 = new Employee("Mike Shinoda", "Has em", 100, 100);
    let employee_3 = new Employee("Brad Delson", "Has em", 100, 100);
    let employee_4 = new Employee("Joe Hahn", "Has em", 100, 100);
    let employee_5 = new Employee("Dave Farrell", "Has em", 100, 100);
    let employee_6 = new Employee("Emily Armstrong", "Has em", 100, 100);
    let employee_7 = new Employee("Colin Brittain", "Has em", 100, 100);
    let employee_8 = new Employee("Rob Bourdon", "Has em", 100, 100);
    let employee_9 = new Employee("Serj Tankian", "Has em", 100, 100);
    let employee_10 = new Employee("Daron Malakian", "Has em", 100, 100);
    let employee_11 = new Employee("Shavo Odadjan", "Has em", 100, 100);
    let employee_12 = new Employee("John Dolmayan", "Has em", 100, 100);
    let employee_13 = new Employee("Jacoby Saddix", "Has em", 100, 100);
    let employee_14 = new Employee("Jerry Horton", "Has em", 100, 100);
    let employee_15 = new Employee("Dave Buckner", "Has em", 100, 100);
    let employee_16 = new Employee("Will James", "Has em", 100, 100);

    //title, job_location, date, start_time, end_time, pay, description, skills, map_link
    popup_str = 
    '<div class="gray-background">' +
        '<div class="filler-box"></div>' +
        '<div class="foreground-box-employee-list">' +
            '<div class="popup-title-center">' +
                'Employee List' +
                '<button class="popup-exit" onclick="delete_popup();">x</button>' +
            '</div>' +
            '<table>' +
                '<tr>' +
                    '<th>Name</th>' +
                    '<th>Certifications</th>' +
                    '<th>Attendance</th>' +
                    '<th>Punctuality</th>' +
                    '<th></th>' +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_1.name + '</td>' +
                    '<td>' + employee_1.certs + '</td>' +
                    '<td><div class="red-round">o</div>' + employee_1.attend + '%</td>' +
                    '<td><div class="yellow-round">o</div>' + employee_1.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(1);">Remove</button></td>` +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_2.name + '</td>' +
                    '<td>' + employee_2.certs + '</td>' +
                    '<td><div class="green-round">o</div>' + employee_2.attend + '%</td>' +
                    '<td><div class="red-round">o</div>' + employee_2.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(2);">Remove</button></td>` + 
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_3.name + '</td>' +
                    '<td>' + employee_3.certs + '</td>' +
                    '<td><div class="red-round">o</div>' + employee_3.attend + '%</td>' +
                    '<td><div class="yellow-round">o</div>' + employee_3.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(3);">Remove</button></td>` +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_4.name + '</td>' +
                    '<td>' + employee_4.certs + '</td>' +
                    '<td><div class="green-round">o</div>' + employee_4.attend + '%</td>' +
                    '<td><div class="red-round">o</div>' + employee_4.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(4);">Remove</button></td>` +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_5.name + '</td>' +
                    '<td>' + employee_5.certs + '</td>' +
                    '<td><div class="green-round">o</div>' + employee_5.attend + '%</td>' +
                    '<td><div class="red-round">o</div>' + employee_5.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(5);">Remove</button></td>` +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_6.name + '</td>' +
                    '<td>' + employee_6.certs + '</td>' +
                    '<td><div class="green-round">o</div>' + employee_6.attend + '%</td>' +
                    '<td><div class="red-round">o</div>' + employee_6.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(6);">Remove</button></td>` +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_7.name + '</td>' +
                    '<td>' + employee_7.certs + '</td>' +
                    '<td><div class="green-round">o</div>' + employee_7.attend + '%</td>' +
                    '<td><div class="red-round">o</div>' + employee_7.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(7);">Remove</button></td>` +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_8.name + '</td>' +
                    '<td>' + employee_8.certs + '</td>' +
                    '<td><div class="green-round">o</div>' + employee_8.attend + '%</td>' +
                    '<td><div class="red-round">o</div>' + employee_8.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(8);">Remove</button></td>` +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_9.name + '</td>' +
                    '<td>' + employee_9.certs + '</td>' +
                    '<td><div class="green-round">o</div>' + employee_9.attend + '%</td>' +
                    '<td><div class="red-round">o</div>' + employee_9.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(9);">Remove</button></td>` +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_10.name + '</td>' +
                    '<td>' + employee_10.certs + '</td>' +
                    '<td><div class="green-round">o</div>' + employee_10.attend + '%</td>' +
                    '<td><div class="red-round">o</div>' + employee_10.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(10);">Remove</button></td>` +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_11.name + '</td>' +
                    '<td>' + employee_11.certs + '</td>' +
                    '<td><div class="green-round">o</div>' + employee_11.attend + '%</td>' +
                    '<td><div class="red-round">o</div>' + employee_11.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(11);">Remove</button></td>` +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_12.name + '</td>' +
                    '<td>' + employee_12.certs + '</td>' +
                    '<td><div class="green-round">o</div>' + employee_12.attend + '%</td>' +
                    '<td><div class="red-round">o</div>' + employee_12.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(12);">Remove</button></td>` +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_13.name + '</td>' +
                    '<td>' + employee_13.certs + '</td>' +
                    '<td><div class="green-round">o</div>' + employee_13.attend + '%</td>' +
                    '<td><div class="red-round">o</div>' + employee_13.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(13);">Remove</button></td>` +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_14.name + '</td>' +
                    '<td>' + employee_14.certs + '</td>' +
                    '<td><div class="green-round">o</div>' + employee_14.attend + '%</td>' +
                    '<td><div class="red-round">o</div>' + employee_14.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(14);">Remove</button></td>` +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_15.name + '</td>' +
                    '<td>' + employee_15.certs + '</td>' +
                    '<td><div class="green-round">o</div>' + employee_15.attend + '%</td>' +
                    '<td><div class="red-round">o</div>' + employee_15.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(15);">Remove</button></td>` +
                '</tr>' +
                '<tr>' +
                    '<td>' + employee_16.name + '</td>' +
                    '<td>' + employee_16.certs + '</td>' +
                    '<td><div class="green-round">o</div>' + employee_16.attend + '%</td>' +
                    '<td><div class="red-round">o</div>' + employee_16.punct + '%</td>' +
                    `<td><button class="button-purple" onclick="remove_employee(16);">Remove</button></td>` +
                '</tr>' +
            '</table>' +
        '</div>' +
    '</div>';
    const popup_div = document.getElementById("popup_div");
    popup_div.insertAdjacentHTML("afterBegin", popup_str);
}

function delete_popup() {
    document.getElementById("popup_div").innerHTML = ""; // This just deletes the popup
}
function delete_popup2() {
    document.getElementById("popup_div2").innerHTML = ""; // This just deletes the popup
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

    let function_str_2 = 
    "'" + job.title + "'" +
    "," +  "'" + job.job_location + "'" +
    "," +  "'" + job.date + "'";

    let tmp_str_6 = 
    job.description +
    `<br><br>` +
    `<div class='left-block'>` +
        `<button class="button-purple" onclick="edit_job(`;
    
    let I_hate_javascript_and_html_string = 
                                        `);"> Edit </button>` +
    `</div>` +
    `<div class='right-block'>` +
        `<button class="button-orange" onclick="employee_info(`;
    //    let tmp_str_1 = tmp_str_4.concat(box_color, tmp_str_5, tmp_str_6);
    let tmp_str_1 = box_color.concat( tmp_str_5, tmp_str_4, tmp_str_6, function_str_2, I_hate_javascript_and_html_string,); // This line is peak

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
