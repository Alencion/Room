package com.alencion.roomserver.room.controller;

import io.swagger.annotations.Api;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/room")
@Api(value = "room")
public class RoomController {

    @GetMapping("/{room_id}")
    public ResponseEntity<String> getRoom(@PathVariable("room_id") String roomId) {
        return ResponseEntity.ok(roomId);
    }
}
