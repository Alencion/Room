package com.alencion.api.chat.service;

import com.alencion.common.chat.domain.ThreadChat;
import com.alencion.common.chat.repository.ThreadChatRepository;
import com.alencion.common.exception.domain.BadRequestException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ThreadChatService {

    private final ThreadChatRepository threadRepository;

    @Transactional(readOnly = true)
    public Page<ThreadChat> getThreadChats(long chatId, int page) {
        if (page < 0) throw new BadRequestException("invalid page number");
        return threadRepository.findAllByChatId(chatId, PageRequest.of(page - 1, 20, Sort.by("id").descending()));
    }
}

