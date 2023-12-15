import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


export function useHandleApiResponse(resError, resData, setError, successMessage) {
    const { user_data } = useSelector((state) => state.auth);
    const update = user_data?.update
    

    useEffect(() => {
        if (resError) {
            setError("Server problem, please try again!");
            toast("Server problem, please try again!", {
                type: "error",
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return;
        } 
 
        if (update && resData?.status === "success") {
            setError("");
            toast("Data update successfully", {
                type: "success",
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return;
        }

        if (!update && resData?.status === "success") {
            setError("");
            toast("Data saved successfully", {
                type: "success",
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return;
        }
        
    }, [resError, resData]);
}

