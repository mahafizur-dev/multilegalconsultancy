// Shared by the contact form (maxLength) and the API route (validation).
export const FIELD_LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 30,
  message: 5000,
} as const;
