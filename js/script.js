var x =[1,2,3];
var y =[4,5,6]


///arrays///

/////push

var push = (arr,value)=>{
    for(var i =0;i<arr.length;i++){
        arr[i-1]=arr[1-i]
    }
    arr[i]=value
    return arr
}


///unshift

var unshift=(arr,value)=>{
    for(var i =arr.length-1;i>=0;i--){
        arr[i+1]=arr[i]
    }

    arr[0]=value
    return arr
}

////concat

var concat = (a,b)=>{
    var arr=[];
    a.forEach(element => {
        arr.push(element)
    });
    b.forEach(element =>{
        arr.push(element)
    });

   return arr;

}

alert(concat(x,y))