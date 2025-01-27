export const SearchIcon = ({
    width = '1.5rem',
    height = '1.5rem',
    className,
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
    >
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22 22l-2-2"
        ></path>
    </svg>
);

export const CloseIcon = ({
    width = '1.5rem',
    height = '1.5rem',
    className,
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
    >
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5.001 5L19 19M5 19L19 5"
        ></path>
    </svg>
);

export const NotificationIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M12.046 3c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06l-1.15 1.91c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V9c0-3.3-2.7-6-6-6z"
            ></path>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M13.87 3.2a6.754 6.754 0 00-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26z"
            ></path>
            <path
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 01-.88-2.12"
            ></path>
        </svg>
    );
};

export const HeartIcon = ({ stroke = '#fff' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 014.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12z"
            ></path>
        </svg>
    );
};

export function HeartIconActive({ fill = '#fff' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill={fill}
                d="M16.44 3.1c-1.81 0-3.43.88-4.44 2.23A5.549 5.549 0 007.56 3.1C4.49 3.1 2 5.6 2 8.69c0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59z"
            ></path>
        </svg>
    );
}
export function ArchiveIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M14.5 10.65h-5M12 8.21v5"
            ></path>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.68 3.74 18.95 2 16.82 2z"
            ></path>
        </svg>
    );
}

export function ArchiveIconActive({ fill = '#fff', height = 24, width = 24 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill={fill}
                d="M16.82 1.91H7.18c-2.12 0-3.86 1.74-3.86 3.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.77c-.01-2.12-1.74-3.86-3.87-3.86zm-1.2 7.12l-4 4c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.5-1.5a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.97.97 3.47-3.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06z"
            ></path>
        </svg>
    );
}

export const MenuIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M3 7h18M3 12h18M3 17h18"
            ></path>
        </svg>
    );
};

export function MovieIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
            ></path>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M9.1 12v-1.48c0-1.91 1.35-2.68 3-1.73l1.28.74 1.28.74c1.65.95 1.65 2.51 0 3.46l-1.28.74-1.28.74c-1.65.95-3 .17-3-1.73V12z"
            ></path>
        </svg>
    );
}

export function MovieIconActive() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill="#fff"
                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-1.53 11.73l-1.28.74-1.28.74c-1.65.95-3 .17-3-1.73v-2.96c0-1.91 1.35-2.68 3-1.73l1.28.74 1.28.74c1.65.95 1.65 2.51 0 3.46z"
            ></path>
        </svg>
    );
}

export function HomeIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.02 2.84l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12zM12 17.99v-3"
            ></path>
        </svg>
    );
}
export function HomeIconActive() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill="#fff"
                d="M20.04 6.82l-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13L3.78 6.83c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62V10.6c0-1.35-.87-3.01-1.97-3.78zM12.75 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3z"
            ></path>
        </svg>
    );
}

export function TvShowIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7zM2.52 17.11h18.96M2.52 7.11h18.96M6.97 17.11v4.35M12 17.11v4.86M16.97 17.11v4.41M6.97 2.11v4.35M12 2.11v4.86M12 7.03v11M16.97 2.11v4.41"
            ></path>
        </svg>
    );
}

export function TvShowIconActive() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill="#fff"
                d="M11.25 7.86H2v8.33c0 .06 0 .12.01.17h9.24v-8.5zM7.69 6.36h3.56V2H7.72v4.24c0 .04-.02.08-.03.12zM6.22 6.24V2.16C4 2.62 2.55 4.1 2.13 6.36h4.11c-.01-.04-.02-.08-.02-.12zM16.22 2h-3.47v4.36h3.47V2zM17.71 6.36h4.16c-.42-2.28-1.89-3.77-4.15-4.21v4.18c0 .01-.01.02-.01.03zM17.72 21.85c2.19-.43 3.63-1.83 4.1-3.99h-4.1v3.99zM16.22 17.86h-3.47V22h3.47v-4.14zM12.75 16.36h9.24c.01-.05.01-.11.01-.17V7.86h-9.25v8.5zM11.25 17.86H7.72V22h3.53v-4.14zM2.18 17.86c.47 2.14 1.89 3.54 4.04 3.98v-3.98H2.18z"
            ></path>
        </svg>
    );
}

