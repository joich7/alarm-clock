const alarm_switch = document.querySelector("button");
const alarm_hour = document.getElementById("hourInput");
const alarm_minute = document.getElementById("minuteInput");
const ampm_switch = document.getElementById("AM/PM")



alarm_switch.addEventListener("click", () => {
    if(alarm_switch.textContent == "off"){
        alarm_switch.textContent = "on";
    }
    else if(alarm_switch.textContent == "on")
    {
        alarm_switch.textContent = "off";
    }
});
            

function myliveClock()
{
            
            
            let d = new Date();
            let hours = d.getHours();
            let minutes = d.getMinutes();
            let seconds = d.getSeconds();
            let AMorPM;
           
            let time12hrs;

           


            //check time to see if 
            if(hours<12)
            {
                AMorPM= "AM";
            }
            
            else if(hours>=12)
            {
                AMorPM = "PM";
                time12hrs = hours - 12;
            }
            //


            //adding zero to front of numbers
            if(time12hrs < 10){
                hours = "0"+hours;
            }

            if(minutes < 10){
                minutes = "0"+minutes;
            }

            if(seconds < 10){
                seconds = "0"+seconds;
            }


            
                
            if(alarm_switch.textContent == "on")
                {
                    if(alarm_hour.value == hours && alarm_minute.value == minutes ){
                        alert("Get upp!!!")
                        alarm_switch.innerText = "off";
                    } 
                }

         



        let time = time12hrs+":"+minutes+":"+seconds+AMorPM;

        document.querySelector(".liveClock").innerHTML = time;  

}


setInterval(myliveClock, 1000)
