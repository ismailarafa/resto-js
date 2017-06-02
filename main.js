var model = {
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
  createNavBtn: function (right) {
    var navBtn = document.createElement('i');
    if (right) {
      navBtn.className = 'fa fa-arrow-right fa-lg fa-2x';
    } else {
      navBtn.className = 'fa fa-arrow-left fa-lg fa-2x';
    }
    return navBtn;
  }
};

var handlers = {
  createMenuPage: function () {
    var mainDiv = document.querySelector('div');
    mainDiv.innerHTML = '';
    mainDiv.appendChild(model.createHeader('Mouthwatering Meat Treats'));
    mainDiv.appendChild(model.createHeroImage('images/kabab.jpeg'));
    mainDiv.appendChild(model.createSecondHeader("Kababatory's Infamous Menu"));
    mainDiv.appendChild(model.createText('Stay tuned for the menu or give us a call at 1-800-KABAB to find out about the freshest daily catch.'));
    mainDiv.appendChild(model.createNavBtn(true));
    mainDiv.appendChild(model.createNavBtn(false));
  },
  createAboutPage: function () {
    var mainDiv = document.querySelector('div');
    mainDiv.innerHTML = '';
    mainDiv.appendChild(model.createHeader('KababatoryOrigins'));
    mainDiv.appendChild(model.createHeroImage('images/prince.jpg'));
    mainDiv.appendChild(model.createSecondHeader("A Prince's Journey"));
    mainDiv.appendChild(model.createText("The story of the prince is one of persistence, hard work and real dedication to one's craft. Starting off on a cart, he slowly built his empire through his infamous liver sandwiches and quickly became a staple in street food, subsequently expanding into a full-blown restaurant where he can fulfill his passion of serving irresistible meats."));
    mainDiv.appendChild(model.createNavBtn(true));
    mainDiv.appendChild(model.createNavBtn(false));
  }
};
var view = {
  createHomePage: function () {
    var bodyElement = document.querySelector('body');
    var mainDiv = document.querySelector('div');
    mainDiv.className = 'container';
    mainDiv.innerHTML = '';
    bodyElement.insertBefore(mainDiv, bodyElement.firstChild);
    mainDiv.innerHTML = '';
    mainDiv.appendChild(model.createHeader('Welcome to the Kababatory!'));
    mainDiv.appendChild(model.createHeroImage('images/fire.jpg'));
    mainDiv.appendChild(model.createSecondHeader('Our Food'));
    mainDiv.appendChild(model.createText('We offer the most premium of halal beef, perfectly prepared into the most succulent of meat cutlets before getting smoked for hours on end in our very own charcoal grill.'));
    mainDiv.appendChild(model.createNavBtn(true));
  },
  setUpEvents: function () {
    var mainDiv = document.querySelector('div');
    var p = document.querySelector('p').innerHTML;
    mainDiv.addEventListener('click', function (event) {
      var elementClicked = event.target;
      if (elementClicked.className === 'fa fa-arrow-right fa-lg fa-2x' && p.indexOf('halal') > 0) {
        handlers.createMenuPage();
      } else if (elementClicked.className === 'fa fa-arrow-right fa-lg fa-2x' &&
                p.indexOf('1-800') > 0) {
        handlers.createAboutPage();
      } else if (elementClicked.className === 'fa fa-arrow-left fa-lg fa-2x' && p.indexOf('prince') > 0) {
        view.createMenuPage();
      } else if (elementClicked.className === 'fa fa-arrow-left fa-lg fa-2x' && p.indexOf('1-800') > 0) {
        handlers.createHomePage();
      }
    });
  }
};
model.createMainDiv();
view.createHomePage();
view.setUpEvents();
