import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Header from '../../src/components/Header'

describe('Header Tests', () => {
  let headerComponent

  beforeEach(() => {
    headerComponent = mount(<Header 
      pages={[
        { "id": 11, "title": { "rendered": "About Us" }, "slug": "about-us" }
      ]}
      onLinkClick={() => null}
    />)
  })

  it('should render a menu bar', () => {
    expect(headerComponent.text()).toContain('About Us')
  })

  it('should trigger handleOnLinkClick when the #home link is cliked', () => {
    const instance = headerComponent.instance()
    const handleClickSpy = sinon.spy(instance, 'handleOnLinkClick')

    instance.forceUpdate()
    headerComponent.find('#home').simulate('click')
    expect(handleClickSpy.called).toEqual(true)
  })

  it('should trigger handleOnLinkClick when any of the links is cliked', () => {
    const instance = headerComponent.instance()
    const handleClickSpy = sinon.spy(instance, 'handleOnLinkClick')

    instance.forceUpdate()
    headerComponent.find('#link-0').simulate('click')
    expect(handleClickSpy.called).toEqual(true)
  })
})
