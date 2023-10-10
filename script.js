

const formEl = document.querySelector('form');

const inputEl = document.querySelector('input');

const questionEl = document.querySelector('h1');

const score =document.querySelector('#score');

const errorMsg = document.querySelector('#errorMsg');
const gameOver = document.querySelector('#gameOver');
const playAgain = document.querySelector('#playAgain');





let scoreValue=JSON.parse(localStorage.getItem('score'));

if(!scoreValue)
{
    scoreValue = 0;
}
score.textContent=`${scoreValue}`;

let answer;

const updateQuestion=()=>{
    const num1Value =Math.ceil(Math.random()*100);
    const num2Value = Math.ceil(Math.random()*10);
    questionEl.innerText=`What is ${num1Value} multiply by ${num2Value} ?`;
    answer= num1Value * num2Value;
}
updateQuestion();


const updateLocalStorage =()=>{
    localStorage.setItem('score',JSON.stringify(scoreValue));
}

formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(inputEl.value==='')
    {
        errorMsg.classList.add('showErrorMsg');
        errorMsg.classList.add('alert');
        errorMsg.classList.remove('exitErrorMsg')
        errorMsg.textContent='Please give the input!';
        setTimeout(()=>{
            errorMsg.classList.add('exitErrorMsg');
            errorMsg.classList.remove('showErrorMsg')
        },2000);
    }
    else{
        
        if(parseInt(inputEl.value)===answer)
    {
        console.log(inputEl.value,answer);
        errorMsg.classList.add('showErrorMsg');
        errorMsg.classList.remove('exitErrorMsg')
        errorMsg.classList.remove('alert');
        errorMsg.classList.remove('wrongAnswer');
    
        errorMsg.textContent='Correct Answer!';
        setTimeout(()=>{
            errorMsg.classList.add('exitErrorMsg');
            errorMsg.classList.remove('showErrorMsg')
        },2000);
        scoreValue++;
        score.textContent=scoreValue;
        updateQuestion(); 
        updateLocalStorage();  
    }
    else{
        console.log(inputEl.value,answer);
        scoreValue--;
        if(scoreValue<0)
        {
            
            formEl.parentElement.style.transition = 'blur 2s ease';
            formEl.parentElement.style.filter = 'blur(5px)';
            gameOver.classList.add('active');
            gameOver.classList.remove('unActive');
            updateQuestion();
        }
        else
        {
        score.textContent=scoreValue;
        errorMsg.classList.add('showErrorMsg');
        errorMsg.classList.add('wrongAnswer');
        errorMsg.classList.remove('exitErrorMsg')
        errorMsg.classList.remove('alert')
        errorMsg.textContent='Incorrect Answer!';
        setTimeout(()=>{
            errorMsg.classList.add('exitErrorMsg');
            errorMsg.classList.remove('showErrorMsg')
        },2000);
        updateLocalStorage();
        
    }
    }
}
     
    inputEl.value='';
})

playAgain.addEventListener('click',()=>{
    gameOver.classList.remove('active');
    gameOver.classList.add('unActive');
    
    location.href='/'

})
