package com.alencion.roomserver;

import com.alencion.roomserver.config.AppProperties;
import com.alencion.roomserver.filter.AccessLogFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.servlet.Filter;

@SpringBootApplication
@EnableJpaAuditing
@EnableConfigurationProperties(AppProperties.class)
public class RoomServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(RoomServerApplication.class, args);
    }

    /**
     * filter 설정
     *
     * @return
     */
    @Bean
    public FilterRegistrationBean<Filter> getFilterRegistrationBean() {
        FilterRegistrationBean<Filter> registrationBean = new FilterRegistrationBean<>(new AccessLogFilter());
        registrationBean.addUrlPatterns("/*");
        return registrationBean;
    }
}
