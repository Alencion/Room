package com.alencion.roomserver.room.domain;

import com.alencion.roomserver.user.domain.User;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
public class Participant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @ManyToOne
    @JoinColumn
    private User user;

    @ManyToOne
    @JoinColumn
    private Room room;
}
