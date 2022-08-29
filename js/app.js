//assign navbar in a variable
let navBar = document.getElementById('navbar');

//show and hide navbar on scrolling
window.addEventListener('scroll', () => {
    navBar.style.opacity = 1;
	setTimeout( () => navBar.style.opacity = 0 , 3000);
});

// show and hide navbar on hover
function showNavbar(x) {
    x.style.opacity = 1;
}

function hideNavbar(x) {
    x.style.opacity = 0;
}

//create the menu (ul) 
let menu = document.createElement('ul');
menu.classList = 'menu';

// create ul (li)s and (a)s
let menuItems = ['First Sec', 'Second Sec', 'Third Sec', 'Forth Sec'];
let linksId = ['firstSec', 'secondSec', 'thirdSec', 'forthSec'];

for (let i = 0; i < menuItems.length; i++) {
    const item = document.createElement('li');
    const link = document.createElement('a');

    link.textContent = menuItems[i];
    link.setAttribute("href", "#" + linksId[i]);
    
    //add class active to the first (li a element)
    i === 0 ?  link.setAttribute("class", "click active") : link.setAttribute("class", "click");

    //append (a)s to (li)s
    item.appendChild(link);

    //append (li)s to ul
    menu.appendChild(item);
}

//appent menu to the nav bar
navBar.appendChild(menu);


// add class active to each clicked nav bar link and remove from siblings
// add class active to active section and remove from siblings
let sections = document.querySelectorAll('.section');
let links = document.querySelectorAll('.click');


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', ()=> {
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove('active');
            sections[x].classList.remove('active');
        }
        links[i].classList.add('active');
        sections[i].classList.add('active');
        
    });
} 

//scrolling activate the nav bar links and sections & remove active class from siblings
//==>(i can put the code with one in which window.onscroll)
window.addEventListener("scroll", () => {
    for (let m = 0; m < sections.length; m++) {
        
        if (sections[m].getBoundingClientRect().top <= 200) {
            for( let a = 0 ; a < sections.length ; a++) {
            sections[a].classList.remove("active");
            links[a].classList.remove("active");
            }
        sections[m].classList.add("active");
        links[m].classList.add("active");
        }
    
    }
});

//show and hide scroll up btn on scrolling
let scrollUpBtn = document.getElementById('scroll-up');
window.addEventListener('scroll', ()=> {
    if (window.pageYOffset > 400) {
        scrollUpBtn.style.display='block';
    } else {
        scrollUpBtn.style.display='none';
    }
});

//scroll up the window by clicking on scrollup btn
scrollUpBtn.addEventListener('click' , ()=> {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

//collapse and uncollapse sections
let collapseIcons = document.getElementsByClassName('collapse');
let secContents = document.getElementsByClassName('section-content');
let uncollapseIcons = document.getElementsByClassName('uncollapse')

for (let c = 0; c < collapseIcons.length; c++) {
    collapseIcons[c].addEventListener('click', ()=> {
        secContents[c].style.display= 'none';
        collapseIcons[c].style.display='none';
        uncollapseIcons[c].style.display='block';
    });
}

for (let u = 0; u < uncollapseIcons.length; u++) {
    uncollapseIcons[u].addEventListener('click', ()=> {
        secContents[u].style.display = 'block';
        uncollapseIcons[u].style.display='none';
        collapseIcons[u].style.display='block';
    });
    
}


/*
// on scroll window
window.addEventListener('scroll', () => {

    // show navbar
    navBar.style.opacity = 1;

    // hide navbar when stop scrolling with 3 seconds
    setTimeout( () => navBar.style.opacity = 0 , 3000);

    //scrolling activate the nav bar links and sections (remove active from siblings)
    for (let m = 0; m < sections.length; m++) {
        
        if (sections[m].getBoundingClientRect().top <= 200) {
            for( let a = 0 ; a < sections.length ; a++) {
            sections[a].classList.remove("your-active-class");
            links[a].classList.remove("active");
            }
        sections[m].classList.add("your-active-class");
        links[m].classList.add("active");
        }
    
    }

    //show and hide scroll up btn on scrolling
    if (window.pageYOffset > 400) {
        scrollUpBtn.style.display='block';
    } else {
        scrollUpBtn.style.display='none';
    }
    
});
*/