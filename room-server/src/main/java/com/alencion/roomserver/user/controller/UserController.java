package com.alencion.roomserver.user.controller;

import com.alencion.roomserver.oauth.domain.SessionUser;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {

    private final HttpSession httpSession;

    @PostMapping("/info")
    public SessionUser getSessionUser() {
        return (SessionUser) httpSession.getAttribute("user");
    }
}
