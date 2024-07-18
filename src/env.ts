import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        TURSO_CONNECTION_URL: z.string().url(),
        TURSO_AUTH_TOKEN: z.string().min(1),
    },
    client: {

    },
    // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
    runtimeEnv: {
        TURSO_CONNECTION_URL: process.env.TURSO_CONNECTION_URL,
        TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
    },
    // For Next.js >= 13.4.4, you only need to destructure client variables:
    // experimental__runtimeEnv: {
    //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
    // }
});