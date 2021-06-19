package com.alencion.common.chat.repository;

import com.alencion.common.chat.domain.Chat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {

    Page<Chat> findAllByRoomId(long roomId, Pageable page);
}
