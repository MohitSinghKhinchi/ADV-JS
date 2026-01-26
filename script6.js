//      error handling 


// 1. syntax error --> aapke formet m galti hai 
//  a let  =12; syntax error

// 2. run time error --> likhte tine nahi ayega run time pe aayega 
function abc() {
    let a = 12;
    console.log(a.name)
}
abc() // undefined error aayega 

// 3. LOGICAL ERRORS
function add(a, b) {
    console.log(a - b)
}
add(10, 5)
{
    // understanding the error objects  -->[ 'message' , 'name' , 'stack' ]
    try {
        let a = 12;
        console.log(a.age.name)
    } catch (err) {
        console.log(err.message)
        // console.log(err.name) 
        // console.log(err.stack) 

    }
    //  try catch
    // try catch se code crash nahi hoga 
    try {
        let a = 12;
        console.log(a.age.name)
    } catch (err) {
        console.log(err + `hui hui `) // error bhi print hoga or error k sath aap kuch print karana chate ho to vo bhi print ho jayega
    }
    //  try catch finally
    try {
        let a = 12;
        // console.log(a.age.name)
        console.log(a)
    } catch (err) {
        console.log(err + `hui hui `)
    }
    finally {
        console.log(`dodno cases m chalega `)
    }
}

{
    // throw error in js ii
    // throw new error();
    // new error()
    try {
        let a = 12;
        console.log(a.name.age)
    }
    catch (err) {
        //    throw new Error(`something went wrong`)
        // new console.Error(`error ocured here`);

        console.error(new Error(`error occured`))
    }
}