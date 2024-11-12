import { useState, useEffect } from 'react';

const Terminal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // Terminal visibility
  const [command, setCommand] = useState(''); // Command input
  const [output, setOutput] = useState<{ command: string; result: string }[]>([]); // Command history with results
  const [isBotMode, setIsBotMode] = useState(false); 
  // Adjusted ASCII art with escaping and indentation preserved
  const asciiArt = `
                                                -----
                                              /      \\
                                              )      |
       :================:                      "    )/
      /||              ||                      )_ /*
     / ||    System    ||                          *
    |  ||     Down     ||                   (=====~*~======)
     \\ ||              ||                  0      \\ /       0
       ==================                //   (====*====)   ||
........... /      \\.............       //         *         ||
:\\        ############            \\    ||    (=====*======)  ||
: ---------------------------------     V          *          V
: |  *   |__________|| ::::::::::  |    o   (======*=======) o
\\ |      |          ||   .......   |    \\\\         *         ||
  --------------------------------- 8   ||   (=====*======)  //
                                     8   V         *         V
  --------------------------------- 8   =|=;  (==/ * \\==)   =|=
  \\   ###########################  \\   / ! \\     _ * __    / | \\
   \\  +++++++++++++++++++++++++++   \\  ! !  !  (__/ \\__)  !  !  !
    \\ ++++++++++++++++++++++++++++   \\        0 \\ \\V/ / 0
     \\________________________________\\     ()   \\o o/   ()
      *********************************     ()           ()
         by -Targon (Ed Wisniewski)-
      `;

  // Toggle terminal on 'Esc' key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVisible(!isVisible); // Toggle visibility
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  // Handle commands when the user hits Enter
  const handleCommand = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const trimmedCommand = command.trim().toLowerCase();
      
      if (isBotMode) {
        // const botResponse = await fetchBotResponse(trimmedCommand); // Send command to bot
        // setOutput([...output, { command: trimmedCommand, result: botResponse }]);
      } else {
        const result = processCommand(trimmedCommand);
        if (trimmedCommand !== 'cls') { // Don't add 'cls' to the output history
          setOutput([...output, { command: trimmedCommand, result }]);
        }
      }

      setCommand(''); // Clear the input
    }
  };

  // Process the input commands and return result
  const processCommand = (cmd: string): string => {
    switch (cmd) {
      case 'help':
        return 'Available commands: help, project, workexp, cls, bot';
      case 'project':
        return 'Project information: ...';
      case 'workexp':
        return 'Work experience: ...';
      case 'cls':
        setOutput([]); // Clear the command history
        return ''; // Return empty result for 'cls' to avoid display
      case 'bot':
        setIsBotMode(true);
        return 'Entering bot mode. Type "exit" to return to normal mode.';
      case 'exit':
        setIsBotMode(false);
        return 'Exiting bot mode.';
      default:
        return `Unknown command: ${cmd}`;
    }
  };

  // Function to fetch the Dialogflow bot's response
  // const fetchBotResponse = async (userMessage) => {
  //   try {
  //     const response = await fetch('/api/dialogflow', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ message: userMessage }),
  //     });
  //     const data = await response.json();
  //     return data.reply;
  //   } catch (error) {
  //     console.error('Error fetching bot response:', error);
  //     return 'Failed to connect to the bot.';
  //   }
  // };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-90 text-white ${isVisible ? 'block' : 'hidden'} z-50`}>
      <div className="flex">
        {/* Left half for ASCII art */}
        <div className="w-1/2 font-mono text-gray-300 whitespace-pre-wrap"> 
          <p>{asciiArt}</p>
        </div>

        {/* Right half for command output and input */}
        <div className="w-1/2 p-4 font-mono"> 
          {/* Display command output */}
          <span className='text-yellow-300'>Stop It, Get Some 'help'</span>
          {output.map((entry, index) => (
            <div key={index}>
              {entry.command ? (
                <>
                  <span className="text-green-400">Guest@Mac</span>:<span className="text-blue-400">~$</span> {entry.command}
                  <p className="ml-10 text-sm text-gray-300 whitespace-pre-line">{entry.result}</p>
                </>
              ) : (
                <p className="text-sm text-gray-300 whitespace-pre">{entry.result}</p>
              )}
            </div>
          ))}

          {/* Command input */}
          <div className="flex ">
            <span className="text-green-400">Guest@Mac</span>:<span className="text-blue-400">~$</span>
            <input
              type="text"
              className="ml-2 bg-transparent outline-none text-white flex-grow"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
  