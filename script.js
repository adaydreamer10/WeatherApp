fetch("https://api.weatherbit.io/v2.0/current?city=barcelona&key=6312c1c01f22491abd2c35e6001ee7fa")
.then((resp)=>{return resp.json()})
.then((resu)=>{console.log(resu)
    let one=document.getElementById("weatherinfone")
        one.innerHTML=resu.data[0].city_name
     let imageone=document.getElementById("firstimgone")
     let weathernum1=resu.data[0].weather.icon
     
     imageone.setAttribute("src", "https://www.weatherbit.io/static/img/icons/"+weathernum1+".png")
    let tempone=document.getElementById("tempone")
        tempone.innerHTML=resu.data[0].temp+"°"+"C"
        let dateone=document.getElementById("dateone")
        dateone.innerHTML=resu.data[0].datetime     
    })


fetch("https://api.weatherbit.io/v2.0/current?city=lahore&key=6312c1c01f22491abd2c35e6001ee7fa")
.then((resp)=>{return resp.json()})
.then((resu)=>{console.log(resu)
    let two=document.getElementById("weatherinfotwo")
        two.innerHTML=resu.data[0].city_name
    let imagetwo=document.getElementById("firstimgtwo")
    let weathernum2=resu.data[0].weather.icon
  
    imagetwo.setAttribute("src", "https://www.weatherbit.io/static/img/icons/"+weathernum2+".png")
    let temptwo=document.getElementById("temptwo")
        temptwo.innerHTML=resu.data[0].temp+"°"+"C"
        let datetwo=document.getElementById("datetwo")
        datetwo.innerHTML=resu.data[0].datetime 
})





fetch("https://api.weatherbit.io/v2.0/current?city=dubai&key=6312c1c01f22491abd2c35e6001ee7fa")
.then((resp)=>{return resp.json()})
.then((resu)=>{console.log(resu)
    let three=document.getElementById("weatherinfothree")
        three.innerHTML=resu.data[0].city_name
    let imagethree=document.getElementById("firstimgthree")
    let weathernum3=resu.data[0].weather.icon
   
    imagethree.setAttribute("src", "https://www.weatherbit.io/static/img/icons/"+weathernum3+".png")
    let tempthree=document.getElementById("tempthree")
        tempthree.innerHTML=resu.data[0].temp+"°"+"C"
    let datethree=document.getElementById("datethree")
    datethree.innerHTML=resu.data[0].datetime 
    })





    let button=document.querySelector(".btn-primary")
const weather=()=>{
    let cityname=document.getElementById("cities").value
    console.log(cityname)
    fetch("https://api.weatherbit.io/v2.0/current?city="+cityname+"&key=6312c1c01f22491abd2c35e6001ee7fa")

    .then((response)=>{ 
        return response.json()})

    .then((result)=> {console.log(result)
        console.log(result.data)
        
        let winfo=document.getElementById("weatherinfo")
             winfo.innerHTML=result.data[0].city_name
        let image=document.getElementById("firstimg")
        const weatherIcon = result.data[0].weather.icon;
        image.setAttribute("src", "icons/" + weatherIcon + ".png")
             console.log(result.data[0].weather.icon);
        let temp=document.getElementById("temp")
            temp.innerHTML=result.data[0].temp+"°"+"C"
        let descp=document.getElementById("descp")
                descp.innerHTML=result.data[0].weather.description
        let datemain=document.getElementById("datemain")
            datemain.innerHTML=result.data[0].datetime

     })

}

button.addEventListener("click", function( ){
    weather();
})