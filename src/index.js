import React from 'react';
import PropTypes from 'prop-types';

class ReactUtilsInput extends React.Component {

    render() {
        const { type, value, placeholder, name, wrapperClassName, className, disabled } = this.props;
        let wrapperClass = 'utils-input-wrapper';
        if (wrapperClassName) {
            wrapperClass += ` ${wrapperClassName}`;
        }
        if (disabled) {
            wrapperClass += ` utils-input-wrapper--disabled`;
        }

        return (
            <div className={wrapperClass}>
                <input type={type || 'text'}
                       value={value || ''}
                       placeholder={placeholder}
                       name={name}
                       className={`utils-input${className ? ` ${className}` : ''}`}
                       disabled={disabled ? 'disabled' : undefined}
                />
            </div>
        );
    }
}

ReactUtilsInput.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    wrapperClassName: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool
};

export default ReactUtilsInput;