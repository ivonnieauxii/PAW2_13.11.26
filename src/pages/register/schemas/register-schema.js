import { z } from 'zod'

const registerSchema = z.object({
  username: z.string().min(3, 'Username minimal 3 karakter'),
  email: z.email(),
  password: z.string().min(8, 'Password minimal 8 karakter'),
})

export default registerSchema