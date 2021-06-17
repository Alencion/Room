package com.alencion.api.user.controller;

import com.alencion.api.user.domain.CurrentUser;
import com.alencion.api.user.domain.UserPrincipal;
import com.alencion.common.exception.domain.UserNotFoundException;
import com.alencion.common.user.domain.User;
import com.alencion.common.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
