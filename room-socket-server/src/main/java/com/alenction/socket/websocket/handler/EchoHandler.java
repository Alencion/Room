package com.alenction.socket.websocket.handler;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component
public class EchoHandler implements WebSocketHandler {

    @Override
    public Mono<Void> handle(WebSocketSession webSocketSession) {
        Flux<WebSocketMessage> messageFlux = webSocketSession.receive().map(webSocketMessage -> {
            String payload = webSocketMessage.getPayloadAsText();
            return "Received: " + payload;
        }).map(webSocketSession::textMessage);

        return webSocketSession.send(messageFlux);
    }
}
