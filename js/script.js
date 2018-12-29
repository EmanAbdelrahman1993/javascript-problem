function areaOfTriangle()
{
    var x = document.getElementById("userNumbe1").value;
    var y = document.getElementById("userNumbe2").value;
    var z = document.getElementById("userNumbe3").value;
    
    var area = x*y*z;
    document.getElementById("problem1Result").value = area;
}

function generateRandomNo()
{
    //generate random number from 1 to 10
    var random = Math.floor(Math.random() * 10) + 1;
    var userNo = document.getElementById("userNo").value;
    if(random == userNo)
    {
        //document.getElementById("problem2Result").value = random +"Good Work";
        document.getElementById("problem2Result").value = "Good Work generated number is : "+ random;
    }
    else
    {
        //document.getElementById("problem2Result").value = random +"Not matched";
        document.getElementById("problem2Result").value = "Not matched generated number is : "+ random;
    }
}

function multiply()
{
    var no1 = document.getElementById("firstNo").value;
    var no2 = document.getElementById("secondNo").value;
    
    var multi = no1 * no2;
    
    document.getElementById("problem3Result").value = multi;
}
function divide()
{
    var no1 = document.getElementById("firstNo").value;
    var no2 = document.getElementById("secondNo").value;
    
    var divid = no1 / no2;
    
    document.getElementById("problem3Result").value = divid;
}

function CelsuisToFahrenheit()
{
    var Degree = document.getElementById("degree").value; 
    var Fahrenheit = (Degree*1.8)+32;
    document.getElementById("problem4Result1").value = Fahrenheit + "  Fahrenheit";
} 

function FahrenheitToCelsuis()
{
    var Degree = document.getElementById("degree").value; 
    var Celsuis = (Degree-32)/1.8;
    document.getElementById("problem4Result1").value = Celsuis + " Celsuis";
}

function getFileExtension()
{
    var fileName = document.getElementById("fileName").value;
    var extension = fileName.split('.').pop();
    document.getElementById("problem5Result").value = extension;
}
// getFileExtension

function getFile(filePath) {
    return filePath.substr(filePath.lastIndexOf('\\') + 1).split('.')[0];
}

function getoutput() {
    outputfile.value = getFile(inputfile.value);
    extension.value = inputfile.value.split('.')[1];
}

//end getFileExtension

function subtraction()
{
    var userNo = document.getElementById("userNumber").value;
    if(userNo > 13)
    {
        var result = (userNo - 13) *2;
        document.getElementById("problem6Result").value = result;
    }
    else
    {
        var result = userNo - 13;
        document.getElementById("problem6Result").value = result;
    }
}

function triple()
{
    var userNo1 = document.getElementById("userNo1").value;
    var userNo2 = document.getElementById("userNo2").value;
    var sum = Number(userNo1)+Number(userNo2);
    if(userNo1 == userNo2)
    {
        document.getElementById("problem7Result").value = sum*3;
    }
    else
    {
        document.getElementById("problem7Result").value = sum;
    }
    
}

function checkNumber()
{
    var userNumber1 = document.getElementById("userNumber1").value;
    var userNumber2 = document.getElementById("userNumber2").value;
    var sum = Number(userNumber1)+Number(userNumber2);
    if(userNumber1 == 50 || userNumber2 ==50 || sum==50)
    {
        document.getElementById("problem8Result").value = "true";
    }
    else
    {
        document.getElementById("problem8Result").value = "false";
    }
    
}

function numRange()
{
    var usNum = document.getElementById("usNum").value;
    if(usNum >19 && usNum<101 )
    {
        document.getElementById("problem9Result").value = "true";
    }
    else if(usNum == 400)
    {
        document.getElementById("problem9Result").value = "true";
    }
    else
    {
        document.getElementById("problem9Result").value = "false";
    }
}


function positiveAndNegative()
{
    var userNumber1 = document.getElementById("userNu1").value;
    var userNumber2 = document.getElementById("userNu2").value;
    if( (userNumber1 >0 && userNumber2<0) ||(userNumber2 >0 && userNumber1<0))
    {
        document.getElementById("problem10Result").value = "true";
    }
    else
    {
        document.getElementById("problem10Result").value = "false";
    }
}

function sideRange()
{
    var userNumber = document.getElementById("userN1").value;
    var userNum = document.getElementById("userN2").value;
    if(userNumber >49 && userNumber<100 && userNum>49 && userNum<100)
    {
        document.getElementById("problem11Result").value = "true";
    }
    else
    {
        document.getElementById("problem11Result").value = "false";
    }
}


function max()
{
    var a = document.getElementById("userNumb1").value;
    var b = document.getElementById("userNumb2").value;
    var c = document.getElementById("userNumb3").value;
    

    var result = Math.max(a,b,c);
    
    document.getElementById("problem12Result").value = result;
}

function twoRanges()
{
    var userNum1 = document.getElementById("userV1").value;
    var userNum2 = document.getElementById("userV2").value;
    if((userNum1 >39 && userNum1<61) || (userNum1>69 && userNum1<101))
    {
        if((userNum2 >39 && userNum2<61)|| (userNum2>69 && userNum2<101))
        {
            document.getElementById("problem13Result").value = "true";
        }
    }
    else
    {
        document.getElementById("problem13Result").value = "false";
    }
}


var number=[3,6,7];
var sum=0;
function arraySum()
{
    for(var i=0; i<number.length;i++)
    {
        sum+= number[i];
    }
    document.getElementById("problem14Result").value= sum;
}