/**
 * テスト用のユーティリティ関数
 */
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import type React from "react";

export const renderWithChakra = (ui: React.ReactNode) => {
	return render(<ChakraProvider value={defaultSystem}>{ui}</ChakraProvider>);
};
