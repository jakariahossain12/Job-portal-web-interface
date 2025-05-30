import { myApplications } from "../../Api/ApplicationApi";
import UserAuth from "../../hooks/UseAuth/UseAuth";
import Application from "../../components/Application/Application";
import { Suspense } from "react";

const MyApplications = () => {
  const { user } = UserAuth()

  
  return (
    <div>
          <Suspense>
              <Application myApplications={myApplications(user.email)}></Application>
      </Suspense>
    </div>
  );
};

export default MyApplications;
