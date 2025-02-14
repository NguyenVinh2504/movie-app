import {
    MediaPlayerInstance,
    Menu,
    Tooltip,
    useCaptionOptions,
    useMediaPlayer,
    usePlaybackRateOptions,
    useVideoQualityOptions,
} from '@vidstack/react';
import {
    CheckIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@vidstack/react/icons';
import {
    ClosedCaptionsIcon,
    SettingQualityIcon,
    SettingsIcon,
    SpeedIcon,
    StyleFontIcon,
} from '~/components/Icon';

import styles from './styles/menu.module.css';
import tooltipStyles from './styles/tooltip.module.css';
import { CustomIconButton } from './buttons';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Stack, Typography } from '@mui/material';

export function Settings() {
    return (
        <Menu.Root>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <Menu.Button>
                        <CustomIconButton>
                            <SettingsIcon className={styles.rotateIcon} />
                        </CustomIconButton>
                    </Menu.Button>
                </Tooltip.Trigger>
                <Tooltip.Content
                    className={tooltipStyles.tooltip}
                    placement={'top'}
                >
                    Cài đặt
                </Tooltip.Content>
            </Tooltip.Root>
            <Menu.Content className={styles.menu} placement={'top end'}>
                <CaptionsSubmenu />
                <SettingsCaptionsSubmenu />
                <SpeedSubmenu />
                <QualitySubmenu />
            </Menu.Content>
        </Menu.Root>
    );
}

export function SettingsMobile() {
    return (
        <Menu.Root>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <Menu.Button>
                        <CustomIconButton>
                            <SettingsIcon className={styles.rotateIcon} />
                        </CustomIconButton>
                    </Menu.Button>
                </Tooltip.Trigger>
                <Tooltip.Content
                    className={tooltipStyles.tooltip}
                    placement={'top'}
                >
                    Cài đặt
                </Tooltip.Content>
            </Tooltip.Root>
            <Menu.Portal container={null}>
                <Menu.Content className={styles.menu}>
                    <CaptionsSubmenu />
                    <SettingsCaptionsSubmenu />
                    <SpeedSubmenu />
                    <QualitySubmenu />
                </Menu.Content>
            </Menu.Portal>
        </Menu.Root>
    );
}

const useLocalStorage = (key, defaultValue) => {
    const [storage, setStorage] = useState(() => {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : defaultValue;
        } catch (error) {
            console.error('Có lỗi khi truy cập Local Storage:', error);
            return defaultValue;
        }
    });

    const setValue = useCallback(
        (value) => {
            try {
                setStorage((prev) => {
                    const valueToStore =
                        typeof value === 'function' ? value(prev) : value;
                    // So sánh giá trị mới với giá trị mặc định
                    if (
                        JSON.stringify(valueToStore) ===
                        JSON.stringify(defaultValue)
                    ) {
                        localStorage.removeItem(key);
                    } else {
                        localStorage.setItem(key, JSON.stringify(valueToStore));
                    }
                    return valueToStore;
                });
            } catch (error) {
                console.error('Có lỗi khi set Local Storage:', error);
            }
        },
        [key, defaultValue],
    );

    return [storage, setValue];
};

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
};
// Constants không thay đổi
const FONT_FAMILY_OPTIONS = [
    {
        label: 'Monospaced Serif',
        value: '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace',
    },
    {
        label: 'Proportional Serif',
        value: '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif',
    },
    {
        label: 'Monospaced Sans-Serif',
        value: '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace',
    },
    {
        label: 'Proportional Sans-Serif',
        value: '',
    },
    {
        label: 'Casual',
        value: '"Comic Sans MS", Impact, Handlee, fantasy',
    },
    {
        label: 'Cursive',
        value: '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive',
    },
];

const FONT_SIZE_OPTIONS = ['50%', '75%', '100%', '125%', '150%', '200%'];
const BACKGROUND_OPACITY_OPTIONS = ['0%', '25%', '50%', '75%', '100%'];

const DEFAULT_SETTINGS = {
    fontFamily: {
        label: 'Proportional Sans-Serif',
        value: '',
    },
    fontSize: '100%',
    fontColor: '#ffffff',
    backgroundColor: '#000000',
    backgroundOpacity: '100%',
};

//
// Hàm cập nhật style của player
//
const updatePlayerStyle = (player, variableCss, currentValue, defaultValue) => {
    if (
        !(player instanceof MediaPlayerInstance) ||
        typeof variableCss !== 'string' ||
        typeof currentValue !== 'string' ||
        typeof defaultValue !== 'string'
    )
        return;

    const stylePlayer = player.el.style;
    if (currentValue === defaultValue) {
        stylePlayer.setProperty(variableCss, '');
    } else {
        stylePlayer.setProperty(variableCss, currentValue);
    }
};

