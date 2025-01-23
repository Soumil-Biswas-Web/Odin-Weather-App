import createForm from "./createForm";
import createDisplay from "./createDisplay";

// Runs functions to create header, main, and footer elements
const pageLoad = (content) => {
    // Write Code Here    

    content.appendChild(createForm());

    content.appendChild(createDisplay());    

    return content;
}

export default pageLoad;