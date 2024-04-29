import { create_root } from 'react-dom/client'
import App from "./App"

const root = create_root(document.querySelector("#root"));


root.render(<App />);

