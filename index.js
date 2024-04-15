second=0;
minutes=0;
hours=0;
isRunning=false;
var dur=0;
function startstop(){
    if(!isRunning){
        isRunning=true;
       timer= setInterval(()=>{
            second++;
            if(second>=60){
                minutes++;
                second=0;
                if(minutes>=60){
                    hours++;
                    minutes=0;
                }
            }
            let formattedTime=`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`;
            dur=formattedTime;
            document.getElementById("stopwatch").innerText= `${formattedTime}`;
            document.getElementById("startstop").innerText="stop";
        },1000);
    }
    else{
        document.getElementById("startstop").innerText="start";
        clearInterval(timer);
        isRunning=false;
    }
}
function Reset(){
    second=0;
    hours=0;
    minutes=0;
    let formattedTime=`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`;
    document.getElementById("stopwatch").innerText=formattedTime;
    document.getElementById("startstop").innerText="Start";
}

function Add(){
    var task=document.getElementById("Task").value
    var des=document.getElementById("Description").value
    var res={
        Task:task,
        Description:des,
        Duration:dur
    }

    content.push(res);

    Filter();
}


var content=[
    {
        Task:"Personal",
        Description:"xxx",
        Duration:"00:50:43"
    },
    {
        Task:"Office",
        Description:"yyy",
        Duration:"01:42:02"
    },
    {
        Task:"TBreak",
        Description:"-",
        Duration:"00:22:15"
    },
    {
        Task:"Break",
        Description:"zzz",
        Duration:"00:32:28"
    }
]

var arr=content;


let task="";
var selectvalue=()=>{
    task=document.getElementById("selid").value;
    if(task=="None"){
        arr=content;
        Filter();
    }
    else{
    arr=content.filter(tsk => (tsk.Task == task));
    Filter();
    }
}
Filter=()=>{
    var table=document.getElementById("myTable");
    table.innerHTML=" ";
    console.log(arr);
    var row=table.insertRow(0);
    var col0=row.insertCell(0)
    var col1=row.insertCell(1);
    var col2=row.insertCell(2);
    var col3=row.insertCell(3);
    col0.innerHTML="Task";
    col1.innerHTML="Description";
    col2.innerHTML="Duration";
    col3.innerHTML="Delete";
    
    arr.map((item,i)=>{
        var row=table.insertRow(i+1);
        var col0=row.insertCell(0);
        var col1=row.insertCell(1);
        var col2=row.insertCell(2);
        var col3=row.insertCell(3);
        col0.innerHTML=item.Task;
        col1.innerHTML=item.Description;
        col2.innerHTML=item.Duration;
        col3.innerHTML=`<button class="del" onClick={handleDelete(${i})} >Delete</button>`
    }
);
};
Filter();


const handleDelete = (i)=>{
    arr.splice(i , 1);
    Filter();
}