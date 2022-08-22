// document.getElementById('player-cards').addEventListener('click', function(event){
//     console.log(event.target.parentNode.children[0].innerText);
// })


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
        if( listLength < 5){
            selectedPlayerList.appendChild(li);
        }
        else{
            alert ('Maximum number of player added')
        }
        event.target.setAttribute('disabled', true);
    });
}