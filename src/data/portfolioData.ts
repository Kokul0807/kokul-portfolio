import { Project, SkillDetail, CodeDemo } from '../types';

export const PERSONAL_INFO = {
  name: "A. Kokul prasanth",
  title: "Full stack developer",
  heroSubtitle: "Building clean, scalable web solutions & high-performance applications",
  aboutMe: "I am a passionate developer dedicated to building efficient and scalable web solutions.",
  whatIDo: "I specialize in crafting seamless user experiences and robust server-side applications.",
  quote: "Code is poetry that breathes life into digital architecture.",
  secondaryQuote: "The grid system is an aid, not a guarantee.",
  location: "India • Available Globally",
  email: "kokulanand7@gmail.com",
  phone: "+91 98765 43210",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  stats: [
    { label: "Core Skills", value: "5+" },
    { label: "Scalable Projects", value: "12+" },
    { label: "Algorithms Solved", value: "350+" },
    { label: "Code Quality", value: "99%" },
  ],
  defaultPortrait: "assets/hero-portrait.jpg",
  cyberFigure: "/src/assets/images/cyber_bot_figure_1789997611120.jpg",
  curiousCube: "/src/assets/images/curious_cube_1789997629827.jpg",
  craftDesign: "/src/assets/images/red_craft_design_1789997646394.jpg",
};

