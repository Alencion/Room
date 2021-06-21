package com.alencion.api.room.service;

import com.alencion.api.room.payload.CreateRoomRequest;
import com.alencion.common.exception.domain.RoomNotFoundException;
import com.alencion.common.exception.domain.UserNotFoundException;
import com.alencion.common.room.domain.Participant;
import com.alencion.common.room.domain.Room;
import com.alencion.common.room.domain.RoomInfo;
import com.alencion.common.room.domain.RoomRole;
import com.alencion.common.room.repository.ParticipantRepository;
import com.alencion.common.room.repository.RoomInfoRepository;
import com.alencion.common.room.repository.RoomRepository;
import com.alencion.common.user.domain.User;
import com.alencion.common.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class RoomService {

    private final ParticipantRepository participantRepository;
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;
    private final RoomInfoRepository roomInfoRepository;

    @Transactional(readOnly = true)
    public List<Room> getRooms(Long userId) {
        existUser(userId);

        return participantRepository.findAllByUserId(userId)
                .stream()
                .map(Participant::getRoom)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public Room getRoom(Long userId, Long roomId) {
        existUser(userId);

        List<Room> rooms = participantRepository.findAllByUserId(userId).stream().map(Participant::getRoom)
                .collect(Collectors.toList());

        boolean result = rooms.stream().anyMatch(r -> r.getId().equals(roomId));
        if (!result) {
            throw new RoomNotFoundException("Room not found roomId : " + roomId);
        }

        return roomRepository.findById(roomId).orElseThrow(() -> new RoomNotFoundException("Room not found roomId : " + roomId));
    }

    @Transactional
    public Room createRoom(Long userId, CreateRoomRequest createRoomRequest) {
        User owner = existUser(userId);

        Room newRoom = Room.builder()
                .title(createRoomRequest.getTitle())
                .description(createRoomRequest.getDescription())
                .isPublic(createRoomRequest.getIsPublic())
                .build();

        newRoom = roomRepository.save(newRoom);

        Participant participant = Participant.builder()
                .user(owner)
                .role(RoomRole.owner)
                .room(newRoom)
                .build();

        participantRepository.save(participant);

        RoomInfo roomInfo = RoomInfo.builder()
                .roomId(newRoom.getId())
                .build();

        roomInfoRepository.save(roomInfo);

        return newRoom;
    }

    private User existUser(Long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("Owner not found id : " + userId));
    }
}
