import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/start";
import { createRouter } from "./router";

const router = createRouter();

const root = document.getElementById("root")!;
hydrateRoot(root, <StartClient router={router} />);
