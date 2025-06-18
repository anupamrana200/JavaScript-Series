const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');
buttons.forEach(function (btn){
    // console.log(btn);
    btn.addEventListener('click',function (e){
        console.log(e);
        console.log(e.target.id);
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id
        // }
        switch(e.target.id){
            case 'grey': 
                body.style.backgroundColor = e.target.id;
                break;
            case "white": 
                body.style.backgroundColor = e.target.id;
                break;
            case "blue": 
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow": 
                body.style.backgroundColor = e.target.id;
                break;
        }
        
    })
});