import { atom } from 'recoil'


export const Enquiry_popup_tigger = atom({
    key: 'enquiry_popup_tigger',
    default: false,
})


export const Enquiry_selection_atom = atom({
    key: 'enquiry_selection_atom',
    default: {
        name: "",
        phone: "",
        options: [],
        email: "",
        message: "",
    },
})

export const enquiry_status_atom = atom({
    key: 'enquiry_status_atom',
    default: "",
})