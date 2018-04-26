let navButtons = document.getElementsByClassName('nav-button');

document.addEventListener("DOMContentLoaded", () => {
    showFirstSection();

    assignEventListenersToNavButtons();
});

const assignEventListenersToNavButtons = () => {
    [...navButtons].forEach(
        (button) => {
            button.addEventListener(
                'click', (event) => {
                    showSection(event);
                }
            )
        }
    );
};

const hideAllSections = () => {
    [...document.getElementsByTagName('section')].forEach(
        (section) => {
            section.classList.remove('d-block');
        }
    )
};

const showFirstSection = () => {
    let element = document.getElementsByTagName("section")[0];
    element.classList.add('d-block');
};

const removeButtonActiveState = () => {
    [...document.getElementsByClassName('active-button')].forEach(
        (button) => {
            button.classList.remove('active-button');
        }
    )
};

const showSection = (event) => {
    hideAllSections();

    let target = event.target;
    let sectionId = target.dataset.id;
    let elementToShow = document.getElementById(sectionId);
    elementToShow.classList.add('d-block');

    removeButtonActiveState();

    // set button active state, except for brand / home button
    [...navButtons].forEach(
        (button) => {
            let id = button.getAttribute('data-id');
            if (id === sectionId && id !== 'home-section') {
                button.classList.add('active-button');
            }
        }
    );
};