export const SKILLS_DATA: SkillDetail[] = [
  {
    name: "C++",
    category: "core",
    proficiency: 90,
    experienceLevel: "Advanced",
    description: "Object-oriented design, STL, pointers & memory management, high-performance algorithmic computing, and data structures.",
    highlightProjects: ["High-Performance Task Engine", "Algorithm Visualizer"],
    icon: "Terminal",
  },
  {
    name: "Python",
    category: "backend",
    proficiency: 92,
    experienceLevel: "Advanced",
    description: "Full stack backend development, REST APIs, asynchronous scripting, automation, microservices, and data processing.",
    highlightProjects: ["Scalable E-Commerce Backend", "Task Dispatcher"],
    icon: "Code2",
  },
  {
    name: "Java",
    category: "backend",
    proficiency: 88,
    experienceLevel: "Advanced",
    description: "Enterprise backend architecture, OOP paradigms, multithreading, robust API development, and secure authentication systems.",
    highlightProjects: ["Enterprise Auth Gateway", "Multi-tier Banking API"],
    icon: "Cpu",
  },
  {
    name: "HTML5",
    category: "frontend",
    proficiency: 95,
    experienceLevel: "Expert",
    description: "Semantic web architecture, accessible DOM hierarchy, SEO optimization, and progressive web structure.",
    highlightProjects: ["Interactive Web Studio", "Modern Portfolio System"],
    icon: "Layout",
  },
  {
    name: "CSS3",
    category: "frontend",
    proficiency: 94,
    experienceLevel: "Expert",
    description: "Modern layout systems (Flexbox, CSS Grid), responsive breakpoints, fluid typography, transitions, and keyframe animations.",
    highlightProjects: ["Sleek E-Commerce UI", "Responsive Dashboard"],
    icon: "Palette",
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Full Stack E-Commerce Engine",
    category: "Full Stack",
    description: "A production-ready scalable e-commerce platform engineered with robust server-side endpoints, dynamic product filtering, cart checkout flow, and fluid responsive UI.",
    tags: ["Python", "HTML", "CSS", "REST API", "Database"],
    featured: true,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Engineered backend RESTful API in Python with sub-50ms query response times",
      "Crafted responsive and modern UI using pure HTML5 and semantic CSS3",
      "Implemented seamless cart state management, checkout validation, and product search",
      "Architected secure session verification and automated inventory tracking"
    ],
    codeSnippet: {
      language: "Python",
      code: `class OrderProcessor:
    def __init__(self, inventory_service, payment_gateway):
        self.inventory = inventory_service
        self.payment = payment_gateway

    async def execute_checkout(self, user_id: str, cart_items: list):
        if not await self.inventory.reserve_stock(cart_items):
            raise OutOfStockError("Selected items are unavailable")
        
        charge_result = await self.payment.process_charge(user_id, cart_items)
        return {"status": "SUCCESS", "tx_id": charge_result.id}`
    }
  },
  {
    id: "task-engine-cpp",
    title: "High-Performance Concurrency Engine",
    category: "Systems & Core",
    description: "A multithreaded asynchronous task scheduler written in modern C++ utilizing worker thread pools, priority queues, and atomic synchronization primitives for high-throughput computation.",
    tags: ["C++", "Multithreading", "Data Structures", "Algorithms"],
    featured: true,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Designed lock-free concurrent queue reducing thread contention by 65%",
      "Implemented RAII memory management ensuring 0% memory leaks during stress testing",
      "Benchmarked throughput processing 100,000 tasks/second on multicore architectures",
      "Optimized cache-friendly data layouts for rapid cache-hit execution"
    ],
    codeSnippet: {
      language: "C++",
      code: `#include <iostream>
#include <vector>
#include <thread>
#include <future>

template<typename T>
class ThreadPool {
    std::vector<std::thread> workers;
    std::atomic<bool> stop{false};
public:
    ThreadPool(size_t threads) {
        for(size_t i = 0; i < threads; ++i)
            workers.emplace_back([this] { /* Process queue */ });
    }
    ~ThreadPool() { stop = true; for(auto& t : workers) t.join(); }
};`
    }
  },
  {
    id: "auth-gateway-java",
    title: "Enterprise Secure Auth & Gateway",
    category: "Backend & Systems",
    description: "A resilient backend service built in Java managing stateless authentication tokens, role-based authorization (RBAC), and distributed rate-limiting for high-traffic APIs.",
    tags: ["Java", "Security", "Microservices", "REST API"],
    featured: true,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Architected token authentication with cryptographic signature verification",
      "Built hierarchical role management granting granular route permissions",
      "Integrated sliding-window rate limiting preventing denial-of-service vectors",
      "Developed comprehensive unit tests attaining 94% code coverage"
    ],
    codeSnippet: {
      language: "Java",
      code: `public class SecurityFilter implements HttpFilter {
    private final TokenVerifier tokenVerifier;

    @Override
    public Response filter(HttpRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return Response.status(401).entity("Unauthorized").build();
        }
        UserContext ctx = tokenVerifier.validate(authHeader.substring(7));
        return request.proceedWith(ctx);
    }
}`
    }
  },
  {
    id: "algorithm-visualizer",
    title: "Interactive Algorithm & DSA Studio",
    category: "Frontend & Core",
    description: "A dynamic web application visualizing graph traversals, sorting mechanics, and tree structures in real-time with step-by-step playback and time complexity comparisons.",
    tags: ["C++", "Java", "HTML", "CSS", "Canvas"],
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Visualized Dijkstra, A* search, Quicksort, and Red-Black tree rebalancing",
      "Constructed interactive controls: playback speed, custom arrays, and step-through debugger",
      "Rendered crisp high-DPI canvas animations with zero frame drops at 60fps",
      "Paired with algorithmic explanations and asymptotic complexity charts"
    ]
  },
  {
    id: "modern-ui-showcase",
    title: "Modern Component & Design System",
    category: "Frontend",
    description: "An accessible, responsive UI component library built from scratch with pure HTML5 and semantic CSS3 featuring fluid grid layouts, micro-interactions, and dark mode themes.",
    tags: ["HTML", "CSS", "Responsive Design", "UI/UX"],
    featured: false,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Engineered flexible CSS Grid & Flexbox system responsive across all viewport sizes",
      "Passes WCAG 2.1 AA accessibility standards with high-contrast color palettes",
      "Optimized performance with zero runtime layout shifts (CLS 0.00)",
      "Implemented modular custom CSS variables for effortless theming"
    ]
  }
];

