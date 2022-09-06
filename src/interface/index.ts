export interface ItemProps {
    item: PeopleType
}

export interface ListItemProps {
    data: Array<ItemProps>
}

export interface NotificationProps {
    item: {
        image: string,
        text: string,
        date: string
    }
}

export interface SocialNetworkType {
    facebook: string,
    instagram: string,
    twitter: string,
    youtube: string
}

export interface PeopleType {
    avatar: string,
    city: string,
    company: string,
    id: number,
    index: string,
    isContact: boolean,
    isFavorite: boolean,
    name: string,
    position: string,
    social_networks: SocialNetworkType,
    filterByName: string,
    createdDate: string
}

export interface StateType {
    people: PeopleType[],
    listPeople: PeopleType[],
    isListView: boolean,
    search: string,
    location: string,
    isLoad: boolean
}

export interface SwapItemType {
    avatar: string,
    name: string,
    item: object,
    separators: object
}

export interface ScreenProps {
    route: any,
    navigation: any,
}

export interface MessageDataProps {
    title: string;
    body: object;
    data: object;
}
