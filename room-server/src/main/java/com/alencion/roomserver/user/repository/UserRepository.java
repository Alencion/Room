package com.alencion.roomserver.user.repository;

import com.alencion.roomserver.user.domain.User;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    @NotNull
    Optional<User> findById(@NotNull Long id);
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
}
