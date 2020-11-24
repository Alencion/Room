package com.alencion.roomserver.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@RequiredArgsConstructor
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/v2/api-docs",
                "/swagger-resources/**",
                "/swagger-ui.html",
                "/webjars/**",
                "/swagger/**",
                "/room/**");
    }

//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .httpBasic().disable() // rest api 이므로 기본설정 사용안함. 기본설정은 비인증시 로그인폼 화면으로 리다이렉트 된다.
//                .csrf().disable() // rest api이므로 csrf 보안이 필요없으므로 disable처리.
//                .authorizeRequests() // 다음 리퀘스트에 대한 사용권한 체크
//                .antMatchers("/*/signin", "/*/signin/**", "/*/signup", "/*/signup/**", "/social/**").permitAll() // 가입 및 인증 주소는 누구나 접근가능
//                .antMatchers(HttpMethod.GET, "/").permitAll(); // 등록된 GET요청 리소스는 누구나 접근가능
//                .anyRequest().hasRole("USER"); // 그외 나머지 요청은 모두 인증된 회원만 접근 가능
//
//        http.authorizeRequests()
//                .antMatchers(HttpMethod.OPTIONS, "/oauth/token").permitAll();
//    }
}
