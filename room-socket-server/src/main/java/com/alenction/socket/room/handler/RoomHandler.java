//package com.alenction.socket.room.handler;
//
//import com.alenction.socket.message.domain.Message;
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.springframework.util.ObjectUtils;
//import org.springframework.util.StringUtils;
//import org.springframework.web.reactive.socket.WebSocketHandler;
//import org.springframework.web.reactive.socket.WebSocketSession;
//import reactor.core.publisher.Mono;
//
//import java.util.Arrays;
//import java.util.HashMap;
//import java.util.Map;
//import java.util.concurrent.ConcurrentHashMap;
//
//public class RoomHandler implements WebSocketHandler {
//
//    private static final Map<String, WebSocketSession> roomMap = new ConcurrentHashMap<>();
//    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();
//
//    @Override
//    public Mono<Void> handle(WebSocketSession session) {
//        String query = session.getHandshakeInfo().getUri().getQuery();
//        Map<String, String> queryMap = getQueryMap(query);
//        String roomId = queryMap.getOrDefault("id", "");
//        roomMap.put(roomId, session);
//
//        return session.receive().flatMap(webSocketMessage -> {
//            String payload = webSocketMessage.getPayloadAsText();
//            Message message;
//
//            try {
//                message = OBJECT_MAPPER.readValue(payload, Message.class);
//                String targetId = message.getTargetId();
//                if (roomMap.containsKey(targetId)){
//                    webSocketMessage targetSession =
//                }
//            } catch (JsonProcessingException e) {
//                e.printStackTrace();
//            }
//
//        })
//    }
//
//    private Map<String, String> getQueryMap(String queryStr) {
//        Map<String, String> queryMap = new HashMap<>();
//        if(!ObjectUtils.isEmpty(queryStr)){
//            String[] queryParam = queryStr.split("&");
//            Arrays.stream(queryParam).forEach(s -> {
//                String[] keyValue = s.split("=", 2);
//                String value = keyValue.length == 2 ? keyValue[1] : "";
//                queryMap.put(keyValue[0], value);
//            });
//        }
//        return queryMap;
//    }
//}
