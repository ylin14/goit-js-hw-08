import throttle from "lodash.throttle";

const formRef = document.querySelector(".feedback-form");
const emailRef = document.querySelector("label>input");
const messageRef = document.querySelector("label>textarea");
const STORAGE_KEY = "feedback-form-state";



function onFormInput(e) {
    const dataObj = createObj(emailRef.value, messageRef.value);

    addObjToLocalStorage(dataObj)
}

function createObj (email, message) {
    return {
        email,
        message
    }
}


function addObjToLocalStorage (obj) {
    const strigifiedObj = JSON.stringify(obj);
    localStorage.setItem(STORAGE_KEY, strigifiedObj);
}


function getSavedData () {
    const savedData = localStorage.getItem(STORAGE_KEY);
    
    if(!savedData) {
        return {
            email: "",
            message: "",
        }
    }

    return JSON.parse(savedData);
    
}

function setDataToForm () {
    const {email, message} = getSavedData ();
    emailRef.value = email;
    messageRef.value = message;
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log(getSavedData ());

    emailRef.value = "";
    messageRef.value = "";
    localStorage.clear();
}


setDataToForm ();

formRef.addEventListener("input", throttle(onFormInput, 500));
formRef.addEventListener("submit", onFormSubmit);


