# Product Requirements Document (PRD)

## 1. Executive Summary

This document outlines the requirements for the **AI Applications Showcase** project—a web-based portfolio demonstrating various practical AI use cases. The primary goal is to showcase AI development skills to potential employers by providing interactive interfaces that allow users to explore and test different AI functionalities.

---

## 2. Objectives and Goals

### Business Goals

- **Increase Portfolio Visibility**: Attract potential employers by showcasing technical expertise in AI development.
- **Demonstrate Practical AI Applications**: Provide real-world examples of AI use cases.
- **Facilitate User Engagement**: Encourage users to interact with the applications, increasing time spent on the portfolio.

### User Goals

- **Interactive Exploration**: Allow users to test AI functionalities in an intuitive environment.
- **Educational Value**: Help users understand different AI models and their applications.
- **Personalization**: Provide personalized content based on user inputs.

### Technical Goals

- **Scalability**: Build a scalable application that can handle multiple users simultaneously.
- **Maintainability**: Write clean, modular code for easy updates and maintenance.
- **Performance**: Ensure quick response times for a seamless user experience.

---

## 3. User Personas and User Stories

### User Personas

1. **Hiring Manager Mary**
   - **Age**: 35
   - **Role**: Tech company hiring manager
   - **Needs**: Wants to assess the technical skills of potential candidates.
   - **Pain Points**: Limited time to evaluate portfolios; needs quick insights into candidate capabilities.

2. **Developer Dan**
   - **Age**: 28
   - **Role**: Software developer interested in AI
   - **Needs**: Looking to learn about practical AI applications.
   - **Pain Points**: Overwhelmed by theoretical content; prefers interactive learning.

### User Stories

1. **Comparative Chat Interface**

   - *As Hiring Manager Mary, I want to compare responses from two AI models side by side so that I can evaluate the candidate's understanding of different AI technologies.*

2. **RAG Demonstration**

   - *As Developer Dan, I want to upload a document and ask questions about it so that I can see how AI can assist in information retrieval.*

3. **Researcher Agent**

   - *As a student, I want to input a research topic and receive a summary of relevant studies so that I can save time on literature reviews.*

4. **Scheduling Assistant**

   - *As a busy professional, I want to sync my calendar and get schedule recommendations so that I can manage my time more effectively.*

5. **Inspiration Finder**

   - *As an individual seeking motivation, I want to receive daily inspirational quotes aligned with my values so that I can stay inspired.*

---

## 4. Functional Requirements

### 4.1 Comparative Chat Interface

- **FR1**: The system shall allow users to input a query into a chat interface.
- **FR2**: The system shall display responses from two different AI models side by side.
- **FR3**: The system shall log user interactions for analysis.

**Acceptance Criteria**

- Users can input text and receive two responses within 2 seconds.
- Responses are correctly attributed to their respective AI models.

### 4.2 RAG Demonstration

- **FR4**: The system shall allow users to upload documents in PDF and DOCX formats.
- **FR5**: The system shall index the uploaded document into a vector database.
- **FR6**: The system shall enable users to query the document using natural language.

**Acceptance Criteria**

- Uploaded documents are processed and indexed without errors.
- Queries return accurate information from the uploaded document.

### 4.3 Researcher Agent

- **FR7**: The system shall accept research topics as input.
- **FR8**: The system shall search for relevant studies and articles online.
- **FR9**: The system shall provide a summarized report of findings.

**Acceptance Criteria**

- Summaries are generated within 5 seconds.
- Summaries include at least three relevant studies or articles.

### 4.4 Scheduling Assistant

- **FR10**: The system shall allow users to authenticate with their Google account.
- **FR11**: The system shall retrieve the user's weekly schedule from Google Calendar.
- **FR12**: The system shall provide a summary and recommendations based on the schedule.

**Acceptance Criteria**

- Users can successfully log in with their Google account.
- Schedule summaries are accurate and include actionable recommendations.

### 4.5 Inspiration Finder

