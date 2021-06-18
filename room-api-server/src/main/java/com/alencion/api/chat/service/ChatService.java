package com.alencion.api.chat.service;

import com.alencion.common.chat.domain.Chat;
import com.alencion.common.chat.repository.ChatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatRepository chatRepository;

    @Transactional
    public List<Chat> getChats(long roomId) {
        return chatRepository.findAllByRoomId(roomId);
    }
}