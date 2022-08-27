let data=[
    {
        img:"https://th-i.thgim.com/public/incoming/u0lu95/article65726039.ece/alternates/SQUARE_115/IMG_CCI_Hindu_NewsDeskR6_2_1_2D9QH9O8.jpg",
        name:"MARKETS",
        p:"Markets fall after early gains tracking weak global equities"
    },
    {
        img:"https://th-i.thgim.com/public/incoming/yww1jd/article65668439.ece/alternates/SQUARE_115/IMG_NDBL-6-13-4-22.jpg_2_1_UR9P33KI.jpg",
        name:"ECONOMY",
        p:"Trade deficit to moderate, goods exports could hit $480 billion: Commerce Secretary"
    },
    {
        img:"https://th-i.thgim.com/public/incoming/tr1iod/article65802622.ece/alternates/SQUARE_115/2022-08-08T094245Z_1119996826_RC28SV9VC217_RTRMADP_3_SPICEJET-INDIA-BANKS.JPG",
        name:"INDIA",
        p:"SpiceJet looking to raise funds from external parties, other airlines: CMD"
    },
    {
        img:"https://th-i.thgim.com/public/incoming/r9nheg/article65802562.ece/alternates/SQUARE_115/IMG_Hopeful-of-conc_GQ39_2_1_CEA33NM5.jpg",
        name:"BUSINESS",
        p:"Department of Commerce being rejigged to make it future ready: Goyal"
    },
    {
        img:"https://th-i.thgim.com/public/incoming/u5lwft/article65802890.ece/alternates/SQUARE_115/2022-08-23T151501Z_525103113_RC2E2W9BZBZX_RTRMADP_3_NDTV-DEAL-ADANI-ENTR.JPG",
        name:"INDUSTRY",
        p:"Adani Group is 'deeply overleveraged', warns CreditSights"
    },
    {
        img:"https://th-i.thgim.com/public/incoming/k9bw8a/article65644625.ece/alternates/SQUARE_115/387967964_0-9.jpg",
        name:"BUSINESS",
        p:"Rated Indian companies better placed to withstand rising interest rates, inflation: S&P"
    }
]

let append=(data)=>
{
    let container=document.querySelector("#LO2")
    container.innerHTML=null

    data.forEach((ele)=>{
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
append(data)
console.log(data)

let dataArt=[
    {
        heading:"NDTV surges to 14-year high on Adani move",
        para:"New Delhi Television's (NDTV) shares surged far beyond the price Adani Group said it",
     },
     {
        heading:"No evidence Indian firms circumventing sanctions on Russia: U.S. official",
        para:"U.S. Deputy Secretary of Treasury Adeyemo says firms honouring sanctions",
     },
     {
        heading:"Aurobindo Pharma arm gets U.S. FDA nod for contraceptive",
        para:"HYDERABAD",
     },
     {
        heading:"RBI lifts curbs on American Express after compliance with data rules",
        para:"Mumbai",
     },
     {
        heading:"Business Matters | Senior care in India: Why are corporates showing interest?",
        para:"A video on why corporates are showing interest in senior care",
     },
     {
        heading:"Mercedes-Benz to unveil 3 luxury EVs in 4 months",
        para:"Targets 25% sales from EVs in India in 5 years",
     },
     {
        heading:"ONGC rebids KG gas, seeks $15 price",
        para:"The firm asked users to quote a premium they are willing to pay over and above the reserve gas price of 14% of Brent crude",
     },
     {
        heading:"Maruti recalls 166 Dzire Tour S units to replace defective airbag control unit",
        para:"The faulty airbag control unit, in rare cases, might result in",
     },
     {
        heading:"Royal Enfield unveils Hunter 350 from ₹1.5 lakh",
        para:"CHENNAI",
     },
     {
        heading:"TVS Motor picks up 48.27% stake in Narain Karthikeyan’s start-up DriveX",
        para:"CHENNAI",
     },
     {
        heading:"Rupee falls 4 paise in early trade",
        para:"The Indian currency pened at 79.84 against the dollar, then fell to 79.87.",
     },
     {
        heading:"Repco Home Finance eyes 10-11% growth in loan book during FY23",
        para:"Eyes loan book of ₹13,000 crore",
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