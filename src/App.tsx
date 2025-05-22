import { useState } from 'react';
import SimulatorTab from './components/SimulatorTab';
import Homework from './components/Homework';
import { Beaker, BookOpen, FileText } from 'lucide-react';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import BuildAtom from './components/Concept/BuildAtom';
import Doubts from './components/Doubts';
import AtomQuiz from './components/Quiz/AtomQuiz';
import AtomSimulator from './components/SimulatorTab/AtomSimulator';
import WavesQuiz from './components/Quiz/WavesQuiz';
import ChemQuiz from './components/Quiz/ChemQuiz';
import Sample from './components/Concept/Sample';

function App() {
  const [showTabs, setShowTabs] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  // const sendMessage = async () => {
  //   const response = await fetch("http://localhost:3000/chat", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ message: "তুমি কেমন আছো?" }),
  //   });

  //   const data = await response.json();
  //   console.log("Gemini বলছে:", data.reply);
  // };
  // sendMessage();

  const topics = [
    {
      key: 'build-atom',
      label: 'Build an Atom',
      tabs: [
        {
          label: 'Concept',
          icon: <BookOpen className="mr-2 h-5 w-5" />,
          content: <BuildAtom />
        },
        {
          label: 'Simulator',
          icon: <Beaker className="mr-2 h-5 w-5" />,
          content: <AtomSimulator />
        },
        {
          label: 'Doubts',
          icon: <span className="mr-2 h-5 w-5">🤖</span>,
          content: <Doubts/>
        },
        {
          label: 'Homework',
          icon: <FileText className="mr-2 h-5 w-5" />,
          content: <Homework />
        },
        {
          label: 'Quiz',
          icon: <BookOpen className="mr-2 h-5 w-5" />,
          content: <AtomQuiz />
        },
      ]
    },
    {
      key: 'balance-chem',
      label: 'Balance Chem Equation',
      tabs: [
        {
          label: 'Concept',
          icon: <BookOpen className="mr-2 h-5 w-5" />,
          content: <Sample  />
        },
        {
          label: 'Simulator',
          icon: <Beaker className="mr-2 h-5 w-5" />,
          content: <SimulatorTab />
        },
        {
          label: 'Doubts',
          icon: <span className="mr-2 h-5 w-5">🤖</span>,
          content: <Doubts/>
        },
        {
          label: 'Homework',
          icon: <FileText className="mr-2 h-5 w-5" />,
          content: <Homework />
        },
        {
          label: 'Quiz',
          icon: <BookOpen className="mr-2 h-5 w-5" />,
          content: <ChemQuiz />
        }
      ]
    },
    {
      key: 'wave-string',
      label: 'Wave on a String, Forces and Motion: Basics',
      tabs: [
        {
          label: 'Concept',
          icon: <BookOpen className="mr-2 h-5 w-5" />,
          content: <Sample />
        },
        {
          label: 'Simulator',
          icon: <Beaker className="mr-2 h-5 w-5" />,
          content: <SimulatorTab  />
        },
        {
          label: 'Doubts',
          icon: <span className="mr-2 h-5 w-5">🤖</span>,
          content: <Doubts/>
        },
        {
          label: 'Homework',
          icon: <FileText className="mr-2 h-5 w-5" />,
          content: <Homework />
        },
        {
          label: 'Quiz',
          icon: <BookOpen className="mr-2 h-5 w-5" />,
          content: <WavesQuiz  />
        }
      ]
    }
  ];

  // Find the selected topic object
  const selected = topics.find(t => t.key === selectedTopic);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 md:px-6 lg:px-8">
        {!showTabs ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl font-bold mb-6">Learn a Sample Topic</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
              {topics.map(topic => (
                <button
                  key={topic.key}
                  className="px-6 py-4 bg-white rounded-lg shadow hover:bg-blue-100 border border-gray-200 text-lg font-semibold transition"
                  onClick={() => { setShowTabs(true); setSelectedTopic(topic.key); setActiveTab(0); }}
                >
                  {topic.label}
                </button>
              ))}
            </div>
          </div>
        ) : selected ? (
          <>
            <button
              className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
              onClick={() => { setShowTabs(false); setSelectedTopic(null); }}
            >
              ← Back to Topics
            </button>
            <TabNavigation
              tabs={selected.tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
            <div className="mt-6 bg-white rounded-lg shadow-sm p-4 md:p-6">
              {selected.tabs[activeTab].content}
            </div>
          </>
        ) : null}
      </main>
      {/* <Doubts/> */}
    </div>
  );
}

export default App;