import {AVATAR_URL_PROFILE, listAvatar, listCity, listPosition} from "./Constants";

const buildNotificationMessage = (title, body, data) => {
    return {
        title: title,
        body: body,
        data: data
    }
}

const buildNotificationData = (text, image, date) => {
    return {
        date: date !== undefined ? date : Date.now(),
        text: text,
        image: image,
    };
}

const deleteKeys = () => {
    return [
        'selectedIndexProfile',
        'selectedIndexPosition',
        'selectedIndexCity',
        'setActionLabel',
        'actionLabel'
    ]
}
const prepareToEdit = (item) => {
    const selectedProfile = {selectedIndexProfile: getSelectedIndexProfile(item.avatar)};
    const selectedPosition = {selectedIndexPosition: getSelectedIndexPosition(item.position)};
    const selectedCity = {selectedIndexCity: getSelectedIndexCity(item.city)};

    return {
            ...item,
            ...selectedProfile,
            ...selectedPosition,
            ...selectedCity,
            ...{ actionLabel: 'Update' }
        };
}

const isValidInput = (filterByData) => {
    return filterByData !== undefined && filterByData.length > 0
}

const isFilterByName = (filterByName, contact) => {
    const fullSearchQuery = `${contact.name.toLowerCase()} ${contact.company.toLowerCase()} ${contact.position.toLowerCase()} ${contact.city.toLowerCase()}`;
    return fullSearchQuery.toLowerCase().includes(filterByName.toLowerCase());
}

const getAvatarProfileURL = (avatar) => {
    if (avatar !== undefined) {
        return AVATAR_URL_PROFILE + avatar.replace('img/', '')
    }
    return '';
}

const getSelectedIndexProfile = (profile) => {
    let selectedIndex = 0;
    if (profile !== undefined) {
        selectedIndex = listAvatar.findIndex(item => {
            return item.image === profile.replace('img/', '');
        });
    }
    return selectedIndex;
}

const getSelectedIndexPosition = (position) => {
    return listPosition.findIndex(item => {
        return item.title === position;
    });
}

const getSelectedIndexCity = (city) => {
    return listCity.findIndex(item => {
        return item.title === city;
    });
}

export {
    isValidInput,
    isFilterByName,
    getAvatarProfileURL,
    getSelectedIndexProfile,
    getSelectedIndexPosition,
    getSelectedIndexCity,
    prepareToEdit,
    deleteKeys,
    buildNotificationData,
    buildNotificationMessage
}
