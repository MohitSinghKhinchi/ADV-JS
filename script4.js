{
    //     ## Exercise 1 — Very Easy (Warming up)

    // **Task (Hindi):** Ek function banao `afterDelay`

    // **Requirements:**
    // - Ye function do cheezein lega:
    //   1. `time` (milliseconds)
    //   2. `callback` function
    // - Given `time` ke baad `callback` call kare
    // - Callback ke andar `"Callback executed"` print hona chahiye

    // **Use case:**
    // > “2 second baad ek kaam karna hai”

    // **Goal:**
    // - Samajhna ki callback delay ke baad kaise execute hota hai
    // - Ye `setTimeout` + callback connection hai



    function afterdelay(time, cb) {
        // logic
        setTimeout(() => {
            cb({ id: 1, name: `mohit` });
        }, time)
    }
    afterdelay(3000, function (sum) {
        // kya karna hai sum kaa uss liye yaha print karate hai 
        console.log(sum)
    })
}
{

    // ## Exercise 2 — Intermediate (Data flow)

    // **Task (Hindi):** Ek function banao `getUser`

    // **Requirements:**
    // - `getUser` `username` lega
    // - 1 second ke baad `callback` ko ek object de:
    //   - `id`
    //   - `username`

    // **Then:**
    // - Callback ke andar ek aur function call karo `getUserPosts`

    // **`getUserPosts` requirements:**
    // - `userId` lega
    // - 1 second ke baad `callback` ko `posts` ka array de

    // **Final output:**
    // - User ka `username` print ho
    // - Fir uske `posts` print ho

    // **Goal:**
    // - Samajhna ki ek async ka result next async ko kaise milta hai
    // - Callback chaining practice


    function getUser(username, cb) {
        console.log(`GATING USER DETAILS`);
        setTimeout(() => {
            cb({ id: 11, username: "harsh" });
        }, 1000)
    }
    function getUserpost(id, cb) {
        console.log(`GATING USER POSTS`);
        setTimeout(() => {
            cb([`helo`, `good day`]);
        }, 2000)
    }
    getUser("harsh", function (sum) {
        getUserpost(sum.id, function (allposts) {
            console.log(sum.username, allposts)
        })
    })

}
{
    //     ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

    // **Task (Hindi):** Teen functions banao:

    // 1. `loginUser`
    //    - 1 second baad callback ko `user` object de
    // 2. `fetchPermissions`
    //    - `userId` lega
    //    - 1 second baad callback ko `permissions` array de
    // 3. `loadDashboard`
    //    - `permissions` lega
    //    - 1 second baad callback ko `"Dashboard loaded"` bole

    // **Flow:**
    // - Pehle `loginUser`
    // - Uske andar `fetchPermissions`
    // - Uske andar `loadDashboard`
    // - Final output console mein print ho

    // **Goal:**
    // - Callback nesting ko feel karna
    // - Yehi structure baad mein callback hell banta hai

    // ---cristmus tree / call back hell 
    function loginuser(username, cb) {
        console.log(`loogin user..`)
        setTimeout(() => {
            cb({ id: 2, username: "mohit" })
        }, 1000)
    }
    function fatchpremisions(id, cb) {
        console.log(`fatching permissions...`)
        setTimeout(() => {
            cb([`read`, `write`, `delete`])
        }, 2000)
    }
    function userdashboard(permissions, cb) {
        console.log(`loading dashboard...`)
        setTimeout(() => {
            cb();
        }, 2000)
    }

    loginuser(`mohit`, function (userdata) {
        fatchpremisions(userdata.id, function (permissions) {
            userdashboard(permissions, function () {
                console.log("permition loaded")
            })
        })
    })
    // ### Notes
    // - Practice in plain JavaScript using `setTimeout` and callbacks to understand the flow before converting to Promises/async–await.
}

//  promisis --> (3 states)pending , resolve(.then) , reject(.catch) 


// Exercise 4 — Easy (Confidence boost)
// Task:
// Function banao printAfterDelay
// Requirements:
// message
// time
// callback
// Kaam:
// time ke baad message print ho
// Uske baad callback execute ho aur bole:
// Done printing message
// 🎯 Goal:
// Callback execution order samjhnna
{
    function printafterdelay(time, msg, cb) {
        setTimeout(() => {
            cb(msg)
        }, time)
    }
    printafterdelay(5000, `hlo is message after givern time `, function (sum) {
        console.log(sum);
    })
}
// Exercise 5 — Easy–Intermediate (Data pass)
// Task:
// Function banao addNumbers
// Requirements:
// a, b
// 6 second baad callback ko sum do
// Callback ke andar:
// Print karo:
// Result is <sum>
// 🎯 Goal:
// Callback ke through product bhejna
{
    function addnumber(a, b, cb) {
        console.log(`adding 2 numbers`)
        setTimeout(() => {
            cb(a + b);
        }, 6000)
    }
    addnumber(10, 12, function (sum) {
        console.log(`the sum is` + sum)
    })
}
// Exercise 6 — Intermediate (Dependent async)
// Functions:
// getProduct
// productId lega
// 1 sec baad callback ko object de:
// { id, name, price }
// getDiscount
// price lega
// 1 sec baad callback ko discount amount de
// Final Output:
// Product: Laptop
// Final Price: 45000
// 🎯 Goal:
// Ek async ka output → dusre async ka input
{
    function getproduct(proid, cb) {
        setTimeout(() => {
            cb({ id: proid, name: `laptop`, price: 50000 })
        }, 1000)
    }
    function getdiscount(price, cb) {
            setTimeout(() => {
                let discount = 5000;
                cb(discount)
            }, 1000)
        }
    

    getproduct(112, function (product) {
        console.log(`product name` + product.name);
        getdiscount(product.price, function (discount) {
            let Finalprice = product.price - discount;
            console.log(`final price is-->` + Finalprice);
        })
    })
}
