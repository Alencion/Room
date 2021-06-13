package com.alencion.roomserver.room.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
public class Participant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private Long userId;

    @ManyToOne
    @JoinColumn
    private Room room;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RoomRole role;

    @Builder
    public Participant(Long userId, Room room, RoomRole role) {
        this.userId = userId;
        this.room = room;
        this.role = role;
    }
}
