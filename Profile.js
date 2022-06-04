import React from 'react';
import {Layout , Text} from '@ui-kitten/components';
import style from './Login.style';

function Profile () {
    return(
    <Layout style = {style.contenitore}>
        <Text category= 'h1'>
            Hello
        </Text>
    </Layout>
    )
}

export default Profile;