export const SearchIcon = ({ width = '1.5rem', height = '1.5rem', className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22 22l-2-2"
        ></path>
    </svg>
);

export const CloseIcon = ({ width = '1.5rem', height = '1.5rem', className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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

export const MenuIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="#fff" strokeLinecap="round" strokeWidth="1.5" d="M3 7h18M3 12h18M3 17h18"></path>
        </svg>
    );
};

export function MovieIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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

export function HomeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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

export function TvShowIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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

export function AboutIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zM12 8v5"
            ></path>
            <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 16h.009"></path>
        </svg>
    );
}

export function UserIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
export function EditIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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

export function SignOutIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
        // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        //     <path
        //         stroke="#fff"
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //         strokeMiterlimit="10"
        //         strokeWidth="1.5"
        //         d="M4 12V8.44c0-4.42 3.13-6.23 6.96-4.02l3.09 1.78 3.09 1.78c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78C7.13 21.79 4 19.98 4 15.56V12z"
        //     ></path>
        //     //{' '}
        // </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
                fill="#fff"
                d="M7.778 3.269a1.821 1.821 0 00-1.846-.035A1.83 1.83 0 005 4.83v13.394c0 .662.358 1.27.932 1.594a1.83 1.83 0 001.846-.034l10.958-6.697a1.827 1.827 0 000-3.12L7.778 3.269z"
            ></path>
        </svg>
    );
}

export function ArrowRightIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M21.5 11.79c0 4.15-2.21 9.21-8.87 9.21a9.07 9.07 0 01-9.13-9 9.07 9.07 0 019.13-9 9.22 9.22 0 015.7 2 .52.52 0 01.19.37.55.55 0 01-.16.39 26.403 26.403 0 00-1.86 1.88.49.49 0 01-.66.06 5.11 5.11 0 00-3.2-1 5.35 5.35 0 000 10.7c3 0 4.27-1.28 4.93-3.55H13a.5.5 0 01-.5-.5V10.7a.5.5 0 01.5-.5h8a.45.45 0 01.45.4c.037.396.054.793.05 1.19z"
            ></path>
        </svg>
    );
}

export function EmailIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
                fill="#fff"
                d="M18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45C15.37 2.75 14.17 2 13.15 2h-2.29c-1.03 0-2.23.75-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6 3.83 6 2.11 7.83 2.25 9.99l.52 8.26C2.89 20.31 4 22 6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.753 3.753 0 0018 6zm-7.5 1.25h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM12 18.12c-1.86 0-3.38-1.51-3.38-3.38 0-1.87 1.51-3.38 3.38-3.38 1.87 0 3.38 1.51 3.38 3.38 0 1.87-1.52 3.38-3.38 3.38z"
            ></path>
        </svg>
    );
}
export const SvgSpinners3DotsBounce = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
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
