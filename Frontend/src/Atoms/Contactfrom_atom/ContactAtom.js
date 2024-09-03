import { atom } from 'recoil'

export const formDataState = atom({
    key: 'formDataState',
    default: {
        name: '',
        email:'',
        phone: '',
        subject:'',
        message: '',
    },
})

export const formStatusState = atom({
  key: "formStatusState",
  default: "",
});