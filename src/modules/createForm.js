const createForm = () => {
    let weatherform = document.createElement("form");
    weatherform.setAttribute('id', 'entry_form');

    let input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'location');
    input.setAttribute('name', 'location');
    input.setAttribute('placeholder', 'Enter Location');
    input.setAttribute('required', true);

    weatherform.appendChild(input);

    let submitButton = document.createElement("button");
    submitButton.setAttribute('class', 'submit_button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerHTML = "submit";

    weatherform.appendChild(submitButton);

    return weatherform;    
}

export default createForm;