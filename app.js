var list=[];
var users=[];
var readUsers=[];
var statusUsers=[];
var counter=0;

exports.reset=function(){
    list=[];
}

exports.resetReadUsers=function(){
    readUsers=[];
}
exports.insertUsers= function(user){
    users.push(user);
    
}
exports.insertToDo=function(name,description,completed,user){
  
   ToDo= {
        id:counter++, 
        name: name,
        description: description,
        completed:completed ,
        assignedTo: user
    }
    if(users.indexOf(user)>-1){
        list.push(ToDo)
    }
   
return ToDo;
}

exports.getUsers=function(){
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

exports. modifyStatus=function(id){
    for(var i=0;i<list.length;i++){
                if(list[i].id==id){
                    if(list[i].completed==true){
                       list[i].completed=false;

                    }else if(list[i].completed==false){
                        list[i].completed=true;
                    }
                }
                 
    }
 }

 
exports.readListByUser=function(user){
    
    var j=0;
    for(var i=0;i<list.length;i++){
    
        if(list[i].assignedTo===user){
            readUsers[j]=list[i];
            j++;
        }
    }
    return readUsers;

}

exports.readListByStatus=function(status){
    
    var j=0;
    for(var i=0;i<list.length;i++){

        if(list[i].completed.toString()===status){
            statusUsers[j]=list[i];
            j++;
        }
    }
return statusUsers;
}
exports.modifyToDoById=function(id,description){
  
 
    for(var i=0;i<list.length;i++){
        if(list[i].id==id){
            list[i].description=description;
        }

    }
    return list;
}
exports.getList=function(){
    return list;
}
