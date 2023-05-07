document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero') ;
    const tabButton = document.querySelectorAll('[data-tab-button]') ;
    const nextButton = document.querySelector('.carousel__slide-button--right') ;
    const previousButton = document.querySelector('.carousel__slide-button--left') ;
    const indicatorsButton = document.querySelectorAll('[data-crs-button]') ;
    const factsItems = document.querySelectorAll('[data-fact-item]') ;

    // function to hidden and show header while scrollinng
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header') 
        const currentYPosition = window.scrollY ;
        const heightAjust = hero.clientHeight - 85 ;

        if (currentYPosition < heightAjust) {
            header.classList.add('header--is-hidden') ;
        } else {
            header.classList.remove('header--is-hidden') ;
        }
    })


    // navigation tab function
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].addEventListener('click', function(tab) {
            const tabId = tab.target.dataset.tabButton ;
            const buttonSelected = document.querySelector(`[data-tab-button = "${tabId}"]`) ;
            const divSelected = document.querySelector(`[data-tab-id = "${tabId}"]`) ;

            removeAllTabs() ;
            removeAllDivs() ;
            removeAllButtonsIndicators() ;
            removeAllItems() ;

            buttonSelected.classList.add('carousel__tabs__button--is-active') ;
            divSelected.classList.add('carousel__inner--is-active') ;
            divSelected.firstElementChild.classList.add('carousel__inner__item--is-active') ;
            document.querySelector('[data-crs-button = "0"]').classList.add('carousel__slide-indicators__item--is-select') ;
        })
    }

    // next function
    nextButton.addEventListener('click', function () {
        const itemActive = document.querySelector('.carousel__inner__item--is-active') ;
        const carouselId = itemActive.getAttribute('data-crs-id') ;
        const slideIndicatorButton = document.querySelector(`[data-crs-button = "${carouselId}"]`) ;

        if (itemActive != itemActive.parentElement.lastElementChild) {
            removeClass(itemActive, slideIndicatorButton) ;

            itemActive.nextElementSibling.classList.add('carousel__inner__item--is-active') ;
            slideIndicatorButton.nextElementSibling.classList.add('carousel__slide-indicators__item--is-select') ;

        } else {
            removeClass(itemActive, slideIndicatorButton) ;

            itemActive.parentElement.firstElementChild.classList.add('carousel__inner__item--is-active') ;
            slideIndicatorButton.parentElement.firstElementChild.classList.add('carousel__slide-indicators__item--is-select') ;
        }
    })

    // previous function
    previousButton.addEventListener('click', function () {
        const itemActive = document.querySelector('.carousel__inner__item--is-active') ;
        const carouselId = itemActive.getAttribute('data-crs-id') ;
        const slideIndicatorButton = document.querySelector(`[data-crs-button = "${carouselId}"]`) ;

        if (itemActive != itemActive.parentElement.firstElementChild) {
            removeClass(itemActive, slideIndicatorButton) ;

            itemActive.previousElementSibling.classList.add('carousel__inner__item--is-active') ;
            slideIndicatorButton.previousElementSibling.classList.add('carousel__slide-indicators__item--is-select') ;
            
        } else {
            removeClass(itemActive, slideIndicatorButton) ;

            itemActive.parentElement.lastElementChild.classList.add('carousel__inner__item--is-active') ;
            slideIndicatorButton.parentElement.lastElementChild.classList.add('carousel__slide-indicators__item--is-select') ;
        }
    })

    // carousel function
    for (i = 0; i < indicatorsButton.length; i++) {
        indicatorsButton[i].addEventListener('click', function(button) {
            const crsButton = button.target.dataset.crsButton ;
            const buttonIsSelected = document.querySelector(`[data-crs-button = "${crsButton}"]`) ;
            const divSelected = document.querySelector('.carousel__inner--is-active') ;
            const itemIsSelected = divSelected.querySelector(`[data-crs-id = "${crsButton}"]`) ;

            removeAllItems() ;
            removeAllButtonsIndicators() ;

            buttonIsSelected.classList.add('carousel__slide-indicators__item--is-select') ;
            itemIsSelected.classList.add('carousel__inner__item--is-active') ;
        })
    }

    // facts function
    for (i = 0; i < factsItems.length; i++) {
        factsItems[i].addEventListener('click', function (element) {
            element.target.parentElement.classList.toggle('facts__fact__item--is-open') ;
        })
    }

})

function removeClass (item, button) {
    item.classList.remove('carousel__inner__item--is-active') ;
    button.classList.remove('carousel__slide-indicators__item--is-select') ;
}

function removeAllItems () {
    const itemsCarousel = document.querySelectorAll('[data-crs-id]') ;

    for (i = 0; i < itemsCarousel.length; i++) {
        itemsCarousel[i].classList.remove('carousel__inner__item--is-active') ;
    }
}

function removeAllButtonsIndicators () {
    const indicatorsButton = document.querySelectorAll('[data-crs-button]') ;

    for (i = 0; i < indicatorsButton.length; i++) {
        indicatorsButton[i].classList.remove('carousel__slide-indicators__item--is-select') ;
    }
}

function removeAllDivs () {
    const tabDiv = document.querySelectorAll('[data-tab-id]') ;

    for (i = 0; i < tabDiv.length; i++) {
        tabDiv[i].classList.remove('carousel__inner--is-active') ;
    }
}

function removeAllTabs () {
    const tabButton = document.querySelectorAll('[data-tab-button]') ;

    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].classList.remove('carousel__tabs__button--is-active') ;
    }
}