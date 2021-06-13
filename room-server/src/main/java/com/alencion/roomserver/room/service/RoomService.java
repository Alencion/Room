package com.alencion.roomserver.room.service;

import com.alencion.roomserver.exception.domain.UserNotFoundException;
import com.alencion.roomserver.room.domain.RoomRole;
import com.alencion.roomserver.room.payload.CreateRoomRequest;
import com.alencion.roomserver.room.domain.Participant;
import com.alencion.roomserver.room.domain.Room;
import com.alencion.roomserver.room.repository.ParticipantRepository;
import com.alencion.roomserver.room.repository.RoomRepository;
import com.alencion.roomserver.user.domain.User;
import com.alencion.roomserver.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class RoomService {

    private final ParticipantRepository participantRepository;
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;

    public List<Room> getRooms(Long userId) {
        existUser(userId);

        return participantRepository.findAllByUserId(userId)
                .stream()
                .map(Participant::getRoom)
                .collect(Collectors.toList());
    }

    @Transactional
    public Room createRoom(Long userId, CreateRoomRequest createRoomRequest) {
        existUser(userId);

        Room newRoom = Room.builder()
                .title(createRoomRequest.getTitle())
                .description(createRoomRequest.getDescription())
                .isPublic(createRoomRequest.isPublic())
                .build();

        newRoom = roomRepository.save(newRoom);

        Participant participant = Participant.builder()
                .userId(userId)
                .role(RoomRole.owner)
                .room(newRoom)
                .build();

        participantRepository.save(participant);

        return newRoom;
    }

    public User existUser(Long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("Owner not found id : " + userId));
    }
}