//
// Custom hook xử lý cập nhật CSS variable cho player
//
const usePlayerStyle = (variableName, value, defaultValue) => {
    const player = useMediaPlayer();
    useEffect(() => {
        updatePlayerStyle(player, variableName, value, defaultValue);
    }, [player, value, variableName, defaultValue]);
};

//
// Custom hook cho việc reset trạng thái
//
const useReset = (resetTrigger, defaultValue, setValue) => {
    useEffect(() => {
        if (resetTrigger > 0) {
            setValue(defaultValue);
        }
    }, [resetTrigger, defaultValue, setValue]);
};

//
// Settings Captions Submenu Component
//
const SettingsCaptionsSubmenu = memo(() => {
    const [resetTrigger, setResetTrigger] = useState(0);
    const handleReset = useCallback(() => {
        setResetTrigger((prev) => prev + 1);
    }, []);

    return (
        <Menu.Root>
            <SubmenuButton label="Tùy chỉnh phụ đề" icon={StyleFontIcon} />
            <Menu.Content className={styles.submenu}>
                <SettingsFontFamily
                    resetTrigger={resetTrigger}
                    setResetTrigger={setResetTrigger}
                />
                <SettingsFontColor resetTrigger={resetTrigger} />
                <SettingsFontSize resetTrigger={resetTrigger} />
                <SettingsBackgroundColor resetTrigger={resetTrigger} />
                <SettingsBackgroundOpacity resetTrigger={resetTrigger} />
                <button
                    onClick={handleReset}
                    className={`${styles.submenuButton} ${styles.resetButton}`}
                >
                    Đặt lại
                </button>
            </Menu.Content>
        </Menu.Root>
    );
});

//
// Settings Font Family Component
//
const KEY_SETTINGS_CAPTION = {
    FONT_FAMILY: 'vds-font-family',
    FONT_SIZE: 'vds-font-size',
    FONT_COLOR: 'vds-font-color',
    BACKGROUND_COLOR: 'vds-background-color',
    BACKGROUND_OPACITY: 'vds-background-opacity',
};

const SettingsFontFamily = memo(({ resetTrigger, setResetTrigger }) => {
    const [fontFamily, setFontFamily] = useLocalStorage(
        KEY_SETTINGS_CAPTION.FONT_FAMILY,
        DEFAULT_SETTINGS.fontFamily,
    );

    // Reset effect sử dụng hook dùng chung
    useReset(resetTrigger, DEFAULT_SETTINGS.fontFamily, setFontFamily);

    usePlayerStyle(
        '--media-user-font-family',
        fontFamily.value,
        DEFAULT_SETTINGS.fontFamily.value,
    );

    const handleSelect = useCallback(
        (option) => {
            setFontFamily({ label: option.label, value: option.value });
        },
        [setFontFamily],
    );

    return (
        <Menu.Root>
            <SubmenuButton label="Họ phông" hint={fontFamily.label} />
            <Menu.Content className={styles.submenu}>
                <Menu.RadioGroup
                    className={styles.radioGroup}
                    value={fontFamily.label}
                >
                    {FONT_FAMILY_OPTIONS.map(({ label, value }) => (
                        <Menu.Radio
                            className={styles.radio}
                            value={label}
                            onSelect={() => handleSelect({ label, value })}
                            key={label}
                        >
                            <CheckIcon className={styles.radioIcon} />
                            <span className="media-radio-label">{label}</span>
                        </Menu.Radio>
                    ))}
                </Menu.RadioGroup>
            </Menu.Content>
        </Menu.Root>
    );
});

//
// Settings Font Color Component
//
const SettingsFontColor = memo(({ resetTrigger }) => {
    const [color, setColor] = useLocalStorage(
        KEY_SETTINGS_CAPTION.FONT_COLOR,
        DEFAULT_SETTINGS.fontColor,
    );
    // Sử dụng useDebounce cho giá trị màu, ví dụ delay 300ms
    const debouncedColor = useDebounce(color, 300);

    useReset(resetTrigger, DEFAULT_SETTINGS.fontColor, setColor);

    // Cập nhật style dựa trên giá trị màu đã được debounce
    usePlayerStyle(
        '--media-user-font-color',
        debouncedColor,
        DEFAULT_SETTINGS.fontColor,
    );

    const handleColorChange = useCallback(
        (e) => {
            setColor(e.target.value);
        },
        [setColor],
    );

    return (
        <Menu.Root>
            <SubmenuButton label="Màu chữ" hint={color} />
            <Menu.Content className={styles.submenu}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    p={2}
                >
                    <Typography variant="body2">Color</Typography>
                    <input
                        type="color"
                        value={color}
                        name="color"
                        onChange={handleColorChange}
                    />
                </Stack>
            </Menu.Content>
        </Menu.Root>
    );
});

