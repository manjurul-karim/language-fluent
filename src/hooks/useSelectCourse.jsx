import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSelectCourse = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("access-token");

  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectCourse = [] } = useQuery({
    queryKey: ["selectCourse", user?.email],
    queryFn: async () => {
      const res = await axios(`/selectcourse?email=${user?.email}`, {
        headers: {
          authorization: `bearer${token}`,
        },
      });
      return res.json();
    },
  });

  return [selectCourse, refetch];
};

export default useSelectCourse;
