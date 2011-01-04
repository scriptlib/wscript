var args = new Array;
for(var i=0;i<WScript.Arguments.length;i++) {
	args.push(WScript.Arguments(i));
}
if(args.length<1) {
	WScript.Echo("Usage:" + WScript.ScriptName + " (Url) [Url List] [Refer] [Cookie] ");
	WScript.Quit(1);
}
args.push("","","");
var ThunderAgent = new ActiveXObject("ThunderAgent.Agent");
//WScript.Echo(args);
if(args[0].match(/\w:[\/\\]/)) {
	var file = args[0];
	var refer = args[1];
	var cookie = args[2];
	if(args[3] || cookie.match(/^(http|ftp)/)) {
		refer = args[2];
		cookie = args[3];
	}
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var a = fso.OpenTextFile(args[0], 1,false);
	while(!a.AtEndOfStream) {
		var line = a.ReadLine();
		if(line) {
			AddLink4(line,refer,cookie);	
		}
	}
	a.Close();
	ThunderAgent.CommitTasks2(1);
}
else {
	AddLink5(args[0],args[1],args[2]);
	ThunderAgent.CommitTasks2(1);
}
WScript.Quit(0);

function AddLink5(Url,Refer,Cookie) {
	ThunderAgent.AddTask5(Url, "", "", "Unknown", Refer,-1,0,-1,Cookie,"","", 1, "", -1);
}
function AddLink4(Url,Refer,Cookie) {
	ThunderAgent.AddTask4(Url, "", "", "Unknown", Refer, -1, 0, -1, Cookie, "", "")
}

function AddLink(Url,Info,Location,strCID,strStatUrl,strCookie)
{
	if (Url != "")
	{
		if (Info == "")
		{
			Info = "unknown";
		}	
		if (strCID != "")
		{
			if (strStatUrl != "")
			{
				
				ThunderAgent.AddTask5(Url, "", "", Info, Location, -1, 0, -1,  strCookie, strCID, strStatUrl, 1, "", -1);
			}
			else
			{
				ThunderAgent.AddTask5(Url, "", "", Info, Location, -1, 0, -1,  strCookie, strCID, "", 1, "", -1);
			}
		}
		else
		{
			ThunderAgent.AddTask5(Url, "", "", Info, Location,-1,0,-1,strCookie,"","", 1, "", -1);
		}
		
	}
}
