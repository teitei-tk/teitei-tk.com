import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import type React from "react";

export const renderWithChakra = (ui: React.ReactNode) => {
        return render(<ChakraProvider theme={defaultSystem}>{ui}</ChakraProvider>);
};
