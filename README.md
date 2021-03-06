# React Utils Input [![Build Status](https://travis-ci.org/raulrene/react-utils-input.svg?branch=master)](https://travis-ci.org/raulrene/react-utils-input)
Lightweight React Input component, serving as a reusable utility wrapper for HTML Input elements.

Provides access to commonly used methods as well as wrapper and element classes for reusability. 

## Installation

```sh
npm i --save react-utils-input
```

## Usage

```javascript
import React from 'react';
import Input from 'react-utils-input';

class Container extends React.Component {

    constructor() {
        super();
        this.state = { value: null };
    }
    
    componentDidMount() {
        // Programmatically focus the input
        this.input && this.input.focus();
    }
    
    render() {
        return <Input ref={c => this.input = c}
                    autoComplete='off'
                    className='input-custom-class'
                    checked={false}
                    checkedDefault={false}
                    disabled={false}
                    id={'custom-id'}
                    label={'Label'}
                    labelBefore={false}
                    name='custom-name'
                    onBlur={() => {}}
                    onChange={ev => this.setState({ value: ev.target.value })}
                    onFocus={() => {}}
                    onKeyDown={() => {}}
                    onKeyUp={() => {}}
                    placeholder='custom-placeholder'
                    type='password'
                    value={this.state.value}
                    wrapperClassName='wrapper-custom-class'/>;
    }
}
```

The library can also be loaded via require: 

```javascript
const Input = require('react-utils-input');
```

## Options
- **autocomplete** (string) - sets the autocomplete attr. on the input
- **className** (string) - extra classes for the input
- **checked** (boolean, default: false) - checked value for the input (type checkbox/radio)
- **checkedDefault** (boolean, default: false) - default checked state, for uncontrolled components
- **disabled** (boolean, default: false) - disabled state for the component; once disabled the onChange callback does not fire anymore; also sets a **utils-input-wrapper--disabled** class
- **id** (string) - sets the ID attr. on the input
- **label** (string) - sets the label text (don't forget the **id** attribute if you want the label to be clickable)
- **labelBefore** (boolean, default: false) - whether the label should be displayed before the input
- **name** (string) - sets the name attr. on the input
- **onBlur** (function) - on blur callback
- **onChange** (function) - on change callback
- **onFocus** (function) - on focus callback
- **onKeyDown** (function) - on key down callback
- **onKeyUp** (function) - on key up callback
- **placeholder** (string) - sets the placeholder attr. on the input
- **value** (text) - sets the value of the input
- **wrapperClassName** (string) - extra classes for the wrapper

## Extra methods
- **focus** (function) - focus the input programmatically

### Licence
The code is open-source and available under the MIT Licence. More details in the LICENCE.md file.
