## Your React Event Application: A Step-by-Step Blueprint

This project is a journey through building a complete React application that talks to a real API. We'll go from planning to deployment, ensuring you have a solid understanding at every stage.

---

### Phase 1: Foundation & Design (Days 1-2)

This initial phase is all about setting yourself up for success by thoroughly understanding the requirements and laying out your application's design before writing any code.

#### 1.1 Deep Dive into the API

- **Action:**
  1.  Go to the provided **API repository**.
  2.  **Clone** it to your local machine.
  3.  Follow its instructions to **install dependencies** (like running `npm install` or `yarn install`).
  4.  **Start the API locally** (usually with `npm start` or `yarn start`).
  5.  **Explore the API documentation** (likely Swagger UI, which provides an interactive way to see and test endpoints).
- **Explanation:** Before you build the frontend, you _must_ know how the backend works. This step ensures you understand which **endpoints** (like `/api/events`, `/api/users`, `/api/auth/login`) are available, what kind of **HTTP methods** (GET, POST, PUT, DELETE) they expect, and what data structures you need to send (`request bodies`) and what data you'll receive (`response data`).
- **Why it's important:** This is your blueprint for communication. Knowing the API inside out prevents guesswork and rework on the frontend.

#### 1.2 Sketch Your User Interface (UI)

- **Action:**
  1.  Grab a tool – Figma, MS Paint, or even just **pen and paper**.
  2.  **Draw out each main page** of your application: the Home page (event list), an individual Event Details page, the Sign-Up page, the Sign-In page, and the Create Event page.
  3.  Think about the **layout** of elements on each page: Where will the navigation bar go? Where will event cards appear? What inputs will be on the forms?
  4.  Consider how your design will **adapt to different screen sizes** (mobile, tablet, desktop) from the very beginning.
- **Explanation:** Visualizing your app helps you see the big picture. It's much easier to rearrange elements on a sketch than to rewrite lines of code. This also helps ensure a smooth `user flow` between pages.
- **Why it's important:** A clear visual plan helps identify necessary components and plan your routes effectively.

#### 1.3 Plan Your React Routes

- **Action:**
  1.  Based on your UI sketches and the project's **functional requirements** (specifically FR009, FR010, FR014), **list every distinct URL path** your application will have.
- **Explanation:** These are the "addresses" users will type into their browser or click to navigate. You'll need:
  - `/` (for the Home page, showing all events)
  - `/events/:id` (for detailed view of a specific event, where `:id` is a placeholder for a unique event identifier)
  - `/signup` (for user registration)
  - `/signin` (for user login)
  - `/create-event` (for creating new events – this one will be `protected`, meaning only logged-in users can access it).
- **Why it's important:** This defines the navigational structure of your app and is crucial for setting up `React Router`.

#### 1.4 Deconstruct Your UI into React Components

- **Action:**
  1.  Look closely at your UI mockups from step 1.2.
  2.  Identify all the **reusable blocks** or distinct sections.
  3.  **List these as potential React components**:
      - **Pages:** `HomePage`, `EventDetailsPage`, `SignUpPage`, `SignInPage`, `CreateEventPage`.
      - **Layout Components:** `Header`, `Footer`.
      - **Reusable UI Elements:** `EventCard` (for a single event summary), `AuthForm` (can be used for both sign-up and sign-in forms), `LoadingSpinner`, `ErrorMessage`, `Button`, `Input`.
      - **Special Purpose Components:** `ProtectedRoute` (to guard access to certain pages).
  4.  For each component, consider what `props` (data passed from parent) it will need and what `state` (internal data it manages) it might hold.
- **Explanation:** Breaking down your app into components makes it modular. Each component will have a single responsibility, making your code easier to write, understand, and debug.
- **Why it's important:** This component-based approach is fundamental to React and promotes code reusability and maintainability.

#### 1.5 Initial Project Setup & Static File Structure

- **Action:**
  1.  Using **Vite**, `scaffold a new React project`.
  2.  **Install key libraries**: `tailwindcss` (for styling), `react-router-dom` (for routing), and an HTTP client library like `axios` (or plan to use the built-in `fetch` API for making API calls).
  3.  **Initialize your public GitHub repository** and get familiar with the `Pull Request (PR)` workflow (FR001, FR002, FR003, FR004).
  4.  Create your project folder structure (e.g., `src/components`, `src/pages`, `src/layouts`, `src/utils`, `src/assets`).
