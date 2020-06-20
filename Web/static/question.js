
let questions = [
    {
        question : "Do you have cough?",
        choice1: "Yes",
        choice2: "No",
        point: 1
    },
    {
        question : "Do you have colds?",
        choice1: "Yes",
        choice2: "No",
        point: 1
    },
    {
        question : "Are you having Diarrhea?",
        choice1: "Yes",
        choice2: "No",
        point: 1
    },
    {
        question : "Do you have sore throat?",
        choice1: "Yes",
        choice2: "No",
        point: 1
    },
    {
        question : "Are you experiencing MYALGIA or Body Aches?",
        choice1: "Yes",
        choice2: "No",
        point: 1
    },
    {
        question : "Do you have a headach?",
        choice1: "Yes",
        choice2: "No",
        point: 1
    },
    {
        question : "Do you have fever(Temperature 37.8 C and above)?",
        choice1: "Yes",
        choice2: "No",
        point: 1
    },
    {
        question : "Are you having difficulty breathing?",
        choice1: "Yes",
        choice2: "No",
        point: 2
    },
    {
        question : "Are you experiencing Fatigue?",
        choice1: "Yes",
        choice2: "No",
        point: 2
    },
    {
        question : "Have you traveled recently during the past 14 days?",
        choice1: "Yes",
        choice2: "No",
        point: 3
    },
    {
        question : "Do you have travel history to a COVID-19 infected area?",
        choice1: "Yes",
        choice2: "No",
        point: 3
    },
    {
        question : "Do you have direct contact or is taking care of positive COVID-19 patient?",
        choice1: "Yes",
        choice2: "No",
        point: 3
    }
];



let pointScored = 0;
let quesIndex = 0;
let score = 0;
let test1 = 0;


let quesArr = questions.map(el => el.question);
let scoreArr = questions.map(el => el.point);


console.log(scoreArr, quesArr);

// console.log(quesArr);

let displayScore = () => {
    document.getElementById("score").innerHTML = "Point :"+ score;  
}


let display = () => {
    document.getElementById("question").innerHTML = quesArr[quesIndex];
  
}

let showModal = () => {
    if (score <= 3) {
        document.getElementById("message").innerHTML = "May be stress related and observe. "
    }else if (score>3 && score<=7){   
        document.getElementById("message").innerHTML = "Hydrate properly and proper personal hygiene.\n Observe and Re-evaluate after 2 days."
    }else{
    
        document.getElementById("message").innerHTML = "Seek a consultation with Doctor"
    }        
    $('#ModalCenter').modal('show');
}

let btn_yes = () => {
    quesIndex++;
    score += scoreArr[quesIndex -1];
    test1 = score;
    if(quesIndex >= 0 && quesIndex <= quesArr.length)
    {
        console.log(scoreArr[quesIndex]);
        
        displayScore();
    }


    if(quesIndex >= 0 && quesIndex < quesArr.length)
    {       
        display();
    }
    else 
    {
        setTimeout(function(){
            if(quesIndex >= 0 && quesIndex <= quesArr.length)
            document.getElementById("modal-title").innerHTML = `Result: ${score}`
            showModal();
        },500) 
    }
}

let btn_no = () => {

    quesIndex++;

    if(quesIndex >= 0 && quesIndex <= quesArr.length)
    {        
        displayScore();
    }

    if(quesIndex >= 0 && quesIndex < quesArr.length)
    {   
        score = score;  
        display();
    }
    else
    {
        setTimeout(function(){
            if(quesIndex >= 0 && quesIndex <= quesArr.length)
            document.getElementById("modal-title").innerHTML = `Result: ${score}`
            showModal();
        },500) 
        
    }
}



let btn_reset = () => {
    quesIndex=0;
    score = 0;
    display();
    displayScore();
}
//To Display First Element
display();

    

   










