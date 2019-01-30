var btnweather=document.querySelector('#btnweather');
    // event.preventDefault();
btnweather.addEventListener('click',()=>{
    var txtFeild=document.querySelector('#txtField').value;
    // console.log('wroking')
       var check= Validationcheck();
        if(check == false)
            return;
   var convert=txtFeild.toLowerCase(); 
//    console.log(convert);
   var trim=convert.replace(/\s+/g, '');
   console.log(trim);
   Getweather(trim);         
        })
// var punjab='1167710';
    // var peshawar='1168197';
    // var multan='1169825';
    // var quetta='1167528';
    // var kpk='1168873';
    // var karachiApi='http://api.openweathermap.org/data/2.5/weather?id=1174870&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric';
    // var islmaApi='http://api.openweathermap.org/data/2.5/weather?id=1162015&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric'
    // var lahorApi='http://api.openweathermap.org/data/2.5/weather?id=1172451&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric'
    // var hydrabadapi='http://api.openweathermap.org/data/2.5/weather?id=1176734&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric'
    // var sindh='http://api.openweathermap.org/data/2.5/weather?id=1164807&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric'
    // var punjabapi=''
var Getweather=(cityname)=>{
var name=cityname;
    console.log('working 2')
    var geturl='';
    switch(name){
        case 'karachi':
             geturl='https://api.openweathermap.org/data/2.5/weather?id=1174870&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric';
            break;
        case 'hydrabad':
             geturl='https://api.openweathermap.org/data/2.5/weather?id=1176734&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric';
             break;
        case 'islamabad':
             geturl='https://api.openweathermap.org/data/2.5/weather?id=1162015&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric';
             break;
        case  'lahore':
             geturl='https://api.openweathermap.org/data/2.5/weather?id=1172451&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric';      
              break;
        case  'sindh':
            geturl='https://api.openweathermap.org/data/2.5/weather?id=1164807&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric';  
            break;
        case   'khyberpakhtunkhwa':
            geturl='https://api.openweathermap.org/data/2.5/weather?id=1168873&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric';
            break;
        case  'multan':
            geturl='https://api.openweathermap.org/data/2.5/weather?id=1169825&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric';  
            break;
        case 'quetta':
             geturl='https://api.openweathermap.org/data/2.5/weather?id=1167528&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric';
             break;
        case 'peshawar':
             geturl='https://api.openweathermap.org/data/2.5/weather?id=1168197&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric';
              break;
        case 'punjab':
              geturl='https://api.openweathermap.org/data/2.5/weather?id=1167710&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric';
              break;
        
        default:
    $('#modelId').modal('show');  // $('#modelId').show();
             return;
        }

    var url=geturl;   //from where you get some information or data
        fetch(url).then((res)=> {
            return res.json()
        })
        .then(data=>{
            // console.log(data.main);
            // console.log(data.name);
            document.querySelector('#name').innerText=data.name;
           createList(data.main);
        })

}

var Validationcheck=()=>{
    var txtFeild=document.querySelector('#txtField').value;
        if(!txtFeild){
            document.querySelector('#txtField').classList.add('is-invalid');
            
            setTimeout(()=>{
                document.querySelector('#txtField').classList.remove('is-invalid');  
            },2000)
            return false;
        }
        
}
    // var btnclick=document.querySelector('#btnclick');
    // btnclick.addEventListener('click',(res)=>{
    //     var url='http://api.openweathermap.org/data/2.5/weather?id=1174870&APPID=9e0ce0adca06a722c16c89b558019e5a&units=metric';   //from where you get some information or data
    //     fetch(url).then((res)=> {
    //         return res.json()
    //     })
    //     .then(data=>{
    //         console.log(data.main);
    //         document.querySelector('#name').innerText=data.name;
    //         console.log(data.name);
    //        createList(data.main);
    //     })
    // })

    function createList (userObj){
        var value;
        // var list=document.querySelector('#container');
        var getcontainer=document.getElementById('addrows');
        var gettr=getcontainer.getElementsByTagName('tr');
        var trlength=gettr.length;
        for(var i=1;i<trlength;i++){
             gettr[i].innerText=''
        }
        // list.innerHTML='';
        var tdindex=0;
        var serverEle=Object.keys(userObj);
        var indextr=gettr[1];
        var i=1;
        for(key in userObj) {
            var gettr2=getcontainer.getElementsByTagName('tr')[i]
            // var li=document.createElement('li');
            if(userObj.hasOwnProperty(key)) {
                value =  userObj[key];
                // console.log(value);
                    var gettd=document.createElement('td');
                        gettd.innerText=key;
                    var gettd1=document.createElement('td');
                        gettd1.innerText=value;
                        gettr2.appendChild(gettd);
                        gettr2.appendChild(gettd1);
                    i++;
                    if(i==6)
                        break;
                    // gettd[tdindex].innerText=key;
                    //     console.log(key);
                    //     gettd[tdindex++].innerText=key;
                //    li.innerText=key+":"+value;
                //    list.appendChild(li);
                        //do something with value;
                }
            
            }
            //     li.innerText = serverEle +":"+value;
            // list.appendChild(li);
    $('#model').modal('show');
    document.querySelector('#txtField').value='';
        }

    