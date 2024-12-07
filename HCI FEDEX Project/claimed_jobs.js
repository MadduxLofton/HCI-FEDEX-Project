function Job(title, time, date, location, description){
    this.title = title;
    this.time = time;
    this.date = date;
    this.location = location;
    this.description = description;
}

const job_1 = new Job("Cook", "7:30-12:30", "7/7/25", "The restarant", "You will cook food");

document.write("<div class='job-table'>");
for (let i = 0; i < 5; i++) {
if(i % 2 == 0)
{
    document.write(
    "<div class='job-card'>",
        job_1.title, " | ", job_1.time, " | ", job_1.date, " | ", job_1.location,
        "<br>", 
        job_1.description,
        "<br>",
        "<button class='button-purple' onclick='claim_job();'> Claim </button>",
        "<button class='button-orange'> More Info </button>",
    "</div>",
    );
}
else
{
    document.write(
    "<div class='job-card-odd'>",
        job_1.title, " | ", job_1.time, " | ", job_1.date, " | ", job_1.location,
        "<br>", 
        job_1.description,
        "<br>",
        "<button class='button-purple' onclick='claim_job();'> Claim </button>",
        "<button class='button-orange'> More Info </button>",
    "</div>",
    );
}

}
document.write("</div>");