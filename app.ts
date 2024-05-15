import Server from "./models/server";

const server = new Server();

server.listen()

//otra instancia de server, en este caso no sirve para nada, pero es mas escalable
// const server2 = new Server();
