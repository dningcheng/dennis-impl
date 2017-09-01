package com.seally.utils;

import javax.websocket.DecodeException;
import javax.websocket.Decoder;
import javax.websocket.EndpointConfig;

import com.alibaba.fastjson.JSON;
import com.seally.entity.ChatMessage;

public class ChatMessageDecoder implements Decoder.Text<ChatMessage> {

	@Override
	public void init(EndpointConfig config) {
		// TODO Auto-generated method stub

	}
	@Override
	public void destroy() {
		// TODO Auto-generated method stub

	}
	
	@Override
	public ChatMessage decode(String message) throws DecodeException {
		try{
			return JSON.parseObject(message, ChatMessage.class);
		}catch(Exception e){
			System.out.println("我这里发生了错误....");
			return null;
		}
	}

	@Override
	public boolean willDecode(String message) {
		return message.contains("msg");
	}

}
