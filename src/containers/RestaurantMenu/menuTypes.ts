export interface IMenuItem {
    name: string,
    description: string,
    rate: string
}

export interface IMenuCategory {
    name: string,
    items: IMenuItem[]
}
