export interface User {
    id?: number
    name: string
    phone: string
    website:String
    address:{
        city: string
        geo:{
            lat: string
            lng: string
        }
    }
    company:{
        name: string
        bs:string
    } ,
    email: string
    price: number
}