package com.alencion.common.chat.repository;

import com.alencion.common.chat.domain.ThreadChat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ThreadChatRepository extends JpaRepository<ThreadChat, Long> {

    Page<ThreadChat> findAllByChatId(long chatId, Pageable page);
}
