// Main HTML Code to be pushed in DOM 

const quizHTML = `
           <section class = "container">
            <h3 class="competition-heading heading">General Knowledge Competition</h3>
                <div class="text question">
                        <h4 class="heading questionUI">Which is largest river of World ?</h4>
                </div>

                <div class="text option ">
                    <div class=" top-option">
                        <p class="option-A"> A. Indus </p>
                        <p  class="right-option option-B">B. Amazon </p>
                    </div>

                    <div class="bottom-option">
                        <p class="option-C"> C. Ganges </p>
                        <p class="right-option option-D">D. Ahmed </p>
                    </div>

                </div>
            <div class="user-selection">
                <input type="text" method="" enctype="" placeholder="Select Option" class="user-selected-option">
                <input type="submit" class="user-btn-submit">
            </div>

            <div class="score">
                <h3 class="username-score heading">Name : Unknown</h3>
                <h3 class="user-score heading">Score : 00 </h3>
            </div>
        </section> 

`;

// Global Variables 
let userScore = 0 ; 
let userName = "";

const DOM = {
    submit:document.querySelector(".btn-submit"),
    userName: document.querySelector(".username"),
    main: document.querySelector(".main"),
    entry: document.querySelector(".entry")
};

DOM.submit.addEventListener('click' , event =>{
    
    if (DOM.userName.value) 
    {
        const parentNd = DOM.entry.parentNode;
        DOM.entry.classList.add('hide');
        setTimeout(()=>{
            userName = document.querySelector('.username').value;
            parentNd.removeChild(DOM.entry);
            DOM.main.insertAdjacentHTML('beforeend' , quizHTML);
            document.querySelector('.username-score').textContent = `Name : ${userName}`  ;
            DOM.main.classList.add('show');
            init();
        },1000)
        
        
    }
})

DOM.main.addEventListener('click' , event =>{
 if(event.target.classList.contains('user-btn-submit')){
        console.log(document.querySelector('.user-selected-option').value);                                                                              
 }
})

function question (){
    const question = ["Which is Longest River ?" , "Smallest Country by Area the World ? " ,
                      "Who is best Footballer ?" , "Tallest Mountain in World "];
    const randQuestion = Math.floor(Math.random() * 4) ;
    console.log(question[randQuestion]);
    // Returning question and also its position
    return [question[randQuestion],randQuestion];
}

function generateOptions (q) {
        
        if (q == 0) {
            
            return ["A. Indus " , "B. Amazon " ,"C. Nile ", "D. Yangtze " ];
        }

        else if (q == 1)
        {
            return ["A. Monaco " , "B. Vatican City " ,"C. Spain ", "D. Pakistan " ];
        }
        else if (q == 2)
        {
            return ["A.Messi " , "B. Neymar Jr " ,"C. Ronaldo ", "D. Mbappe " ];

        }
        else if (q == 3) {
            return ["A. K2 ", "B. Mount Everst" , "C. Andes" , "D. None "] ;
        }
        else {
            return 11 ; 
            }
}

function updateScore () {
    userScore= userScore + 1 ; 
    console.log('Called');

    document.querySelector('.user-score').textContent = `Score : ${userScore}` ;
    console.log('I am Called'); 
    // init(); 
}

function init () {
   const randquestion = question();
   const options = generateOptions(randquestion[1]);

   document.querySelector('.questionUI').textContent = randquestion[0];
     

 if(document.querySelector('.questionUI'))
 {

     document.querySelector('.questionUI').textContent = randquestion[0];
     document.querySelector('.option-A').textContent = options[0];
     document.querySelector('.option-B').textContent = options[1];
     document.querySelector('.option-C').textContent = options[2];
     document.querySelector('.option-D').textContent = options[3];
 }

 let userSelectedOption = "";
 DOM.main.addEventListener('click' , event =>{
    if(event.target.classList.contains('user-btn-submit')){
        const userSelection = document.querySelector('.user-selected-option').value ; 
        // console.log(`${userSelection} is Selected`);

        if (randquestion[1] == 0 && userSelection == 'C') {
                updateScore();
        }

        else if (randquestion[1] == 1 && userSelection == 'B') {
            updateScore();
        }

        else if (randquestion[1] == 2 && userSelection == 'A') {
            updateScore();
        }
        else  if (randquestion[1] == 3 && userSelection == 'B') {
            updateScore();
        }
        else {
            init();
        }
                                                                                      
    }
   })
 
}


//  When user Answered 
//  Questions Should be stored in data structure
//  Options should also be stored 
//  1. Update User Score if answer is correct 
// 2. if answer is incorrent , display Incorrent answer 
//  3. Change question 