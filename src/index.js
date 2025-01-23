import './style.css';
import pageLoad from './modules/pageLoad';
import formSubmit from './modules/formsubmit';

// Load Content Page

const init = () => {
    let content = document.createElement("div");
    content.setAttribute("id", "content");
    // Load all DOM elements
    content = pageLoad(content); 
    document.body.appendChild(content);
}

// Driver Code

init();

console.log("DOM created");

formSubmit();
