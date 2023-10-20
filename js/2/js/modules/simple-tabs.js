export default function initializeTabs() {
    // Select all tab content elements (divs)
    const tabContents = document.querySelectorAll('.simpletabs > div');
    // Select all tab link elements (anchors) inside an unordered list element
    const tabLinks = document.querySelectorAll('.simpletabs ul li a');
    // Get the total number of tabs
    const numTabs = tabLinks.length;
    // Set the initial active tab index to 0
    let activeTabIndex = 0;

    // Loop over each tab link element and add a click event listener to it
    tabLinks.forEach((tabLink, tabIndex) => {
        tabLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Call the openTab function and pass in the current tab index
            openTab(tabIndex);
            // Set focus on the clicked tab link element
            tabLink.focus();
        });
        // Add keydown event listener to the tab link element to change focus on keyboard arrow press
        tabLink.addEventListener('keydown', (e) => {
            // Check for left arrow key press
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                // Calculate the new active tab index based on the arrow press direction
                activeTabIndex = (activeTabIndex + numTabs - 1) % numTabs;
                // Call the openTab function with the new active tab index
                openTab(activeTabIndex);
                // Set focus on the new active tab link element
                tabLinks[activeTabIndex].focus();
            }
            // Check for right arrow key press
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                // Calculate the new active tab index based on the arrow press direction
                activeTabIndex = (activeTabIndex + 1) % numTabs;
                // Call the openTab function with the new active tab index
                openTab(activeTabIndex);
                // Set focus on the new active tab link element
                tabLinks[activeTabIndex].focus();
            }
        });
    });

    // Define the openTab function
    function openTab(tabIndex) {
        // Update the activeTabIndex variable
        activeTabIndex = tabIndex;

        // Loop over each tab content element
        tabContents.forEach((tabContent, i) => {
            // Use a ternary operator to set the height and overflow CSS properties based on whether the current element index matches the tab index passed in
            tabContent.style.height = i === tabIndex ? 'auto' : 0;
            tabContent.style.overflow = i === tabIndex ? 'visible' : 'hidden';
        });

        // Loop over each tab link element
        tabLinks.forEach((tabLink, i) => {
            // Toggle the active class on/off based on whether the current element index matches the tab index passed in
            tabLink.classList.toggle('active', i === tabIndex);
            // Set the tab index focusable with keyboard
            tabLink.setAttribute('tabindex', i === tabIndex ? '0' : '-1');
            // Set the aria-selected attribute based on whether the current element index matches the tab index passed in
            tabLink.setAttribute('aria-selected', i === tabIndex ? 'true' : 'false');
        });
    }

    // Call the openTab function with the initial active tab index
    openTab(activeTabIndex);
}
