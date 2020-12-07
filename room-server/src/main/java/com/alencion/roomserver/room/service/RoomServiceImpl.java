package com.alencion.roomserver.room.service;

import com.alencion.roomserver.oauth.domain.SessionUser;
import com.alencion.roomserver.room.domain.FormRoom;
import com.alencion.roomserver.room.domain.Participant;
import com.alencion.roomserver.room.domain.Room;
import com.alencion.roomserver.room.repository.ParticipantRepository;
import com.alencion.roomserver.room.repository.RoomRepository;
import com.alencion.roomserver.user.domain.User;
import com.alencion.roomserver.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class RoomServiceImpl implements RoomService {

    private final HttpSession httpSession;
    private final ParticipantRepository participantRepository;
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;

    @Override
    public List<Room> getRooms(Long userId) {
        SessionUser sessionUser = (SessionUser) httpSession.getAttribute("user");
        if (!userId.equals(sessionUser.getId())) return null;

        User user = getUser(userId);

        return participantRepository.findAllByUser(user)
                .stream()
                .map(Participant::getRoom)
                .collect(Collectors.toList());
    }

    @Override
    public void addRoom(Long userId, FormRoom formRoom) {
        SessionUser sessionUser = (SessionUser) httpSession.getAttribute("user");
        if (!userId.equals(sessionUser.getId())) return;

        User user = getUser(userId);

        Room newRoom = Room.builder()
                .owner(user)
                .title(formRoom.getTitle())
                .description(formRoom.getDescription())
                .build();

        roomRepository.save(newRoom);
    }

    public User getUser(Long userId) {
        return userRepository.findById(userId).orElseThrow(RuntimeException::new);
    }
}
