## Branch: main

- Read and understand the project requirments
- Clone, Setup, and test the API project locally
- Using detailed implementaion plan from Farida "https://github.com/FaridaBarkenkhoyeva/instructionsEventProject"
- Create wireframe
- Create react app with vite
- Install and test daisyui
- Stage and commit changes
- Implementing task 2.1 from the plan file:
    1. update the task by starting with installing react-router: ``` npm i react-router```
    2. import and use the router in main.jsx file: 
    ``` import { BrowserRouter } from "react-router";
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ```
    3. Created pages to be associated with routes later (home, create-event, sign up/in)
    4. Create Routes and Route for the pages:
    ```<Routes>
        <Route path='/' element={<Home />} />
        </Routes>
      ```
    5. Test routes and pages
    6. stage, commit, and push the changes to github
    7. Switch to main branch
    
  ## Branch: Layout
- Implementing task 2.2 from the plan file:
  1. Create layout folder in src
  2. Create Header and Footer components
  3. Use daisyUi for footer and header
  4. Integrate footer and header into the app.jsx
  5. Created links <Link> from react-router for pages in header
  6. stage, commit, and push the changes to github
  7. Switch to main branch

  ## Branch: Components
  - Implementing task 2.3 form plan:
  1. Creating a showcase example 'button' in components folder
  2. Create eventCard components with props and test it from home page
  3. Create auth form in components for login and register "props needs to be updated later"
  4. Style auth pages
  5. stage, commit, and push the changes to github
  6. Switch to main branch

    ## Branch: fetch
  - Implementing task 3.1 form plan:
    1. creating dummy data and render it from home page
    2. setup home page with states and use effect
    3. install axios: npm i axios
    4. call the api and store the results in states
    5. render the dynamic data on home page
    6. CUT THE IMPLEMENTATION AND JUMP TO AUTH-INTRO BRANCH & TASK

## Branch: authIntro:
- Implementing fast introduction into auth with routes and api
  1. create protected route 'nested'
  2. craete protectedRoute component in components folder
  3. assign create-event to protectedRoute component
  4. get token from api/auth/login call





  

- 
