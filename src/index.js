import React from 'react';
import PropTypes from 'prop-types';

class ReactUtilsInput extends React.Component {

    constructor() {
        super();
        this.state = { focused: false };
    }

    onFocus() {
        this.setState({ focused: true });
    }

    onBlur() {
        this.setState({ focused: false });
    }

    render() {
        const { autoComplete, className, disabled, name, onBlur, onChange, onFocus, onKeyDown, onKeyUp, placeholder, type, value, wrapperClassName } = this.props;
        let wrapperClass = 'utils-input-wrapper';
        if (wrapperClassName) {
            wrapperClass += ` ${wrapperClassName}`;
        }
        if (disabled) {
            wrapperClass += ' utils-input-wrapper--disabled';
        }
        if (this.state.focused) {
            wrapperClass += ' utils-input-wrapper--focused';
        }

        return (
            <div className={wrapperClass}>
                <input autoComplete={autoComplete}
                       className={`utils-input${className ? ` ${className}` : ''}`}
                       disabled={disabled ? 'disabled' : undefined}
                       name={name}
                       onBlur={onBlur || this.onBlur.bind(this)}
                       onChange={!disabled ? onChange : () => {}}
                       onFocus={onFocus || this.onFocus.bind(this)}
                       onKeyDown={onKeyDown}
                       onKeyUp={onKeyUp}
                       placeholder={placeholder}
                       type={type || 'text'}
                       value={value || ''}
                />
            </div>
        );
    }
}

ReactUtilsInput.propTypes = {
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    wrapperClassName: PropTypes.string
};

export default ReactUtilsInput;