- **Explanation:** This gets your development environment ready. Vite is fast for development, Tailwind CSS will handle your styling, and React Router will manage navigation. Starting with GitHub from day one helps track your progress and collaboration. Setting up the folder structure now provides clear homes for your components.
- **Why it's important:** A correct initial setup prevents common headaches later on and sets up good organizational habits.

---

### Phase 2: Building the Static UI (Days 3-5)

In this phase, you'll focus purely on creating the visual structure of your application without connecting it to live data or complex interactions. Think of it as creating the "bones" and "skin" of your app.


#### 2.1 Set Up React Router and Placeholder Pages

- **Action:**
  1.  In your main application file (e.g., `App.jsx`), set up `BrowserRouter`, `Routes`, and `Route` components.
  2.  Define all the `paths` you planned in step 1.3 (e.g., `/`, `/events/:id`, `/signup`, `/signin`, `/create-event`, `*` for a 404 page).
  3.  For each `Route`, assign a placeholder `Page Component` (e.g., `HomePage`, `EventDetailsPage`, etc.). For now, these pages will contain only **static content**.
- **Explanation:** This establishes the fundamental `navigation system`. You're telling React which component to display for each URL. By using static content first, you confirm the routing works before adding complexity.
- **What needs to be in each (Static View):**
  - **`App.jsx`:** Imports `BrowserRouter`, `Routes`, `Route` from `react-router-dom`. Imports all your main `Page Components`. Contains the core routing logic, wrapping your main layout.
  - **`HomePage.jsx`:** A simple `<div>` with `<h1>Home Page</h1>`.
  - **`EventDetailsPage.jsx`:** A simple `<div>` with `<h1>Event Details Page</h1>` and perhaps `<h2>Event ID: [placeholder]</h2>`.
  - **`SignUpPage.jsx`:** A `<div>` with `<h1>Sign Up</h1>`.
  - **`SignInPage.jsx`:** A `<div>` with `<h1>Sign In</h1>`.
  - **`CreateEventPage.jsx`:** A `<div>` with `<h1>Create New Event</h1>`.
  - **`NotFoundPage.jsx`:** A `<div>` with `<h1>404 - Page Not Found</h1>`.
- **Why it's important:** A working routing system is the backbone of any multi-page application.


<!-- Current Task -->
#### 2.2 Design Global Layout Elements

- **Action:**
  1.  Create your `Header.jsx` and `Footer.jsx` components in a `src/layouts` or `src/components/layout` folder.
  2.  Integrate these components into your `App.jsx` so they appear consistently across all pages.
  3.  Use **Tailwind CSS classes** to style these components.
- **Explanation:** You're giving your application a consistent visual frame. Tailwind's utility classes let you style quickly without writing custom CSS.
- **What needs to be in each (Static View):**
  - **`Header.jsx`:**
    - A static logo/site title.
    - Navigation links (`Link` components from `react-router-dom`) to `/`, `/signup`, `/signin`, `/create-event`. These links will just visually exist for now, without dynamic login/logout states.
    - Basic Tailwind CSS for styling the header bar, text, and links.
  - **`Footer.jsx`:**
    - Static copyright information (e.g., "© 2025 Event App").
    - Any other static footer text or links.
    - Basic Tailwind CSS for styling the footer.
  - **`App.jsx`:** Renders `<Header />` and `<Footer />` around the `<Routes />` component.
- **Why it's important:** This creates a consistent look and feel and navigational structure across your application.

#### 2.3 Build Reusable Static UI Components

- **Action:**
  1.  Create the common, reusable UI components you identified in step 1.4 in your `src/components` folder.
  2.  Focus purely on their `visual presentation` and `basic structure`. Do **not** add any state management, API calls, or complex logic yet.
  3.  Apply **Tailwind CSS** to style them.
