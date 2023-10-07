import classNames from 'classnames/bind';
import styles from './input.module.scss';
const cx = classNames.bind(styles);

function Input({ disable, success, error, round, leftIcon, rightIcon, iconRightEvent, inputEvent }) {
    const classes = cx('wrapper', {
        disable,
        success,
        error,
        round,
    });
    return (
        <div className={classes}>
            {leftIcon && <span className={cx('icon-leading')}>{leftIcon}</span>}
            <input className={cx('input')} placeholder="Search" spellCheck={false} {...inputEvent}></input>
            <button {...iconRightEvent}>{rightIcon && <span className={cx('icon-trading')}>{rightIcon}</span>}</button>
        </div>
    );
}

export default Input;