export const CODE_DEMOS: CodeDemo[] = [
  {
    id: "cpp-demo",
    title: "C++ High Performance Vector Search",
    language: "cpp",
    description: "Memory-efficient vector algorithm demonstrating modern C++ pointer semantics and fast algorithmic computation.",
    code: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> data = {12, 45, 78, 23, 89, 56, 91, 34};
    std::sort(data.begin(), data.end());
    
    int target = 78;
    bool found = std::binary_search(data.begin(), data.end(), target);
    
    std::cout << "Target " << target << (found ? " found!" : " not found.") << "\\n";
    std::cout << "Sorted buffer: [";
    for(size_t i = 0; i < data.size(); ++i) {
        std::cout << data[i] << (i < data.size()-1 ? ", " : "");
    }
    std::cout << "]\\n";
    return 0;
}`,
    output: `Target 78 found!
Sorted buffer: [12, 23, 34, 45, 56, 78, 89, 91]
Process finished with exit code 0 (Execution time: 0.84ms)`
  },
  {
    id: "python-demo",
    title: "Python Scalable Async Web Server",
    language: "python",
    description: "Asynchronous server handler illustrating Python's clean concurrency model and efficient request routing.",
    code: `import asyncio
import json

async def handle_request(client_id: str, endpoint: str):
    print(f"[API] Inbound request from {client_id} -> {endpoint}")
    await asyncio.sleep(0.05) # Simulated non-blocking I/O
    return {
        "status": 200,
        "client": client_id,
        "payload": "Scalable web solutions built with efficiency."
    }

async def main():
    tasks = [handle_request(f"client_{i}", "/api/v1/data") for i in range(1, 4)]
    results = await asyncio.gather(*tasks)
    print(json.dumps(results, indent=2))

asyncio.run(main())`,
    output: `[API] Inbound request from client_1 -> /api/v1/data
[API] Inbound request from client_2 -> /api/v1/data
[API] Inbound request from client_3 -> /api/v1/data
[
  {"status": 200, "client": "client_1", "payload": "Scalable web solutions built with efficiency."},
  {"status": 200, "client": "client_2", "payload": "Scalable web solutions built with efficiency."},
  {"status": 200, "client": "client_3", "payload": "Scalable web solutions built with efficiency."}
]`
  },
  {
    id: "java-demo",
    title: "Java Robust Architecture & OOP",
    language: "java",
    description: "Enterprise object-oriented pattern demonstrating clean separation of concerns and type-safe server architecture.",
    code: `public class WebServiceApp {
    interface WebEngine {
        void dispatch(String route);
    }

    static class ScalableEngine implements WebEngine {
        private final String developerName;

        public ScalableEngine(String name) {
            this.developerName = name;
        }

        @Override
        public void dispatch(String route) {
            System.out.println("Executing route: " + route + " | Maintainer: " + developerName);
            System.out.println("Status: 200 OK | Memory Pool: Clean | Threads: Active");
        }
    }

    public static void main(String[] args) {
        WebEngine engine = new ScalableEngine("A. Kokul prasanth");
        engine.dispatch("/v1/system/health");
    }
}`,
    output: `Executing route: /v1/system/health | Maintainer: A. Kokul prasanth
Status: 200 OK | Memory Pool: Clean | Threads: Active
JVM Heap utilization: 4.2 MB / 512 MB`
  },
  {
    id: "html-css-demo",
    title: "HTML5 Semantic Structure & Modern CSS3",
    language: "html-css",
    description: "Modern CSS Grid styling with responsive typography and fluid micro-interactions.",
    code: `<!-- Semantic Web Architecture -->
<article class="portfolio-card">
  <header class="card-header">
    <span class="badge">Full Stack Developer</span>
    <h3>A. Kokul prasanth</h3>
  </header>
  <p class="quote">
    "Code is poetry that breathes life into digital architecture."
  </p>
</article>

<style>
.portfolio-card {
  display: grid;
  gap: 1.25rem;
  padding: 2rem;
  background: #12131a;
  border: 1px solid rgba(255, 51, 68, 0.25);
  border-radius: 14px;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.portfolio-card:hover {
  transform: translateY(-4px);
  border-color: #ff3344;
}
</style>`,
    output: `DOM Tree: Parsed successfully
CSS Box Model: 100% compliant with W3C specs
Contrast Ratio: 14.2:1 (Passes AAA standards)
Render time: 1.2ms`
  }
];
