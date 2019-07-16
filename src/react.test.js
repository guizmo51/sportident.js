/* eslint-env jasmine */

import _ from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';
import {FakeSiDevice} from './SiDevice/testUtils/FakeSiDevice';
import * as react from './react';

describe('react', () => {
    it('exists', () => {
        expect(react).not.toBe(undefined);
    });
    it('works', () => {
        const SiDevicesList = () => {
            FakeSiDevice.mocks = {
                startAutoDetection: () => Promise.resolve([new FakeSiDevice('auto-1')]),
                stopAutoDetection: () => Promise.resolve(),
            };
            const fakeReact = _.clone(React);
            fakeReact.useEffect = React.useLayoutEffect;
            const fakeSiDevices = react.useSiDevices(FakeSiDevice, fakeReact);

            const deviceList = [...fakeSiDevices.values()].map((device) => (
                <div key={`device-${device.ident}`}>
                    {device.name}
                </div>
            ));

            return (
                <div>
                    {deviceList}
                </div>
            );
        };
        const component = renderer.create(
            <SiDevicesList/>,
        );
        expect(FakeSiDevice.counts.startAutoDetection).toBe(1);
        const auto2Device = new FakeSiDevice('auto-2');
        FakeSiDevice.dispatchEvent('add', {siDevice: auto2Device});
        component.update();
        FakeSiDevice.dispatchEvent('remove', {siDevice: auto2Device});
        component.unmount();
        expect(FakeSiDevice.counts.startAutoDetection).toBe(1);
        expect(FakeSiDevice.counts.stopAutoDetection).toBe(1);
    });
});