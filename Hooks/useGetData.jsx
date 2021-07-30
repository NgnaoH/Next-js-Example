import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetData = (state, type) => {
  
  const blogs = useSelector(state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: type });
  }, [dispatch, type]);

  return blogs;
};

export default useGetData;
