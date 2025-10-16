function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  if (username.length <= 2) {
    //
    return email;
  }

  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const maskedMiddle = "*".repeat(username.length - 2);

  return firstChar + maskedMiddle + lastChar + domain;
}

// Declare a variable
let email = "apple.pie@example.com";

// Call function 
console.log(maskEmail(email));

// Examples
console.log(maskEmail("freecodecamp@example.com")); 
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org")); 