- **Explanation:** You're creating modular building blocks. By making them static first, you ensure their appearance is correct before they become dynamic.
- **What needs to be in each (Static View):**
  - **`Button.jsx`:**
    - Receives `children` (the text/content inside the button) and `className` prop for styling.
    - Renders a basic HTML `<button>` element.
    - Tailwind classes for default button styles (e.g., `bg-blue-500 text-white rounded px-4 py-2`).
  - **`Input.jsx`:**
    - Receives `type`, `placeholder`, `label`, `className` props.
    - Renders a basic HTML `<label>` and `<input>` element.
    - Tailwind classes for default input field styles (e.g., `border rounded px-3 py-2`).
  - **`LoadingSpinner.jsx`:**
    - A simple visual representation of a spinner (e.g., a circle with a spinning animation, or just a static text "Loading...").
    - Tailwind classes for basic styling.
  - **`ErrorMessage.jsx`:**
    - Receives a `message` prop.
    - Renders a `<div>` or `<p>` displaying the message.
    - Tailwind classes for error styling (e.g., `text-red-600 text-sm`).
  - **`EventCard.jsx`:**
    - Receives static `props` like `title`, `date`, `location`, `descriptionSnippet`.
    - Renders a `<div>` with static text for these properties.
    - Tailwind classes to style it as a card (e.g., `border rounded shadow p-4`).
  - **`AuthForm.jsx` (or `LoginForm.jsx`, `RegisterForm.jsx`):**
    - Receives static `title` and `buttonText` props.
    - Renders a basic `<form>` element.
    - Includes two static `Input` components for "Email" and "Password".
    - Includes a static `Button` component for submission.
    - Tailwind classes for form layout and styling.
  - **`EventForm.jsx`:**
    - Receives a static `title` prop.
    - Renders a basic `<form>` element.
    - Includes static `Input` or `textarea` components for "Event Name", "Description", "Date", "Location".
    - Includes a static `Button` for submission.
    - Tailwind classes for form layout and styling.
- **Why it's important:** Creating these first ensures design consistency and allows you to build out pages rapidly by composing these elements.

#### 2.4 Populate Pages with Static Components

- **Action:**
  1.  Replace the simple placeholder `<h1>` tags in your `HomePage`, `SignUpPage`, `SignInPage`, and `CreateEventPage` with the `static reusable components` you just created.
  2.  Use **dummy data** or static text within these components to simulate what the final UI will look like.
- **Explanation:** You're assembling your static UI. For example, `HomePage` will render several `EventCard` components with hardcoded data. `SignUpPage` will render your `AuthForm` component with static labels.
- **What needs to be in each (Static View):**
  - **`HomePage.jsx`:** Render multiple `EventCard` components, passing in `hardcoded static text` as props (e.g., `<EventCard title="Sample Event 1" date="July 10, 2025" ... />`).
  - **`EventDetailsPage.jsx`:** Render a single, more detailed static representation of an event, using hardcoded data.
  - **`SignUpPage.jsx`:** Render your `AuthForm` component with `title="Register"` and `buttonText="Sign Up"`.
  - **`SignInPage.jsx`:** Render your `AuthForm` component with `title="Log In"` and `buttonText="Sign In"`.
  - **`CreateEventPage.jsx`:** Render your `EventForm` component with `title="Create New Event"`.
- **Why it's important:** This completes the visual shell of your application. You can now see what your entire app will look like without any dynamic behavior.

---

### Phase 3: Bringing Life - Dynamic Updates & Core Logic (Days 6-8)

This is where your application starts to become interactive, fetches real data, and handles user input.

#### 3.1 Fetch and Display Events Dynamically (Home Page)

- **Action:**
  1.  In your `HomePage` component, introduce `useState` to `store the events` as an empty array initially, and `useState` for `loading state` (`isLoading`, `isError`).
  2.  Use the `useEffect` React Hook to `make an actual HTTP GET request` to your local API's `/api/events` endpoint when the `HomePage` mounts.
  3.  Once data is fetched, `update the events state` with the real data.
  4.  **Crucially**, `dynamically map over the events state` (instead of your hardcoded data) to render `EventCard` components.
  5.  Implement `sorting logic` for events chronologically before rendering (FR008).
  6.  `Conditionally render` your `LoadingSpinner` while fetching and `ErrorMessage` if the fetch fails (FR017).
- **Explanation:** You're replacing static content with dynamic, API-driven data. `useState` manages the data that updates the UI, and `useEffect` manages the process of getting that data.
- **What needs to be done (Dynamic Update):**
  - **`HomePage.jsx`:** Use `useState` for `events`, `isLoading`, `error`. Use `useEffect` to perform the `fetch` or `axios.get` call. Map `events.map(...)` over the state. Conditionally render `<LoadingSpinner />` or `<ErrorMessage />`.
- **Why it's important:** This is the first step in making your application "live" by connecting it to your backend data.

#### 3.2 Dynamic Event Details Page & Navigation

- **Action:**
  1.  In your `EventCard` component, ensure the navigation mechanism (e.g., `Link` or `useNavigate`) correctly passes the `actual event ID` to the `EventDetailsPage` path (FR009).
  2.  In your `EventDetailsPage`, use React Router's `useParams` hook to `extract the dynamic event ID` from the URL.
  3.  Implement `useState` for the `event data` and `loading/error states`.
  4.  Use `useEffect` to `make an HTTP GET request` to `/api/events/:id` (using the extracted ID) to fetch the real, full details of that specific event (FR010).
  5.  `Display the real fetched event data`.
  6.  Implement robust `error handling` (FR017), especially for 404 "Event Not Found" scenarios.
