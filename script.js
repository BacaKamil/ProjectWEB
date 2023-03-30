document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(function(image) {
      image.addEventListener('click', function() {
        const imageUrl = this.getAttribute('src');
        window.open(imageUrl, '_blank');
      });
    });
  });
  
  

function Efect3D() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        const computedStyle = window.getComputedStyle(box);
        if (computedStyle.transformStyle === 'preserve-3d') {
            box.style.transformStyle = 'unset';
            box.style.transform = 'rotateX(0deg) rotateZ(0deg)';
            box.addEventListener('mouseover', () => {
                box.style.transform = 'rotateX(0deg) rotateZ(0deg)';
            });
            box.addEventListener('mouseout', () => {
                box.style.transform = 'rotateX(0deg) rotateZ(0deg)';
            });
        } else {
            box.style.transformStyle = 'preserve-3d';
            box.style.transform = 'rotateX(30deg) rotateZ(-15deg)';
            box.addEventListener('mouseover', () => {
                box.style.transform = 'rotateX(0deg) rotateZ(0deg)';
            });
            box.addEventListener('mouseout', () => {
                box.style.transform = 'rotateX(30deg) rotateZ(-15deg)';
            });
        }
    });
}
