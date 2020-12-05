package com.alencion.roomserver.room.controller;

import com.alencion.roomserver.oauth.domain.SessionUser;
import com.alencion.roomserver.room.domain.Room;
import com.alencion.roomserver.room.repository.RoomRepository;
import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/room")
@Api(value = "room")
public class RoomController {

    private final RoomRepository roomRepository;
    private final HttpSession httpSession;

    public RoomController(RoomRepository roomRepository, HttpSession httpSession) {
        this.roomRepository = roomRepository;
        this.httpSession = httpSession;
    }

    @PostMapping("/{userId}")
    public List<Room> getRoom(@PathVariable("userId") Long userId) {
        SessionUser user = (SessionUser) httpSession.getAttribute("user");
        if (!user.getId().equals(userId)) return null;
        return roomRepository.findAllByUserId(userId);
    }
}
