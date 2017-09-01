/*websocket客户端简单封装*/
//用户
function User(UID,name,nickName,img){
	this.UID=UID;
	this.name=name;
	this.nickName=nickName;
	this.img=img;
	
}
function MyWebSocket(wsurl,UID){
	this.websocket=null;
	this.connectServer=function(){
		if(websocket==null){
			websocket=new WebSocket(wsurl+"/{"+UID+"}");
		}
		if(websocket.readyState==1){
			//正常进行连接中
		}
	};
	this.e
	websocket.onerror=function(){
		connectServer();
	};
}
MyWebSocket.prototype = {
	constructor:MyWebSocket,
	users:[],
	getUsers : function(){
		return this.users;
	},
	getUserOnUID: function(UID){
		for(i=0;i<users.length;i++){
			if(users[i].UID==UID){
				return users[i];
			}
		}
		return -1;
	},
	userJoin : function(user){
		if(typeof(user)=="User"){
			this.users.push(user);
		}
	},
	userLeave: function(UID){
		for(i=0;i<users.length;i++){
			if(users[i].UID==UID){
				users[i]=users[users.length-1];
				users.pop();
			}
		}
		this.closeWebsocket();
	},
	closeWebsocket:function(){
		this.websocket.close();
	}
	
}