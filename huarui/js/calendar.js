// ����ѡ��
var months = new Array("һ��", "����", "����", "����", "����", "����", "����", "����", "����", "ʮ��", "ʮһ��", "ʮ����"); 
var daysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 
var days = new Array("��","һ", "��", "��", "��", "��", "��"); 
var today;

document.writeln("<div id='Calendar' style='position:absolute; z-index:1; visibility: hidden; filter:\"progid:DXImageTransform.Microsoft.Shadow(direction=135,color=#999999,strength=3)\"'></div>");

function getDays(month, year)
{ 
    //�������δ������жϵ�ǰ�Ƿ�������� 
    if (1 == month) 
        return ((0 == year % 4) && (0 != (year % 100))) || (0 == year % 400) ? 29 : 28; 
    else 
        return daysInMonth[month]; 
}

function getToday() 
{ 
    //�õ��������,��,�� 
    this.now = new Date(); 
    this.year = this.now.getFullYear(); 
    this.month = this.now.getMonth(); 
    this.day = this.now.getDate(); 
}

function getStringDay(str) 
{ 
    //�õ���������,��,��
    var str=str.split("-")
    
    this.now = new Date(parseFloat(str[0]),parseFloat(str[1])-1,parseFloat(str[2])); 
    this.year = this.now.getFullYear(); 
    this.month = this.now.getMonth(); 
    this.day = this.now.getDate(); 
}

function newCalendar() { 
    var parseYear = parseInt(document.getElementById("Year").options[document.getElementById("Year").selectedIndex].value); 
    var newCal = new Date(parseYear, document.getElementById("Month").selectedIndex, 1); 
    var day = -1; 
    var startDay = newCal.getDay(); 
    var daily = 0; 
    
    if ((today.year == newCal.getFullYear()) &&(today.month == newCal.getMonth())) 
        day = today.day; 
if(navigator.appName.indexOf("Explorer") > -1){ 
   var tableCal = document.all.calendar; 
} else{ 
   var tableCal = document.getElementById("calendar"); 
} 
    var intDaysInMonth =getDays(newCal.getMonth(), newCal.getFullYear());
     
    for (var intWeek = 1; intWeek < tableCal.rows.length;intWeek++)
{
        for (var intDay = 0;intDay < tableCal.rows[intWeek].cells.length;intDay++) 
        { 
            var cell = tableCal.rows[intWeek].cells[intDay]; 
            if ((intDay == startDay) && (0 == daily)) 
                daily = 1; 
                
            if(day==daily) //���죬���ý����Class 
            {
                cell.style.background='#6699CC';
                cell.style.color='#FFFFFF';
                //cell.style.fontWeight='bold';
            }
            else if(intDay==6) //���� 
                cell.style.color='green'; 
            else if (intDay==0) //���� 
                cell.style.color='red';
            
            if ((daily > 0) && (daily <= intDaysInMonth)) 
            { 
     if(navigator.appName.indexOf("Explorer") > -1){ 
      cell.innerText = daily; 
     } else{ 
        cell.textContent = daily; 
     } 
                //cell.innerText = daily; 
                daily++; 
            } 
            else 
     if(navigator.appName.indexOf("Explorer") > -1){ 
      cell.innerText = ""; 
     } else{ 
        cell.textContent = ""; 
     } 
                //cell.innerText = ""; 
        } 
}

if(navigator.appName.indexOf("Explorer") > -1){
}
else
{
   tableCal.rows[5].style.visibility="visible";
   tableCal.rows[6].style.visibility="visible";  
   if(tableCal.rows[5].cells[0].textContent=="")
   {
    tableCal.rows[5].style.visibility="hidden";
   }
   if(tableCal.rows[6].cells[0].textContent=="")
   {
    tableCal.rows[6].style.visibility="hidden";
   }  
}
}

function GetDate(InputBox,evt)
{ 
    var sDate;
if (window.navigator.userAgent.indexOf("MSIE")>=1){
   obj   =   event.srcElement;
}
else
{
   obj=evt.target;
}
    //��δ��봦������������ 
    if (obj.tagName == "TD") 
   if(navigator.appName.indexOf("Explorer") > -1){ 
    strtext=obj.innerText;
   } else{ 
    strtext=obj.textContent;
   } 
        if (strtext != "") 
        { 
            sDate = document.getElementById("Year").value + "-" + document.getElementById("Month").value + "-" + strtext;
            document.getElementById(InputBox).value=sDate;
            HiddenCalendar();
        } 
}

