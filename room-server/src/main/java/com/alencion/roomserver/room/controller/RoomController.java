package com.alencion.roomserver.room.controller;

import com.alencion.roomserver.room.payload.CreateRoomRequest;
import com.alencion.roomserver.room.domain.Room;
import com.alencion.roomserver.room.service.RoomService;
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