export function AboutIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zM12 8v5"
            ></path>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.995 16h.009"
            ></path>
        </svg>
    );
}

export function AboutIconActive() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill="#fff"
                d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-.75 6c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8zm1.67 8.38c-.05.13-.12.23-.21.33-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08s-.26-.03-.38-.08-.23-.12-.33-.21c-.09-.1-.16-.2-.21-.33A.995.995 0 0111 16c0-.13.03-.26.08-.38s.12-.23.21-.33c.1-.09.21-.16.33-.21a1 1 0 01.76 0c.12.05.23.12.33.21.09.1.16.21.21.33.05.12.08.25.08.38s-.03.26-.08.38z"
            ></path>
        </svg>
    );
}

export function UserIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 12a5 5 0 100-10 5 5 0 000 10zM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
            ></path>
        </svg>
    );
}

export function UserIconActive() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill="#fff"
                d="M12 12a5 5 0 100-10 5 5 0 000 10zM12 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5z"
            ></path>
        </svg>
    );
}

export function EditIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M13.26 3.6l-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.41 1.39-.75l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.34-5.29.16zM11.89 5.05a6.126 6.126 0 005.45 5.15M3 22h18"
            ></path>
        </svg>
    );
}

export function EditIconActive() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill="#fff"
                d="M21 22H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM19.02 3.48c-1.94-1.94-3.84-1.99-5.83 0l-1.21 1.21c-.1.1-.14.26-.1.4a8.129 8.129 0 005.53 5.53.4.4 0 00.41-.1l1.2-1.21c.99-.98 1.47-1.93 1.47-2.89.01-.99-.47-1.95-1.47-2.94zM15.61 11.53c-.29-.14-.57-.28-.84-.44a8.8 8.8 0 01-.64-.42c-.17-.11-.37-.27-.56-.43a1.22 1.22 0 01-.17-.15c-.33-.28-.7-.64-1.03-1.04-.03-.02-.08-.09-.15-.18-.1-.12-.27-.32-.42-.55a5.49 5.49 0 01-.39-.59c-.16-.27-.3-.54-.44-.82a6.881 6.881 0 01-.062-.135c-.147-.334-.582-.431-.84-.173L4.34 12.33c-.13.13-.25.38-.28.55l-.54 3.83c-.1.68.09 1.32.51 1.75.36.35.86.54 1.4.54.12 0 .24-.01.36-.03l3.84-.54c.18-.03.43-.15.55-.28l5.721-5.721c.26-.26.162-.705-.176-.85a33.837 33.837 0 01-.115-.049z"
            ></path>
        </svg>
    );
}

export function SignOutIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M2 12h12.88"
            ></path>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12.65 8.65L16 12l-3.35 3.35"
            ></path>
        </svg>
    );
}

export function PlayIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill="#fff"
                d="M7.778 3.269a1.821 1.821 0 00-1.846-.035A1.83 1.83 0 005 4.83v13.394c0 .662.358 1.27.932 1.594a1.83 1.83 0 001.846-.034l10.958-6.697a1.827 1.827 0 000-3.12L7.778 3.269z"
            ></path>
        </svg>
    );
}

export function PauseIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.65 19.11V4.89C10.65 3.54 10.08 3 8.64 3H5.01C3.57 3 3 3.54 3 4.89V19.11C3 20.46 3.57 21 5.01 21H8.64C10.08 21 10.65 20.46 10.65 19.11Z"
                fill="white"
            />
            <path
                d="M21 19.11V4.89C21 3.54 20.43 3 18.99 3H15.36C13.93 3 13.35 3.54 13.35 4.89V19.11C13.35 20.46 13.92 21 15.36 21H18.99C20.43 21 21 20.46 21 19.11Z"
                fill="white"
            />
        </svg>
    );
}

