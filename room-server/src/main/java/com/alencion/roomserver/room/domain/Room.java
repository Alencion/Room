package com.alencion.roomserver.room.domain;

import com.alencion.roomserver.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity

public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @OneToOne
    private User owner;

    @OneToMany(mappedBy = "room")
    private final List<Participant> participantList = new ArrayList<>();

    @Column(nullable = false)
    private String title;

    @Column(nullable = true)
    private String description;

    @Column(nullable = false)
    @CreatedDate
    private LocalDateTime createTime;

    @Builder
    public Room(User owner, String title, String description) {
        this.owner = owner;
        this.title = title;
        this.description = description;
    }
}
