export const API_ENDPOINTS = {
  whoAmI: "/user",

  // AUTH: "auth",
  AUTH: {
    RESET: "auth/reset",
    LOGIN: "auth/login",
    REGISTER: "auth/register",
    SEND_OTP: "auth/send-otp",
    VERIFY_OTP: "auth/verify-otp",
    GOOGLE: "auth/google",
    CHANGE_PASSWORD: "auth/update-user-password",
    UPDATE_ROLE: "/auth/update-user-role",
  },

  UPLOAD: {
    uploadImage: "/media/image",
    uploadVideo: "/media/video",
  },

  PROPERTY: {
    create: "/property",
    overview: "/property/overview",
    properties: "/property/management",
    modify: (id: string) => `/property/management/${id}`,
  },

  LISTING: {
    listing: (type: string) => `/lists/${type}`,
    details: (id: string) => `/lists/property/${id}`,
  },

  PRE_BOOKING: `/booking/pre-booking`,
};
