const navButton = document.querySelector('.nav-btn');
const overlay = document.querySelector('.overlay');
const MobileNavigation = document.querySelector('.mobile-navigation');
const searchBar = document.querySelector('.search-bar');
const listItems = document.querySelectorAll('.list-item');

const openMenu = function() {
  overlay.classList.add('fade-in');
  MobileNavigation.classList.add('active');
  overlay.classList.remove('fade-out');
  MobileNavigation.classList.remove('inactive');
}; 

navButton.addEventListener('click', openMenu);

const closeMenu = function() {
  overlay.classList.remove('fade-in');
  MobileNavigation.classList.remove('active');
  overlay.classList.add('fade-out');
  MobileNavigation.classList.add('inactive');
}

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

searchBar.addEventListener('input', filterInbox);
