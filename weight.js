function calcBMI(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;    
    var _bmi = (weight / ((Math.pow(height, 2))  / 10000)).toFixed(2);
    var _lowerRangeExpectedWeight = (((Math.pow(height,2)) / 10000) * 18.6).toFixed(2);
    var _higherRangeExpectedWeight = (((Math.pow(height,2)) / 10000) * 24.9).toFixed(2)
    var msg = document.getElementById('msg');
    var message= document.getElementById('message');
    var _stringMsg = "Acording to your height";
    if(height == "" || isNaN(height))
    {
        msg =alert("Please provide a valid \'Height\'");
    }
    else if(height < 0)
    {
        msg = alert("\'Height\' cannot be negative. Please enter positive value");
    }
    else if(weight == "" || isNaN(weight))
    {
        msg =alert("Please provide a valid \'Weight\'");
    }
    else if(weight < 0)
    {
        msg = alert("\'Weight\' cannot be negative. Please enter positive value.");
    }
    else
    {
        if(_bmi < 18.6)
        {
            message.innerHTML = "\'Less Weight\':- "+ _stringMsg +", you need to increase your weight to fit.<br>Your calculated BMI is: " + _bmi+
            "<br>Your expected weight in \'Kg\' in between the range : "+_lowerRangeExpectedWeight+" - "+_higherRangeExpectedWeight;
        }
        else if(_bmi >= 18.6 && _bmi < 24.9)
        {
            message.innerHTML = "\'Normal\':- "+ _stringMsg +", you are a fit person.<br>Your calculated BMI is : " + _bmi;
        }
        else
        {
            message.innerHTML = "\'Over Weight\':- "+ _stringMsg +", you need to decrease your weight to fit.<br>Your calculated BMI is: "+ _bmi+
            "<br>Your expected weight in \'Kg\' in between the range : "+_lowerRangeExpectedWeight+" - "+_higherRangeExpectedWeight;
        }        
    } 
}
function covertToCm()
{
    var foot = document.getElementById('foot').value;   
    var _toCM = (foot * 30.48).toFixed(2);
    var _footToCm = document.getElementById('toCM');
    if(foot == "" || isNaN(foot))
    {
        _footToCm = alert("Please provide a valid height in \'Foot(ft)\'");
    }
    else if(foot < 0)
    {
        _footToCm = alert("Please enter a positive value.")
    }
    else
    {
        _footToCm.innerHTML = "Your height in Centimeter(cm) is: " + _toCM+" cm";
    }    
}