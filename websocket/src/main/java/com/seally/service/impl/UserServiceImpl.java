package com.seally.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.seally.dao.UserDao;
import com.seally.entity.ChatMessage;
import com.seally.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Resource
	UserDao userDao;

	@Override
	public boolean saveMessage(ChatMessage message) {
		System.out.println(message.getMsg());
		
		
		return true;
	}
}
