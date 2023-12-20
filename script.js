alert('в поле введите значение от 200 до 800')
let boxBtn = document.querySelector('.box_btn'),
    btn = document.querySelector('.btn');

let body = document.body
let circle = document.getElementById('circle')
 let digClock =  document.getElementById('dig_Clock')  
 let widthCirc=document.getElementById('width_circ')
    let inputWidth;//значение ширины полученное от пользователя

    btn.addEventListener('click',()=>{
        inputWidth=widthCirc.value;


        let centerCir=inputWidth/2;/// значение координат центра циферблата
        let centrCircleWidth =5;/// диаметр кружка центра циферблата
        let digitXYCoord= 23;/// поправка на положение цифры в кружке
        let digitTransformXYone=3.5;///смещение цифры в кружке(1-9)
        let digitTransformXYtwo=2;///смещение цифры в кружке(10-12)
        let dinamycWidth = 20;/// поправка на ширину часового кружка 
        let radiusHourItem=inputWidth/dinamycWidth;
        let digSize=26;//поправа для размера шрифта цифровых часов



        if(inputWidth>=200 && inputWidth<=800){

            circle.style.display='block';
            boxBtn.style.display='none';
            circle.style.width=inputWidth;
            circle.style.height=inputWidth;
            circle.style.backgroundColor='#572f2f';
            circle.style.borderRadius='50%';

            for (let h=1;h<=12;h++){

                let angle=Math.PI*2/12*h;

                let lenghtToHourI=inputWidth*0.42;

                let coordHourItemX=centerCir+Math.sin(angle)*lenghtToHourI,
                    coordHourItemY=centerCir-Math.cos(angle)*lenghtToHourI;

                    if(h>9){

                        circle.innerHTML+=
                        `

                            <circle cx=${coordHourItemX} cy=${coordHourItemY} r=${radiusHourItem} stroke=red fill=yellow />
                            <text x=${coordHourItemX-inputWidth/digitXYCoord/digitTransformXYtwo} y=${coordHourItemY+inputWidth/digitXYCoord/digitTransformXYone} style='font-size:${inputWidth/23}px'>${h}
                            </text>
                        `

                    }else{


                        circle.innerHTML+=
                            `
                                <circle cx=${coordHourItemX} cy=${coordHourItemY} r=${radiusHourItem} stroke=red fill=yellow />
                                <text x=${coordHourItemX-inputWidth/digitXYCoord/digitTransformXYone} y=${coordHourItemY+inputWidth/digitXYCoord/digitTransformXYone} style='font-size:${inputWidth/23}px'  >${h}
                                </text>
                            `

                    }

                circle.innerHTML+= `<circle cx=${centerCir} cy=${centerCir} r=${inputWidth>400?centrCircleWidth:centrCircleWidth/2}  style='z-index:100' stroke=yellow fill=yellow />`
            }

            tickTack();

            setInterval(tickTack,1000);

            function tickTack(){

                let date= new Date();

                let hh = date.getHours()*30,
                    mm = date.getMinutes()*6,
                    ss = date.getSeconds()*6;


                    let hhElemD = document.getElementById('hhD')
                    let mmElemD = document.getElementById('mmD')
                    let ssElemD = document.getElementById('ssD')

                    hhElemD.textContent=`${date.getHours()<10?'0'+date.getHours():date.getHours()}${':'}`
                    mmElemD.textContent=`${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()+':'}`
                    ssElemD.textContent=`${date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds()}`

                    if(inputWidth<400){
                        hhElemD.setAttribute('x',`${centerCir-centerCir/100*21}`)
                        hhElemD.setAttribute('y',`${centerCir-centerCir/100*33}`)
                        hhElemD.setAttribute('style',`font-size:${inputWidth/15}px`)

                        mmElemD.setAttribute('x',`${centerCir-centerCir/100*5} `)
                        mmElemD.setAttribute('y',`${centerCir-centerCir/100*33} `)
                        mmElemD.setAttribute('style',`font-size:${inputWidth/15}px`)

                        ssElemD.setAttribute('x',`${centerCir+centerCir/100*11}`)
                        ssElemD.setAttribute('y',`${centerCir-centerCir/100*33}`)
                        ssElemD.setAttribute('style',`font-size:${inputWidth/15}px`)
                    }else{

                        hhElemD.setAttribute('x',`${centerCir-centerCir/100*16}`)
                        hhElemD.setAttribute('y',`${centerCir-centerCir/100*33}`)
                        hhElemD.setAttribute('style',`font-size:${inputWidth/23}px`)

                        mmElemD.setAttribute('x',`${centerCir-centerCir/100*5} `)
                        mmElemD.setAttribute('y',`${centerCir-centerCir/100*33} `)
                        mmElemD.setAttribute('style',`font-size:${inputWidth/23}px`)

                        ssElemD.setAttribute('x',`${centerCir+centerCir/100*6}`)
                        ssElemD.setAttribute('y',`${centerCir-centerCir/100*33}`)
                        ssElemD.setAttribute('style',`font-size:${inputWidth/23}px`)

                    }



                    let hhElem = document.getElementById('hh')
                    let stepHH= hhElem.setAttribute('transform',`rotate(${hh+mm/12},${centerCir},${centerCir})`);
                    let stepHH1= hhElem.setAttribute('x1',`${centerCir}`);
                    let stepHH2= hhElem.setAttribute('y1',`${centerCir+10} `);
                    let stepHH3= hhElem.setAttribute('x2',`${centerCir}`);
                    let stepHH4= hhElem.setAttribute('y2',`${inputWidth/3}`);
                    let stepHH5= hhElem.setAttribute('stroke','red');
                    let stepHH6= hhElem.setAttribute('stroke-width',`${inputWidth/40}`);


                    let mmElem = document.getElementById('mm')
                    let stepMM= mmElem.setAttribute('transform',`rotate(${mm},${centerCir},${centerCir})`);
                    let stepMM1= mmElem.setAttribute('x1',`${centerCir}`);
                    let stepMM2= mmElem.setAttribute('y1',`${centerCir+15} `);
                    let stepMM3= mmElem.setAttribute('x2',`${centerCir}`);
                    let stepMM4= mmElem.setAttribute('y2',`${inputWidth/4}`);
                    let stepMM5= mmElem.setAttribute('stroke','red');
                    let stepMM6= mmElem.setAttribute('stroke-width',`${inputWidth/80}`);


                    let ssElem = document.getElementById('ss')
                    let stepSS= ssElem.setAttribute('transform',`rotate(${ss},${centerCir},${centerCir})`);
                    let stepSS1= ssElem.setAttribute('x1',`${centerCir}`);
                    let stepSS2= ssElem.setAttribute('y1',`${centerCir+20} `);
                    let stepSS3= ssElem.setAttribute('x2',`${centerCir}`);
                    let stepSS4= ssElem.setAttribute('y2',`${inputWidth/5}`);
                    let stepSS5= ssElem.setAttribute('stroke','white');
                    let stepSS6= ssElem.setAttribute('stroke-width',`${inputWidth/200}`);

            }


        }else{
            widthCirc.value=''
            alert('введите значение от 200 до 800')
        }
    })







