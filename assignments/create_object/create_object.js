function CreateObject(arr) {
    // Write your code here
    const arr1=[]
    const arr2=[]
    for (i=0;i<arr.length;i++){
        if(i%2==0){
            arr1.push(arr[i])
        }
        else{
            arr2.push(arr[i])
        }
    }
    var res=Object.assign.apply({},arr1.map((v,i)=>({[v]:arr2[i]})));
    return res
}

module.exports = CreateObject;
