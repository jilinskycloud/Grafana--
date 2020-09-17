import React from 'react';
import { QueryOperationAction } from './QueryOperationAction';
import { shallow } from 'enzyme';

describe('QueryOperationAction', () => {
  it('renders', () => {
    expect(() => shallow(<QueryOperationAction icon="panel-add" onClick={() => {}} />)).not.toThrow();
  });
  describe('when disabled', () => {
    it('does not call onClick handler', () => {
      const clickSpy = jest.fn();
      const wrapper = shallow(<QueryOperationAction icon="panel-add" onClick={clickSpy} title="Test action" />);
      const actionEl = wrapper.find({ 'aria-label': '测试动作查询操作动作' });

      expect(actionEl).toHaveLength(1);
      expect(clickSpy).not.toBeCalled();

      actionEl.first().simulate('click');

      expect(clickSpy).toBeCalledTimes(1);
    });
  });
});
