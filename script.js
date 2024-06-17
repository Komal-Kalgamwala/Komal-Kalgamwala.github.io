let currentImageIndex = 0;
const images = document.querySelectorAll('.project-image');
const totalImages = images.length;

const showImage = index => {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  });
};

const nextImage = () => {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImage(currentImageIndex);
};

const prevImage = () => {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  showImage(currentImageIndex);
};

document.querySelector('.next-button').addEventListener('click', nextImage);
document.querySelector('.prev-button').addEventListener('click', prevImage);

setInterval(nextImage, 3000); // Change image every 3 seconds

// Show the first image initially
showImage(currentImageIndex);
