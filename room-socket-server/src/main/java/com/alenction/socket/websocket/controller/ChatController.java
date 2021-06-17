package com.alenction.socket.websocket.controller;

import com.alenction.socket.message.domain.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {

    private static final Logger logger = LoggerFactory.getLogger(ChatController.class);

    @MessageMapping("/hello")
    @SendTo("/topic/roomId")
    public Message broadCast(Message message) {
        logger.info("receive message : {}", message.toString());
        return message;
    }
}
