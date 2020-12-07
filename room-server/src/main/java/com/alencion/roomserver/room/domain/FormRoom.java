package com.alencion.roomserver.room.domain;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class FormRoom implements Serializable {

    private static final long serialVersionUID = 4846700985067132980L;

    private String title;
    private String description;
}
