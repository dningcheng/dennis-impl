package com.seally.entity;

import java.util.Date;
import java.util.List;

public class ChatMessage {
	
	private Integer sendFromUID;
	private int msgType;
	private String msg;
	private Date createTime;
	private List<Integer> sendToUIDs;
	
	public Integer getSendFromUID() {
		return sendFromUID;
	}
	public void setSendFromUID(Integer sendFromUID) {
		this.sendFromUID = sendFromUID;
	}
	public int getMsgType() {
		return msgType;
	}
	public void setMsgType(int msgType) {
		this.msgType = msgType;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public List<Integer> getSendToUIDs() {
		return sendToUIDs;
	}
	public void setSendToUIDs(List<Integer> sendToUIDs) {
		this.sendToUIDs = sendToUIDs;
	}
	
}
