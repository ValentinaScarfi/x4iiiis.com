function countdown(EventDate)
{
    console.log("Received EventDate");
    console.log(EventDate);

    var countDownDate = new Date(EventDate).getTime();

    console.log("countDownDate = ");
    console.log(countDownDate);
    
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="demo"
        var output = days + " days " + hours + " hours "
        + minutes + " minutes" + seconds + " seconds ";

        return 0;
        return output;
        
        // If the count down is over, write some text 
        if (distance < 0) {
                clearInterval(x);
                return "EXPIRED";
        }
    }, 1000);
}

