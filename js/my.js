//style nav bar
var navBar = document.getElementById('navbar');
navBar.style.cssText='height: 80px; background-color: #333 ; width: 100% ; position: fixed ; top: 0';



//show and hide navbar on scrolling (first way)
var scrollingShowNav;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {
    navBar.style.display = 'block';

	// Clear our timeout throughout the scroll
	window.clearTimeout( scrollingShowNav );

	// Set a timeout to run after scrolling ends
	scrollingShowNav = setTimeout(function() {

		// Run the callback
        console.log( 'Scrolling has stopped.' );
        navBar.style.display = 'none';

	}, 1000);

}, false);

//show and hid navbar on scrolling (second way)
var scrollingShowNav;
window.addEventListener('scroll', function ( event ) {
    navBar.style.opacity = 1;
	window.clearTimeout( scrollingShowNav );
	scrollingShowNav = setTimeout(function() {
        navBar.style.opacity = 0;
	}, 1000);

}, false);

// show and hide navbar on hover
function showNavbar(x) {
    x.style.opacity = 1;
}

function hideNavbar(x) {
    x.style.opacity = 0;
}


//create the menu 
var menu = document.createElement('ul');
menu.classList = 'menu';

// create ul lis
var menuItems = ['First Sec' , 'Second Sec' , 'Third Sec' , 'Forth Sec'];
var linksId = ['firstSec' , 'secondSec' , 'thirdSec' , 'forthSec'];

for(let i=0 ; i<menuItems.length ; i++) {
    const item = document.createElement('li');
    const link = document.createElement('a');

    if(i === 0) {
        link.textContent = menuItems[i];
        link.setAttribute('href', '#' + linksId[i]);
        link.setAttribute('class', 'click active');
    } else {
        link.textContent = menuItems[i];
        link.setAttribute('href', '#' + linksId[i]);
        link.setAttribute('class', 'click');
    };
    
    item.appendChild(link);
    menu.appendChild(item);
}


// for(let i=0 ; i<menuItems.length ; i++) {
//     const item = document.createElement('li');
//     const link = document.createElement('a');
//     link.textContent = menuItems[i];
//     link.setAttribute('href', '#' + linksId[i]);
//     link.setAttribute('class', 'click');
//     item.appendChild(link);
//     menu.appendChild(item);
// }

//appent menu to the nav bar
navBar.appendChild(menu);

// add class active to each clicked nav bar link and remove from siblings
// add class active to active section and remove from siblings
var sections = document.getElementsByClassName('section');
var links = document.getElementsByClassName('click');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        if(links[i].classList.contains('active') && sections[i].classList.contains('active')){
            links[i].classList.remove('active');
            sections[i].classList.remove('active');
        } else {
            for(let x = 0 ; x < links.length ; x++ ){
                links[x].classList.remove('active');
                sections[x].classList.remove('active');
            }
            links[i].classList.add('active');
            sections[i].classList.add('active');
        }
    });
}



// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', function() {
//         if(links[i].classList.contains('active')){
//             this.classList.remove('active');
//         } else {
//             for(let x = 0 ; x < links.length ; x++ ){
//                 links[x].classList.remove('active');
//             }
//             links[i].classList.add('active');
//         }
//     });
// }


// add class active to each clicked nav bar link and remove from siblings
// add class active to active section and remove from siblings
var sections = document.getElementsByClassName('section');
var links = document.getElementsByClassName('click');

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', function() {
//         if(links[i].classList.contains('active') && sections[i].classList.contains('active')){
//             links[i].classList.remove('active');
//             sections[i].classList.remove('active');
//         } else {
//             for(let x = 0 ; x < links.length ; x++ ){
//                 links[x].classList.remove('active');
//                 sections[x].classList.remove('active');
//             }
//             links[i].classList.add('active');
//             sections[i].classList.add('active');
//         }
//     });
// }

// //scrolling activate the sections
// window.addEventListener('scroll', function() {
//     for (const section of sections) {
//         if (section.getBoundingClientRect().top <= 100 ) {
//         section.classList.add('active');
//         } else {
//             section.classList.remove('active');
//         }
//     }
// });

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        if(links[i].classList.contains('active') && sections[i].classList.contains('active')){
            links[i].classList.remove('active');
            sections[i].classList.remove('active');
        } else {
            for(let x = 0 ; x < links.length ; x++ ){
                links[x].classList.remove('active');
                sections[x].classList.remove('active');
            }
            links[i].classList.add('active');
            sections[i].classList.add('active');
        }
    });
}


///
//style nav bar
var navBar = document.getElementById('navbar');
navBar.style.cssText = 'height: 80px; background-color: #333; cursor: pointer; width: 100%; position: fixed; top: 0; z-index: 2; opacity: 0';

//show and hide navbar on scrolling
var scrollingShowNav;
window.addEventListener('scroll', function ( event ) {
    navBar.style.opacity = 1;
	window.clearTimeout( scrollingShowNav );
	scrollingShowNav = setTimeout(function() {
        navBar.style.opacity = 0;
	}, 1000);
}, false);

// show and hide navbar on hover
function showNavbar(x) {
    x.style.opacity = 1;
}

function hideNavbar(x) {
    x.style.opacity = 0;
}


//create the menu (ul) 
var menu = document.createElement('ul');
menu.classList = 'menu';

// create ul (li)s and (a)s
var menuItems = ['First Sec', 'Second Sec', 'Third Sec', 'Forth Sec'];
var linksId = ['firstSec', 'secondSec', 'thirdSec', 'forthSec'];

