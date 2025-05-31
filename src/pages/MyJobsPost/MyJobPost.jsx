import React, { Suspense } from 'react';
import UserAuth from '../../hooks/UseAuth/UseAuth';
import MyPost from '../../components/MyPost/MyPost';
import { myJobPostPromise } from '../../Api/MYJobPostApi';

const MyJobPost = () => {
    const { user } = UserAuth();
    return (
      <div>
        <Suspense>
          <MyPost myJobPostPromise={myJobPostPromise(user?.email)}></MyPost>
        </Suspense>
      </div>
    );
};

export default MyJobPost;