import { useEffect } from "react";

import Router from "next/router";
import useAppSelector from "./useAppSelector";
import { setAuthHeader } from "@/pages/api/apiClient";

const useProtected = (path = "/login") => {
  const token = useAppSelector((state) => state.user.token);
  const user = useAppSelector((state) => state.user.data);

  useEffect(() => {
    if (!user) {
      Router.replace("/login");
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      setAuthHeader(token);
    }
  }, [token]);
};

export default useProtected;
