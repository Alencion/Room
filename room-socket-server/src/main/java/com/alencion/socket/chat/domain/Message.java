package com.alencion.socket.chat.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Message {

    private Long userId;
    private Long roomId;
    private String content;

    @Builder
    public Message(Long userId, Long roomId, String content) {
        this.userId = userId;
        this.roomId = roomId;
        this.content = content;
    }

    @Override
    public String toString() {
        return "Message{" +
                "userId=" + userId +
                ", roomId=" + roomId +
                ", content='" + content + '\'' +
                '}';
    }
}