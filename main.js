var Students =[];
function Submit(){
    var s1 = document.getElementById("TextBox1").value;
    var s2 = document.getElementById("TextBox2").value;
    var s3 = document.getElementById("TextBox3").value;
    var s4 = document.getElementById("TextBox4").value;
    var s5 = document.getElementById("TextBox5").value;
    var s6 = document.getElementById("TextBox6").value;
    Students.push(s1);
    Students.push(s2);
    Students.push(s3);
    Students.push(s4);
    Students.push(s5);
    Students.push(s6);
    
console.log(Students);
document.getElementById("Display").innerHTML = Students;
document.getElementById("Submit").style.display ="none";
document.getElementById("Sort").style.display ="inline-block";

}
function Sort(){
    Students.sort();
    console.log(Students);
    
    document.getElementById("Display").innerHTML = Students;
    document.getElementById("Sort").style.display ="none";
    document.getElementById("Submit").style.display ="inline-block";
    document.getElementById("TextBox1").value ="";
    document.getElementById("TextBox2").value ="";
    document.getElementById("TextBox3").value ="";
    document.getElementById("TextBox4").value ="";
    document.getElementById("TextBox5").value ="";
    document.getElementById("TextBox6").value ="";
    Students=[];

    
    

}