export interface ItemProps {
    item: {
        avatar: string,
        company: string,
        name: string,
        position: string,
        city: string,
        index: string,
        isContact: boolean,
        isFavorite: boolean,
        createdDate: string
    }
}


export interface NotificationProps {
    item: {
        image: string,
        text: string,
        date: string
    }
}
