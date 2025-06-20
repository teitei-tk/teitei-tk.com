/**
 * Chakra UI Provider for App Router
 */
"use client";

import type { ReactNode } from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export function Providers({ children }: { children: ReactNode }) {
	return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
