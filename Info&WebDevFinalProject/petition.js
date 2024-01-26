var signNowButton = document.getElementById("sign-now-button");
  signNowButton.addEventListener("click", function () {
    event.preventDefault();
    // access the input values inside the click event
    var nameInput = document.getElementById("name").value;
    var hometownInput = document.getElementById("hometown").value;
    var emailInput = document.getElementById("email").value;
    if (nameInput == "" || hometownInput == "" || emailInput == "") {
        alert("Please fill out all fields in the form.");
        return false;
    }

    hometownInput = hometownInput.toUpperCase()
    nameInput = nameInput.toUpperCase()

    // create a paragraph element to display the signature
    var signatureParagraph = document.createElement("p");
    signatureParagraph.innerHTML = `&#128227 ${nameInput} FROM ${hometownInput} SUPPORTS MENTAL HEALTH AWARENESS.`;

    var signaturesSection = document.getElementById("signaturesSection");
    signaturesSection.appendChild(signatureParagraph);

    document.getElementById("name").value = "";
    document.getElementById("hometown").value = "";

  });


