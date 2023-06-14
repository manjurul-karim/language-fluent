import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useManageCourse = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: reviewCourse = [] } = useQuery({
    queryKey: ["reviewCourse"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure("/reviewcourse");
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [reviewCourse, refetch];
};

export default useManageCourse;
