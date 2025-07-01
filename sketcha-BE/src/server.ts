import express, { Request, Response } from "express";
import { createServer } from "http";

async function boot(port: number) {
  const app = express();
  const server = createServer(app);

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello, Sketcha BE is running!");
  });

  app.all("*", (req: Request, res: Response) => {
    res.status(404).send("Not Found");
  });

  server.listen(port, () => {
    console.log(`🚀 Sketcha server running on http://localhost:${port}`);
  });
}

boot(3000);
