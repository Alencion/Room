package com.alencion.socket.chat.controller;

import com.alencion.socket.chat.domain.Message;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class ChatController {

    private static final Logger logger = LoggerFactory.getLogger(ChatController.class);

    private final SimpMessageSendingOperations messagingTemplate;

    @MessageMapping("/chat")
    public void broadCast(Message message) {
        logger.info("receive message : {}", message.toString());

        messagingTemplate.convertAndSend("/topic/chat/room/" + message.getRoomId(), message);
    }
}
