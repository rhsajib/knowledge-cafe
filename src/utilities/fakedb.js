const getItemFromDb = item => {
    let itemData = {};
    const storedItem = localStorage.getItem(item);
    // console.log(storedItem)
    if (storedItem) {
        itemData = JSON.parse(storedItem);
       
    }
    return itemData;
}


const addIdToDbItem = (item, id) => {
    
    let itemData = getItemFromDb(item);
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


// functions for read time

const getReadTimeFromDb = item => {
    return (localStorage.getItem(item) | 0);
}



const addReadTimeToDb = (item, time) => {
    let readTime = getReadTimeFromDb(item);
    localStorage.setItem(item, readTime + time);
}











export{
    getItemFromDb,
    addIdToDbItem,
    removeIdFromDbItem,
    deleteItemFromDb,
    getReadTimeFromDb,
    addReadTimeToDb
}