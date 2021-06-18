package com.alencion.api.chat.service;

import com.alencion.common.chat.domain.ThreadChat;
import com.alencion.common.chat.repository.ThreadChatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ThreadChatService {

    private final ThreadChatRepository threadRepository;

    @Transactional
    public List<ThreadChat> getThreadChats(long chatId) {
        return threadRepository.findAllByChatId(chatId);
    }
}

