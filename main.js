let opt = document.querySelector('.opt');
let ansBtn = document.querySelector('.ans-btn');
let inp = document.querySelector('.inp');

let rowa = document.querySelector('.rowa');
let col1 = document.querySelector('.col1');

let num1 = 1;
let co = '';

let txt = (n1,n2,n3,bg)=>{
    rowa.innerHTML += `<div class="row">
                        <span>${n1}</span>
                        <span>x</span>
                        <span>${n2}</span>
                        <span>=</span>
                        <span style="color:${bg}">${n3}</span>
                    </div>`;
}

let txt2 = (no1,no2)=>{
    col1.innerHTML = `<div class="row">
                            <span>${no1}</span>
                            <span>x</span>
                            <span>${no2}</span>
                            <span>=</span>
                        </div>`;
}

let optVal = ()=>{
    rowa.innerHTML = '';
    inp.value = '';
    num1 = 1;
    txt2(opt.value,num1);
}

let ansFun = ()=>{
    if(inp.value > 0){
        if(num1 <= 10){
            if(opt.value*num1 != inp.value){
                co = 'red';
                txt(opt.value,num1,inp.value,co);
                co = '';
            }else{
                txt(opt.value,num1,inp.value,co);
            }
            txt2(opt.value,num1+1);
            inp.value = '';
            num1++;
        }else{
            rowa.innerHTML = '';
            num1 = 1;
            inp.value = '';
            //col1.innerHTML = `<h4>Continue......</h4>`;    
            optVal();
        }
    }else{
        alert('plase insart value');
    }
}

opt.addEventListener('change',optVal);
ansBtn.addEventListener('click',ansFun);
