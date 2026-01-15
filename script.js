
function ResizeElement(buttonElement) {
    const resizableContainer = document.querySelector('.resizable-viewport');
    const containerClasses = resizableContainer.classList;
    const buttonId = buttonElement.id;

    containerClasses.remove(containerClasses[1]);
    resizableContainer.classList.add(buttonId);
}

function RotateViewport() {
    const resizableContainer = document.querySelector('.resizable-viewport');
    const containerClasses = resizableContainer.classList;
    const currentWidth = window.getComputedStyle(resizableContainer).width;
    const currentHeight = window.getComputedStyle(resizableContainer).height;

    if (containerClasses.contains('desktop') || containerClasses.contains('laptop')) {
    }
}
