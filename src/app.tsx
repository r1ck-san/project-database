import { createRoot } from 'react-dom/client';
import React from "react";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<h2>Hello from React!</h2>);