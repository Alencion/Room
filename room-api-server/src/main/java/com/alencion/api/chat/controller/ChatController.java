package com.alencion.api.chat.controller;

import com.alencion.api.chat.service.ChatService;
import com.alencion.common.chat.domain.Chat;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;

    @GetMapping("/{roomId}")
    public List<Chat> fetchRoomChats(@PathVariable long roomId) {
        return chatService.getChats(roomId);
    }
}
