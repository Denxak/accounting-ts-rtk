export enum UpdateMode {
    DEFAULT, EDIT_PROFILE, CHANGE_PASSWORD
}

export interface OnCloseProps {
    onClose: () => void;
}

export interface UserProfile {
    firstName: string;
    lastName: string;
    login: string;
    roles: string[];
} 

export interface UserRegister {
    firstName: string;
    lastName: string;
    login: string;
    password: string;
}

export interface UserData {
    firstName: string;
    lastName: string;
}