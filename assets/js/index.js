import emailData from './emailData.js';

const navButton = document.querySelector('.nav-btn');
const overlay = document.querySelector('.overlay');
const MobileNavigation = document.querySelector('.mobile-navigation');
const searchBar = document.querySelector('.search-bar');
const listItems = document.querySelectorAll('.list-item');
const header = document.querySelector('.header');
const emailSection = document.querySelector('.emails'); 
const individualEmail = document.querySelector('.individual-email');
const backBtn = document.querySelector('.back-btn'); 
const emailBody = document.querySelector('.email-body'); 


/*Adds and removes special utility 
classes needed to open the navigation menu.*/
const openMenu = function() {
  overlay.classList.add('fade-in');
  MobileNavigation.classList.add('active');
  overlay.classList.remove('fade-out');
  MobileNavigation.classList.remove('inactive');
}; 

//Adds event listener to navigation button.
navButton.addEventListener('click', openMenu);

 
/*Adds and removes special utility 
classes needed to close the navigation menu.*/
const closeMenu = function() {
  overlay.classList.remove('fade-in');
  MobileNavigation.classList.remove('active');
  overlay.classList.add('fade-out');
  MobileNavigation.classList.add('inactive');
}
//Adds event listener to background overlay.
overlay.addEventListener('click', closeMenu);

const filterInbox = function() {
  const searchInput = searchBar.value.toLowerCase();     

  listItems.forEach(listItem => { 
      const subject = listItem.querySelector(":scope .subject").textContent;

      if (subject.toLowerCase().includes(searchInput)) {
        listItem.style.display = "";
      } else {
        listItem.style.display = "none";
      }
  });
};

//Adds a click event listener to the search input.
searchBar.addEventListener('input', filterInbox);
 
//Renders an html template for each object in the emailData array.
for (let i = 0; i < listItems.length; i++) {
  let htmlTemplate = `
  <div class="email ${emailData[i].id}">
    <h2 class="sender">${emailData[i].sender}</h2>
    <p class="subject">${emailData[i]['subject'].slice(0, 19)}...</p>
    <p class="date">${emailData[i].date}</p>
    <p class="lead">${emailData[i]['email'].slice(0, 27)}...</p>
  </div>
  `;
  listItems[i].innerHTML = htmlTemplate;
}

//
const emails = document.querySelectorAll('.email');
emails.forEach(email => {
  const renderEmail = () => {

    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
    
    const id = Array.from(email.classList)[1];

    const emailObj = emailData.find(obj => obj.id === id);
 
    individualEmail.style.display = 'block';

    const emailTemplate = `
      <h2 class="email-heading">${emailObj.subject}</h2>

      <button class="favorite-btn">
        <i class="fa-regular fa-star"></i>
      </button>

      <div class="sender-content">
          <div class="sender-info">
            <i class="fa-regular fa-circle-user sender-icon"></i>

            <p class="sender-name">${emailObj.sender}</p>
          </div>

          <div class="sender-options"> 
            <i class="fa-solid fa-reply reply"></i>

            <i class="fa-solid fa-ellipsis-vertical more-settings"></i>
          </div>
      </div>

      <p class="email-content">${emailObj.email}</p> 
    `;

    emailBody.innerHTML = emailTemplate;
  };

  email.addEventListener('click', renderEmail);
});

backBtn.addEventListener('click', () => {
  individualEmail.style.display = 'none';
});
