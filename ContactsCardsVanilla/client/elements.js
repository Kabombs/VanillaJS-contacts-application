

var contactsContainer = document.getElementById("contactsContainer");

const clearFields = (a, b, c, d) => {
    a.value = "";
    b.value = "";
    c.value = "";
    d.value = "";
}
const generateID = ()=> {
    let iD = Date.now();
    return iD;
}


function createCard(id) {
    let card;
    card = document.createElement("div");
    card.classList.add("contacts-card");
    card.id = "card." + id;
    return card;
}

function createName(fName, lName) {
    let firstNameNode;
    let nameElement;
    nameElement = document.createElement("span");
    let breakElement;
    breakElement = document.createElement("br");
    nameElement.append(breakElement);
    firstNameNode = document.createTextNode(fName + " " + lName);
    nameElement.appendChild(firstNameNode);
    return nameElement;
}
function createBirthDateSpan(birthdate) {
    let birthDateSpan;
    let breakElement;
    breakElement = document.createElement("br");
    birthDateSpan = document.createElement("span");
    birthDateSpan.append(breakElement);
    let birthNode = document.createTextNode(birthdate);
    birthDateSpan.appendChild(birthNode);
    return birthDateSpan;
    
}
function createPhoneSpan(ph) {
    let phoneSpan;
    let breakElement;
    let phoneNode;
    phoneSpan = document.createElement("span");
    breakElement = document.createElement("br");
    phoneSpan.append(breakElement);
    phoneNode = document.createTextNode(ph);
    return phoneSpan.appendChild(phoneNode);
}
function createDeleteButton(id) {
    let deleteButton;
    deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.id = id;
    deleteButton.innerText = "delete";
    deleteButtonAddEventListener(deleteButton);
    return deleteButton;
}
// important!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// the function that takes the other functions to make the card
function appendElementsToCard(card, nameElement, phoneElement, birthElement, deleteButton) {
    
    card.appendChild(nameElement);
    card.append(birthElement);
    let breakThis = document.createElement("br");
    card.append(breakThis)
    card.append(phoneElement)
    
    
    card.append(deleteButton);
    
    contactsContainer.appendChild(card);
    return contactsContainer;
}
