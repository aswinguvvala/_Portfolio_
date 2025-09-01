/*
 * PORTFOLIO CUSTOMIZATION GUIDE
 * =============================
 * 
 * To customize your portfolio for recruiters:
 * 
 * 1. PROJECTS (Most Important): Update the projects array below with your actual projects
 *    - Replace titles, descriptions, and MOST IMPORTANTLY the "link" URLs with your deployed projects
 *    - Add screenshots to my-portfolio/public/ folder and update img paths
 *    - Update iconLists with your technology stack icons
 * 
 * 2. HERO SECTION: Update components/Hero.tsx with your name, title, and location
 * 
 * 3. PERSONAL INFO: Update workExperience, testimonials, and socialMedia arrays below
 * 
 * 4. IMAGES: Add your project screenshots and icons to my-portfolio/public/ folder
 * 
 * Ready to deploy? Run: cd my-portfolio && npm install && npm run dev
 */

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "CosmoRAG",
      des: "Developed CosmoRAG, a full-stack AI system that uses a RAG architecture with OpenAI GPT-4 and a FAISS vector database for internal knowledge retrieval, and integrates web search for external queries. Engineered a semantic search pipeline across 2,200+ documents and a responsive, cosmic-themed UI with dynamic design and interactive documentation. Deployed on AWS EC2 with automated scripts, production monitoring, and robust error handling.",
      img: "/p1.svg",
      iconLists: ["/python.svg", "/openai.svg", "/aws.svg", "/fastapi.svg", "/vector-db.svg"],
      link: "http://18.117.163.37:8501",
    },
    {
      id: 2,
      title: "PromptCraft",
      des: "Developed an AI-powered prompt enhancement studio that optimizes user inputs for various large language models (OpenAI GPT-4, Anthropic Claude, Google Gemini, xAI Grok). Engineered a modern, responsive Streamlit user interface featuring dynamic theme toggling, simplified model selection with official branding, and enhanced result comparisons.",
      img: "/p2.svg",
      iconLists: ["/streamlit.svg", "/python.svg", "/openai.svg", "/ai.svg", "/gemini.svg"],
      link: "https://best-prompt.streamlit.app",
    },
    {
      id: 3,
      title: "Deep Research Assistant",
      des: "Built an intelligent research assistant that uses advanced AI models to analyze documents, generate insights, and provide detailed research support. Features document processing, semantic search, and intelligent summarization capabilities with a clean, modern interface for researchers and analysts.",
      img: "/p4.svg",
      iconLists: ["/streamlit.svg", "/python.svg", "/ai.svg", "/openai.svg", "/pandas.svg"],
      link: "https://deep-researc1-1.streamlit.app",
    },
    {
      id: 4,
      title: "CodeScope",
      des: "Developed a full-stack code analysis platform (CodeScope) utilizing Streamlit and Python to provide comprehensive insights into GitHub repositories, including code quality, structure, and evolution. Integrated a hybrid AI system supporting both Google Gemini and local Ollama models, enhancing file analysis with context-aware explanations and an interactive chat mentor.",
      img: "/codescope-dashboard.svg",
      iconLists: ["/streamlit.svg", "/python.svg", "/ai.svg", "/pandas.svg", "/plotly.svg", "/docker.svg"],
      link: "https://codescope.streamlit.app",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Data Scientist - DUTA",
      desc: "Architected FastAPI-based chatbot with OpenAI integration. Led development of news summarization system using T5 models, achieving 0.75 ROUGE score on 10M+ articles.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "ML Engineering - Vector DB Systems",
      desc: "Developed FAISS vector database with optimized similarity search algorithms, enabling sub-millisecond query response times for 10,000+ documents.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "AI Research - Recommendation Systems",
      desc: "Implemented collaborative filtering using TruncatedSVD and cosine similarity alongside content-based recommendation models for improved user engagement.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Data Visualization - Executive Dashboards",
      desc: "Created interactive dashboards using Plotly and Tableau to communicate complex NLP model performance metrics to non-technical stakeholders.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/aswinguvvala",
    },
    {
      id: 2,
      img: "/mail.svg",
      link: "mailto:aswinabd17@gmail.com",
    },
  ];