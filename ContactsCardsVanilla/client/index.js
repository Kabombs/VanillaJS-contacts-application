

const addItemToDom = (object) => {
    const {fName, lName, DoB, id, phone} = object;
    // console.log(object);
    
    //create card
    let card = createCard(id);
    let nameElement = createName(fName, lName);
    let birthElement = createBirthDateSpan(DoB);
    let phoneElement = createPhoneSpan(phone);
    let deleteButton = createDeleteButton(id);
    // where we add to the dom
    contactsContainer = appendElementsToCard(card, nameElement, phoneElement, birthElement, deleteButton);

}
const deleteNoteFromDom = (input) => { 
    
    let {id} = input;
    
    let objCardToDelete = document.getElementById("card." + id);
    objCardToDelete.remove();
}   

const filterSearchBar = (e) => {
    let key = e.key; 
    let value = searchBarInput.value;
    if (key == "Backspace") {
        value = (value.slice(0, value.length - 1)).toLowerCase();
    } else {
        value = (value + key).toLowerCase();
    }
    let contactsCards = document.getElementsByClassName("contacts-card");

    for (var i = 0; i < contactsCards.length; i++) {
        if (contactsCards[i].innerText.toLowerCase().includes(value)) {
            contactsCards[i].classList.remove("display-none-toggle");
        } else {
            contactsCards[i].classList.add("display-none-toggle");
        }
    }
   
}