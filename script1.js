//          OOPS --> 
{
    // classes --> blue print 
    // class ak obj ke factory hai 
    // har bar new word k sath class ko run karoge to ak aya boj milega 
    class Bisketmaker {

        constructor() { // defalult value 
            this.name = `mohit`;
            this.age = 22;
        }

        pack() {
            console.log(`packed `)
        }
        unpack() {
            console.log(`packed `)
        }
    }
    let a = new Bisketmaker();
    console.log(a)
    a.pack();
    class Book {
        constructor(name = `raj`, price = 199, author = `moksh`, color = `red`) {
            // this ke value badalte hai acc.to k hisab see
            this.name = name;
            this.price = price;
            this.author = author;
            this.color = color;
        }
        pageturn() { }
        bookmark() { }
        read() { }
    }
    let k1 = new Book();
    console.log(k1)
    let k2 = new Book(`rajuu`, 599, `mohit`, `pink`)
    console.log(k2)
    k2.bookmark();

    //  prototype --> it is shared memory/value
    Book.prototype.bookrakho = function () {
        console.log(`hey`);
    }
    let k3 = new Book();
    console.log(k3)

    // UNDERATANDING THIS 
    //  global --> window
    //  function --> window
    //  es5function inside obj --> obj
    {
        let obj = {
            name: `sahm`,
            fun: function () {
                console.log(this)
                console.log(this.name)// isscase m this ke value name hai 
            }
        }
        obj.fun() // in this case value of this is obj
    }
    //   es6 function inside obj --> window
    //   es5 function  es5 function inside obj --> window
    //   es6 function es5 function inside obj --> obj

    console.log(this);// value is window
    function abcf() {
        console.log(this)// value is windiw
    }
    abcf();
// this value in this function is window 
    let h1= document.querySelector('h1')
    h1.addEventListener('click',()=>{
        console.log(this) // window
    })

// this value under selector operator normal finction is is the vale of parent 
    let h2= document.querySelector('h2')
    h2.addEventListener('click', function(){
        console.log(this) // value is --> hlo2
    })
}
    //  call ||  apply ||   blind -->kisi function m this ke value window or usko change karna chate ho obj m to use call bind apply 
    //          CALL --> function chalata hai this ke value set karta hai(obj)
  { 
     let obj2 ={
        name :`sanju`
    }
    function aab(){
        console.log(this);
    }
    aab.call(obj2)
}
//  apply --> iss m this kle values set kar sakte ha orr parameters bhej sakte ha or set bhi kar sakte hai(jo ke array hoti hai)
  { 
     let obj2 ={
        name :`sanju`
    }
    function aab(a,b,c){
        console.log(this , a, b, c);
    }
    aab.apply(obj2, [1,2,3])
}
// BIND --> call jesa hai but yee kisi m new function save hota hai
 { 
     let obj2 ={
        name :`sanju`
    }
    function aab(a,b,c){
        console.log(this , a, b, c);
    }
    let newfun = aab.bind(obj2,1,2,3)
    newfun();// new fnc m store hoti ahi value 
}