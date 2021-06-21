package com.alencion.socket.chat.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ThreadMessage {

    private Long userId;
    private Long chatId;
    private String content;

    @Builder
    public ThreadMessage(Long userId, Long chatId, String content) {
        this.userId = userId;
        this.chatId = chatId;
        this.content = content;
    }

    @Override
    public String toString() {
        return "ThreadMessage{" +
                "userId=" + userId +
                ", chatId=" + chatId +
                ", content='" + content + '\'' +
                '}';
    }
}
