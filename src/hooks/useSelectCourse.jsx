import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useSelectCourse = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: selectCourse=[]  } = useQuery({
    queryKey: ["selectCourse", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selectcourse?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [selectCourse, refetch];
};

export default useSelectCourse;
