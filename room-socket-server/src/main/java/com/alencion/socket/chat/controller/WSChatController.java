package com.alencion.socket.chat.controller;

import com.alencion.common.chat.domain.Chat;
import com.alencion.socket.chat.domain.Message;
import com.alencion.socket.chat.service.WSChatService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class WSChatController {

    private static final Logger logger = LoggerFactory.getLogger(WSChatController.class);

    private final SimpMessageSendingOperations messagingTemplate;
    private final WSChatService chatService;

    @MessageMapping("/chat")
    public void broadCast(Message message) {
        logger.info("receive message : {}", message.toString());

        Chat newChat = chatService.sendChat(message);

        messagingTemplate.convertAndSend("/topic/chat/room/" + message.getRoomId(), newChat);
    }
}
