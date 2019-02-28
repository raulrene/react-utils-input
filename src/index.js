import React from 'react';
import PropTypes from 'prop-types';

class ReactUtilsInput extends React.Component {

    constructor() {
        super();
        this.state = {
            focused: false,
            selectionStart: 0
        };
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    /** Focus the input */
    focus() {
        const input = this.input;
        if (input) {
            // Focus the element
            input.focus();
            // This is mainly for IE and older browsers, bc when they focus they don't focus at the end of the current text
            // So we have to force the caret to move at our desired position
            setTimeout(() => {
                input.selectionStart = this.state.selectionStart || 100000;
                input.selectionEnd = this.state.selectionStart || 100000;
            }, 0);
        }
    }

    /**
     * Intercept onChange handler to store the current caret position
     * @param {Event} e the triggered event
     */
    onChange = (e) => {
        this.props.onChange(e);
        this.setState({ selectionStart: this.input.selectionStart });
    };

    /** On Focus callback */
    onFocus() {
        this.setState({ focused: true });
    }

    /** On Blur callback */
    onBlur() {
        this.setState({ focused: false });
    }

    render() {
        const {
            autoComplete, className, disabled, name, onBlur, onFocus,
            onKeyDown, onKeyUp, placeholder, type, value, wrapperClassName
        } = this.props;
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
                <input ref={c => this.input = c}
                       autoComplete={autoComplete}
                       className={`utils-input${className ? ` ${className}` : ''}`}
                       disabled={disabled ? 'disabled' : undefined}
                       name={name}
                       onBlur={onBlur || this.onBlur}
                       onChange={!disabled ? this.onChange : () => {
                       }}
                       onFocus={onFocus || this.onFocus}
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
