
function ResizeElement(buttonElement) {
    const resizableContainer = document.querySelector('.resizable-viewport');
    const containerClasses = resizableContainer.classList;
    const buttonId = buttonElement.id;
    resizableContainer.style.removeProperty('width');
    resizableContainer.style.removeProperty('height');
    containerClasses.remove(containerClasses[1]);
    resizableContainer.classList.add(buttonId);
    console.log("Resizing")
}

function RotateViewport() {
    const resizableContainer = document.querySelector('.resizable-viewport');
    const containerClasses = resizableContainer.classList;
    const currentWidth = window.getComputedStyle(resizableContainer).width;
    const currentHeight = window.getComputedStyle(resizableContainer).height;

    if (!containerClasses.contains('desktop') && !containerClasses.contains('laptop')) {
        resizableContainer.style.width = currentHeight;
        resizableContainer.style.height = currentWidth;
    }
    else {
        const buttons = document.querySelectorAll('.resize');
        buttons.forEach(button => {
            if (button.id == "mobile" || button.id == "tablet") {
                button.style.backgroundColor = "lightgreen";
            }
            else if (button.id=="desktop" || button.id == "laptop") {
                button.style.backgroundColor = "red";
            }
        })

        setTimeout(() => {
            buttons.forEach(button => {button.style.backgroundColor = "lightgray";})
        }, 2000);
    }
}

function ChangeTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');

    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute('data-theme', nextTheme);
}
