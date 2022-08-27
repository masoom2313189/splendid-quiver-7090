let dataS=[
    {
        img:"https://th-i.thgim.com/public/incoming/4k9o3g/article65811234.ece/alternates/SQUARE_115/US_Open_Djokovic_Out_Tennis_64800.jpg-acd9f.jpg",
        name:"TENNIS",
        p:"Djokovic misses U.S. Open due to lack of COVID-19 vaccination"
    },
    {
        img:"https://th-i.thgim.com/public/incoming/qjel1t/article65810124.ece/alternates/SQUARE_115/IMG_TH06BHUTIA_2_1_419IJI55.jpg",
        name:"FOOTBALL",
        p:"AIFF elections | Bhaichung Bhutia files fresh nomination for president's post"
    },
    {
        img:"https://th-i.thgim.com/public/sport/other-sports/xmh02j/article65809656.ece/alternates/SQUARE_115/1417643592.jpg",
        name:"BWF World",
        p:"Championships: Prannoy beats Lakshya to enter quarterfinals"
    },
    {
        img:"https://th-i.thgim.com/public/incoming/jm0so1/article65808850.ece/alternates/SQUARE_115/000_32GY3KT.jpg",
        name:"CRICKET",
        p:"T20 World Cup 2022 | ICC releases standing tickets for India-Pakistan clash"
    },
    {
        img:"https://th-i.thgim.com/public/incoming/lcthzq/article65806507.ece/alternates/SQUARE_115/vvs%20laxman%20ageas%20bowl%20reuters.jpg",
        name:"CRICKET",
        p:"Asia Cup | V.V.S. Laxman takes charge as interim head coach of Team India in Dravid’s absence1"
    },
    {
        img:"https://th-i.thgim.com/public/incoming/kv2mk5/article65807307.ece/alternates/SQUARE_115/daniel%20ricciardo%20mclaren%20getty.jpg",
        name:"MOTORSPORT",
        p:"Daniel Ricciardo ousted by McLaren, to leave end of 2022 F1 season"
    },
    
]

let append=(dataS)=>
{
    let container=document.querySelector("#LO2")
    container.innerHTML=null

    dataS.forEach((ele)=>{
        let div=document.createElement("div");
        let div1=document.createElement("div")
        div1.setAttribute("id","div1")
        let image=document.createElement("img");
        image.src=ele.img;
        let div2=document.createElement("div");
        div2.setAttribute("id","div2")
        div2.style.backgroundColor="white";
        let name=document.createElement("h2");
        name.innerText=ele.name;
        name.setAttribute("id","name")
        let p=document.createElement("p");
        p.innerText=ele.p
        p.setAttribute("id","p")
        div.append(div1,div2)
        div1.append(image)
        div2.append(name,p)
        container.append(div)

    })
}
append(dataS)
console.log(dataS)


let dataArt=[
    {
        heading:"Ghei urges clubs and IGU to be proactive in promoting junior golf",
        para:"Veteran player reminisces on his Chennai connection for more than three decades",
     },
     {
        heading:"Cricket: Why is age a selection criteria, asks Sheldon Jackson",
        para:"Saurashtra veteran disappointed after being excluded from India-A and",
     },
     {
        heading:"Sarabjot Singh enacts a thrilling finish to top air pistol",
        para:"The 20-year-old Sarabjot beat former national champion Dharmendra Singh Gaharwar 17-15 after having led 7",
     },
     {
        heading:"Saina Nehwal advances into pre-quarters",
        para:"Saina, took 38 minutes to dispatch Hong Kong's Ngan Yi 21-19 21-9 in the opening round.",
     },
     {
        heading:"India wins bronze",
        para:"",
     },
     {
        heading:"Agostini Carracci, Gusty Girl and Aegon please",
        para:"Pune",
     },
     {
        heading:"Hyderabad FC asserts its class against Trau in Durand Cup football tournament",
        para:"East Bengal plays out draw with Indian Navy",
     },
     {
        heading:"Lagarde for Nizam’s Gold Cup",
        para:"Hyderabad: The five-year-old horse Lagarde, who is well within himself, should no",
     },
     {
        heading:"Andrea’s rewards come in plenty",
        para:"After missing two years with injury, the 16-year-old is now in team for National Games",
     },
     {
        heading:"Sumit, Rohit bag bronze in wrestling U20 world championships",
        para:"Rohit Dahiya (82kg), an Asian under-20 bronze medal winner, beat Czech Republic’",
     },
     {
        heading:"Andrea’s rewards come in plenty ",
        para:"After missing two years with injury, the 16-year-old is now in team for National Games",
     },
     {
        heading:"Nihal Sarin joins Arjun, Raunak in second spot",
        para:"Robson in the lead",
     }
    

]

let appendArt=(dataArt)=>
{
    let box=document.getElementById("art13")
    box.innerHTML=null

    dataArt.forEach((ele)=>{
        let div=document.createElement("div")
        div.setAttribute("class","box1")
        let p1=document.createElement("p");
        p1.innerText=ele.heading;
        p1.setAttribute("class","heading")
        let p=document.createElement("p");
        p.innerText=ele.para;
        p.setAttribute("class","para")

        div.append(p1,p);
        box.append(div)
    })
}
appendArt(dataArt)