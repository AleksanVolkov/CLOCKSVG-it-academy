

function ObjStorageFunc(){
  const objStorage = {};

  this.addValue=function(key,value) {
    objStorage[key]=value;
  

  }

  this.getValue=function(key) {
   return objStorage[key];
   
  }
  
  this.deleteValue=function(key) {
    if (key in objStorage ){
      delete objStorage[key]
      return true
    }else{
      return false
    }
   
    
  }


  this.getKeys=function() {
    
   return Object.keys(objStorage)
  }

  
}
let objStorage= new ObjStorageFunc;

function addValue(){
  let name=prompt('введите название напитка',''),
   descr=prompt('введите ингридиенты',''),
   alc=confirm('он алкогольный','');

  objStorage.addValue(name,{descr:descr,alc:alc});


  
}

  function getValueK(){
  let name=prompt('введите название напитка','');
   let res=  objStorage.getValue(name)
  if(res){
    alert(`напиток: ${name} 
алкогольный: ${res.alc?'да':'нет'}
рецепт приготовления: ${res.descr}
`)
  }
  else{alert('в базе нет такого напитка!!!')}
    
     

}
function delDrinks(){
       let name=prompt('введите название напитка','');
       if(objStorage.deleteValue(name)){
         alert('напиток удален из базы!')
       }else{
         alert('в базе нет напитка с таким названием!')
       }
     }

function allDrinks(){
  let all = objStorage.getKeys();
  if(all.length!=0){
    alert(all)
  }else{
    alert('в данный момент база рецептов пуста!')
  }
       
       
     }