function HiddenCalendar()
{
    //�ر�ѡ�񴰿�
if(navigator.appName.indexOf("Explorer") > -1){ 
    //document.getElementById("calendar").rows[5].style.visibility="hidden"
   //document.getElementById("calendar").rows[6].style.visibility="hidden" 
} else{ 
    document.getElementById("calendar").rows[5].style.visibility="hidden"
   document.getElementById("calendar").rows[6].style.visibility="hidden"
} 
    document.getElementById("Calendar").style.visibility='hidden'; 
}

function setday(InputBox)
{
    var x,y,intLoop,intWeeks,intDays;
    var DivContent;
    var year,month,day;
    var o=document.getElementById(InputBox);
    var thisyear; //�����Ľ������
    
    thisyear=new getToday();
    thisyear=thisyear.year;
    
    today = o.value;
    if(isDate(today))
        today = new getStringDay(today);
    else
        today = new getToday(); 
    
    //��ʾ��λ��
    x=o.offsetLeft;
    y=o.offsetTop;
    while(o=o.offsetParent)
    {
        x+=o.offsetLeft;
        y+=o.offsetTop;
    }
    document.getElementById("Calendar").style.left=x+"px";
    document.getElementById("Calendar").style.top=y+24+"px";
    document.getElementById("Calendar").style.visibility="visible";
    
    //���濪ʼ����������(border-color:#9DBAF7)
    DivContent="<table border='0' cellspacing='0' style='border:1px solid #72A9CF; background-color:#EDF2FC'>";
    DivContent+="<tr>";
    DivContent+="<td style='border-bottom:1px solid #72A9CF; background-color:#C7D8FA'>";
    
    //��
    DivContent+="<select name='Year' id='Year' onChange='newCalendar()' style='font-family:Verdana; font-size:12px'>";
    for (intLoop = thisyear; intLoop < (thisyear + 2); intLoop++) 
        DivContent+="<option value= " + intLoop + " " + (today.year == intLoop ? "Selected" : "") + ">" + intLoop + "</option>"; 
    DivContent+="</select>";
    
    //��
    DivContent+="<select name='Month' id='Month' onChange='newCalendar()' style='font-family:Verdana; font-size:12px'>";
    for (intLoop = 0; intLoop < months.length; intLoop++) 
        DivContent+="<option value= " + (intLoop + 1) + " " + (today.month == intLoop ? "Selected" : "") + ">" + months[intLoop] + "</option>"; 
    DivContent+="</select>";
    
    DivContent+="</td>";
    
    DivContent+="<td style='border-bottom:1px solid #72A9CF; background-color:#C7D8FA; font-weight:bold; font-family:Wingdings 2,Wingdings,Webdings; font-size:16px; padding-top:2px; color:#4477FF;cursor: pointer' align='center' title='�ر�' onClick='javascript:HiddenCalendar()'>X</td>";
    DivContent+="</tr>";
     
    DivContent+="<tr><td align='center' colspan='2'>";
    DivContent+="<table name='calendar' id='calendar' border='0' width='100%'>";
    
    //����
    DivContent+="<tr>";
    for (intLoop = 0; intLoop < days.length; intLoop++) 
        DivContent+="<td align='center' style='font-size:12px'>" + days[intLoop] + "</td>"; 
    DivContent+="</tr>";
    
    //��
    for (intWeeks = 0; intWeeks < 6; intWeeks++)
    { 
        DivContent+="<tr>"; 
        for (intDays = 0; intDays < days.length; intDays++) 
            DivContent+="<td onClick='GetDate(\"" + InputBox + "\",event)' style='cursor: pointer;border-top:1px solid #fff;border-left:1px solid #fff;border-right:1px solid #99bbdd; border-bottom:1px solid #99bbdd; color:#215DC6; font-family:Verdana;font-size:12px;line-height:16px' align='center'></td>"; 
        DivContent+="</tr>"; 
    } 
    DivContent+="</table></td></tr></table>";


DivContent+="<iframe frameborder='0' style='position:absolute;visibility:inherit;top:0px;left:0px;width:expression(this.parentNode.offsetWidth);height:expression(this.parentNode.offsetHeight);z-index:-1;filter='progid XImageTransform.Microsoft.Alpha(style=0,opacity=0)';'></iframe>";

    document.getElementById("Calendar").innerHTML=DivContent;
    newCalendar();
}

function isDate(dateStr)
{ 
    var datePat = /^(\d{4})(\-)(\d{1,2})(\-)(\d{1,2})$/;
    var matchArray = dateStr.match(datePat);
    if (matchArray == null) return false; 
    var month = matchArray[3];
    var day = matchArray[5]; 
    var year = matchArray[1]; 
    if (month < 1 || month > 12) return false; 
    if (day < 1 || day > 31) return false; 
    if ((month==4 || month==6 || month==9 || month==11) && day==31) return false; 
    if (month == 2)
    {
        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)); 
        if (day > 29 || (day==29 && !isleap)) return false; 
    } 
    return true;
}
