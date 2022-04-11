import { useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import enTranslations from "@shopify/polaris/locales/en.json";
import {
	AppProvider,
	FormLayout,
	TextField,
	InlineError,
	Checkbox,
} from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import "./index.css";
import profile from "./img/profile.webp";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function LoginPage() {
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	const [checked, setChecked] = useState(false);

	const handleCheckChange = useCallback(
		(newChecked) => setChecked(newChecked),
		[]
	);

	const handleUserChange = useCallback((newValue) => setUser(newValue), []);

	const handlePassChange = useCallback((newValue) => setPass(newValue), []);

	const userError =
		user === "" ? (
			<InlineError message='Username must have a values' fieldID='myFieldID' />
		) : (
			""
		);

	const passError =
		pass === "" ? (
			<InlineError message='Password must have a values' fieldID='myFieldID' />
		) : (
			""
		);

	return (
		<div className='flex  justify-center'>
			<div className='mt-32 bg-gray-100 p-10 pt-20 rounded-md w-5/6 sm:w-4/6 lg:w-3/6 xl:w-2/6 shadow-md'>
				<div className='bg-slate-500 rounded-full absolute -mt-32 shadow-lg -ml-16 w-24 h-24'>
					<img src={profile} className='rounded-full ' />
				</div>
				<div className='flex  justify-center -mt-8 mb-12 font-semibold'>
					<h1 className='text-2xl'>Login page</h1>
				</div>
				<AppProvider>
					<FormLayout i18n={enTranslations}>
						<TextField
							type='text'
							value={user}
							label='Username'
							onChange={handleUserChange}
							placeholder='Email or Username...'
							autoComplete='off'
						/>
						<div>{userError}</div>
						<TextField
							value={pass}
							type='email'
							label='Password'
							placeholder='Password'
							onChange={handlePassChange}
							autoComplete='email'
						/>
						<div>{passError}</div>

						<div className='flex flex-row mt-8'>
							<div className='basis-1/4'>
								<button className='bg-gray-400 hover:bg-gray-500 py-1 px-6 text-lg text-white rounded-md'>
									Login
								</button>
							</div>
							<div className='basis-1/4'></div>
							<div className='basis-2/4 grid justify-items-end'>
								<Checkbox
									label='Remember me'
									checked={checked}
									onChange={handleCheckChange}
								/>
							</div>
						</div>
					</FormLayout>
				</AppProvider>
			</div>
		</div>
	);
}

root.render(<LoginPage />);
