import { createContext } from "react";

export interface User {
    id: number,
    name: string,
    job: string,
    telefono: number,
    img: string,
}

export const UserContext = createContext<User>({
    id: 19127564,
    name: 'Miguel Tostado Alamo',
    job: 'CEO de algo',
    telefono: 999999999,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/49ae6cea-4afb-4ce5-8694-7886b7ae5f08/ddu4z13-283789b3-5374-4646-aad5-c12c074284a5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ5YWU2Y2VhLTRhZmItNGNlNS04Njk0LTc4ODZiN2FlNWYwOFwvZGR1NHoxMy0yODM3ODliMy01Mzc0LTQ2NDYtYWFkNS1jMTJjMDc0Mjg0YTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.m6ct3fP3o_awk61YSGcRqCqywNIXOvM8v_yKsQm9ztY'
})