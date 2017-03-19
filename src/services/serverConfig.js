// This is the config for kingdom politiks server
export class ServerConfig {
  constructor() {
    // Should resolve to the IP address of the server container getting at the node.js backend
    this.server_url = 'http://server:8000';
    this.socket_url = 'http://server:8000';
  }
}