//
// Settings Font Size Component
//
const SettingsFontSize = memo(({ resetTrigger }) => {
    const [fontSize, setFontSize] = useLocalStorage(
        KEY_SETTINGS_CAPTION.FONT_SIZE,
        DEFAULT_SETTINGS.fontSize,
    );

    useReset(resetTrigger, DEFAULT_SETTINGS.fontSize, setFontSize);

    // Chuyển đổi size sang số cho CSS (tỉ lệ phần trăm)
    const parsedFontSize = useMemo(
        () => String(parseFloat(fontSize) / 100),
        [fontSize],
    );
    const defaultParsedFontSize = useMemo(
        () => String(parseFloat(DEFAULT_SETTINGS.fontSize) / 100),
        [],
    );

    usePlayerStyle(
        '--media-user-font-size',
        parsedFontSize,
        defaultParsedFontSize,
    );

    const handleSelect = useCallback(
        (size) => {
            setFontSize(size);
        },
        [setFontSize],
    );

    return (
        <Menu.Root>
            <SubmenuButton label="Cỡ chữ" hint={fontSize} />
            <Menu.Content className={styles.submenu}>
                <Menu.RadioGroup className={styles.radioGroup} value={fontSize}>
                    {FONT_SIZE_OPTIONS.map((size) => (
                        <Menu.Radio
                            className={styles.radio}
                            value={size}
                            onSelect={() => handleSelect(size)}
                            key={size}
                        >
                            <CheckIcon className={styles.radioIcon} />
                            <span className="media-radio-label">{size}</span>
                        </Menu.Radio>
                    ))}
                </Menu.RadioGroup>
            </Menu.Content>
        </Menu.Root>
    );
});

//
// Settings Background Color Component
//
const SettingsBackgroundColor = memo(({ resetTrigger }) => {
    const [backgroundColor, setBackgroundColor] = useLocalStorage(
        KEY_SETTINGS_CAPTION.BACKGROUND_COLOR,
        DEFAULT_SETTINGS.backgroundColor,
    );

    useReset(
        resetTrigger,
        DEFAULT_SETTINGS.backgroundColor,
        setBackgroundColor,
    );

    const player = useMediaPlayer();

    // Sử dụng useDebounce cho backgroundColor với delay 300ms
    const debouncedBackgroundColor = useDebounce(backgroundColor, 300);

    // Memo hóa giá trị rgba để tránh tính lại khi không cần thiết
    const rgbaBg = useMemo(() => {
        // Giả sử backgroundColor luôn có định dạng hex đầy đủ (#rrggbb)
        const hexCode = debouncedBackgroundColor;
        const red = parseInt(hexCode[1] + hexCode[2], 16);
        const green = parseInt(hexCode[3] + hexCode[4], 16);
        const blue = parseInt(hexCode[5] + hexCode[6], 16);
        return `rgba(${red}, ${green}, ${blue}, var(--media-user-text-bg-opacity, 1))`;
    }, [debouncedBackgroundColor]);

    useEffect(() => {
        updatePlayerStyle(
            player,
            '--media-user-text-bg',
            rgbaBg,
            'rgba(0, 0, 0, var(--media-user-text-bg-opacity, 1))',
        );
    }, [player, rgbaBg]);

    const handleColorChange = useCallback(
        (e) => {
            setBackgroundColor(e.target.value);
        },
        [setBackgroundColor],
    );

    return (
        <Menu.Root>
            <SubmenuButton label="Màu nền" hint={backgroundColor} />
            <Menu.Content className={styles.submenu}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    p={2}
                >
                    <Typography variant="body2">Color</Typography>
                    <input
                        type="color"
                        value={backgroundColor}
                        name="color"
                        onChange={handleColorChange}
                    />
                </Stack>
            </Menu.Content>
        </Menu.Root>
    );
});

