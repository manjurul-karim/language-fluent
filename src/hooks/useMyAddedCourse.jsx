import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useMyAddedCourse = () => {
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: myAddedCourse = [] } = useQuery({
    queryKey: ["myAddedCourse", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/myaddedcourse?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [myAddedCourse, refetch];
};

export default useMyAddedCourse;
