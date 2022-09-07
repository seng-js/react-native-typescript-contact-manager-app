import {AVATAR_URL_PROFILE, listAvatar, listCity, listPosition} from "./Constants";

const buildNotificationMessage = (title: any, body: any, data: { image: any; }) => {
    return {
        title: title,
        body: body,
        data: data
    }
}

const buildNotificationData = (text: any, image: any, date: any) => {
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
const prepareToEdit = (item: any) => {
    const selectedProfile:any = {selectedIndexProfile: getSelectedIndexProfile(item.avatar)};
    const selectedPosition:any = {selectedIndexPosition: getSelectedIndexPosition(item.position)};
    const selectedCity:any = {selectedIndexCity: getSelectedIndexCity(item.city)};

    return {
            ...item,
            ...selectedProfile,
            ...selectedPosition,
            ...selectedCity,
            ...{ actionLabel: 'Update' }
        };
}

const isValidInput = (filterByData: string | any[] | undefined) => {
    return filterByData !== undefined && filterByData.length > 0
}

const isFilterByName = (filterByName: string, contact: any) => {
    const fullSearchQuery = `${contact.name.toLowerCase()} ${contact.company.toLowerCase()} ${contact.position.toLowerCase()} ${contact.city.toLowerCase()}`;
    return fullSearchQuery.toLowerCase().includes(filterByName.toLowerCase());
}

const getAvatarProfileURL = (avatar: string | undefined) => {
    if (avatar !== undefined) {
        return AVATAR_URL_PROFILE + avatar.replace('img/', '')
    }
    return '';
}

const getSelectedIndexProfile = (profile: string | undefined) => {
    let selectedIndex = 0;
    if (profile !== undefined) {
        selectedIndex = listAvatar.findIndex(item => {
            return item.image === profile.replace('img/', '');
        });
    }
    return selectedIndex;
}

const getSelectedIndexPosition = (position: string) => {
    return listPosition.findIndex(item => {
        return item.title === position;
    });
}

const getSelectedIndexCity = (city: string) => {
    return listCity.findIndex(item => {
        return item.title === city;
    });
}

const convertArrayObject = (data:any[]) => {
    if (data === null) {
       return [];
    }
    let contacts: Array<any> = [];
    Object.entries(data).forEach(([index, value]) => {
        if (value !== null) {
            contacts.push({...value, index});
        }
    });

    return contacts;
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
    buildNotificationMessage,
    convertArrayObject
}
