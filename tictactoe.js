const cells = document.querySelectorAll('.input');
        const alphaX = document.getElementById('alpha-x');
        const alphaO = document.getElementById('alpha-o');

        let currentPlayer = 'X';
        let gameActive = true;

        function handleCellClick(event) {
            const cell = event.target;
            if (!cell.value && gameActive) {
                cell.value = currentPlayer;
                togglePlayer();
                checkWin();
            }
        }

        function togglePlayer() {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }

        function checkWin() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7],[2, 5, 8], [0, 4, 8], [2, 4, 6]            
            ];

            for (const pattern of winPatterns) {
                const [a, b, c] = pattern;
                if (
                    cells[a].value &&
                    cells[a].value === cells[b].value &&
                    cells[a].value === cells[c].value
                ) {
                    gameActive = false;
                    setTimeout(function () {()=> alert(`Player ${currentPlayer} Loss!`), function() {location.reload();} }, 1000);
                    return;
                }
            }

            if (!Array.from(cells).some(cell => cell.value === '') && gameActive) {
                gameActive = false;
                setTimeout(() => alert("It's a draw!"), 100);
                setTimeout(function() {location.reload();}, 5000);
                
            }
        }

        cells.forEach(cell => {
            cell.addEventListener('click', handleCellClick);
        });

        alphaX.addEventListener('click', () => {
            if (gameActive) {
                currentPlayer = 'X';
            }
        });

        alphaO.addEventListener('click', () => {
            if (gameActive) {
                currentPlayer = 'O';
            }
        });
