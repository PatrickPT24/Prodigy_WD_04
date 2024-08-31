// Turns pages when click

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () =>{
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn) { // Check if the element exists
            if (pageTurn.classList.contains('turn')) {
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 - index;
                }, 500);
            } else {
                pageTurn.classList.add('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 + index;
                }, 500);
            }
        } else {
            console.error(`Element with ID '${pageTurnId}' not found.`);
        }
    };
});

// Contact Me Btn when click

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
});
};

// Create reverse index function
let totalpages = pages.length;
let pageNumber = totalpages - 1;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalpages - 1;
    }
}

// Back Profile Btn when click
const backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            
            setTimeout(() => {
                // reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    });
}

// Opening Animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// Opening Animation (cover right Animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)
setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2500)

// Opening Animation (page left or profile page Animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200)


// Opening Animation (all pages right Animation)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        
        setTimeout(() => {
            // reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);
    }, (index + 1) * 200 + 3200);
});

