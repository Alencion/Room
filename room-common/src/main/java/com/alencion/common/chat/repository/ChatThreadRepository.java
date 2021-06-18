package com.alencion.common.chat.repository;

import com.alencion.common.chat.domain.ChatThread;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatThreadRepository extends JpaRepository<ChatThread, Long> {

    List<ChatThread> findAllByChatId(long chatId);
}
