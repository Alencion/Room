package com.alencion.api;

import com.alencion.api.config.AppProperties;
import com.alencion.api.filter.AccessLogFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.servlet.Filter;

@SpringBootApplication
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
