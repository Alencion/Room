package com.alencion.roomserver.user.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import org.jetbrains.annotations.NotNull;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private boolean emailVerified = false;

    @JsonIgnore
    private String password;

    @Column
    private String picture;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @JsonIgnore
    private Role role;

    @NotNull
    @Enumerated(EnumType.STRING)
    @JsonIgnore
    private AuthProvider provider;

    @JsonIgnore
    private String providerId;

    @Builder
    public User(Long id, String name, String email, boolean emailVerified, String password, String picture, @NotNull AuthProvider provider, String providerId) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.emailVerified = emailVerified;
        this.password = password;
        this.picture = picture;
        this.role = Role.USER;
        this.provider = provider;
        this.providerId = providerId;
    }

    public User update(String name, String picture) {
        this.name = name;
        this.picture = picture;

        return this;
    }

    public String getRoleKey() {
        return this.role.getKey();
    }
}