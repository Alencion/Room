package com.alencion.roomserver.user.controller;

import com.alencion.roomserver.oauth.domain.SessionUser;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.Objects;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final HttpSession httpSession;

    @PostMapping("/info")
    public SessionUser getSessionUser() {
        SessionUser user = (SessionUser) httpSession.getAttribute("user");
        if (Objects.isNull(user)){
            return null;
        }

        return (SessionUser) httpSession.getAttribute("user");
    }
}
