/* eslint-disable max-lines-per-function */
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { shallow, mount, configure } from 'enzyme';
import sinon from 'sinon';
import Input from './index';

chai.use(sinonChai);
chai.use(chaiEnzyme());
configure({ adapter: new Adapter() });

describe('Input Component', () => {
    describe('general attributes', () => {
        it('should always have class "utils-input-wrapper" set', () => {
            const wrapper = shallow(<Input/>);
            expect(wrapper).to.have.className('utils-input-wrapper');
        });

        it('should have a custom class set if wrapperClassName prop provided ', () => {
            const wrapper = shallow(<Input wrapperClassName='custom-class'/>);
            expect(wrapper).to.have.className('custom-class');
        });

        it('should have an id if the prop provided ', () => {
            const wrapper = shallow(<Input id='custom-id'/>);
            expect(wrapper.find('.utils-input')).to.have.id('custom-id');
        });

        it('input should have a custom class set if className prop is provided', () => {
            const wrapper = shallow(<Input className="input-custom-class"/>);
            expect(wrapper.find('.utils-input')).to.have.className('input-custom-class');
        });

        it('input should be disabled if prop is received', () => {
            const wrapper = shallow(<Input disabled={true}/>);
            expect(wrapper.find('.utils-input')).to.have.attr('disabled');
        });

        it('input should not be disabled if disabled prop is missing', () => {
            const wrapper = shallow(<Input/>);
            expect(wrapper.find('.utils-input')).to.not.have.attr('disabled');
        });

        it('input should have the name attribute if prop is received', () => {
            const wrapper = shallow(<Input name="custom-name"/>);
            expect(wrapper.find('.utils-input')).to.have.attr('name', 'custom-name');
        });

        it('input should have the placeholder attribute if prop is received', () => {
            const wrapper = shallow(<Input placeholder="custom-placeholder"/>);
            expect(wrapper.find('.utils-input')).to.have.attr('placeholder', 'custom-placeholder');
        });

        it('input should have the type="text" attribute set by default', () => {
            const wrapper = shallow(<Input/>);
            expect(wrapper.find('.utils-input')).to.have.attr('type', 'text');
        });

        it('input should have the type attribute if prop is received', () => {
            const wrapper = shallow(<Input type="email"/>);
            expect(wrapper.find('.utils-input')).to.have.attr('type', 'email');
        });

        it('input should not have focused class set', () => {
            const wrapper = shallow(<Input/>);
            expect(wrapper).to.not.have.className('utils-input-wrapper--focused');
        });

        it('input should have the autocomplete attribute set when the prop is received', () => {
            const wrapper = shallow(<Input autoComplete="off"/>);
            expect(wrapper.find('.utils-input')).to.have.attr('autocomplete', 'off');
        });

        it('input should have the value attribute empty string by default', () => {
            const wrapper = shallow(<Input/>);
            expect(wrapper.find('.utils-input')).to.have.attr('value', '');
        });

        it('input should have the value attribute set when prop is received', () => {
            const wrapper = shallow(<Input value="typed" onChange={() => {
            }}/>);
            expect(wrapper.find('.utils-input')).to.have.attr('value', 'typed');
        });
    });

    describe('label', () => {
        it('should always have a label', () => {
            const wrapper = shallow(<Input/>);
            expect(wrapper.find('label').exists()).to.equal(true);
        });

        it('should have the label after the input, by default', () => {
            const wrapper = shallow(<Input/>);
            expect(wrapper.childAt(1).type()).to.equal('label');
        });

        it('should have the label after the input if specified', () => {
            const wrapper = shallow(<Input labelBefore={true}/>);
            expect(wrapper.childAt(0).type()).to.equal('label');
        });
    });

    describe('checkbox/radio', () => {
        it('should have the checked attribute set when prop is received', () => {
            const wrapper = shallow(<Input type="checkbox" checked={true} value="typed" onChange={() => {
            }}/>);
            expect(wrapper.find('.utils-input')).to.have.attr('checked', 'checked');
        });

        it('should have the checked attribute set when prop checkedDefault is received', () => {
            const wrapper = shallow(<Input type="checkbox" checkedDefault={true} value="typed" onChange={() => {
            }}/>);
            expect(wrapper.find('.utils-input')).to.have.attr('checked', 'checked');
        });
    });

    describe('on focus', () => {
        let sandbox;
        beforeEach(() => {
            sandbox = sinon.sandbox.create();
        });
        afterEach(() => sandbox.restore());

        it('should have class "focused" when on focus event is activated', () => {
            const wrapper = shallow(<Input/>);
            wrapper.find('.utils-input').simulate('focus');
            expect(wrapper).to.have.className('utils-input-wrapper--focused');
        });

        it('should trigger "onFocus" function when focus event is activated', () => {
            const onFocus = sandbox.stub(Input.prototype, 'onFocus');
            const wrapper = shallow(<Input/>);
            wrapper.find('.utils-input').simulate('focus');
            expect(onFocus).to.have.been.calledOnce;
        });

        it('should trigger "focus" method when focus() is manually called', () => {
            const focus = sandbox.stub(Input.prototype, 'focus');
            const wrapper = shallow(<Input/>);
            wrapper.instance().focus();
            expect(focus).to.have.been.calledOnce;
        });
    });

    describe('on blur', () => {
        const sandbox = sinon.sandbox.create();
        afterEach(() => sandbox.restore());

        it('should trigger "onBlur" function when on blur event is activated', () => {
            const onBlur = sandbox.stub(Input.prototype, 'onBlur');
            const wrapper = shallow(<Input/>);
            wrapper.find('.utils-input').simulate('blur');
            expect(onBlur).to.have.been.calledOnce;
        });

        it('should have "focused" class after on blur', () => {
            const wrapper = shallow(<Input/>);
            wrapper.find('.utils-input').simulate('focus');
            wrapper.find('.utils-input').simulate('blur');
            expect(wrapper).to.not.have.className('utils-input-wrapper--focused');
        });
    });

    describe('on interaction', () => {
        const sandbox = sinon.sandbox.create();
        afterEach(() => sandbox.restore());

        it('should call the onChange callback if input is written in', () => {
            const onChange = sandbox.stub();
            const wrapper = mount(<Input onChange={onChange}/>);
            wrapper.find('.utils-input').simulate('change', { target: { value: 'abc' } });
            expect(onChange).to.have.been.calledWith(sinon.match({ target: { value: 'abc' } }));
        });

        it('should call the onKeyDown callback if key down happens inside the input', () => {
            const onKeyDown = sandbox.stub();
            const wrapper = shallow(<Input onKeyDown={onKeyDown}/>);
            wrapper.find('.utils-input').simulate('keyDown', { keyCode: 40 });
            expect(onKeyDown).to.have.been.calledOnce;
        });

        it('should call the onKeyUp callback if key up happens inside the input', () => {
            const onKeyUp = sandbox.stub();
            const wrapper = shallow(<Input onKeyUp={onKeyUp}/>);
            wrapper.find('.utils-input').simulate('keyUp', { keyCode: 40 });
            expect(onKeyUp).to.have.been.calledOnce;
        });
    });
});
