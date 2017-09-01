package com.seally.utils;

import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;
import com.alibaba.fastjson.JSON;
import com.seally.entity.ChatMessage;

public class SocketJOSNEncoder implements Encoder.Text<ChatMessage> {
	
	@Override
	public void init(EndpointConfig config) {
		// TODO Auto-generated method stub

	}
	
	@Override
	public void destroy() {
		// TODO Auto-generated method stub

	}
	@Override
    public String encode(ChatMessage messagepojo){  
        try {  
            return JSON.toJSONString(messagepojo);
        } catch (Exception e) {  
            e.printStackTrace();  
            return null;  
        }  
    }
}
