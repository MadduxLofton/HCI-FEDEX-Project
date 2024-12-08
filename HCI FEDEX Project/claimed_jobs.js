function Job(title, date, job_location, description, start_time, end_time, pay, skills, map_link)
{
    this.title = title;
    this.date = date;
    this.job_location = job_location; // location is a reserved word
    this.description = description;
    this.start_time = start_time;
    this.end_time = end_time;
    this.pay = pay;
    this.skills = skills;
    this.map_link = map_link;
}

// I wanted this function to be put in a different file but it has to be here for some reason. Javascript hurts me
function claim_job()
{
    let popup_str =
    '<div class="gray-background">' +
        '<div class="filler-box"></div>' +
        '<div class="foreground-box">' +
            '<div class="popup-title">' +
                'Job Claim Form' +
                '<button class="popup-exit" onclick="delete_popup();">x</button>' +
            '</div>' +

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

    // There are so many strings within strings this section needs to use ` as a string constructor
    let tmp_str_1 =
    `<div class='job-card'>` +
        job.title + ` | ` + job.start_time + ` - ` + job.end_time + ` | ` + job.date + ` | ` + job.job_location +
        `<br>` + 
        job.description +
        `<br>` +
        `<button class="button-purple" onclick="claim_job();"> Claim </button>` +
        `<button class="button-orange" onclick="unclaimed_job_more_info(`;

    let tmp_str_2 =
        `);"> More Info </button>` +
    `</div>`;

    let tmp_str_3 = tmp_str_1.concat(funct_str, tmp_str_2);
    dumb_box.insertAdjacentHTML("afterBegin", tmp_str_3); // This places the text at the end of the dumb-box children
}

function print_job_card_odd(job)
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

    // There are so many strings within strings this section needs to use ` as a string constructor
    let tmp_str_1 =
    `<div class='job-card-odd'>` +
        job.title + ` | ` + job.start_time + ` - ` + job.end_time + ` | ` + job.date + ` | ` + job.job_location +
        `<br>` + 
        job.description +
        `<br>` +
        `<button class="button-purple" onclick="claim_job();"> Claim </button>` +
        `<button class="button-orange" onclick="unclaimed_job_more_info(`;

    let tmp_str_2 =
        `);"> More Info </button>` +
    `</div>`;
    
    let tmp_str_3 = tmp_str_1.concat(funct_str, tmp_str_2);
    dumb_box.insertAdjacentHTML("afterBegin", tmp_str_3); // This places the text at the end of the dumb-box children
}

                //Job(title, date, job_location, description, start_time, end_time, pay, skills, map_link) 
const job_1 = new Job("Cook", "7/7/25", "The restarant", "You will cook food", "7:30am", "5:00pm", "15$/hr", "you need skills I guess", "map_link");

//document.write("<div class='job-table'>");

const dumb_box = document.getElementById("dumb-box"); // This a reference to the dumb-box element 
let text_1 = "<div class='job-table'>"; // This is the text that it inserts to dumb-box
dumb_box.insertAdjacentHTML("afterBegin", text_1); // This places the text at the end of the dumb-box children

for (let i = 0; i < 5; i++)
{
    if(i % 2 == 0)
    {
        print_job_card(job_1);
    }
    else
    {
        print_job_card_odd(job_1);
    }

}
//document.write("</div>");