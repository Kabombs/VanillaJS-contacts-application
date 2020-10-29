const addButton = document.getElementById("add-contact");
const firstNameField = document.getElementById("fName");
const lastNameField = document.getElementById("lName");
const birthDateField = document.getElementById("birthDate");
const phoneNumberField = document.getElementById("phoneNumber");
const deleteButtons = document.getElementsByClassName("delete-button");
const searchBarInput = document.getElementById("searchBarInput");

const contacts =[];

const createContactCard = () => {
    let lastContact = {"fName": firstNameField.value, "lName": lastNameField.value, "DoB": birthDateField.value, phone: phoneNumberField.value, id: ""}
    const nameFields = {fName, lName};
    // for boolean checks
    const atLeastOneNull = (firstNameField.value == "" || lastNameField.value == "");
    const nameFieldsAboveOne = (fName.value.length > 1 && lName.value.length > 1)
    if (atLeastOneNull) {
        alert("At least one of the fields is null. Please try again.")
        return;
    } else if (nameFieldsAboveOne) {
        lastContact = {...lastContact, id: generateID()};
        contacts.push(lastContact);
        addItemToDom(lastContact);
        clearFields(firstNameField, lastNameField, birthDateField, phoneNumberField);
    } else {
        return;
    }
    
}
const deleteButtonAddEventListener = (input) => {
    input.addEventListener("click", () => (deleteNoteFromDom(input)))
}

searchBarInput.addEventListener("keydown", filterSearchBar);
addButton.addEventListener("click", createContactCard);

document.addEventListener("keydown", (event)=>{
    if (event.key == "Enter") {
       console.log("HELLO");
       createContactCard();
    } else if (event.key == "Delete") {
        alert("Please use the delete buttons on each card")
    }
})
