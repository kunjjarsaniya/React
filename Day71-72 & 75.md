
# React Notes (Interview-Focused)

## 🔹 Class 1: Intro to React, Reconciliation, SPA vs MPA, JSX, Babel, Vite, npm

### 1. Intro to React
**Theory:**  
React is a JavaScript **library** for building **component-based UIs**. It uses a **Virtual DOM** for efficient rendering and supports **reusable components**.

**Code Structure:**
```jsx
function App() {
  return <h1>Hello, React!</h1>;
}
```

**Use Case:**  
Ideal for creating fast, scalable **Single Page Applications** with dynamic data.

**Interview Example:**  
Q: What is the Virtual DOM?  
A: A lightweight JS object that React uses to optimize DOM updates.

### 2. Reconciliation
**Theory:**  
Reconciliation is how React **diffs the new Virtual DOM with the previous** one and updates only the changed parts.

**Code Structure:**
```jsx
setCount(count + 1); // Triggers reconciliation
```

**Use Case:**  
Enhances performance by **avoiding full re-rendering**.

**Interview Example:**  
Q: How does React know what to update?  
A: Through the reconciliation algorithm using keys and Virtual DOM comparison.

### 3. SPA vs MPA
**Theory:**  
SPA: Loads only **one HTML page**, updates via JS.  
MPA: Loads **new HTML pages** from the server for each route.

**Code Structure:**
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**Use Case:**  
- SPA: Interactive dashboards.  
- MPA: SEO-oriented sites.

**Interview Example:**  
Q: How does routing work in SPA?  
A: Via React Router, which handles navigation **without page reloads**.

### 4. JSX
**Theory:**  
JSX is a **syntax extension** that looks like HTML in JS. Transpiled to `React.createElement()`.

**Code Structure:**
```jsx
const element = <h1>Hello, JSX!</h1>;
```

**Use Case:**  
Improves readability & structure of UI code.

**Interview Example:**  
Q: Can a component return multiple JSX elements?  
A: Yes, by wrapping them in a fragment: `<>...</>`.

### 5. Babel
**Theory:**  
Babel is a **JavaScript transpiler** that converts modern JS/JSX into code browsers understand.

**Use Case:**  
JSX support, backward compatibility.

**Interview Example:**  
Q: Why do we need Babel?  
A: JSX and ES6+ syntax is not directly readable by browsers.

### 6. Vite
**Theory:**  
Vite is a **fast build tool** using ES Modules and modern bundling.

**Code Structure:**
```bash
npm create vite@latest my-app --template react
```

**Use Case:**  
Fast startup, better HMR.

**Interview Example:**  
Q: CRA vs Vite?  
A: Vite is faster, modern and uses Rollup.

### 7. npm
**Theory:**  
npm is a **package manager** that installs libraries like React.

**Code Structure:**
```bash
npm install react react-dom
```

**Use Case:**  
Manages app dependencies.

**Interview Example:**  
Q: Difference between dependencies and devDependencies?  
A: `dependencies` are for production, `devDependencies` are for development.

## 🔹 Class 2: Import/Export, Boilerplate, Functional Components, Event Listeners & Handlers

### 1. Import / Export
**Theory:**  
Used to modularize and reuse code.

**Code Structure:**
```jsx
// Greet.js
export default function Greet() {
  return <h1>Hello</h1>;
}
// App.js
import Greet from './Greet';
```

**Interview Example:**  
Q: Named vs default export?  
A: Default exports can be renamed on import. Named must match exactly.

### 2. Boilerplate
**Theory:**  
Basic folder & code setup to start a React project.

**Code Structure:**
```bash
npm create vite@latest my-app --template react
```

### 3. Functional Components
**Theory:**  
JS functions that return JSX. Modern React uses this style.

**Code Structure:**
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Interview Example:**  
Q: Can functional components manage state?  
A: Yes, using hooks like `useState`.

### 4. Event Listeners & Handlers
**Theory:**  
Used for UI interactivity.

**Code Structure:**
```jsx
function ClickMe() {
  const handleClick = () => alert("Button clicked!");
  return <button onClick={handleClick}>Click Me</button>;
}
```

**Interview Example:**  
Q: How to pass parameters to handlers?  
A: Use an arrow function: `onClick={() => handleClick(id)}`

## 🔹 Class 3: State, Conditional Rendering, Lists & Keys

### 1. State
**Theory:**  
State stores **dynamic data** in a component.

**Code Structure:**
```jsx
const [count, setCount] = useState(0);
```

### 2. Conditional Rendering
**Theory:**  
Render based on conditions.

**Code Structure:**
```jsx
{isLoggedIn ? <h1>Welcome</h1> : <h1>Please Log In</h1>}
```

### 3. Lists & Keys
**Theory:**  
Render multiple elements with `.map()`, keys identify elements.

**Code Structure:**
```jsx
const fruits = ['Apple', 'Banana'];
<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>
```

## 🔹 Class 4: Forms, Controlled Components, React Hook Form, useRef

### 1. Forms & Controlled Components
**Theory:**  
Controlled inputs are tied to component state.

**Code Structure:**
```jsx
const [name, setName] = useState('');
<input value={name} onChange={(e) => setName(e.target.value)} />
```

### 2. React Hook Form
**Theory:**  
Efficient form management.

**Code Structure:**
```jsx
import { useForm } from "react-hook-form";

function MyForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <input {...register("username")} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 3. useRef
**Theory:**  
Access DOM nodes or store mutable values.

**Code Structure:**
```jsx
const inputRef = useRef();
<input ref={inputRef} />
```

## 🔹 Class 5: Code Splitting & Reusing Components

### 1. Code Splitting
**Theory:**  
Load code only when needed.

**Code Structure:**
```jsx
const LazyComp = React.lazy(() => import('./LazyComp'));
<Suspense fallback={<div>Loading...</div>}>
  <LazyComp />
</Suspense>
```

### 2. Reusing Components
**Theory:**  
Create reusable UI components with `props`.

**Code Structure:**
```jsx
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
```
