# Instructions

## Project Overview

This project is a showcase of various AI applications developed to demonstrate practical AI use cases. The website provides interactive interfaces and tools, allowing users to test and explore AI functionalities. It is designed as a portfolio to present AI development skills to potential employers.

---

## Use Cases Demonstrated

### 1. **Comparative Chat Interface**
- **Description**: Compare responses from two AI models side-by-side using a chat interface.
- **Purpose**: Evaluate model behavior and performance differences.

### 2. **RAG Demonstration**
- **Description**: Upload a document, index it into a vector database, and query it with natural language.
- **Purpose**: Showcase document-based querying and retrieval systems.

### 3. **Researcher Agent**
- **Description**: Accept a query, search for relevant studies, analyze them, and provide a summary.
- **Purpose**: Demonstrate AI-powered research capabilities.

### 4. **Scheduling Assistant**
- **Description**: Connect to a Google account, pull the weekly schedule, and provide a summary with recommendations.
- **Purpose**: Simplify and enhance schedule management with AI.

### 5. **Inspiration Finder**
- **Description**: Input personal values to retrieve aligned inspirational quotes, stored in a vector database for daily use.
- **Purpose**: Highlight personalized AI content delivery.

---

## Tech Stack

### **Frontend**
- **Framework**: Next.js 14.1.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS with additional plugins
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)

### **Backend**
- **Server-Side Logic**: Next.js API routes
- **External Integrations**:
  - Google Calendar API
  - Vector Database (Pinecone/Faiss)
  - OpenAI API

---

## Project Structure

