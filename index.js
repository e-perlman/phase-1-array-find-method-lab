function superbowlWin(array){
    const win=array.find(element => element.result==='W' )
    if (typeof win==='object'){
        return win.year
    }
}