{
    //  promis ==> ak kaam jaa k karo
    //  pending 
    // ho gaya --> resolve 
    // nahi hua --> reject 

    // face k pass jaao -> 
    // pending
    // data aya --> resolve
    // data nahi aya --> reject

    // promis ak varible m store hogaa
    // promis ke andar ak function hai jo resolve or reject acceot karta hai 
    let prm = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(console.log(`resolve is cALLED AFTER 3 sec`));
            // resolve();
            reject();
        }, 3000)
    })
    console.log(prm)
    prm.then(function () {
        console.log(`resolved`)
    })
    prm.catch(function () {
        console.log(`rejected`)
    })

}
//     {
//         let promis = new Promise((res, rj) => {
//             setTimeout(() => {
//                 res();
//             }, 2000)
//         })
//         promis.then(function () {
//             console.log(`RESOLVED`)
//         })
//         promis.catch(function () {
//             console.log(`rejected`)

//         })
//     }

{
    // mata pe jaao  async347 se data laao-->  koi data nahi aya --> rej / resolve
   let prm = new Promise((resolve,reject)=>{
        // locic data aya to
        // if data aya to resolve
        // if data nahi aya to reject
    })
    prm.then(()=>{

    })
    prm.catch(()=>{

    })
}

{
    fetch('https://randomuser.me/api/') // fech se kise bhi url pe jaa sakte hai 
    //  fetch ka data redable nahi hota 
    .then((notreadble)=>{
        console.log(notreadble) // not readaBLE DATa
        // jab aap return karte ho to ak new promis niklta haa --> .then() kyuki aapko nahi pta ke data kab tak aayega server se  
        return notreadble.json(); // isko redable banate hai jsaon se 
    })
    .then((aslidata)=>{   // ike badd jo data milta hai vo redeable hota hai 
        console.log(aslidata.results[0].name.first);
    })
    {
        // SHORT FORM 
        fetch("https://randomuser.me/api/")
        .then((raw)=>{ return raw.json()})
        .then((data)=>{
            console.log(data.results[0].name.last);
        })
        // if promis fail catch will run 
        .catch(( err)=>{
            console.log(err)
        })
    }
}


//                                             ||  ASYNC AND AWAIT  || 
//  YE BHI PROMIS PE KAAM KARTA HAI 
    let pro = new Promise((res,rej)=>{
        setTimeout(()=>{
            res();
        },3000)
    })


{
    async function abcd(){
   let raw = await fetch('https://randomuser.me/api/')
   let data =await raw.json();
   console.log(data.results[0].name.title);
    }
    abcd()
}

{
    function getnum (){
        return new Promise((res,rej)=>{
       setTimeout(()=>{
        let num = Math.floor(Math.random()*10);
       if(num>5){
        res(true)
        res(console.log(num));
       }
       else  rej(false); rej(console.log(num));
       },3000)
    })
}
async function aabb(){
let v = await getnum();
console.log(v);
}
aabb();
}

//  setinterval  and set-timeout 