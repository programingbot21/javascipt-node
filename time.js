// console.log("one");
// console.log("two");
// setTimeout(()=>{
//      for(let i=1; i<=100; i++){
//     console.log(i);
    
//      }
// }, 3000);

var numFun ={
    value : 1,
    running : false,
    timer : 1000,
    start : function(){
        this.running = true;
        clearInterval(this.timeout);
        this.timeout = setTimeout(function(){
            numFun.execute(numFun);
        }, numFun.timer);
    },execute : function(){
        if(!this.running) return false;
        console.log(""+(this.value++));
        if(this.value > 100){
            this.stop();
            return ;
            
        }else{
            this.start();
        }
    }, stop : function(){
        this.running = false;
        clearTimeout(this.timeout);
    }
};
numFun.start();

numFun.start();

// var myfunc = {
//     value   : 8,
//     running : false,
//     timer   : 500,
//     start   : function(){
//         this.running = true;
//         clearInterval(this.timeout);
//         this.timeout = setTimeout(function() {
//             myfunc.execute(myfunc);
//         }, myfunc.timer);

//     },
//     execute : function(){
//         if(!this.running) return false;

//         console.log( "number = " + (this.value++) );

//         // if (this.value > 5 ){
//         //     this.changetiming();
//         // }

//         if (this.value > 20 ){
//             this.stop();
//             return;
//         }else{
//             this.start();
//         }

//     },
//     // changetiming : function(){
//     //     this.timer = 3000;
//     // },
//     stop : function(){
//         this.running = false;
//         clearTimeout(this.timeout);
//     }
// };

// myfunc.start();