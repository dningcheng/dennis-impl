/*websocket客户端简单封装*/
//用户
function User(UID,name,nickName,img){
	this.UID=UID;
	this.name=name;
	this.nickName=nickName;
	this.img=img;
	
}
function MyWebSocket(wsurl,identity){
	this.wsurl=wsurl;
	this.identity=identity;
	this.websocket=null;
	this.connectServer=function(){
		if(websocket==null){
			websocket=new WebSocket(wsurl+"/{"+this.identity+"}");
		}
		if(websocket.readyState==1){
			//正常进行连接中
		}
		
		this.connected=function(event){
			//连接成功
			alert("连接成功！");
		}
		this.receiveMessage=function(message){
			
		}
		//连接发生错误的回调方法
		this.websocket.onerror=function(){
			if(confirm("连接异常是否进行重连！")){
				connectServer();
			}
		};
		
		//连接成功建立的回调方法
		this.websocket.onopen = function(event){
			this.connected(event);
		}
		 
		//接收到消息的回调方法
		this.websocket.onmessage = function(event){
			this.receiveMessage(event.data);
		}
		 
		//连接关闭的回调方法
		this.websocket.onclose = function(){
		    this.userLeave(this.identity);
		}
	};
	
	//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
	window.onbeforeunload = function(){
		this.websocket.close();
	}
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
			this.connectServer();
		}
		
	},
	userLeave: function(UID){
		for(i=0;i<users.length;i++){
			if(users[i].UID==UID){
				users[i]=users[users.length-1];
				users.pop();
			}
		}
		this.websocket.close();
	}
	
}