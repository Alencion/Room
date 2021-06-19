package com.alencion.api.chat.service;

import com.alencion.common.chat.domain.Chat;
import com.alencion.common.chat.repository.ChatRepository;
import com.alencion.common.exception.domain.BadRequestException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatRepository chatRepository;

    @Transactional(readOnly = true)
    public Page<Chat> getChats(long roomId, int page) {
        if (page < 0) throw new BadRequestException("invalid page number");
        return chatRepository.findAllByRoomId(roomId, PageRequest.of(page - 1, 20, Sort.by("id").descending()));
    }
}