for (let i = 0; i < menuItems.length; i++) {
    var item = document.createElement('li');
    var link = document.createElement('a');

    if (i === 0) {
        link.textContent = menuItems[i];
        link.setAttribute('href', '#' + linksId[i]);
        link.setAttribute('class', 'click active');
    } else {
        link.textContent = menuItems[i];
        link.setAttribute('href', '#' + linksId[i]);
        link.setAttribute('class', 'click');
    }
    
    //append (a)s to (li)s
    item.appendChild(link);
    //append (li)s to ul
    menu.appendChild(item);
}

//appent menu to the nav bar
navBar.appendChild(menu);


// add class active to each clicked nav bar link and remove from siblings
// add class active to active section and remove from siblings
var sections = document.getElementsByClassName('section');
var links = document.getElementsByClassName('click');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', ()=> {
        if (links[i].classList.contains('active') && sections[i].classList.contains('active')) {
            links[i].classList.remove('active');
            sections[i].classList.remove('active');
        } else {
            for (let x = 0; x < links.length; x++) {
                links[x].classList.remove('active');
                sections[x].classList.remove('active');
            }
            links[i].classList.add('active');
            sections[i].classList.add('active');
        }
    });
}

//scrolling activate the nav bar links and sections
window.addEventListener('scroll', () => {
    for (let m=0 ; m<sections.length ; m++) {
        if (sections[m].getBoundingClientRect().top <= 200 ) {
            sections[m].classList.add('active');
            if(links[m].classList.contains('active')){
                links[m].classList.remove('active');
            } else {
                for (let x = 0; x < links.length; x++){
                    links[x].classList.remove('active');
                }
                links[m].classList.add('active');
            }
            links[m].classList.add('active');
        } else {
            sections[m].classList.remove('active');
            links[m].classList.remove('active');
        }
    }
});


// //collapse one sections
// var collapseIcon = document.querySelector('.collapse');
// var secContent = document.querySelector('.section-content');
// var uncollapseIcon = document.querySelector('.uncollapse')

// collapseIcon.addEventListener('click', ()=> {
//     secContent.style.cssText='display: none; transition: all .5s ease-in-out'
//     collapseIcon.style.display='none';
//     uncollapseIcon.style.display='block';
// });

// //uncollapse section
// uncollapseIcon.addEventListener('click', ()=> {
//     secContent.style.cssText='display: block; transition: all .5s ease-in-out'
//     uncollapseIcon.style.display='none';
//     collapseIcon.style.display='block';
// });


// use setTimeout to delay
// for (let c = 0; c < collapseIcons.length; c++) {
//     collapseIcons[c].addEventListener('click', ()=> {
//         setTimeout(() => {
//             secContents[c].style.display= 'none';
//             collapseIcons[c].style.display='none';
//             uncollapseIcons[c].style.display='block';
//         }, 2000);
//     });
// }


// for (let u = 0; u < uncollapseIcons.length; u++) {
//     uncollapseIcons[u].addEventListener('click', ()=> {
//         setTimeout(() => {
//             secContents[u].style.display = 'block';
//             uncollapseIcons[u].style.display='none';
//             collapseIcons[u].style.display='block';
//         }, 2000);
//     });
    
// }


//assign navbar in a variable
let navBar = document.getElementById('navbar');

//style nav bar
// navBar.style.cssText = 'background-color: #333; cursor: pointer; width: 100%; position: fixed; top: 0; z-index: 2; opacity: 0';

//show and hide navbar on scrolling
window.addEventListener('scroll', () => {
    navBar.style.opacity = 1;
	setTimeout( () => navBar.style.opacity = 0 , 3000);
});

// let scrollingShowNav;
// window.addEventListener('scroll', function ( event ) {
//     navBar.style.opacity = 1;
// 	window.clearTimeout( scrollingShowNav );
// 	scrollingShowNav = setTimeout(function() {
//         navBar.style.opacity = 0;
// 	}, 1000);
// }, false);

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

/*
    if (i === 0) {  
        link.textContent = menuItems[i];
        link.setAttribute('href', '#' + linksId[i]);
        link.setAttribute('class', 'click active');   // add class active to the first (li a element)
    } else {
        link.textContent = menuItems[i];
        link.setAttribute('href', '#' + linksId[i]);
        link.setAttribute('class', 'click');
    }
*/

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

/* add class active to clicked navbar link(only) and remove from siblings by forEach
links.forEach( x => {
    x.addEventListener('click', function () {
        links.forEach( y => y.classList.remove('active'));
        this.classList.add('active');
    });
});
*/

/*
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', ()=> {
        if (links[i].classList.contains('active') && sections[i].classList.contains('active')) {
            links[i].classList.remove('active');
            sections[i].classList.remove('active');
        } else {
            for (let x = 0; x < links.length; x++) {
                links[x].classList.remove('active');
                sections[x].classList.remove('active');
            }
            links[i].classList.add('active');
            sections[i].classList.add('active');
        }
    });
}
*/

//scrolling activate the nav bar links and sections

//scrolling activate the nav bar links and sections
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


// window.addEventListener('scroll', () => {
//     for (let m=0 ; m<sections.length ; m++) {
//         if (sections[m].getBoundingClientRect().top <= 200 ) {
//             sections[m].classList.add('active');
//             if(links[m].classList.contains('active')){
//                 links[m].classList.remove('active');
//             } else {
//                 for (let x = 0; x < links.length; x++){
//                     links[x].classList.remove('active');
//                 }
//                 links[m].classList.add('active');
//             }
//             links[m].classList.add('active');
//         } else {
//             sections[m].classList.remove('active');
//             links[m].classList.remove('active');
//         }
//     }
// });


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
            sections[a].classList.remove("active");
            links[a].classList.remove("active");
            }
        sections[m].classList.add("active");
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