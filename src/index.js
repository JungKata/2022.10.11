

function fvNeve(param1, param2)
{
    
}
let masikFv = function(param1, param2){
    console.log(param1);
}

/*
document.addEventListener('DOMContentLoaded', function(){
    console.log('Page Loaded')

    document.getElementById('szinezes').addEventListener('click', function (){
        document.body.style.backgroundColor = 'lightblue';
    });
    
    });

    */

    function osszeHasonlit(a, b){
        if(a < b){
            return -1;
        }
        else if(a > b){
            return 1;
        }else{
            return 0;
        }
    }

    let t = [ 4, 56 , 715, -99];
    t.sort((a, b) => {
        if(a > b){
            return -1;
        }
        else if(a < b){
            return 1;
        }else{
            return 0;
        }
    });
    t.sort((a, b) => {return a - b});
    t = t.filter(e => e > Math.abs(e) > 50);
    t = t.map( e => e*e);
    t.forEach((e, index) => {
        console.log(index, e);
    })
    console.log(t);


    //Mellékhatás - side effect
    //Nincs mellékhatás:
    1 + 1;
    Math.sqrt(1 * 2 / 4);
    [1, 2, 3].filter(e => e > 2);
    szam > 2;
    [56, 33].includes(szam);
    new Kutya();
    new Date();
    //Van mellékhatása:
    console.log('hello');
    let a = szam++;
    let b = ++szam;
    t.push(44);
    t.sort();
    console.log(a, b);
    console.log(t);
    Math.random();


    //Tiszta függvény - pure function:
    function kettonnelNagyobb(t){
        return t.filter(e => e > 2);
    }

    //Nem tiszta console.log() mellekhatás:
    function tombKiir(t){
        t.forEach(e => console.log(e));
    }

    function getButtonColor(){
        return document.getElementById('szinezes').style.backgroundColor;
    }


document.addEventListener('DOMContentLoaded', () => {
    console.log('Page Loaded');
    let idozito;
    //Closure
    document.getElementById('szinezes').addEventListener('click',  ()=> {
       document.body.style.backgroundColor = 'lightblue'; 
        setTimeout(() => {
            document.body.style.backgroundColor = 'white';
        }, 2000);

        if(idozito !== undefined){
            console.log('Clearing timer', idozito)
            clearInterval(idozito);
        }
    
        idozito = setInterval(() => {
            console.log(document.body.style.backgroundColor);
        },1000);
        
    });
});
