package com.alencion.api.room.controller;

import com.alencion.api.room.payload.CreateRoomRequest;
import com.alencion.api.room.service.RoomService;
import com.alencion.common.room.domain.Room;
import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/room")
@Api(value = "room")
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping("/{userId}")
    public List<Room> getRooms(@PathVariable("userId") Long userId) {
        return roomService.getRooms(userId);
    }

    @PostMapping("/{userId}/new")
    public Room addRoom(@PathVariable Long userId, @RequestBody CreateRoomRequest createRoomRequest) {
        Objects.requireNonNull(createRoomRequest);

        return roomService.createRoom(userId, createRoomRequest);
    }

    @GetMapping("/{userId}/{roomId}")
    public Room getRoom(@PathVariable("userId") Long userId, @PathVariable("roomId") Long roomId) {
        return roomService.getRoom(userId, roomId);
    }
}
