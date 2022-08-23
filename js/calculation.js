//---- get player name by clicking select player button ----
const selectButtons = document.getElementsByClassName('select-player-btn');
const selectedPlayerList = document.getElementById('selected-player-list');
// console.log(selectButtons);
for ( const selectButton of selectButtons){
    selectButton.addEventListener('click', function(event){
        const playerName = event.target.parentNode.children[0].innerText;

        //---- set player name in the selected player list ----
        //---- create li element -----
        const li = document.createElement('li');
        li.innerText = playerName;
        //---- append player name list ----
        const listLength = selectedPlayerList.childNodes.length;
        const btn = event.target;
        if( listLength < 5){
            selectedPlayerList.appendChild(li);
            btn.setAttribute('disabled', true);
            btn.style.backgroundColor = 'gray';
            btn.style.color = 'lightgray';
        }
        else{
            alert ('Maximum number of player added');
        }
        
    });
}


// ---- calculate and set the player expenses ----
document.getElementById('calculate-btn').addEventListener('click', function(){
    const playerNumber = getListLengthByid('selected-player-list');
    const perPlayerCost = getInputValuesById('per-player-cost');
    if(!isNaN(perPlayerCost) === true){

        const playerExpenses = playerNumber * perPlayerCost;
        setTextElementById('player-expenses', playerExpenses);
    }
    else{
        alert ('Input value is not a number');
    }
    // console.log(a)
})

// ---- calculate and set the total expenses ----
document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const playerExpenses = getTextElementById('player-expenses');
    const managerCost = getInputValuesById('manager-cost');
    const coachCost = getInputValuesById('coach-cost');
    if(!isNaN(playerExpenses) === true && !isNaN(managerCost) === true && !isNaN(coachCost) === true){
        const totalCost = playerExpenses + managerCost + coachCost;
        setTextElementById('total-expenses', totalCost);
    }
    else{
        alert ('Input value is not a number');
    }
})


