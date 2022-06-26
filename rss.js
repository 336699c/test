var _1=[["","","",""],["","","",""],["","","",""],["","","",""]];
var _3=["copper","lead","metaglass","graphite","sand","coal","titanium","thorium","scrap","silicon","plastanium","phaseFabric","surgeAlloy","sporePod","blastCompound","pyratite"];

//准备工作

function _4(e){Call.menu(e.con,3,"选择资源","核心资源+1k",_1)};
function _5(e){Aim.menuUI.then[e.uuid()]= (p,s)=>{_6(p,s)}};
function _6(p,s){Call.sendMessage(_1[Math.floor(s/4)][s%4]+" [green]+5k  [white]"+p.name);p.core().items.add(eval("Items."+_3[s]),5000)};

//Call

Groups.player.each(e=>{_4(e);_5(e)});

/*
下面是游戏内执行指令


;js _1=[["","","",""],["","","",""],["","","",""],["","","",""]];
;js _3=["copper","lead","metaglass","graphite","sand","coal","titanium","thorium","scrap","silicon","plastanium","phaseFabric","surgeAlloy"];
;js _3.push("sporePod","blastCompound","pyratite");

//有bug
;js Aim.menuUI.menu(getPlayer("yGt"),"选择资源","核心资源+1k",_1,(p,s)=>Call.sendMessage("TEST: "+p.name+"\nOption: "+s))

;js function _4(e){Call.menu(e.con,3,"选择资源","核心资源+1k",_1)}
;js function _5(e){Aim.menuUI.then[e.uuid()]= (p,s)=>{_6(p,s)}}
;js function _6(p,s){Call.sendMessage(_1[Math.floor(s/4)][s%4]+" [green]+5k  [white]"+p.name);p.core().items.add(eval("Items."+_3[s]),5000)}
;js Groups.player.each(e=>{_4(e);_5(e)})
*/
