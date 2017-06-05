var view = {
  createMainDiv: function () {
    var div = document.createElement('div');
    var bodyElement = document.querySelector('body');
    div.className = 'container';
    bodyElement.insertBefore(div, bodyElement.firstChild);
    return div;
  },
  createHeroImage: function (src) {
    var heroImage = document.createElement('img');
    heroImage.setAttribute('src', src);
    return heroImage;
  },
  createHeader: function (head) {
    var header = document.createElement('h1');
    header.innerHTML = head;
    return header;
  },
  createText: function (copy) {
    var text = document.createElement('p');
    text.innerHTML = copy;
    return text;
  },
  createSecondHeader: function (text) {
    var secondHeader = document.createElement('h2');
    secondHeader.innerHTML = text;
    return secondHeader;
  },
  createNavBtn: function (right, id) {
    var navBtn = document.createElement('i');
    if (right) {
      navBtn.className = 'fa fa-arrow-right fa-lg fa-2x';
    } else {
      navBtn.className = 'fa fa-arrow-left fa-lg fa-2x';
    }
    navBtn.id = id;
    return navBtn;
  },
  createHomePage: function () {
    var bodyElement = document.querySelector('body');
    var mainDiv = document.querySelector('div');
    mainDiv.className = 'container';
    mainDiv.innerHTML = '';
    bodyElement.insertBefore(mainDiv, bodyElement.firstChild);
    mainDiv.innerHTML = '';
    mainDiv.appendChild(view.createHeader('Welcome to the Kababatory!'));
    mainDiv.appendChild(view.createHeroImage('images/fire.jpg'));
    mainDiv.appendChild(view.createSecondHeader('Our Food'));
    mainDiv.appendChild(view.createText('We offer the most premium of halal beef, perfectly prepared into the most succulent of meat cutlets before getting smoked for hours on end in our very own charcoal grill.'));
    mainDiv.appendChild(view.createNavBtn(true, 'to-menu'));
  },
  createMenuPage: function () {
    var mainDiv = document.querySelector('div');
    mainDiv.innerHTML = '';
    mainDiv.appendChild(view.createHeader('Mouthwatering Meat Treats'));
    mainDiv.appendChild(view.createHeroImage('images/kabab.jpeg'));
    mainDiv.appendChild(view.createSecondHeader("Kababatory's Infamous Menu"));
    mainDiv.appendChild(view.createText('Stay tuned for the menu or give us a call at 1-800-KABAB to find out about the freshest daily catch.'));
    mainDiv.appendChild(view.createNavBtn(true, 'to-about'));
    mainDiv.appendChild(view.createNavBtn(false, 'to-home'));
  },
  createAboutPage: function () {
    var mainDiv = document.querySelector('div');
    mainDiv.innerHTML = '';
    mainDiv.appendChild(view.createHeader('Kababatory Origins'));
    mainDiv.appendChild(view.createHeroImage('images/prince.jpg'));
    mainDiv.appendChild(view.createSecondHeader("A Prince's Journey"));
    mainDiv.appendChild(view.createText("The story of the prince is one of persistence, hard work and real dedication to one's craft. Starting off on a cart, he slowly built his empire through his infamous liver sandwiches and quickly became a staple in street food, subsequently expanding into a full-blown restaurant where he can fulfill his passion of serving irresistible meats."));
    mainDiv.appendChild(view.createNavBtn(false, 'to-menu'));
  }
};
var handlers = {
  setUpEvents: function () {
    var mainDiv = document.querySelector('div');
    mainDiv.addEventListener('click', function (event) {
      var elementClicked = event.target;
      if (elementClicked.id === 'to-menu') {
        view.createMenuPage();
      } else if (elementClicked.id === 'to-home') {
        view.createHomePage();
      } else if (elementClicked.id === 'to-about') {
        view.createAboutPage();
      }
    });
  }
};
view.createMainDiv();
view.createHomePage();
handlers.setUpEvents();
