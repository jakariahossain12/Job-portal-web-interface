import React, { use } from 'react';
import { AuthContext } from '../../context/Context';

const UserAuth = () => {
    const userInfo = use(AuthContext)
    return userInfo
};

export default UserAuth;