export function MuteIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22.5299 13.4202L21.0799 11.9702L22.4799 10.5702C22.7699 10.2802 22.7699 9.80018 22.4799 9.51018C22.1899 9.22018 21.7099 9.22018 21.4199 9.51018L20.0199 10.9102L18.5699 9.46018C18.2799 9.17018 17.7999 9.17018 17.5099 9.46018C17.2199 9.75018 17.2199 10.2302 17.5099 10.5202L18.9599 11.9702L17.4699 13.4602C17.1799 13.7502 17.1799 14.2302 17.4699 14.5202C17.6199 14.6702 17.8099 14.7402 17.9999 14.7402C18.1899 14.7402 18.3799 14.6702 18.5299 14.5202L20.0199 13.0302L21.4699 14.4802C21.6199 14.6302 21.8099 14.7002 21.9999 14.7002C22.1899 14.7002 22.3799 14.6302 22.5299 14.4802C22.8199 14.1902 22.8199 13.7202 22.5299 13.4202Z"
                fill="white"
            />
            <path
                d="M14.02 3.78021C12.9 3.16021 11.47 3.32021 10.01 4.23021L7.09 6.06021C6.89 6.18021 6.66 6.25021 6.43 6.25021H5.5H5C2.58 6.25021 1.25 7.58021 1.25 10.0002V14.0002C1.25 16.4202 2.58 17.7502 5 17.7502H5.5H6.43C6.66 17.7502 6.89 17.8202 7.09 17.9402L10.01 19.7702C10.89 20.3202 11.75 20.5902 12.55 20.5902C13.07 20.5902 13.57 20.4702 14.02 20.2202C15.13 19.6002 15.75 18.3102 15.75 16.5902V7.41021C15.75 5.69021 15.13 4.40021 14.02 3.78021Z"
                fill="white"
            />
        </svg>
    );
}

export function VolumeLowIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.33 16.7498C19.17 16.7498 19.02 16.6998 18.88 16.5998C18.55 16.3498 18.48 15.8798 18.73 15.5498C20.3 13.4598 20.3 10.5398 18.73 8.44978C18.48 8.11978 18.55 7.64978 18.88 7.39978C19.21 7.14978 19.68 7.21978 19.93 7.54978C21.9 10.1698 21.9 13.8298 19.93 16.4498C19.79 16.6498 19.56 16.7498 19.33 16.7498Z"
                fill="white"
            />
            <path
                d="M15.35 3.78021C14.23 3.16021 12.8 3.32021 11.34 4.23021L8.41996 6.06021C8.21996 6.18021 7.98996 6.25021 7.75996 6.25021H6.82996H6.32996C3.90996 6.25021 2.57996 7.58021 2.57996 10.0002V14.0002C2.57996 16.4202 3.90996 17.7502 6.32996 17.7502H6.82996H7.75996C7.98996 17.7502 8.21996 17.8202 8.41996 17.9402L11.34 19.7702C12.22 20.3202 13.08 20.5902 13.88 20.5902C14.4 20.5902 14.9 20.4702 15.35 20.2202C16.46 19.6002 17.08 18.3102 17.08 16.5902V7.41021C17.08 5.69021 16.46 4.40021 15.35 3.78021Z"
                fill="white"
            />
        </svg>
    );
}

