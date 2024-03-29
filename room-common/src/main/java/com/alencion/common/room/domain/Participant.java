package com.alencion.common.room.domain;

import com.alencion.common.user.domain.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @JoinColumn
    @ManyToOne
    private User user;

    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private Room room;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RoomRole role;

    @Column
    private String introduction;

    @Builder
    public Participant(User user, Room room, RoomRole role, String introduction) {
        this.user = user;
        this.room = room;
        this.role = role;
        this.introduction = introduction;
    }
}
