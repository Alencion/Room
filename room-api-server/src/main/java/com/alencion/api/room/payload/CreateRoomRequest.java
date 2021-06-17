package com.alencion.api.room.payload;

import lombok.Data;

import java.io.Serializable;

@Data
public class CreateRoomRequest implements Serializable {

    private static final long serialVersionUID = 4846700985067132980L;

    private String title;
    private String description;
    private Boolean isPublic;
}
