class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    // console.log(element)
    
    // assign button to the drop down button in the html. 
    this.button = this.element.querySelector('.dropdown-button');
    // console.log(this.button)
    
    // Assign content to the hidden drop down context. 
    this.content = document.querySelector('.dropdown-content');
    // console.log(this.content)
    
    // Add event listener to the visible button. Two ways! 
    this.button.addEventListener('click', () => this.toggleContent());
    // this.button.addEventListener('click', function(){
    //   this.toggleContent();
    // });

    // this.button.addEventListener('click', this.toggleContent.bind(this))
  }

  toggleContent() {
    // Toggle the .dropdown-hidden class on the dropdown content. 
    this.content.classList.toggle('dropdown-hidden');
  }
}

// grabs the dropdown menu with the dropdown class and creates a new Dropdown object. 
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));