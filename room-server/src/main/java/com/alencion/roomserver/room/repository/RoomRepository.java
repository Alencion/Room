package com.alencion.roomserver.room.repository;

import com.alencion.roomserver.room.domain.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {

}
