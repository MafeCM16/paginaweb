function menu(){
    data.menu.map(function(item){
        document.getElementById("menu").appendChild(itemMenu(item));
    }    
);

}

function itemMenu(item){
    let containerItem = document.createElement("div");
    containerItem.className = "container-item";

    let icon = document.createElement("img");
    icon.className = "icon-menu";
    icon.src = item.icono;

    let itemMenu = document.createElement("div");
    itemMenu.className = "item-menu";
    itemMenu.innerHTML = item.titulo;

    let subItemMenu = document.createElement("div");
    subItemMenu.className = "subItem-menu close";
    subItemMenu.innerHTML = item.subitems[0];

    containerItem.appendChild(icon);
    containerItem.appendChild(itemMenu);
    containerItem.appendChild(subItemMenu);

    
    return containerItem;
}