package com.seally.service;

import com.seally.entity.ChatMessage;

public interface UserService {
	
	boolean saveMessage(ChatMessage message);
}
