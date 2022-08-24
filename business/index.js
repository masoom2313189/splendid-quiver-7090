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