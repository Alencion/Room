package com.alenction.socket.chat.handler;

import com.alenction.socket.message.domain.Message;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class ChatHandler implements WebSocketHandler {
    private static final Map<String, WebSocketSession> userMap = new ConcurrentHashMap<>();
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        String query = session.getHandshakeInfo().getUri().getQuery();
        Map<String, String> queryMap = getQueryMap(query);
        String userId = queryMap.getOrDefault("id", "");
        userMap.put(userId, session);
        return session.receive().flatMap(webSocketMessage -> {
            String payload = webSocketMessage.getPayloadAsText();
            Message message;

            try {
                message = OBJECT_MAPPER.readValue(payload, Message.class);
                String targetId = message.getTargetId();
                if (userMap.containsKey(targetId)) {
                    WebSocketSession targetSession = userMap.get(targetId);
                    if (targetSession != null) {
                        WebSocketMessage textMessage = targetSession.textMessage(message.getMessageText());

                        return targetSession.send(Mono.just(textMessage));
                    }
                }
            } catch (JsonProcessingException e) {
                e.printStackTrace();
                return session.send(Mono.just(session.textMessage(e.getMessage())));
            }
            return session.send(Mono.just(session.textMessage("the target user is not online")));
        }).then().doFinally(signal -> userMap.remove(userId));
    }

    private Map<String, String> getQueryMap(String queryStr) {
        Map<String, String> queryMap = new HashMap<>();
        if (!ObjectUtils.isEmpty(queryStr)) {
            String[] queryParam = queryStr.split("&");
            Arrays.stream(queryParam).forEach(s -> {
                String[] kv = s.split("=", 2);
                String value = kv.length == 2 ? kv[1] : "";
                queryMap.put(kv[0], value);
            });
        }
        return queryMap;
    }
}