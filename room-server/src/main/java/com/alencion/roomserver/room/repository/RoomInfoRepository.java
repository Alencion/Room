package com.alencion.roomserver.room.repository;

import com.alencion.roomserver.room.domain.RoomInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomInfoRepository extends JpaRepository<RoomInfo, Long> {
}
