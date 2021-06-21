package com.alencion.socket.chat.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Event {

    private Long senderId;
    private Long roomId;
    private EventType type;
    private String content;

    public Event(Long senderId, Long roomId, EventType type, String content) {
        this.senderId = senderId;
        this.roomId = roomId;
        this.type = type;
        this.content = content;
    }
}
