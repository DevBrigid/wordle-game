import '../App.css';

function GuessLine({ guess, isFinal, solution }) {

    return (
        <div className='line'>
            {guess.split('').map((letter, index) => {
                let className = 'tile';

                if(isFinal){
                    if(letter === solution[index]){
                        className += ' correct';
                    }
                    else if(solution.includes(letter)){
                       className += " close";
                    }
                    else if(letter !== solution[index]){
                        className += ' incorrect';
                    }
                }
                return <div className={className} key={index}>{letter.toUpperCase()}</div>;
            })}
            
        </div>
    )
}
export default GuessLine;