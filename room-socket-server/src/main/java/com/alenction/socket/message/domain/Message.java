package com.alenction.socket.message.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class Message {

    private String username;
    private String content;
    private Date date;

    @Builder
    public Message(String username, String content, Date date) {
        this.username = username;
        this.content = content;
        this.date = date;
    }

    @Override
    public String toString() {
        return "Message{" +
                "username='" + username + '\'' +
                ", content='" + content + '\'' +
                ", date=" + date +
                '}';
    }
}