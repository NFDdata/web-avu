import { apiClient } from "lib/queryClient";
import BaseResponse from "models/response.model";

const verify = async({verifyToken}:{verifyToken?:string}) => {
const response = await apiClient().post<BaseResponse>(`/auth/confirmAccount`, {
    token: verifyToken
});

return response.data;
};


const LoginService = {verify};


export default LoginService;