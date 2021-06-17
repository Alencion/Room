package com.alencion.roomserver.chat.domain;

import com.alencion.roomserver.common.domain.AuditBaseEntity;
import com.alencion.roomserver.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Chat extends AuditBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column(nullable = false)
    private long roomId;

    @JoinColumn
    @ManyToOne
    private User user;

    @Column(columnDefinition = "TEXT")
    private String content;

    @Builder
    public Chat(Long id, long roomId, User user, String content) {
        this.id = id;
        this.roomId = roomId;
        this.user = user;
        this.content = content;
    }
}
