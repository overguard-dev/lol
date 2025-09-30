function Sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
}

const Skills = ["Graphic Designer", "Software Developer", "UI/UX Designer"];
const Element = document.getElementById("subtext");

let CurrentPhraseIndex = 0;

const WriteLoop = async() => {
        while (true) {
                let CurrentWord = Skills[CurrentPhraseIndex];

                for (let i = 0; i < CurrentWord.length; i++) {
                        Element.innerText = CurrentWord.substring(0, i + 1);
                        await Sleep(75);
                }

                await Sleep(750);

                for (let i = CurrentWord.length; i > 0; i--) {
                        Element.innerText = CurrentWord.substring(0, i - 1);
                        await Sleep(75);
                }

                await Sleep(750);

                if (CurrentPhraseIndex === Skills.length - 1) {
                        CurrentPhraseIndex = 0;
                } else {
                        CurrentPhraseIndex++;
                }
        }
}

WriteLoop();
