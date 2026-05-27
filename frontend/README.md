# Connectify – Peer-to-Peer Video Conferencing Platform

Connectify is an open-source peer-to-peer video conferencing web application built using WebRTC technology. The platform enables users to communicate in real time through video and audio directly in the browser without requiring any external software installation.

Users can join meetings either through login authentication or as guests. The application currently supports a shared meeting room where participants can join instantly using the meeting link.

---

## Features

- Real-time video and audio communication
- Peer-to-peer connection using WebRTC
- Guest joining support
- User login authentication
- Join meetings using a shared meeting link
- Browser-based communication
- Responsive and user-friendly interface
- Open-source implementation

---

## Tech Stack

### Frontend

- React.js
- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js
- Socket.io

### Real-Time Communication

- WebRTC
- Peer-to-Peer Networking

### Authentication

- Firebase Authentication / JWT

---

## How It Works

1. Users can either log in or continue as guests.
2. Participants open the shared meeting link.
3. Users joining through the same link enter the common meeting room.
4. WebRTC establishes peer-to-peer communication between connected users.
5. Real-time audio and video streams are exchanged directly between participants.

Navigate to the project directory:
cd connectify
Install dependencies
npm install
Start the development server
npm start

Future Improvements:
Multiple meeting rooms
Screen sharing
Chat functionality
Meeting recording
Participant controls
End-to-end encryption
Room-based authentication

Project Objective
The objective of this project is to create an accessible and lightweight video conferencing platform using peer-to-peer communication technologies while exploring real-time web application development with WebRTC.
