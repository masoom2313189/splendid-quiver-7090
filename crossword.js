var swiper = new Swiper(".card_slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let crosswordData = [
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/TH_Cryptic_Sunday.svg", title:"The Hindu Cryptic on Sunday", desc:"Spice up your Sundays too with The Hindu Cryptic, now fitted with training wheels!", cate: "Marathonar", time:"Sunday", res: "15x15"},
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/onedown_logo.svg", title:"One Down", desc:"Figuring out the meanings will help you crack this short and simple crossword.", cate: "Cakewalk", time:"5 Times a Week", res: "9x9"},
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/Sportstar_logo.svg", title:"The Sportstar Crossword", desc:"A quiz-style crossword for the sports fans.", cate: "Brain-jogger", time:"Fortnightly", res: "15x15"},
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/TheGuardian_quick_logo.svg", title:"The Guardian Quick", desc:"Figure out the straightforward meanings of clues to solve this crossword.", cate: "Brain-jogger", time:"6 Times a Week", res: "15x15"},
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/Sport_on_logo.svg", title:"Sport On", desc:"If you know your sports trivia, this crossword will be a breeze.", cate: "Brain-jogger", time:"Weekly", res: "15x15"},
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/TH_Cryptic_Sunday.svg", title:"The Hindu Cryptic", desc:"Seemingly meaningless words and phrases hold the key to this crossword.", cate: "Marathonar", time:"6 Times a Week", res: "15x15"},
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/Guardian_everyman_logo.svg", title:"Everyman", desc:"SThough the clues in it are cryptic, this crossword is recommended for everyone.", cate: "Marathonar", time:"Weekly", res: "15x15"},
]

let sudokuData = [
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/sudoku_mini_logo.svg", title:"Mini Sudoku", desc:"A game that can be solved with the apt use of just six numbers.", cate: "Cakewalk", time:"Daily", res: "6x6"},
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/sudoku_easy_logo.svg", title:"Sudoku Easy", desc:"The easiest version of the game that requires just nine numbers.", cate: "Cakewalk", time:"Daily", res: "9x9"},
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/sudoku_medium_logo.svg", title:"Sudoku Medium", desc:"A game that needs just nine numbers, set just right for the regular solver.", cate:"Brain-jogger", time:"Daily", res: "9x9"},
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/sudoku_hard_logo.svg", title:"Sudoku Hard", desc:"It doesn't get harder than this in this number game.", cate: "Marathoner", time:"Daily", res: "15x15"},
]


let wordSearchData = [
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/TH_Cryptic_Sunday.svg", title:"The Hindu Cryptic on Sunday", desc:"Spice up your Sundays too with The Hindu Cryptic, now fitted with training wheels!", cate: "Marathonar", time:"Sunday", res: "15x15"},
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/onedown_logo.svg", title:"One Down", desc:"Figuring out the meanings will help you crack this short and simple crossword.", cate: "Cakewalk", time:"5 Times a Week", res: "9x9"},
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/Sportstar_logo.svg", title:"The Sportstar Crossword", desc:"A quiz-style crossword for the sports fans.", cate: "Brain-jogger", time:"Fortnightly", res: "15x15"},
  {image:"https://crossword.thehindu.com/images/crossword-logos/svg/TheGuardian_quick_logo.svg", title:"The Guardian Quick", desc:"Figure out the straightforward meanings of clues to solve this crossword.", cate: "Brain-jogger", time:"6 Times a Week", res: "15x15"},
]


crossword = () =>{
  appendCrossword(crosswordData);
}

let container = document.getElementById("div-10");
appendCrossword =() =>{
  container.innerHTML = "";
  crosswordData.forEach(el => {
    let div = document.createElement("div");
    div.id = "game";

    let divimg = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;

    let res = document.createElement("p");
    res.innerText = el.res;

    let divall = document.createElement("div");

    let title = document.createElement("h2");
    title.innerText = el.title;

    let desc = document.createElement("p");
    desc.innerText = el.desc;

    let cate = document.createElement("button");
    cate.innerText = el.cate;

    let ilogo = document.createElement("i");
    ilogo.className = "fa fa-info-circle";
    
    let time = document.createElement("h3");
    time.innerText = el.time;

    divimg.append(img, res);
    divall.append(title, desc, cate, time, ilogo);
    div.append(divimg, divall);
    container.append(div);
  });
}

appendCrossword(crosswordData);


appendSudoku =() =>{
  container.innerHTML = "";
  sudokuData.forEach(el => {
    let div = document.createElement("div");
    div.id = "game";

    let divimg = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;

    let res = document.createElement("p");
    res.innerText = el.res;

    let divall = document.createElement("div");

    let title = document.createElement("h2");
    title.innerText = el.title;

    let desc = document.createElement("p");
    desc.innerText = el.desc;

    let cate = document.createElement("button");
    cate.innerText = el.cate;

    let ilogo = document.createElement("i");
    ilogo.className = "fa fa-info-circle";
    
    let time = document.createElement("h3");
    time.innerText = el.time;

    divimg.append(img, res);
    divall.append(title, desc, cate, time, ilogo);
    div.append(divimg, divall);
    container.append(div);
  });
}

sudoku = () =>{
appendSudoku(sudokuData);
}


appendWordSearch =() =>{
  container.innerHTML = "";
  wordSearchData.forEach(el => {
    let div = document.createElement("div");
    div.id = "game";

    let divimg = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;

    let res = document.createElement("p");
    res.innerText = el.res;

    let divall = document.createElement("div");

    let title = document.createElement("h2");
    title.innerText = el.title;

    let desc = document.createElement("p");
    desc.innerText = el.desc;

    let cate = document.createElement("button");
    cate.innerText = el.cate;

    let ilogo = document.createElement("i");
    ilogo.className = "fa fa-info-circle";
    
    let time = document.createElement("h3");
    time.innerText = el.time;

    divimg.append(img, res);
    divall.append(title, desc, cate, time, ilogo);
    div.append(divimg, divall);
    container.append(div);
  });
}

wordSearch = () =>{
appendWordSearch(wordSearchData);
}