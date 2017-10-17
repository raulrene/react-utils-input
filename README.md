# React Utils Input
Lightweight React Input component, serving as an utility wrapper for HTML Input elements.

## Installation

```sh
npm install react-utils-input
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
    
    render() {
        return <Input autoComplete='off',
                    className='input-custom-class',
                    disabled={true},
                    name='custom-name',
                    onBlur={() => {}},
                    onChange={ev => this.setState({ value: ev.target.value })},
                    onFocus={() => {}},
                    onKeyDown={() => {}},
                    onKeyUp={() => {}},
                    placeholder='custom-placeholder',
                    type='password',
                    value={this.state.value},
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
- **disabled** (boolean, default: false) - disabled state for the component; once disabled the onChange callback does not fire anymore; also sets a **utils-input-wrapper--disabled** class
- **name** (string) - sets the name attr. on the input
- **onBlur** (function) - on blur callback
- **onChange** (function) - on change callback
- **onFocus** (function) - on focus callback
- **onKeyDown** (function) - on key down callback
- **onKeyUp** (function) - on key up callback
- **placeholder** (string) - sets the placeholder attr. on the input
- **value** (text) - sets the value of the input
- **wrapperClassName** (string) - extra classes for the wrapper

### Licence
The code is open-source and available under the MIT Licence. More details in the LICENCE.md file.