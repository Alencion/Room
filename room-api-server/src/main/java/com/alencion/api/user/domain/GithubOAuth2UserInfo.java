package com.alencion.api.user.domain;

import java.util.Map;

public class GithubOAuth2UserInfo extends OAuth2UserInfo {

    public GithubOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    @Override
    public String getId() {
        return this.attributes.get("id").toString();
    }

    @Override
    public String getName() {
        return (String) this.attributes.get("name");
    }

    @Override
    public String getNickname() {
        return (String)this.attributes.get("login");
    }

    @Override
    public String getDescription() {
        return (String)this.attributes.get("bio");
    }

    @Override
    public String getEmail() {
        return (String) this.attributes.get("email");
    }

    @Override
    public String getImageUrl() {
        return (String) attributes.get("avatar_url");
    }
}
