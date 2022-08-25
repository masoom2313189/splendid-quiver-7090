
let country= "in"
let category= "business"
let url_country = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=43a623f647aa404c955c4ff8d02657ed`
let url_category = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=43a623f647aa404c955c4ff8d02657ed`
let articles;
let getCountryNews= async (url)=>{
    let res= await fetch(url)
    let data= await res.json()
    articles= data.articles
    console.log(articles)
    part_1_left_breaking_big(articles)
     part_1_left_breaking_mini(articles)
     container_workflow_mumbai(articles)
     top_sliding_news(articles)
     left_top(articles)
     explain_left_left(articles)
     explain_left_right(articles)
    // topPics_News(articles)
}
let getCategoryNews= async (url)=>{
    let res= await fetch(url)
    let data= await res.json()
    articles= data.articles
    console.log(articles)
    part_1_right_breaking_mini(articles)
    topPics_News(articles)
    buttom_right(articles)
    
}
getCountryNews(url_country)
getCategoryNews(url_category)


let part_1_left_breaking_big= (data)=>{
    let random = Math.floor(Math.random()*20+1)
    let div = document.createElement("div")
    let img= document.createElement("img")
    img.src= data[random].urlToImage
    div.append(img)

    let h1 =document.createElement("h1")
    h1.innerText= data[random].title
    let h3= document.createElement("h3")
    h3.innerText =data[random].author
    let h5= document.createElement("h5")
    h5.innerText =data[random].description

document.getElementById("part_1_left_breaking_big").append(div,h1,h3,h5)


}

let part_1_left_breaking_mini= (data)=>{
    let random = Math.floor(Math.random()*20+1)

    let divPhoto = document.createElement("div")
    divPhoto.setAttribute("class","miniNews")
    let divText = document.createElement("div")
    divText.setAttribute("class","divText")


    let img= document.createElement("img")
    img.src= data[random].urlToImage
    divPhoto.append(img)

    let divText_opinion = document.createElement("div")
    divText_opinion.setAttribute("class","divText_opinion")
    let opinion= document.createElement("h2")
    opinion.setAttribute("class","opinion")
    opinion.innerText= "opinion"
    let comment= document.createElement("h2")
    comment.innerText= "comment"

    divText_opinion.append(opinion,comment)

    let h3= document.createElement("h3")
    h3.setAttribute("class","h3")
    h3.innerText =data[random].title


    divText.append(divText_opinion,h3)

document.getElementById("part_1_left_breaking_mini").append(divPhoto,divText)

}


let part_1_right_breaking_mini= (data)=>{
    
    for(let i=0; i<4; i++){
        let random = Math.floor(Math.random()*20+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","miniNewsDiv")
        
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","miniNews")
        let divText = document.createElement("div")
        divText.setAttribute("class","divText")
    
    
        let img= document.createElement("img")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    
        let divText_opinion = document.createElement("div")
        divText_opinion.setAttribute("class","divText_opinion")
        let opinion= document.createElement("h2")
        opinion.setAttribute("class","opinion")
        if(i==0){
            opinion.innerText= "OTHER STATES"
        }else if(i==1){
            opinion.innerText= "INTERVIEW KERALA"
        }else if(i==2){
            opinion.innerText= "PODCAST"
        }
        else if(i==3){
            opinion.innerText= "OTHER STATES"
        }
        
    
        divText_opinion.append(opinion)
    
        let h3= document.createElement("h3")
        h3.innerText =data[random].title
        h3.setAttribute("class","h3")
    
    
        divText.append(divText_opinion,h3)
        maindiv.append(divPhoto,divText)
       
    
    document.getElementById("part_1_right").append(maindiv)
    }
    
}

let container_workflow_mumbai= (data)=>{
    
    for(let i=0; i<2; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","mumbai_div")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","miniNews")
        let divText = document.createElement("div")
        divText.setAttribute("class","divText")
    
    
        let img= document.createElement("img")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    
        let divText_opinion = document.createElement("div")
        divText_opinion.setAttribute("class","divText_opinion")
        let opinion= document.createElement("h2")
        opinion.setAttribute("class","opinion")
        if(i==0){
            opinion.innerText= "OTHER STATES"
        }else if(i==1){
            let state=["MUMBAI","WEST BENAGL","HARIYANA","DELHI","GUJRAT","UTTAR PRADESH","TELENGANA","KERAELA","BIHAR","PUNJAB","JUMMU & KASHMIR","TAMILNADU"]
            opinion.innerText= state[ Math.floor(Math.random()*12+1)]
        }
        
        divText_opinion.append(opinion)
    
        let h3= document.createElement("h3")
        h3.setAttribute("class","h3")
        h3.innerText =data[random].title
    
    
        divText.append(divText_opinion,h3)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("container_workflow_mumbai").append(maindiv)
    }
    
}
let addArray=["https://tpc.googlesyndication.com/simgad/4207933630084336652","https://tpc.googlesyndication.com/simgad/12340129004741262474","https://secure-ds.serving-sys.com/resources/PROD/asset/144375/IMAGE/20220817/Rohit-Scheme__300x250_30_73070565054778339.jpg","https://frontline.thehindu.com/theme/images/fl-online/fllogo.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Zc6ixTELEsJ13NIKY2V2kJZDv02rM66zaw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zstIOfciiXh22NWimgs1RRu3WjHH6pzFMQ&usqp=CAU"]

