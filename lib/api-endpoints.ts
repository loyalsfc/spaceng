export const API_ENDPOINTS = {
  whoAmI: "/user",

  // AUTH: "auth",
  AUTH: {
    RESET: "auth/reset",
    LOGIN: "auth/login",
    REGISTER: "auth/register",
    SEND_OTP: "auth/send-otp",
    RESEND_OTP: "auth/resend-otp",
    VERIFY_OTP: "auth/verify-otp",
    GOOGLE: "oauth/google/verify",
    CHANGE_PASSWORD: "auth/update-user-password",
    UPDATE_ROLE: "/auth/update-user-role",
  },

  UPLOAD: {
    uploadImage: "/media/image",
    uploadVideo: "/media/video",
    uploadBase64: "/media/base64image",
  },

  PROPERTY: {
    create: "/property",
    overview: "/property/overview",
    properties: "/property/management",
    modify: (id: string) => `/property/management/${id}`,
    disableDates: (id: string) => `/property/management/updateDisabled/${id}`,
  },

  LISTING: {
    listing: (
      type: string,
      sort: string,
      location: string,
      bedrooms: string,
      searchString: string,
      page: string,
    ) =>
      `/lists/${type}?sort=${sort}&location=${location}&bedrooms=${bedrooms}&q=${searchString}&page=${page}`,
    details: (id: string) => `/lists/property/${id}`,
    updateView: (id: string) => `/lists/property/${id}/increase-view`,
    search: (type: "workspace" | "shortlet", searchString: string) =>
      `/lists/search/${type}?q=${searchString}`,
    locations: (type: "workspace" | "shortlet" | undefined) =>
      `/lists/address/locations?${type && `type=${type}`}`,
  },

  TRANSACTION: {
    acceptpayment: (params: string) => `/transaction/acceptpayment?${params}`,
    bankpayment: "/transaction/paywithbank",
    getBanks: (query: string) => `/transaction/banks?${query}`,
    verifyBankAccount: (query: string) => `/transaction/verify-account?${query}`,
    initPlan: `/transaction/plan-payment`,
  },

  PRE_BOOKING: `/booking/pre-booking`,

  BOOKING: {
    initBooking: (transactionRef: string) => `/booking/confirm-payment/${transactionRef}`,
    getBookings: (status: string) => `/booking/client/${status}`,
    details: (propertyId: string, date: number) => `/booking/${propertyId}/${date}`,
    bookingPerMonth: "/booking/booking-per-month",
    bookingPerWeek: "/booking/booking-per-week",
    overview: "/booking/overview",
    habit: "/booking/habit",
    locations: "/booking/locations",
    checAvailable: `/booking/check-date`,
  },

  WISHLIST: {
    toggleWishlist: (propertyId: string) => `/wishlist/toggle/${propertyId}`,
    userWishlists: (userId: string) => `/wishlist/lists/${userId}`,
  },

  RATING: {
    create: "/rating/create",
    lists: (id: string) => `/rating/${id}`,
  },

  PAYOUT: {
    payoutMethod: `/payout/payout-method`,
    payouts: `/payout`,
    request: `/payout/request`,
  },

  VIEWS: {
    views: `/views`,
  },

  PROFILE: {
    update: `/user/profile`,
    changePassword: `/user/change-password`,
    delete: `/user/delete`,
    requestPasswordReset: `/user/reset-password`,
    changeClientPassword: `/user/reset-password`,
    plan: "/user/update-plan",
    free_plan: "/user/update-freeplan",
  },

  OTHER_RENTALS: {
    add: `/other-rentals`,
    delete: (id: string) => `/other-rentals/${id}`,
  },

  CHAT: {
    getRoom: `/room`,
    messages: (id: string) => `/messages/peer/${id}`,
    chatPeer: (id: string) => `/room/${id}`,
    unreadMessages: "/messages/unread",
  },

  CONTACT: "/contact/form",

  COUPON: {
    create: "/coupon",
    lists: () => `/coupon`,
    modify: (id: string) => `/coupon/${id}`,
    validate: (code: string, propertyId: string, duration: number) =>
      `/coupon/${code}?propertyId=${propertyId}&duration=${duration}`,
  },
};
