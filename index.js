//This Dictionary Consists Of All Words That Are Useable In Wordle Project
const dictionary = ['earth', 'plane', 'crane', 'audio', 'house',
                    'offer', 'often', 'burnt','cigar', 'rebut', 'sissy', 'humph', 'awake', 'blush', 'focal', 'evade', 'naval', 'serve', 'heath', 'dwarf', 'model', 'karma', 'stink', 'grade', 'quiet', 'bench', 'abate', 'feign', 'major', 'death', 'fresh', 'crust', 'stool', 'colon', 'abase', 'marry', 'react', 'batty', 'pride', 'floss', 'helix', 'croak', 'staff', 'paper', 'unfed', 'whelp', 'trawl', 'outdo', 'adobe', 'crazy', 'sower', 'repay', 'digit', 'crate', 'cluck', 'spike', 'mimic', 'pound', 'maxim', 'linen', 'unmet', 'flesh', 'booby', 'forth', 'first', 'stand', 'belly', 'ivory', 'seedy', 'print', 'yearn', 'drain', 'bribe', 'stout', 'panel', 'crass', 'flume', 'offal', 'agree', 'error', 'swirl', 'argue', 'bleed', 'delta', 'flick', 'totem', 'wooer', 'front', 'shrub', 'parry', 'biome', 'lapel', 'start', 'greet', 'goner', 'golem', 'lusty', 'loopy', 'round', 'audit', 'lying', 'gamma', 'labor', 'islet', 'civic', 'forge', 'corny', 'moult', 'basic',
                    'salad', 'agate', 'spicy', 'spray', 'essay', 'fjord', 'spend', 'kebab', 'guild', 'aback', 'motor', 'alone', 'hatch', 'hyper', 'thumb', 'dowry', 'ought', 'belch', 'dutch', 'pilot', 'tweed', 'comet', 'jaunt', 'enema', 'steed', 'abyss', 'growl', 'fling', 'dozen', 'boozy', 'erode', 'world', 'gouge', 'click', 'briar', 'great', 'altar', 'pulpy', 'blurt', 'coast', 'duchy', 'groin', 'fixer', 'group', 'rogue', 'badly', 'smart', 'pithy', 'gaudy', 'chill', 'heron', 'vodka', 'finer', 'surer', 'radio', 'rouge', 'perch', 'retch', 'wrote', 'clock', 'tilde', 'store', 'prove', 'bring', 'solve', 'cheat', 'grime', 'exult', 'usher', 'epoch', 'triad', 'break', 'rhino', 'viral', 'conic', 'masse', 'sonic', 'vital', 'trace', 'using', 'peach', 'champ', 'baton', 'brake', 'pluck', 'craze', 'gripe', 'weary', 'picky', 'acute', 'ferry', 'aside', 'tapir', 'troll', 'unify', 'rebus', 'boost', 'truss', 'siege', 'tiger', 'banal', 'slump', 'crank', 'gorge', 'query', 'drink', 'favor', 'abbey', 'tangy', 'panic', 'solar', 'shire', 'proxy', 
                    'point', 'robot', 'prick', 'wince', 'crimp', 'knoll', 'sugar', 'whack', 'mount', 'perky', 'could', 'wrung', 'light', 'those', 'moist', 'shard', 'pleat', 'aloft', 'skill', 'elder', 'frame', 'humor', 'pause', 'ulcer', 'ultra', 'robin', 'cynic', 'aroma', 'caulk', 'shake', 'dodge', 'swill', 'tacit', 'other', 'thorn', 'trove', 'bloke', 'vivid', 'spill', 'chant', 'choke', 'rupee', 'nasty', 'mourn', 'ahead', 'brine', 'cloth', 'hoard', 'sweet', 'month', 'lapse', 'watch', 'today', 'focus', 'smelt', 'tease', 'cater', 'movie', 'saute', 'allow', 'renew', 'their', 'slosh', 'purge', 'chest', 'depot', 'epoxy', 'nymph', 'found', 'shall', 'stove', 'lowly', 'snout', 'trope', 'fewer', 'shawl', 'natal', 'comma', 'foray', 'scare', 'stair', 'black', 'squad', 'royal', 'chunk', 'mince', 'shame', 'cheek', 'ample', 'flair', 'foyer', 'cargo', 'oxide', 'plant', 'olive', 'inert', 'askew', 'heist', 'shown', 'zesty', 'trash', 'larva', 'forgo', 'story', 'hairy', 'train', 'homer', 'badge', 'midst', 'canny', 'shine', 'gecko', 'farce', 'slung', 'tipsy', 'metal', 'yield', 'delve', 'being', 'scour', 'glass', 'gamer', 'scrap', 'money', 'hinge', 'album', 'vouch', 'asset', 'tiara', 'crept', 'bayou', 'atoll', 'manor', 'creak', 'showy', 'phase', 'froth', 'depth', 'gloom', 'flood', 'trait', 'girth', 'piety', 'goose', 'float', 'donor', 'atone', 'primo', 'apron', 'blown', 'cacao', 'loser', 'input', 'gloat', 'awful', 'brink', 'smite', 'beady', 'rusty', 'retro', 'droll', 'gawky', 'hutch', 'pinto', 'egret', 'lilac', 'sever', 'field', 'fluff', 'agape', 'voice', 'stead', 'berth', 'madam', 'night', 'bland', 'liver', 'wedge', 'roomy', 'wacky', 'flock', 'angry', 'trite', 'aphid', 
                    'tryst', 'midge', 'power', 'elope', 'cinch', 'motto', 'stomp', 'upset', 'bluff', 'cramp', 'quart', 'coyly', 'youth', 'rhyme', 'buggy', 'alien', 'smear', 'unfit', 'patty', 'cling', 'glean', 'label', 'hunky', 'khaki', 'poker', 'gruel', 'twice', 'twang', 'shrug', 'treat', 'waste', 'merit', 'woven', 'needy', 'clown', 'irony', 'ruder', 'gauze', 'chief', 'onset', 'prize', 'fungi', 'charm', 'gully', 'inter', 'whoop', 'taunt', 'leery', 'class', 'theme', 'lofty', 'tibia', 'booze', 'alpha', 'thyme', 'doubt', 'parer', 'chute', 'stick', 'trice', 'alike', 'recap', 'saint', 'glory', 'grate', 'admit', 'brisk', 'soggy', 'usurp', 'scald', 'scorn', 'leave', 'twine', 'sting', 'bough', 'marsh', 'sloth', 'dandy', 'vigor', 'howdy', 'enjoy', 'valid', 'ionic', 'equal', 'floor', 'catch', 'spade', 'stein', 'exist', 'quirk', 'denim', 'grove', 'spiel', 'mummy', 'fault', 'foggy', 'flout', 'carry', 
                    'sneak', 'libel', 'waltz', 'aptly', 'piney', 'inept', 'aloud', 'photo', 'dream', 'stale', 'unite', 'snarl', 'baker', 'there', 'glyph', 'pooch', 'hippy', 'spell', 'folly', 'louse', 'gulch', 'vault', 'godly', 'threw', 'fleet', 'grave', 'inane', 'shock', 'crave', 'spite', 'valve', 'skimp', 'claim', 'rainy', 'musty', 'pique', 'daddy', 'quasi', 'arise', 'aging', 'valet', 'opium', 'avert', 'stuck', 'recut', 'mulch', 'genre', 'plume', 'rifle', 'count', 'incur', 
                    'total', 'wrestgrabvgr', 'mocha', 'deter', 'study', 'lover', 'safer', 'rivet', 'funny', 'smoke', 'mound', 'undue', 'sedan', 'pagan', 'swine', 'guile', 'gusty', 'equip', 'tough', 'canoe', 'chaos', 'covet', 'human', 'udder', 'lunch', 'blast', 'stray', 'manga', 'melee', 'lefty', 'quick', 'paste', 'given', 'octet', 'risen', 'groan', 'leaky', 'grind', 'carve', 'loose', 'sadly', 'spilt', 'apple', 'slack', 'honey', 'final', 'sheen', 'eerie', 'minty', 'slick', 'derby', 'wharf', 'spelt', 'coach', 'erupt', 'singe', 'price', 'spawn', 'fairy', 'jiffy', 'filmy', 'stack', 'chose', 'sleep', 'ardor', 'nanny', 'niece', 'woozy', 'handy', 'grace', 'ditto', 'stank', 'cream', 'usual', 'diode', 'valor', 'angle', 'ninja', 'muddy', 'chase', 'reply', 'prone', 'spoil', 'heart', 'shade', 'diner', 'arson', 'onion', 'sleet', 'dowel', 'couch', 'palsy', 'bowel', 'smile', 'evoke', 'creek', 'lance', 'eagle', 'idiot', 'siren', 'built', 'embed', 'award', 'dross', 'annul', 'goody', 'frown', 'patio', 'laden', 'humid', 'elite', 'lymph', 'edify', 'might', 'reset', 'visit', 'gusto', 'purse', 'vapor', 'crock', 'write', 'sunny', 'loath', 'chaff', 'slide', 'queer', 'venom', 'stamp', 'sorry', 'still', 'acorn', 'aping', 'pushy', 'tamer', 'hater', 'mania', 'awoke', 'brawn', 'swift', 'exile', 'birch', 'lucky', 'freer', 'risky', 'ghost', 'plier', 'lunar', 'winch', 'snare', 'nurse', 'house', 'borax', 'nicer', 'lurch', 'exalt', 'about', 'savvy', 'toxin', 'tunic', 'pried', 'inlay', 
                    'chump', 'lanky', 'cress', 'eater', 'elude', 'cycle', 'kitty', 'boule', 'moron', 'tenet', 'place', 'lobby', 'plush', 'vigil', 'index', 'blink', 'clung', 'qualm', 'croup', 'clink', 'juicy', 'stage', 'decay', 'nerve', 'flier', 'shaft', 'crook', 'clean', 'china', 'ridge', 'vowel', 'gnome', 'snuck', 'icing', 'spiny', 'rigor', 'snail', 'flown', 'rabid', 'prose', 'thank', 'poppy', 'budge', 'fiber', 'moldy', 'dowdy', 'kneel', 'track', 'caddy', 'quell', 'dumpy', 'paler', 'swore', 'rebar', 'scuba', 'splat', 'flyer', 'horny', 'mason', 'doing', 'ozone', 'amply', 'molar', 'ovary', 'beset', 'queue', 'cliff', 'magic', 'truce', 'sport', 'fritz', 'edict', 'twirl', 'verse', 'llama', 'eaten', 'range', 'whisk', 'hovel', 'rehab', 'macaw', 'sigma', 'spout', 'verve', 'sushi', 'dying', 'fetid', 'brain', 'buddy', 'thump', 'scion', 'candy', 'chord', 'basin', 'march', 'crowd', 'arbor', 'gayly', 'musky', 
                    'stain', 'dally', 'bless', 'bravo', 'stung', 'title', 'ruler', 'kiosk', 'blond', 'ennui', 'layer', 'fluid', 'tatty', 'score', 'cutie', 'zebra', 'barge', 'matey', 'bluer', 'aider', 'shook', 'river', 'privy', 'betel', 'frisk', 'bongo', 'begun', 'azure', 'weave', 'genie', 'sound', 'glove', 'braid', 'scope', 'wryly', 'rover', 'assay', 'ocean', 'bloom', 'irate', 'later', 'woken', 'silky', 'wreck', 'dwelt', 'slate', 'smack', 'solid', 'amaze', 'hazel', 'wrist', 'jolly', 'globe', 'flint', 'rouse', 'civil', 'vista', 'relax', 'cover', 'alive', 'beech', 'jetty', 'bliss', 'vocal', 'often', 'dolly', 'eight', 'joker', 'since', 'event', 'ensue', 'shunt', 'diver', 'poser', 'worst', 'sweep', 'alley', 'creed', 'anime', 'leafy', 'bosom', 'dunce', 'stare', 'pudgy', 'waive', 'choir', 'stood', 'spoke', 'outgo', 'delay', 'bilge', 'ideal', 'clasp', 'seize', 'hotly', 'laugh', 'sieve', 'block', 'meant', 'grape', 'noose', 'hardy', 'shied', 'drawl', 'daisy', 'putty', 'strut', 'burnt', 'tulip', 'crick', 'idyll', 'vixen', 'furor', 'geeky', 'cough', 'naive', 'shoal', 'stork', 'bathe', 'aunty', 'check', 'prime', 'brass', 'outer', 'furry', 'razor', 'elect', 'evict', 'imply', 'demur', 'quota', 'haven', 'cavil', 'swear', 'crump', 'dough', 'gavel', 'wagon', 'salon', 'nudge', 'harem', 'pitch', 'sworn', 'pupil', 'excel', 'stony', 'cabin', 'unzip', 'queen', 'trout', 
                    'polyp', 'earth', 'storm', 'until', 'taper', 'enter', 'child', 'adopt', 'minor', 'fatty', 'husky', 'brave', 'filet', 'slime', 'glint', 'tread', 'steal', 'regal', 'guest', 'every', 'murky', 'share', 'spore', 'hoist', 'buxom', 'inner', 'otter', 'dimly', 'level', 'sumac', 'donut', 'stilt', 'arena', 'sheet', 'scrub', 'fancy', 'slimy', 'pearl', 'silly', 'porch', 'dingo', 'sepia', 'amble', 'shady', 'bread', 'friar', 'reign', 'dairy', 'quill', 'cross', 'brood', 'tuber', 'shear', 'posit', 'blank', 'villa', 'shank', 'piggy', 'freak', 'which', 'among', 'fecal', 'shell', 'would', 'algae', 'large', 'rabbi', 'agony', 'amuse', 'bushy', 'copse', 'swoon', 'knife', 'pouch', 'ascot', 'plane', 'crown', 'urban', 'snide', 'relay', 'abide', 'viola', 'rajah', 'straw', 'dilly', 'crash', 'amass', 'third', 'trick', 'tutor', 'woody', 'blurb', 'grief', 'disco', 'where', 'sassy', 'beach', 'sauna', 'comic', 'clued', 'creep', 'caste', 'graze', 'snuff', 'frock', 'gonad', 'drunk', 'prong', 'lurid', 'steel', 'halve', 'buyer', 'vinyl', 'utile', 'smell', 'adage', 'worry', 'tasty', 'local', 'trade', 'finch', 'ashen', 'modal', 'gaunt', 'clove', 'enact', 'adorn', 'roast', 'speck', 'sheik', 'missy', 'grunt', 'snoop', 'party', 'touch', 'mafia', 'emcee', 
                    'state'];
