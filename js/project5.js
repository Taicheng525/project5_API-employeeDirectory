//put all the info in that im going to use in the list array
let list=[];

//ajax call
for (let i=0; i<12; i++){
    $.ajax("https://randomuser.me/api/",{
        dataType: "json",
        /*here I use async false in order to process the data
        after I received it*/
        async: false,
        success: function(data){
            //each employee is an obj with all the info that need to be displayed
            let obj = {};
            let result;
            let pic; 
            let fname;
            let lname;
            let email;
            let city;
            let cell;
            let street;
            let birth;
            let usern;
            let state;
            result = data.results[0];
            
            state = result.location.state;
            usern = result.login.username;
            pic = result.picture.large;
            fname = result.name.first;
            lname = result.name.last;
            email = result.email;
            city = result.location.city;
            cell = result.cell;
            street = result.location.street+", "+result.nat+"-"+result.location.postcode;
            birth = (result.dob).slice(0,10);
            obj.picc = pic;
            obj.name = fname+" "+lname;
            obj.emaill = email;
            obj.cityy = city;
            obj.celll = cell;
            obj.streett = street;
            obj.birthh = birth;
            obj.usernn = usern;
            obj.statee=state;
            list.push(obj);         
        }//call back end
    });//ajax end
    
}//for end


//insert the data into the page
var base = "aaa";
var i=1;
for(let i=0; i<12; i++){
    $("#"+i+base).attr("href",list[i].picc);
    $("#"+i+base+" img").attr("src",list[i].picc);
    $("#"+i+base+" p").text(list[i].name);
    $("#"+i+base+" p:nth-of-type(2)").text(list[i].usernn);   
    $("#"+i+base+" p:nth-of-type(3)").text(list[i].emaill);
    $("#"+i+base+" p:nth-of-type(4)").text(list[i].cityy);
    $("#"+i+base+" p:nth-of-type(5)").text(list[i].statee);
}

$(".tes").on("click",function(){
    let id_index = parseInt($(this)[0].id);
    /*console.log(id_index);*/
    setTimeout(function(){
    $('#n').text(list[id_index].name);
    $('#e').text(list[id_index].emaill);
    $('#c').text(list[id_index].cityy);
    $('#m').text(list[id_index].celll);
    $('#s').text(list[id_index].streett);
    $('#b').text("Birthday: "+list[id_index].birthh);
    },100);
  
});
    
