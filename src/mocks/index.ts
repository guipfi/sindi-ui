if (typeof window === "undefined") {
  const { server } = require("mocks/config/server");
  server.listen();
} else {
  const { worker } = require("mocks/config/browser");
  worker.start();
}

export {};
