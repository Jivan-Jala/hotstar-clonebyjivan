let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "The Falcon and the Winter Soldier is based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier ",
      Image: "images/slider 2.PNG"
    },
    {
      name: "loki",
      des:
        "Loki is the third television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, sharing continuity with the films of the franchise ",
      Image: "images/slider 1.PNG"
    },
    {
      name: "wanda vision",
      des:
        "WandaVision, is the first television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, sharing continuity with the films of the franchise, and is set after the events of the film Avengers: Endgame (2019). ",
      Image: "images/slider 3.PNG"
    },
    {
      name: "raya and the last dragon",
      des:
        "Raya and the Last Dragon is based on traditional Southeast Asian cultures.",
      Image: "images/slider 4.PNG"
    },
    {
      name: "luca",
      des:
        "Luca, the film centers on Luca Paguro, a young sea monster boy with the ability to assume human form while on land, who explores the town of Portorosso with his new best friends, Alberto Scorfano and Giulia Marcovaldo, experiencing a life-changing summer adventure",
      Image: "images/slider 5.PNG"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0;
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    imgElement.src = movies[slideIndex].Image;
    slideIndex++;
  
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide(sliders);
  }, 3000);
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  