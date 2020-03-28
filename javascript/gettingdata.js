var url="https://api.covid19api.com/summary";
async function getdata(){
  
    let response=await fetch(url);

    let data=await response.json();
    const dateupdated=data.Date;
    var dateupdate=document.getElementById("dateupdate");
    dateupdate.textContent=dateupdated;
    
    var con=data.Countries;
    var col=[]
    for (var q=0;q<2;q++){
        for(var key in con[q]){
            if(col.indexOf(key) === -1){
                col.push(key);
            }
        }
    }

    var table=document.createElement("table");
    var tr=table.insertRow(-1);

    for (var i=0;i<col.length;i++){
        var th=document.createElement("th");
        th.innerHTML=col[i];
        tr.appendChild(th);
    }
    
   for(var i=1;i<con.length;i++){
        tr=table.insertRow(-1);
        var w=con[i];
        for(var j=0;j<col.length;j++){
            var tabcell=tr.insertCell(-1);
            tabcell.innerHTML=w[col[j]]
        }
        
   }
   var ss=document.getElementById("tabledatas");
   ss.innerHTML="";
   ss.appendChild(table);
   var totalcases=0;
   var totaldeaths=0;
   var totalrecover=0;
   console.log(con[33][col[3]])
   for(var d=1;d<con.length;d++){
        totalcases=totalcases+con[d][col[3]]
   }
   for(var d=1;d<con.length;d++){
    totaldeaths=totaldeaths+con[d][col[5]]
    }

   for(var d=1;d<con.length;d++){
    totalrecover=totalrecover+con[d][col[7]]
    }
    
   console.log(totalcases)
   var t1=document.getElementById("totalcases1");
   t1.textContent=totalcases;
   var t2=document.getElementById("totalcases2");
   t2.textContent=totaldeaths;
   var t3=document.getElementById("totalcases3");
   t3.textContent=totalrecover;
}
getdata();