// https://api.scripture.api.bible/v1/swagger.json

function DictionaryData(){
    let promise =new Promise((res,rej)=>{
        var request=new XMLHttpRequest();
        const word=document.getElementById("input1").value
        console.log(word)
        request.open('GET',`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        request.send();
        request.onload=function(){
            if(request.status==200){
                var data=JSON.parse(request.response)
                for(i=0;i<data.length;i++){
                    let value1=data[i].meanings
                    for(j=0;j<value1.length;j++){
                        let value2=value1[j].definitions
                        for(k=0;k<value2.length;k++){
                    res(value2[k].definition)
                        }
                }
            }
        }
            else{
                rej("some error occured")
            }

    promise.then((data)=>{console.log(data)
         let dictionary=document.getElementById("Dictionaryvalue");
         dictionary.innerHTML=`<div class="card" style="width: 50%;">
                <div class="card-body">
              <h5 class="card-title"> <i class="fa-brands fa-searchengin"></i> Definition of ${document.getElementById("input1").value}: </h5>
              <p class="card-text"><i class="fa-solid fa-arrow-right"></i> ${data}</p>
                </div>
                </div>`
    })
    promise.catch((err)=>{console.log(err)
     let errors=document.getElementById("Dictionaryvalue")
        errors.innerHTML=`<p class="card-text1">Word is not in  Data, Please give another word!!! </p>`
})
    }
}
)}