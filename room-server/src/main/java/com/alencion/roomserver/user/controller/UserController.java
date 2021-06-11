package com.alencion.roomserver.user.controller;

import com.alencion.roomserver.exception.domain.UserNotFoundException;
import com.alencion.roomserver.oauth.domain.SessionUser;
import com.alencion.roomserver.user.domain.CurrentUser;
import com.alencion.roomserver.user.domain.User;
import com.alencion.roomserver.user.domain.UserPrincipal;
import com.alencion.roomserver.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.Objects;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new UserNotFoundException("User not found id : " + userPrincipal.getId()));
    }
}
