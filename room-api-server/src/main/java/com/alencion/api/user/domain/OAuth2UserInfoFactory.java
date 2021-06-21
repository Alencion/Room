package com.alencion.api.user.domain;

import com.alencion.api.exception.domain.OAuth2AuthenticationProcessingException;
import com.alencion.common.user.domain.AuthProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

public class OAuth2UserInfoFactory {

    private static final Logger logger = LoggerFactory.getLogger(OAuth2UserInfoFactory.class);

    public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
        if (registrationId.equalsIgnoreCase(AuthProvider.github.toString())) {
            logger.info("user attribute : {}", attributes.toString());
            return new GithubOAuth2UserInfo(attributes);
        } else {
            throw new OAuth2AuthenticationProcessingException("Sorry! Login with " + registrationId + " is not supported yet.");
        }
    }
}
