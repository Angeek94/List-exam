var list=[];
var users=[];
var readUsers=[];
var counter=0;
exports.reset=function(){
    list=[];
}
exports.insertToDo=function(name,description,completed,user){
    if(user=="tizio"||user=="caio"||user=="sempronio"){
    list.push({
        id:counter++, 
        name: name,
        description: description,
        completed:completed ,
        assignedTo: user
    })}
   
return list;
}

exports.getUsers=function(){
     users=["tizio","caio","sempronio"];
     return users;
 }
exports.deleteToDo=function(idDelete){
    for(var i=0;i<list.length;i++){
        if(list[i].id===idDelete){
          
             list.splice(i,1);
        }
    }
  return list;
}

exports. modifyStatusfromTruetoFalse=function(id){
    for(var i=0;i<list.length;i++){
                 if(list[i].id==id){
                   if(list[i].completed==true){
                       list[i].completed=false;
                   }
                }
                 
    }
 }

 exports. modifyStatusfromFalsetoTrue=function(id){
    for(var i=0;i<list.length;i++){
                 if(list[i].id==id){
                   if(list[i].completed==false){
                       list[i].completed=true;
                   }
                }
                 
    }
 }
exports.readListByUser=function(user){
    
    var j=0;
    for(var i=0;i<list.length;i++){
      
        if(list[i].assignedTo==user){
            
           readUsers[j]=list[i];
           j++;
        }
       

    }
    return readUsers;
  }
exports.getList=function(){
    return list;
}