\`\`\`
.
├── components/            # React components
├── docs/                  # Documentation
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and libraries
├── pages/                 # Next.js pages and API routes
│   ├── api/               # API routes for backend logic
│   ├── comparative-chat.tsx        # Comparative chat use case
│   ├── rag-demo.tsx                # RAG demonstration use case
│   ├── researcher-agent.tsx        # Researcher agent use case
│   ├── scheduling-assistant.tsx    # Scheduling assistant use case
│   ├── inspiration-finder.tsx      # Inspiration finder use case
├── public/                # Static assets
├── scripts/               # Build/deployment scripts
├── styles/                # Global styles
├── types/                 # TypeScript type definitions
├── .env.local             # Environment variables
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project introduction
\`\`\`

---

## Setup Instructions

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14.x or higher installed on your machine.
- **npm** or **Yarn**: Package manager installed globally.
- **Python 3.x**: Required if using Faiss for the vector database.
- **Git**: For version control.
- **Accounts and API Keys**:
  - **OpenAI API Key**: Sign up at [OpenAI](https://openai.com/) and obtain an API key.
  - **Google Cloud Account**: For Google Calendar API integration.
  - **Pinecone Account**: If using Pinecone as the vector database.
- **Google OAuth Credentials**:
  - **Google Client ID** and **Client Secret** for Google Calendar integration.
- **Environment Variables**:
  - Ensure you have all necessary environment variables ready (see below for details).

---

### Installation

1. **Clone the Repository**

   \`\`\`bash
   git clone https://github.com/your-username/ai-applications-showcase.git
   cd ai-applications-showcase
   \`\`\`

2. **Install Dependencies**

   Using npm:

   \`\`\`bash
   npm install
   \`\`\`

   Or using Yarn:

   \`\`\`bash
   yarn install
   \`\`\`

3. **Set Up Environment Variables**

   Create a \`.env.local\` file in the root directory and add the following variables:

   \`\`\`env
   # OpenAI API Key
   OPENAI_API_KEY=your_openai_api_key

   # Pinecone API (if using Pinecone)
   PINECONE_API_KEY=your_pinecone_api_key
   PINECONE_ENVIRONMENT=your_pinecone_environment

   # Google OAuth Credentials
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_REFRESH_TOKEN=your_google_refresh_token

   # Other Environment Variables as needed
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   \`\`\`

   **Note**: Replace placeholders with your actual credentials.

4. **Set Up Vector Database**

   - **Using Pinecone**:
     - Sign up at [Pinecone](https://www.pinecone.io/) and create an index.
     - Ensure your index name and configurations match those in the code.

   - **Using Faiss**:
     - Install Faiss by following the [official installation guide](https://github.com/facebookresearch/faiss/blob/main/INSTALL.md).
     - Ensure Faiss is accessible in your Python environment.

5. **Install Python Dependencies** (If Applicable)

   If the project utilizes Python scripts:

   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

6. **Configure Google Calendar API**

   - Enable the Google Calendar API in your [Google Cloud Console](https://console.cloud.google.com/).
   - Set up OAuth consent screen and create OAuth client ID credentials.
   - Obtain the \`refresh_token\` using OAuth 2.0 Playground or your preferred method.

---

## Running the Project

### Development Mode

To start the development server:

\`\`\`bash
npm run dev
\`\`\`

Or using Yarn:

\`\`\`bash
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Mode

To build and start the application in production mode:

\`\`\`bash
npm run build
npm start
\`\`\`

Or using Yarn:

\`\`\`bash
yarn build
yarn start
\`\`\`

---

## Deployment

### Build for Production

Ensure all environment variables are set appropriately for the production environment.

\`\`\`bash
npm run build
\`\`\`

### Deployment Platforms

- **Vercel**: Optimal for Next.js applications.
- **Netlify**: Supports serverless functions.
- **AWS Amplify** or **Heroku**: For custom deployment setups.

### Steps

1. **Set Up Environment Variables**

   In your hosting platform, set up the environment variables as defined in your \`.env.local\` file.

2. **Deploy the Application**

   Follow the specific deployment instructions for your chosen platform.

3. **Post-Deployment**

   - Test all functionalities, especially those involving external APIs.
   - Monitor logs for any runtime errors.

---

## Testing

### Current Status

- **Note**: Automated tests are currently not implemented.

### Recommendations

1. **Set Up Testing Frameworks**

   - **Jest**: For unit and integration tests.
   - **React Testing Library**: For component testing.
   - **Cypress** or **Playwright**: For end-to-end testing.

2. **Writing Tests**

   - **Unit Tests**: Test individual functions and components.
   - **Integration Tests**: Test interactions between modules.
   - **End-to-End Tests**: Simulate user interactions and flows.

3. **Running Tests**

   Add the following scripts to your \`package.json\` if not already present:

   \`\`\`json
   "scripts": {
     "test": "jest",
     "test:watch": "jest --watch"
   }
   \`\`\`

   Execute tests using:

   \`\`\`bash
   npm run test
   \`\`\`

   Or:

   \`\`\`bash
   yarn test
   \`\`\`

---

## Additional Notes

### Error Handling

- Implement comprehensive error handling for API requests and user inputs.
- Display user-friendly error messages.

### Logging

- Use logging libraries like **Winston** or **Log4js** for server-side logging.
- Consider setting up monitoring tools like **Sentry** for real-time error tracking.

### Code Quality

- Use **ESLint** and **Prettier** for linting and formatting.
- Ensure consistent coding standards across the project.

### Performance Optimization

- Optimize API calls to reduce latency.
- Use **React.memo** and **useCallback** to prevent unnecessary re-renders.

### Security

- Never expose API keys on the client side.
- Use environment variables and server-side API routes to secure sensitive information.

### Accessibility

- Follow **WCAG** guidelines to make the application accessible.
- Use semantic HTML and ARIA attributes where appropriate.

---

## Missing Elements and Suggestions

- **Automated Testing**: Implement unit, integration, and end-to-end tests to ensure application reliability.
- **Continuous Integration/Continuous Deployment (CI/CD)**:
  - Set up a CI/CD pipeline using **GitHub Actions**, **Travis CI**, or **CircleCI**.
  - Automate testing and deployment processes.
- **Documentation**:
  - Provide detailed documentation for each component and module.
  - Include API endpoint details and usage examples.
- **Dockerization**:
  - Create a \`Dockerfile\` and \`docker-compose.yml\` for containerization.
  - Simplify the setup process and ensure environment consistency.
- **Internationalization (i18n)**:
  - Consider implementing i18n for broader audience reach.
- **State Management Review**:
  - Evaluate if **Zustand** meets all state management needs or if **Redux** might be more suitable for complex states.
- **User Authentication and Authorization**:
  - Implement robust auth mechanisms if user data is sensitive.
  - Use libraries like **NextAuth.js** for authentication flows.
- **Scalability Considerations**:
  - Plan for scaling databases and APIs.
  - Implement caching strategies where appropriate.

---

## Contact

If you have any questions or need further assistance, please reach out to:

- **Your Name**
- **Email**: your.email@example.com
- **Phone**: +1 (123) 456-7890

---

**Note**: Ensure all third-party licenses are complied with, and consider adding a \`LICENSE\` file to the repository.