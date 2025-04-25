# **🔴🟠🟡 Node.JS Installation Guide & Packages**

Here's a step-by-step guide to installing Node.js on different operating systems:

1. **Go to the official website**: [https://nodejs.org](https://nodejs.org/)
2. **Choose a version**:
   - **LTS (Long-Term Support)** → Recommended for most users.
   - **Current** → Has the latest features but may be unstable.
3. **Download the installer** for your operating system:
   - **Windows**: `.msi`
   - **Mac**: `.pkg`
   - **Linux**: `.tar.xz`
4. **Run the installer** and follow the on-screen instructions.

### **❏❏❏  Verify Installation**

```bash
node -v   # Check Node.js version
npm -v    # Check npm version
```

## **🟪🟦🟩 Create a New Project**

Open the terminal and type this command with your project name:

```bash
mkdir my-project && cd my-project
```

Then, open the project folder with VS Code:

```bash
code .
```

## **🟪🟦🟩 Initialize NPM in the Project**

Open a terminal in your project folder (Ctrl + ` in VS Code).

```bash
npm init -y
```

### **❏❏❏  Create an `index.js` example file**

```javascript
// dependencies
const http = require("http");

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleRequest);
  server.listen(app.config.port, () => {
    console.log(`Server is running on port ${app.config.port}`);
  });
};

// handle request response
app.handleRequest = (req, res) => {
  res.end("Hello World");
};

// start server
app.createServer();
```

## **🟪🟦🟩 Run the Server**

Modify the `package.json` file in your project and update the **scripts section**:

```json
"scripts": {
    "dev": "node index.js",
    "build": "node index.js"
},
```

To run the **Node.js server**, execute the following command:

```bash
npm run dev   # Development Mode
npm run build # Production Mode
```

Open `http://localhost:3000/` in a browser to see the output.

---

# **🔴🟠🟡 Recommended: Nodemon (VSCode Plugin)**

Nodemon automatically restarts your **Node.js** app when file changes are detected.

Open a terminal in your project folder (Ctrl + ` in VS Code).

```bash
npm install -g nodemon
```

Modify the `package.json` file in your project and update the **scripts section**:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
},
```

Run with:

```bash
npm run dev
```

---

# **🔴🟠🟡 VS Code - Debug Configuration**

To debug with **Nodemon** in VS Code:

## **🟪🟦🟩 Create VS Code Debug Configuration**

1. Open **VS Code**.
2. Go to **Run and Debug** (`Ctrl + Shift + D`).
3. Click **"create a `launch.json` file"**.
4. Select **"Node.js"**.
5. Replace the content of `launch.json` with:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch with Nodemon",
      "runtimeExecutable": "nodemon",
      "program": "${workspaceFolder}/app.js",
      "restart": true,
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

Save the file.

## **🟪🟦🟩 Test and Debug**

- Place a **console.log()** in your `app.js` file.
- Modify and **save** the file to check if Nodemon **automatically restarts**.
- Start debugging in VS Code using **F5**.

---

# **🔴🟠🟡 Essential Node.JS Packages**

| Package Name     | Description                          | Install Command                    |
| ---------------- | ------------------------------------ | ---------------------------------- |
| **express**      | Web framework for Node.js            | `npm install express`              |
| **nodemon**      | Auto-restarts server on file changes | `npm install -g nodemon`           |
| **dotenv**       | Loads environment variables          | `npm install dotenv`               |
| **cors**         | Enables CORS                         | `npm install cors`                 |
| **mongoose**     | MongoDB ODM                          | `npm install mongoose`             |
| **mysql2**       | MySQL driver                         | `npm install mysql2`               |
| **pg**           | PostgreSQL client                    | `npm install pg`                   |
| **bcrypt**       | Password hashing                     | `npm install bcrypt`               |
| **jsonwebtoken** | JWT authentication                   | `npm install jsonwebtoken`         |
| **multer**       | File uploads                         | `npm install multer`               |
| **axios**        | HTTP client                          | `npm install axios`                |
| **socket.io**    | WebSockets                           | `npm install socket.io`            |
| **jest**         | Testing framework                    | `npm install --save-dev jest`      |
| **supertest**    | HTTP testing                         | `npm install --save-dev supertest` |
| **eslint**       | JavaScript linter                    | `npm install eslint --save-dev`    |

---

## **🟪🟦🟩 Update NPM (if needed):**

Sometimes, the installed npm version isn't the latest. Update it:

```bash
npm install -g npm@latest
```

---

# **🔴🟠🟡 Useful NPM Commands**

| Command                    | Description                         |
| -------------------------- | ----------------------------------- |
| `npm install <package>`    | Installs a package locally          |
| `npm install -g <package>` | Installs a package globally         |
| `npm uninstall <package>`  | Removes a package                   |
| `npm update`               | Updates all installed packages      |
| `npm list`                 | Lists installed packages            |
| `npm run <script>`         | Runs a script from `package.json`   |
| `npm audit`                | Checks for security vulnerabilities |

---

# **🔴🟠🟡 Update Node.js Version**

### **🛠️ Using `nvm` (Node Version Manager) – Recommended**

#### **For macOS/Linux (using nvm):**

```bash
nvm install-latest-npm
nvm install node
nvm use node
node -v
```

#### **For Windows (using nvm-windows)**

```bash
nvm install latest
nvm use latest
node -v
```

#### **Using Homebrew (macOS)**

```bash
brew update
brew upgrade node
node -v
```

#### **Using apt (Debian/Ubuntu)**

```bash
sudo apt update && sudo apt upgrade
sudo apt install nodejs npm
node -v
```

---

# 📌 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# **🤝 Contributing**

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# **📞 Contact**

For support or inquiries, email us at [support@example.com](mailto:support@example.com).
