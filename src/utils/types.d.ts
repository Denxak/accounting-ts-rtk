export enum UpdateMode {
    DEFAULT, EDIT_PROFILE, CHANGE_PASSWORD
}

export interface OnCloseProps {
    onClose: () => void;
}

export interface Error {
    error?: string | null;
}

export interface Token extends Error {
    token: string;
}

export interface UserProfile extends UserData, Error {
    login: string;
    roles: string[];
} 

export interface UserRegister extends UserData{
    login: string;
    password: string;
}

export interface UserData {
    firstName: string;
    lastName: string;
}