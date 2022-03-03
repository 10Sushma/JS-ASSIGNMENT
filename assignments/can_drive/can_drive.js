function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (hasDrivingLiscence && isSober && isTired == true){
        return "You can drive"
    }
    else if (hasDrivingLiscence==false)
        return "You cannot drive"
    else if(isSober==false)
        return "You shouldn't drive"

    else if (isTired==false )
        return "You can drive"
    else if (hasDrivingLiscence==false && isSober==true && isTired==true )
        return "You can drive"
    // else{
    //     return "You cannot drive"
    // }
}

module.exports = CanDrive;
