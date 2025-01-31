import {
    Menu,
    Tooltip,
    useCaptionOptions,
    usePlaybackRateOptions,
    useVideoQualityOptions,
} from '@vidstack/react';
import {
    CheckIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ClosedCaptionsIcon,
    OdometerIcon,
    SettingsMenuIcon,
} from '@vidstack/react/icons';
import { SettingsIcon } from '~/components/Icon';

export function Settings({ placement, tooltipPlacement }) {
    return (
        <Menu.Root className="vds-menu">
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <Menu.Button
                        className="vds-menu-button vds-button"
                        style={{
                            width: '35px',
                            height: '35px',
                        }}
                    >
                        <SettingsIcon />
                    </Menu.Button>
                </Tooltip.Trigger>
                <Tooltip.Content
                    className="vds-tooltip-content"
                    placement={tooltipPlacement}
                >
                    Settings
                </Tooltip.Content>
            </Tooltip.Root>
            <Menu.Content className="vds-menu-items" placement={placement}>
                <CaptionsSubmenu />
                {/* <SettingsCaptionsSubmenu /> */}
                <QualitySubmenu />
                <SpeedSubmenu />
            </Menu.Content>
        </Menu.Root>
    );
}

function SettingsCaptionsSubmenu() {
    return (
        <Menu.Root>
            <SubmenuButton label="Styles Captions" icon={ClosedCaptionsIcon} />
            <Menu.Content className="vds-menu-items">
                <section>
                    <div class="vds-menu-section-title">
                        <header id="vds-menu-section-10">Font</header>
                    </div>
                </section>
            </Menu.Content>
        </Menu.Root>
    );
}

function CaptionsSubmenu() {
    const options = useCaptionOptions(),
        hint = options.selectedTrack?.label ?? 'Off';

    return (
        <Menu.Root>
            <SubmenuButton
                label="Captions"
                hint={hint}
                disabled={options.disabled}
                icon={ClosedCaptionsIcon}
            />
            <Menu.Content className="vds-menu-items">
                <Menu.RadioGroup
                    className="vds-radio-group"
                    value={options.selectedValue}
                >
                    {options.map(({ label, value, select }) => (
                        <Menu.Radio
                            className="vds-radio"
                            value={value}
                            onSelect={select}
                            key={value}
                        >
                            <CheckIcon className="vds-icon" />
                            <span className="vds-radio-label">{label}</span>
                        </Menu.Radio>
                    ))}
                </Menu.RadioGroup>
            </Menu.Content>
        </Menu.Root>
    );
}

function QualitySubmenu() {
    const options = useVideoQualityOptions(),
        currentQuality = options.selectedQuality?.height,
        hint =
            options.selectedValue !== 'auto' && currentQuality
                ? `${currentQuality}p`
                : `Auto${currentQuality ? ` (${currentQuality}p)` : ''}`;
    return (
        <Menu.Root>
            <SubmenuButton
                label="Quality"
                hint={hint}
                disabled={options.disabled}
                icon={SettingsMenuIcon}
            />
            <Menu.Content className="vds-menu-items">
                <Menu.RadioGroup
                    className="vds-radio-group"
                    value={options.selectedValue}
                >
                    {options.map(({ label, value, bitrateText, select }) => (
                        <Menu.Radio
                            className="vds-radio"
                            value={value}
                            onSelect={select}
                            key={value}
                        >
                            <CheckIcon className="vds-icon" />
                            <span className="vds-radio-label">{label}</span>
                            {bitrateText ? (
                                <span className="vds-radio-hint">
                                    {bitrateText}
                                </span>
                            ) : null}
                        </Menu.Radio>
                    ))}
                </Menu.RadioGroup>
            </Menu.Content>
        </Menu.Root>
    );
}

function SpeedSubmenu() {
    const options = usePlaybackRateOptions(),
        hint =
            options.selectedValue === '1'
                ? 'Normal'
                : options.selectedValue + 'x';
    return (
        <Menu.Root>
            <SubmenuButton
                label="Speed"
                hint={hint}
                disabled={options.disabled}
                icon={OdometerIcon}
            />
            <Menu.Content className="vds-menu-items">
                <Menu.RadioGroup
                    className="vds-radio-group"
                    value={options.selectedValue}
                >
                    {options.map(({ label, value, select }) => (
                        <Menu.Radio
                            className="vds-radio"
                            value={value}
                            onSelect={select}
                            key={value}
                        >
                            <CheckIcon className="vds-icon" />
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
        <Menu.Button className="vds-menu-item" disabled={disabled}>
            <ChevronLeftIcon className="vds-menu-close-icon" />
            <Icon className="vds-icon" />
            <span className="vds-menu-item-label">{label}</span>
            <span className="vds-menu-item-hint">{hint}</span>
            <ChevronRightIcon className="vds-menu-open-icon" />
        </Menu.Button>
    );
}