- **Explanation:** Your detail page now dynamically loads content based on the URL, which is driven by user clicks.
- **What needs to be done (Dynamic Update):**
  - **`EventCard.jsx`:** Ensure the `Link` or navigation logic uses `event.id`.
  - **`EventDetailsPage.jsx`:** Use `useParams` to get the `id`. Use `useState` for `eventDetails`, `isLoading`, `error`. Use `useEffect` to fetch `api.get(/api/events/${id})`. Conditionally render details, `LoadingSpinner`, or `ErrorMessage`.
- **Why it's important:** This completes the read functionality for individual items, making your app truly dynamic.

#### 3.3 Implement User Sign-Up (Dynamic Form Submission)

- **Action:**
  1.  In your `AuthForm` (or `SignUpPage`), introduce `useState` hooks for each `input field` (e.g., `email`, `password`, `username`).
  2.  Attach `onChange` handlers to your `Input` components to update these states as the user types.
  3.  Implement an `onSubmit` handler for the form.
  4.  Inside `onSubmit`, `send an HTTP POST request` to your API's `/api/users` endpoint using the `state values` from the form.
  5.  Upon a `successful API response`, `redirect the user to the SignInPage` (FR011).
  6.  Implement comprehensive `error handling` (FR017) to display specific messages for validation errors (e.g., "Email already registered," "Password too short") received from the API.
- **Explanation:** You're making your form interactive. `useState` manages the input values, and the `onSubmit` function handles sending this data to your backend API.
- **What needs to be done (Dynamic Update):**
  - **`AuthForm.jsx` / `SignUpPage.jsx`:** Use `useState` for `formData` (or separate states for each field). Implement `handleChange` and `handleSubmit` functions. Call `api.post('/api/users', formData)`. Use `useNavigate` for redirection. Display `ErrorMessage` on API failure.
- **Why it's important:** This allows new users to register and sets up the fundamental pattern for form submissions.

#### 3.4 Implement User Sign-In & Token Storage

- **Action:**
  1.  In your `AuthForm` (or `SignInPage`), introduce `useState` hooks for `email` and `password` inputs, similar to sign-up.
  2.  Implement an `onSubmit` handler for the form.
  3.  Inside `onSubmit`, `send an HTTP POST request` to your API's `/api/auth/login` endpoint with the user's credentials.
  4.  If the `login is successful`, `extract the authentication token` from the API response.
  5.  `Store this token securely in the browser's `localStorage` (FR012, FR013).
  6.  After storing the token, `redirect the user to the HomePage` (FR012).
  7.  Implement `error handling` for incorrect credentials (FR017).
- **Explanation:** This allows existing users to log in and receive their authentication key (token). Storing it in `localStorage` makes their session persistent.
- **What needs to be done (Dynamic Update):**
  - **`AuthForm.jsx` / `SignInPage.jsx`:** Use `useState` for `email` and `password`. Call `api.post('/api/auth/login', { email, password })`. Store `response.data.token` in `localStorage.setItem('token', token)`. Use `useNavigate` for redirection. Display `ErrorMessage` for login failures.
- **Why it's important:** This is the core authentication flow and enables access to protected features.

---

### Phase 4: Authenticated Features & Polish (Days 9-10)

This final phase completes your application's core functionality and ensures it looks good and handles errors gracefully.

#### 4.1 Set Up Automatic Token Injection & Global Error Handling

- **Action:**
  1.  In your `src/utils/api.js` file (created in step 3.3 for token injection concept), set up your `axios` instance (or `fetch` wrapper).
  2.  Implement an `axios request interceptor`. This function will run _before_ every outgoing request. Inside it, `retrieve the token from `localStorage`and, if it exists, add it to the`Authorization` header` of the request in the `Bearer YOUR_TOKEN` format (FR016).
  3.  Implement an `axios response interceptor`. This function will run after every incoming response (or error). Use it to `catch global errors` (e.g., a 401 Unauthorized response), `clear the token from `localStorage`, and `redirect the user to the login page`.
- **Explanation:** This centralizes and automates the process of including authentication tokens in your API calls, making your component code much cleaner. It also provides a global way to handle authentication failures.
- **What needs to be done (Dynamic Update):**
  - **`src/utils/api.js`:** Configure `axios.create()`. Implement `axios.interceptors.request.use(...)` to add the token. Implement `axios.interceptors.response.use(...)` to handle global errors (like 401 redirect).