const state = {
    secret: dictionary[Math.floor(Math.random() * dictionary.length)],
    grid: Array(6)
        .fill()
        .map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
};

//Sets Up The Wordle Grid Front End To The Backend
function userWordleBoard(input) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            inputBoxes(grid, i, j);
        }
    }

    input.appendChild(grid);
}

//Updates The Letters Within The Grid
function updateLetters() {
    for (let i = 0; i < state.grid.length; i++) {
        for (let j = 0; j < state.grid[i].length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];
        }
    }
}

function inputBoxes(container, row, col, letter = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = letter;
    box.id = `box${row}${col}`;

    container.appendChild(box);
    return box;
}

function keyEvents() {
    document.body.onkeydown = (e) => {
        const key = e.key;
        if (key === 'Enter') {
            if (state.currentCol === 5) {
                const userWord = getCurrentWord();
                if (validWordCheck(userWord)) {
                    showCorrectWord(userWord);
                    state.currentRow++;
                    state.currentCol = 0;
                } else {
                    alert('Not a valid userWord.');
                }
            }
        }
        if (key === 'Backspace') {
            deleteLetter();
        }
        if (isLetter(key)) {
            addLetter(key);
        }

        updateLetters();
    };
}

//Return The CurrentWord
function getCurrentWord() {
    return state.grid[state.currentRow].reduce((prev, curr) => prev + curr);
}

