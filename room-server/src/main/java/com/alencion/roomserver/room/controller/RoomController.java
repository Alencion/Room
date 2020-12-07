package com.alencion.roomserver.room.controller;

import com.alencion.roomserver.room.domain.FormRoom;
import com.alencion.roomserver.room.domain.Room;
import com.alencion.roomserver.room.service.RoomService;
import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/room")
@Api(value = "room")
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping("/{userId}")
    public List<Room> getRooms(@PathVariable("userId") Long userId) {
        return roomService.getRooms(userId);
    }

    @PostMapping("/{userId}/generation")
    public void addRoom(@PathVariable Long userId, @RequestParam FormRoom formRoom) {
        Objects.requireNonNull(formRoom);

        roomService.addRoom(userId, formRoom);
    }
}
