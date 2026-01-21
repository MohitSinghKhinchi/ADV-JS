//  js - 3  video youtube
// {
//     console.log(`hlo1`)
//     console.log(`hlo2`)
//     setTimeout(() => {
//         console.log(`hlo3`)
//     }, 2000)
//     console.log(`hlo4`)
//     //  sync async 
//     //  as code jo line by line chale vo sink hai 
//     //  ase code jo jab bhi chle k liye ready ho jaye vo async hai 


//     //  call back function  --> fuction ko call m function
//     function kuchderbaddchlunga(val) {
//         setTimeout(() => {
//             console.log(val)
//         }, Math.floor(Math.random() * 20) * 1000)
//     }
//     kuchderbaddchlunga(function () {
//         console.log(`hey`)
//     })

//     //  call back hell
//     function profilelekaraao(name, cb) {
//         console.log(`fatching profile data....`)
//         setTimeout(() => {
//             console.log(`profile fached of ${name}`);
//             cb({ _id: 1222, name, age: 27 });
//         }, 2000)
//     }
//     function saarepostlekaao(id, cb) {
//         console.log(`fatching all posts....`)
//         setTimeout(() => {
//             cb({ _id: id, posts: [`hel `, `hlo`] })
//         }, 3000)
//     }
//     profilelekaraao(`mohit`, function (prodata) {
//         console.log(prodata);
//         saarepostlekaao(prodata.id, function (posts) {
//             console.log(posts);
//         });
//     })

//     //  promasis 
//     //aap  ak promis banaate ho jo ki 2 states m se ak asatre m jaa sakta hai and wo yaa to resolve hoga yaa to reject hoga aab vo kya hoga ye to time batyaga par  apan ko dono k liye code likhna hota ha


//     let pr = new Promise(function (res, rej) {
//         setTimeout(() => {
//             // res(`mohit`);
//             let rn = Math.floor(Math.random() * 10);
//             if (rn > 5) res(`resolved with ` + rn);
//             else rej(rn);
//         }, 3000)

//     })
//         .then(function (val) { // res
//             console.log(val)
//         });
//     pr.catch(function (val) { //rej
//         console.log(val)

//     });

//     async function aabbccdd() {
//         try {
//             let val = await pr;
//             console.log(val);
//         }
//         catch (err) {
//             console.log(err)
//         }
//     }
//     aabbccdd();


//     //  fatch 
//     // fetch(url)
//     fetch("https://random.me/api/")
//         .then((raw) => raw.json())  // converting this  using json() to readble form
//         .then((data) => console.log(data.results[0].name))
// }

{
    //  js--> single threaded language
    //  ek kam ek bar mai kar payagii
    // syncronous approach

    // async approach
    // bad m ho jayega aram se kisi or code ko rokega nahi 

    //  call back --> function jo turent nahi chalega jab appka koi kaaam copmplete hoga to chalega 
    //  cb function vo bhio jo aap koi function pass karte hoo eg . addevent listiner , for each , filter , reduce , map 

    setTimeout(function () {
        console.log(`hey`)
    }, 3000)

    // getdataforminsta(`mohit`,function(){  // mohit is condition here vo fullfill hote ye iska function chalega--> called call back function 

    // })

    function abcd(fun) {
        // fun(); // yaha pe niche wala function call hua hai jo pass kiya hai function m 
        fun(function (fn2) {
            console.log(`hlooojii funtion niche wala call hua `);
            fn2(function () {

            });
        }); // yaha pe niche wala function call hua hai jo pass kiya hai function m 

    }
    abcd(function (fun) {
        console.log(`hlooojii funtion upper wala call hua  `);
        fun(function (fn3) {
            fn3();
        });
    })
}
{
    function abcd(fn) {
        fn(
            // jaha bhi function waha pe bhi function diya jaa sakta hai 
            function (fn3) {
                fn3(
                    function (fn5) {
                        fn5();
                    }
                )
            }
        );
    }

    abcd(
        function (fn2) { // isme funcation ka naam nahi likhte 
            console.log(`hemlo`);
            fn2(function (fn4) {
                fn4(
                    function () {
                        console.log(`hell`)
                    }
                );
            });
        }
    );
}
{
    // call backs
    //  suituation --> github se reporesertry data laao
    // 

    // getuserdetails(username,cb)
    // getallrepo(userid, cb )
    //  getrepodetail(repos[1],cb){}


    //  mohitsedetailslaao(addres ,cb)
    // dukankodhundo(details,cb)
    // saamlelo(saamanlist,cb)
    // gharaajao(address,cb) 
    function mohitsedetailslaao(address, cb) {
        console.log(`fatching details`)
        setTimeout(() => {
            cb({ latt: 23.45, lng: 56.77 });
            // cb(12);
        }, 3000)
    }
    mohitsedetailslaao(`indore`, function (details) {
        console.log(details)
    })
    {
        // server pe 
        function icecreamlaao(address, cb) {
            // logic
            cb(`vadilat`);

        }

        // user k pass
        icecreamlaao(`indore`, function (ice) {
            console.log(ice)
        })
    }
}