- **FR13**: The system shall allow users to input personal values.
- **FR14**: The system shall retrieve inspirational quotes aligned with those values.
- **FR15**: The system shall store quotes in a vector database for future use.

**Acceptance Criteria**

- Users receive a daily quote that aligns with their inputted values.
- Quotes are retrieved and displayed correctly.

---

## 5. Non-Functional Requirements

### Performance

- **NFR1**: System should respond to user inputs within 2 seconds for most operations.
- **NFR2**: The Researcher Agent summaries should be generated within 5 seconds.

### Security

- **NFR3**: All user data must be encrypted in transit (HTTPS) and at rest.
- **NFR4**: API keys and sensitive credentials must not be exposed on the client side.

### Usability

- **NFR5**: The interface should be intuitive and require no training.
- **NFR6**: The application should comply with WCAG 2.1 AA accessibility standards.

### Scalability

- **NFR7**: The system should handle up to 1,000 concurrent users without performance degradation.

### Maintainability

- **NFR8**: Code should be modular with proper documentation for ease of maintenance.

---

## 6. Success Metrics and KPIs

- **User Engagement**
  - **KPI1**: Average session duration should be at least 5 minutes.
  - **KPI2**: Number of interactions per session should average at least 3.

- **Performance Metrics**
  - **KPI3**: Average response time for user queries should be under 2 seconds.
  - **KPI4**: System uptime should be 99.9%.

- **Error Rates**
  - **KPI5**: API call failure rate should be less than 1%.

---

## 7. Assumptions and Constraints

### Assumptions

- Users will have access to modern web browsers (Chrome, Firefox, Safari, Edge).
- The OpenAI API and other external services will remain accessible and stable.
- Users have a stable internet connection.

### Constraints

- **Budgetary Constraints**: Limited budget for third-party APIs and services.
- **Time Constraints**: Project must be completed within 3 months.
- **Resource Constraints**: Limited to a two-person development team.

---

## 8. Timeline and Milestones

### Phase 1: Planning and Setup (Weeks 1-2)

- **Milestone 1**: Finalize PRD and project plan.
- **Milestone 2**: Set up development environment and repository.

### Phase 2: Core Development (Weeks 3-6)

- **Milestone 3**: Develop Comparative Chat Interface.
- **Milestone 4**: Implement RAG Demonstration and Researcher Agent.

### Phase 3: Advanced Features (Weeks 7-8)

- **Milestone 5**: Develop Scheduling Assistant and Inspiration Finder.
- **Milestone 6**: Integrate all features and perform initial testing.

### Phase 4: Testing and QA (Weeks 9-10)

- **Milestone 7**: Conduct unit, integration, and end-to-end testing.
- **Milestone 8**: Fix bugs and optimize performance.

### Phase 5: Deployment and Feedback (Weeks 11-12)

- **Milestone 9**: Deploy to production environment.
- **Milestone 10**: Collect user feedback and make final adjustments.

---

## 9. Risk Analysis and Mitigation Strategies

### Risk 1: **API Rate Limits**

- **Likelihood**: Medium
- **Impact**: High
- **Mitigation**: Implement caching and optimize API calls; consider upgrading API plans if necessary.

### Risk 2: **Data Privacy Concerns**

- **Likelihood**: High
- **Impact**: High
- **Mitigation**: Ensure compliance with GDPR and other data protection regulations; obtain user consent for data usage.

### Risk 3: **Project Delays**

- **Likelihood**: Medium
- **Impact**: Medium
- **Mitigation**: Regular progress reviews; adjust timelines as needed; prioritize critical features.

### Risk 4: **Third-Party Service Downtime**

- **Likelihood**: Low
- **Impact**: High
- **Mitigation**: Implement fallback mechanisms; monitor service statuses; have alternative services in place.

---

## 10. Stakeholder Roles and Responsibilities

- **Lead Developer (You)**
  - Project management
  - Core development of features
  - Code reviews and integration

