function calculate_grade(){

let score=parseFloat(document.getElementById("score_input").value);
let grade ="";
if(score >80 && score <=100){


    grade ="A";
}
else if(Score >50 && score <=80)
{
    grade= "B";

}
else{
    grade ="F";
}
document.getElementById("grade_span").innerHTML=result;
}

