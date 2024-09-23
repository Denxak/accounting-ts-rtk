export enum UpdateMode {
    DEFAULT, EDIT_PROFILE, CHANGE_PASSWORD
}

export interface OnCloseProps {
    onClose: () => void;
}