export function VolumeHighIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18 16.7498C17.84 16.7498 17.69 16.6998 17.55 16.5998C17.22 16.3498 17.15 15.8798 17.4 15.5498C18.97 13.4598 18.97 10.5398 17.4 8.44978C17.15 8.11978 17.22 7.64978 17.55 7.39978C17.88 7.14978 18.35 7.21978 18.6 7.54978C20.56 10.1698 20.56 13.8298 18.6 16.4498C18.45 16.6498 18.23 16.7498 18 16.7498Z"
                fill="white"
            />
            <path
                d="M19.83 19.2498C19.67 19.2498 19.52 19.1998 19.38 19.0998C19.05 18.8498 18.98 18.3798 19.23 18.0498C21.9 14.4898 21.9 9.50978 19.23 5.94978C18.98 5.61978 19.05 5.14978 19.38 4.89978C19.71 4.64978 20.18 4.71978 20.43 5.04978C23.5 9.13978 23.5 14.8598 20.43 18.9498C20.29 19.1498 20.06 19.2498 19.83 19.2498Z"
                fill="white"
            />
            <path
                d="M14.02 3.78021C12.9 3.16021 11.47 3.32021 10.01 4.23021L7.09 6.06021C6.89 6.18021 6.66 6.25021 6.43 6.25021H5.5H5C2.58 6.25021 1.25 7.58021 1.25 10.0002V14.0002C1.25 16.4202 2.58 17.7502 5 17.7502H5.5H6.43C6.66 17.7502 6.89 17.8202 7.09 17.9402L10.01 19.7702C10.89 20.3202 11.75 20.5902 12.55 20.5902C13.07 20.5902 13.57 20.4702 14.02 20.2202C15.13 19.6002 15.75 18.3102 15.75 16.5902V7.41021C15.75 5.69021 15.13 4.40021 14.02 3.78021Z"
                fill="white"
            />
        </svg>
    );
}

export function SettingsIcon() {
    return (
        <svg
            className="vds-icon vds-rotate-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.1 9.22C18.29 9.22 17.55 7.94 18.45 6.37C18.97 5.46 18.66 4.3 17.75 3.78L16.02 2.79C15.23 2.32 14.21 2.6 13.74 3.39L13.63 3.58C12.73 5.15 11.25 5.15 10.34 3.58L10.23 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63C5.02 18.54 5.33 19.7 6.24 20.22L7.97 21.21C8.76 21.68 9.78 21.4 10.25 20.61L10.36 20.42C11.26 18.85 12.74 18.85 13.65 20.42L13.76 20.61C14.23 21.4 15.25 21.68 16.04 21.21L17.77 20.22C18.68 19.7 18.99 18.53 18.47 17.63C17.56 16.06 18.3 14.78 20.11 14.78C21.15 14.78 22.01 13.93 22.01 12.88V11.12C22 10.08 21.15 9.22 20.1 9.22ZM12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25Z"
                fill="white"
            />
        </svg>
    );
}

export function ArrowRightIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
            ></path>
        </svg>
    );
}

export function ArrowLeftIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M15.09 19.92L8.57 13.4c-.77-.77-.77-2.03 0-2.8l6.52-6.52"
            ></path>
        </svg>
    );
}

export function ArrowDownIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
            ></path>
        </svg>
    );
}
export function ArrowUpIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M19.92 15.05L13.4 8.53c-.77-.77-2.03-.77-2.8 0l-6.52 6.52"
            ></path>
        </svg>
    );
}
export function GoogleIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M21.5 11.79c0 4.15-2.21 9.21-8.87 9.21a9.07 9.07 0 01-9.13-9 9.07 9.07 0 019.13-9 9.22 9.22 0 015.7 2 .52.52 0 01.19.37.55.55 0 01-.16.39 26.403 26.403 0 00-1.86 1.88.49.49 0 01-.66.06 5.11 5.11 0 00-3.2-1 5.35 5.35 0 000 10.7c3 0 4.27-1.28 4.93-3.55H13a.5.5 0 01-.5-.5V10.7a.5.5 0 01.5-.5h8a.45.45 0 01.45.4c.037.396.054.793.05 1.19z"
            ></path>
        </svg>
    );
}

export function EmailIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z"
            ></path>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
            ></path>
        </svg>
    );
}

export function PasswordIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2M12 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            ></path>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5z"
            ></path>
        </svg>
    );
}

