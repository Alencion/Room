package com.alencion.common.chat.domain;

import com.alencion.common.common.AuditBaseEntity;
import com.alencion.common.user.domain.User;
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
    private User sender;

    @Column(columnDefinition = "TEXT")
    private String content;

    @Builder
    public Chat(Long id, long roomId, User sender, String content) {
        this.id = id;
        this.roomId = roomId;
        this.sender = sender;
        this.content = content;
    }
}
