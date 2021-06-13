package com.alencion.roomserver.room.domain;

import com.alencion.roomserver.common.domain.AuditBaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Room extends AuditBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL)
    private final List<Participant> participants = new ArrayList<>();

    @Column(nullable = false)
    private String title;

    private String description;

    private boolean isPublic;

    @Builder
    public Room(Long id, String title, String description, boolean isPublic) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isPublic = isPublic;
    }
}