let workflow_part_2=()=>{
    for(let i=0; i<addArray.length; i++){
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","addDiv")
        let img= document.createElement("img")
        img.setAttribute("class","addImage")
        img.src= addArray[i]
        divPhoto.append(img)
    document.getElementById("workflow_part_2").append(divPhoto)
    }

}
workflow_part_2()

let top_sliding_news=(data)=>{
    for(let i=0; i<4; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","top_sliding_news_maindiv")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","top_sliding_news_DivPhoto")

        let divText = document.createElement("div")
        divText.setAttribute("class","top_sliding_news_divText")
    
    
        let img= document.createElement("img")
        img.setAttribute("class","top_sliding_news_Image")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    

        let opinion= document.createElement("h3")
        opinion.setAttribute("class","top_sliding_news_opinion")
        opinion.innerText= data[random].title

        let h5= document.createElement("h5")
        h5.setAttribute("class","h5")
        h5.setAttribute("class","top_sliding_news_h5")
        h5.innerText= data[random].author

        
        divText.append(opinion,h5)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("top_sliding_news").append(maindiv)
    }
}


let topPics_News=(data)=>{
    for(let i=0; i<4; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","top_sliding_news_maindiv")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","top_sliding_news_DivPhoto")

        let divText = document.createElement("div")
        divText.setAttribute("class","top_sliding_news_divText")
    
    
        let img= document.createElement("img")
        img.setAttribute("class","top_sliding_news_Image")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    

        let opinion= document.createElement("h3")
        opinion.setAttribute("class","top_sliding_news_opinion")
        opinion.innerText= data[random].title

        let h5= document.createElement("h5")
        h5.setAttribute("class","h5")
        h5.setAttribute("class","top_sliding_news_h5")
        h5.innerText= data[random].author

        
        divText.append(opinion,h5)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("topPics_News").append(maindiv)
    }
}


let left_top=(data)=>{
    for(let i=0; i<1; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","mumbai_div")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","miniNews")
        let divText = document.createElement("div")
        divText.setAttribute("class","divText")
    
    
        let img= document.createElement("img")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    
        let divText_opinion = document.createElement("div")
        divText_opinion.setAttribute("class","divText_opinion")
        let opinion= document.createElement("h2")
        opinion.setAttribute("class","opinion")
        opinion.innerText= "LEAD"
        
        
        divText_opinion.append(opinion)
    
        let h3= document.createElement("h3")
        h3.setAttribute("class","h3")
        h3.innerText =data[random].title
    
    
        divText.append(divText_opinion,h3)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("left_top").append(maindiv)
    }
}


let buttom_right=(data)=>{
    for(let i=0; i<3; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","mumbai_div")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","miniNews")
        let divText = document.createElement("div")
        divText.setAttribute("class","divText")
    
    
        let img= document.createElement("img")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    
        let divText_opinion = document.createElement("div")
        divText_opinion.setAttribute("class","divText_opinion")
        let opinion= document.createElement("h2")
        opinion.setAttribute("class","opinion")
        opinion.innerText= "COMMENT"
        
        
        divText_opinion.append(opinion)
    
        let h3= document.createElement("h3")
        h3.setAttribute("class","h3")
        h3.innerText =data[random].title
    
    
        divText.append(divText_opinion,h3)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("buttom_right").append(maindiv)
    }
}


let explain_left_left=(data)=>{
    let random = Math.floor(Math.random()*20+1)
    let div = document.createElement("div")
    let img= document.createElement("img")
    img.src= data[random].urlToImage
    div.append(img)

    let h1 =document.createElement("h1")
    h1.innerText= data[random].title
    let h3= document.createElement("h3")
    h3.innerText =data[random].author
    let h5= document.createElement("h5")
    h5.innerText =data[random].description

document.getElementById("explain_left_left").append(div,h1,h3,h5)
}


let explain_left_right=(data)=>{
    for(let i=0; i<4; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","mumbai_div")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","miniNews")

        let divText = document.createElement("div")
        divText.setAttribute("class","divText")
    
    
        let img= document.createElement("img")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    
    
        let h3= document.createElement("h3")
        h3.setAttribute("class","h3")
        h3.innerText =data[random].title
    
    
        divText.append(h3)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("explain_left_right").append(maindiv)
    }
}