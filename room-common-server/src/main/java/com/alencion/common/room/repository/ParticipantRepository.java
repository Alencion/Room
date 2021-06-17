package com.alencion.common.room.repository;

import com.alencion.common.room.domain.Participant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ParticipantRepository extends JpaRepository<Participant, Long> {

    List<Participant> findAllByUserId(Long userId);
}
