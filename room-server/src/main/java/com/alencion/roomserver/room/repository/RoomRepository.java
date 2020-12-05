package com.alencion.roomserver.room.repository;

import com.alencion.roomserver.room.domain.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {

    List<Room> findAllByUserId(Long userId);
}
