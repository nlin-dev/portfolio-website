const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions(){
    
    // Button click active class 
    for (let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener("click", function(){
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += " active-btn";
        })
    }

    // Changing the active class of each section
    allSections.addEventListener("click", (e)=>{
        const id = e.target.dataset.id;
        // If there is a valid ID within the targeted dataset:
        if(id){
            // Remove the selection from the other buttons
            sectBtns.forEach((btn) =>{
                btn.classList.remove("active")
            })
            e.target.classList.add("active")

            // Hide the other sections that aren't active
            sections.forEach((section)=>{
                section.classList.remove("active")
            })

            const element = document.getElementById(id)
            element.classList.add("active");
        }
    })

    // Toggle between different themes
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode")
    })
}

PageTransitions();

