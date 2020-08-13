var no_of_questions,question,A,B,C,D,correct_answer=0,position=0,name="";

var questions=[
    ["Value of 3+3",2,3,7,6,"D"],
    ["Value of 12+9",21,31,17,16,"A"],
    ["Value of 5+4",6,9,8,10,"B"],
    ["Value of 34+6",36,30,17,40,"D"],
    ["Value of 13+13",22,33,26,16,"C"]
]


var startelement=` <div class="container" id="contain">
                            <p id="question-head">Question :</p>
                            <div class="questions">
                            <p id="ques">This is a question</p>
                            </div>
                            <div class="answers">
                            <label class="optiondiv "><input type="radio" name="choices"  value="A"/><span id="option1"></span></label>
                            <label class="optiondiv "><input type="radio" name="choices"  value="B"/><span id="option2"></span></label>        
                            <label class="optiondiv "><input type="radio" name="choices"  value="C"/><span id="option3"></span></label>
                            <label class="optiondiv "><input type="radio" name="choices"  value="D"/><span id="option4"></span></label>
                        </div>
                        <br>
                            <div class="btn">
                            <button id="submit-btn"  onclick="checkAnswer()">Submit</button>
                            </div>
                            <div  id="selectopt">
                            <p></p>
                            </div>
                        </div>`

var restartelement = `<div class="container" id="contain">
                        <h3>JS Quiz App</h3>
                        <div class="btn">
                            <input type="textarea" id="name" placeholder="Name">
                        </div>
                        <div  id="nameopt">
                            <p></p>
                            </div>
                         <div class="btn">
                          <button class="btn" id="start-btn"  onclick="start()">Start</button>
                        </div>
                    </div>`


function start(){
 
    name = document.getElementById("name").value;
    if(name==""){
        document.getElementById("nameopt").innerText="Enter your name to Continue"
        setTimeout(() => {
            document.getElementById("nameopt").innerText=""
        }, 2000);
    }
    else
       {
            document.getElementById("contain").innerHTML=startelement;
           displayQuestion();
       }
}

function displayQuestion(){
 
    if(position==questions.length-1){
        document.getElementById("submit-btn").innerHTML="Finish"
  }
        if(position>=questions.length){
              resultPage();
              position=0;
              correct_answer=0
        }
       
        else{
            
         document.getElementById("question-head").innerHTML=`Question ${position+1} of ${questions.length} :`;

         question = document.getElementById("ques");
         A = document.getElementById("option1");
         B = document.getElementById("option2");
         C = document.getElementById("option3");
         D = document.getElementById("option4");

         question.innerHTML=questions[position][0];
         A.innerHTML=questions[position][1];
         B.innerHTML=questions[position][2];
         C.innerHTML=questions[position][3];
         D.innerHTML=questions[position][4];
    
        }
}


function restart(){
     
     document.getElementById("contain").innerHTML=restartelement
}

function checkAnswer(){
    var choice=null,i;
    var choices = document.getElementsByName("choices");

    for(i=0;i<choices.length;i++){
        if(choices[i].checked){
            choice=choices[i].value;
            choices[i].checked=false
            }
    }
    if(choice==null){
        document.getElementById("selectopt").innerText="Select any Option"
        setTimeout(() => {
            document.getElementById("selectopt").innerText=""
        }, 2000);
        
    }
    else{
        if(choice===questions[position][5]){
            ++correct_answer;
        }
        position++;
        displayQuestion()
    }  
}

function check(){
    var passed = "Passed"
    var failed = "Failed"

    if(correct_answer>=3){
        return passed
    }
    else{
        return failed
    }
}


function resultPage(){

    if(check()=="Passed"){
        var icon = `<img src="https://img.icons8.com/bubbles/50/000000/medal.png"/>`
        var tryagain = `<div class="tryagain" >Great!, ${name}</div>`   
    }
    else{
        var icon = `<div><img src="https://img.icons8.com/color/48/000000/test-failed.png"/></div>` 
        var tryagain = `<div class="tryagain">Try Again, ${name}</div>`
    }

    var result = `<div class="score" >Score : ${correct_answer}</div>`
    var passfail = `<div class="passfail" style="margin-top:20px">${check()}</div>`
    var icondiv= `<div class="icon">${icon}</div>`
    var restartbutton = `<div class="btn restart-btn"><button id="restart-btn" onclick="restart()">Restart</button></div>`
    
    document.getElementById("contain").innerHTML=result+passfail+icondiv+tryagain+restartbutton;
}


