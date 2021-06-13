package com.alencion.roomserver.room.repository;

import com.alencion.roomserver.room.domain.Participant;
import com.alencion.roomserver.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ParticipantRepository extends JpaRepository<Participant, Long> {

    List<Participant> findAllByUserId(Long userId);
}
