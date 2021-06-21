package com.alencion.common.user.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @Column
    private String nickname;

    @Column(nullable = false)
    private String email;

    @Column
    private String description;

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

    @Enumerated(EnumType.STRING)
    @JsonIgnore
    private AuthProvider provider;

    @JsonIgnore
    private String providerId;

    @Builder
    public User(Long id,
                String name,
                String nickname,
                String email,
                String description,
                boolean emailVerified,
                String password,
                String picture,
                AuthProvider provider,
                String providerId) {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.email = email;
        this.description = description;
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