# WhatsApp Clone UI
A simplified, static clone of the WhatsApp web application, built using React.js and CSS. This project replicates the layout and appearance of the WhatsApp web interface, including the chat list, chat interface, and sidebar sections.

## Table of Content:

- [About The App](#about-the-app)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Future Work](#future)

## About The App
This project uses React.js and CSS to create a mock WhatsApp web interface, displaying a range of sample chats with basic interaction features such as selecting a chat and viewing its messages. The goal of this project is to mimic the visual layout of WhatsApp’s interface and practice building structured web layouts with responsive elements.

## Technologies
I used `react.js`, `css`, `html` for this project.

## Setup
- download or clone the repository:
  ```bash
  git clone https://github.com/yesh31/whatsapp-clone.git
  ```
  
- Navigate to the project directory:
  ``` cd whatsapp-clone ```
  
- Install the dependencies:
  ```bash
  npm install
  ```
  
- Run the project:
  ```bash
  npm run dev
  ```

## Approach
I started out by analysing web.whatsapp.com and understood the layout of the application. Then I divided the entire application into 3 parts for easier development,
- Chat.jsx: deals with all the code for the conversation panel and the chat previews.
- Sidebar.jsx: deals with the left most corner of the application where you can find all the icons like chat, status, settings, profile etc.
- HomePage.jsx: puts all the components (Chat.jsx, Sidebar.jsx) together to render at one place.

## Future Work
- To make this project responsive to the screen sizes using Bootstrap.
- To add additional functionalities like enabling search box to filter out messages, post and update the conversation panel using axios library.
