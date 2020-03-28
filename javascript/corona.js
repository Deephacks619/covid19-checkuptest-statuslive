var questions =[
{
	"question":"Do You Feel that you have Fever?"
},
{
	"question":"Are you Suffering with Cough?"
},
{
	"question":"Do you Suffer from Common Cold?"
},
{
	"question":"Are You Facing any breathing difficulties?"
},
{
	"question":"Is your throat irritating you?"
},
{
	"question":"Did you face symptom like running Nose?"
},
{
	"question":"Do you Feel any Aches?"
}
];
var currentquestion=0;
var totalquestion=questions.length;
var array=[]
var fab=document.getElementById("content1");
var sec=document.getElementById("second");
var cont=document.getElementsByClassName("container1");
var questionEl=document.getElementById("quest");
var yes=document.getElementById("radioyes");
var no=document.getElementById("radiono");
var nxtbtn=document.getElementById("btn-nxt");

function loadquestion (s){
	var q=questions[s];
	questionEl.textContent=q.question; 

};
function loadnext(){
	var selected=document.querySelector('input[type=radio]:checked');
	if(!selected){
		alert("please select answer!");
		return;
	}
	var ans=selected.value;
	array.push(ans);

	currentquestion++;
	if(currentquestion<7)
	{
		loadquestion(currentquestion);
	}
	else if(currentquestion>=7){
		hidden();
	}
}
function hidden(){
	fab.removeChild(sec);
	var h=document.createElement("h1");
	h.className="another";
	var text=document.createTextNode("HEY, YOU COMPLETED TEST WAIT FOR OUR RESULTS");
	h.appendChild(text);
	fab.appendChild(h);
	fun();

}
var myVar;
function fun(){
	 var y=0;
	 var n=0;
	 for(let i=0;i<array.length;i++){
		 if(array[i]==="yes")
		 {
			 y=y+1;
		 }
		 else if(array[i]=="no")
		 {
			 n=n+1;
		 }
	 }
	 if(y===7 || y===6){
		myVar=setTimeout(array1look,3000);
	 }
	 else if(y===5 || y===4){
		myVar=setTimeout(array2look,3000);
	 }
	 else if(y===3 || y===2){
		myVar=setTimeout(array3look,3000);
	 }
	 else if(y===1){
		myVar=setTimeout(array4look,3000);
	 }
	 else if(y===0){
		myVar=setTimeout(array5look,3000);
	 }

	function array1look(){
		while(fab.firstChild){
			fab.removeChild(fab.firstChild);
		}
		var f=document.createElement("h1");
		f.className="another";
		var va=document.createTextNode("YOU ARE AFFECTED WITH CORONA VIRUS. TRY TO BE IN A QUARATINE CONDITION");
		f.appendChild(va);
		fab.appendChild(f);
	
	}
	function array2look(){
		while(fab.firstChild){
			fab.removeChild(fab.firstChild);
		}
		var f=document.createElement("h1");
		f.className="another";
		var va=document.createTextNode("YOU HAVE MAJOR SYMPTOMS OF CORONA.GET RID OF THEM THROUGH CONSULT DOCTOR. AND DON'T EXPOSE");
		f.appendChild(va);
		fab.appendChild(f);
	
	}
	function array3look(){
		while(fab.firstChild){
			fab.removeChild(fab.firstChild);
		}
		var f=document.createElement("h1");
		f.className="another";
		var va=document.createTextNode("FOLLOW THE WHO PRECAUTIONS AND DON'T EXPOSE YOURSELF.TAKE THE MEDICINE");
		f.appendChild(va);
		fab.appendChild(f);
	
	}
	function array4look(){
		while(fab.firstChild){
			fab.removeChild(fab.firstChild);
		}
		var f=document.createElement("h1");
		f.className="another";
		var va=document.createTextNode("YOU ARE HAVING JUST 1 SYMPTOM.NOT TO WORRY.FOLLOW WHO PRECAUTIONS");
		f.appendChild(va);
		fab.appendChild(f);
	
	}
	function array5look(){
		while(fab.firstChild){
			fab.removeChild(fab.firstChild);
		}
		var f=document.createElement("h1");
		f.className="another";
		var va=document.createTextNode("HEY NO NEED TO WORRY,YOU DON'T HAVE ANY KIND SYMPTOMS OF CORONA VIRUS.JUST FOLLOW WHO PRECAUTIONS");
		f.appendChild(va);
		fab.appendChild(f);
	
	}
	
}

loadquestion(currentquestion);
