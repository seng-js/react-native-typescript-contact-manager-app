export const CONTACT_CREATE = 'CONTACT_CREATE'
export const CONTACT_UPDATE = 'CONTACT_UPDATE'
export const CONTACT_DELETE = 'CONTACT_DELETE'
export const CONTACT_UPDATE_SETTING = 'CONTACT_UPDATE_SETTING'
export const CONTACT_GET_INIT_DATA = 'CONTACT_GET_INIT_DATA'
export const CONTACT_GET_FILTER_DATA = 'CONTACT_GET_FILTER_DATA'
export const FIREBASE_URL = 'https://contact-manager-f189f-default-rtdb.firebaseio.com/'
export const REACT_JS_APP_URl = 'https://react-js-app-seng.000webhostapp.com'
export const AVATAR_URL_PROFILE = REACT_JS_APP_URl + '/avatar/'
export const AVATAR_DEFAULT_PROFILE = 'img0.jpg';
export const IMAGE_URL = REACT_JS_APP_URl + '/img/'
export const NOTIFICATION = '@NOTIFICATION';
export const NOTIFICATION_TOKEN = '@NOTIFICATION_TOKEN';
export const SETTING_DATA = '@SETTING_DATA';


export const listAvatar = [
    {title: 'Avatar M1', image: 'img0.jpg'},
    {title: 'Avatar F1', image: 'img1.jpg'},
    {title: 'Avatar M2', image: 'img2.jpg'},
    {title: 'Avatar M3', image: 'img3.jpg'},
    {title: 'Avatar F2', image: 'img4.jpg'},
    {title: 'Avatar F3', image: 'img5.jpg'},
    {title: 'Avatar M4', image: 'img6.jpg'},
    {title: 'Avatar F4', image: 'img7.jpg'}
];

export const listPosition = [
    {title: 'Web Designer'},
    {title: 'UI Designer'},
    {title: 'Senior full stack engineer'},
    {title: 'Software engineer frontend'},
    {title: 'Senior Software Engineer'},
    {title: 'Software engineer backend'},
    {title: 'Android developer'},
    {title: 'Project coordinator'},
    {title: 'Mobile Software Engineer'},
];

export const listCity = [
    {title: 'Ukraine, Kyiv', image: 'flag_ukraine.png'},
    {title: 'Ukraine, Kharkiv', image: 'flag_ukraine.png'},
    {title: 'Ukraine, Odessa', image: 'flag_ukraine.png'},
    {title: 'Ukraine, Dnipro', image: 'flag_ukraine.png'},
    {title: 'Ukraine, Lviv', image: 'flag_ukraine.png'},
    {title: 'Cambodia, Phnom Penh', image: 'flag_cambodia.png'}
];

export const defaultContact = {
    selectedIndexProfile: -1,
    selectedIndexPosition: -1,
    selectedIndexCity:  -1,
    isContact: false,
    isFavorite: false,
    actionLabel: 'Create',
    avatar: '',
    name: '',
    company: '',
    position: '',
    city: '',
    social_networks: {
        facebook: '',
        instagram: '',
        twitter: '',
        youtube: ''
    }
}
