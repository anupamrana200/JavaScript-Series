//lets generate random colors
const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}


let changeMe;


const changeColor = function(){
    let color = randomColor()
    document.querySelector('body').style.backgroundColor = color
    console.log(`color code is: ${color}`);
}

document.querySelector('#start').addEventListener('click',function(){
    console.log('STARTED');
    if(!changeMe){
      changeMe = setInterval(changeColor, 1000)
    }
})

document.querySelector('#stop').addEventListener('click',function(){
    console.log('STOPPED');
    clearInterval(changeMe)
    changeMe = null
})