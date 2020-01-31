import "./navbar"; // Lay out the base to the main page;
import NavFactory from './NavFactory';
import NavHandler from './NavHandler';
import props from "./props";

let factory = new NavFactory();
let handler = new NavHandler(factory, props);
handler.generateContent();
handler.enableDisplayToggle();