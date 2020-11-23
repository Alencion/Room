package com.alencion.roomserver.filter;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class AccessLogFilter implements Filter {

    private static final Logger logger = LoggerFactory.getLogger(AccessLogFilter.class);

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {}

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;

        String remoteAddr = StringUtils.defaultString(servletRequest.getRemoteAddr(), "-");
        String url = (request.getRequestURL() == null) ? "" : request.getRequestURL().toString();
        String queryString = StringUtils.defaultString(request.getQueryString(), "");
        String refer = StringUtils.defaultString(request.getHeader("Refer"), "-");
        String agent = StringUtils.defaultString(request.getHeader("User-Agent"), "-");
        String fullUrl = url;
        fullUrl += StringUtils.isNotEmpty(queryString) ? "?" + queryString : queryString;

        StringBuffer result = new StringBuffer();
        result
                .append(":").append(remoteAddr)
                .append(":").append(fullUrl)
                .append(":").append(refer)
                .append(":").append(agent);
        logger.info("LOG FILTER {}", result);

        long startTime = System.currentTimeMillis();
        filterChain.doFilter(request, servletResponse);
        long endTime = System.currentTimeMillis();
        String uri = request.getRequestURI();
        if (!uri.contains("swagger")) {
            logger.info("==============================\trestAPI Access Time: {} 초\t============================" , (double) (endTime - startTime) / 1000);
        }
    }

    @Override
    public void destroy() {}
}
