package com.alencion.socket.chat.service;

import com.alencion.common.chat.domain.Chat;
import com.alencion.common.chat.repository.ChatRepository;
import com.alencion.common.exception.domain.UserNotFoundException;
import com.alencion.common.user.domain.User;
import com.alencion.common.user.repository.UserRepository;
import com.alencion.socket.chat.domain.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class WSChatService {

    private final ChatRepository chatRepository;
    private final UserRepository userRepository;

    @Transactional
    public Chat sendChat(Message message) {
        User sender = userRepository
                .findById(message.getUserId())
                .orElseThrow(() -> new UserNotFoundException("Sender not found"));

        Chat newChat = Chat.builder()
                .sender(sender)
                .roomId(message.getRoomId())
                .content(message.getContent())
                .build();

        return chatRepository.save(newChat);
    }
}