//Checks If Word Is Within Dictionary
function validWordCheck(userWord) {
    return dictionary.includes(userWord);
}

//Returns Num Of Repeated Letters Within Word
function numOfRepeatedLetInWord(userWord, letter) {
    let result = 0;
    for (let i = 0; i < userWord.length; i++) {
        if (userWord[i] === letter) {
            result++;
        }
    }
    return result;
}

//Returns Num Position of Repeated Letter
function posOfRepeatedLetter(userWord, letter, position) {
    let result = 0;
    for (let i = 0; i <= position; i++) {
        if (userWord[i] === letter) {
            result++;
        }
    }
    return result;
}

//Shows Correct Word
function showCorrectWord(guess) {
    const row = state.currentRow;
    const animation_duration = 500; // ms

    for (let i = 0; i < 5; i++) {
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent;
        const numOfOccurrencesSecret = numOfRepeatedLetInWord(
            state.secret,
            letter
        );
        const numOfOccurrencesGuess = numOfRepeatedLetInWord(guess, letter);
        const letterPosition = posOfRepeatedLetter(guess, letter, i);

        setTimeout(() => {
            if (
                numOfOccurrencesGuess > numOfOccurrencesSecret &&
                letterPosition > numOfOccurrencesSecret
            ) {
                box.classList.add('empty');
            } else {
                if (letter === state.secret[i]) {
                    box.classList.add('right');
                } else if (state.secret.includes(letter)) {
                    box.classList.add('wrong');
                } else {
                    box.classList.add('empty');
                }
            }
        }, ((i + 1) * animation_duration) / 2);

        box.classList.add('animated');
        box.style.animationDelay = `${(i * animation_duration) / 2}ms`;
    }

    const isWinner = state.secret === guess;
    const isGameOver = state.currentRow === 5;

    setTimeout(() => {
        if (isWinner) {
            alert('Congratulations!');
        } else if (isGameOver) {
            alert(`Better luck next time! The userWord was ${state.secret}.`);
        }
    }, 3 * animation_duration);
}

function isLetter(key) {
    return key.length === 1 && key.match(/[a-z]/i);
}

//Adds Letter
function addLetter(letter) {
    if (state.currentCol === 5) return;
    state.grid[state.currentRow][state.currentCol] = letter;
    state.currentCol++;
}

//Deletes Letter
function deleteLetter() {
    if (state.currentCol === 0) return;
    state.grid[state.currentRow][state.currentCol - 1] = '';
    state.currentCol--;
}

function startup() {
    const game = document.getElementById('game');
    userWordleBoard(game);

    keyEvents();
}

startup();