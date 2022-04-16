import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { createRoot } from "react-dom/client";
import { App } from "./Components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function LoginPage() {
	return (
		<>
			<AppProvider i18n={enTranslations}>
				<App />
			</AppProvider>
		</>
	);
}

root.render(<LoginPage />);
