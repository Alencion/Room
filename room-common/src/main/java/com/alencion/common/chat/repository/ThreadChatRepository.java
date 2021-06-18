package com.alencion.common.chat.repository;

import com.alencion.common.chat.domain.ThreadChat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ThreadChatRepository extends JpaRepository<ThreadChat, Long> {

    List<ThreadChat> findAllByChatId(long chatId);
}
