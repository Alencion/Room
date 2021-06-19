package com.alencion.api.chat.controller;

import com.alencion.api.chat.service.ChatService;
import com.alencion.api.chat.service.ThreadChatService;
import com.alencion.common.chat.domain.Chat;
import com.alencion.common.chat.domain.ThreadChat;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;
    private final ThreadChatService threadService;

    @GetMapping("/{roomId}")
    public Page<Chat> fetchRoomChats(@PathVariable long roomId, @RequestParam("page") int page) {
        return chatService.getChats(roomId, page);
    }

    @GetMapping("/thread/{chatId}")
    public Page<ThreadChat> fetchThreadChats(@PathVariable long chatId, @RequestParam("page") int page) {
        return threadService.getThreadChats(chatId, page);
    }
}
