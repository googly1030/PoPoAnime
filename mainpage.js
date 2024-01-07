let imgs = {
  1: "/final_project/anime img/wp11068436-naruto-4k-ultra-hd-pc-wallpapers.jpg",
  2: "/final_project/anime img/aot.jpg",
  3: "/final_project/anime img/hikyu.png",
};

let title = {
  1: "/final_project/title_card/naruto-37656.png",
  2: "/final_project/title_card/kindpng_4991300.png",
  3: "/final_project/title_card/Haikyuu_Logo_PNG(4).png",
};

var about = {
  1: "Naruto is a beloved Japanese manga and anime series created by Masashi Kishimoto, following Naruto Uzumaki, a young ninja with dreams of becoming the strongest in his village.",
  2: "Attack on Titan is a popular Japanese manga and anime series created by Hajime Isayama. It revolves around a world where humanity resides within enormous walled cities to protect themselves from gigantic humanoid creatures known as Titans.",
  3: '"Haikyu!!" is a Japanese manga and anime series created by Haruichi Furudate, focusing on high school volleyball. It follows Shoyo Hinata, a determined and short-statured player inspired by a legendary player known as the "Little Giant".',
};
var generes = {
  1: "Sub | Dub : Adventure,Action",
  2: "Sub | Dub : Adventure,Action,Fantasy",
  3: "Sub | Dub : Sports",
};

var anime_img = document.getElementById("img-1");
var anime_title = document.getElementById("title-1");
var description = document.querySelector(".about-title");
var genere = document.querySelector(".genere");
var current_index = 1;
var timeout;

function updateContent() {
  timeout = setTimeout(function () {
    current_index = (current_index % 3) + 1;
    anime_img.src = imgs[current_index];
    anime_title.src = title[current_index];
    genere.innerHTML = generes[current_index];
    description.innerHTML = about[current_index];
    updateContent();
  }, 5000);
}

updateContent();

var left_arrow = document.getElementById("left-arrow");
var right_arrow = document.getElementById("right-arrow");

function right_arrows() {
  clearTimeout(timeout);
  current_index = (current_index % 3) + 1;
  anime_img.src = imgs[current_index];
  anime_title.src = title[current_index];
  genere.innerHTML = generes[current_index];
  description.innerHTML = about[current_index];
  updateContent();
}

function left_arrows() {
  clearTimeout(timeout);
  current_index = ((current_index - 2 + 3) % 3) + 1;
  anime_img.src = imgs[current_index];
  anime_title.src = title[current_index];
  genere.innerHTML = generes[current_index];
  description.innerHTML = about[current_index];
  updateContent();
}

function updateindex(index) {
  clearTimeout(timeout);
  current_index = index;
  anime_img.src = imgs[current_index];
  anime_title.src = title[current_index];
  genere.innerHTML = generes[current_index];
  description.innerHTML = about[current_index];
  updateContent();
}

// ARROW SCROLL

var scroll_img = {
  1: "/final_project/anime_card/bluelock.jpg",
  2: "/final_project/anime_card/dr.stone.jpg",
  3: "/final_project/anime_card/jujutusu.jpg",
  4: "/final_project/anime_card/peakpx.jpg",
  5: "/final_project/anime_card/my hero acc.jpg",
};
var image_index = 0;
//RIGHT ARROW
var more_images = document.querySelector(".img-container");
var arrow1 = document.querySelector("#right-arrow1");
arrow1.addEventListener("click", function () {
  image_index++;
  var create_img = document.createElement("img");
  create_img.src = scroll_img[image_index];
  if (image_index >= 5) {
    image_index = 0;
  }
  create_img.classList.add("image");
  if (more_images.children.length > 0) {
    var firstImg = more_images.children[0];
    more_images.removeChild(firstImg);
  }
  more_images.appendChild(create_img);
  more_images.scrollLeft += create_img.offsetWidth;
  more_images.style.transform = `translateX(-${
    more_images.scrollLeft + create_img.offsetWidth
  }px)`;
});

var more_images1 = document.querySelector(".img-container1");
var arrow2 = document.querySelector("#right-arrow2");
arrow2.addEventListener("click", function () {
  image_index++;
  var create_img = document.createElement("img");
  create_img.src = scroll_img[image_index];
  if (image_index == 5) {
    image_index = 0;
  }
  create_img.classList.add("image");
  if (more_images1.children.length > 0) {
    var firstImg1 = more_images1.children[0];
    more_images1.removeChild(firstImg1);
  }
  more_images1.appendChild(create_img);
  more_images1.scrollLeft += create_img.offsetWidth;
});

//LEFT ARROW

var arrow2 = document.querySelector("#left-arrow1");
arrow2.addEventListener("click", function () {
  image_index--;
  if (image_index < 1) {
    image_index = 5;
  }
  var create_img = document.createElement("img");
  create_img.src = scroll_img[image_index];
  create_img.classList.add("image");
  if (more_images.children.length > 0) {
    var lastImg = more_images.children[more_images.children.length - 1];
    more_images.removeChild(lastImg);
  }
  more_images.insertBefore(create_img, more_images.firstChild);
  more_images.scrollLeft -= create_img.offsetWidth;
});

var arrow3 = document.querySelector("#left-arrow2");
arrow3.addEventListener("click", function () {
  image_index--;
  if (image_index < 1) {
    image_index = 5;
  }
  var create_img = document.createElement("img");
  create_img.src = scroll_img[image_index];
  create_img.classList.add("image");
  if (more_images1.children.length > 0) {
    var lastImg = more_images1.children[more_images1.children.length - 1];
    more_images1.removeChild(lastImg);
  }
  more_images1.insertBefore(create_img, more_images1.firstChild);
  more_images1.scrollLeft -= create_img.offsetWidth;
});
