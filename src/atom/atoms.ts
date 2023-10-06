import { atom } from "jotai";
type Inputdatatype ={[key: string]:string}
const data:Inputdatatype ={
Username:"",
Email:"",
Password:""
}
const password = atom<boolean>(false)
const inputatom = atom<{[key: string]:string}>(data)
const cnsoleatom = atom(data)
export { password, inputatom, cnsoleatom,data};