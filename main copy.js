// Function to toggle the responsive menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
  }
  
  // Function to handle form submission
  function handleSubmit() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent the default form submission
  
      // Simulate form submission (replace with actual submission logic)
      const formData = new FormData(form);
      console.log('Form Data:', formData);
  
      // Clear the form (optional)
      form.reset();
    });
  }
  
  // Function to add interactivity (e.g., click event on a button)
  function addInteractivity() {
    const interactiveElement = document.querySelector('.interactive-element');
    if (interactiveElement) {
      interactiveElement.addEventListener('click', () => {
        // Your interactive code here
        alert('Button Clicked!');
      });
    }
  }
  
  // Function to initialize the website
  function initializeWebsite() {
    toggleMenu(); // Initialize menu state
    handleSubmit(); // Initialize form submission
    addInteractivity(); // Initialize interactivity
  }
  
  // Call the initializeWebsite function when the DOM is loaded
  document.addEventListener('DOMContentLoaded', initializeWebsite);
  