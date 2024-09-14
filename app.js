let text = prompt('metn yazin')
let a = false
// let a = ''
for(let i = 0; i < text.length; i++){
    if (text[i] >= '0' && text[i] <= '9') {
        a = true
    }else{
        a = false
    }
}

if (a === true) {
    console.log('reqem var');
}
else{
    console.log('reqem yoxdur');
}