//
// Settings Background Opacity Component
//
const SettingsBackgroundOpacity = memo(({ resetTrigger }) => {
    const [opacity, setOpacity] = useLocalStorage(
        KEY_SETTINGS_CAPTION.BACKGROUND_OPACITY,
        DEFAULT_SETTINGS.backgroundOpacity,
    );

    useReset(resetTrigger, DEFAULT_SETTINGS.backgroundOpacity, setOpacity);

    // Chuyển đổi opacity sang số thực (tỷ lệ từ 0 đến 1)
    const parsedOpacity = useMemo(
        () => String(parseFloat(opacity) / 100),
        [opacity],
    );
    const defaultParsedOpacity = useMemo(
        () => String(parseFloat(DEFAULT_SETTINGS.backgroundOpacity) / 100),
        [],
    );

    usePlayerStyle(
        '--media-user-text-bg-opacity',
        parsedOpacity,
        defaultParsedOpacity,
    );

    const handleSelect = useCallback(
        (value) => {
            setOpacity(value);
        },
        [setOpacity],
    );

    return (
        <Menu.Root>
            <SubmenuButton label="Độ mờ của nền" hint={opacity} />
            <Menu.Content className={styles.submenu}>
                <Menu.RadioGroup className={styles.radioGroup} value={opacity}>
                    {BACKGROUND_OPACITY_OPTIONS.map((value) => (
                        <Menu.Radio
                            className={styles.radio}
                            value={value}
                            onSelect={() => handleSelect(value)}
                            key={value}
                        >
                            <CheckIcon className={styles.radioIcon} />
                            <span className="media-radio-label">{value}</span>
                        </Menu.Radio>
                    ))}
                </Menu.RadioGroup>
            </Menu.Content>
        </Menu.Root>
    );
});

function CaptionsSubmenu() {
    const options = useCaptionOptions(),
        hint = options.selectedTrack?.label ?? 'Off';
    return (
        <Menu.Root>
            <SubmenuButton
                label="Phụ đề"
                hint={hint}
                disabled={options.disabled}
                icon={ClosedCaptionsIcon}
            />
            <Menu.Content className={styles.submenu}>
                <Menu.RadioGroup
                    className={styles.radioGroup}
                    value={options.selectedValue}
                >
                    {options.map(({ label, value, select }) => (
                        <Menu.Radio
                            className={styles.radio}
                            value={value}
                            onSelect={select}
                            key={value}
                        >
                            <CheckIcon className={styles.radioIcon} />
                            <span className="media-radio-label">{label}</span>
                        </Menu.Radio>
                    ))}
                </Menu.RadioGroup>
            </Menu.Content>
        </Menu.Root>
    );
}

export function QualitySubmenu() {
    const options = useVideoQualityOptions(),
        currentQuality = options.selectedQuality?.height,
        hint =
            options.selectedValue !== 'Tự động' && currentQuality
                ? `${currentQuality}p`
                : `Tự động${currentQuality ? ` (${currentQuality}p)` : ''}`;
    return (
        <Menu.Root>
            <SubmenuButton
                label="Chất lượng"
                hint={hint}
                disabled={options.disabled}
                icon={SettingQualityIcon}
            />
            <Menu.Content className={styles.submenu}>
                <Menu.RadioGroup
                    className={styles.radioGroup}
                    value={options.selectedValue}
                >
                    {options.map(({ label, value, bitrateText, select }) => (
                        <Menu.Radio
                            className={styles.radio}
                            value={value}
                            onSelect={select}
                            key={value}
                        >
                            <CheckIcon className={styles.radioIcon} />
                            <span className="vds-radio-label">{label}</span>
                            {/* {bitrateText ? (
                                <span className="vds-radio-hint">
                                    {bitrateText}
                                </span>
                            ) : null} */}
                        </Menu.Radio>
                    ))}
                </Menu.RadioGroup>
            </Menu.Content>
        </Menu.Root>
    );
}

export function SpeedSubmenu() {
    const options = usePlaybackRateOptions(),
        hint =
            options.selectedValue === '1'
                ? 'Bình thường'
                : options.selectedValue + 'x';
    return (
        <Menu.Root>
            <SubmenuButton
                label="Tốc độ"
                hint={hint}
                disabled={options.disabled}
                icon={SpeedIcon}
            />
            <Menu.Content className={styles.submenu}>
                <Menu.RadioGroup
                    className={styles.radioGroup}
                    value={options.selectedValue}
                >
                    {options.map(({ label, value, select }) => (
                        <Menu.Radio
                            className={styles.radio}
                            value={value}
                            onSelect={select}
                            key={value}
                        >
                            <CheckIcon className={styles.radioIcon} />
                            <span className="vds-radio-label">{label}</span>
                        </Menu.Radio>
                    ))}
                </Menu.RadioGroup>
            </Menu.Content>
        </Menu.Root>
    );
}

function SubmenuButton({ label, hint, icon: Icon, disabled }) {
    return (
        <Menu.Button className={styles.submenuButton} disabled={disabled}>
            <ChevronLeftIcon className={styles.submenuCloseIcon} />
            {Icon && (
                <div className={styles.submenuIcon}>
                    <Icon />
                </div>
            )}
            <span className={styles.submenuLabel}>{label}</span>
            <span className={styles.submenuHint}>{hint}</span>
            <ChevronRightIcon className={styles.submenuOpenIcon} />
        </Menu.Button>
    );
}
