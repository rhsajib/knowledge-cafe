const getItemFromDb = item => {
    let itemData = {};
    const storedItem = localStorage.getItem(item);
    if (storedItem) {
        itemData = JSON.stringify(storedItem);
    }
    return itemData;
}


const addIdToDbItem = (item, id) => {
    const itemData = addIdToDbItem(item);

    const quantity = itemData[id];

    if (!quantity) {
        itemData[id] = 1;
    }
    else {
        itemData[id] = quantity + 1;
    }

    localStorage.setItem(item, JSON.stringify(itemData));
}



const removeIdFromDbItem = (item, id) => {
    const itemData = addIdToDbItem(item);
    if (id in itemData) {
        delete itemData[id];
        localStorage.setItem(item, JSON.stringify(itemData));
    }
}


const deleteItemFromDb = item => {
    localStorage.removeItem(item);
}



export{
    getItemFromDb,
    addIdToDbItem,
    removeIdFromDbItem,
    deleteItemFromDb
}