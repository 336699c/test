Events.on(PlayerChatEvent, e => {
f(e);
});

function f(e){
if(Groups.player.find(f=>f.name.split("|")[1]=="yGt") && e.message.startsWith("_")){
  var uuid=e.player.uuid().substring(0,3);
  var player=e.player;
  var ptext=e.message;
  var pname=e.player.name;
  e.message="";
  switch(ptext){
  case "_query":
			try{
        
			_gamedata = JSON.parse(Vars.dataDirectory.child("144/gamedata").readString());
			if(_gamedata[uuid]){
				Call.sendMessage("[<[pink]BOT[white]> 144_]: 玩家 "+uuid+" 账户结余: "+Math.round(_gamedata[uuid]["money"])+"  | 玩家等级: "+_gamedata[uuid]["core"]+" ");
			}else{
        Call.sendMessage("[<[pink]BOT[white]> 144_]: 无此玩家 "+uuid+" 请输入_reg 注册");
			}
			}catch(error){Vars.dataDirectory.child("144/logs").writeString(error+"\n",true)}
	break;
  };
}
}
