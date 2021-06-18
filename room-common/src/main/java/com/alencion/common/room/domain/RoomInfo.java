package com.alencion.common.room.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class RoomInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column(nullable = false)
    private long roomId;

    @Column(columnDefinition = "TEXT")
    private String info;

    @Builder
    public RoomInfo(Long id, long roomId, String info) {
        this.id = id;
        this.roomId = roomId;
        this.info = info;
    }
}
