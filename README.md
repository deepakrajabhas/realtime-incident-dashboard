# Real-Time Incident Dashboard

## Overview
A simple real-time incident dashboard demonstrating event-driven architecture using REST APIs and WebSockets.

## Features
- Create incidents via REST API
- Real-time updates using WebSockets
- Live dashboard without page refresh

## Tech Stack
- Node.js (Express)
- Socket.IO
- HTML, JavaScript

## ArchitectureThis application demonstrates a real-time event-driven architecture:

1. Client sends incident via REST API
2. Server processes and emits event
3. WebSocket broadcasts to all connected clients
4. UI updates instantly without refresh

## Key Concepts Demonstrated
- Real-time communication using WebSockets
- Event-driven backend design
- Full-stack integration (API + UI + real-time layer)
