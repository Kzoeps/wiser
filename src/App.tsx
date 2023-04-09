import Routes from "./core/routes";
import { ChakraProvider } from "@chakra-ui/react";
import { initDB } from "react-indexed-db";
import { DBConfig } from "./constants/wiser.constants";

initDB(DBConfig);

function App() {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
