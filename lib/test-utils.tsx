import type React from "react";

/**
 * テスト用のユーティリティ関数
 */
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { render } from "@testing-library/react";

export const renderWithChakra = (ui: React.ReactNode) => {
	return render(<ChakraProvider value={defaultSystem}>{ui}</ChakraProvider>);
};
