const loading = document.getElementById("loading");
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const terminal = document.getElementById('terminal');

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

window.onload = function() {
    terminalInput.focus();
  };

setTimeout(() => {
    loading.style.display = "none";
}, 3000);

function printOutput(output) {
    terminalOutput.innerHTML += output + '\n';
    terminal.scrollTop = terminalOutput.scrollHeight;
}

function openGui() {
    window.location.href = 'gui.html';
}


function processCommand(command) {
    switch (command.toLowerCase()) {
        case 'help':
            printOutput('List of available commands:');
            printOutput('help           Display this help message');
            printOutput('clear          Clear the terminal output');
            printOutput('socials        My presence on social media');
            printOutput('projects       List my projects');
            printOutput('certificates   List my certifications');
            printOutput('skills         List my skills');
            printOutput('gui            I\'m a silly goofball and I want a GUI');
            break;
        case 'clear':
            terminalOutput.innerHTML = ``; + '\n';
            break;
        case 'socials':
            printOutput('<a href="https://github.com/GikitSRC">GitHub</a>       My GitHub profile.');
            printOutput('<a href="https://twitter.com/ACompleteNewb">Twitter</a>      My Twitter profile.');
            printOutput('39hd         My Discord username.');
            break;
        case 'projects':
            printOutput('<a href="https://thriveos.pages.dev">ThriveOS</a>     A Web-based Operating System.');
            printOutput('<a href="https://github.com/GikitSRC/rabbitt">Rabbitt</a>      An AI that acts on Websites on your behalf.');
            printOutput('<a href="https://github.com/GikitSRC/browserdesk.js">browserdesk</a>  A Javascript framework for a static web windowing environment.');
            printOutput('<a href="https://github.com/GikitSRC/kindler">kindler</a>      A webapp for Kindle Paperwhites; with notes, games, calculator, and more.');
            printOutput('<a href="https://github.com/GikitSRC/LTC-Verifier">LTC-Verifier</a>  A POC PHP project for verifying Litecoin blockchain transactions.');
            break;
        case 'certificates':
            printOutput('<a href="https://www.freecodecamp.org/certification/ChainedTears/responsive-web-design">FreeCodeCamp - Responsive Web Design</a>');
            printOutput('<a href="https://www.hackerrank.com/certificates/22b2e161586c">HackerRank - CSS Basics</a>');
            break;
        case 'skills':
            printOutput('HTML        Advanced');
            printOutput('Javascript  Intermediate');
            printOutput('PHP         Intermediate');
            printOutput('Linux       Intermediate');
            printOutput('Python      Beginner');
            break;
        case 'gui':
            openGui();
            break;
        default:
            printOutput('Uh oh! I don\'t know that command. Try typing help for a list of commands.');
            break;
    }
}

terminalInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const command = terminalInput.value.trim();
        printOutput('> ' + command);
        processCommand(command);
        terminalInput.value = '';
    }
});

options = {
    "cursorOuter": "circle",
    "hoverEffect": "circle-move",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
      };
    magicMouse(options);
