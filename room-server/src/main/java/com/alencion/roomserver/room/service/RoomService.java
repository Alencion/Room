package com.alencion.roomserver.room.service;

import com.alencion.roomserver.room.domain.FormRoom;
import com.alencion.roomserver.room.domain.Room;

import java.util.List;

public interface RoomService {

    List<Room> getRooms(Long userId);
    void addRoom(Long userId, FormRoom formRoom);
}
