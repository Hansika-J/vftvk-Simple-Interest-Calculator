function compute()
{
    var principal = document.getElementById("principal").value;

    if(principal<=0 || principal==""){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = documents.getElementById("years").value;
    var interest = principal*years*rate/100;

    var year = parseInt(new Date().getFullYear()) + parseInt(years);

    var disply = document.getElementById("result");
    disply.innerHTML = "If you deposit "+"<span id='cl'>"+ principal +"</span>" + ",<br>at an interest rate of "+ "<span id='cl'>"+ rate +"</span>" + "%<br>You will receive an amount of " + "<span id='cl'>" + interest + "</span>"+",<br> the year "+"<span id='cl'>" + year + "</span>";
    
}

function updateRate()
{

    var slider = document.getElementById("rate");
    var out = document.getElementById("rate_val");
    out.innerHTML = slider.value;

}
        