export function PhotoIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill="#fff"
                d="M18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45C15.37 2.75 14.17 2 13.15 2h-2.29c-1.03 0-2.23.75-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6 3.83 6 2.11 7.83 2.25 9.99l.52 8.26C2.89 20.31 4 22 6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.753 3.753 0 0018 6zm-7.5 1.25h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM12 18.12c-1.86 0-3.38-1.51-3.38-3.38 0-1.87 1.51-3.38 3.38-3.38 1.87 0 3.38 1.51 3.38 3.38 0 1.87-1.52 3.38-3.38 3.38z"
            ></path>
        </svg>
    );
}
export const SvgSpinners3DotsBounce = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
    >
        <circle cx="4" cy="12" r="3" fill="#ec0101">
            <animate
                id="svgSpinners3DotsBounce0"
                attributeName="cy"
                begin="0;svgSpinners3DotsBounce1.end+0.25s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
                values="12;6;12"
            ></animate>
        </circle>
        <circle cx="12" cy="12" r="3" fill="#ec0101">
            <animate
                attributeName="cy"
                begin="svgSpinners3DotsBounce0.begin+0.1s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
                values="12;6;12"
            ></animate>
        </circle>
        <circle cx="20" cy="12" r="3" fill="#ec0101">
            <animate
                id="svgSpinners3DotsBounce1"
                attributeName="cy"
                begin="svgSpinners3DotsBounce0.begin+0.2s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
                values="12;6;12"
            ></animate>
        </circle>
    </svg>
);

export function StarIcon({ width = 24, height = 24 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill="#FFC400"
                d="M13.73 3.51l1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0z"
            ></path>
        </svg>
    );
}

export function EyeIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58z"
            ></path>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68z"
            ></path>
        </svg>
    );
}

export function EyeSlashIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14.53 9.47l-5.06 5.06a3.576 3.576 0 115.06-5.06z"
            ></path>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17M8.42 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47M15.51 12.7a3.565 3.565 0 01-2.82 2.82M9.47 14.53L2 22M22 2l-7.47 7.47"
            ></path>
        </svg>
    );
}

export function SmileIcon() {
    return (
        <svg
            fill="#fff"
            height="24px"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 485 485"
            xmlSpace="preserve"
        >
            <path d="M413.974 71.026C368.171 25.225 307.274 0 242.5 0S116.829 25.225 71.026 71.026C25.225 116.829 0 177.726 0 242.5s25.225 125.671 71.026 171.474C116.829 459.775 177.726 485 242.5 485s125.671-25.225 171.474-71.026C459.775 368.171 485 307.274 485 242.5s-25.225-125.671-71.026-171.474zM242.5 455C125.327 455 30 359.673 30 242.5S125.327 30 242.5 30 455 125.327 455 242.5 359.673 455 242.5 455z" />
            <path d="M318.514 231.486c19.299 0 35-15.701 35-35s-15.701-35-35-35-35 15.701-35 35 15.701 35 35 35zM166.486 231.486c19.299 0 35-15.701 35-35s-15.701-35-35-35-35 15.701-35 35 15.702 35 35 35zM242.5 355c-46.911 0-89.35-29.619-105.604-73.703l-28.148 10.378C129.329 347.496 183.08 385 242.5 385s113.171-37.504 133.752-93.325l-28.148-10.378C331.85 325.381 289.411 355 242.5 355z" />
        </svg>
    );
}

export function RefreshIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-refresh-ccw"
        >
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
        </svg>
    );
}

export function RotateIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-rotate-cw"
        >
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
        </svg>
    );
}

export function ArrowHorizontalIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={24}
            height={24}
        >
            <path
                stroke="currentColor"
                strokeLinejoin="bevel"
                strokeWidth={2}
                d="M21.75 12L2.25 12"
            />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M6.5 17L2.56066 13.0607C1.97487 12.4749 1.97487 11.5251 2.56066 10.9393L6.5 7"
            />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M17.5 7L21.4393 10.9393C22.0251 11.5251 22.0251 12.4749 21.4393 13.0607L17.5 17"
            />
        </svg>
    );
}

export function ArrowVerticalIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={24}
            height={24}
        >
            <path
                stroke="currentColor"
                strokeLinejoin="bevel"
                strokeWidth={2}
                d="M12 21.75L12 2.25"
            />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M7 6.5L10.9393 2.56066C11.5251 1.97487 12.4749 1.97487 13.0607 2.56066L17 6.5"
            />
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M17 17.5L13.0607 21.4393C12.4749 22.0251 11.5251 22.0251 10.9393 21.4393L7 17.5"
            />
        </svg>
    );
}
