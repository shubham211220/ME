import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalLine {
  type: 'command' | 'output' | 'error';
  content: string;
}

export function Terminal() {
  const initialHistory: TerminalLine[] = [
    { type: 'output', content: 'Welcome to Shubham Thitame\'s Portfolio Terminal v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' },
    { type: 'output', content: '' },
  ];

  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>(initialHistory);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Record<string, { description: string; execute: () => 'CLEAR' | TerminalLine[] }> = {
    help: {
      description: 'Show available commands',
      execute: () => [
        { type: 'output' as const, content: 'Available commands:' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: '  help        - Show this help message' },
        { type: 'output' as const, content: '  whoami      - Display current user info' },
        { type: 'output' as const, content: '  skills      - View my technical skills' },
        { type: 'output' as const, content: '  projects    - See my featured projects' },
        { type: 'output' as const, content: '  contact     - Get my contact information' },
        { type: 'output' as const, content: '  experience  - View my work experience' },
        { type: 'output' as const, content: '  about       - Learn more about me' },
        { type: 'output' as const, content: '  ls          - List directory contents' },
        { type: 'output' as const, content: '  clear       - Clear the terminal' },
        { type: 'output' as const, content: '  exit        - Close terminal mode' },
        { type: 'output' as const, content: '' },
      ],
    },
    about: {
      description: 'Learn more about me',
      execute: () => [
        { type: 'output' as const, content: '╔════════════════════════════════════════════════════════════╗' },
        { type: 'output' as const, content: '║                      ABOUT ME                              ║' },
        { type: 'output' as const, content: '╚════════════════════════════════════════════════════════════╝' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: 'Name: Shubham Thitame' },
        { type: 'output' as const, content: 'Role: Backend Developer' },
        { type: 'output' as const, content: 'Location: Pune' },
        { type: 'output' as const, content: 'Experience: Fresh Graduate' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: 'I\'m a passionate developer specializing in building secure,' },
        { type: 'output' as const, content: 'scalable web applications. My journey started with curiosity' },
        { type: 'output' as const, content: 'about how systems work, leading me to explore full-stack' },
        { type: 'output' as const, content: 'development.' },
        { type: 'output' as const, content: '' },
      ],
    },
    skills: {
      description: 'View technical skills',
      execute: () => [
        { type: 'output' as const, content: '╔════════════════════════════════════════════════════════════╗' },
        { type: 'output' as const, content: '║                    SKILLS & TECH STACK                     ║' },
        { type: 'output' as const, content: '╚════════════════════════════════════════════════════════════╝' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: '[Frontend]' },
        { type: 'output' as const, content: '  ▸ React, TypeScript, Next.js, Tailwind CSS, Redux, Vue.js' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: '[Backend]' },
        { type: 'output' as const, content: '  ▸ Node.js, Express, Python, FastAPI, GraphQL, REST APIs' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: '[Database]' },
        { type: 'output' as const, content: '  ▸ PostgreSQL, MongoDB, Redis, MySQL, Supabase' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: '[Tools & DevOps]' },
        { type: 'output' as const, content: '  ▸ Git, Docker, AWS, CI/CD, Jest, Figma' },
        { type: 'output' as const, content: '' },
      ],
    },
    projects: {
      description: 'See featured projects',
      execute: () => [
        { type: 'output' as const, content: '╔════════════════════════════════════════════════════════════╗' },
        { type: 'output' as const, content: '║                   FEATURED PROJECTS                        ║' },
        { type: 'output' as const, content: '╚════════════════════════════════════════════════════════════╝' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: '1. Deforestation System' },
        { type: 'output' as const, content: '   Tech: Python, AI/ML, Satellite Imagery, GIS' },
        { type: 'output' as const, content: '   A comprehensive system for monitoring deforestation using' },
        { type: 'output' as const, content: '   satellite imagery and AI algorithms to track forest coverage.' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: '2. AI Driven Physiotherapy Monitoring System' },
        { type: 'output' as const, content: '   Tech: React, Node.js, AI/ML, IoT Sensors' },
        { type: 'output' as const, content: '   An intelligent monitoring system that uses AI to track' },
        { type: 'output' as const, content: '   patient progress in physiotherapy with real-time feedback.' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: '3. Chess.com' },
        { type: 'output' as const, content: '   Tech: React, Node.js, WebSocket, MongoDB' },
        { type: 'output' as const, content: '   A popular online chess platform offering games, tournaments,' },
        { type: 'output' as const, content: '   lessons, and community features for chess enthusiasts.' },
        { type: 'output' as const, content: '' },
      ],
    },
    contact: {
      description: 'Get contact information',
      execute: () => [
        { type: 'output' as const, content: '╔════════════════════════════════════════════════════════════╗' },
        { type: 'output' as const, content: '║                   CONTACT INFORMATION                      ║' },
        { type: 'output' as const, content: '╚════════════════════════════════════════════════════════════╝' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: '📧 Email:    thitameshubham100@gmail.com' },
        { type: 'output' as const, content: '📱 Phone:    9309764987' },
        { type: 'output' as const, content: '📍 Location: Pune, Maharashtra' },
        { type: 'output' as const, content: '🔗 GitHub:   github.com/shubhamthitame' },
        { type: 'output' as const, content: '💼 LinkedIn: linkedin.com/in/shubhamthitame' },
        { type: 'output' as const, content: '' },
      ],
    },
    experience: {
      description: 'View work experience',
      execute: () => [
        { type: 'output' as const, content: '╔════════════════════════════════════════════════════════════╗' },
        { type: 'output' as const, content: '║                   WORK EXPERIENCE                          ║' },
        { type: 'output' as const, content: '╚════════════════════════════════════════════════════════════╝' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: '▸ Backend Developer Intern @ Krushipal' },
        { type: 'output' as const, content: '  Jan 2026 - Jun 2026' },
        { type: 'output' as const, content: '  Worked as a Backend Developer, building REST APIs with Node.js' },
        { type: 'output' as const, content: '  and Express.js, implementing authentication, authorization,' },
        { type: 'output' as const, content: '  and MongoDB integrations.' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: '▸ Intern @ C-DSP' },
        { type: 'output' as const, content: '  Jun 2022 - Aug 2022' },
        { type: 'output' as const, content: '  Gained hands-on experience with AWS cloud services, including' },
        { type: 'output' as const, content: '  EC2 for virtual machine hosting and S3 for scalable cloud storage.' },
        { type: 'output' as const, content: '  Used Git for version control and collaborated on internal' },
        { type: 'output' as const, content: '  cloud-based projects following basic DevOps principles.' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: '▸ Senior Full Stack Developer @ TechCorp' },
        { type: 'output' as const, content: '  2021 - Present' },
        { type: 'output' as const, content: '  Leading development of enterprise applications' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: '▸ Full Stack Developer @ StartupXYZ' },
        { type: 'output' as const, content: '  2019 - 2021' },
        { type: 'output' as const, content: '  Built scalable web applications from scratch' },
        { type: 'output' as const, content: '' },
        { type: 'output' as const, content: '▸ Junior Developer @ WebAgency' },
        { type: 'output' as const, content: '  2018 - 2019' },
        { type: 'output' as const, content: '  Developed client websites and web applications' },
        { type: 'output' as const, content: '' },
      ],
    },
    whoami: {
      description: 'Display current user info',
      execute: () => [
        { type: 'output' as const, content: 'Name: Shubham Thitame' },
        { type: 'output' as const, content: 'Role: Backend Developer' },
        { type: 'output' as const, content: 'Location: Pune' },
        { type: 'output' as const, content: 'Experience: Fresh Graduate' },
        { type: 'output' as const, content: '' },
      ],
    },
    ls: {
      description: 'List directory contents',
      execute: () => [
        { type: 'output' as const, content: 'about.txt    skills.json    projects/    contact.md' },
        { type: 'output' as const, content: 'experience/  resume.pdf     portfolio/   blog/' },
        { type: 'output' as const, content: '' },
      ],
    },
    clear: {
      description: 'Clear terminal',
      execute: () => 'CLEAR',
    },
    exit: {
      description: 'Close terminal mode',
      execute: () => 'EXIT',
    },
  };

  useEffect(() => {
    if (terminalRef.current) {
      // Use setTimeout to ensure DOM is updated
      setTimeout(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTo({
            top: terminalRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 0);
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    setHistory((prev) => [...prev, { type: 'command', content: `$ ${cmd}` }]);

    if (!trimmedCmd) {
      setHistory((prev) => [...prev, { type: 'output', content: '' }]);
      return;
    }

    if (commands[trimmedCmd as keyof typeof commands]) {
      const result = commands[trimmedCmd as keyof typeof commands].execute();
      if (result === 'CLEAR') {
        setHistory([]);
      } else if (result === 'EXIT') {
        window.location.href = '/';
        return;
      } else {
        setHistory((prev) => [...prev, ...result]);
      }
    } else {
      setHistory((prev) => [
        ...prev,
        { type: 'error', content: `Command not found: ${trimmedCmd}` },
        { type: 'output', content: 'Type "help" to see available commands.' },
        { type: 'output', content: '' },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setCommandHistory((prev) => [...prev, input]);
      setHistoryIndex(-1);
      handleCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-cyan-400 p-4 font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Terminal Header */}
        <div className="bg-gray-900 border-2 border-cyan-400 rounded-t-lg p-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <TerminalIcon className="w-4 h-4" />
            <span className="text-sm">Abhi@Portfolio:~$</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          className="bg-black border-2 border-t-0 border-cyan-400 rounded-b-lg p-6 h-[calc(100vh-180px)] overflow-y-auto"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, index) => (
            <div
              key={index}
              className={`mb-1 ${
                line.type === 'command'
                  ? 'text-blue-400'
                  : line.type === 'error'
                  ? 'text-red-400'
                  : 'text-gray-300'
              }`}
            >
              {line.content}
            </div>
          ))}

          {/* Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
            <span className="text-blue-400">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-cyan-400 caret-cyan-400"
              autoFocus
              spellCheck={false}
            />
            <span className="animate-pulse text-cyan-400">▊</span>
          </form>
        </div>

        {/* Terminal Footer */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Pro tip: Use ↑ and ↓ arrow keys to navigate command history</p>
        </div>
      </div>
    </div>
  );
}