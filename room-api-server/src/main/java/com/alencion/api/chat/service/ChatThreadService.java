package com.alencion.api.chat.service;

import com.alencion.common.chat.domain.ChatThread;
import com.alencion.common.chat.repository.ChatThreadRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatThreadService {

    private final ChatThreadRepository threadRepository;

    @Transactional
    public List<ChatThread> getThreads(long chatId) {
        return threadRepository.findAllByChatId(chatId);
    }
}

