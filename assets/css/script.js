function generatePassword(){
    console.log("generatepassword")   

    let passwordLength= prompt("enter number between 8 and 128");
    console.log (passwordLength)
    let lowercase= confirm("do you want to add a lowercase letter");
    console.log (lowercase)
    let uppercase= confirm("do you want to add a uppercase letter");
    console.log (uppercase)
    let numeric= confirm("do you want to add a number");
    console.log (numeric)
    let specialcharacters= confirm("do you want to add a special character");
    console.log (specialcharacters)  
}