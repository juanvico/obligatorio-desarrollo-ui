import React, { useEffect } from 'react';
import { hide } from 'react-native-bootsplash';
import { enableScreens } from 'react-native-screens';
import { useDispatch } from 'react-redux';
import { me } from '_actions/UserActions';
import RootNavigator from '_navigation';

enableScreens();

const Setup = () => {
    const dispatch = useDispatch()
    const hideSplashScreen = async () => {
        await hide({ fade: true });
    };
    useEffect(() => {
        dispatch(me(() => hideSplashScreen()))
    }, [me])

    return (
        <RootNavigator />
    );
}

export default Setup;
