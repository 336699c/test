Events.on(PlayerChatEvent, e => {
if(Groups.player.find(f=>f.name.split("|")[1]=="yGt") && e.message.startsWith("_")){
_144(e.player.name,e.message,e.player.uuid().substring(0,3),e.player)
}
});

function _144_msg(e,m){
if(m){
Call.sendMessage("[[[pink]BOT[white] 144_]: "+e);
}else{
Chat.sout.writeUTF("%[[[pink]BOT[white] 144_]: "+e);
}
}

function _144(pname,ptext,uuid,player){
  switch(ptext){
  case "_query":
	try{

	_gamedata = JSON.parse(Vars.dataDirectory.child("144/gamedata").readString());
	if(_gamedata[uuid]){
		_144_msg("玩家 "+uuid+" 账户结余: "+Math.round(_gamedata[uuid]["money"])+"  | 玩家等级: "+_gamedata[uuid]["core"]+" ",player);
	}else{
	_144_msg("无此玩家 "+uuid+" 请输入_reg 注册",player);
	}
	}catch(error){Vars.dataDirectory.child("144/logs").writeString(error+"\n",true)}
break;
	case "_reg":
			try{
			_gamedata = JSON.parse(Vars.dataDirectory.child("144/gamedata").readString());
			if(_gamedata[uuid]){
				_144_msg("玩家 "+uuid+" 账户结余: "+_gamedata[uuid]["money"]+" ",player);
			}else{
				_144_msg("玩家 "+uuid+" 开启了新账户！",player);
				_gamedata[uuid]={"name":decodeColor(pname),"money":50,"copper":0,"bp":[],"core":1,"unit":[],"mine":0,"sign":0,"reg":new Date().toDateString()};
				Vars.dataDirectory.child("144/gamedata").writeString(JSON.stringify(_gamedata));
			}
			}catch(error){Vars.dataDirectory.child("144/logs").writeString(error+"\n",true)}
			break;
	  case "_help":
		  _144_msg("[gray][游戏] [orange]_query <uuid> / _reg  查看账户结余/注册");
		  break;
  };
}
