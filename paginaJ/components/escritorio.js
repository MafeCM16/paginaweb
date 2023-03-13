import { d } from "../assets/base.js";
import { itemMenu } from "./itemMenu.js";
import { menu } from "./menu.js";

export function escritorio(){   
    let container =  d.getElementById("container");
    let divMenu = menu("escritorio");
  
    container.appendChild(divMenu);

 
}