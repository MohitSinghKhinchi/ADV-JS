{
    // CLASS EXPRESSION --> cant perform hoisting 
     let animal =class{
        constructor(){
            this.name = `dodo`;
            this.breed = 'dog';
        }
     }
     let an1 = new animal();
     console.log(an1)
}
{
    //  INHERITANCE --> 
    class animal {
        constructor(){
            this._age = 12; // treated as private data memeber 
            this.hands = 2;
            this.legs = 2;
        }
        // set 
        // get age (){};

        eat (){};
        breath(){};
    }
    class kekda extends animal {
        constructor(){
            super();
            this.legs = 8;
            this.hands =0 
        }
        susu(){}
    }
    let k1 = new kekda();
    console.log(k1)
}
{
    // CREATE AN USER OBJ THAT STORES NAME AND EMAIL AND HAS LOGIN METHOD WHICH PRINTS USER HAS LOGIN ...
    let user = {
        name:`mohit`,
        email:`mohit12@gmail.com`,
        fun:()=>{
            console.log(`user has login`)
        }
    }
    user.fun();
}
{
    // IMAGINE U HAVE 5 USERS 
    // 1ST WITHOUT CLASS 
}