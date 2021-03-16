const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementById('navbar')[0] 
// const navbarLinks = document.getElementsByClassName('links')[0] 

toggleButton.addEventListener('click', () => {
    navbarLinks.toggle('active')
})

//I'm not sure how to get this to work