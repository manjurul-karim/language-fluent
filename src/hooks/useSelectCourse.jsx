import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSelectCourse = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("access-token");

  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectCourse = [] } = useQuery({
    queryKey: ["selectCourse", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selectcourse?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [selectCourse, refetch];
};

export default useSelectCourse;
