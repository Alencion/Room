package com.alencion.roomserver.oauth.payload;

import lombok.Data;

@Data
public class JwtAuthenticationResponse {

    private final String accessToken;
    private final String tokenType = "Bearer";

    public JwtAuthenticationResponse(String accessToken) {
        this.accessToken = accessToken;
    }
}