- **Why it's important:** This streamlines authenticated API interactions and ensures all protected endpoints receive the necessary authentication credentials without manual intervention.

#### 4.2 Implement Protected Routes

- **Action:**
  1.  Create your `ProtectedRoute.jsx` component.
  2.  Inside `ProtectedRoute`, `check if the authentication token exists` in `localStorage`.
  3.  If `no token is found`, use `useNavigate` to `redirect the user to the `SignInPage``.
  4.  If a `token exists`, render `children` (the component wrapped by `ProtectedRoute`).
  5.  In your `App.jsx` (or routing file), `wrap the CreateEventPage route` with your `ProtectedRoute` component (FR014).
- **Explanation:** This ensures that sensitive routes, like the "Create Event" page, can only be accessed by logged-in users.
- **What needs to be done (Dynamic Update):**
  - **`ProtectedRoute.jsx`:** Check `localStorage.getItem('token')`. Use `useNavigate`. Render `props.children` or `Redirect`.
  - **`App.jsx`:** Update the `CreateEventPage` route: `<Route path="/create-event" element={<ProtectedRoute><CreateEventPage /></ProtectedRoute>} />`.
- **Why it's important:** This is essential for securing parts of your application and guiding unauthenticated users to log in before accessing restricted features.

#### 4.3 Implement Create Event Functionality (Authenticated Form)

- **Action:**
  1.  In your `CreateEventPage`, introduce `useState` hooks for each `input field` of the event creation form (e.g., `eventName`, `description`, `date`, `location`).
  2.  Implement an `onSubmit` handler for the form.
  3.  Inside `onSubmit`, `send an HTTP POST request` to your API's `/api/events` endpoint, using the `state values` from the form. **Your automatic token injection (Phase 4.1) should ensure the token is included** (FR015).
  4.  Upon `successful event creation`, `redirect the user` (e.g., to the `HomePage` or the new event's details page).
  5.  Implement `robust error handling` (FR017) to display specific messages for validation issues or API failures.
- **Explanation:** This completes the `CREATE` part of CRUD functionality for events, allowing logged-in users to add new content.
- **What needs to be done (Dynamic Update):**
  - **`CreateEventPage.jsx`:** Use `useState` for form fields. Implement `handleChange` and `handleSubmit`. Call `api.post('/api/events', formData)`. Use `useNavigate` for redirection. Display `ErrorMessage`.
- **Why it's important:** This is a core feature that allows users to contribute data to your application.

#### 4.4 Final Error Handling & User Feedback Polish

- **Action:**
  1.  Review **every API interaction and form submission** point in your application.
  2.  Ensure that `loading states` are always shown (using your `LoadingSpinner`) when an API request is in progress.
  3.  Ensure that `error messages` are always displayed clearly (using your `ErrorMessage` component) when an API call fails or form validation issues occur.
  4.  Think about edge cases: What if an event ID in the URL is invalid? What if the server is down?
- **Explanation:** This is about making your app resilient and user-friendly. Good feedback mechanisms make a huge difference in user experience.
- **What needs to be done (Dynamic Update):**
  - Go through `HomePage`, `EventDetailsPage`, `SignUpPage`, `SignInPage`, `CreateEventPage` and confirm that `isLoading` and `error` states are managed and rendered appropriately using `LoadingSpinner` and `ErrorMessage`.
- **Why it's important:** A well-handled error experience is crucial for user satisfaction and trust.

#### 4.5 Responsive Design Refinement

- **Action:**
  1.  `Thoroughly test your application` on various screen sizes: use your browser's developer tools to simulate mobile phones, tablets, and different desktop resolutions.
  2.  Utilize **Tailwind CSS's responsive utility classes** (e.g., `sm:`, `md:`, `lg:`) to adjust layouts, font sizes, image sizes, and component visibility based on these different screen breakpoints (FR018).
- **Explanation:** Your application should look and function well regardless of the device size a user is on. Tailwind makes this efficient.
- **Why it's important:** Modern web applications must be accessible and provide a consistent user experience across all devices.

#### 4.6 Static Site Deployment

- **Action:**
  1.  `Build your React application for production`. This usually involves running a command like `npm run build` or `yarn build`. This process compiles your React code into optimized static files (HTML, CSS, JavaScript) that can be served by a web server.
  2.  Follow **Render's specific documentation** for deploying static sites. You will configure Render to serve the generated `dist` or `build` folder containing your compiled application (FR019).
- **Explanation:** This is the final step to make your application live and accessible on the internet for anyone to see and use.
- **Why it's important:** It completes the project lifecycle and allows you to showcase your work to instructors and potential employers.