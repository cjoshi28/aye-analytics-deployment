const baseUrl = "https://aye-analytics.herokuapp.com/api"
export const path = {
    register: `${baseUrl}/auth/register`,
    login: `${baseUrl}/auth/login`,
    forgotpassword: `${baseUrl}/auth/reset`,
    resetpassword: `${baseUrl}/auth/reset`,
    siteConfigure: `${baseUrl}/auth/configure`,
}