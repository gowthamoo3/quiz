var answers=[3,3,2,1,3] /* Predefine the answers */
var count=0; /* Mark count */

function validateAnswer() /* Function used to calculate mark */
{
    count=0;
    for(let i=1;i<=answers.length;i++)
    {
            if(document.getElementsByName("ques"+i.toString())[answers[i-1]-1].checked===true) 
            /* getElementsByName function is used to get all elements by name*/
            /* In this above snippet it fetches all input elements of name ques1,ques2 and so on*/
            /* .checked returns true if radio btn is checked else false */
            count++;
    }
    console.log(count);
    document.getElementById("dispResult").value=count; /*Displays the score in score box*/
    let ele=document.getElementById("feedback");
    if(count<3)
    ele.innerText="Try again"
    else if (count==3)
    ele.innerText="Good"
    else 
    ele.innerText="Excellent"
}
