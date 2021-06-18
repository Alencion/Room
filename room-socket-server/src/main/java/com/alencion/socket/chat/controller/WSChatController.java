package com.alencion.socket.chat.controller;

import com.alencion.common.chat.domain.Chat;
import com.alencion.common.chat.domain.ThreadChat;
import com.alencion.socket.chat.domain.Message;
import com.alencion.socket.chat.domain.ThreadMessage;
import com.alencion.socket.chat.service.WSChatService;
import com.alencion.socket.chat.service.WSThreadChatService;
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
    private final WSThreadChatService threadService;

    @MessageMapping("/chat")
    public void sendChat(Message message) {
        logger.info("receive message : {}", message.toString());

        Chat newChat = chatService.sendChat(message);

        messagingTemplate.convertAndSend("/topic/chat/room/" + message.getRoomId(), newChat);
    }

    @MessageMapping("/thread")
    public void sendThread(ThreadMessage message) {
        logger.info("receive message : {}", message.toString());

        ThreadChat newThreadChat = threadService.sendChatThread(message);

        messagingTemplate.convertAndSend("/topic/chat/thread/" + message.getChatId(), newThreadChat);
    }
}
