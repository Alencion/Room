package com.alencion.socket.chat.service;

import com.alencion.common.chat.domain.ThreadChat;
import com.alencion.common.chat.repository.ThreadChatRepository;
import com.alencion.common.exception.domain.UserNotFoundException;
import com.alencion.common.user.domain.User;
import com.alencion.common.user.repository.UserRepository;
import com.alencion.socket.chat.domain.ThreadMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class WSThreadChatService {

    private final ThreadChatRepository threadRepository;
    private final UserRepository userRepository;

    @Transactional
    public ThreadChat sendChatThread(ThreadMessage message) {
        User sender = userRepository
                .findById(message.getUserId())
                .orElseThrow(() -> new UserNotFoundException("Sender not found"));

        ThreadChat newChat = ThreadChat.builder()
                .sender(sender)
                .chatId(message.getChatId())
                .content(message.getContent())
                .build();

        return threadRepository.save(newChat);
    }
}