- **Dev Partner**
  - Development of specific modules (e.g., testing frameworks, deployment scripts)
  - Assist with backend integrations
  - Write automated tests

- **Advisor/Mentor**
  - Provide guidance on best practices
  - Review architecture and design decisions

---

## 11. Appendices

### Appendix A: Tech Stack Details

- **Frontend**
  - Next.js 14.1.3
  - TypeScript
  - Tailwind CSS with plugins
  - Zustand for state management
  - TanStack Query for data fetching

- **Backend**
  - Next.js API routes
  - Integrations:
    - OpenAI API
    - Google Calendar API
    - Vector databases (Pinecone/Faiss)

### Appendix B: Project Structure

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

## 12. Setup Instructions

### Prerequisites

- **Node.js**: Version 14.x or higher.
- **npm** or **Yarn**: Package manager.
- **Python 3.x**: Required for Faiss (if used).
- **Git**: Version control.
- **Accounts and API Keys**:
  - OpenAI API Key
  - Google Cloud Account for Calendar API
  - Pinecone Account (if used)
- **Google OAuth Credentials**:
  - Client ID and Client Secret
- **Environment Variables**: As detailed below.

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

   Create a \`.env.local\` file in the root directory:

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

4. **Set Up Vector Database**

   - **Pinecone**:
     - Sign up and create an index.
     - Match index configurations with the code.

   - **Faiss**:
     - Install following the [official guide](https://github.com/facebookresearch/faiss/blob/main/INSTALL.md).

5. **Install Python Dependencies** (If Applicable)

   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

6. **Configure Google Calendar API**

   - Enable API in [Google Cloud Console](https://console.cloud.google.com/).
   - Set up OAuth consent and credentials.
   - Obtain \`refresh_token\`.

---

## 13. Running the Project

### Development Mode

\`\`\`bash
npm run dev
\`\`\`

Or:

\`\`\`bash
yarn dev
\`\`\`

Access at [http://localhost:3000](http://localhost:3000).

### Production Mode

\`\`\`bash
npm run build
npm start
\`\`\`

Or:

\`\`\`bash
yarn build
yarn start
\`\`\`

---

## 14. Deployment

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Deployment Platforms

- **Vercel**
- **Netlify**
- **AWS Amplify**
- **Heroku**

### Steps

1. **Set Up Environment Variables** on the hosting platform.
2. **Deploy the Application** following platform guidelines.
3. **Post-Deployment**: Test all features and monitor logs.

---

## 15. Testing

### Current Status

- Automated tests are not yet implemented.

### Recommendations

1. **Set Up Testing Frameworks**

   - **Jest**
   - **React Testing Library**
   - **Cypress** or **Playwright**

2. **Writing Tests**

   - **Unit Tests**
   - **Integration Tests**
   - **End-to-End Tests**

3. **Running Tests**

   Add to \`package.json\`:

   \`\`\`json
   "scripts": {
     "test": "jest",
     "test:watch": "jest --watch"
   }
   \`\`\`

   Run:

   \`\`\`bash
   npm run test
   \`\`\`

---

## 16. Additional Notes

### Error Handling

- Implement comprehensive error handling.
- Display user-friendly error messages.

### Logging

- Use **Winston** or **Log4js**.
- Consider **Sentry** for monitoring.

### Code Quality

- Use **ESLint** and **Prettier**.
- Follow consistent coding standards.

### Performance Optimization

- Optimize API calls.
- Use **React.memo** and **useCallback**.

### Security

- Do not expose API keys.
- Secure sensitive information server-side.

### Accessibility

- Comply with **WCAG 2.1** guidelines.
- Use semantic HTML and ARIA attributes.

---

## 17. Contact

For questions or assistance:

- **Your Name**
- **Email**: your.email@example.com
- **Phone**: +1 (123) 456-7890

---

**Note**: Ensure compliance with all third-party licenses and consider adding a \`LICENSE\` file to the repository.