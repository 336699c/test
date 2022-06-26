Aim.commands[";ping"]={
    func:(p,e)=>{
		switch(e[1]){
				case "星空":
				wping("nz.ipyvps.com:1013",p);
				break;
				case "星空大厅":
				wping("1.15.133.6:6567",p);
				break;
				case "星空测试":
				wping("203.135.101.246:1019",p);
				break;
				case "wz":
				wping("mdt.wayzer.cf:6567",p);
				break;
				case "土豆0":
				case "土豆":
				wping("mindustry.vicp.io:6567",p);
				break;
				case "土豆1":
				wping("mindustry.vicp.io:7000",p);
				break;
				case "土豆2":
				wping("mindustry.vicp.io:6800",p);
				break;
				default:
				wping(e[1],p);
				break;
			}
    },
    desc:"144_ ping 预设输入[green]土豆<0,1,2> 星空 星空大厅 星空测试 wz",
    args:"ip",
    show:true
};
function wping(x,p){
	try{
	var xf=x.split(":");
	if(xf.length<2)xf.push("6567");
	Vars.net.pingHost(xf[0],xf[1],e=>{
	Call.sendMessage(e.name+"   "+e.description+"\n[white]地图："+e.mapname+"\n[gray]"+e.mode+" [#ffd37f]"+e.players+"[white]名玩家在线 [gray]/ wave "+e.wave +"\nip:"+e.address+":"+e.port,"",p);
	},e=>{
	Call.sendMessage("[sky] 无法抓取服务器地址 请输入 ip地址。 亦可输入预设地址 星空,星空大厅,星空测试,土豆<0-2>,wz","",p);
	})
	}catch(error){Call.sendMessage(error);}
}
