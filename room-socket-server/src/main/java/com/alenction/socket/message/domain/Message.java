package com.alenction.socket.message.domain;


import lombok.Data;

@Data
public class Message {

    private String targetId;
    private String messageText;
    private String userId;
}
