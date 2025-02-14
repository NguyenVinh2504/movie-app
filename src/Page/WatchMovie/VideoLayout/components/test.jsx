function SettingsCaptionsSubmenu() {
    // const [settingStylesCaptions, setSettingStylesCaptions] = useState({
    //     '--media-user-display-bg-opacity': 1,
    //     '--media-user-font-family':
    //         '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace',
    //     '--media-user-font-color': '#ffffff',
    //     '--media-user-font-size': '1',
    // });

    // const handleSettingStylesCaptions = useCallback((variable, value) => {
    //     setSettingStylesCaptions((prevState) => ({
    //         ...prevState,
    //         [variable]: value,
    //     }));
    // }, []);

    // const player = useMediaPlayer();

    // //Thêm các biến style cho player
    // useEffect(() => {
    //     Object.entries(settingStylesCaptions).forEach(([variable, value]) => {
    //         player.el.style.setProperty(variable, value);
    //     });
    //     console.log(player.el);
    // }, [player, settingStylesCaptions]);

    return (
        <Menu.Root>
            <SubmenuButton label="Tùy chỉnh phông" icon={StyleFontIcon} />
            <Menu.Content className={styles.submenu}>
                <SettingsFontFamily />
                <SettingsFontColor />
                <SettingsFontSize />
                <SettingsBackgroundColor />
                <SettingsBackgroundOpacity />
            </Menu.Content>
        </Menu.Root>
    );
}

function SettingsFontFamily() {
    const FONT_FAMILY_OPTIONS = useMemo(
        () => [
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
        ],
        [],
    );

    const [fontFamily, setFontFamily] = useState(FONT_FAMILY_OPTIONS[3]);

    const player = useMediaPlayer();

    useEffect(() => {
        updatePlayerStyle(
            player,
            '--media-user-font-family',
            fontFamily.value,
            FONT_FAMILY_OPTIONS[3].value,
        );
    }, [player, fontFamily, FONT_FAMILY_OPTIONS]);
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
                            onSelect={() => setFontFamily({ label, value })}
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
}

function SettingsFontColor({ onSettingStylesCaptions }) {
    const [color, setColor] = useState('#ffffff');
    const player = useMediaPlayer();
    useEffect(() => {
        updatePlayerStyle(player, '--media-user-font-color', color, '#ffffff');
    }, [player, color]);
    return (
        <Menu.Root>
            <SubmenuButton label="Màu chữ" hint={color} />
            <Menu.Content className={styles.submenu}>
                {/* <Menu.RadioGroup className={styles.radioGroup}>
                    {fonts.map((font) => (
                        <Menu.Radio
                            className={styles.radio}
                            value={font}
                            onSelect={() => handleSelect(font)}
                            key={font}
                        >
                            <CheckIcon className={styles.radioIcon} />
                            <span className="media-radio-label">{font}</span>
                        </Menu.Radio>
                    ))}
                </Menu.RadioGroup> */}
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
                        onChange={(e) => {
                            const hexColor = e.target.value;
                            setColor(hexColor);
                            // onSettingStylesCaptions(
                            //     '--media-user-font-color',
                            //     hexColor,
                            // );
                        }}
                    />
                </Stack>
            </Menu.Content>
        </Menu.Root>
    );
}

function SettingsFontSize() {
    const FONT_SIZE_OPTIONS = useMemo(
        () => ['50%', '75%', '100%', '125%', '150%', '200%'],
        [],
    );
    const [currentFontSize, setCurrentFontSize] = useState(
        FONT_SIZE_OPTIONS[2],
    );
    const player = useMediaPlayer();

    useEffect(() => {
        updatePlayerStyle(
            player,
            '--media-user-font-size',
            parseFloat(currentFontSize) / 100,
            1,
        );
    }, [player, currentFontSize]);
    return (
        <Menu.Root>
            <SubmenuButton label="Cỡ chữ" hint={currentFontSize} />
            <Menu.Content className={styles.submenu}>
                <Menu.RadioGroup
                    className={styles.radioGroup}
                    value={currentFontSize}
                >
                    {FONT_SIZE_OPTIONS.map((fontSize) => (
                        <Menu.Radio
                            className={styles.radio}
                            value={fontSize}
                            onSelect={() => {
                                // onSettingStylesCaptions(
                                //     '--media-user-font-size',
                                //     parseFloat(fontSize) / 100,
                                // );
                                setCurrentFontSize(fontSize);
                            }}
                            key={fontSize}
                        >
                            <CheckIcon className={styles.radioIcon} />
                            <span className="media-radio-label">
                                {fontSize}
                            </span>
                        </Menu.Radio>
                    ))}
                </Menu.RadioGroup>
            </Menu.Content>
        </Menu.Root>
    );
}

function SettingsBackgroundColor() {
    const [backgroundColor, setBackgroundColor] = useState('#000000');
    const player = useMediaPlayer();
    useEffect(() => {
        const hexCode = backgroundColor.split('');
        const red = parseInt(hexCode[1] + hexCode[2], 16);
        const green = parseInt(hexCode[3] + hexCode[4], 16);
        const blue = parseInt(hexCode[5] + hexCode[6], 16);
        updatePlayerStyle(
            player,
            '--media-user-text-bg',
            `rgba(${red}, ${green}, ${blue}, var(--media-user-text-bg-opacity, 1))`,
            'rgba(0, 0, 0, var(--media-user-text-bg-opacity, 1))',
        );
    }, [player, backgroundColor]);

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
                        onChange={(e) => {
                            setBackgroundColor(e.target.value);
                        }}
                    />
                </Stack>
            </Menu.Content>
        </Menu.Root>
    );
}

function SettingsBackgroundOpacity() {
    const BACKGROUND_OPACITY_OPTIONS = useMemo(
        () => ['0%', '25%', '50%', '75%', '100%'],
        [],
    );
    const [backgroundOpacity, setBackgroundColor] = useState(
        BACKGROUND_OPACITY_OPTIONS[BACKGROUND_OPACITY_OPTIONS.length - 1],
    );
    const player = useMediaPlayer();
    useEffect(() => {
        updatePlayerStyle(
            player,
            '--media-user-text-bg-opacity',
            parseFloat(backgroundOpacity) / 100,
            1,
        );
    }, [player, backgroundOpacity]);
    useEffect(() => {
        console.log('backgroundOpacity', backgroundOpacity);
    }, [backgroundOpacity]);
    return (
        <Menu.Root>
            <SubmenuButton label="Độ mờ của nền" hint={backgroundOpacity} />
            <Menu.Content className={styles.submenu}>
                <Menu.RadioGroup
                    className={styles.radioGroup}
                    value={backgroundOpacity}
                >
                    {BACKGROUND_OPACITY_OPTIONS.map((opacity) => (
                        <Menu.Radio
                            className={styles.radio}
                            value={opacity}
                            onSelect={() => {
                                setBackgroundColor(opacity);
                            }}
                            key={opacity}
                        >
                            <CheckIcon className={styles.radioIcon} />
                            <span className="media-radio-label">{opacity}</span>
                        </Menu.Radio>
                    ))}
                </Menu.RadioGroup>
            </Menu.Content>
        </Menu.Root>
    );
}
