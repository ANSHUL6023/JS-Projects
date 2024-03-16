const img = document.querySelector("img");

const images = [
  "./img1.jpg",
  "./img2.jpg",
  "./img3.jpg",
  "./img4.jpg",
  "./img5.jpg",
  "./img6.jpg",
  "./img7.jpg",
];

let index = 0;

function eClick() {
  ++index;
  index = index % 7;
  img.src = images[index];
}
